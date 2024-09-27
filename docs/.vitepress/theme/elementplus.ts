import { ElRadio, ElSlider, ElSwitch } from 'element-plus'

import 'element-plus/dist/index.css'

const components = [ElSlider, ElSwitch, ElRadio]

export const ElementPlus = {
  install(app: any) {
    // 循环组件库中的每个组件进行安装
    components.forEach((c) => app.use(c))
  },
}
