import DefaultTheme from 'vitepress/theme'
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import Spicomps from '@spicomps/base-components'
import type { EnhanceAppContext } from 'vitepress'
import '@spicomps/theme-chalk/src/base.scss'

import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    ctx.app.use(Spicomps)
    ctx.app.component('demo-preview', ElementPlusContainer)
  },
}
