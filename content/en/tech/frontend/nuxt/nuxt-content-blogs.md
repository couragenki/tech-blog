---
title: Notes on creating and publishing a blog with nuxt-content
created_at: 2020-09-17
updated_at: null
date: 2020-09-17
image: /img/tech.jpg
description: This is a reminder of how to create a site using nuxt-content. You can now create a site easily using the useful functions.
type: tech
tags:
  - Next.js
  - nuxt-content
---

## 今回やること
nuxt-contentの機能が便利だったのでブログを作成してみる。

nuxtのバージョンは`2.14.1`以降のものがおすすめです。
generateでの手間を省けます。
今までは`processmd`とか設定を書かないと行けなかったんですが手間が省けて便利です。

## nuxt-contentで情報を取得して表示する

表示するデータを取得して記事マークダウンの日付が新しい順にソートする。
`deep: true`にしてあげると`tech`ディレクトリ以下の階層の情報を全て取得している。

Githubのソースコードのexampleを参考にしながら進めました。
https://github.com/nuxt/content/tree/dev/example

``` pages/tech/index.vue
async asyncData({ $content }) {
    let query = $content("tech", { deep: true }).sortBy("date", "desc");
    const tech = await query.fetch();
    const data = tech.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });

    return {
      data,
    };
  },
```

## bootstrapを使用する
nuxt-contentは関係ないですがブログカードなどのbootstrapのUIを使いたかったので追加する。
https://www.npmjs.com/package/bootstrap-vue

`npm i bootstrap-vue`


``` package.json
"bootstrap-vue": "^2.16.0"
```

``` blogcard.vue
<style lang="scss" scoped>
@import "~~/node_modules/bootstrap/scss/bootstrap.scss";
</style>
```

使用するコンポーネントでbootstrapをインポートすることで利用できるようになりました。


## メタ情報を追加していく
configにデフォルトのメタ設定を追加していく

``` nuxt.config.js
head: {
    title: process.env.npm_package_name || 'ページタイトル',
    titleTemplate: '%s | ページタイトル',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'デフォルトのディスクリプションを設定するよ' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'ページタイトル' },
      { hid: 'og:type', property: 'og:type', content: 'blog' },
      { hid: 'og:url', property: 'og:url', content: 'https://サイトのURL' },
      { hid: 'og:title', property: 'og:title', content: 'couragenki' },
      { hid: 'og:description', property: 'og:description', content: 'デフォルトのディスクリプションを設定するよ' },
      { hid: 'og:image', property: 'og:image', content: 'https://サイトのUR/og.jpg' },
      { hid: 'twitter:card', neme: 'twitter:card', content: "summary_large_image" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
```

マークダウンの情報を取得して動的に変更するように設定する。
ページで`nuxt-content`で取得→テンプレートにデータを渡す、という流れです。

``` components/Templates/posttemplate.vue
  head() {
    const metaTitle = this.pageMetaTitle;
    const metaDescription = this.pageMetaDescription;
    const metaImg = this.pageMetaImg;
    return {
    title: metaTitle,
    meta: [
      {
        hid: "description",
        name: "description",
        content: metaDescription,
      },
      {
        hid: "og:description",
        name: "og:description",
        content: metaDescription,
      },
      { hid: 'og:image', property: 'og:image', content: metaImg },
    ],
    }
  },
```

静的なページの場合は直で設定を書いてしまう。

``` pages/policy/index.vue
head: {
    titleTemplate: "ポリシー |サイトタイトル",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "利用規約について記載しているページになります。",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "ポリシー | サイトタイトル",
      },
      {
        hid: "og:description",
        name: "og:description",
        content: "利用規約について記載しているページになります。",
      },
    ],
  },
```

## Nuxt.jsで作成したサイトにGoogle Analyticsを追加する

公式のドキュメントが参考になりました。
https://ja.nuxtjs.org/faq/ga/

1. `plugins`を追加する
2. `google analytics`からトラッキングIDを取得する
3. 本番に反映して確認する

### 1.pluginsを追加する

``` nuxt.config.js
plugins: [{ src: '~plugins/ga.js', mode: 'client' }],
```

``` plugins/ga.js
/* eslint-disable */

export default ({ app }) => {
  if (process.env.NODE_ENV !== 'production')
    return /*
     ** Google アナリティクスのスクリプトをインクルード
     */
      ; (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r
          ; (i[r] =
            i[r] ||
            function () {
              ; (i[r].q = i[r].q || []).push(arguments)
            }),
            (i[r].l = 1 * new Date())
          ; (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0])
        a.async = 1
        a.src = g
        m.parentNode.insertBefore(a, m)
      })(
        window,
        document,
        'script',
        'https://www.google-analytics.com/analytics.js',
        'ga'
      )
  /* Google アナリティクスのトラッキングIDを取得してここに書く */
  ga('create', 'UA-○○○○○○○○○-○', 'auto')
  app.router.afterEach((to, from) => {
    ga('set', 'page', to.fullPath)
    ga('send', 'pageview')
  })
}
```

### 2.google analyticsからトラッキングIDを取得する
Googleのアカウントがあれば無料で取得できます。
![91992353-00469580-ed6f-11ea-8bd1-c8e8febdf431.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/e1e5a18e-37da-5a03-66cb-e041180a7c92.png)

google analytics
https://analytics.google.com/

### 3.本番に反映して確認する
設定を反映した後にアナリティクスを確認するとユーザーが増えたことを確認できました。
こちらでアナリティクスの設定は完了になります。
![91992250-e016d680-ed6e-11ea-8227-4a8633d66bb2.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/63cf820c-4dce-3c6b-77ac-202960e06613.png)

## サイトマップを追加する(nuxt-content版)
nuxtjs/sitemapを使用します。
今回はnuxt-contentで
https://www.npmjs.com/package/@nuxtjs/sitemap

`npm install @nuxtjs/sitemap`

``` package.json
"@nuxtjs/sitemap": "^2.4.0"
```

サイトマップの指定の仕方はnuxtでのサイトマップの追加と基本的に同じです。
`nuxt-content`でそれぞれパスを取得しています。
(一括で取得してしまっても良いかもしれないです)

``` nuxt.config.js

modules: ['@nuxtjs/sitemap'],
sitemap: {
    hostname: 'https://サイトのURL',
    routes: async () => {
      const { $content } = require('@nuxt/content')
      const tech = await $content("tech", { deep: true }).only(['path']).fetch()
      const marketing = await $content("marketing", { deep: true }).only(['path']).fetch()
      const posts = Object.assign(tech, marketing);

      return posts.map(article => article.path)
    }
  },
```

ここまで追加できたら本番に反映する。
その後にGoogleサーチコンソールのサイトマップにこちらを追加する。

`https://サイトのURL/sitemap.xml`

サイトマップを追加すると新しく記事を追加した際にクローリングされるまでの期間が短くなりSEO的に有利になるので今回のブログで追加しました。

## 今回の成果物

【公開したサイト】
https://couragenki.com/
![og.jpg](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/90da7c0e-e7bb-70c9-a3b3-4a348da341b8.jpeg)

netlifyが便利なのでgithubを連携して公開しています。
2週間ほどで開発してユーザーのフィードバックが欲しいので公開してしまう。

以前公開していたサイトより初期表示速度が改善できました。
公開して１ヶ月ほどですがリニューアル前のワードプレスのサイトより直帰率が約２０％ほど下がりました。

カスタマイズしたい箇所がまだたくさんあるので今後も開発を続けていこうと思います。


## 感想
- nuxt-contentは手間が省けて便利！
- UIを考えるのが大変でした…早く慣れたい

フィードバックやアドバイス等あればコメントいただけると幸いです。
最後まで読んでいただきありがとうございました。