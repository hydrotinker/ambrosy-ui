export type RadioValue = string | number

export interface RadioProps {
  /** Currently selected value of the group (use with `v-model`). */
  modelValue?: RadioValue | null
  /** This radio's own value; selected when it equals `modelValue`. */
  value: RadioValue
  /** Shared group name; radios with the same name are mutually exclusive. */
  name?: string
  /** Label rendered next to the control. */
  label?: string
  /** Disable interaction. */
  disabled?: boolean
  /** Optional id; auto-generated when omitted. */
  id?: string
}

export interface RadioEmits {
  'update:modelValue': [value: RadioValue]
}
