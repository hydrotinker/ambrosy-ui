export type InputSize = 'sm' | 'md' | 'lg'

export interface InputTextProps {
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
  /** Optional id; auto-generated when omitted. */
  id?: string
}

export interface InputTextEmits {
  'update:modelValue': [value: string]
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
}
