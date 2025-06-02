<script setup lang="ts">
interface ComponentProps {
    name: string
}

defineProps<ComponentProps>()
</script>
<template>
    <div class="mb-4 last:mb-0 pb-4 border-b last:border-b-0 border-gray-200">
        <div class="mb-3 text-3xl">{{ name }}</div>
        <slot />
    </div>
</template>