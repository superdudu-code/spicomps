// 颜色
export interface ConfigProviderColorTheme {
  primaryColor?: string
  warningColor?: string
  successColor?: string
  dangerColor?: string
  infoColor?: string
}

// 主题配置
export interface ConfigProviderTheme {
  colorTheme?: ConfigProviderColorTheme
}

export interface ConfigProviderProps {
  theme?: ConfigProviderTheme
}
