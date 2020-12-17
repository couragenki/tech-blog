---
title: This is a reminder of how to create a site using nuxt-content.
created_at: 2020-06-13
updated_at: null
date: 2020-06-13
image: /img/tech.jpg
description: I'm writing this article as I caught up with the process of building a development environment using Nuxt.js and TypeScript. If you follow the described commands, you should be able to reproduce it.
type: tech
tags:
  - Nuxt.js
  - TypeScript
---

Follow the setup instructions on the official NuxtTypeScript website.

The version of node in this article is `v11.9.0`.

https://typescript.nuxtjs.org/ja/guide/setup.html

## 1. Run the installation

 Run `npm init` to create a project.

`yarn add --dev @nuxt/typescript-build`
or
`npm install --save-dev @nuxt/typescript-build`

If you check with `git status` after running the above

```json
node_modules/
package-lock.json
```

differences.

## 2.git to set the files to be excluded.

Create a file to exclude from git management with `vim .gitignore`.

![スクリーンショット 2020-06-13 17.00.23.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/ff62f3f3-7510-750e-1bf7-63bd6846e540.png)

Include the settings to exclude in the file you created.

```.gitignore
/node_modules
/dist
.nuxt/
```

`.nuxt/` is ignored because of the difficulty in managing build diffs.

![スクリーンショット 2020-06-13 17.00.57.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/e25fcaa0-f0ba-593f-984c-9567e124b2f6.png)

## 3.nuxt.config.jsを作成

`vim nuxt.config.js` to create nuxt.config.js.

After creating it, add the settings.

.eslintrc.js

```javascript
export default {
  buildModules: ['@nuxt/typescript-build']
}
```

## 4. Create tsconfig.json

Use `vim tsconfig.json` to create tsconfig.json.

After creating it, add the configuration.

```json
{
  "compilerOptions": {
    "target": "es2018",
    "module": "esnext",
    "moduleResolution": "node",
    "lib": [
      "esnext",
      "esnext.asynciterable",
      "dom"
    ],
    "esModuleInterop": true,
    "allowJs": true,
    "sourceMap": true,
    "strict": true,
    "noEmit": true,
    "baseUrl": ".",
    "paths": {
      "~/*": [
        "./*"
      ],
      "@/*": [
        "./*"
      ]
    },
    "types": [
      "@types/node",
      "@nuxt/types"
    ]
  },
  "exclude": [
    "node_modules"
  ]
}
```

## 5. Create a file to use Vue

`vim vue-shim.d.ts`

Describe the initial settings.

vue-shim.d.ts

```typescript
declare module "*.vue" {
  import Vue from 'vue'
  export default Vue
}
```

Now that you have installed and configured, commit.

When I finished, I committed to the repository I created.

I've set up gitignore to exclude files, so when I `git status`, the diff looks like this

`git status` Check with

```.gitignore
.gitignore
nuxt.config.js
package-lock.json
package.json
tsconfig.json
vue-shim.d.ts
```

No problem here, so commit once.

```
git add --all
git commit -m 'nuxt+typescriptで環境構築'
```

[nuxt+typescriptで環境構築](https://github.com/couragenki/genki-blog/commit/921e4b7c79aa042ccfa37b2ad9db9ef954683a27)

## 6.Added settings for TypeScript

Learn more about typeCheck

https://typescript.nuxtjs.org/ja/guide/setup.html#typecheck

Learn more about ignoreNotFoundWarnings.

https://typescript.nuxtjs.org/ja/guide/setup.html#ignoreNotFoundWarnings

For more information about loader, click here.

https://typescript.nuxtjs.org/ja/guide/setup.html#loaders

Based on these, we will add them to nuxt.config.js.

nuxt.config.js

```javascript
export default {
  buildModules: [
    ['@nuxt/typescript-build', {
      typeCheck: true,
      ignoreNotFoundWarnings: true
    }]
  ],
  loaders: {
    ts: {
      silent: true
    },
    tsx: {
      silent: true
    }
  }
}
```

I'll put the diff here on my Github.

[Typescriptの設定を追記](https://github.com/couragenki/genki-blog/commit/7abc4ab09ac6da5c39ee53da2c1d8d263abf8789)

## 7.Setting up Runtime

Run the installation first.

https://typescript.nuxtjs.org/ja/guide/runtime.html

`npm install @nuxt/typescript-runtime`

Then add to package.json

- `script
- `dependencies
- `dependencies`.

in the package.json file.

`vim package.json`

package.json

```json
"dependencies": {
    "@nuxt/typescript-runtime": "latest",
    "nuxt": "latest"
  },
  "devDependencies": {
    "@nuxt/typescript-build": "latest"
  },
  "scripts": {
    "dev": "nuxt-ts",
    "build": "nuxt-ts build",
    "generate": "nuxt-ts generate",
    "start": "nuxt-ts start"
  },
```

After completing the description of the above settings, go ahead and install it with `npm i`.

The log will show the logo of nuxt so much.

![スクリーンショット 2020-06-13 18.54.20.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/27305cb8-0cd9-f0e9-2bb4-d9d711ba0ad1.png)

Then, build and start in that order.

`npm run build`

`npm run start`

If you haven't set it up, go to http://localhost:3000/

![スクリーンショット 2020-06-13 18.58.17.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/0ffa85b5-8917-01a6-1712-f328a2e6a65b.png)

Commit the work here.
[runtimeの設定](https://github.com/couragenki/genki-blog/commit/fa424efb7a88b05cfabc52cbce0a0f2c661126e2)

## 8.Lint Settings

Installation

Run both of these

`npm i -D @nuxtjs/eslint-config-typescript`
`npm i eslint --save-dev`

Create a file and describe the settings

`vim .eslintrc.js`

.eslintrc.js

```javascript
module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ]
}
```

Include the script in package.json to execute the lint

package.json

```json
"lint": "eslint --ext .ts,.js,.vue ."
```

`npm run lint` Run it in

```
  vue-shim.d.ts
  1:16  error  Strings must use singlequote  quotes
```

It gave me an error.

Committing the work here

[Lintを追加](https://github.com/couragenki/genki-blog/commit/16ce6d75a5ba7a73c0c3bfe646f34e8f49562eee)

## Environment build complete

If you've made it this far, you've finished building the environment.

Thanks for your help!

[Nuxt.js + TypeScriptでの開発事始め](https://qiita.com/couragenki/items/d223bf6023b9c6c3fe6a)に続きます。
