---
lang: en-AU
title: Git help
description: Git helpers
---

# Git help

You can force yourself to write nicer commits by adding a couple of dependencies to your project.
It is a good start for messy typers like me:

[Nullfactory article on setting up Husky & Commitizen](http://www.nullfactory.net/2017/04/enforce-commit-message-standards-and-generate-changelogs-via-git/)

**TL;DR**

1. Add husky

```bash
npm install husky --save-dev
```

2. Add validate-commit-msg

```bash
npm install --save-dev validate-commit-msg
```

3. Update your package.json

```json
"scripts": {
    "commitmsg": "validate-commit-msg"
},
```

4. Add and configure Commitizen

```bash
npm install -g commitizen
commitizen init cz-conventional-changelog --save-dev --save-exact
```

5. Check that package.json was updated with this

```json
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
```

6. Commit something, follow the prompts

```bash
git cz
```
