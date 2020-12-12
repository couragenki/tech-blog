---
title: 【Fixing errors in Nuxt.js】 Part 2
created_at: 2020-07-09
updated_at: null
date: 2020-07-09
image: /img/tech.jpg
description: This article covers the resolution of errors that occurred during Nuxt.js development.
type: tech
tags:
  - Next.js
  - TypeScript
---

## The behavior that occurred this time.

When hosting a site created with nuxt using `npm run generate`, the transition does not work.

The URL can be changed but the page will not be displayed until it is reloaded when trying to transition with n-link.

## Cause

There is an error in rendering.

The error is shown below.

![picture_pc_33ddf4c62d958e654c6dc8b4761909a6.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/c39006c9-cc1e-e269-ddf6-67f42204824a.png)

```
[Vue warn]: The client-side rendered virtual DOM tree is not matching 
server-rendered content. This is likely caused by incorrect HTML markup,
 for example nesting block-level elements inside <p>, or missing <tbody>.
Bailing hydration and performing full client-side render.
```

## Fix.

- Fix block level elements if they are nested inside `<p>`.
- Add `<tbody>` to table tags
- Add `<no-ssr/>` to the target Github issue

In my environment this time, I had added a block element inside a p tag, so I fixed it and it solved the problem.

## What I learned this time

I was able to learn how render errors affect specific behavior.
