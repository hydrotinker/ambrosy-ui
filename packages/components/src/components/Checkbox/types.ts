export interface CheckboxProps {
  /** Checked state (use with `v-model`). */
  modelValue?: boolean
  /** Label rendered next to the control. */
  label?: string
  /** Render the indeterminate (mixed) visual state. */
  indeterminate?: boolean
  /** Disable interaction. */
  disabled?: boolean
  /** Mark as invalid (error styling + aria-invalid). */
  invalid?: boolean
  /** Optional error message; when set, implies invalid and renders below the control. */
  error?: string
  /** Optional id; auto-generated when omitted. */
  id?: string
}

export interface CheckboxEmits {
  'update:modelValue': [value: boolean]
}
