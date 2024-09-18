import type { ComponentSize } from '@spicomps/constants'
import type { ExtractPropTypes, PropType } from 'vue'
import type SpButton from './button.vue'

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'

// button原生属性
export type nativeType = 'submit' | 'reset' | 'button'

export const buttonProps = {
  type: String as PropType<ButtonType>,
  size: String as PropType<ComponentSize>,
  plain: Boolean,
  round: Boolean,
  circle: Boolean,
  disabled: Boolean,
  nativeType: {
    type: String as PropType<nativeType>,
    default: 'button',
  },
  autofocus: Boolean,
  loading: Boolean,
  icon: String,
  text: Boolean,
} as const
export type ButtonProps = ExtractPropTypes<typeof buttonProps>

export interface ButtonEmits {
  (e: 'click', values: MouseEvent): void
}

export type ButtonInstance = InstanceType<typeof SpButton>
