import DefaultTheme from 'vitepress/theme'
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import {
  SpButton,
  SpConfigProvider,
  SpElipsis,
  SpIcon,
  SpInput,
} from '@spicomps/base-components'
import { ElementPlus } from './elementplus'
import type { EnhanceAppContext } from 'vitepress'

import './custom.css'

// 组件库
const components = [SpIcon, SpButton, SpConfigProvider, SpInput, SpElipsis]
// 是否已安装标识
const INSTALLED_KEY = Symbol('INSTALLED_KEY')
// 组件库插件
const Spicomps = {
  install(app: any) {
    // 如果该组件库已经安装过了，则不进行安装
    if (app[INSTALLED_KEY]) return
    // 将标识值设置为 true，表示已经安装了
    app[INSTALLED_KEY] = true
    // 循环组件库中的每个组件进行安装
    components.forEach((c) => app.use(c))
  },
}

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    ctx.app.use(Spicomps)
    ctx.app.use(ElementPlus)
    ctx.app.component('demo-preview', ElementPlusContainer)
  },
}
