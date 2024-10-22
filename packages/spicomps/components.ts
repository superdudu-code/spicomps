import { SpButton } from '@spicomps/base-components/button'
import { SpConfigProvider } from '@spicomps/base-components/config-provider'
import { SpIcon } from '@spicomps/base-components/icon'
import { SpInput } from '@spicomps/base-components/input'
import { SpElipsis } from '@spicomps/base-components/ellipsis'
import { SpPopover } from '@spicomps/base-components/popover'

import type { Plugin } from 'vue'

export default [
  SpButton,
  SpConfigProvider,
  SpIcon,
  SpInput,
  SpElipsis,
  SpPopover,
] as Plugin[]
