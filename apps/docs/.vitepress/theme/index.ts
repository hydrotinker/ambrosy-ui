import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import AmbrosyUI from '@ambrosy-ui/components'
import '@ambrosy-ui/theme-default/css'
import ThemePicker from './ThemePicker.vue'
import { initTheme } from './themes'

// Register the UI plugin so components are usable directly inside markdown demos.
// The default theme CSS above is the SSR / no-JS baseline; `initTheme()` swaps in
// the persisted theme on the client (see ./themes.ts).
export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(ThemePicker)
    }),
  enhanceApp({ app }) {
    app.use(AmbrosyUI)
    initTheme()
  }
} satisfies Theme
