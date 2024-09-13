import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Icon from '../src/icon.vue'

describe('Icon', () => {
  test('创建图标', () => {
    const wrapper = mount(() => <Icon icon="spinner" spin></Icon>)
    expect(wrapper.classes()).toContain('sp-icon')
  })
  test('设置图标颜色', () => {
    const wrapper = mount(() => <Icon icon="spinner" color="#000000"></Icon>)
    expect(wrapper.element.getAttribute('style')).toContain('--color: #000000')
  })
})
