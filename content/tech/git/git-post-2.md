---
title: Sourcetreeの Invalid username or passwordの対策
created_at: 2018-12-02
updated_at: null
image:
description: Sourcetreeのエラーシューティングを記事にしました。エラーの発生から解決までを記事にしています。
type: tech
tags:
  - Git
---

## 困った内容

新しい職場でSourcetreeのセッティングをしたがプルとフェッチができなかった

## 調べて試したこと

- Gitバージョンアップ
- configの再設定設定
- ユーザーネームとパスワードの設定

**どれもうまくいかず…**

## 自分はこれで直った↓

### １、Sourcetreeメニューの環境設定

![ソースツリー１.png](https://qiita-image-store.s3.amazonaws.com/0/199085/45a8452a-d557-7fcf-cd06-4b02e9e11ac3.png)

### ２、高度な設定を選択

![ソースツリー２.png](https://qiita-image-store.s3.amazonaws.com/0/199085/11c737cc-83fe-dd3e-128c-7a75bfebb66e.png)

### ３、バックログのホスト名・ユーザ名を削除。

![スクリーンショット 2018-12-02 0.29.47（2）.png](https://qiita-image-store.s3.amazonaws.com/0/199085/05dc3364-4412-1e36-7476-d8e3e3dfae2f.png)

### ４、その後Sourcetree再起動

### ５、再起動後にユーザ名とパスワード入力

## まとめ

上記の実行で**無事リモートからプルできるようになりました！**

