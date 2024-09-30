<template>
  <sp-trigger ref="triggerNode" :class="ns.e('trigger')" v-on="events">
    <slot name="reference" />
  </sp-trigger>

  <Teleport to="body">
    <transition :name="transition">
      <div
        v-if="show"
        ref="popperNode"
        :class="[ns.e('popper'), ns.is('dark', effect === 'dark')]"
        :style="popperStyle"
        v-on="propperEvents"
      >
        <slot>{{ content }}</slot>
        <div
          v-if="showArrow"
          ref="arrowNode"
          :style="arrowStyle"
          :class="[ns.e('arrow'), ns.em('arrow', realPopperPlacement)]"
        />
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, unref, watch } from 'vue'
import { flip, offset, shift } from '@floating-ui/dom'
import { onClickOutside } from '@vueuse/core'
import {
  arrowMiddleware,
  useNamespace,
  usePopper,
  useZIndex,
} from '@spicomps/hooks'
import SpTrigger from './trigger'
import { popoverEmits, popoverProps } from './types'
import type { CSSProperties } from 'vue'
import type { Middleware } from '@floating-ui/dom'

defineOptions({ name: 'SpPopover' })

const ns = useNamespace('popover')

const props = defineProps(popoverProps)
const emit = defineEmits(popoverEmits)

/**
 * 弹窗相关逻辑
 */
const arrowNode = ref<HTMLElement>()
const placement = ref(props.placement)
const strategy = ref(props.strategy)
const { currentZIndex, nextZIndex } = useZIndex()
const middlewareComputed = computed(() => {
  const middleware: Middleware[] = [
    offset(props.offset),
    flip(),
    shift({ padding: 5 }),
  ]

  if (props.showArrow) {
    middleware.push(
      arrowMiddleware({
        arrowRef: arrowNode,
      })
    )
  }

  return middleware
})
const {
  popperNode,
  triggerNode,
  middlewareData,
  x,
  y,
  createPopper,
  popperPlacement,
  popperUpdate,
} = usePopper({
  placement,
  strategy,
  middleware: middlewareComputed,
})
// 实际popper位置
const realPopperPlacement = computed(() => {
  return popperPlacement.value.split('-')[0]
})
// 设置弹窗样式
const popperStyle = computed<CSSProperties>(() => {
  const zIndex =
    !props.zIndex && props.zIndex !== 0 ? currentZIndex.value : props.zIndex
  return {
    position: strategy.value,
    left: `${x.value}px`,
    top: `${y.value}px`,
    maxWidth:
      typeof props.maxWidth === 'number'
        ? `${props.maxWidth}px`
        : props.maxWidth,
    minWidth:
      typeof props.minWidth === 'number'
        ? `${props.minWidth}px`
        : props.minWidth,
    width: typeof props.width === 'number' ? `${props.width}px` : props.width,
    zIndex,
  }
})
// 设置图标样式
const arrowStyle = computed<CSSProperties>(() => {
  if (!props.showArrow) return {}

  const { arrow } = unref(middlewareData)

  return {
    left: `${arrow?.x}px` || '',
    top: `${arrow?.y}px` || '',
  }
})

/**
 * 打开和关闭，添加防抖
 */
const show = ref(false)
let cleanup: (() => void) | undefined
watch(
  show,
  async (newVal) => {
    if (newVal) {
      await nextTick()
      emit('before-enter')
      if (!props.zIndex && props.zIndex !== 0) {
        nextZIndex()
      }
      createPopper()
      if (props.autoUpdate) {
        if (typeof props.autoUpdate === 'boolean') {
          cleanup = popperUpdate()
        } else {
          cleanup = popperUpdate(props.autoUpdate)
        }
      }
      emit('after-enter')
    } else {
      cleanup?.()
    }
  },
  { flush: 'post', immediate: true }
)
let closeTimer: NodeJS.Timeout | undefined
let openTimer: NodeJS.Timeout | undefined
function openPopper() {
  if (props.visible === false) return
  if (props.disabled) return

  if (closeTimer) clearTimeout(closeTimer)

  openTimer = setTimeout(() => {
    show.value = true
    emit('update:visible', show.value)
  }, props.openDelay)
}
function closePopper() {
  if (props.visible === true) return
  if (openTimer) clearTimeout(openTimer)

  closeTimer = setTimeout(() => {
    emit('before-leave')
    show.value = false
    emit('update:visible', show.value)
    emit('after-leave')
  }, props.closeDelay)
}
function togglePopper() {
  if (show.value) {
    closePopper()
  } else {
    openPopper()
  }
}

watch(
  () => props.visible,
  (newVal, oldVal) => {
    if (newVal) {
      openPopper()
    } else if (oldVal) {
      closePopper()
    }
  },
  { immediate: true }
)

/**
 * 触发方式
 */
let events: Record<string, any> = {}
let propperEvents: Record<string, any> = {}
function attentEvent() {
  if (props.disabled) return
  switch (props.trigger) {
    case 'hover':
      events = {
        mouseenter: openPopper,
        mouseleave: closePopper,
      }
      propperEvents = {
        mouseenter: openPopper,
        mouseleave: closePopper,
      }
      break
    case 'click':
      events = {
        click: togglePopper,
      }
      propperEvents = {
        click: openPopper,
      }
      break
  }
}
watch(
  () => props.trigger,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      attentEvent()
    }
  },
  { immediate: true }
)
onClickOutside(triggerNode, (event) => {
  if (
    popperNode.value &&
    event.target &&
    !popperNode.value.contains(event.target as Node)
  ) {
    emit('clickoutside')
  }

  if (props.trigger === 'click' && show.value) {
    closePopper()
  }
})

defineExpose({
  show: openPopper,
  hide: closePopper,
})
</script>
