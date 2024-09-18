import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import type { ExtractPropTypes, PropType } from 'vue'

export type IconType = 'primary' | 'success' | 'warning' | 'danger' | 'info'

type icon = PropType<object | Array<string> | string | IconDefinition>

// 定义 iconProps
export const iconProps = {
  type: String as PropType<IconType>,
  color: String,
  icon: [Object, Array, String] as icon,

  // 显式定义 FontAwesomeIconProps 的属性，确保每个属性都用 Vue 的 PropType 定义
  size: String as PropType<
    | '2xs'
    | 'xs'
    | 'sm'
    | 'lg'
    | 'xl'
    | '2xl'
    | '1x'
    | '2x'
    | '3x'
    | '4x'
    | '5x'
    | '6x'
    | '7x'
    | '8x'
    | '9x'
    | '10x'
  >,
  spin: Boolean,
  pulse: Boolean,
  flip: String as PropType<'horizontal' | 'vertical' | 'both'>,
  // 'symbol' 属性需要特别处理，确保它的类型符合 Vue PropType
  symbol: [String, Boolean] as PropType<string | boolean>,
  border: Boolean,
  inverse: Boolean,
  listItem: Boolean,
  swapOpacity: Boolean,
  rotation: [Number, String] as PropType<90 | 180 | 270 | '90' | '180' | '270'>,
  pull: String as PropType<'left' | 'right'>,
  fixedWidth: Boolean,
  beat: Boolean,
  fade: Boolean,
  beatFade: Boolean,
  bounce: Boolean,
  spinPulse: Boolean,
  spinReverse: Boolean,
} as const

// 使用 ExtractPropTypes 提取类型
export type IconProps = ExtractPropTypes<typeof iconProps>
