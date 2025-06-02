<script setup lang="ts">
interface BlockProps {
    name: string
}

defineProps<BlockProps>()
</script>
<template>
    <div class="mb-3 text-xl">{{ name }}</div>
    <div>
        <slot />
    </div>
</template>