---
title: WordPresサイト内の画像全てをWebPに変換した
description: Wordpressで運用しているサイトのjpg,png画像をプラグインを使用してWebPに変換して効果を紹介していきます。
type: tech
created_at: 2020-03-02
updated_at: null
date: 2020-03-02
image: /img/tech.jpg
tags:
  - WordPress
  - WebP
---

## 個人サイトのjpg、png画像をWebPに変換してみる

wordpressで回してるサイトなのでこちらはプラグインを使用した一括変換を使用。

今までにアップロードしたものの変換とこれからアップロードする画像の変換設定の2つを行う。

[参考にした手順](https://tekito-style.me/columns/wordpress-image-webp)

サイト内全体で画像を1500枚くらい使っている。

モバイルでの表示速度が遅くモバイルの離脱率が高いのが現在抱える問題。

### サイト内の画像をWebP変換前

#### ページの画像による通信量

![WebP変換前のスコア](/img/webp変換前スコア.png "WebP変換前のスコア")

![WebP変換前の通信](/img/webp変換前.png "WebP変換前の通信")

### サイト内の画像をWebP変換後

#### ページの画像による通信量

![WebP変換後のスコア](/img/webp変換後スコア.png "WebP変換後のスコア")

![WebP変換後の通信](/img/webp変換後.png "WebP変換後の通信")

imgリソースがTOPページで2.9MB

### 結果

#### WordPressプラグインで画像をWebPに変換した結果

* GoogleはWeb Pの使用を推奨しているのでベストプラクティスのスコアが向上した。
* 通信量などはがサイト全体で大きく改善できた。特に画像が多めのサイトなので効果が大きかった。
* 表示に置いて目に見える劣化などはない* スコアが改善されると嬉しい

~~あっ、PageSpeed Insightsのスコアを事前に計測するの忘れてた…~~

終わります！