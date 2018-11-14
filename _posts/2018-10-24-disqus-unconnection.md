---
layout: post
title:  "Disqus评论系统无法加载的忧伤"
comments: false
date:   2018-10-24 23:36:13 +0800
categories: [Jekyll,Disqus]
---

Jekyll默认是支持Disqus评论功能，个人也比较喜欢Disqus的界面设计。
> 如果你能翻墙，可以试试如何设置Disqus。

1. 注册Disqus账号，网址为`https://disqus.com/`
2. 认证完成后，点击<strong>Add Disqus to Site</strong>
3. 根据指示填写相关信息，选择对应的Jekyll平台.
4. 按照示例代码修改_posts文件中的YAML头文件.
5. 按照代码中注释的部分，修改_layouts文件夹中的post.html文件。

> 因为国情如此，使用Disqus必须翻墙，否则Disqus部署完成后，访问时会不断加载，直至加载失败。

-------

1. Sign up a Disqus account, its website is `https://disqus.com/`
2. After your verification, find the button named <strong>Add Disqus to Site</strong>
3. According to the instructions, Choose your platform your site on.
4. Add a variable called comments to the YAML Front Matter and set its value to true. A sample front matter might look like:<br>
    ```
        ---
        layout: default
        comments: true
        # other options
        ---
    ```
5. In between a {% if page.comments %} and a {% endif %} tag, copy and paste the Universal Embed Code in the appropriate template where you'd like Disqus to load.

    ```
        <div id="disqus_thread"></div>
        <script>
    
        var disqus_config = function () {
        this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        };
        
        
        (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://chous.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        })();
        </script>
        <noscript>Please enable JavaScript to view the 
            <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
        </noscript>                           
    ```

-------

对比了Disqus和多说的界面后，果断放弃了多说。但Disqus界面又不好使，因此放弃此功能，后续有需要再行增加。删除function代码如下：

    ```
      var disqus_config = function () {
          this.page.url = "{{ page.url | prepend: site.baseurl | prepend: site.url }}";
          this.page.identifier = "{{ page.url }}";
        //this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
        //this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
      };
    ```