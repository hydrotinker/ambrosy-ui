<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { useId } from '../../composables/useId'
import type { CheckboxProps, CheckboxEmits } from './types'

const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: false,
  label: undefined,
  indeterminate: false,
  disabled: false,
  invalid: false,
  error: undefined,
  id: undefined
})

const emit = defineEmits<CheckboxEmits>()

const inputEl = ref<HTMLInputElement | null>(null)
const fieldId = computed(() => useId('ab-checkbox', props.id))
const isInvalid = computed(() => props.invalid || props.error != null)

const classes = computed(() => [
  'ab-checkbox',
  {
    'ab-checkbox--disabled': props.disabled,
    'ab-checkbox--invalid': isInvalid.value,
    'ab-checkbox--indeterminate': props.indeterminate
  }
])

// `indeterminate` is a DOM property only — it cannot be set via an attribute.
// `flush: 'post'` ensures the template ref is populated (post-mount) before we read it.
watchEffect(
  () => {
    if (inputEl.value) inputEl.value.indeterminate = props.indeterminate
  },
  { flush: 'post' }
)

function onChange(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).checked)
}
</script>

<template>
  <div :class="classes">
    <label class="ab-checkbox__label" :for="fieldId">
      <input
        :id="fieldId"
        ref="inputEl"
        class="ab-checkbox__input"
        type="checkbox"
        :checked="modelValue"
        :disabled="disabled"
        :aria-invalid="isInvalid || undefined"
        @change="onChange"
      />
      <span v-if="label" class="ab-checkbox__text">{{ label }}</span>
    </label>
    <p v-if="error" class="ab-checkbox__error">{{ error }}</p>
  </div>
</template>
