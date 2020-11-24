---
title: 【Nuxt.jsのエラー修正】パート2
created_at: 2020-07-09
updated_at: null
date: 2020-07-09
image: /img/tech.jpg
description: Nuxt.js開発中に発生したエラーの解消までを記事にしました。
type: tech
tags:
  - Next.js
  - TypeScript
---

## 今回発生した挙動

nuxt で作成したサイトを`npm run generate`してホスティングした際に遷移がうまくいかない。

n-linkで遷移しようとしてもURLは変更できるもののページはリロードされないと表示されない状況。

## 原因

レンダリングでエラーが発生している。

エラー分は下記になります。

![picture_pc_33ddf4c62d958e654c6dc8b4761909a6.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/c39006c9-cc1e-e269-ddf6-67f42204824a.png)

```
[Vue warn]: The client-side rendered virtual DOM tree is not matching 
server-rendered content. This is likely caused by incorrect HTML markup,
 for example nesting block-level elements inside <p>, or missing <tbody>.
Bailing hydration and performing full client-side render.
```

## 修正する

- ブロックレベルの要素を`<p>`の中に入れ子になっている場合は修正
- tableタグに`<tbody>`を追加する
- `<no-ssr/>`を追加する 対象のGithubのissue

今回の自分の環境ではpタグの中にブロック要素を追加してしまっていたので修正したところ解決しました。

## 今回の学び

レンダーエラーが具体的にどのような挙動に影響するのかを学べた。
