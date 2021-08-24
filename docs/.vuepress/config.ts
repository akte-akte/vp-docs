import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { path } from '@vuepress/utils'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-AU',
  title: 'Hello docs',
  description: 'Writing docs',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    navbar: [
      {
        text: 'Good things',
        link: '/good-things/',
        children: ['/good-things/git-help.md', '/good-things/svg-tools.md', '/good-things/drag-drop.md']
      },
      {
        text: 'Other things',
        children: ['/other-things/cook-things.md']
      }
    ]
  },
  plugins: [
    [
      '@vuepress/plugin-register-components',
      {
        componentsDir: path.resolve(__dirname, './components')
      }
    ],
    [
      require("vuepress-frontmatter-lint"),
      { // Whether to abort the site build if front matter doesn't
        // validate against the following rules.
        abortBuild: true,
        specs: {
          title: {
            type: String,
            required: true
          },
          lang: {
            type: Number,
            required: false
          },
          description: {
            type: String,
            required: false
          }
        }
      }
    ]
  ]
})
