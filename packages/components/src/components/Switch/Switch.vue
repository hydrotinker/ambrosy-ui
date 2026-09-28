<script setup lang="ts">
import { computed } from 'vue'
import { useId } from '../../composables/useId'
import type { SwitchProps, SwitchEmits } from './types'

const props = withDefaults(defineProps<SwitchProps>(), {
  modelValue: false,
  label: undefined,
  disabled: false,
  id: undefined
})

const emit = defineEmits<SwitchEmits>()

const fieldId = computed(() => useId('ab-switch', props.id))
const labelId = computed(() => `${fieldId.value}-label`)

const classes = computed(() => [
  'ab-switch',
  {
    'ab-switch--on': props.modelValue,
    'ab-switch--disabled': props.disabled
  }
])

function toggle() {
  if (props.disabled) return
  emit('update:modelValue', !props.modelValue)
}
</script>

<template>
  <span :class="classes">
    <button
      :id="fieldId"
      type="button"
      class="ab-switch__control"
      role="switch"
      :aria-checked="modelValue"
      :aria-labelledby="label ? labelId : undefined"
      :disabled="disabled"
      @click="toggle"
    >
      <span class="ab-switch__thumb" aria-hidden="true" />
    </button>
    <span v-if="label" :id="labelId" class="ab-switch__text">{{ label }}</span>
  </span>
</template>
