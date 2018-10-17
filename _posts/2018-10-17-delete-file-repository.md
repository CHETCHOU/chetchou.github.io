---
layout: page
title:  "update files in repository!"
date:   2018-10-17 23:36:13 +0800
categories: jekyll update
---

# 如何删除Github远程仓库的某个文件/文件夹
## How to delete a file/folder in the repository of Github

Github远程仓库的文件是无法在Github上删除和修改的，必须下载到本地，然后再删除或修改，再更新到仓库中。

You can not delete your file or folder in the repository of you Github, therefore, You should clone your repository and download all your files in the local, and then, use git instructions to update to your repository. 

### 克隆远程仓库到本地

使用如下指令克隆你的仓库到本地，仓库地址可在github网站上找到，克隆指令如下：

please use these instructions to clone your repository to your local, of course you can find your repository site from your Github pages. clone instructions is like this:

`$ git clone YOUR REPOSITORY SITE`

### 删除文件或文件夹

删除文件或文件夹的详细代码如下：

the detail code used for deleting a file or a folder is like this:

```
$ git rm YOUR FILE NAME  //删除单个文件
$ git rm -r YOUR FOLDER NAME //删除文件夹
```
### 新增文件或修改文件

在你新增或修改文件后，需要使用以下指令，将工作中文件的所有变化添加到暂存区，被删除的文件除外。

when you have a modify or new record, you need to use this instruction below to add your every single change to cache zone, except deleted files.
 
`$ git add .`

### 提交文件到远程仓库

最后，先将暂存区内的改动提交给本地的版本库内。使用以下指令完成提交。

finally, you just finish all your changes. but remember, you need commit all your changes to your local files. please use this instructions below:

`$ git commit -m 'Update or Delete a file/folder'`

最终，将本地的版本库内的文件提交到远程服务器上。使用以下指令完成提交。
in the end, please use the instruction to commit your local files to the repository.

`$ git push`
