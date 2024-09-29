<template>
  <div
    ref="elipsisWrapper"
    :class="classList"
    :style="{ 'line-height': props.lineHeight }"
  >
    <span ref="textWrap">
      <span v-if="slots.prefix" ref="prefixRef" :class="ns.e('prefix')">
        <slot name="prefix" :elipsis="isClamped" :is-over="isOver" />
      </span>
      <span ref="textRef" :aria-label="props.text.trim()" v-html="showText" />
      <span v-if="slots.suffix" ref="suffixRef" :class="ns.e('suffix')">
        <slot name="suffix" :elipsis="isClamped" :is-over="isOver" />
      </span>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useElementSize } from '@vueuse/core'
import { useNamespace } from '@spicomps/hooks'
import { computeStyle } from '@spicomps/utils'
import { elipsisEmits, elipsisProps } from './types'
import { useTextElipsis } from './use-elipsis'

defineOptions({
  name: 'SpElipsis',
  inheritAttrs: false,
})

const ns = useNamespace('elipsis')
const classList = computed(() => [ns.b(), ns.is('elipsis', props.elipsis)])

const props = defineProps(elipsisProps)
const emit = defineEmits(elipsisEmits)
const slots = defineSlots()

const elipsisWrapper = ref()

// 当存在插槽且缺少 lineHeight 时，发出警告
// 否则无法计算文字高度
onMounted(() => {
  if (!props.lineHeight && (slots.suffix || slots.prefix)) {
    const lineHeight = computeStyle(elipsisWrapper.value, 'line-height')
    if (lineHeight === 'normal') {
      // eslint-disable-next-line no-console
      console.error(
        '[SpElipsis] lineHeight is required when using suffix or prefix'
      )
    }
  }
})

/**
 * 元素大小发生改变，重新渲染
 */

const { width } = useElementSize(elipsisWrapper)
watch(width, () => {
  update()
})

// 字符截断核心逻辑
const {
  textWrap,
  textRef,
  prefixRef,
  suffixRef,
  showText,
  isClamped,
  isOver,
  update,
} = useTextElipsis(props, width)

// 是否收缩发生变化，重新渲染
// 文字内容发生变化，重新渲染
watch(
  [
    () => props.elipsis,
    () => props.text,
    () => props.maxLines,
    () => props.position,
  ],
  () => update()
)

watch(isClamped, () => {
  emit('update:elipsis', isClamped.value)
})
</script>
