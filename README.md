# Maupassant
Maupassant theme, ported to Hugo.

1. 预览效果:[Y4er的博客](https://y4er.com/)

一款非常简洁、性能高的Hugo主题，适配不同的设备（PC，Mobile等）。 主要是基于 Typecho [Cho](https://github.com/pagecho/maupassant/), 从 [rujews](https://github.com/rujews/maupassant-hugo) forked，在原基础上增加了图片灯箱效果、图片懒加载、文章版权信息、修改个别bug。

**本README.MD修改自原仓库**

## Preview

![Maupassant 主题预览](./preview.png "Maupassant 主题预览")

## 功能特性

1. 最近发表的文章支持，显示最近的10篇 
2. 分类支持，并且可以显示分类内的文章数量
3. 标签云支持
4. 一键回到页面顶部
5. RSS支持，并且可以自动发现RSS
6. 自定义菜单支持，不限个数，自定义排序
7. 自定义友情链接支持
8. 支持文章按年份日期进行归档
9. 支持GA分析统计
10. sitemap站点地图
11. 代码高亮、代码行号
    * markup、css、clike、javascript、c、csharp、bash、cpp
    * aspnet、dart、docker、markup-templating、erlang
    * go、groovy、java、json、kotlin、markdown、lua、objectivec
    * php、python、r、yaml、toml
12. 404错误页
13. 支持关键字SEO优化
14. Google站内搜索
15. 推荐文章 支持
16. Disqus评论支持
17. 不蒜子页面计数器支持
18. 自定义css、js
19. utteranc评论
20. 部分自定义的shortcode
21. 图片灯箱效果
22. 图片懒加载
23. 文章版权提示

## 下载安装

```bash
cd <YOUR Bolg Root Dir>
git clone https://github.com/Y4er/maupassant-hugo themes/maupassant
```

## 配置

#### 应用主题

```toml
theme = "maupassant"
```

#### 基本配置

```toml
baseURL = "https://y4er.com"
languageCode = "zh-CN"
title = "Y4er的博客"
theme = "maupassant"
hasCJKLanguage = true

# Google统计
GoogleAnalytics = "UA-131456498-4"

[author]
  name = "Y4er"

[params]
  author = "Y4er"
  subtitle = "伪程序员,信安爱好者"
  keywords = "Y4er,信息安全,网络安全,红蓝攻防,渗透测试,bypass,waf,注入,黑客,chabug"
  description = "专注于网络攻防和信息安全"
  busuanzi = true
```

基本配置大家都比较熟悉，这是我的博客的配置，仅供参考。

#### 自定义菜单

```toml
[menu]

  [[menu.main]]
    identifier = "archives"
    name = "归档"
    url = "/archives/"
    weight = 2

[[menu.main]]
    identifier = "about"
    name = "关于"
    url = "/about/"
    weight = 3
```

`identifier`标志符必须是唯一的，不能重复；`weight`用于排序，值越小越靠前。

#### 友情链接

```toml
# 友情链接
[[params.links]]
  title = "ChaBug安全"
  name = "ChaBug安全"
  url = "http://www.chabug.org/"
[[params.links]]
  title = "ChaBug安全"
  name = "ChaBug安全"
  url = "http://www.chabug.org/"
```

`params.links`是一个数组，所以我们可以自定义很多友情链接。`name`表示显示的链接文本，`title`表示鼠标悬停在友情链接时，显示的文本。

#### 广告模块

广告模块在侧边栏，可以灵活配置，让博主可以放一些超链接广告、或者图片链接广告。

```toml
[[params.ads]]
  title = "广告标题"
  url = ""
[[params.ads]]
  title = "广告标题"
  url = "https://y4er.com/"
  img = "https://y4er.com/1.jpg"
```

`params.ads`是一个数组，所以我们可以自定义很多广告。如果`img`存在，则优先使用图片广告,`title`表示鼠标悬停在广告链接时，显示的文本。

#### 添加GA分析统计

该主题已经支持了GA分析统计，只需要在`config.toml`配置里加入如下配置即可。
```toml
# Google统计
GoogleAnalytics = "UA-134548098-1"
```
**注意 请加到尽可能靠上的位置**
#### 文章归档支持

Hugo默认是不支持生成归档文件的，需要自己实现。该主题已经实现了文章归档，只需要在新建`content/archives/index.md`文件，文件内容为：

```md
title: "归档"
description: 我写过的文章都在这里了
type: archives
```

`title`和`description`都可以换成你自己的，但是`type`必须是`archives`。

`content/archives/index.md`表示在`content/archives/`目录下的`index.md`文件

#### Disqus

该主题支持Disqus评论，如果要启用Disqus，可以在`config.toml`里添加如下配置即可.

```toml
disqusShortname = "yourdiscussshortname"
```
替换成你自己的Disqus名字即可。

#### utteranc

该主题支持utteranc评论，这是一个基于Github  Issue的评论系统，使用方便，不用翻墙即可评论。
可以在`config.toml`里添加如下配置即可.更多详见 [https://utteranc.es](https://utteranc.es)

```toml
[params.utteranc]
    enable = true
    repo = ""    # 存储评论的Repo，格式为 owner/repo 例如我的 Y4er/Y4er.github.io
    issueTerm = "pathname"  #表示你选择以那种方式让github issue的评论和你的文章关联。
    theme = "github-light" # 样式主题，有github-light和github-dark两种
```
对于以上issueTerm可以选择的配置有
1. `pathname` 以路径的方式，推荐选项，这样你换域名的时候就不用担心评论找不到了
2. `url` 全链接URL路径的方式。
3. `title` 按页面title标题的方式。

其他还有几个不常用，这里就不再赘述了。

#### 不蒜子页面计数器支持

该主题支持不蒜子这个极简的页面计数器支持，如果要启用不蒜子，可以在`config.toml`里添加如下配置即可.

```toml
[params]
  busuanzi = true
```

#### 禁止分类的名称转为小写

我们在写文章的时候，会给文章进行分类，比如Golang，但是默认情况下，Hugo会把这个Golang转为小写，
这就我们一直用原始字符的造成困扰，为了解决这个问题，Hugo提供了`preserveTaxonomyNames`配置，把它设置为`true`就可以了保持原来分类的名字了。

```toml
## 保持分类的原始名字（false会做转小写处理）
preserveTaxonomyNames = true
```

#### 禁止URL路径小写

默认情况下，URL字符串里的字母都是小写的，这对于分类名、标签名是大写的来说，博客迁移后（比如从Hexo到Hugo），原来的链接就失效了，
为了解决这个问题，Hugo提供了`disablePathToLower`配置。

```toml
## 是否禁止URL Path转小写
disablePathToLower = true
```

#### 自定义CSS&JS

```
[params]
  # 这里我存放在了主题的static文件夹里，根目录的似乎也可以
  customCSS = ['douban.css', 'other.css']
  # if ['custom.css'], load '/static/css/custom.css' file
  customJS = ['douban.js']
  # if ['custom.js'], load '/static/js/custom.js' file
```

#### 添加了部分自定义的shortcode

* Octopress blockquote (blockquote.html)
* Wikipedia Link Generator (wp.html)

```
{{< youku id="_XMzcxODQ2NjM2NA==" autoplay="true" >}}
```

* youku（youku.html）

## 贡献

欢迎大家贡献，不限于代码、Issue，功能特性，想法等等，期待看到你的PR或者ISSUE。

## 其他平台上的 Maupassant 主题

+ Typecho：https://github.com/pagecho/maupassant/
+ Octopress：https://github.com/pagecho/mewpassant/
+ Farbox：https://github.com/pagecho/Maupassant-farbox/
+ Wordpress：https://github.com/iMuFeng/maupassant/
+ Ghost: https://github.com/LjxPrime/maupassant/
+ Hexo: https://github.com/tufu9441/maupassant-hexo
+ Hugo: https://github.com/Y4er/maupassant-hugo
