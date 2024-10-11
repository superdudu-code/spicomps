declare module 'vue' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    SpButton: typeof import('spicomps')['SpButton']
    SpConfigProvider: typeof import('spicomps')['SpConfigProvider']
    SpIcon: typeof import('spicomps')['SpIcon']
    SpInput: typeof import('spicomps')['SpInput']
    SpElipsis: typeof import('spicomps')['SpElipsis']
  }
}

export {}
