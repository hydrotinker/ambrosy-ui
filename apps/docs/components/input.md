<script setup>
import { ref } from 'vue'
const value = ref('')
</script>

# Input Text

A text input with `v-model` support, label, sizes, prefix/suffix slots, and
validation state. See also `InputNumber` and `InputPassword` for the numeric and
password variants.

## Basic

<div style="max-width:320px;">
  <InputText v-model="value" label="Email" placeholder="you@example.com" />
  <p style="font-size:0.875rem;color:#6b7280;">Value: {{ value || '(empty)' }}</p>
</div>

```vue
<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>

<template>
  <InputText v-model="value" label="Email" placeholder="you@example.com" />
</template>
```

## Sizes

<div style="display:flex; flex-direction:column; gap:0.75rem; max-width:320px;">
  <InputText size="sm" placeholder="Small" />
  <InputText size="md" placeholder="Medium" />
  <InputText size="lg" placeholder="Large" />
</div>

## Prefix &amp; suffix

<div style="display:flex; flex-direction:column; gap:0.75rem; max-width:320px;">
  <InputText placeholder="Search">
    <template #prefix>🔍</template>
  </InputText>
  <InputText placeholder="Amount">
    <template #suffix>USD</template>
  </InputText>
</div>

```vue
<template>
  <InputText placeholder="Search">
    <template #prefix>🔍</template>
  </InputText>
</template>
```

## States

<div style="display:flex; flex-direction:column; gap:0.75rem; max-width:320px;">
  <InputText invalid placeholder="Invalid" />
  <InputText error="This field is required" placeholder="With error message" />
  <InputText disabled placeholder="Disabled" />
</div>

## Props

| Prop          | Type                  | Default | Description                          |
| ------------- | --------------------- | ------- | ------------------------------------ |
| `modelValue`  | `string`              | `''`    | Bound value (`v-model`)              |
| `placeholder` | `string`              | `''`    | Placeholder text                     |
| `label`       | `string`              | —       | Label rendered above the field       |
| `size`        | `'sm' \| 'md' \| 'lg'` | `'md'`  | Input size                           |
| `disabled`    | `boolean`             | `false` | Disable interaction                  |
| `invalid`     | `boolean`             | `false` | Error styling + `aria-invalid`       |
| `error`       | `string`              | —       | Error message; implies `invalid`     |
| `id`          | `string`              | auto    | Field id (auto-generated if omitted) |

## Slots

| Slot     | Description                          |
| -------- | ------------------------------------ |
| `prefix` | Content rendered inside the field, left  |
| `suffix` | Content rendered inside the field, right |

## Events

| Event               | Payload      | Description      |
| ------------------- | ------------ | ---------------- |
| `update:modelValue` | `string`     | Emitted on input |
| `focus`             | `FocusEvent` | Emitted on focus |
| `blur`              | `FocusEvent` | Emitted on blur  |
