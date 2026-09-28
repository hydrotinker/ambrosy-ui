---
layout: home
hero:
  name: ambrosy-ui
  text: A Vue 3 UI component library
  tagline: TypeScript, Composition API, and scoped SCSS design tokens.
  actions:
    - theme: brand
      text: Browse Components
      link: /components/button
features:
  - title: Composition API + TypeScript
    details: Every component is authored with <script setup lang="ts"> and fully typed props/emits.
  - title: Token-driven theming
    details: Styling is driven by CSS custom properties, so theming works without a rebuild.
  - title: Tree-shakeable
    details: Import only the components you use, or register everything via the plugin.
---

## Installation

```bash
pnpm add @ambrosy-ui/components @ambrosy-ui/theme-default vue
```

```ts
import { createApp } from 'vue'
import AmbrosyUI from '@ambrosy-ui/components'
import '@ambrosy-ui/theme-default/css'

createApp(App).use(AmbrosyUI).mount('#app')
```
