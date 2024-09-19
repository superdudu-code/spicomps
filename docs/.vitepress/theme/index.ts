import DefaultTheme from 'vitepress/theme'
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import { SpButton, SpConfigProvider, SpIcon } from '@spicomps/base-components'
import type { EnhanceAppContext } from 'vitepress'
import '@spicomps/theme-chalk/src/base.scss'

import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    ctx.app.component(SpButton.name!, SpButton)
    ctx.app.component(SpConfigProvider.name!, SpConfigProvider)
    ctx.app.component(SpIcon.name!, SpIcon)
    ctx.app.component('demo-preview', ElementPlusContainer)
  },
}
