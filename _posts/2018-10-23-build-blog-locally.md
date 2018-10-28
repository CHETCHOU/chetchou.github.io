---
layout: post
title:  "[Jekyll]如何本地运行Jekyll框架博客（MacOS）"
date:   2018-10-23 23:36:13 +0800
comments: false
categories: jekyll update
---
# How to run your locally jekyll blog site

1. 通过寻找根目录找到本地项目仓库。当克隆Github上的项目时，本地根目录下会出现一个文件夹，命名方式和你的项目名称一致。
2. 本地运行你的Jekyll框架博客。
    1. 当你打开terminal输入指令时，需跳转到你的项目仓库文件目录。
         `$ cd YOUR REPOSITORY DIRECTORY`
    2. 然后本地运行框架博客。<br>
        `$ bundle exec jekyll serve`<br>
        若正常运行，则出现以下提示：      
        ```
        Server address: http://127.0.0.1:4000/
        Server running... press ctrl-c to stop.
        ```
3. 通过在浏览器内输入`http://localhost:4000`预览你的本地Jekyll框架博客。

-------

1. Navigate into the root directory of your local Jekyll site repository. the name of the repository is the same with your repository cloned from Github.
2. Run your Jekyll site locally.
    1. You need change your category to your repository site before you input your running instruction.<br>
         `$ cd YOUR REPOSITORY DIRECTORY`
    2. Then, You can run your site locally.<br>
        `$ bundle exec jekyll serve`<br>
        if it goes well, it will show the hints below：
        ```
        Server address: http://127.0.0.1:4000/
        Server running... press ctrl-c to stop.
        ```
3. Preview your local Jekyll site in your web browser at `http://localhost:4000`
      
