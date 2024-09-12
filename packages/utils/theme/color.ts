/**
 * 解析十六进制颜色为 RGB
 * @param hex 如 #409eff
 * @returns [64, 158, 255]
 */
export function hexToRgb(hex: string): [number, number, number] {
  let parsedHex = hex.replace('#', '')
  if (parsedHex.length === 3) {
    parsedHex = parsedHex
      .split('')
      .map((char) => char + char)
      .join('')
  }

  const bigint = Number.parseInt(parsedHex, 16)
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255]
}

/**
 * 解析十六进制颜色为 RGB
 * @param r g b 如 64, 158, 255
 * @returns #409eff
 */
export function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (value: number) => value.toString(16).padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

/**
 * 颜色混合函数，根据百分比混合两种颜色
 * @param color1 #409eff
 * @param color2 #ffffff
 * @param percentage 混合比例，0~1，0是颜色1，1是颜色2
 * @returns #53a8ff
 */
export function mixColors(
  color1: string,
  color2: string,
  percentage: number
): string {
  const [r1, g1, b1] = hexToRgb(color1)
  const [r2, g2, b2] = hexToRgb(color2)

  const mix = (c1: number, c2: number) =>
    Math.round(c1 * (1 - percentage) + c2 * percentage)

  const r = mix(r1, r2)
  const g = mix(g1, g2)
  const b = mix(b1, b2)

  return rgbToHex(r, g, b)
}

/**
 * 设置颜色混合等级函数
 * @param baseColor
 * @param number
 * @param mode
 * @param mixColor
 * @returns
 */
export function setColorMixLevel(
  baseColor: string,
  number: number,
  mode: 'light' | 'dark' = 'light',
  mixColor = '#ffffff'
): string {
  // 根据模式设置混合颜色的方向
  const isLightMode = mode === 'light'
  const targetColor = isLightMode ? mixColor : '#000000'

  const percentage = number / 10
  const mixedColor = mixColors(baseColor, targetColor, percentage)

  return mixedColor
}

/**
 * 批量设置css变量
 */
export function setCssVariables(variables: { [key: string]: string }) {
  Object.entries(variables).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value)
  })
}
