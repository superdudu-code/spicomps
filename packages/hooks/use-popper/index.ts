import { ref, unref } from 'vue'
import {
  arrow as arrowCore,
  autoUpdate,
  computePosition,
} from '@floating-ui/dom'
import { unrefElement } from '@vueuse/core'
import type { Ref, ToRefs } from 'vue'
import type {
  AutoUpdateOptions,
  ComputePositionReturn,
  Middleware,
  Placement,
  SideObject,
  Strategy,
} from '@floating-ui/dom'

export type UseFloatingProps = ToRefs<{
  middleware: Array<Middleware>
  placement: Placement
  strategy: Strategy
}>

/**
 * 设置弹窗
 * @param param0
 * @returns
 */
export function usePopper({
  middleware,
  placement,
  strategy,
}: UseFloatingProps) {
  const popperNode = ref<HTMLElement>()
  const triggerNode = ref<HTMLElement>()

  const x = ref<number>()
  const y = ref<number>()
  const middlewareData = ref<ComputePositionReturn['middlewareData']>({})

  const states = {
    x,
    y,
    placement,
    strategy,
    middlewareData,
  } as const

  const createPopper = async () => {
    const triggerEl = unrefElement(triggerNode)
    const popperEl = unrefElement(popperNode)
    if (!popperEl || !triggerEl) return

    const data = await computePosition(triggerEl, popperEl, {
      placement: unref(placement),
      strategy: unref(strategy),
      middleware: unref(middleware),
    })

    const keys = Object.keys(states) as Array<keyof typeof states>
    keys.forEach((key) => {
      if (key in data) {
        states[key].value = data[key]
      }
    })
  }

  const popperUpdate = (autoUpdateOption: AutoUpdateOptions = {}) => {
    const triggerEl = unrefElement(triggerNode)
    const popperEl = unrefElement(popperNode)
    if (!popperEl || !triggerEl) return
    // {
    // ancestorResize: true, // 当溢出祖先元素的大小调整时是否更新位置
    // elementResize: true, // 当参考元素或浮动元素调整大小时是否更新位置
    // layoutShift: true, // 如果由于布局偏移而导致参考元素在屏幕上移动，是否更新浮动元素的位置。
    // animationFrame: false, // 是否在需要时在每个动画帧上更新浮动元素的位置。虽然已针对性能进行了优化，但在以下情况下应谨慎使用：
    // }
    const cleanup = autoUpdate(
      triggerEl,
      popperEl,
      createPopper,
      autoUpdateOption
    )
    return cleanup
  }

  return {
    ...states,
    createPopper,
    popperNode,
    triggerNode,
    popperPlacement: states.placement,
    popperUpdate,
  }
}

export type ArrowMiddlewareProps = {
  arrowRef: Ref<HTMLElement | null | undefined>
  padding?: number | SideObject
}
/**
 * 设置图标
 * @param param0
 * @returns
 */
export const arrowMiddleware = ({
  arrowRef,
  padding,
}: ArrowMiddlewareProps): Middleware => {
  return {
    name: 'arrow',
    options: {
      element: arrowRef,
      padding,
    },

    fn(args) {
      const arrowEl = unref(arrowRef)
      if (!arrowEl) return {}

      return arrowCore({
        element: arrowEl,
        padding,
      }).fn(args)
    },
  }
}
