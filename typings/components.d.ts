import type Button from '@spicomps/base-components/button'
// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    SpButton: typeof Button
  }
}

export {}
