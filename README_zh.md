# maupassant-hugo
为 Hugo 移植的 Maupassant 主题。

[English Docs](README.md)

# 配置

简单的配置示例:

```toml
baseURL = "https://blog.mynook.info"
languageCode = "zh-CN"
title = "My Nook"
hasCJKLanguage = true
theme = "maupassant-hugo"
enableRobotsTXT = true
PaginatePath = "page"

[params]
    description = "What else did you expect me to say?"

[[params.links]]
    name = "比尔盖子 博客"
    url = "https://tomli.blog/"
    title = "代码如诗，人生无限。"

[author]
    name = "Joker Qyou"
    homepage = "https://mynook.info"
```

以上配置示例摘自我自己的博客配置文件。

## 基本配置

`baseURL` 用于设置博客的基准地址，所有其他永久地址都基于这个设置进行计算。
使用 `theme = "maupassant-hugo"` 来启用这个主题。
`title` 用于设置博客的标题。
`[params]` 中的 `description` 参数，用于设置显示在博客标题下方的一句描述语。在某些主题中，这个描述语被称为 `subtitle`。

## 友情链接

可以添加不限数量的友情链接，只需如示例一样格式，添加多个 `[[params.links]]` 设置块即可。其中每个块可以有这些设置：

- `name` 链接显示的文本；
- `url` 链接地址；
- `title` 设置链接的 title 属性，也就是鼠标停留在链接上时显示的文本；

## 作者信息

`[author]` 块用于设置文章作者的默认信息。如果文章的属性区块中有设置作者（一般是在 front matter 中书写：`author: "小明"`），则会使用文章中设置的值。如果文章没有作者信息，那么将会使用此处设置的作者信息。

# 统计分析

在移植这个主题之前，我一直是矛盾的。作为一个读者 / 普通的因特网用户，因为隐私的缘故痛恨访问追踪和统计分析脚本；但作为一个博客的作者，却总是在使用最新、最准确的统计分析和追踪产品。

最后我决定放弃一方。我放弃了统计和追踪，因为我认为读者的隐私值得被保护。其他主题（或者 Hugo 程序本身）可能提供了统计分析和访问追踪产品（例如 Google Analytics）的集成，我也欢迎你使用。但本主题默认不提供这些内容。本主题 **默认** 不包含访问追踪和统计分析功能。
