---
title: 【コピペですぐに使える】画像圧縮機能
created_at: 2019-02-19
updated_at: null
date: 2019-02-19
type: tech
image: /img/tech.jpg
description: gulpとimageminを使用して画像の圧縮を行う方法を解説しています。コピペでOKです！
tags:
  - Javascript
  - Gulp
---

## Github はこちら

https://github.com/couragenki/imagemin_gulp

### Github からクローンした場合の手順

node などの環境構築が既にできていれば下記の 3 ステップで画像圧縮ができます

1.クローンする
(もしも URL 変わってたら Github からクローンしてください)

```
 git clone https://github.com/couragenki/imagemin_gulp.git
```

2.nodemodule をインストール

```
 git clone https://github.com/couragenki/imagemin_gulp.git
```

3.実行

```
gulp img
```

## Node の環境などが用意できていない場合

下記の 1~11 のコマンドを実行すると画像の圧縮がすぐに行えるようになります

自分で導入する際に gulp や imagemin を調べたりして
大変だったのでコピペだけで使えるようにまとめました。

ターミナルでコマンドを実行してください。

## 実行準備

### 1 nodebrew をインストール

nodebrew をインストールするには[homebrew](https://brew.sh/index_ja)をインストールしてください。
(デザイナーさんなど普段 node を使用してない方は nodebrew のインストールでエラーになるかも)

```
brew install nodebrew
```

### 2 yarn をインストール

```
brew install yarn
```

### 3 npm init (npm を使うための設定)

```
npm init
```

### 4 src ファイルを作成

```
mkdir src
```

### 5 dist ファイルを作成

```
mkdir dist
```

### 6 gulpfile.js を作成

```
touch gulpfile.js
```

### 7 gulp をインストール

```
npm install gulp
```

### 8 imagemin をインストール

[imagemin](https://www.npmjs.com/package/gulp-imagemin)

```
npm i gulp-imagemin
```

### 9 imagemin-mozjpeg をインストール

[imagemin-mozjpeg](https://www.npmjs.com/package/imagemin-mozjpeg)

```
npm i imagemin-mozjpeg
```

### 10 imagemin-pngquant をインストール

[imagemin-pngquant](https://www.npmjs.com/package/imagemin-pngquant)

```
npm i imagemin-pngquant
```

ここまで実行するとこのようなディレクトリ構造になっています。

<img
  width="409"
  alt="スクリーンショット 2019-02-09 17.35.34.png"
  src="https://qiita-image-store.s3.amazonaws.com/0/199085/1b1523f4-4bdc-e7e4-d581-fcf16f6e8509.png">

```
├ dist　　　　　　　　　　　　　　　　　　 ・圧縮した画像が置かれる　(ディストリビューションの略)
├ gulpfile.js                        ・gulｐの設定を行う
├ node_modules                       ・nodeの設定が補完される
├ package-lock.json                  ・nodeのバージョンを表記する
├ package.json                       ・nodeの設定を記述する
└ src                                ・圧縮前の画像を保管する
```

### 11 gulpfile.js に下記をコピぺする

gulpfile.js

```javascript
const gulp = require("gulp");
const distDir = "dist";
const srcDir = "src";
const imagemin = require("gulp-imagemin");
const pngquant = require("imagemin-pngquant");
const mozjpeg = require("imagemin-mozjpeg");

gulp.task("img", () => {
  return gulp
    .src(srcDir + "/*.{png,jpg,gif,PNG,JPG,GIF}")
    .pipe(
      imagemin([
        pngquant("65-80"),
        mozjpeg({
          quality: 80,
          progressive: true,
        }),
        imagemin.svgo(),
        imagemin.optipng(),
        imagemin.gifsicle(),
      ])
    )
    .pipe(gulp.dest(distDir));
});
```

### 実行

上記を設定のうえ実行します。

```
gulp img
```

**_png 画像を圧縮_**

圧縮前 (37KB)

![test.png](https://qiita-image-store.s3.amazonaws.com/0/199085/aea5a96c-8fe3-9cae-69e2-a76890232e1d.png)

```
Using gulpfile ~/test_gulp/gulpfile.js
Starting 'img'...
gulp-imagemin: Minified 1 image (saved 25 kB - 67%)
Finished 'img' after 527 ms
```

圧縮後 (12KB)

![test.png](https://qiita-image-store.s3.amazonaws.com/0/199085/14039952-73fb-1b0f-bb63-7a9d4f5146a0.png)

**_jpg 画像を圧縮_**

スマホで撮った写真を圧縮してみる。

圧縮前 (1.9MB)

![test.jpg](https://qiita-image-store.s3.amazonaws.com/0/199085/ed453547-6e43-01ef-afa3-8e6a81c2201b.jpeg)

```
Using gulpfile ~/test_gulp/gulpfile.js
Starting 'img'...
gulp-imagemin: Minified 1 image (saved 25 kB - 67%)
Finished 'img' after 571 ms
```

圧縮後 (1.2MB)

![test.jpg](https://qiita-image-store.s3.amazonaws.com/0/199085/69530871-5b4e-1b28-64ed-06d9c79aed45.jpeg)

## まとめ

画像容量を 6 割近く削減することができました。
デザイナーではない素人目ですが画像の劣化などあまり気になりませんでした。

・基本的に `gulpfile.js` を変更すれば設定を変更可能です。
・細かい圧縮の設定などを変更したい場合はリンクの公式のオプションを参考にしてみてください。

ここまでお読みいただきありがとうございました。
