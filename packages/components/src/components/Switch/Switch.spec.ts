import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Switch from './Switch.vue'

describe('Switch', () => {
  it('exposes the switch role with aria-checked reflecting state', () => {
    const wrapper = mount(Switch, { props: { modelValue: true } })
    const control = wrapper.find('[role="switch"]')
    expect(control.exists()).toBe(true)
    expect(control.attributes('aria-checked')).toBe('true')
  })

  it('toggles the value on click', async () => {
    const wrapper = mount(Switch, { props: { modelValue: false } })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true])
  })

  it('does not toggle when disabled', async () => {
    const wrapper = mount(Switch, { props: { modelValue: false, disabled: true } })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
  })

  it('renders and associates a label', () => {
    const wrapper = mount(Switch, { props: { label: 'Wifi' } })
    const control = wrapper.find('button')
    const labelId = control.attributes('aria-labelledby')
    expect(labelId).toBeTruthy()
    expect(wrapper.find(`#${labelId}`).text()).toBe('Wifi')
  })

  it('applies the on modifier class', () => {
    const wrapper = mount(Switch, { props: { modelValue: true } })
    expect(wrapper.classes()).toContain('ab-switch--on')
  })
})
