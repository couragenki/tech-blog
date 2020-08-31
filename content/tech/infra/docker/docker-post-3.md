---
title: docker-toolboxをmacにインストールするのに色々迷った話
created_at: 2017-12-09
updated_at: null
date: 2017-12-09
type: tech
image: /img/tech.jpg
description: Macにdocker-toolboxをインストールする手順を解説していきます。
tags:
  - Docker
---

## この記事について

そもそもdocker-toolboxで何がしたかったのか？
[～短期集中講座～ 土日でわかる Pythonプログラミング教室](http://www.sbcr.jp/products/4797388978.html?sku=4797388978#supportDl)内でまず行う環境設定なのですがmacのdocker-toolboxには色々と落とし穴がありました…

### 1.まずは普通にダウンロードしてみる

<img width="615" alt="スクリーンショット 2017-12-09 14.51.01.png" src="https://qiita-image-store.s3.amazonaws.com/0/199085/4630015a-8aa8-e92f-bfdc-bd85f2d9aabb.png">

はい、**第一の落とし穴**。
この画面でフリーズしてインストールできません。
調べてみるとそもそもMacではこのルートからインストールできませんでした。

### 2.Homebrewでダウンロードを試みる

[Homebrew](https://brew.sh/index_ja.html)

<img width="1138" alt="スクリーンショット 2017-12-09 14.57.01.png" src="https://qiita-image-store.s3.amazonaws.com/0/199085/f8e6b00e-a98a-d69c-fc93-dced26905bf9.png">

本にもあるようにHomebrewでインストールを試みる。

しかしここが**第2の落とし穴**。

パスワード入力後にダウンロード出来ません的なエラー文が表示されました。

**ターミナルに出たエラー**
*System Preferences → Security & Privacy → General
For more information refer to vendor documentation or the Apple Technical Note:

https://developer.apple.com/library/content/technotes/tn2459/_index.html*

**Apple公式の説明を元にインストールを許可！！**

<img width="846" alt="スクリーンショット 2017-12-09 15.11.24.png" src="https://qiita-image-store.s3.amazonaws.com/0/199085/398c60d1-28f8-d9e0-3ee8-3cbd0a57b743.png">

### 3.無事インストール出来ました

<img width="372" alt="スクリーンショット 2017-12-09 15.08.32.png" src="https://qiita-image-store.s3.amazonaws.com/0/199085/8f8c8966-91a7-dcc2-1a2f-457f1fb006f5.png">

## まとめ

いつもは環境構築で躓いてしまうのですが今回はインストールで足止めされました。
結構無駄な時間を過ごしてしまった…
インストールまで知らないと意外とややこしいので記しておきました m(_ _)m
