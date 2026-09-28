import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// Library-mode build for @ambrosy-ui/components.
// `vue` is externalized (peer dependency); declarations are emitted by
// vite-plugin-dts. The components are unstyled, so the build emits no CSS —
// styling is provided by separate theme packages.
export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: './tsconfig.build.json',
      cleanVueFileName: true,
      rollupTypes: true
    })
  ],
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      name: 'AmbrosyComponents',
      formats: ['es', 'cjs'],
      fileName: (format) => `components.${format === 'es' ? 'js' : 'cjs'}`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: { vue: 'Vue' }
      }
    }
  }
})
