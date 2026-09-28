<script setup lang="ts">
import { computed } from 'vue'
import { useId } from '../../composables/useId'
import type { RadioProps, RadioEmits } from './types'

const props = withDefaults(defineProps<RadioProps>(), {
  modelValue: null,
  name: undefined,
  label: undefined,
  disabled: false,
  id: undefined
})

const emit = defineEmits<RadioEmits>()

const fieldId = computed(() => useId('ab-radio', props.id))
const isChecked = computed(() => props.modelValue === props.value)

const classes = computed(() => [
  'ab-radio',
  {
    'ab-radio--checked': isChecked.value,
    'ab-radio--disabled': props.disabled
  }
])

function onChange() {
  emit('update:modelValue', props.value)
}
</script>

<template>
  <label :class="classes" :for="fieldId">
    <input
      :id="fieldId"
      class="ab-radio__input"
      type="radio"
      :name="name"
      :checked="isChecked"
      :disabled="disabled"
      @change="onChange"
    />
    <span v-if="label" class="ab-radio__text">{{ label }}</span>
  </label>
</template>
