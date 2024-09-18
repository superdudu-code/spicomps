import { createApp } from 'vue'
import App from './App.vue'

// import Spicomps from '../packages/spicomps'
// import '@spicomps/theme-chalk/src/index.scss'

import Spicomps from 'spicomps'

//创建vue实例
const app = createApp(App)
// 安装组件库
app.use(Spicomps)
//挂载实例
app.mount('#play')
