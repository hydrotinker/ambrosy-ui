<script setup lang="ts">
import { computed, ref } from 'vue'
import { useId } from '../../composables/useId'
import type { InputPasswordProps, InputPasswordEmits } from './types'

const props = withDefaults(defineProps<InputPasswordProps>(), {
  modelValue: '',
  placeholder: '',
  size: 'md',
  disabled: false,
  invalid: false,
  error: undefined,
  label: undefined,
  toggle: true,
  id: undefined
})

const emit = defineEmits<InputPasswordEmits>()

const inputId = computed(() => useId('ab-input', props.id))
const isInvalid = computed(() => props.invalid || props.error != null)
const revealed = ref(false)

const fieldClasses = computed(() => [
  'ab-input__field',
  `ab-input__field--${props.size}`,
  { 'ab-input__field--invalid': isInvalid.value }
])

function onInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

function toggleReveal() {
  if (props.disabled) return
  revealed.value = !revealed.value
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
        :type="revealed ? 'text' : 'password'"
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
      <button
        v-else-if="toggle"
        type="button"
        class="ab-input__toggle"
        :disabled="disabled"
        :aria-label="revealed ? 'Hide password' : 'Show password'"
        :aria-pressed="revealed"
        @click="toggleReveal"
      >
        {{ revealed ? 'Hide' : 'Show' }}
      </button>
    </div>
    <p v-if="error" class="ab-input__error">{{ error }}</p>
  </div>
</template>
