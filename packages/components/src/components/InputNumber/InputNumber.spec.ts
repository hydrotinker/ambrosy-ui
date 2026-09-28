import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import InputNumber from './InputNumber.vue'

describe('InputNumber', () => {
  it('renders the bound value', () => {
    const wrapper = mount(InputNumber, { props: { modelValue: 42 } })
    expect(wrapper.find('input').element.value).toBe('42')
  })

  it('emits a number on input', async () => {
    const wrapper = mount(InputNumber)
    await wrapper.find('input').setValue('7')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([7])
  })

  it('emits null when cleared', async () => {
    const wrapper = mount(InputNumber, { props: { modelValue: 3 } })
    await wrapper.find('input').setValue('')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([null])
  })

  it('forwards min, max and step', () => {
    const wrapper = mount(InputNumber, { props: { min: 0, max: 10, step: 2 } })
    const input = wrapper.find('input')
    expect(input.attributes('min')).toBe('0')
    expect(input.attributes('max')).toBe('10')
    expect(input.attributes('step')).toBe('2')
  })

  it('marks the field invalid via error', () => {
    const wrapper = mount(InputNumber, { props: { error: 'Too small' } })
    expect(wrapper.find('.ab-input__error').text()).toBe('Too small')
    expect(wrapper.find('input').attributes('aria-invalid')).toBe('true')
  })

  it('disables the field', () => {
    const wrapper = mount(InputNumber, { props: { disabled: true } })
    expect(wrapper.find('input').element.disabled).toBe(true)
  })
})
