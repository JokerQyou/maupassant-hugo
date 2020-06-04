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

[author]
    name = "Joker Qyou"
    homepage = "https://mynook.info"

[params]
    subtitle = "What else did you expect me to say?"
    description = "A nook preserved in Cyberspace where I can be myself."
    keywords = "MyNook,博客,Web,软件,Python"

    customCSS = ["style.extra.css"]
    customJS = ["app.extra.js"]

[params.utteranc]
    repo = "JokerQyou/comments"
    issueTerm = "url"
    theme = "github-light"

[[params.links]]
    name = "比尔盖子 博客"
    url = "https://tomli.blog/"
    title = "代码如诗，人生无限。"

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

[markup]
    [markup.highlight]
        codeFences = true
        noClasses = false
        tabWidth = 4
        lineNos = true
    [markup.tableOfContents]
        ordered = false
        startLevel = 1
```

以上配置示例摘自我自己的博客配置文件。

## 基本配置

- `baseURL` 用于设置博客的基准地址，所有其他永久地址都基于这个设置进行计算。
- 使用 `theme = "maupassant-hugo"` 来启用这个主题。
- `title` 用于设置博客的标题。
- `[params]` 中的 `subtitle` 参数，用于设置显示在博客标题下方的一句描述语。
- `[params]` 中的 `description` 参数，仅用于设置 SEO 的描述语。
- `[params]` 中的 `keywords` 参数，用于设置 SEO 的关键词列表。关键词以英文逗号分隔。
- `[params]` 中的 `customCSS` 和 `customJS` 用于加载自定义的 CSS 和 JS
  文件。只需要指定文件名。CSS 从 `static/css` 目录加载，相应地，JS 从 `static/js` 目录加载。
- 设置中的 `[[menu.main]]` 区块用于设置顶部导航菜单。见下文中的详细说明。
- `[markup]` 相关配置在 Hugo v0.60.0 及以上版本中是必须的。
  - `codeFences = true` / `noClasses = false` 对于新的代码语法高亮是必须的
  - `startLevel = 1` 如果你文章内的分段标题使用了 `h1`，那么这个配置是必须的，否则文章内的目录不能显示

## 文章概要

当在首页和各个列表页面中显示文章概要时，主题使用 [Hugo 内置的 `.Summary` 机制][hugo-content-summary]。默认情况下每篇文章的前 70 个词被摘录作为概要内容。可以在站点配置文件中使用 `summaryLength` 来修改这个长度。

也可以在文章的 front matter 中使用 `summary` 或 `description` 来手动指定需要显示的概要内容。
但在使用多行文本时请注意格式，以免造成 front matter 语法错误。参考以下例子。

如果使用 YAML 格式的 front matter（由 `---` 包围）：

```yaml
description: |
    这是手动指定的概要内容。
    这是个多行文本

    所以首先使用 `|` 开启了多行，并且所有行都向内缩进了一层。
author: "我的名字"
```

如果使用 TOML 格式的 front matter（由 `+++` 包围）：

```toml
description = '''
这也是手动指定的概要内容。
这也是个多行文本

但这个 front matter 是 TOML 格式，所以只需要使用三个引号包裹多行内容即可。
无需额外缩进。
'''
author = "我的名字"
```

## 代码高亮

本主题使用 Hugo 内置的代码高亮功能，默认使用 [dracula 样式][chroma_dracula_preview]。您可以在博客中提供 `static/css/syntax.css` 文件来覆盖主题自带的样式。例如，要替换为 `monokai` 风格的高亮：

```bash
# 首先确保您处于博客的根目录中
# 确保静态文件目录存在
mkdir -p static/css
# 生成样式文件
hugo gen chromastyles --style=monokai > static/css/syntax.css
# 注意：如果您使用 git 来管理博客，请将 static 目录一并提交
```

Hugo 内置的所有代码高风格可以[在此处预览][chroma_all_styles_preview]，按以上方法即可自由切换您喜欢的高亮着色风格。

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

主题有两个内置的页面可供在导航菜单上展示：`/tags/` 页面和 `/categories/` 页面。这两个页面展示所有的分类和标签，以及各个分类/标签包含的文章列表。

## 存档列表页面

在你博客的 `content` 目录下建立一个 `archives.md`，填充如下内容，即可激活存档列表页面（位于 `/archives/`）。

```markdown
---
title: "Archives"
type: "archives"
---
```

放在 `content/archives.md` 或 `content/archives/index.md` 都是有效的。
但是注意 `type: "archives"` 是必须的。这个页面的 `type` 必须是 `archives`。

当然，如果你想自定义存档页面的地址的话，也可以与普通文章一样，通过 `slug` 来指定：

```markdown
---
title: "Archives"
type: "archives"
slug: "test"
```

这样指定之后存档页面的访问地址就是 `/test/`。注意修改对应的顶部菜单 URL。

## 评论

主题支持 [utteranc.es][utteranc.es] 评论。使用 `[params.utteranc]` 块来配置。

- `repo` 评论数据存储在 GitHub issue 中，这里指定要使用的**公开** GitHub 仓库的简称，格式是 `用户名/仓库名`
- `issueTerm` 指定 GitHub issue 与文章的关联方式
  可用的值为：
  - `url` GitHub issue 的标题包含对应文章的完整 URL
  - `pathname` GitHub issue 标题包含对应文章完整 URL 的 pathname 部分
  - `title` 和 `og:title` GitHub issue 的标题包含文章的标题或文章元数据的 `og:title` 值
  - 注意：utteranc.es 还支持自定义的关联词，以及由用户手动指定文章对应的 issue
    编号。但本主题不支持这两种方式。
- `theme` 评论显示的主题风格。现在有 `github-light` 和 `github-dark` 两种。

如果在 `config.toml` 中不添加 `[params.utteranc]` 块，则全站评论都显示被禁用。
要在开启评论的情况下，单独禁用某篇文章或某个页面的评论，在其 front matter 中设置 `commentDisabled` 为 `true` 即可。

## 站内搜索

搜索框默认使用 DuckDuckGo。你可以切换为 Google 搜索，只需在配置文件的 `[params]` 块中，指定 `search_provider = "google"`。

## Content Security Policy

如果你为页面配置了较为严格的 CSP，请注意以下内容：

- 这个主题使用 MathJax 来渲染数学公式，当前使用的是由 Cloudflare 提供的官方 CDN 链接。您需要将 `cdnjs.cloudflare.com` 加入 `script-src`。此外，为了让 MathJax 可以正确地应用 CSS 样式，需要将 `unsafe-inline` 加入 `style-src`。
- 如果你开启了 utteranc.es 的评论服务，需要将 `utteranc.es` 加入 `default-src`。
- 在旧的浏览器上（例如QQ浏览器），代码块复制功能会从 `cdnjs.cloudflare.com` 引入一个剪贴板API的 polyfill，因此需要将这个域名加入 `script-src`。

如果你没有配置过 CSP，那么通常情况下无需进行任何操作。

# 统计分析

在移植这个主题之前，我一直是矛盾的。作为一个读者 / 普通的因特网用户，因为隐私的缘故痛恨访问追踪和统计分析脚本；但作为一个博客的作者，却总是在使用最新、最准确的统计分析和追踪产品。

最后我决定放弃一方。我放弃了统计和追踪，因为我认为读者的隐私值得被保护。其他主题（或者 Hugo 程序本身）可能提供了统计分析和访问追踪产品（例如 Google Analytics）的集成，我也欢迎你使用。但本主题默认不提供这些内容。本主题 **默认** 不包含访问追踪和统计分析功能。

# 致谢

- 以下功能来自 [飞雪无情][rujews_github]：
  - 分类列表中显示每个分类的文章数量；
  - RSS 自动发现；
  - 使用 Hugo 菜单实现的导航栏；
  - 存档列表；
  - 他维护了一个包含一些其他功能的 fork，[点此查看][flysnow_maupassant_hugo_github]。
- 代码块复制功能基于 [郭亚东的博文][code_copy_post]
- 字体图标基于 [Daniel Bruce 的 Entypo+ 图标作品][entypo_icons]

[hugo-content-summary]: https://gohugo.io/content-management/summaries/#automatic-summary-splitting
[utteranc.es]: https://utteranc.es
[rujews_github]: https://github.com/rujews
[flysnow_maupassant_hugo_github]: https://github.com/rujews/maupassant-hugo
[chroma_dracula_preview]: https://xyproto.github.io/splash/docs/dracula.html
[chroma_all_styles_preview]: https://xyproto.github.io/splash/docs/all.html
[code_copy_post]: https://www.dannyguo.com/blog/how-to-add-copy-to-clipboard-buttons-to-code-blocks-in-hugo/
[entypo_icons]: http://www.entypo.com/
