import Button from './button'
import ConfigProvider from './config-provider'

export * from './button'
export * from './config-provider'

const Spicomps = {
  install(app: any) {
    app.component(Button.name, Button)
    app.component(ConfigProvider.name, ConfigProvider)
  },
}
export default Spicomps
