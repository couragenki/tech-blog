---
title: snapwidgetでInstagramの画像をギャラリー風に表示する
created_at: 2019-04-18
updated_at: null
image: /img/sample2.jpg
type: tech
description: インスタグラムの投稿一覧を自分のサイトに埋め込むための手法を解説しています。
tags:
  - instagram
  - HTML
---

## 今回やりたいこと

nuxtで作成しているサイトにインスタにアップしている写真一覧を表示したい。

いくつかやり方がありそうでしたが今回は手軽なsnapwidgetで実装していこうと思います。

https://snapwidget.com/

### 1. サインインorログイン

<img alt="スクリーンショット 2020-04-18 21.08.17.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/01fe4ab3-31f0-1685-d96d-0786c27ccfb5.png">

### 2. アカウントを作成する

<img  alt="スクリーンショット 2020-04-18 21.08.33.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/7736af6e-2a72-ec49-c0db-87f30fd80c8e.png">

### 3. 表示したいSNSを選択する

<img  alt="スクリーンショット 2020-04-18 21.09.18.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/dcca39c1-d04f-00ec-4530-6626aad672e5.png">

### 4. 表示したいレイアウトを表示する

今回は画像のみ表示したいので左上のグリッドのレイアウトを選択する。

<img  alt="スクリーンショット 2020-04-18 21.09.31.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/9a879839-b05d-e41f-bf4c-e71a344cc1e6.png">

<img  alt="スクリーンショット 2020-04-18 21.09.50.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/7b1ee982-1b16-dda1-2036-2824b2cf133f.png">


### 5. サムネイルのサイズと縦横で表示する数を選択する

<img  alt="スクリーンショット 2020-04-18 21.27.31.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/627084cd-c914-02b0-2668-04a445186966.png">

### 6. コードが表示されるのでこちらをコピーする

<img  alt="スクリーンショット 2020-04-18 21.28.00.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/21ddedb7-6d14-b3e0-4603-e91e6c43f52c.png">

### 7. コードをサイトに埋め込んで完成

<img alt="スクリーンショット 2020-04-18 21.31.14.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/3e243c5a-f48f-87ff-f812-91f064392aa7.png">

これだけで埋め込むことができました。

このままWordPressに埋め込むことも可能です。

埋め込み時のスタイルの指定を外すことでCSSでのカスタマイズも可能です。
