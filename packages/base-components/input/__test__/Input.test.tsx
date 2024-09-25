import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Input from '../src/input.vue'

describe('Input', () => {
  test('v-model', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'test',
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
      },
    })

    const input = wrapper.find('input')
    // 初始值
    expect(input.element.value).toBe('test')
    // 更新值，setValue会触发 Input 和 change
    await input.setValue('test2')
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')

    // expect(wrapper.emitted()).toHaveProperty('input')
    // const inputEvent = wrapper.emitted('input')
    // expect(inputEvent![0]).toEqual(['test2'])

    expect(wrapper.emitted()).toHaveProperty('change')
    const changeEvent = wrapper.emitted('change')
    expect(changeEvent![0]).toEqual(['test2'])

    expect(wrapper.props('modelValue')).toBe('test2')
    expect(input.element.value).toBe('test2')
    // v-model 的异步更新
    await wrapper.setProps({ modelValue: 'prop text' })
    expect(wrapper.props('modelValue')).toBe('prop text')
    expect(input.element.value).toBe('prop text')
  })
  test('支持点击清空字符串', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'test',
        clearable: true,
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
      },
      global: {
        stubs: ['sp-icon'],
      },
    })
    expect(wrapper.find('.sp-input__clear').exists()).toBeFalsy()
    // input focus出现清空按钮
    const input = wrapper.find('input')
    await input.trigger('focus')
    expect(wrapper.emitted()).toHaveProperty('focus')
    expect(wrapper.find('.sp-input__clear ').exists()).toBeTruthy()
    // 点击清空值
    await wrapper
      .find('.sp-input__clear [icon="circle-xmark"]')
      .trigger('click')
    expect(input.element.value).toBe('')
    expect(wrapper.emitted()).toHaveProperty('clear')
    // expect(wrapper.emitted()).toHaveProperty('input')
    // const inputEvent = wrapper.emitted('input')
    // expect(inputEvent![0]).toEqual([''])

    expect(wrapper.emitted()).toHaveProperty('change')
    const changeEvent = wrapper.emitted('change')
    expect(changeEvent![0]).toEqual([''])
  })
  test('密码切换功能', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: '',
        type: 'password', // 默认为text
        showPassword: true,
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
      },
      global: {
        stubs: ['SpIcon'],
      },
    })

    expect(wrapper.find('.sp-input__password').exists()).toBeFalsy()

    // 设置值，有icon
    const input = wrapper.find('input')
    await input.setValue('test')
    expect(input.attributes('type')).toBe('password')
    let eyeIcon = wrapper.find('.sp-input__password sp-icon-stub')
    expect(eyeIcon.exists()).toBeTruthy()
    expect(eyeIcon.attributes('icon')).toBe('eye')
    // 点击显示密码
    await wrapper.find('.sp-input__password sp-icon-stub').trigger('click')
    expect(input.attributes('type')).toBe('text')
    eyeIcon = wrapper.find('.sp-input__password sp-icon-stub')
    expect(eyeIcon.attributes('icon')).toBe('eye-slash')
    // 再次点击
    await wrapper.find('.sp-input__password sp-icon-stub').trigger('click')
    expect(input.attributes('type')).toBe('password')
    eyeIcon = wrapper.find('.sp-input__password sp-icon-stub')
    expect(eyeIcon.attributes('icon')).toBe('eye')
  })
})
