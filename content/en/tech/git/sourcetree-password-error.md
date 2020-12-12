---
title: Sourcetree『Invalid username or password』Countermeasures
created_at: 2018-12-02
updated_at: null
date: 2018-12-02
image: /img/tech.jpg
description: An article on Sourcetree error shooting. The article covers everything from error occurrence to resolution.
type: tech
tags:
  - Git
---

## The trouble.

I set up Sourcetree at my new job, but I couldn't pull and fetch.

## Things I've looked into and tried

- Git version upgrade
- Re-configured config settings
- Setting up username and password

**None of these worked...**

## This fixed it for me ↓

### 1.Sourcetree menu preferences

![ソースツリー１.png](https://qiita-image-store.s3.amazonaws.com/0/199085/45a8452a-d557-7fcf-cd06-4b02e9e11ac3.png)

### 2.Select advanced settings

![ソースツリー２.png](https://qiita-image-store.s3.amazonaws.com/0/199085/11c737cc-83fe-dd3e-128c-7a75bfebb66e.png)

### 3.Remove hostname and user name from backlog.

![スクリーンショット 2018-12-02 0.29.47（2）.png](https://qiita-image-store.s3.amazonaws.com/0/199085/05dc3364-4412-1e36-7476-d8e3e3dfae2f.png)

### 4.Then restart Sourcetree.

### 5.Enter your user name and password after rebooting.

## summary

You can now successfully pull from a remote location by executing the above!

