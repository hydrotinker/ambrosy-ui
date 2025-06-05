import { defineConfig } from 'vitepress'
import tailwindcss from "@tailwindcss/vite"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ambrosy UI Docs",
  description: "Sassy Description",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Form Elements',
        items: [
          { text: 'Button', link: '/button' },
          { text: 'Checkbox', link: '/checkbox' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hydrotinker/ambrosy-ui' }
    ]
  },
  vite: {
    plugins: [
      tailwindcss()
    ]
  }
})
