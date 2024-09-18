import { setColorMixLevel, setCssVariables } from '@spicomps/utils'
import type {
  ConfigProviderColorTheme,
  ConfigProviderTheme,
} from '@spicomps/base-components/config-provider'

export const useThemeChange = (theme: ConfigProviderTheme) => {
  if (theme.colorTheme) {
    colorChange(theme.colorTheme)
  }
}

/**
 * 改变颜色
 */
type ThemeKey = keyof ConfigProviderColorTheme
const typeMap = {
  primaryColor: 'primary',
  warningColor: 'warning',
  successColor: 'success',
  dangerColor: 'danger',
  infoColor: 'info',
}
function colorChange(coloTheme: ConfigProviderColorTheme) {
  const obj: { [key: string]: string } = {}
  Object.keys(coloTheme).forEach((v) => {
    const key = v as ThemeKey
    const value = coloTheme[key]!
    const type = typeMap[key]
    obj[`--sp-color-${type}`] = value

    const numList = [3, 5, 7, 8, 9]
    numList.forEach((num) => {
      const color = setColorMixLevel(value, num, 'light', '#ffffff')

      obj[`--sp-color-${type}-light-${num}`] = color
    })

    const color = setColorMixLevel(value, 2, 'dark', '#000000')

    obj[`--sp-color-${type}-dark-${2}`] = color
  })

  setCssVariables(obj)
}
