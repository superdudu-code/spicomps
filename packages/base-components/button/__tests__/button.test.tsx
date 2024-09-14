import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Button from '../src/button.vue'

describe('Button', () => {
  test('创建按钮', () => {
    const wrapper = mount(() => <Button type="primary">你好</Button>)
    // 测试 class
    expect(wrapper.classes()).toContain('sp-button--primary')
  })
  test('内容插槽', () => {
    const wrapper = mount(() => <Button type="primary">你好</Button>)
    expect(wrapper.text()).toBe('你好')
  })
  test('点击事件', () => {
    const wrapper = mount(() => <Button type="primary">你好</Button>)
    // 事件
    wrapper.get('button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
  test('禁用状态', () => {
    const wrapper = mount(() => (
      <Button type="primary" disabled>
        你好
      </Button>
    ))
    expect(wrapper.classes()).toContain('is-disabled')
  })
  test('按钮尺寸-small', () => {
    const wrapper = mount(() => (
      <Button type="primary" size="small">
        你好
      </Button>
    ))
    expect(wrapper.classes()).toContain('sp-button--small')
  })
  test('按钮尺寸-default', () => {
    const wrapper = mount(() => (
      <Button type="primary" size="default">
        你好
      </Button>
    ))
    expect(wrapper.classes()).toContain('sp-button--default')
  })
  test('按钮尺寸-large', () => {
    const wrapper = mount(() => (
      <Button type="primary" size="large">
        你好
      </Button>
    ))
    expect(wrapper.classes()).toContain('sp-button--large')
  })
  // 加载状态
  test('加载状态', () => {
    const wrapper = mount(() => (
      <Button type="primary" loading>
        你好
      </Button>
    ))
    expect(wrapper.classes()).toContain('is-loading')
  })
  // 圆角按钮
  test('圆角按钮', () => {
    const wrapper = mount(() => (
      <Button type="primary" round>
        你好
      </Button>
    ))
    expect(wrapper.classes()).toContain('is-round')
  })
})
