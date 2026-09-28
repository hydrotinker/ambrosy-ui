<script setup lang="ts">
import { THEMES, activeTheme, applyTheme, type ThemeId } from './themes'

function onChange(event: Event) {
  applyTheme((event.target as HTMLSelectElement).value as ThemeId)
}
</script>

<template>
  <label class="theme-picker">
    <span class="theme-picker__label">Theme</span>
    <select
      class="theme-picker__select"
      :value="activeTheme"
      aria-label="Select component theme"
      @change="onChange"
    >
      <option v-for="theme in THEMES" :key="theme.id" :value="theme.id">
        {{ theme.label }}
      </option>
    </select>
  </label>
</template>

<style scoped>
.theme-picker {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-left: 0.75rem;
  font-size: 0.8125rem;
}

.theme-picker__label {
  color: var(--vp-c-text-2);
  white-space: nowrap;
}

.theme-picker__select {
  padding: 0.25rem 0.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 0.8125rem;
  line-height: 1.4;
  cursor: pointer;
  transition: border-color 0.2s;
}

.theme-picker__select:hover {
  border-color: var(--vp-c-brand-1);
}

@media (max-width: 768px) {
  .theme-picker__label {
    display: none;
  }
}
</style>
