# 快速开始

```
# 选择一个你喜欢的包管理器

# NPM
$ npm install spicomps --save

# Yarn
$ yarn add spicomps

# pnpm
$ pnpm install spicomps
```

​

## 用法

### 完整引入

```js
// main.ts
import { createApp } from 'vue'
import Spicomps from 'spicomps'
import 'spicomps/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(Spicomps)
app.mount('#app')
```

### 按需引入

```js
// spicomps.js

// 样式全部引入：import 'spicomps/dist/index.css'
// 按需引入
import 'spicomps/es/base-components/base/style/css.mjs'
import 'spicomps/es/base-components/button/style/css.mjs'
import 'spicomps/es/base-components/popover/style/css.mjs'
// 组件引入
import { SpButton, SpPopover } from 'spicomps'
const components = [SpPopover, SpButton]
export default {
  install(app) {
    components.forEach((item) => {
      app.use(item)
    })
  },
}
```
