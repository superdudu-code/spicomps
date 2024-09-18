import type { ExtractPropTypes, PropType } from 'vue'

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

export const configProviderProps = {
  theme: Object as PropType<ConfigProviderTheme>,
} as const
export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>
