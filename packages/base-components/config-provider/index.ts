import { withInstall } from '@spicomps/utils'
import ConfigProvider from './src/config-provider.vue'

export const SpConfigProvider = withInstall(ConfigProvider)
export * from './src/types'

export default SpConfigProvider
