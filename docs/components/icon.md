---
title: 'Button | Spicomps'
description: 'Button'
---

# Icon 图标

图标组件使用了 `fortawesome` 为图标库，更多图标请查看 [Font Awesome](https://fontawesome.com/search?o=r&m=free&s=solid)

## 如何使用

**引入**

```js
import { library } from '@fortawesome/fontawesome-svg-core'
// 这里要使用什么图标，那么就引入什么图标，按需引入
import { faCheck, faHouse, faUser } from '@fortawesome/free-solid-svg-icons'
library.add(faCheck, faHouse, faUser)

// 如果对于大小不在乎，也可以全部引入
// import { fas } from '@fortawesome/free-solid-svg-icons'
// library.add(fas)
```

**使用**：去掉 fa 前缀即可

```vue
<sp-icon icon="check"></sp-icon>
```

## 基础用法

通过`type`和`color`可以设置图标的颜色

<preview path="../demos/icon/basic.vue"  />

## 使用 svg 图标

也可以使用自己的 svg 图标，只需要放在默认插槽即可

<preview path="../demos/icon/slot.vue" />

## fortawesome Api

具体可以查看 [api 文档](https://docs.fontawesome.com/web/use-with/vue/style#_top)

<preview path="../demos/icon/spin.vue" />
