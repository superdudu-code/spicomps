import ConfigProvider from './src/config-provider.vue'

ConfigProvider.install = (app: any) => {
  app.component(ConfigProvider.name, ConfigProvider)
}

export const SpConfigProvider = ConfigProvider

export * from './src/type'

export default SpConfigProvider
