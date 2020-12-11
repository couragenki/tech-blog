---
title: 【Fixing errors in Nuxt.js】 Part 1
created_at: 2020-06-14
updated_at: null
date: 2020-06-14
image: /img/tech.jpg
description: This article covers the resolution of errors that occurred during Nuxt.js development.
type: tech
tags:
  - Next.js
  - TypeScript
---

## Contents of this article
Dealing with errors that occur during development in nuxt.js

## Error Description

The relevant error

```
Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.
```

The translation is

````
A component template must contain only one root element.
```

### The corresponding code of the error

``` pages/index.vue
<template>
  <h2>TOP PAGE</h2>
  <img src="/img/sample.jpg" />
</template>
```

Oh, that's a common mistake...

### Fixed code.

This means that there needs to be only one root element in the `<template>` tag, so I modified the code.
I added a `div` tag and added the original tag inside it.

``` pages/index.vue
<template>
  <div>
    <h2>TOP PAGE</h2>
    <img src="/img/sample.jpg" />
  </div>
</template>
```

## Summary
I've written this article as a reminder to myself to be careful because sometimes I tend to forget tags when I'm developing nuxt.js from scratch.

Finish
