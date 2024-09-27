/**
 * 获取目标的样式
 * @param {HTMLElement} element The element to compute.
 * @param {string} prop The style property.
 * @returns {number}
 */
export function computeStyle(element: HTMLElement, prop: string): string {
  if (!window.getComputedStyle) {
    // IE
    ;(window as any).getComputedStyle = function (el: any) {
      this.getPropertyValue = function (key: string) {
        const regex = /(-([a-z]){1})/g

        if (key === 'float') {
          key = 'styleFloat'
        }

        if (regex.test(key)) {
          key = key.replace(regex, (_, _fullMatch, group2) =>
            group2.toUpperCase()
          )
        }

        return el.currentStyle && el.currentStyle[key]
          ? el.currentStyle[key]
          : null
      }
      return this
    }
  }

  return window.getComputedStyle(element, null).getPropertyValue(prop)
}
