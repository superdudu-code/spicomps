import { createApp } from 'vue'
import App from './App.vue'

import '@spicomps/theme-chalk/src/index.scss'

//创建vue实例
const app = createApp(App)

//挂载实例
app.mount('#play')
