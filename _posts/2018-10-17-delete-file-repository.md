---
layout: post
title:  "update files in repository!"
date:   2018-10-17 23:36:13 +0800
categories: jekyll update
---

# 如何删除Github远程仓库的某个文件/文件夹
## How to delete a file/folder in the repository of Github

Github远程仓库的文件是无法在Github上删除的，必须下载到本地，然后再删除，在更新到仓库中。详细代码如下：

You can not delete your file or folder in the repository of you Github, therefore, You should clone your repository and download all your files in the local, and then, use git instructions to delete your file and then update to your repository. the detail code like this:

```
git clone YOUR REPOSITORY SITE
git add .
git rm YOUR FILE NAME  //删除单个文件
git rm -r YOUR FOLDER NAME //删除文件夹
git commit -m 'Delete a file/folder'
git push
```

