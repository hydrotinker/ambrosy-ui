import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Checkbox from './Checkbox.vue'

describe('Checkbox', () => {
  it('reflects the checked state', () => {
    const wrapper = mount(Checkbox, { props: { modelValue: true } })
    expect(wrapper.find('input').element.checked).toBe(true)
  })

  it('emits update:modelValue on change', async () => {
    const wrapper = mount(Checkbox)
    await wrapper.find('input').setValue(true)
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true])
  })

  it('renders a label associated with the input', () => {
    const wrapper = mount(Checkbox, { props: { label: 'Accept' } })
    const label = wrapper.find('label')
    expect(label.text()).toBe('Accept')
    expect(label.attributes('for')).toBe(wrapper.find('input').attributes('id'))
  })

  it('reflects indeterminate on the DOM element', () => {
    const wrapper = mount(Checkbox, { props: { indeterminate: true } })
    expect(wrapper.find('input').element.indeterminate).toBe(true)
    expect(wrapper.classes()).toContain('ab-checkbox--indeterminate')
  })

  it('marks invalid via error', () => {
    const wrapper = mount(Checkbox, { props: { error: 'Required' } })
    expect(wrapper.find('.ab-checkbox__error').text()).toBe('Required')
    expect(wrapper.find('input').attributes('aria-invalid')).toBe('true')
  })

  it('disables the input', () => {
    const wrapper = mount(Checkbox, { props: { disabled: true } })
    expect(wrapper.find('input').element.disabled).toBe(true)
  })
})
