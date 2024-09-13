import type { FontAwesomeIconProps } from '@fortawesome/vue-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export type IconType = 'primary' | 'success' | 'warning' | 'danger' | 'info'

export interface IconProps extends Omit<FontAwesomeIconProps, 'icon'> {
  type?: IconType
  color?: string
  icon?: object | Array<string> | string | IconDefinition
}
