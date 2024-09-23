import { createApp } from 'vue'
import App from './App.vue'

// import Spicomps from 'spicomps'
import {
  SpButton,
  SpIcon,
  SpConfigProvider,
} from '@spicomps/base-components/index'
import '@spicomps/theme-chalk/src/index.scss'

// 组件库
const components = [SpIcon, SpButton, SpConfigProvider]
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

//创建vue实例
const app = createApp(App)
// 安装组件库
// app.use(Spicomps)
//挂载实例
app.mount('#play')
