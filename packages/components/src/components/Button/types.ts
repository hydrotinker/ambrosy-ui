export type ButtonVariant = 'primary' | 'secondary' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps {
  /** Visual style of the button. */
  variant?: ButtonVariant
  /** Size of the button. */
  size?: ButtonSize
  /** Native button `type` attribute. */
  type?: 'button' | 'submit' | 'reset'
  /** Disable interaction. */
  disabled?: boolean
  /** Show a loading state and block clicks. */
  loading?: boolean
  /** Stretch to fill the available width. */
  block?: boolean
}

export interface ButtonEmits {
  click: [event: MouseEvent]
}
