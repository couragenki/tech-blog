---
title: The story of the latest version of docker with an error by Windows
created_at: 2017-10-19
updated_at: null
date: 2017-10-19
type: tech
image: /img/tech.jpg
description: An error occurred during the docker upgrade, and I wrote about its resolution.
tags:
  - Docker
---

## Advertising

I wrote a story about how I made the app.
I hope you enjoy reading it ☺️.
[[Implemented and published in 3 days] Emo artistic image generation app development - Qiita](https://qiita.com/rantaro/items/fdb7bbd55a57c68db834)

## Conclusion.

When you use the latest version of docker, Share Drives will be unchecked on Windows.
If you get the error

1. right click on the whale symbol
2. click settings 3.
Check the Share Drives checkbox.

3. [docker_img.jpg](https://qiita-image-store.s3.amazonaws.com/0/199085/420bc634-31f4-3b07-66a1-a5af0f7d14da.jpeg)

I was able to solve the problem by

## How it happened

I just installed the latest version of docker.
When I uploaded docker as usual
I got an error and my local environment stopped working.

## Error

## Error content

>ERROR: Encountered errors while bringing up the project.

I was the only Windows user to get the error.
As the only Windows user, I got the error.

I'm not used to docker as I wrote in [A new front engineer tried docker](https://qiita.com/ranmaru_genki/items/4425894a4c29e64e50ba), so I panicked lightly...

## Solution

When I followed the settings that were changed by myself, I realized that
I realized that the communication was not working.

I solved it by reconfiguring the settings. 1.

1. right click on the whale symbol
2. click settings 3.
Check the Share Drives checkbox.
Click on ! [docker_img.jpg](https://qiita-image-store.s3.amazonaws.com/0/199085/420bc634-31f4-3b07-66a1-a5af0f7d14da.jpeg)

## Addendum

If you are familiar with docker, you may think that this is an obvious thing to do.
If you are familiar with docker, you may think it's obvious, but I wrote this article to help Windows users.
