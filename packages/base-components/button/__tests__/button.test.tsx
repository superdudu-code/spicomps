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
})
