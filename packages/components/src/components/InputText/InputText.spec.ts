import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import InputText from './InputText.vue'

describe('InputText', () => {
  it('renders the bound value', () => {
    const wrapper = mount(InputText, { props: { modelValue: 'hello' } })
    expect(wrapper.find('input').element.value).toBe('hello')
  })

  it('emits update:modelValue on input', async () => {
    const wrapper = mount(InputText)
    await wrapper.find('input').setValue('world')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['world'])
  })

  it('renders a label associated with the input', () => {
    const wrapper = mount(InputText, { props: { label: 'Email' } })
    const label = wrapper.find('label')
    const input = wrapper.find('input')
    expect(label.text()).toBe('Email')
    expect(label.attributes('for')).toBe(input.attributes('id'))
  })

  it('marks the field invalid', () => {
    const wrapper = mount(InputText, { props: { invalid: true } })
    const input = wrapper.find('input')
    expect(input.attributes('aria-invalid')).toBe('true')
    expect(input.classes()).toContain('ab-input__field--invalid')
  })

  it('renders an error message and implies invalid', () => {
    const wrapper = mount(InputText, { props: { error: 'Required' } })
    expect(wrapper.find('.ab-input__error').text()).toBe('Required')
    expect(wrapper.find('input').attributes('aria-invalid')).toBe('true')
  })

  it('renders prefix and suffix slots', () => {
    const wrapper = mount(InputText, {
      slots: { prefix: '<i class="pf" />', suffix: '<i class="sf" />' }
    })
    expect(wrapper.find('.ab-input__prefix .pf').exists()).toBe(true)
    expect(wrapper.find('.ab-input__suffix .sf').exists()).toBe(true)
  })

  it('disables the field', () => {
    const wrapper = mount(InputText, { props: { disabled: true } })
    expect(wrapper.find('input').element.disabled).toBe(true)
  })
})
