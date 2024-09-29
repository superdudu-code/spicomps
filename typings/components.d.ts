import type Button from '@spicomps/base-components/button'
import type Icon from '@spicomps/base-components/icon'
import type Input from '@spicomps/base-components/input'
import type ConfigProvider from '@spicomps/base-components/config-provider'
import type Ellipsis from '@spicomps/base-components/ellipsis'
// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    SpButton: typeof Button
    SpIcon: typeof Icon
    SpConfigProvider: typeof ConfigProvider
    SpInput: typeof Input
    SpEllipsis: typeof Ellipsis
  }
}

export {}
