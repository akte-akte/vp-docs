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
      },
      // NavbarGroup
      {
        text: 'Group',
        children: ['/group/foo.md', '/group/bar.md'],
      }
    ]
  }
})