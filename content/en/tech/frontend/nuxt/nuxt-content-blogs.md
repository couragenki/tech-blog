---
title: Notes on creating and publishing a blog with nuxt-content
created_at: 2020-09-17
updated_at: null
date: 2020-09-17
image: /img/tech.jpg
description: This is a reminder of how to create a site using nuxt-content. You can now create a site easily using the useful functions.
type: tech
tags:
  - Nuxt.js
  - nuxt-content
---

## Things to do this time
Try to create a blog because the function of nuxt-content was useful.

It is recommended to use `2.14.1` or later version of nuxt.
It saves you a lot of time in generating.
I used to have to write `processmd` and other settings, but this is useful to save time.

## Get and display information with nuxt-content.

Get the data to be displayed and sort it in order of the date of the article markdown.
If you set it to `deep: true`, all the information in the hierarchy below the `tech` directory is retrieved.

I proceeded by referring to the example in the Github source code.
https://github.com/nuxt/content/tree/dev/example

``` pages/tech/index.vue
async asyncData({ $content }) {
    let query = $content("tech", { deep: true }).sortBy("date", "desc");
    const tech = await query.fetch();
    const data = tech.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });

    return {
      data,
    };
  },
```

## Use bootstrap
Nuxt-content is not relevant, but I wanted to use bootstrap UI such as blog cards, so I'll add it.
https://www.npmjs.com/package/bootstrap-vue

`npm i bootstrap-vue`


``` package.json
"bootstrap-vue": "^2.16.0"
```

``` blogcard.vue
<style lang="scss" scoped>
@import "~~/node_modules/bootstrap/scss/bootstrap.scss";
</style>
```

You can now use it by importing bootstrap in the component you want to use.


## Add meta information.
Adding the default meta settings to config.

``` nuxt.config.js
head: {
    title: process.env.npm_package_name || 'page title',
    titleTemplate: '%s | page title',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' }
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'I'll set the default description' }
      { hid: 'og:site_name', property: 'og:site_name', content: 'Page Title' }
      { hid: 'og:type', property: 'og:type', content: 'blog' }
      { hid: 'og:url', property: 'og:url', content: 'https://URL' },
      { hid: 'og:title', property: 'og:title', content: 'couragenki' }
      { hid: 'og:description', property: 'og:description', content: 'I'll set the default description' }
      { hid: 'og:image', property: 'og:image', content: 'https://URL/og.jpg' }
      { hid: 'twitter:card', neme: 'twitter:card', content: "summary_large_image" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
```

Configure it to get the markdown information and change it dynamically.
Get it in the page with `nuxt-content` -> pass the data to the template.

``` components/Templates/posttemplate.vue
  head() {
    const metaTitle = this.pageMetaTitle;
    const metaDescription = this.pageMetaDescription;
    const metaImg = this.pageMetaImg;
    return {
    title: metaTitle,
    meta: [
      {
        hid: "description",
        name: "description",
        content: metaDescription,
      },
      {
        hid: "og:description",
        name: "og:description",
        content: metaDescription,
      },
      { hid: 'og:image', property: 'og:image', content: metaImg },
    ],
    }
  },
```

For static pages, I would write the settings directly.

``` pages/policy/index.vue
head: {
    titleTemplate: "policy |site title",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "This page describes the terms of use." ,
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "policy | site title",
      },
      {
        hid: "og:description",
        name: "og:description",
        content: "This page describes the terms of use." ,
      },
    ],
  },
```.

## Add Google Analytics to a site created with Nuxt.js.

I found the official documentation to be helpful.
https://ja.nuxtjs.org/faq/ga/

1. add `plugins`.
2. get the tracking ID from `google analytics`.
3. reflect it in production and check it

### 1.Add plugins

``` nuxt.config.js
plugins: [{ src: '~plugins/ga.js', mode: 'client' }],
```

``` plugins/ga.js
/* eslint-disable */

export default ({ app }) => {
  if (process.env.NODE_ENV !== 'production')
    return /*
     ** Include the Google Analytics script
     */
      ; (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r
          ; (i[r] =
            i[r] ||
            function () {
              ; (i[r].q = i[r].q || []).push(arguments)
            }),
            (i[r].l = 1 * new Date())
          ; (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0])
        a.async = 1
        a.src = g
        m.parentNode.insertBefore(a, m)
      })(
        window,
        document,
        'script',
        'https://www.google-analytics.com/analytics.js',
        'ga'
      )
  /*  Get your Google Analytics tracking ID and write it here. */
  ga('create', 'UA-○○○○○○○○○-○', 'auto')
  app.router.afterEach((to, from) => {
    ga('set', 'page', to.fullPath)
    ga('send', 'pageview')
  })
}
```

### 2. Get a tracking ID from google analytics.
You can get it for free if you have a Google account.
![91992353-00469580-ed6f-11ea-8bd1-c8e8febdf431.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/e1e5a18e-37da-5a03-66cb-e041180a7c92.png)

google analytics
https://analytics.google.com/

### 3. Reflect and check the settings in production
After reflecting the settings, check the analytics and you will see that the number of users has increased.
The analytics settings are now complete.
![91992250-e016d680-ed6e-11ea-8227-4a8633d66bb2.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/63cf820c-4dce-3c6b-77ac-202960e06613.png)

## Add a sitemap (nuxt-content version)
We will use nuxtjs/sitemap.
This time, use nuxt-content.
https://www.npmjs.com/package/@nuxtjs/sitemap

`npm install @nuxtjs/sitemap`

``` package.json
"@nuxtjs/sitemap": "^2.4.0"
```

The way to specify a sitemap is basically the same as adding a sitemap with nuxt.
You get the path with `nuxt-content` respectively.
(You may want to get them all at once.)

``` nuxt.config.js

modules: ['@nuxtjs/sitemap'],
sitemap: {
    hostname: 'https://サイトのURL',
    routes: async () => {
      const { $content } = require('@nuxt/content')
      const tech = await $content("tech", { deep: true }).only(['path']).fetch()
      const marketing = await $content("marketing", { deep: true }).only(['path']).fetch()
      const posts = Object.assign(tech, marketing);

      return posts.map(article => article.path)
    }
  },
```

Once you have added this much, reflect it in the production.
After that, add this to the sitemap in Google Search Console.

`https://サイトのURL/sitemap.xml`

I added a sitemap to this blog because adding a sitemap shortens the time it takes for a new article to be crawled, which is advantageous for SEO.

## The results of this project

[Published on.]
https://couragenki.com/
![og.jpg](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/90da7c0e-e7bb-70c9-a3b3-4a348da341b8.jpeg)

netlify is useful, so I link github to it and publish it.
I develop it in about two weeks and publish it because I want user feedback.

I was able to improve the initial display speed of the site compared to my previous site.
It's been open to the public for about a month, but the bounce rate has dropped by about 20% compared to the WordPress site before the renewal.

There are still many parts that I want to customize, so I will continue to develop the site.


## Impressions
- nuxt-content saves me a lot of work!
- It was hard to figure out the UI... can't wait to get used to it.

If you have any feedback or advice, I would appreciate your comments.
Thank you for reading to the end.