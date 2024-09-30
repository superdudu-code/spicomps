import { mount } from '@vue/test-utils'
import { afterEach, beforeAll, describe, expect, test, vi } from 'vitest'
import { useNamespace } from '@spicomps/hooks'
import SpPopover from '../index'
import SpButton from '../../button'
import type { DOMWrapper, VueWrapper } from '@vue/test-utils'

let wrapper: VueWrapper
let triggerArea: DOMWrapper<Element>
const onVisibleChange = vi.fn()

const ns = useNamespace('popover')

describe('Tooltip', () => {
  beforeAll(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount()
    }
    document.body.innerHTML = ''
  })

  test('测试基础结果和文本', async () => {
    wrapper = mount(
      () => (
        <SpPopover visible={true}>
          {{
            default: () => 'Top Left prompts info',
            reference: () => <SpButton>top-start</SpButton>,
          }}
        </SpPopover>
      ),
      { attachTo: document.body }
    )
    triggerArea = wrapper.find(`.${ns.e('trigger')}`)
    expect(triggerArea.exists()).toBe(true)
    const teleportedElement = document.body.querySelector(`.${ns.e('popper')}`)
    expect(teleportedElement).not.toBeNull()
    expect(teleportedElement?.textContent).toBe('Top Left prompts info')
  })
  test('trigger 为 click', async () => {
    const wrapper = mount(
      () => (
        <div>
          <div class="outside"></div>
          <SpPopover trigger="click">
            {{
              default: () => 'Top Left prompts info',
              reference: () => <SpButton>top-start</SpButton>,
            }}
          </SpPopover>
        </div>
      ),
      { attachTo: document.body }
    )
    triggerArea = wrapper.find(`.${ns.e('trigger')}`)
    expect(triggerArea.exists()).toBe(true)
    let teleportedElement = document.body.querySelector(`.${ns.e('popper')}`)
    expect(teleportedElement).toBeNull()

    await triggerArea.trigger('click')
    await vi.runAllTimers()
    teleportedElement = document.body.querySelector(`.${ns.e('popper')}`)
    expect(teleportedElement).not.toBeNull()
    expect(teleportedElement?.textContent).toBe('Top Left prompts info')

    await wrapper.find('.outside').trigger('click')
    await vi.runAllTimers()

    teleportedElement = document.body.querySelector(`.${ns.e('popper')}`)
    expect(teleportedElement).toBeNull()
  })
  test('测试回调函数', async () => {
    wrapper = mount(
      <SpPopover
        trigger="click"
        onUpdate:visible={(e: boolean) => wrapper.setProps({ modelValue: e })}
      >
        {{
          default: () => 'Top Left prompts info',
          reference: () => <SpButton>top-start</SpButton>,
        }}
      </SpPopover>,
      { attachTo: document.body }
    )
    triggerArea = wrapper.find(`.${ns.e('trigger')}`)

    await triggerArea.trigger('click')
    await vi.runAllTimers()
    expect(wrapper.emitted()).toHaveProperty('update:visible')
  })
})
