import type { ComponentSize } from '@spicomps/constants'
import type { ExtractPropTypes, PropType } from 'vue'
import type SpButton from './button.vue'

export type ButtonType =
  | ''
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'

// button原生属性
export type ButtonNativeType = 'submit' | 'reset' | 'button'

export const buttonProps = {
  type: String as PropType<ButtonType>,
  size: String as PropType<ComponentSize>,
  plain: Boolean,
  round: Boolean,
  circle: Boolean,
  disabled: Boolean,
  nativeType: {
    type: String as PropType<ButtonNativeType>,
    default: 'button',
  },
  autofocus: Boolean,
  loading: Boolean,
  text: Boolean,

  preIcon: String, // 前置icon
  sufIcon: String, // 后置icon
} as const
export type ButtonProps = ExtractPropTypes<typeof buttonProps>

export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type ButtonInstance = InstanceType<typeof SpButton>
