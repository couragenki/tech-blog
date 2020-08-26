---
title: 【3日で実装・公開】エモいアートな画像生成アプリ開発
created_at: 2019-12-11
type: tech
image: /img/sample2.jpg
description: 好きな画像をテキストでモザイクアートに変換するアプリを開発しました。
tags:
  - Javascript
  - p5.js
---

この記事は [DeNA Advent Calendar 2019](https://qiita.com/advent-calendar/2019/dena) の11日目の記事です。

また [DeNA 20 新卒 Advent Calendar 2019](https://qiita.com/advent-calendar/2019/dena-20-shinsostu) も応援よろしくお願い致します。

`おことわり:この記事の内容はプライベートでの学習の記事になるのでDeNAでの業務とは一切関係ないです。`


## 今回作成したアプリ

**【えもえもアート】**

↓↓こちらからプレイしてみる！↓↓

https://p5js.tech/

### このアプリではなにができるの？

アップした画像を元に文字を使ってcanvasにオリジナルの画像を表示できます。

**【アプリで生成した画像】**

モザイクアートのような画像を生成することができます。

`↓サンプル↓`

![191211_144858_971.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/9a5276e4-d5e9-9cd6-a4bd-2e96b4e578ef.png)

`↓拡大してみると↓`

実はこちら、拡大してよく見ると英文になっています。

<img
alt="スクリーンショット 2019-12-11 15.04.37.png"
src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/183289be-362b-1fcc-fbbf-a19efcc7855f.png">

シェイクスピアのハムレット(パブリックドメインの作品)の冒頭の文字データを使ってcanvasに画像を生成しています。

目を凝らしてみると左上から読むことができるようになっています。

こちらのアプリは文字データと画像を元にオリジナルのエモい画像を生成できるアプリです。

## このアプリを実装するまで

### きっかけ

休日に本屋をぶらぶらしていた時になぜか建築の棚にあった[Generative Design with p5.js

［p5.js版ジェネラティブデザイン］ ―ウェブでのクリエイティブ・コーディング](http://www.bnn.co.jp/books/9296/)を見つけこれまでp5.jsを知らなかったこともありこんなフレームワークもあるのかと興味をもつ。

### 1日目 ことはじめ

#### p5jsの本を買ってきていろいろチュートリアルをやる

いきなり実装したい気持ちを抑えドキュメントを読む。ドキュメントをちゃんと読むの大事。

本にある解説を読みながら使い方を学ぶ。

サンプルが多種多様で楽しく学ぶことができました。

[サンプルコード](http://www.bnn.co.jp/support/generativedesign_p5js/)

サンプルの中でも画像のピクセルをカラー文字に変換できる機能は表示できるものが面白かったのでこの機能を使って何か作りたいと考える。エディタもあるので読みながら

[サンプルコード(P_4_3_2_01)とエディタ](https://editor.p5js.org/generative-design/sketches/P_4_3_2_01)

### 2日目 実装開始

#### まずはどんなアプリにするかを決める

12/09(月)

1. サンプルは画像が一種類で固定なので自分の好きな画像を選べるようにする
2. 生成した画像を保存できるようにする
3. 生成した画像をシェアできるようにしたい

#### 自分の好きな画像を選べるようにする

まずは画像を自分の好きな画像を使用して画像を生成できるように実装する。
選択した画像はロード完了を待たないと画像の要素を取得できないため一工夫しました。

1. 画像を選ぶ
2. 画像を読み込む
3. 読み込んだ画像要素の情報を元にcanvasのサイズを決める
4. canvasに生成する

という流れになります。上記の順での対応の理由としては

- 画像サイズが大きすぎるとcanvasも大きくなりすぎる問題
  - 画像が大きすぎると画面からはみ出してしまう
- スマホだとcanvasの生成の処理に時間がかかりすぎてしまう

そのため画像が大きい場合は画像サイズと画面サイズを元に
canvasのサイズを計算し縦横の比率が崩れないように生成します。

```javascript
if (window.innerWidth < image.width) {
  const set = Math.floor(window.innerWidth / image.width * 100) / 100;
  setup(image.width * set, image.height * set);
} else {
  setup(image.width, image.height);
}
```

この簡単な対応だけで使い勝手がグッとよくなりました^^

#### 文字サイズなどをユーザーが好きに見ながら変更できるようにする

こちらはもともとp5jsではPCのみ使用できた機能になっていたのでスマホ用に移植しました。

元々はPCでの利用を想定しているので基本的にはスマホでの処理は自分でPCでの実装のコードを読んで

スマホ用の機能を実装していく感じになります。

#### 生成した画像を保存できるようにする

PCのみの機能だったcanvasを画像にして保存する機能をスマホでも使用できるように移植。

ここまで来ると基本的な要件をほぼ満たしたアプリになりました。

`しかし…`

**ただ現状の画面ではとっても使いづらいんです…**

開発者の僕は使えてもこれでははじめて使うユーザーの方が使いにくい。

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/4656b746-93cd-9daa-d5e7-00f8c0e773db.png" width=50%>

**…こりゃひでぇ＼(^o^)／**

`しかも…`

↓こちらは元画像になった先日東京タワーまで散歩した時に撮影した写真

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/8cdd7d56-4669-7db6-d771-289ca8d092e2.jpeg" width=50%>

~~これなんだか元画像の方が良い気がする~~

**（　ﾟ Дﾟ）‼️**💡

そう、

**エモさが足りない！！**

【結論】

**文字サイズなどをユーザーが好きなようにイジってエモくできるようにすれば良いんだ！**

### 3日目 使いやすくする

#### 機能を追加してブラッシュアップする

【ブラッシュアップ1】 文字サイズを好きに変更できるようにする

文字サイズを大小自由に変更できる

文字の最大、最小サイズを自由に変更できるようにすることで文字にばらつきを持たせられるように実装。

更に現在の設定文字サイズを表示して微調整までできるようにしてよりエモさを追求できるようにしました。

#### 【ブラッシュアップ2】 モノクロモード対応

文字をカラーからモノクロに変更できるようにする

カラーだと表現の限界がある場合があったのでいっそのことモノクロにすることで英字新聞みたいにしてエモさを表現できないかと思い実装してみました。

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/18b79824-bcb9-17d8-de60-af5f4a30f9cd.png" width=50%>

#### 【ブラッシュアップ3】 アプリのUIを調整する

もう追加機能もないので最後にUIを整える。

実装していく中でUI案が自分の中で結構変わって行ったので最後に残しておいて正解だった気がします。

![スクリーンショット 2019-12-11 12.34.49.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/dd549ab8-8956-de0f-b487-8f43164667ea.png)

(センスはともかく)スマホで気軽にcanvasを変更できるようにできた！！

### その他細かい対応

- サーバーを用意してくる、ドメインを取得する
- HTTPS対応
- アナリティクス追加 などなど

## まとめ

偶然見つけた本がきっかけで簡単なアプリ作成まで進めることができました。

自分が考えたアイディアを形にして世の中に公開できるって楽しいなと再確認できました。

まだエンジニアになって日が浅いのでこれからもアイディアが浮かんだらそれを形にできるように日々学習して技術力を高めて行きたいと思います。

### えもえもアートに追加したかった機能の案

~~アドベントカレンダー投稿直前の9日まで何もせずサボってて~~

時間の都合でオミットしましたがこんなのも実装したかった機能一覧

- twitterなどのSNSシェア機能
  - 画像をシェアして投稿できるようにする
  - インスタなどには「特定のハッシュタグをつけてシェアできる」などの機能
- canvasの背景色変更
  - こちらもつなぎ込めば動的に変更できそう
- ラベル追加機能
  - LGTMとか好きな画像を最後に追加できるようにしても面白そう
- Loading表示
  - 読み込み中にユーザには変化が伝らないので不親切なので追加したい

このアプリに「こんな機能もいいんじゃない？」というアイディアがございましたらこちらの記事にコメントいただけると嬉しいです。

最後までお読みいただきありがとうございました。

**【えもえもアート】**

↓↓こちらからプレイしてみる！↓↓

https://p5js.tech/