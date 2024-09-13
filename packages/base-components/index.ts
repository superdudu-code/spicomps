import Button from './button'
import ConfigProvider from './config-provider'
import Icon from './icon'

export * from './button'
export * from './config-provider'
export * from './icon'

const Spicomps = {
  install(app: any) {
    app.component(Button.name, Button)
    app.component(ConfigProvider.name, ConfigProvider)
    app.component(Icon.name, Icon)
  },
}
export default Spicomps
