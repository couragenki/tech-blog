---
title: Support for high-resolution devices in Pixi.js
created_at: 2019-06-11
updated_at: null
date: 2019-06-11
image: /img/tech.jpg
description: Pixi.js explains how to display images clearly on high-resolution devices such as Retina devices without blurring.
type: tech
tags:
  - JavaScript
  - pixi
---

## This issue

When displaying images using Pixi.js on high resolution devices
images are displayed blurry.

## Goal of this project

To make it possible to display images without blurring even on high-resolution devices such as iPhone Retina display devices.
The goal of this project is to make it possible to display images on high-resolution devices such as the iPhone's Retina display devices without blurring.

### Actual steps taken

Add the following settings to the Pixi application.

```javascript
resolution: window.devicePixelRatio || 1,
autoResize: true
```

### What is support for high-resolution devices anyway?

What is support for high-resolution devices?
If you're wondering, this link is a good place to start.

http://un-tech.jp/display-resolution/

### Where I got stuck this time.

Originally, the task was to fix a blurry pixi-spine.
As I looked into it, I realized that the entire Pixi image was blurry to begin with.

As I looked around, I noticed that I could set the resolution, but
I didn't know there was an autoResize option, so I did a lot of trial and error myself.

https://github.com/pixijs/pixi-compressed-textures

When I realized that there was no mention of autoResize in npm's Pixi comments 😭, I thought to myself, "What the heck?

The other options are well explained, but...

This is a story of how I got stuck in the swamp of reading what the renderer inside Pixi was doing one by one and noticed the option.

## Lastly

I've been working on Pixi for HTML5 game development, but since I don't have any previous knowledge on the Internet, I've been relying on GitHub issues from overseas.
Therefore, in actual development, I spend more time investigating problems than implementing them.

We believe that this is an area that will grow in the future, so we thought that if even one more person wrote an article about it, it would lead to the development of Pixi.js.
