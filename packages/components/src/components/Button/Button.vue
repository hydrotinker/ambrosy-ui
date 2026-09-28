<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonProps, ButtonEmits } from './types'

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
  loading: false,
  block: false
})

const emit = defineEmits<ButtonEmits>()

const isDisabled = computed(() => props.disabled || props.loading)

const classes = computed(() => [
  'ab-button',
  `ab-button--${props.variant}`,
  `ab-button--${props.size}`,
  {
    'ab-button--block': props.block,
    'ab-button--loading': props.loading
  }
])

function onClick(event: MouseEvent) {
  if (isDisabled.value) {
    event.preventDefault()
    event.stopPropagation()
    return
  }
  emit('click', event)
}
</script>

<template>
  <button
    :type="type"
    :class="classes"
    :disabled="isDisabled"
    :aria-busy="loading || undefined"
    @click="onClick"
  >
    <span v-if="loading" class="ab-button__spinner" aria-hidden="true" />
    <span class="ab-button__label"><slot /></span>
  </button>
</template>
