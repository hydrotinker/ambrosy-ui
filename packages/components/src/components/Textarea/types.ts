export type TextareaSize = 'sm' | 'md' | 'lg'

export interface TextareaProps {
  /** Bound value (use with `v-model`). */
  modelValue?: string
  /** Placeholder text. */
  placeholder?: string
  /** Number of visible text rows. */
  rows?: number
  /** Size of the control. */
  size?: TextareaSize
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

export interface TextareaEmits {
  'update:modelValue': [value: string]
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
}
