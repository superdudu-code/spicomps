import type { App, Plugin } from 'vue'
// 通过 Vue 提供的 Plugin 类型和传进来的组件类型 T 的集合进行确定我们的组件类型具有 Plugin 类型方法，如 install 方法
export type SFCWithInstall<T> = T & Plugin
export const withInstall = <T>(comp: T) => {
  ;(comp as SFCWithInstall<T>).install = function (app: App) {
    // 组件的注册名称参数暂时是写死了 ElIcon，在后面的小节，我们再详细说明如何进行设置动态组件名称
    const { name } = comp as unknown as { name: string }
    app.component(name, comp as SFCWithInstall<T>)
  }
  return comp as SFCWithInstall<T>
}
