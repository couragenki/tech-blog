---
title: Nuxt.js + TypeScript to display images with favicons on your site
created_at: 2020-06-15
updated_at: null
date: 2020-06-15
image: /img/tech.jpg
description: Now that we have built a development environment using Nuxt.js and TypeScript, I'd like to prepare the basic development procedures.
type: tech
tags:
  - Next.js
---

## 前回の続きです

今回はfaviconを作成してサイトに追加していきます。
箸休め的な記事です。

[Nuxt.js + TypeScriptでの開発事始め](https://qiita.com/GenkiMatsubara/items/d223bf6023b9c6c3fe6a)


## Nuxt.jsのサイトにfaviconを適用させる

faviconの作り方に関してはこちらに記載しています。
[5分でサクッとfaviconを作成する手順](https://qiita.com/GenkiMatsubara/items/8ec90f30956dfc0e57f8)

faviconは静的で更新させることは滅多にないので`static`へ追加します。

<img width="408" alt="スクリーンショット 2020-06-14 0.51.31.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/54532b83-b60d-e4f1-1242-c31d7d5bc49f.png">

次に`nuxt.config.js`に設定を追記する
`static`ディレクトリ名はパスには含めいない。
ファイル名をいじる際はこちらの`href`のアイコン名を変更する。

``` nuxt.config.js
head: {
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
  ]
},
```

上記の対応のうえ実際にfaviconを表示させるとこんな感じになります。

<img width="191" alt="スクリーンショット 2020-06-14 1.22.17.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/f83beb43-9191-b1eb-096e-dfd7535fffc6.png">

favionは2文字までならギリギリ読めますね。
表示できたのでfaviconの設定は完了です！

## 画像を追加して表示するまで

### 画像の追加

今回追加する画像は静的なものとして使用したいので`static`に追加します。

<img width="615" alt="スクリーンショット 2020-06-14 1.54.30.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/f528e1a5-e16a-aee7-6fe2-72dcaceb59a9.png">


### 画像の呼び出し

page側で画像を呼び出します。
`static`の画像を呼び出す際は`/static`を記載せずに画像パスを記入すればOKです。

``` pages/index.vue
<template>
  <div>
    <h2>TOP PAGE</h2>
    <img src="/img/sample.jpg" />
  </div>
</template>
```

<img width="538" alt="スクリーンショット 2020-06-14 1.41.05.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/95308184-eaed-da6d-e0d0-96e88fb9dee6.png">

こうすることで画像を表示できました。

## Nuxt.jsにおいてのassetsとstaticの使い分けについて

vueを学んだ後にNuxt.jsを学び出して疑問に感じたこと。
assetsとstatic、どちらに画像を追加すれば良いのだろうという点。
公式ドキュメントに改めて目を通し学びました。

[出典:Nuxt.js公式ドキュメント参照(アセットより)](https://ja.nuxtjs.org/guide/assets#static)

### assetsに配置するもの

assetsにはwebpackしたいアセットを置きます

- webpackしたい画像ファイル
- cssファイル

他にも動的に生成する画像はsvgファイルも`assets`に配置する。

よくあるA画像とB画像を合成してC画像を生成する、などを行う場合もassetsに置いたほうが良さそう。

画像の編集や生成は個人的に好きな処理なので別記事で紹介しようと思います。

webpackのbuildに画像の容量圧縮のフローなどを追加しておくと手間が省けてヒューマンエラーで圧縮忘れなども起こらなくなるので安心です。
画像の圧縮に関してはこちらに記事を書きました。

[【非エンジニアでもコピペですぐに使える】画像の圧縮機能](https://qiita.com/GenkiMatsubara/items/cf2714382bfc6fb89081)

### assetsに配置するもの

webpackしないアセットを配置する

- favicon
- 静的な画像(変更や合成に使用したりしない画像)

### 実際にどちらも表示してみると
実際に`assets`ディレクトリの画像と`statiｃ`ディレクトリの画像を表示するとこのような記述になります。

下記のコードのように`assets`ディレクトリの画像を呼び出す際は`~/assets/`と記載し`static`のように省略することはできません。

``` pages/index.vue
<template>
  <div>
    <h2>TOP PAGE</h2>
    <!-- static -->
    <img src="/img/sample.jpg" />
    <!-- assets パスの『~』は『@』でもOK -->
    <img src="~/assets/img/sample.jpg" />
  </div>
</template>
```

### 結論

Q.画像はasseｔｓとstaticのどちらに配置すべきかわからない

A.assetsはwebpackする画像を置き、staticにはwebpackしたくない画像を置く

## まとめ

nuxt.jsで開発する中でasseｔｓとstaticの使い分けは重要だと思うので今回の学習を通して学ぶことができました。

今回自分が作成しようとしているのは静的なサイトですので画像を配置するのは`static`ディレクトリになっていきそうです。

完
