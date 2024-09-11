import type { ComponentSize } from '@spicomps/constants'

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'

// button原生属性
export type nativeType = 'submit' | 'reset' | 'button'

export interface ButtonProps {
  type?: ButtonType
  size?: ComponentSize
  plain?: boolean
  round?: boolean
  circle?: boolean
  disabled?: boolean
  nativeType?: nativeType
  autofocus?: boolean
  loading?: boolean
  icon?: string
  text?: boolean
}

export interface ButtonEmits {
  (e: 'click', values: MouseEvent): void
}
