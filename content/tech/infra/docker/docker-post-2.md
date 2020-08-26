---
title: dockerを最新バージョンにしたらエラーが出た話 by Windows
created_at: 2017-10-19
updated_at: null
type: tech
image:
description: dockerのバージョンアップの際にエラーが出たのでそちらの解決について記事にしました。
tags:
  - Docker
---

##　宣伝

アプリ作るまでのお話を書きました。
読んでいただけると嬉しです☺️
[【3日で実装・公開】エモいアートな画像生成アプリ開発 - Qiita](https://qiita.com/rantaro/items/fdb7bbd55a57c68db834)

## 結論

dockerを最新バージョンにした際にWindowsだとShare Drives のチェックが外れるので
エラーが出たら

1. クジラマークを右クリック
2. settings をクリック
3. Share Drives でチェックを確認

![docker_img.jpg](https://qiita-image-store.s3.amazonaws.com/0/199085/420bc634-31f4-3b07-66a1-a5af0f7d14da.jpeg)

で自分は解決できました。

## 経緯

dockerの最新バージョンをインストールしたところ
いつものように　docker　を　upしたところ
エラーが出てローカル環境が動かなくなった。

## エラー

### エラー内容

>ERROR: Encountered errors while bringing up the project.

macユーザーの先輩方は普通に最新にできていたのに
唯一のWindowsユーザーの自分はエラーが起きました。

[新人フロントエンジニアがdockerに挑戦してみた](https://qiita.com/ranmaru_genki/items/4425894a4c29e64e50ba)に書いた通りdockerに慣れてないので軽くパニックに…

## 解決

自分で変更された設定を追っていくとそもそも
通信できていないことに気づき

設定し直すことで解決しました。

1. クジラマークを右クリック
2. settings をクリック
3. Share Drives でチェックを確認
![docker_img.jpg](https://qiita-image-store.s3.amazonaws.com/0/199085/420bc634-31f4-3b07-66a1-a5af0f7d14da.jpeg)

## 補足

dockerに詳しい方なら「当たり前やん」で終わりそうな内容です。
もしWindowsの方の少しでも助けになればと思い記事を書いた次第です。
