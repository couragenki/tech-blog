---
title: Pixi.jsの高解像度端末の対応
created_at: 2019-06-11
updated_at: null
date: 2019-06-11
description: Pixi.jsでRetina端末のような高解像度端末にて画像をぼやけることなくはっきり表示するための対応を解説しています。
type: tech
tags:
  - JavaScript
  - pixi
---

## 今回の問題

高解像度端末でPixi.jsを用いて画像を表示した場合に
ぼやけて表示されてしまう。

## 今回のゴール

iPhoneのRetinaディスプレイ端末のような高解像端末でも
ぼやけずに表示が可能になる。

### 実際に行った対応

Pixiのアプリケーションに対して下記の設定を追加する。

```javascript
resolution: window.devicePixelRatio || 1,
autoResize: true
```

### 高解像度端末に対する対応ってそもそもなに？

高解像度端末に対する対応ってそもそもなに？
という方にはこちらのリンクが分かりやすいのでオススメです。

http://un-tech.jp/display-resolution/

### 今回ハマったところ

元々はpixi-spineがぼやけているのを改修するタスクだったのですが
調べていくとそもそもPixiの画像全体がぼやけていることに気づいた。

色々調べていくうちに解像度を設定できることには気づいたのですが
autoResizeのオプションがあることを知らずに色々と自分で試行錯誤しました。

https://github.com/pixijs/pixi-compressed-textures

というかnpmのPixiのコメントにautoResizeに関する記載書いてね〜〜〜😭と気づいた時は思いましたw

他のオプションはちゃんと解説はしてるのに…

Pixi内部のrendererが何やっているか１つづつ読んでいてオプションに気がつきました、という沼にハマったお話です。

## 最後に

HTML5ゲームの開発でPixiを業務で触っていますがネット上にこれまでの知見がないため基本的に海外のGitHubのissueが頼りだったりします。
そのため実際の開発では実装よりも問題の調査などに時間を取られてしまうのが現状です。

今後伸びてくる分野だと思っているので記事を書いてくれる方が一人でも多いとPixi.jsの発展に繋がっていくのではと思い記事を書きました。
