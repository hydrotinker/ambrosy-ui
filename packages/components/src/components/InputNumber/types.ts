import type { InputSize } from '../InputText/types'

export interface InputNumberProps {
  /** Bound value (use with `v-model`). `null` when the field is empty. */
  modelValue?: number | null
  /** Placeholder text. */
  placeholder?: string
  /** Minimum allowed value. */
  min?: number
  /** Maximum allowed value. */
  max?: number
  /** Step increment. */
  step?: number
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
  /** Optional id; auto-generated when omitted. */
  id?: string
}

export interface InputNumberEmits {
  'update:modelValue': [value: number | null]
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
}
