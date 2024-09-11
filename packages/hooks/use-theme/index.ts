import {
  hexToRgb,
  mixColors,
  rgbToHex,
  setColorMixLevel,
  setCssVariables,
} from '@spicomps/utils'

// const theme1 = {
//   common: {
//     primaryColor: appStore.themeColor,
//     primaryColorSuppl: appStore.themeColor,
//     primaryColorHover: appStore.lightenColor,
//     primaryColorPressed: appStore.lightenColor
//   },
//   LoadingBar: {
//     colorLoading: appStore.themeColor
//   }
// }
export const useThemeChange = (theme: any) => {
  if (theme.common.primaryColor) {
    const obj: { [key: string]: string } = {
      '--sp-color-primary': theme.common.primaryColor,
    }
    const numList = [3, 5, 7, 8, 9]
    numList.forEach((num) => {
      const color = setColorMixLevel(
        theme.common.primaryColor,
        num,
        'light',
        '#ffffff'
      )

      obj[`--sp-color-primary-light-${num}`] = color
    })

    const color = setColorMixLevel(
      theme.common.primaryColor,
      2,
      'dark',
      '#000000'
    )

    obj[`--sp-color-primary-dark-${2}`] = color
    setCssVariables(obj)
  }
}
