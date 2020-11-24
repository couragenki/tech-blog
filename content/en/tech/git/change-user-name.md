---
title: Configuration changes when you change your github account name and user name
created_at: 2020-06-13
updated_at: null
date: 2020-06-13
image: /img/tech.jpg
description: This article explains how to deal with errors when you change your Github account name and user name, a task that doesn't happen often, with instructions.
type: tech
tags:
  - Git
---

この度githubのアカウント名とユーザー名を変更したのでローカルの設定も合わせて変更する
修正前`rantaro`
修正後`GenkiMatsubara`

## 今回変更するもの

1. ユーザー名
2. ssh設定

## ユーザー名の変更

### まずは現在のユーザー名を確認する

ユーザー名確認するコマンドはこちら

`git config user.name`

メールアドレスの確認はこちらですが今回は変更していないので特に使用しない。

`git config user.email`

今回だと以前まで使用していた名前が出てきました。

`rantaro`

### こちらのユーザー名の設定を変更する

リポジトリ単位での修正ならこちら

`git config user.name "ユーザー名"`

グローバルで変更しても問題なければこちら

`git config --global user.name "ユーザー名"`

上記を実行後に`git config user.name`で確認すると変更できました。

`genki.matsubara`

## ssh設定の変更

アカウント名とユーザー名を変更しているのでssh-keyの設定を行わないとプッシュできない

```
remote: Invalid username or password.
```

***.ssh***を確認すると

`RantaroTech-GitHub`

`RantaroTech-GitHub.pub`

ssh-keyが古いままだったのでこちらを作り直します。

### ssh-keyを作りなおす

再設定についてはこちらの記事を参考に進めます。

https://qiita.com/shizuma/items/2b2f873a0034839e47ce

鍵の作り直しを行う

`ssh-keygen -t rsa`

鍵を作成

```
id_rsa
id_rsa.pub
```

作成した鍵をクリップボードにコピー

`pbcopy < ~/.ssh/id_rsa.pub`

![スクリーンショット 2020-06-13 17.47.26.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/2cbe1708-0b02-019f-aa19-349845ed1a66.png)

keyの欄にコピーしたkeyを記載する。

titleは書かなくても大丈夫です。

![スクリーンショット 2020-06-13 17.47.34.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/b900a2d5-76bc-724b-7fe9-7e96fa3cd058.png)

記載したら `Add SSH key` で設定を保存する

### githubとの接続確認

`ssh -T git@github.com`で接続確認する

```
genki:genki-blog matsubaragenki$ ssh -T git@github.com
Enter passphrase for key '/Users/matsubaragenki/.ssh/id_rsa': 
Hi GenkiMatsubara! You've successfully authenticated, but GitHub does not provide shell access.
```

接続確認できたので作成したリポジトリにプッシュしてみる

```
$git push
$Username for 'https://github.com': GenkiMatsubara
Password for 'https://GenkiMatsubara@github.com': 
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 4 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (6/6), 772 bytes | 772.00 KiB/s, done.
Total 6 (delta 0), reused 0 (delta 0)
To https://github.com/GenkiMatsubara/genki-blog.git
 * [new branch]      master -> master
$ 
```

プッシュできました。

今まで使用していたssh-keyにgithubのユーザー名が含まれていたけど前回作成したのがもう2年くらい前なのでどうやって作成したか覚えていない…

