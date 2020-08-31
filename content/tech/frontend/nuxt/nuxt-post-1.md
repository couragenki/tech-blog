---
title: Nuxt+TypeScriptでの環境構築手順
created_at: 2019-06-13
updated_at: null
date: 2019-06-13
description: Nuxt.jsとTypeScriptを用いた開発環境構築の手順をキャッチアップしたので記事にしています。記載のコマンド通りに実行していただければ再現できると思います。
type: tech
tags:
  - Next.js
  - TypeScript
---

NuxtTypeScript公式サイトのセットアップにしたがって進めます。

こちらの記事のnodeのバージョンは`v11.9.0`です。

https://typescript.nuxtjs.org/ja/guide/setup.html

## 1.インストール実行

 `npm init`を実行しプロジェクトを作成。

`yarn add --dev @nuxt/typescript-build`
or
`npm install --save-dev @nuxt/typescript-build`

上記の実行後 `git status` で確認すると

```json
node_modules/
package-lock.json
```

の差分が発生します。

## 2.gitで除外するファイルを設定する

`vim .gitignore` でgit管理から除外するファイルを作成します。

![スクリーンショット 2020-06-13 17.00.23.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/ff62f3f3-7510-750e-1bf7-63bd6846e540.png)

作成したファイルに除外する設定を記載する

```.gitignore
/node_modules
/dist
.nuxt/
```

`.nuxt/` はビルド差分の管理が大変なので無視しています。

![スクリーンショット 2020-06-13 17.00.57.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/e25fcaa0-f0ba-593f-984c-9567e124b2f6.png)

## 3.nuxt.config.jsを作成

`vim nuxt.config.js` でnuxt.config.jsを作成する。

作成後、設定を追記。

.eslintrc.js

```javascript
export default {
  buildModules: ['@nuxt/typescript-build']
}
```

## 4.tsconfig.jsonを作成

`vim tsconfig.json` でtsconfig.jsonを作成する。

作成後、設定を追記。

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

## 5. Vueを使用するためのファイルを作成

`vim vue-shim.d.ts`

初期設定を記載する。

vue-shim.d.ts

```typescript
declare module "*.vue" {
  import Vue from 'vue'
  export default Vue
}
```

インストールと設定ができたのでコミットする

自分はここまで完了したら作成したリポジトリにコミットしました。

gitignoreに除外ファイルを設定しているので `git status`すると下記のような差分になります。

`git status` で確認。

```.gitignore
.gitignore
nuxt.config.js
package-lock.json
package.json
tsconfig.json
vue-shim.d.ts
```

こちらで問題ないので一旦コミット

```
git add --all
git commit -m 'nuxt+typescriptで環境構築'
```

[nuxt+typescriptで環境構築](https://github.com/GenkiMatsubara/genki-blog/commit/921e4b7c79aa042ccfa37b2ad9db9ef954683a27)

## 6.TypeScriptに関する設定追加

typeCheckについてはこちら

https://typescript.nuxtjs.org/ja/guide/setup.html#typecheck

ignoreNotFoundWarningsについてはこちら

https://typescript.nuxtjs.org/ja/guide/setup.html#ignoreNotFoundWarnings

loaderについてはこちら

https://typescript.nuxtjs.org/ja/guide/setup.html#loaders

これらを踏まえてnuxt.config.jsに追記していきます。

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

ここの差分は僕のGithubに置いておきます。

[Typescriptの設定を追記](https://github.com/GenkiMatsubara/genki-blog/commit/7abc4ab09ac6da5c39ee53da2c1d8d263abf8789)

## 7.Runtimeの設定

まずはインストールを実行

https://typescript.nuxtjs.org/ja/guide/runtime.html

`npm install @nuxt/typescript-runtime`

その後package.jsonに

- `script`
- `dependencies`
- `dependencies`

を追記していく。

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

上記の設定の記載が完了したら`npm i`でインストールしてくる。

ログはこんなにnuxtのロゴが表示されます。

![スクリーンショット 2020-06-13 18.54.20.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/27305cb8-0cd9-f0e9-2bb4-d9d711ba0ad1.png)

その後、ビルド、スタートと順に実行。

`npm run build`

`npm run start`

特に設定していなければ http://localhost:3000/ にアクセス

![スクリーンショット 2020-06-13 18.58.17.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/0ffa85b5-8917-01a6-1712-f328a2e6a65b.png)

ここの作業のコミット
[runtimeの設定](https://github.com/GenkiMatsubara/genki-blog/commit/fa424efb7a88b05cfabc52cbce0a0f2c661126e2)

## 8.Lint設定

インストール

こちらをどちらも実行する

`npm i -D @nuxtjs/eslint-config-typescript`
`npm i eslint --save-dev`

ファイルを作成し設定を記載

`vim .eslintrc.js`

.eslintrc.js

```javascript
module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ]
}
```

package.jsonのscriptにlintの実行を行うための記載

package.json

```json
"lint": "eslint --ext .ts,.js,.vue ."
```

`npm run lint` で実行する

```
  vue-shim.d.ts
  1:16  error  Strings must use singlequote  quotes
```

エラーを吐いてくれました。

ここの作業のコミット

[Lintを追加](https://github.com/GenkiMatsubara/genki-blog/commit/16ce6d75a5ba7a73c0c3bfe646f34e8f49562eee)

## 環境構築完了

ここまでくれば環境構築は完了です。

お疲れ様でした！

[Nuxt.js + TypeScriptでの開発事始め](https://qiita.com/GenkiMatsubara/items/d223bf6023b9c6c3fe6a)に続きます。
