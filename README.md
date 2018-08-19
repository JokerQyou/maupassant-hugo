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

The above configuration was excerpted from my blog.

## Basics

- `baseURL` sets the base URL for your whole block, every permanent link is based on it.
- `theme = "maupassant-hugo"` is required to enable this theme.
- `title` sets the title of your blog.
- The `description` parameter in `[params]` block specifies a short message to be displayed under your blog name. In some other themes it is referenced as `subtitle`.
- `[[menu.main]]` blocks are used to add tab entries to blog navigation area. See detailed usage below.

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

## Archive list

To enable the archive list page (located at `/archives/`), you need to create `index.md` file inside your site's `content/archives` folder. Fill this file with following content:

```markdown
---
title: "Archives"
type: "archives"
---
```

Please note that `type: "archives"` is mandatory, the `type` must be `archives`.

# Analytics

As a reader / user of the Internet I hate tracking, because we deserve privacy. But as a blogger I was always trying out for new and more accurate tracking / analytics product.

At last I decided to let go. I want my readers to have privacy. Other Hugo themes (or Hugo itself) might have Google Analytics or other analytics product integrated. But I decided not to use them by default. That's why this theme **by default** does not track you.

# Credits

Special thanks to [飞雪无情][rujews_github] for the following features:

- Post count in category list;
- RSS alternate link in `<head>`;
- Navigation with Hugo menu;
- Archive list;

He also maintains a fork of this theme with some other features [here][flysnow_maupassant_hugo_github].

[rujews_github]: https://github.com/rujews
[flysnow_maupassant_hugo_github]: https://github.com/rujews/maupassant-hugo
