import { type Ref, computed, ref } from 'vue'
import { computeStyle } from '@spicomps/utils'
import { useNamespace } from '@spicomps/hooks'
import type { ElipsisProps } from './types'

/**
 * 获取当前元素在收缩状态下的文字
 */
export const useTextElipsis = (props: ElipsisProps, width: Ref<number>) => {
  const ns = useNamespace('elipsis')

  // 文本Ref
  const textWrap = ref<HTMLElement | undefined>()
  const textRef = ref<HTMLElement | undefined>()
  const showText = ref(props.text)

  const prefixRef = ref<HTMLElement | undefined>()
  const suffixRef = ref<HTMLElement | undefined>()

  // 是否处于收缩状态
  const isClamped = computed(() => showText.value !== props.text)
  // 元素是否溢出
  const isOver = ref(true)

  // 最大高度
  const maxHeight = computed(() => {
    return props.maxLines * lineHeight.value
  })

  // 虚拟元素，可以获取行高、以及判断最大高度是否溢出
  let div: HTMLDivElement
  const lineHeight = ref(20)
  const offset = ref(props.text.length)
  const elipsisTag = ref('...')
  const elipsisText = computed(() => {
    if (props.position === 'start') {
      return `${elipsisTag.value}${(
        props.text.slice(-offset.value) || ''
      ).trim()}`
    } else if (props.position === 'middle') {
      const split = Math.floor(offset.value / 2)
      return `${(props.text.slice(0, split) || '').trim()}${elipsisTag.value}${(
        props.text.slice(-split) || ''
      ).trim()}`
    }
    return `${(props.text.slice(0, offset.value) || '').trim()}${
      elipsisTag.value
    }`
  })

  // 修改元素的入口函数
  const update = () => {
    offset.value = props.text.length
    createElement()

    if (isOverflow() && props.elipsis) {
      search(0, offset.value)
      showText.value = elipsisText.value
      isOver.value = true
    } else {
      isOver.value = props.elipsis ? false : true
      showText.value = props.text
    }
  }

  // 创建一个元素，获取行高 和 行数
  const createElement = (textContent?: string) => {
    const text = textContent || elipsisText.value
    const className = ns.e('test')
    if (!div) {
      div = document.createElement('div')
      div.style.position = 'absolute'
      div.style.top = '-9999px'
      div.style.left = '-9999px'
      div.style.visibility = 'hidden'
      div.style.opacity = '0'
      div.style.zIndex = '-9999'

      let innerHTML = `<span class="${className}">${text}</span>`
      if (prefixRef.value) {
        const preWidth = prefixRef.value.getBoundingClientRect().width
        const span = `<span style="display: inline-block;width: ${preWidth}px;height=${lineHeight.value}px"></span>`
        innerHTML = span + innerHTML
      }
      if (suffixRef.value) {
        const sufWidth = suffixRef.value.getBoundingClientRect().width
        const span = `<span style="display: inline-block;width: ${sufWidth}px;height=${lineHeight.value}px"></span>`
        innerHTML = innerHTML + span
      }
      div.innerHTML = innerHTML
      textWrap.value?.appendChild(div)
    } else {
      const testText = div.querySelector(`.${className}`)
      testText!.textContent = text
    }
    div.style.width = `${width.value}px`
    lineHeight.value = getLinesHieght(div)

    return div
  }
  // 长度是否溢出
  const isOverflow = () => {
    if (maxHeight.value) {
      if (getHeight(div) > maxHeight.value) return true
    }
    return false
  }
  // 获取当前容器的行数
  const getLinesHieght = (target: HTMLElement) => {
    const lineHeight = computeStyle(target, 'line-height')
    if (lineHeight === 'normal') {
      const dom = document.createElement('span')
      dom.style.width = '300px'
      dom.style.position = 'absolute'
      dom.style.visibility = 'hidden'
      dom.innerText = 'ruofee'
      target.appendChild(dom)
      const height = dom.clientHeight
      target.removeChild(dom)
      return height * 1.1
    }
    return Number.parseFloat(lineHeight)
  }

  // 获取当前容器的高度
  const getHeight = (target: HTMLElement) => {
    const height = computeStyle(target, 'height')
    return Number.parseFloat(height)
  }

  /**
   * 通过二分查找去找截断的位置
   */
  function search(...range: any[]) {
    const [from = 0, to = offset.value] = range
    if (to - from <= 3) {
      stepToFit()
      return
    }
    const mid = Math.floor((from + to) / 2)
    clampAt(mid)

    if (isOverflow()) {
      search(from, mid)
    } else {
      search(mid, to)
    }
  }
  // 通过不断控制字符的长度，去找最边界的字符
  function stepToFit() {
    fill()
    clamp()
  }
  // 填充，当不溢出的时候，不断填充下一个字符，直到溢出一个字符
  function fill() {
    while (!isOverflow() && offset.value < props.text.length) {
      clampAt(offset.value + 1)
    }
  }
  // 截断，当溢出的时候，不断截断最后一个字符，直到不溢出
  function clamp() {
    while (isOverflow() && offset.value > 0) {
      clampAt(offset.value - 1)
    }
  }
  // 将字符截断到指定位置，并设置截断后的文本
  function clampAt(_offset: number) {
    offset.value = _offset
    createElement(elipsisText.value)
  }

  return {
    textWrap,
    textRef,
    prefixRef,
    suffixRef,
    showText,
    isClamped,
    isOver,
    update,
  }
}
