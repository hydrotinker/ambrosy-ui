<script setup lang="ts">
export type ButtonVariant = 'basic' | 'outline'
export type ButtonType = 'primary' | 'secondary'
export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonRounded = 'none' | 'small' | 'medium' | 'large' | 'full'

export interface ButtonProps {
    variant?: ButtonVariant
    type?: ButtonType
    size?: ButtonSize
    rounded?: ButtonRounded
    label?: string
}

const props = withDefaults(defineProps<ButtonProps>(), {
    variant: 'basic',
    type: 'primary',
    size: 'medium',
    rounded: 'medium',
    label: null
})
</script>
<template>
    <div
        :class="[
            'aui-button-container',
            {'aui-button-basic': variant === 'basic'},
            {'aui-button-outline': variant === 'outline'},
            {'aui-button-primary': type === 'primary'},
            {'aui-button-secondary': type === 'secondary'},
            {'aui-button-rounded-none': rounded === 'none'},
            {'aui-button-rounded-small': rounded === 'small'},
            {'aui-button-rounded-medium': rounded === 'medium'},
            {'aui-button-rounded-large': rounded === 'large'},
            {'aui-button-rounded-full': rounded === 'full'},
        ]">
        <div
            v-if="$slots['left']"
            class="aui-button-left"
        >
            <slot name="left"/>
        </div>
        <div class="aui-button-center">
            <template v-if="label">
                {{ label }}
            </template>
            <template v-else>
                <slot></slot>
            </template>
        </div>
        <div class="aui-button-right">
            <slot name="right"/>
        </div>
    </div>
</template>