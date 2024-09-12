import Button from './button'
import ConfigProvider from './config-provider'

export * from './button'
export * from './config-provider'

const Spicomps = {
  install(app: any) {
    app.component('SpButton', Button)
    app.component('SpConfigProvider', ConfigProvider)
  },
}
export default Spicomps
