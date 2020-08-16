---
title: Gatby.js＋NetlifyでLightHouse満点のサイトを1日で作った話
created_at: 2019-11-06
updated_at: null
image: /images/post-sample.jpg
description: Gatby.jsとNetlifyでお手軽にブログを作成して公開するまでの手順を記事にしました。
tags:
  - Javascript
  - React.js
  - Gatby.js
  - Netlify
---

# Gatby.js＋NetlifyでLightHouse満点のサイトを1日で作った話

## 経緯
1. Qiita以外に雑記ブログ的なものをやってみた気分になる
1. 友人のエンジニアに勧められたGatsby.jsでブログを開設してみました。
1. 言われるがままとりあえず触ってみる

## ベース
今回はGatby.js＋Netlifyで行くことにしました。
https://www.gatsbyjs.org/starters/netlify-templates/gatsby-starter-netlify-cms/

いくつかGatsbyのスターターをクローンして試しましたが
このスターターが一番そのままブログとして使用できそうでした。

## Gatby.js＋Netlify選定理由
- Gatsbyは静的サイトジェネレーターなので高速
- Reactはあまり触ったことがなかったのでこの機会に触ってみたい
-  NetlifyはGitHubと連携するので楽に草が生やせる←

## 準備するもの
- Githubアカウント
- ブログに使用するドメイン

レンタルサーバー無しでOKです

## 手順
こちらの記事をそのままやってみる
https://qiita.com/ferretdayo/items/f5d97165b8c6d6077a44

環境構築から公開まで簡単

## いいと感じたこと
- 構築が簡単
- 表示速度が早く初期でも解析のスコアがかなり高水準
- お問い合わせフォームを用意してあるので設定すれば簡単に導入できる

## 困ったこと
- Reactに慣れていないため修正するときにいろいろと試しながら進めた
- WordPressのように記事にリンクを貼るだけでプレビューを表示できない
- インスタグラムの埋め込みで画像が表示できない

 **別件：書くことがない（というよりネタはあるけどちゃんとした記事を書かなきゃと思い手が止まる）**
アウトプット癖を作るには継続しかないなと実感

## 修正したこと
- GoogleAnalyticsを導入
- 画像軽量化ツールを使って画像を圧縮して軽量化
- アクセシビリティはデフォルトでは満点ではないので個別に修正しました
その際にスコアの出やすいデザインに変更などの対応
- パフォーマンス重視のため画像を最小限にしているのがいけてないので修正していきたい

## 完成
こちらで公開中
https://www.eezyanaika.com
![スクリーンショット 2019-11-06 13.50.13.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/bb0de9fc-7536-25a1-30b0-cc4af115877b.png)
