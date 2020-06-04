# maupassant-hugo
Maupassant theme, ported to Hugo.

[中文文档](README_zh.md)

# Installation

Clone this repository inside `themes` directory of your Hugo site:

```shell
git clone https://github.com/JokerQyou/maupassant-hugo.git
```

Then add `theme = "maupassant-hugo"` to your site config (`config.toml`). Read ahead for a complete sample config file.

# Configuration

A simple sample:

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

The above configuration was excerpted from my blog.

## Basics

- `baseURL` sets the base URL for your whole block, every permanent link is based on it.
- `theme = "maupassant-hugo"` is required to enable this theme.
- `title` sets the title of your blog.
- `subtitle` in `[params]` block specifies a short message to be displayed under
  your blog name.
- `description` in `[params]` block is used purely for SEO purpose.
- `keywords` in `[params]`: this is where you could set SEO keywords for your
  website. Separate them with a comma.
- `customCSS` and `customJS` in `[params]` are used to load custom CSS and JS
  file. Please use bare filenames. Files will be loaded respectively from `static/js` and `static/css`.
- `[[menu.main]]` blocks are used to add tab entries to blog navigation area. See detailed usage below.
- `[markup]` related configuration is required for Hugo v0.60.0 and above.
  - `codeFences = true` / `noClasses = false` are required for syntax highlighting
  - `startLevel = 1` is required for table of contents if your section heading uses `h1`

## Post summary

This theme uses [Hugo's built-in `.Summary` mechanism][hugo-content-summary] when rendering index and taxonomy page. By default the first 70 words of a post are taken as summary.
You can change this number by using `summaryLength` in your site config.

You can also override the summary content of a specific post by providing `summary` or `description` value in its front matter.
Please be caution, however, to properly encode your `summary` or `description` value if there's multiple line. Take a look.

If you use YAML front matter (in which case it's surrounded by `---`):

```yaml
description: |
    This is a description.
    But there is multiline of texts.
    So there is a `|` at the first line, and all other lines are indented.
author: "My Name"
```

If you use TOML front matter (surrounded by `+++`):

```toml
description = '''
This is a description.
There are multiple lines.
But the front matter is in TOML format, so a triple quote would do the trick.
And no need to indent the lines.
'''
author = "My Name"
```

## Syntax highlighting

This theme uses built-in Chroma code highlighter, and defaults to [dracula style][chroma_dracula_preview]. You can provide your own `static/css/syntax.css` file to override with your preferred color theme. For example, to change to `monokai` colors:

```bash
# Make sure you are in the root path of your blog
# Make sure static assets directory exists
mkdir -p static/css
# Generate styles
hugo gen chromastyles --style=monokai > static/css/syntax.css
# Notice: if your blog is managed by git, please add and commit static directory
```

You can view all styles supported by Hugo [here][chroma_all_styles_preview], and change to the one you like using the above steps.

## Links

You can add as many links as you like by adding `[[params.links]]` blocks. In which:

- `name` is displayed as link text;
- `url` sets the link URL;
- `title` is used for, well, link title: short text that shows upon mouse hover;

## Author

The `[author]` block is for fallback use only. If a post has `author: "My Name"` in its front matter, the value `My Name` will be used as author name. Otherwise the `[author]` block in site config will be used.

## Menus

The navigation tabs is on the top right area of the screen. The only default tab is "Home". To add more tabs, just add corresponding `[[menu.main]]` blocks in your site config. You can add any page as a menu entry, even if it points to an external URL.

The sample config contains three additional tabs: one points to `/gpg-public-key/` and the other `/about/`, the last points to `/archives/` which is an archive list page.

- The only constraint is that each menu's `identifier` field must be unique.
- `weight` field is used to sort menu entries, it must be an integer. Menu entries are sorted in ascending order.

There are two internal taxonomy page you can use: `/tags/` and `/categories/`, each will list all terms and all posts containing each term.

## Archive list

To enable the archive list page (located at `/archives/`), you need to create `archives.md` file inside your site's `content` folder. Fill this file with following content:

```markdown
---
title: "Archives"
type: "archives"
---
```

Either `content/archives.md` or `content/archives/index.md` will do.
However, do notice that `type: "archives"` is mandatory, the `type` must be `archives`.

You can also customize URL of your archive list page via `slug`:

```markdown
---
title: "Archives"
type: "archives"
slug: "test"
```

And your archive list page will be available at `/test/`. Don't forget to edit URL of corresponding menu item.

## Comments

[utteranc.es][utteranc.es] comment service is supported, configure it via `[params.utteranc]` block.

- `repo` the **public** GitHub repository to use, in the format of `username/repo_name`
- `issueTerm` in which way the blog posts and GitHub issues are associated.
  Possible values are:
  - `url` the title of GitHub issue would contain the full URL of corresponding
    blog post
  - `pathname` the title of GitHub issue would contain the pathname of
    corresponding blog post
  - `title` and `og:title` use the title or `og:title` meta value of the blog post as title of corresponding issue
  - Notice: utteranc.es support custom issue term and user-specified issue
    number, but these are not supported by this theme
- `theme` name of the theme to be used by utteranc.es. Currently there are
  `github-light` and `github-dark`

If `[parmas.utteranc]` is not defined in `config.toml`, comments will be disabled.
You can also disable comment specific post or page, by setting `commentDisabled` to `true` in the front matter.

## Site search

By default DuckDuckGo is used when searching from sidebar. You can switch to Google by setting `search_provider = "google"` in `[params]` in your site config.

## Content Security Policy

If strict content security policy was configured on your server, please mind that:

- This theme uses MathJax to render mathematical expressions. We’re currently using the official MathJax CDN provided by CLoudflare. You should add `cdnjs.cloudflare.com` to `script-src`. Also to allow MathJax to apply inline styles, `unsafe-inline` should be added to `style-src`.
- If you’ve enabled utteranc.es comment service, please add `utteranc.es` to `default-src`.
- The code block copying feature might load a clipboard API polyfill from `cdnjs.cloudflare.com` for old browsers, so be sure to add it to `script-src`.

If you don't know what CSP is, or have never configured one, it's most likely these extra configurations are unnecessary.

# Analytics

As a reader / user of the Internet I hate tracking, because we deserve privacy. But as a blogger I was always trying out for new and more accurate tracking / analytics product.

At last I decided to let go. I want my readers to have privacy. Other Hugo themes (or Hugo itself) might have Google Analytics or other analytics product integrated. But I decided not to use them by default. That's why this theme **by default** does not track you.

# Credits

- Special thanks to [飞雪无情][rujews_github] for the following features:
  - Post count in category list;
  - RSS alternate link in `<head>`;
  - Navigation with Hugo menu;
  - Archive list;
  - He also maintains a fork of this theme with some other features [here][flysnow_maupassant_hugo_github].
- Code block copying is based on [Danny Guo's blog post][code_copy_post]
- Icon font is based on [Entypo pictograms by Daniel Bruce][entypo_icons]

[hugo-content-summary]: https://gohugo.io/content-management/summaries/#automatic-summary-splitting
[utteranc.es]: https://utteranc.es
[rujews_github]: https://github.com/rujews
[flysnow_maupassant_hugo_github]: https://github.com/rujews/maupassant-hugo
[chroma_dracula_preview]: https://xyproto.github.io/splash/docs/dracula.html
[chroma_all_styles_preview]: https://xyproto.github.io/splash/docs/all.html
[code_copy_post]: https://www.dannyguo.com/blog/how-to-add-copy-to-clipboard-buttons-to-code-blocks-in-hugo/
[entypo_icons]: http://www.entypo.com/
