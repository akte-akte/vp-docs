---
lang: en-AU
title: Linting
description: The linters used on this project
---

# Linting

There are multiple programming languages on this site, which can get messy, and things break if you let formatters run wild. By adding and configuring some extra linters, we can keep the code tidy and limit the red and yellow squiggly lines to where it counts.

## Vue linting

```json
"devDependencies": {
    // more things
    "eslint-plugin-vue": "^7.16.0",
    //more things
  },
```

## Frontmatter

<!-- prettier-ignore -->
:::: code-group
::: code-group-item package.json

```json
"devDependencies": {
    //more things
    "vuepress-frontmatter-lint": "^2.1.2"
  },
```

<!-- prettier-ignore -->
:::
::: code-group-item config.ts

```ts
plugins: [
  [
    require("vuepress-frontmatter-lint"),
    {
      // Whether to abort the site build if front matter doesn't
      // validate against the following rules.
      abortBuild: true,
      specs: {
        title: {
          type: String,
          required: true,
        },
        lang: {
          type: String,
          required: false,
        },
        description: {
          type: String,
          required: false,
        },
      },
    },
  ],
]
```

<!-- prettier-ignore -->
:::
::::

## TODO: markdown linting
