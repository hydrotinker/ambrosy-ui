import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Select from './Select.vue'

const options = [
  { label: 'One', value: 1 },
  { label: 'Two', value: 2 },
  { label: 'Three', value: 3, disabled: true }
]

describe('Select', () => {
  it('renders options from the options prop', () => {
    const wrapper = mount(Select, { props: { options } })
    const opts = wrapper.findAll('option')
    expect(opts).toHaveLength(3)
    expect(opts[0].text()).toBe('One')
    expect(opts[2].attributes('disabled')).toBeDefined()
  })

  it('renders a disabled placeholder option', () => {
    const wrapper = mount(Select, { props: { options, placeholder: 'Pick one' } })
    const first = wrapper.find('option')
    expect(first.text()).toBe('Pick one')
    expect(first.attributes('disabled')).toBeDefined()
  })

  it('reflects the bound value', () => {
    const wrapper = mount(Select, { props: { options, modelValue: 2 } })
    expect((wrapper.find('select').element as HTMLSelectElement).value).toBe('2')
  })

  it('emits the selected value preserving its type', async () => {
    const wrapper = mount(Select, { props: { options } })
    await wrapper.find('select').setValue('2')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([2])
  })

  it('renders slot options when no options prop is given', () => {
    const wrapper = mount(Select, {
      slots: { default: '<option value="a">A</option>' }
    })
    expect(wrapper.find('option').text()).toBe('A')
  })

  it('marks the field invalid via error', () => {
    const wrapper = mount(Select, { props: { options, error: 'Required' } })
    expect(wrapper.find('.ab-select__error').text()).toBe('Required')
    expect(wrapper.find('select').attributes('aria-invalid')).toBe('true')
  })

  it('disables the field', () => {
    const wrapper = mount(Select, { props: { options, disabled: true } })
    expect(wrapper.find('select').element.disabled).toBe(true)
  })
})
