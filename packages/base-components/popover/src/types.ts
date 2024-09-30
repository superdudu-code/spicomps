import type { AutoUpdateOptions, Placement, Strategy } from '@floating-ui/dom'
import type { EmitFn, ExtractPropTypes, PropType } from 'vue'
import type Popover from './popover.vue'

type PopoverEffect = 'dark' | 'light'
type PopoverTrigger = 'hover' | 'click' | 'manual'

export const popoverProps = {
  /**
   * @description 触发方式
   */
  trigger: {
    type: String as PropType<PopoverTrigger>,
    default: 'click',
  },
  /**
   * @description 内容，插槽优先
   */
  content: String,
  /**
   * @description 禁止弹窗
   */
  disabled: Boolean,
  /**
   * @description 受控显示
   */
  visible: {
    type: Boolean as PropType<boolean | null>,
    default: null,
  },
  /**
   * @description 显示位置
   */
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom',
  },
  /**
   * @description 弹窗定位方式
   */
  strategy: {
    type: String as PropType<Strategy>,
    default: 'absolute',
  },
  /**
   * @description 主题
   */
  effect: {
    type: String as PropType<PopoverEffect>,
    default: 'light',
  },
  /**
   * @description 浮层偏移量
   */
  offset: {
    type: Number,
    default: 8,
  },
  /**
   * @description 是否显示箭头
   */
  showArrow: {
    type: Boolean,
    default: true,
  },
  /**
   * @description 最大宽度，css值
   */
  maxWidth: [Number, String],
  /**
   * @description 最小宽度，css值
   */
  minWidth: [Number, String],
  /**
   * @description 宽度，css值
   */
  width: [Number, String],
  /**
   * @description 动画名
   */
  transition: {
    type: String,
    // default: 'fade-in-linear',
    default: 'sp-fade-in-scale-up',
  },
  /**
   * @description 关闭延迟
   */
  closeDelay: {
    type: Number,
    default: 150,
  },
  /**
   * @description 打开延迟
   */
  openDelay: {
    type: Number,
    default: 0,
  },
  /**
   * @description 打开延迟
   */
  zIndex: {
    type: Number,
    default: null,
  },

  /**
   * @description 是否自动更新popover位置，打开会有性能下降
   * @default false
   * {
      ancestorResize: true, // 当溢出祖先元素的大小调整时是否更新位置
      elementResize: true, // 当参考元素或浮动元素调整大小时是否更新位置
      layoutShift: true, // 如果由于布局偏移而导致参考元素在屏幕上移动，是否更新浮动元素的位置。
      animationFrame: false, // 是否在需要时在每个动画帧上更新浮动元素的位置。虽然已针对性能进行了优化，但在以下情况下应谨慎使用：
      }
   *
   */
  autoUpdate: {
    type: [Object, Boolean] as PropType<AutoUpdateOptions | boolean>,
    default: false,
  },
}
export type PopoverProps = ExtractPropTypes<typeof popoverProps>

// emit
export const popoverEmits = {
  'update:visible': (val: boolean) => typeof val === 'boolean',
  clickoutside: () => true,
  'before-enter': () => true,
  'after-enter': () => true,
  'before-leave': () => true,
  'after-leave': () => true,
}
export type PopoverEmits = EmitFn<typeof popoverEmits>

// instance
export type PopoverInstance = InstanceType<typeof Popover>
