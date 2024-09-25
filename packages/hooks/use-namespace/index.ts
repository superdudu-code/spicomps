// use-namespace/index.ts
import { computed, unref } from 'vue'

// 默认的命名空间
export const defaultNamespace = 'sp'
// 状态前缀
const statePrefix = 'is-'

/**
 * BEM 命名字符拼接函数
 * @param namespace 命名空间
 * @param block 块名
 * @param blockSuffix 块的后缀
 * @param element 元素名
 * @param modifier 修改器名
 * @returns 拼接后的BEM类名字符串
 */
const _bem = (
  namespace: string,
  block: string,
  blockSuffix: string,
  element: string,
  modifier: string
) => {
  // 默认是 Block
  let cls = `${namespace}-${block}`
  // 如果存在 Block 后缀，也就是 Block 里面还有 Block
  if (blockSuffix) {
    cls += `-${blockSuffix}`
  }
  // 如果存在元素
  if (element) {
    cls += `__${element}`
  }
  // 如果存在修改器
  if (modifier) {
    cls += `--${modifier}`
  }
  return cls
}

/**
 * 用于创建和管理BEM类名的工具函数
 * @param block 块名
 * @returns 返回一个对象，包含用于创建BEM类名的各种方法
 */
export const useNamespace = (block: string) => {
  // 基于Vue的computed创建动态命名空间
  const namespace = computed(() => defaultNamespace)

  /**
   * 创建块级类名
   * @param blockSuffix
   * @returns sp-form
   */
  const b = (blockSuffix = '') =>
    _bem(unref(namespace), block, blockSuffix, '', '')

  /**
   * 创建元素级类名
   * @example e('inner')
   * @param element 子元素块名：inner
   * @returns sp-input__inner
   */
  const e = (element?: string) =>
    element ? _bem(unref(namespace), block, '', element, '') : ''

  /**
   * 创建修改器类名
   * @example m('default')
   * @param modifier 修饰名：default
   * @returns sp-form--default
   */
  const m = (modifier?: string) =>
    modifier ? _bem(unref(namespace), block, '', '', modifier) : ''

  /**
   * 创建带后缀的块元素类名
   * @example be('item')
   * @param blockSuffix 修饰名：item
   * @returns sp-form-item
   */
  const be = (blockSuffix?: string, element?: string) =>
    blockSuffix && element
      ? _bem(unref(namespace), block, blockSuffix, element, '')
      : ''

  // 创建元素的修改器类名 sp-scrollbar__wrap--hidden-default
  const em = (element?: string, modifier?: string) =>
    element && modifier
      ? _bem(unref(namespace), block, '', element, modifier)
      : ''

  // 创建块后缀的修改器类名 sp-form-item--default
  const bm = (blockSuffix?: string, modifier?: string) =>
    blockSuffix && modifier
      ? _bem(unref(namespace), block, blockSuffix, '', modifier)
      : ''

  // 创建块元素的修改器类名 sp-form-item__content--xxx
  const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
    blockSuffix && element && modifier
      ? _bem(unref(namespace), block, blockSuffix, element, modifier)
      : ''

  // 创建动作状态类名，支持两种调用方式 is-success
  const is: {
    (name: string, state: boolean | undefined): string
    (name: string): string
  } = (name: string, ...args: [boolean | undefined] | []) => {
    const state = args.length >= 1 ? args[0]! : true
    return name && state ? `${statePrefix}${name}` : ''
  }

  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
  }
}
