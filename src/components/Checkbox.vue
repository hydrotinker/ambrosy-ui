<script setup lang="ts">
export interface CheckboxProps {
    modelValue: boolean,
    label?: string,
    disabled?: boolean
}

export interface CheckboxEmits {
    'update:modelValue': [value: boolean]
}

const props = withDefaults(defineProps<CheckboxProps>(), {
    disabled: false
})

const emits = defineEmits<CheckboxEmits>()

const updateValue = (event: Event) => {
    console.log(123)
    const target = event.target as HTMLInputElement
    emit('update:modelValue', target.checked)
}
</script>
<template>
    <div class="aui-checkbox">
        <input
            class="aui-checkbox-input"
            type="checkbox"
            :checked="modelValue"
            @change="updateValue"
        >
        <div class="aui-checkbox-container"></div>
        <slot name="default">{{ label }}</slot>
    </div>
</template>