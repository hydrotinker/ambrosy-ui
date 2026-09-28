import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ambrosy-ui',
  description: 'A Vue 3 UI component library',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/' },
      { text: 'Components', link: '/components/button' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [{ text: 'Getting Started', link: '/' }]
      },
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Input Text', link: '/components/input' }
        ]
      }
    ]
  }
})
