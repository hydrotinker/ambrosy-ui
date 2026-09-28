import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Radio from './Radio.vue'

describe('Radio', () => {
  it('is checked when modelValue equals value', () => {
    const wrapper = mount(Radio, { props: { value: 'a', modelValue: 'a' } })
    expect(wrapper.find('input').element.checked).toBe(true)
  })

  it('is unchecked when modelValue differs', () => {
    const wrapper = mount(Radio, { props: { value: 'a', modelValue: 'b' } })
    expect(wrapper.find('input').element.checked).toBe(false)
  })

  it('emits its own value on change', async () => {
    const wrapper = mount(Radio, { props: { value: 'a', modelValue: 'b' } })
    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['a'])
  })

  it('renders a label associated with the input', () => {
    const wrapper = mount(Radio, { props: { value: 'a', label: 'Option A' } })
    const label = wrapper.find('label')
    expect(label.text()).toBe('Option A')
    expect(label.attributes('for')).toBe(wrapper.find('input').attributes('id'))
  })

  it('forwards the group name', () => {
    const wrapper = mount(Radio, { props: { value: 'a', name: 'group' } })
    expect(wrapper.find('input').attributes('name')).toBe('group')
  })

  it('disables the input', () => {
    const wrapper = mount(Radio, { props: { value: 'a', disabled: true } })
    expect(wrapper.find('input').element.disabled).toBe(true)
  })
})
