<script setup lang="ts">
import { computed } from 'vue'
import { useId } from '../../composables/useId'
import type { InputTextProps, InputTextEmits } from './types'

const props = withDefaults(defineProps<InputTextProps>(), {
  modelValue: '',
  placeholder: '',
  size: 'md',
  disabled: false,
  invalid: false,
  error: undefined,
  label: undefined,
  id: undefined
})

const emit = defineEmits<InputTextEmits>()

const inputId = computed(() => useId('ab-input', props.id))
const isInvalid = computed(() => props.invalid || props.error != null)

const fieldClasses = computed(() => [
  'ab-input__field',
  `ab-input__field--${props.size}`,
  { 'ab-input__field--invalid': isInvalid.value }
])

function onInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="ab-input">
    <label v-if="label" :for="inputId" class="ab-input__label">{{ label }}</label>
    <div class="ab-input__wrapper">
      <span v-if="$slots.prefix" class="ab-input__prefix" aria-hidden="true">
        <slot name="prefix" />
      </span>
      <input
        :id="inputId"
        :class="fieldClasses"
        type="text"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :aria-invalid="isInvalid || undefined"
        @input="onInput"
        @blur="emit('blur', $event)"
        @focus="emit('focus', $event)"
      />
      <span v-if="$slots.suffix" class="ab-input__suffix">
        <slot name="suffix" />
      </span>
    </div>
    <p v-if="error" class="ab-input__error">{{ error }}</p>
  </div>
</template>
