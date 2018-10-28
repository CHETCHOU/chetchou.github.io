---
layout: post
title:  "【MacOS】教你如何安装Jekyll"
comments: false
date:   2018-10-16 23:36:13 +0800
categories: jekyll update
---

# Requirements before setting up your Github Pages site locally with Jekyll

* Step 1: 打开Mac的终端软件.
* Step 2: 验证你的Mac是否已经安装了Ruby 2.1.0或者更高的版本：<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`$ ruby --version`
    * Step 2.1: 如果已经安装，请直接进入第三步<br>
    `ruby 2.X.X`
    * Step 2.2: 如果你没有安装，请安装Ruby 2.1.0或者更高版本:
      请参考我的上一篇文档[《MacOS安装Ruby运行环境》](http://blog.chetchou.cn/jekyll/update/2018/10/16/set-up-ruby.html)。
* Step 3:安装bundler<br>
`$ gem install bundler`
* Step 4: 安装Git，这里我选择的是安装Git用指令操作，而不是Git桌面端。
    1. 下载并安装最新版的Git.[click here](https://git-scm.com/downloads)
    2. 配置Git的用户名.[click here](https://help.github.com/articles/setting-your-username-in-git/)
    3. 配置Git的邮箱.[click here](https://help.github.com/articles/setting-your-commit-email-address-in-git/)
<br>**PS：**然而，我在安装的时候似乎没有配置用户名和邮箱<br>
    然后，你可以从Github主页上克隆你的仓库文件到本地。<br>
* Step 5: 通过Bundler安装Jekyll
    To track your site's dependencies, Ruby will use the contents of your Gemfile to build your Jekyll site.

    1. 验证你的本地Jekyll网页仓库中是否有Gemfile文件:<br>
        ```
        ls
        Gemfile
        ```
        如果仓库中有Gemfile文件,跳到step 4. 如果没有，则跳到step 2.

    1. 如果仓库中没有Gemfile文件,打开文本编辑器,如Atom或sublime Text,新建一个文件加入如下命令行:<br>
        ```
        source 'https://rubygems.org'
        gem 'github-pages', group: :jekyll_plugins
        ```
    2. 把新建的文件命名为Gemfile并保存到你的本地Jekyll网页仓库的根目录中，跳到 step 5 准备安装Jekyll.

    3. 如果你已经有一个Gemfile，打开你的文本编辑器，如Atom或者Submit Text3，把如下几行代码加入你的Gemfile文件:<br>
        ```
        source 'https://rubygems.org'
        gem 'github-pages', group: :jekyll_plugins
        ```
    4. 从Github Pages gem安装Jekyll及其它依赖文件:<br>
        ```
        bundle install
        Fetching gem metadata from https://rubygems.org/............
        Fetching version metadata from https://rubygems.org/...
        Fetching dependency metadata from https://rubygems.org/..
        Resolving dependencies...
        ```

想获得更详细的教程，请参考 [此文档](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll)

-------

* Step 1: Open terminal.
* Step 2: Check whether you have Ruby 2.1.0 or higher installed:<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`$ ruby --version`
    * Step 2.1: if you already have, Skip to Step 4:<br>
    `ruby 2.X.X`
    * Step 2.2: if you don't have:
    Please refer to [this site](https://www.ruby-lang.org/en/downloads/)   
* Step 3:install bundler<br>
`$ gem install bundler`
* Step 4: set up Git
    1. Download and install the latest version of Git.[click here](https://git-scm.com/downloads)
    2. Set your username in Git.[click here](https://help.github.com/articles/setting-your-username-in-git/)
    3. Set your commit email address in Git.[click here](https://help.github.com/articles/setting-your-commit-email-address-in-git/)
<br>**However, I don't think the last two steps in setting up git is necessary**<br>
    then, you can clone your repository from your Github.
* Step 5: Install Jekyll using Bundler
    To track your site's dependencies, Ruby will use the contents of your Gemfile to build your Jekyll site.

    1. Check to see if you have a Gemfile in your local Jekyll site repository:<br>
        ```
        ls
        Gemfile
        ```
        If you have a Gemfile, skip to step 4. If you don't have a Gemfile, skip to step 2.

    1. If you don't have a Gemfile, open your favorite text editor, such as Atom, and add these lines to a new file:<br>
        ```
        source 'https://rubygems.org'
        gem 'github-pages', group: :jekyll_plugins
        ```
    2. Name the file Gemfile and save it to the root directory of your local Jekyll site repository. Skip to step 5 to install Jekyll.

    3. If you already have a Gemfile, open your favorite text editor, such as Atom or Submit Text3, and add these lines to your Gemfile:<br>
        ```
        source 'https://rubygems.org'
        gem 'github-pages', group: :jekyll_plugins
        ```
    4. Install Jekyll and other dependencies from the GitHub Pages gem:<br>
        ```
        bundle install
        Fetching gem metadata from https://rubygems.org/............
        Fetching version metadata from https://rubygems.org/...
        Fetching dependency metadata from https://rubygems.org/..
        Resolving dependencies...
        ```

You can want to read more, please refer to this [specific instruction](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll)
