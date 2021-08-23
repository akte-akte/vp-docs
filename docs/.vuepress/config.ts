import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-AU',
  title: 'Hello docs',
  description: 'Writing docs',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    navbar: [
      // NavbarItem
      {
        text: 'Good things',
        link: '/good-things/',
        children: ['/good-things/git-help.md', '/good-things/svg-tools.md'],
      },
      // NavbarGroup
      {
        text: 'Other things',
        children: ['/other-things/cook-things.md'],
      }
    ]
  }
})