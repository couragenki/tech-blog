---
title: Image Compression
created_at: 2019-02-19
updated_at: null
date: 2019-02-19
type: tech
image: /img/tech.jpg
description: Explains how to compress images using gulp and imagemin. Just copy and paste!
tags:
  - Javascript
  - Gulp
---

## Github is here.

https://github.com/couragenki/imagemin_gulp

### Steps to follow when cloning from Github

If you have already built an environment such as node, you can compress images in the following three steps

1.Clone the file.
(If the URL has changed, please clone it from Github)

```
 git clone https://github.com/couragenki/imagemin_gulp.git
```

2.Install nodemodule

```
 git clone https://github.com/couragenki/imagemin_gulp.git
```

3.execution

```
gulp img
```

## If you don't have Node environment, etc.

If you don't have a Node environment or something like that, you can run commands 1~11 below to compress images immediately.

When I installed it myself, I had to look up gulp and imagemin.
It was a lot of work to figure out gulp and imagemin when I installed it, so I put it together so that you can use it just by copying and pasting.

Please run the command in a terminal.

## Prepare to run

### 1 Install nodebrew

To install nodebrew, please install [homebrew](https://brew.sh/index_ja).
(Designers and other people who don't usually use node may get an error when installing nodebrew).

```
brew install nodebrew
```

### 2 Install yarn

```
brew install yarn
```

### 3 npm init (configuration for using npm)

```
npm init
```

### 4 Create src file

```
mkdir src
```

### 5 Create a dist file

```
mkdir dist
```

### 6 Create gulpfile.js

```
touch gulpfile.js
```

### 7 Install gulp

```
npm install gulp
```

### 8 Install imagemin

[imagemin](https://www.npmjs.com/package/gulp-imagemin)

```
npm i gulp-imagemin
```

### 9 Install imagemin-mozjpeg

[imagemin-mozjpeg](https://www.npmjs.com/package/imagemin-mozjpeg)

```
npm i imagemin-mozjpeg
```

### 10 Install imagemin-pngquant

[imagemin-pngquant](https://www.npmjs.com/package/imagemin-pngquant)

```
npm i imagemin-pngquant
```

After running this far, you should have a directory structure like this.

<img
  width="409"
  alt="スクリーンショット 2019-02-09 17.35.34.png"
  src="https://qiita-image-store.s3.amazonaws.com/0/199085/1b1523f4-4bdc-e7e4-d581-fcf16f6e8509.png">

```
├ dist　　　　　　　　　　　　　　　　　　 ・where the compressed image is placed (short for distribution)
├ gulpfile.js                        ・Configure Gulp settings.
├ node_modules                       ・node configuration will be complemented.
├ package-lock.json                  ・Notate the version of node
├ package.json                       ・Describe the node configuration
└ src                                ・Store the image before compression.
```

### 11 Copy and paste the following into gulpfile.js

gulpfile.js

```javascript
const gulp = require('gulp');
const distDir = 'dist';
const srcDir = 'src';
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const mozjpeg = require('imagemin-mozjpeg');

gulp.task('img', () => {
  return gulp.src(srcDir + '/*.{png,jpg,gif,PNG,JPG,GIF}')
    .pipe(imagemin([
      pngquant('65-80'),
      mozjpeg({
        quality: 80,
        progressive: true
      }),
      imagemin.svgo(),
      imagemin.optipng(),
      imagemin.gifsicle()
    ]))
    .pipe(gulp.dest(distDir));
});
```

### execution

Configure the above settings and execute.

```
gulp img
```

***png image compressed***.

Before compression (37KB)

![test.png](https://qiita-image-store.s3.amazonaws.com/0/199085/aea5a96c-8fe3-9cae-69e2-a76890232e1d.png)

```
Using gulpfile ~/test_gulp/gulpfile.js
Starting 'img'...
gulp-imagemin: Minified 1 image (saved 25 kB - 67%)
Finished 'img' after 527 ms
```

After compression (12KB)

![test.png](https://qiita-image-store.s3.amazonaws.com/0/199085/14039952-73fb-1b0f-bb63-7a9d4f5146a0.png)

***Compresses jpg images***.

Try to compress photos taken with a smartphone.

Before compression (1.9MB)

![test.jpg](https://qiita-image-store.s3.amazonaws.com/0/199085/ed453547-6e43-01ef-afa3-8e6a81c2201b.jpeg)

```
Using gulpfile ~/test_gulp/gulpfile.js
Starting 'img'...
gulp-imagemin: Minified 1 image (saved 25 kB - 67%)
Finished 'img' after 571 ms
```

After compression (1.2MB)

![test.jpg](https://qiita-image-store.s3.amazonaws.com/0/199085/69530871-5b4e-1b28-64ed-06d9c79aed45.jpeg)

## まとめ

## Summary

I was able to reduce the image size by almost 60%.
I'm not a designer, so I'm an amateur, but I didn't notice much degradation in the images.

- Basically, the settings can be changed by modifying `gulpfile.js`.
- If you want to change the detailed compression settings, please refer to the official options in the link.

Thank you for reading this far.
