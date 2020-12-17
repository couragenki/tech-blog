---
title: Nuxt.js + TypeScript to display images with favicons on your site
created_at: 2020-06-15
updated_at: null
date: 2020-06-15
image: /img/tech.jpg
description: Now that we have built a development environment using Nuxt.js and TypeScript, I'd like to prepare the basic development procedures.
type: tech
tags:
  - Nuxt.js
---

## Continued from last time.

In this article, we will create a favicon and add it to the site.
This article is like a chopstick rest.

[Beginning of development with Nuxt.js + TypeScript](https://qiita.com/couragenki/items/d223bf6023b9c6c3fe6a)


## Applying favicon to a Nuxt.js site

How to make favicons can be found here.
[How to create a favicon quickly in 5 minutes](https://qiita.com/couragenki/items/8ec90f30956dfc0e57f8)

Since favicons are static and rarely updated, add them to `static`.

<img width="408" alt="スクリーンショット 2020-06-14 0.51.31.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/54532b83-b60d-e4f1-1242-c31d7d5bc49f.png">

Next, add the settings to `nuxt.config.js`.
The `static` directory name is not included in the path.
If you want to change the file name, change the icon name of `href` here.

``` nuxt.config.js
head: {
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
  ]
},
```

This is what it looks like when you actually display the favicon after taking the above steps.

<img width="191" alt="スクリーンショット 2020-06-14 1.22.17.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/f83beb43-9191-b1eb-096e-dfd7535fffc6.png">

The favion is just barely readable up to two characters.
Now that it's displayed, the favicon setup is complete!

## Add an image and display it.

## Adding an image

The image to be added this time is to be used as a static one, so add it to `static`.

<img width="615" alt="スクリーンショット 2020-06-14 1.54.30.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/f528e1a5-e16a-aee7-6fe2-72dcaceb59a9.png">


### Calling an image

Call images on the page side.
When calling `static` images, just enter the image path without `/static`.

``` pages/index.vue
<template>
  <div>
    <h2>TOP PAGE</h2>
    <img src="/img/sample.jpg" />
  </div>
</template>
```

<img width="538" alt="スクリーンショット 2020-06-14 1.41.05.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/95308184-eaed-da6d-e0d0-96e88fb9dee6.png">

This is how we were able to display the image.

## On the use of assets and static in Nuxt.js

After learning vue, I started learning Nuxt.js and had a question.
Which should I add images to, assets or static?
I took another look at the official documentation to learn more.

[Source:Nuxt.js official documentation (from assets)](https://ja.nuxtjs.org/guide/assets#static)

### What to place in assets

Put the assets you want to webpack in assets.

- Image files you want to webpack
- css files

Other dynamically generated images should be placed in `assets`, including svg files.

If you want to generate C image by combining A image and B image, you should put them in `assets`.

Editing and generating images is my personal favorite process, so I'll introduce it in another article.

If you add the image compression flow to webpack build, you can save time and avoid human error.
I wrote an article about image compression here.

[[Even non-engineers can use it right away by copying and pasting] image compression function](https://qiita.com/couragenki/items/cf2714382bfc6fb89081)

### Things to place in assets

Place assets that are not webpacked

- favicon
- Static images (images not used for modification or composition).

### actually display both of them.
If you actually display the images in the `assets` directory and the images in the `static` directory, you will see this description.

When calling images in the `assets` directory, as in the following code, you should write `~/assets/` and not omit it like `static`.

``` pages/index.vue
<template>
  <div>
    <h2>TOP PAGE</h2>
    <!-- static -->
    <img src="/img/sample.jpg" />
    <!-- assets パスの『~』は『@』でもOK -->
    <img src="~/assets/img/sample.jpg" />
  </div>
</template>
```

### Conclusion

Q.I don't know whether images should be placed in assets or static.

A.assets is for images you want to webpack, static is for images you don't want to webpack.

## Summary

I think it's important to use both assets and static when developing with nuxt.js, so I was able to learn a lot through this lesson.

The site I'm going to create this time is a static site, so I'll be placing images in the `static` directory.

Finished
