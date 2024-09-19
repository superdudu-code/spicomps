import type Button from '@spicomps/base-components/button'
import type Icon from '@spicomps/base-components/icon'
import type ConfigProvider from '@spicomps/base-components/config-provider'
// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    SpButton: typeof Button
    SpIcon: typeof Icon
    SpConfigProvider: typeof ConfigProvider
  }
}

export {}
