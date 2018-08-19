# maupassant-hugo
为 Hugo 移植的 Maupassant 主题。

[English Docs](README.md)

# 安装

在你的 Hugo 站点的 `themes` 目录中，clone 这个仓库：

```shell
git clone https://github.com/JokerQyou/maupassant-hugo.git
```

然后将 `theme = "maupassant-hugo"` 加入你的站点配置文件（`config.toml`）。下文中有一份完整的配置文件示例。

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

[[menu.main]]
    identifier = "gpg"
    name = "GPG"
    url = "/gpg-public-key/"
    weight = 1

[[menu.main]]
    identifier = "archives"
    name = "存档"
    url = "/archives/"
    weight = 3

[[menu.main]]
    identifier = "about"
    name = "关于"
    url = "/about/"
    weight = 4
```

以上配置示例摘自我自己的博客配置文件。

## 基本配置

- `baseURL` 用于设置博客的基准地址，所有其他永久地址都基于这个设置进行计算。
- 使用 `theme = "maupassant-hugo"` 来启用这个主题。
- `title` 用于设置博客的标题。
- `[params]` 中的 `description` 参数，用于设置显示在博客标题下方的一句描述语。在某些主题中，这个描述语被称为 `subtitle`。
- 设置中的 `[[menu.main]]` 区块用于设置顶部导航菜单。见下文中的详细说明。

## 友情链接

可以添加不限数量的友情链接，只需如示例一样格式，添加多个 `[[params.links]]` 设置块即可。其中每个块可以有这些设置：

- `name` 链接显示的文本；
- `url` 链接地址；
- `title` 设置链接的 title 属性，也就是鼠标停留在链接上时显示的文本；

## 作者信息

`[author]` 块用于设置文章作者的默认信息。如果文章的属性区块中有设置作者（一般是在 front matter 中书写：`author: "小明"`），则会使用文章中设置的值。如果文章没有作者信息，那么将会使用此处设置的作者信息。

## 导航菜单

导航菜单使用 Hugo 的菜单功能实现。导航区域位于页面右上方。默认有一个导航 tab 叫「首页」。只需如示例一样格式，添加更多的 `[[menu.main]]` 设置块，即可添加更多的导航 tab。你可以添加任意多的导航 tab，链接地址也不限于站内。

上文的配置示例中就添加了三个导航 tab。其中一个指向博客的 `/gpg-public-key/`，另一个指向 `/about/`，还有一个是存档列表页面，指向 `/archives/`。

- 唯一的限制是，不同导航菜单的 `identifier` 值必须不同。
- `weight` 字段用于菜单的排序，值必须是数字。`weight` 较小的菜单排在前面。

## 存档列表页面

在你博客的 `content/archives` 目录下建立一个 `index.md`，填充如下内容，即可激活存档列表页面（位于 `/archives/`）。

```markdown
---
title: "Archives"
type: "archives"
---
```

注意 `type: "archives"` 是必须的。这个页面的 `type` 必须是 `archives`。

# 统计分析

在移植这个主题之前，我一直是矛盾的。作为一个读者 / 普通的因特网用户，因为隐私的缘故痛恨访问追踪和统计分析脚本；但作为一个博客的作者，却总是在使用最新、最准确的统计分析和追踪产品。

最后我决定放弃一方。我放弃了统计和追踪，因为我认为读者的隐私值得被保护。其他主题（或者 Hugo 程序本身）可能提供了统计分析和访问追踪产品（例如 Google Analytics）的集成，我也欢迎你使用。但本主题默认不提供这些内容。本主题 **默认** 不包含访问追踪和统计分析功能。

# 致谢

以下功能来自 [飞雪无情][rujews_github]：

- 分类列表中显示每个分类的文章数量；
- RSS 自动发现；
- 使用 Hugo 菜单实现的导航栏；
- 存档列表；

他维护了一个包含一些其他功能的 fork，[点此查看][flysnow_maupassant_hugo_github]。

[rujews_github]: https://github.com/rujews
[flysnow_maupassant_hugo_github]: https://github.com/rujews/maupassant-hugo
