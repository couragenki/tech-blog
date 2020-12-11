---
title: The story of getting lost in installing docker-toolbox on the mac
created_at: 2017-12-09
updated_at: null
date: 2017-12-09
type: tech
image: /img/tech.jpg
description: We will walk you through the process of installing docker-toolbox on a Mac.
tags:
  - Docker
---

## About this article

What did I want to do with docker-toolbox in the first place?
In this article, I'll explain how to use the docker-toolbox on mac. There are many pitfalls in the toolbox...

### 1. First of all, try to download it normally.

<img width="615" alt="Screenshot 2017-12-09 14.51.01.png" src="https://qiita-image-store.s3.amazonaws.com/0/199085/4630015a-8aa8-e92f- bfdc-bd85f2d9aabb.png">

Yes, **first pitfall**.
It freezes at this screen and won't install.
I checked and found that I couldn't install from this root on a Mac in the first place.

### 2. Try to download with Homebrew

[Homebrew](https://brew.sh/index_ja.html)

<img width="1138" alt="Screenshot 2017-12-09 14.57.01.png" src="https://qiita-image-store.s3.amazonaws.com/0/199085/f8e6b00e-a98a-d69c- fc93-dced26905bf9.png">

I try to install it with Homebrew, as described in the book.

But here is the **second pitfall**.

After entering the password, I got an error message saying that it could not be downloaded.

**Error that appeared in the terminal**.
*System Preferences → Security & Privacy → General
For more information refer to vendor documentation or the Apple Technical Note:

For more information refer to vendor documentation or the Apple Technical Note: https://developer.apple.com/library/content/technotes/tn2459/_index.html*

**Allows installation based on the official Apple instructions!!! **

<img width="846" alt="Screenshot 2017-12-09 15.11.24.png" src="https://qiita-image-store.s3.amazonaws.com/0/199085/398c60d1-28f8-d9e0-3 ee8-3cbd0a57b743.png">

### 3. Installed successfully.

<img width="372" alt="Screenshot 2017-12-09 15.08.32.png" src="https://qiita-image-store.s3.amazonaws.com/0/199085/8f8c8966-91a7-dcc2-1a 2f-457f1fb006f5.png">

## Summary.

I usually stumble over the environment setup, but this time I got stuck on the installation.
I wasted a lot of time...
I've written about the installation process because it's surprisingly complicated if you don't know how to do it. m(_ _)m
 Translated with www.DeepL.com/Translator (free version)