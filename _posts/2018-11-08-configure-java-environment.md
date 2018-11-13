---
layout: post
title: "【Java】win10配置Java环境"
date: 2018-11-08 14:57:55 +0800
comments: false
categories: Java
---

# Win10 配置java环境

{:toc}

## 配置Java环境前提

配置java环境之前已经安装Java的JDK。如果未安装，请从Oracle官网下载对应32位或64位的电脑版本。[下载地址](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

笔者安装的是：**jdk-8u191-windows-x64** 版本。

## 配置Java环境变量

1. ### 进入配置界面

   右键点击“此电脑”，点击“属性”，打开”高级系统设置“，选择“环境变量（N）...”，如图所示。

   ![1541655901844](/assets/images/1541655901844.png)

2. ### 开始配置

   新建系统变量，

   变量名为：

   ```
   JAVA_HOME
   ```

   变量值为：

   ```
   C:\Program Files\Java\jdk1.8.0_191
   ```

   ![1541659170776](/assets/images/1541659170776.png)

   编辑系统变量，在现有变量之前，加上：

   ```
   %JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;
   ```

   ![1541659435688](/assets/images/1541659435688.png)

   新建系统变量，变量名为

   ```
   CLASSPATH
   ```

   变量值为

   ```
   .;%JAVA_HOME%\lib;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar
   ```

   ![1541659215120](/assets/images/1541659215120.png)

   配置完成后，点击确定即可。

## 测试java环境是否配置成功

使用快捷键"Win+R",输入“cmd”。分别依次输入以下代码并回车，若显示如下示例所示，即可认为配置成功。

```
java
```

![1541654993660](/assets/images/1541654993660.png)

```
javac
```

![1541654855230](/assets/images/1541654855230.png)

```
java -version
```

![1541655088797](/assets/images/1541655088797.png)



