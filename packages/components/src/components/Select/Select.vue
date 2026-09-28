<script setup lang="ts">
import { computed } from 'vue'
import { useId } from '../../composables/useId'
import type { SelectProps, SelectEmits, SelectValue } from './types'

const props = withDefaults(defineProps<SelectProps>(), {
  modelValue: null,
  options: undefined,
  placeholder: undefined,
  size: 'md',
  disabled: false,
  invalid: false,
  error: undefined,
  label: undefined,
  id: undefined
})

const emit = defineEmits<SelectEmits>()

const fieldId = computed(() => useId('ab-select', props.id))
const isInvalid = computed(() => props.invalid || props.error != null)

const fieldClasses = computed(() => [
  'ab-select__field',
  `ab-select__field--${props.size}`,
  { 'ab-select__field--invalid': isInvalid.value }
])

function onChange(event: Event) {
  const raw = (event.target as HTMLSelectElement).value
  // Preserve the original (possibly numeric) value type when using `options`.
  const match = props.options?.find((o) => String(o.value) === raw)
  emit('update:modelValue', match ? match.value : (raw as SelectValue))
}
</script>

<template>
  <div class="ab-select">
    <label v-if="label" :for="fieldId" class="ab-select__label">{{ label }}</label>
    <select
      :id="fieldId"
      :class="fieldClasses"
      :value="modelValue ?? ''"
      :disabled="disabled"
      :aria-invalid="isInvalid || undefined"
      @change="onChange"
      @blur="emit('blur', $event)"
      @focus="emit('focus', $event)"
    >
      <option v-if="placeholder" value="" disabled hidden>{{ placeholder }}</option>
      <template v-if="options">
        <option
          v-for="option in options"
          :key="String(option.value)"
          :value="option.value"
          :disabled="option.disabled"
        >
          {{ option.label }}
        </option>
      </template>
      <slot v-else />
    </select>
    <p v-if="error" class="ab-select__error">{{ error }}</p>
  </div>
</template>
