import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import { withInstall } from '@spicomps/utils'
import Icon from './src/icon.vue'

library.add(faSpinner)

export const SpIcon = withInstall(Icon)

export default SpIcon
export * from './src/types'
