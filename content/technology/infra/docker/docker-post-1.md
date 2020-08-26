---
title: 新人フロントエンジニアがdockerに挑戦した話
created_at: 2017-10-14
updated_at: null
type: technology
image:
description: 新人フロントエンジニアがdockerに挑戦した話です。環境構築周りを触っていきます。
tags:
  - Docker
---

## 経緯

今携わってる案件でvagrantからdockerへの乗り換えがあり
担当された先輩が全てやってくれたおかげで
dockerが使えるようになりましたが
結局dockerの導入がわからずじまいで…

## 今回の目標

独りで土日の間でdockerを落としてきて苦手なコマンド周りを触ってみる

## やってみたこと

いきなり触っても分からなくなるのが目に見えてたので
他の方の記事を参考にさせて頂きました

Mac OS X へのDockerのインストール方法

https://qiita.com/hshimo/items/e24b1fbfbf775ec7c941

(初心者向け)Dockerの使い方

https://qiita.com/butada/items/3e6cd338cb703eef64b4

### まずはdockerをダウンロード

まぁまずは問題なし！見慣れたクジラさんをドラッグ&ドロップ。

https://docs.docker.com/

<img width="918" alt="docker.png" src="https://qiita-image-store.s3.amazonaws.com/0/199085/4bc899cf-ab7e-a7ed-bdfa-89b41d471889.png">

### 落としてきたdockerを起動

- PCに落としてきたdockerを起動
- PCに変更を加えるとかでパスワード入力
- バーに見慣れたクジラマークが追加されて
- docker running が出ました！

<img width="342" alt="docker2.png" src="https://qiita-image-store.s3.amazonaws.com/0/199085/8944c97b-4b78-9ecc-4073-eea7f1381951.png">
　
正直ここまで来れるか不安だったので一安心:relaxed:

### えっ？ID作った覚えないけど？

<img width="492" alt="docker3.png" src="https://qiita-image-store.s3.amazonaws.com/0/199085/cafa8e67-e226-fc8d-ad05-3772430339a9.png">

下にアカウント作れって書いてありますね、はい。
というわけで作成

<img width="1217" alt="docker4.png" src="https://qiita-image-store.s3.amazonaws.com/0/199085/165014f4-26bf-fe8f-6216-7e84bf340ec0.png">

### アカウント作成

ユーザーネームで少し手間取りましたがアカウントを無事作成できログインできました。
アカウントがちゃんとできるとメールが届きました。
<img width="535" alt="docker5.png" src="https://qiita-image-store.s3.amazonaws.com/0/199085/9467fb0b-9a20-7268-273f-140243719ad5.png">

作成したアカウン無事でログインできました！

## さあ触ってみよう！

と思いましたが長くなったので今度続きを書こうと思います。

先日参加したPHPカンファレンス２０１７で
docoker関連の講話を聞き興味が湧いたので
（半分くらいちんぷんかんだったのは自分だけの秘密）

今回dockerを触ってみました！

諸先輩方に教わりつつ参考記事を読みながら
今後も勉強して行こうと思います。
