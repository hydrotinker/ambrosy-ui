import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import InputPassword from './InputPassword.vue'

describe('InputPassword', () => {
  it('renders as a password field by default', () => {
    const wrapper = mount(InputPassword, { props: { modelValue: 'secret' } })
    const input = wrapper.find('input')
    expect(input.attributes('type')).toBe('password')
    expect(input.element.value).toBe('secret')
  })

  it('emits update:modelValue on input', async () => {
    const wrapper = mount(InputPassword)
    await wrapper.find('input').setValue('hunter2')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['hunter2'])
  })

  it('toggle button flips the field type between password and text', async () => {
    const wrapper = mount(InputPassword)
    const toggle = wrapper.find('.ab-input__toggle')
    expect(wrapper.find('input').attributes('type')).toBe('password')
    await toggle.trigger('click')
    expect(wrapper.find('input').attributes('type')).toBe('text')
    await toggle.trigger('click')
    expect(wrapper.find('input').attributes('type')).toBe('password')
  })

  it('hides the built-in toggle when a suffix slot is provided', () => {
    const wrapper = mount(InputPassword, { slots: { suffix: '<i class="sf" />' } })
    expect(wrapper.find('.ab-input__toggle').exists()).toBe(false)
    expect(wrapper.find('.ab-input__suffix .sf').exists()).toBe(true)
  })

  it('marks the field invalid via error', () => {
    const wrapper = mount(InputPassword, { props: { error: 'Too weak' } })
    expect(wrapper.find('.ab-input__error').text()).toBe('Too weak')
    expect(wrapper.find('input').attributes('aria-invalid')).toBe('true')
  })

  it('disables the field and toggle', () => {
    const wrapper = mount(InputPassword, { props: { disabled: true } })
    expect(wrapper.find('input').element.disabled).toBe(true)
    expect((wrapper.find('.ab-input__toggle').element as HTMLButtonElement).disabled).toBe(true)
  })
})
