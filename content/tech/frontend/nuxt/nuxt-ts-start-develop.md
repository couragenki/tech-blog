---
title: Nuxt.js + TypeScriptでの開発事始め
created_at: 2020-06-26
updated_at: null
date: 2020-06-26
image: /img/tech.jpg
description: Nuxt.jsとTypeScriptを用いた開発環境構築ができたので基本的な開発手順の準備を行っていきたいと思います。
type: tech
tags:
  - Nuxt.js
  - TypeScript
---

## 前回のおさらい

この記事は[前回の環境構築](https://qiita.com/couragenki/items/d8a809c383c4fef9ecda)の続きです

今回のゴールは静的サイト製作なのでpageの追加から行なっていきます。

![スクリーンショット 2020-06-13 18.5<img width="546" alt="スクリーンショット 2020-06-13 23.13.43.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/db8a4bb2-c4c3-ad77-6448-1b63972d02a3.png">
8.17.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/6c4c4388-5990-b63c-9682-5d5ea8f6d5e4.png)

こんな感じで前回環境構築したのでその続きになります。

今回からはNuxt.jsの公式サイトを参考に進めていきます。

https://ja.nuxtjs.org/

## app.htmlを追加する

IEの環境によって動作しないケースを踏まえた記載にします。

``` app.html
<!DOCTYPE html>
<!--[if IE 9]><html lang="en-US" class="lt-ie9 ie9" {{ HTML_ATTRS }}><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html {{ HTML_ATTRS }}><!--<![endif]-->
  <head {{ HEAD_ATTRS }}>
    {{ HEAD }}
  </head>
  <body {{ BODY_ATTRS }}>
    {{ APP }}
  </body>
</html>
```

[公式サイト『アプリテンプレート』参照](https://ja.nuxtjs.org/guide/views/#%E3%82%A2%E3%83%97%E3%83%AA%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88)

## レイアウトを作成しデフォルトとエラーページを追加する

デフォルトとエラーページを作成します

### デフォルト(default.vue)を追加する

``` default.vue
<template>
  <div>
    <nuxt />
  </div>
</template>

<script lang="ts">
export default {
  layout: "default"
};
</script>
```

カスタムのテンプレートを使用する場合は[こちらの公式が用意した動画](https://youtu.be/YOKnSTp7d38)のように使用するページでテンプレートを指定する。

### エラーページ用のエラーレイアウト(error.vue)を作成する

エラーが発生した時にお知らせしてくれる用のレイアウトです。
エラーコードが分かる用に `{{ error.statusCode }}` でエラーコードを表示しています。
またTOPに戻るための導線も追加しました。

``` error.vue
<template>
  <PageTemplate>
    <h1>こちらはエラーページです</h1>
    <h2>エラーコードは {{ error.statusCode }} です。</h2>
    <nuxt-link to="/">トップページへ戻る</nuxt-link>
  </PageTemplate>
</template>

<script lang="ts">
export default {
  props: ["error"],
  layout: "error"
};
</script>
```

こちらのエラー用のレイアウトを追加した段階でまだ存在しないパスに遷移しようとするとこのようにエラーコードを表示できるようになりました。

<img width="424" alt="スクリーンショット 2020-06-13 23.45.09.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/5335c657-28b6-9869-e7d2-881fe8ada638.png">

エラー表示は開発初期に追加しておくと楽です。

## ページを追加する

次にページを追加します。とりあえずトップページに該当する`pages/index.vue`を追加します。

デフォルトでtypescript、sassが使えるのが便利ですね。

基本的にsccはscoped cssで進めていきます。

``` pages/index.vue
<template>
  <h2>TOP PAGE</h2>
</template>

<script lang="ts">
</script>

<style scoped lang="scss">
</style>
```

こちらのファイルを追加すして`npm run dev`すると追加したページが適用されます。

<img width="546" alt="スクリーンショット 2020-06-13 23.13.43.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/25ae41fe-aad9-2c6c-ea02-79e986fe9812.png">

ここまで完了するとあとはガンガン開発していけると思います。

nuxt.config.jsにheadを追加する

``` nuxt.config.js
head: {
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
}
```

エラーと同様にutf-8の設定とviewportを早い段階で入れておきます。
（稀にある文字化けバグを踏まないため）

## 感想

基礎の基礎ですが公式ドキュメントや公式が用意してくれている動画を見ながら進めていると知らなかったメソッドなどに気づくことができるので学びがありました。

今回の差分を[僕のGithub](https://github.com/couragenki/genki-blog/commit/c09c14e06eacff910473700ad3ddbaae6e1e63bb)にプッシュ済みです。

続く
