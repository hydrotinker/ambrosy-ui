# ambrosy-ui

An **unstyled** Vue 3 UI component kit plus swappable **theme** packages, built
with TypeScript and the Composition API. Components ship only their structural
markup and stable BEM class hooks; a theme package provides the design tokens and
CSS that style them. Managed as a pnpm + Turborepo monorepo.

## Packages

| Package                                                       | Path                       | Description                                            |
| ------------------------------------------------------------- | -------------------------- | ------------------------------------------------------ |
| [`@ambrosy-ui/components`](packages/components)               | `packages/components`      | Unstyled Vue 3 component kit (Button, Input, …)        |
| [`@ambrosy-ui/theme-default`](packages/theme-default)         | `packages/theme-default`   | Default design system — tokens + component styles      |
| [`@ambrosy-ui/theme-getisekaid`](packages/theme-getisekaid)  | `packages/theme-getisekaid`| Getisekaid (pet-project) design system                 |
| `@ambrosy-ui/config`                                          | `packages/config`          | Shared tsconfig / eslint / prettier config             |
| docs                                                          | `apps/docs`                | VitePress documentation site & playground              |

Each theme is self-contained (its own token values + component CSS) so it can be
published from its own repository and swapped independently.

## Requirements

- Node.js >= 18.18
- pnpm >= 9

## Getting started

```bash
pnpm install        # install + link workspaces
pnpm build          # build components + themes -> docs (dependency order)
pnpm dev            # run dev tasks (docs site on http://localhost:5173)
pnpm test           # Vitest unit/component tests
pnpm test:e2e       # Playwright end-to-end tests (builds + previews docs)
pnpm lint           # ESLint across all workspaces
pnpm typecheck      # vue-tsc type checking
```

## Using the library

Install the components alongside a theme stylesheet:

```ts
import { createApp } from 'vue'
import AmbrosyUI from '@ambrosy-ui/components'
import '@ambrosy-ui/theme-default/css'
import App from './App.vue'

createApp(App).use(AmbrosyUI).mount('#app')
```

Or import components individually:

```vue
<script setup lang="ts">
import { Button, Input } from '@ambrosy-ui/components'
</script>
```

Swap the look by importing a different theme — e.g.
`import '@ambrosy-ui/theme-getisekaid/css'` — or override any `--ab-*` CSS
variable at runtime.

## Adding a component

Each component lives in its own folder under `packages/components/src/components/`
and follows a 4-file convention — see [`packages/components`](packages/components)
for details:

```
components/MyThing/
├── MyThing.vue        # <script setup lang="ts"> + BEM class hooks (no styles)
├── types.ts           # exported prop / variant types
├── index.ts           # re-export component + types
└── MyThing.spec.ts    # Vitest + Vue Test Utils
```

Then export it from `packages/components/src/index.ts`, and add the matching
styles to each theme under `packages/<theme>/src/components/`.
