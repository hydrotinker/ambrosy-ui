import type { InputSize } from '../InputText/types'

export interface InputPasswordProps {
  /** Bound value (use with `v-model`). */
  modelValue?: string
  /** Placeholder text. */
  placeholder?: string
  /** Size of the input. */
  size?: InputSize
  /** Disable interaction. */
  disabled?: boolean
  /** Mark as invalid (error styling + aria-invalid). */
  invalid?: boolean
  /** Optional error message; when set, implies invalid and renders below the field. */
  error?: string
  /** Optional label rendered above the field. */
  label?: string
  /** Show the built-in reveal/hide toggle button. */
  toggle?: boolean
  /** Optional id; auto-generated when omitted. */
  id?: string
}

export interface InputPasswordEmits {
  'update:modelValue': [value: string]
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
}
