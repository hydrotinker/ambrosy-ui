export interface SwitchProps {
  /** On/off state (use with `v-model`). */
  modelValue?: boolean
  /** Label rendered next to the control. */
  label?: string
  /** Disable interaction. */
  disabled?: boolean
  /** Optional id; auto-generated when omitted. */
  id?: string
}

export interface SwitchEmits {
  'update:modelValue': [value: boolean]
}
