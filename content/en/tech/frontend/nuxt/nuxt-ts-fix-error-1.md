---
title: 【Fixing errors in Nuxt.js】 Part 1
created_at: 2020-06-14
updated_at: null
date: 2020-06-14
image: /img/tech.jpg
description: This article covers the resolution of errors that occurred during Nuxt.js development.
type: tech
tags:
  - Next.js
  - TypeScript
---

## 今回の記事の内容
nuxt.jsでの開発中に発生したエラーの対応

## エラーの内容

該当のエラー

```
Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.
```

翻訳すると

```
コンポーネントテンプレートには、ルートエレメントを1つだけ含める必要があります。
```

### エラーの該当コード

``` pages/index.vue
<template>
  <h2>TOP PAGE</h2>
  <img src="/img/sample.jpg" />
</template>
```

あ、これ凡ミスや…

### 修正したコード

つまり`<template>`タグの中のルートエレメントは1つだけにする必要があるのでコードを修正しました。
`div`タグを追加しその中に元々のタグを追加しました。

``` pages/index.vue
<template>
  <div>
    <h2>TOP PAGE</h2>
    <img src="/img/sample.jpg" />
  </div>
</template>
```

## まとめ
ゼロからnuxt.jsを環境構築をして開発してるとたまにタグを忘れがちなので注意せねばと自分への戒めを含めて記事にしました。

完
