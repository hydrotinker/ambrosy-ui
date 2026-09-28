import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import configPrettier from 'eslint-config-prettier'

/**
 * Shared flat ESLint config for all ambrosy-ui workspaces.
 * Consume from a package's `eslint.config.js`:
 *
 *   import config from '@ambrosy-ui/config/eslint'
 *   export default config
 *
 * ...or spread it and append package-specific overrides.
 */
export default tseslint.config(
  {
    ignores: ['**/dist/**', '**/.vitepress/cache/**', '**/.vitepress/dist/**', '**/coverage/**']
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser
      }
    }
  },
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ]
    }
  },
  configPrettier
)
