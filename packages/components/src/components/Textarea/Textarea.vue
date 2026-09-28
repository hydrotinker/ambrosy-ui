<script setup lang="ts">
import { computed } from 'vue'
import { useId } from '../../composables/useId'
import type { TextareaProps, TextareaEmits } from './types'

const props = withDefaults(defineProps<TextareaProps>(), {
  modelValue: '',
  placeholder: '',
  rows: 3,
  size: 'md',
  disabled: false,
  invalid: false,
  error: undefined,
  label: undefined,
  id: undefined
})

const emit = defineEmits<TextareaEmits>()

const fieldId = computed(() => useId('ab-textarea', props.id))
const isInvalid = computed(() => props.invalid || props.error != null)

const fieldClasses = computed(() => [
  'ab-textarea__field',
  `ab-textarea__field--${props.size}`,
  { 'ab-textarea__field--invalid': isInvalid.value }
])

function onInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLTextAreaElement).value)
}
</script>

<template>
  <div class="ab-textarea">
    <label v-if="label" :for="fieldId" class="ab-textarea__label">{{ label }}</label>
    <textarea
      :id="fieldId"
      :class="fieldClasses"
      :value="modelValue"
      :placeholder="placeholder"
      :rows="rows"
      :disabled="disabled"
      :aria-invalid="isInvalid || undefined"
      @input="onInput"
      @blur="emit('blur', $event)"
      @focus="emit('focus', $event)"
    />
    <p v-if="error" class="ab-textarea__error">{{ error }}</p>
  </div>
</template>
