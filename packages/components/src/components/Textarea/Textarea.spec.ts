import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Textarea from './Textarea.vue'

describe('Textarea', () => {
  it('renders the bound value', () => {
    const wrapper = mount(Textarea, { props: { modelValue: 'notes' } })
    expect(wrapper.find('textarea').element.value).toBe('notes')
  })

  it('emits update:modelValue on input', async () => {
    const wrapper = mount(Textarea)
    await wrapper.find('textarea').setValue('more notes')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['more notes'])
  })

  it('renders a label associated with the field', () => {
    const wrapper = mount(Textarea, { props: { label: 'Bio' } })
    const label = wrapper.find('label')
    expect(label.text()).toBe('Bio')
    expect(label.attributes('for')).toBe(wrapper.find('textarea').attributes('id'))
  })

  it('applies the rows attribute', () => {
    const wrapper = mount(Textarea, { props: { rows: 8 } })
    expect(wrapper.find('textarea').attributes('rows')).toBe('8')
  })

  it('marks the field invalid via error', () => {
    const wrapper = mount(Textarea, { props: { error: 'Required' } })
    expect(wrapper.find('.ab-textarea__error').text()).toBe('Required')
    expect(wrapper.find('textarea').attributes('aria-invalid')).toBe('true')
  })

  it('disables the field', () => {
    const wrapper = mount(Textarea, { props: { disabled: true } })
    expect(wrapper.find('textarea').element.disabled).toBe(true)
  })
})
