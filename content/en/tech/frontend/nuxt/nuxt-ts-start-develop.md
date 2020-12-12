---
title: Beginning Development in Nuxt.js + TypeScript
created_at: 2020-06-26
updated_at: null
date: 2020-06-26
image: /img/tech.jpg
description: Now that we have built a development environment using Nuxt.js and TypeScript, I'd like to prepare the basic development procedures.
type: tech
tags:
  - Next.js
  - TypeScript
---

## Review of previous article

This article is a continuation of [Previous Environment Setup](https://qiita.com/couragenki/items/d8a809c383c4fef9ecda).

The goal of this article is to create a static site, so we'll start by adding pages.

! [screenshot 2020-06-13 18.5<img width="546" alt="screenshot 2020-06-13 23.13.43.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/db8a4bb2-c4c3-ad77-6448-1b63972d02a3.png">
8.17.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/6c4c4388-5990-b63c-9682-5d5ea8f6d5e4.png)

This is a continuation of the last time we built an environment like this.

From this point on, we will refer to the official Nuxt.js website.

https://ja.nuxtjs.org/

## Add app.html

The description should be based on cases where it does not work depending on the IE environment.

``` app.html
<!DOCTYPE html>
<!--[if IE 9]><html lang="en-US" class="lt-ie9 ie9" {{ HTML_ATTRS }}><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html {{ HTML_ATTRS }}><!--<![endif]-->
  <head {{ HEAD_ATTRS }}>
    {{ HEAD }}
  </head>
  <body {{ BODY_ATTRS }}>
    {{ APP }}
  </body>
</html>
```

[See "Application Templates" on the official website](https://ja.nuxtjs.org/guide/views/#%E3%82%A2%E3%83%97%E3%83%AA%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E) 3%83%88)

## Create a layout and add a default and error page

Create the default and error pages.

### Add defaults (default.vue).

``` default.vue
<template>
  <div>
    <nuxt />
  </div>
</template>

<script lang="ts">
export default {
  layout: "default"
};
</script>
```

If you want to use a custom template, specify the template in the page you want to use as shown in [the video prepared by the official here](https://youtu.be/YOKnSTp7d38).

### Create an error layout (error.vue) for the error page.

This is a layout to notify you when an error occurs.
It shows the error code with `{{ error.statusCode }}`.
I also added a line to go back to the top.

``` error.vue
<template>
  <PageTemplate>
    <h1>こちらはエラーページです</h1>
    <h2>エラーコードは {{ error.statusCode }} です。</h2>
    <nuxt-link to="/">トップページへ戻る</nuxt-link>
  </PageTemplate>
</template>

<script lang="ts">
export default {
  props: ["error"],
  layout: "error"
};
</script>
```

If you try to go to a path that doesn't exist yet after adding this layout for errors, you can now see the error code like this.

<img width="424" alt="スクリーンショット 2020-06-13 23.45.09.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/5335c657-28b6-9869-e7d2-881fe8ada638.png">

It is easier to add error messages early in the development process.

## Add a page

The next step is to add pages. For now, we'll add `pages/index.vue`, which corresponds to the top page.

It's convenient to use typescript and sass by default.

Basically, scc will proceed with scoped css.

``` pages/index.vue
<template>
  <h2>TOP PAGE</h2>
</template>

<script lang="ts">
</script>

<style scoped lang="scss">
</style>
```

Add this file and `npm run dev` to apply the added page.

<img width="546" alt="スクリーンショット 2020-06-13 23.13.43.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/25ae41fe-aad9-2c6c-ea02-79e986fe9812.png">

Once this is complete, we can start developing.

Add a head to nuxt.config.js

``` nuxt.config.js
head: {
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
}
```

As with the errors, set utf-8 and add the viewport early on.
(To avoid stepping on the rare garbled bug.)

## Impressions

This is the basics of the basics, but I learned a lot from watching the official documentation and the videos provided by the official developers, as I noticed methods I didn't know about.

I've already pushed the diff to [my Github](https://github.com/couragenki/genki-blog/commit/c09c14e06eacff910473700ad3ddbaae6e1e63bb).

To be continued
