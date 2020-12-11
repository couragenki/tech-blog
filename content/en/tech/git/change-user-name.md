---
title: Configuration changes when you change your github account name and user name
created_at: 2020-06-13
updated_at: null
date: 2020-06-13
image: /img/tech.jpg
description: This article explains how to deal with errors when you change your Github account name and user name, a task that doesn't happen often, with instructions.
type: tech
tags:
  - Git
---

I've changed my github account name and user name, so I'll change my local settings as well.
Before modification `rantaro`.
After modification `GenkiMatsubara`.

## Things to change this time

1. user name
2. ssh settings

## Change user name.

## First, check your current user name.

Here is the command to check your user name

`git config user.name`.

Here's the command to check the email address, but since we're not changing it this time, we won't use it specifically.

`git config user.email`.

This time, the name I used before came up.

`rantaro`.

### Change the user name setting here.

If you want to modify it on a per-repository basis, you can do so here

`git config user.name "username"`

If you don't mind changing it globally, here is

`git config --global user.name "username"`

After executing the above, I was able to change it by checking `git config user.name`.

`genki.matsubara`.

## Change ssh configuration

Since we've changed the account name and user name, we can't push without configuring the ssh-key.

````
remote: Invalid username or password.
```

If you check ***.ssh***, you will see

`RantaroTech-GitHub`.

`RantaroTech-GitHub.pub`.

The ssh-key is still outdated, so we'll recreate it.

### Re-create the ssh-key

For more information about reconfiguration, please refer to this article.

https://qiita.com/shizuma/items/2b2f873a0034839e47ce

Rebuild the lock.

`ssh-keygen -t rsa`

Create a key

```
id_rsa
id_rsa.pub
```

Copy the created key to the clipboard.

`pbcopy < ~/.ssh/id_rsa.pub`

![スクリーンショット 2020-06-13 17.47.26.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/2cbe1708-0b02-019f-aa19-349845ed1a66.png)

Write the copied key in the "key" field.

You do not need to write the title.

![スクリーンショット 2020-06-13 17.47.34.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/b900a2d5-76bc-724b-7fe9-7e96fa3cd058.png)

Save the configuration by `Add SSH key` after describing it.

### Check the connection to github.

Use `ssh -T git@github.com` to check the connection.

```
genki:genki-blog matsubaragenki$ ssh -T git@github.com
Enter passphrase for key '/Users/matsubaragenki/.ssh/id_rsa': 
Hi GenkiMatsubara! You've successfully authenticated, but GitHub does not provide shell access.
```

Now that the connection is confirmed, try to push to the repository you created.

```
$git push
$Username for 'https://github.com': GenkiMatsubara
Password for 'https://GenkiMatsubara@github.com': 
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 4 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (6/6), 772 bytes | 772.00 KiB/s, done.
Total 6 (delta 0), reused 0 (delta 0)
To https://github.com/GenkiMatsubara/genki-blog.git
 * [new branch]      master -> master
$ 
```

I was able to push.

The ssh-key I've been using contains my github username, but I don't remember how I created it since the last time I used it was about two years ago...

