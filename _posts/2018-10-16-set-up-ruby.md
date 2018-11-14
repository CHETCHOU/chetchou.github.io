---
layout: post
title:  "MacOS安装Ruby运行环境"
comments: false
date:   2018-10-16 23:36:13 +0800
categories: [Ruby,MacOS,Jekyll]
---
# MacOS安装Ruby运行环境

MacOS需要使用第三方工具安装Ruby，有rbenv和rvm。在这里我们选择的是RVM工具安装Ruby。不要问为什么，RVM的全称是Ruby Version Management。安装Ruby非常繁琐，稍有不慎就会安装失败。
1. 安装Xcode
    直接在App Store中搜索Xcode，下载安装。安装完成后，系统自动安装好 Unix 环境需要的开发包。
2. 安装RVM
    打开终端APP，输入安装代码，全篇若出现“You don't have write permission...”，则在代码前面加上sudo+空格，用管理员运行代码。
    安装RVM代码如下：<br>
    `$ curl -L https://get.rvm.io | bash -s stable`
    然后等待安装，中间可能会需要输入password，输入电脑的登陆密码即可，密码输入过程中不显示字符，不要慌，勇敢输入，然后回车即可。
    成功安装RVM后，输入以下代码：
    ```
    $ source ~/.rvm/scripts/rvm
    （-------------------会出现横杠，然后继续输入下一行指令）
    $ rvm -v
    ```
    <br>输入完成后，会出现一串代码，结束后，继续第3步。
3. 通过RVM安装Ruby
   输入下列指令，获取ruby的版本。<br>
   `$ rvm list known`
   <br>列出ruby版本后，选取一个Ruby 2.1.0或者更高的版本。<br>
   `$  rvm install 2.1.0`
   <br>可替换2.1.0成更高的版本号，我的Ruby是2.3.7版本。
   <br>等待运行完毕，Ruby和Ruby gems就都安装好了。
4. Ruby版本设置
    输入下列指令，设置安装的Ruby版本为系统默认版本。<br>
    `$ rvm 2.1.0 --default`
    <br>检测当前版本<br>
    `$ ruby -v`
    <br>返回如下：<br>
    `ruby 2.3.7p456 (2018-03-28 revision 63024) [universal.x86_64-darwin18]`
    <br>验证gem版本<br>
    `$ gem -v`
    <br>返回如下：<br>
    `2.5.2.3`
5. 替换源网址
    因为没太理解为啥要替换源网址，源网址在什么时候会发挥作用，所以我暂时没改。如果需要改的话，还请高人指点为什么要修改。
