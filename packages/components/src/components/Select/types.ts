export type SelectSize = 'sm' | 'md' | 'lg'

export type SelectValue = string | number

export interface SelectOption {
  /** Text shown for the option. */
  label: string
  /** Value emitted when the option is selected. */
  value: SelectValue
  /** Disable this individual option. */
  disabled?: boolean
}

export interface SelectProps {
  /** Bound value (use with `v-model`). */
  modelValue?: SelectValue | null
  /** Options rendered as `<option>` elements. Omit to supply your own via the default slot. */
  options?: SelectOption[]
  /** Placeholder shown as a disabled first option when no value is selected. */
  placeholder?: string
  /** Size of the control. */
  size?: SelectSize
  /** Disable interaction. */
  disabled?: boolean
  /** Mark as invalid (error styling + aria-invalid). */
  invalid?: boolean
  /** Optional error message; when set, implies invalid and renders below the field. */
  error?: string
  /** Optional label rendered above the field. */
  label?: string
  /** Optional id; auto-generated when omitted. */
  id?: string
}

export interface SelectEmits {
  'update:modelValue': [value: SelectValue]
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
}
