import type { App, Plugin } from 'vue'
import { Button } from './components/Button'
import { InputText } from './components/InputText'
import { InputNumber } from './components/InputNumber'
import { InputPassword } from './components/InputPassword'
import { Textarea } from './components/Textarea'
import { Select } from './components/Select'
import { Checkbox } from './components/Checkbox'
import { Radio } from './components/Radio'
import { Switch } from './components/Switch'

// Public component exports (named imports + tree-shaking)
export { Button } from './components/Button'
export { InputText } from './components/InputText'
export { InputNumber } from './components/InputNumber'
export { InputPassword } from './components/InputPassword'
export { Textarea } from './components/Textarea'
export { Select } from './components/Select'
export { Checkbox } from './components/Checkbox'
export { Radio } from './components/Radio'
export { Switch } from './components/Switch'

// Composables
export { useId } from './composables'

// Public types
export type { ButtonProps, ButtonEmits, ButtonVariant, ButtonSize } from './components/Button'
export type { InputTextProps, InputTextEmits, InputSize } from './components/InputText'
export type { InputNumberProps, InputNumberEmits } from './components/InputNumber'
export type { InputPasswordProps, InputPasswordEmits } from './components/InputPassword'
export type { TextareaProps, TextareaEmits, TextareaSize } from './components/Textarea'
export type {
  SelectProps,
  SelectEmits,
  SelectSize,
  SelectOption,
  SelectValue
} from './components/Select'
export type { CheckboxProps, CheckboxEmits } from './components/Checkbox'
export type { RadioProps, RadioEmits, RadioValue } from './components/Radio'
export type { SwitchProps, SwitchEmits } from './components/Switch'

const components = {
  Button,
  InputText,
  InputNumber,
  InputPassword,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch
}

/**
 * Vue plugin that globally registers every ambrosy-ui component.
 *
 * The components are unstyled — pair them with a theme stylesheet, e.g.
 *
 *   import AmbrosyUI from '@ambrosy-ui/components'
 *   import '@ambrosy-ui/theme-default/css'
 *   app.use(AmbrosyUI)
 */
export const AmbrosyUI: Plugin = {
  install(app: App) {
    for (const [name, component] of Object.entries(components)) {
      app.component(name, component)
    }
  }
}

export default AmbrosyUI
