<script setup lang="ts">
export type ButtonVariant = 'basic' | 'outline' | 'link'
export type ButtonType = 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info'
export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonRounded = 'none' | 'small' | 'medium' | 'large' | 'full'

export interface ButtonProps {
    variant?: ButtonVariant
    type?: ButtonType
    size?: ButtonSize
    rounded?: ButtonRounded
    label?: string,
    disabled?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
    variant: 'basic',
    type: 'primary',
    size: 'medium',
    rounded: 'medium',
    label: null,
    disabled: false
})
</script>
<template>
    <div class="aui-button">
        <div
            :class="[
            'aui-button-container',

            {'aui-button-disabled': disabled},

            {'aui-button-basic': variant === 'basic'},
            {'aui-button-outline': variant === 'outline'},
            {'aui-button-link': variant === 'link'},

            {'aui-button-primary': type === 'primary'},
            {'aui-button-secondary': type === 'secondary'},
            {'aui-button-danger': type === 'danger'},
            {'aui-button-success': type === 'success'},
            {'aui-button-warning': type === 'warning'},
            {'aui-button-info': type === 'info'},

            {'aui-button-size-small': size === 'small'},
            {'aui-button-size-medium': size === 'medium'},
            {'aui-button-size-large': size === 'large'},

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
                    <slot name="default"></slot>
                </template>
            </div>
            <div
                v-if="$slots['left']"
                class="aui-button-right"
            >
                <slot name="right"/>
            </div>
        </div>
    </div>
</template>