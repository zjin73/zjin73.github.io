# instruction — SIC Lab 网站维护说明

这份说明对应当前 SIC Lab 网站的实际结构，适合直接在 GitHub 网页上维护。更新日期：2026-11-11。

- 网站：https://zjin73.github.io/
- 仓库：https://github.com/zjin73/zjin73.github.io
- 当前发布分支：`master`
- 发布检查：[Actions](https://github.com/zjin73/zjin73.github.io/actions)
- 当前导航：Home → Research → Project → Service → Blog → Daily → News → CV。

**博客目录已创建：[直接打开 `_blogs/`](https://github.com/zjin73/zjin73.github.io/tree/master/_blogs)**。目录中有 [使用说明](_blogs/README.md) 和 [文章模板](_blogs/template.md)。名称前面的下划线不能省略。

日常修改的流程是：找到文件 → 编辑或上传 → 提交到 `master` → 等待 GitHub Pages 发布成功 → 检查网站。

## 1. 最常用的修改方法：直接在 GitHub 网页操作

### 修改已有文件

1. 登录 GitHub，打开本仓库，确认分支为 `master`。
2. 按下方文件表找到需要修改的文件。
3. 点击文件右上方的铅笔图标，进入编辑模式。
4. 修改文字，检查改动内容。
5. 点击 **Commit changes**，填写说明，例如 `Update internship role`。
6. 如果只是小幅文字调整，可以选择直接提交到 `master`。较大的布局调整建议提交到新分支，通过 Pull Request 检查后再合并到 `master`。
7. 打开仓库的 **Actions**，确认对应提交的 Pages 工作流完成且显示绿色成功状态，再查看网站。

`Commit` 是把这一次改动保存为版本记录。直接提交到发布分支后，网站会自动构建和发布，无需手动上传网页到服务器。

GitHub 的 Markdown Preview 可以检查文章格式，但不等于完整网站预览。布局、图片和交互仍要在网站中检查。

### 新建文件

在仓库中选择 **Add file → Create new file**，填写完整路径，例如 `_blogs/first-note.md`。文件名中的 `/` 会创建对应目录，不需要先单独建立空文件夹。写完内容后提交。

### 上传照片或 PDF

先进入目标文件夹，再选择 **Add file → Upload files**。选择文件，填写提交说明并提交。替换已有文件时，保持文件名和路径一致，并检查提交预览确实替换了原文件。

## 2. 想改什么，就找哪个文件

以下路径均相对于仓库根目录。

| 修改目标 | 文件或目录 | 使用方式 |
| --- | --- | --- |
| 首页介绍、研究兴趣、邮箱、社交链接、教育、实习 | [`_pages/about.md`](_pages/about.md) | 主要是 HTML，编辑对应文字 |
| 论文、专利、毕业论文 | [`_pages/research.html`](_pages/research.html) | 硕士阶段在前，本科阶段在后；有明确年份的条目按从新到旧排列 |
| 独立 Project 页面、Agent + Control 仓库链接 | [`_pages/projects.html`](_pages/projects.html) | 项目与 Research 同级，在这里维护项目链接和介绍 |
| 添加或修改 News 内容 | [`_data/news.yml`](_data/news.yml) | 修改数据，首页和 News 汇总页会自动读取 |
| News 汇总页的布局 | [`_pages/news.html`](_pages/news.html) | 添加消息时通常不需要修改这个文件 |
| 新增博客正文 | [`_blogs/`](https://github.com/zjin73/zjin73.github.io/tree/master/_blogs) 下的文章 `.md` 文件 | 每篇文章一个文件，可复制 `template.md` 后新建 |
| Blog 列表和分类按钮 | [`_pages/blogs.html`](_pages/blogs.html) | 日常发文章不用改这个文件 |
| 博客分类筛选逻辑 | [`assets/js/blog-filters.js`](assets/js/blog-filters.js) | 日常维护不用改 |
| 博客文章的通用排版 | [`_layouts/notebook.html`](_layouts/notebook.html) | 影响所有新博客文章 |
| Service 页面 | [`_pages/service.html`](_pages/service.html) | 编辑服务、教学等内容 |
| Daily 页面 | [`_pages/daily.html`](_pages/daily.html) | 编辑日常文字、图片及图片说明 |
| 首页照片 | [`assets/images/zhiheng-portrait.jpg`](assets/images/zhiheng-portrait.jpg) | 保持同名替换，或修改首页中的图片路径 |
| Daily 等页面图片 | [`assets/images/`](assets/images/) | 上传图片后，在对应页面引用 |
| CV PDF 本体 | [`files/CV_Zhiheng-JIN.pdf`](files/CV_Zhiheng-JIN.pdf) | 上传新的同名 PDF |
| CV 嵌入方式 | [`_pages/cv.md`](_pages/cv.md) | PDF 路径、缓存版本号和显示参数 |
| 字体、字号、颜色、网格、间距、手机布局 | [`assets/css/researcher.css`](assets/css/researcher.css) | 样式修改集中在这里 |
| 网站名称、页脚、通用页面框架 | [`_layouts/researcher.html`](_layouts/researcher.html) | 页面框架读取 `_data/navigation.yml` 生成导航 |
| 导航配置 | [`_data/navigation.yml`](_data/navigation.yml) | 导航名称、顺序、地址统一在这里修改 |
| Jekyll 全站配置 | [`_config.yml`](_config.yml) | 日常改文字、发 News 和博客时通常不用动 |

旧模板的示例论文、博客、演讲、教学、主题组件和未使用资源已从当前分支清理。当前 Research 直接维护 `_pages/research.html`，博客正文统一放在 `_blogs/`。不需要重新建立旧 `_publications/`、`_portfolio/` 或 `_posts/` 目录。

原 `/publications/` 地址跳转至 `/research/`；原 `/portfolio/` 和 `/project/` 地址跳转至 `/projects/`。分别由对应页面开头的 `redirect_from` 设置。

## 3. 添加一条 News

打开 [`_data/news.yml`](_data/news.yml)，为每条消息写一个条目。下面是填写模板，请把日期和文字换成真实内容：

```yaml
- date: "2026-11-11"
  text: "这里填写一条新的动态。"
  lang: zh
```

填写规则：

- 每条消息以 `- date:` 开始。
- `text` 和 `lang` 前面用两个空格缩进，不要使用 Tab。
- 日期采用 `YYYY-MM-DD`，并保留引号。
- 中文使用 `lang: zh`，英文使用 `lang: en`。
- 添加新消息时保留旧条目，除非确实要删除旧消息。
- 网站按日期从新到旧排列：**首页显示最新 3 条，News 页面显示全部**。
- `text` 是纯文字字段，目前不解析其中的 Markdown 或 HTML 链接。

完成后提交，例如填写 `Add a news update`。

## 4. 发布博客：个人随笔或科技文章

可以先打开 [博客目录](https://github.com/zjin73/zjin73.github.io/tree/master/_blogs) 和 [文章模板](_blogs/template.md)，复制模板内容新建文件。**在 `_blogs/` 目录里创建时只填文件名；在仓库根目录创建时才填 `_blogs/文件名.md`。**

在仓库根目录选择 **Add file → Create new file**，把文件名填成：

```text
_blogs/first-note.md
```

推荐使用简短、唯一的英文文件名，单词之间用短横线连接，例如 `system-identification-notes.md`。文章标题可以使用中文。

把以下模板粘贴进去，替换标题、日期、简介和正文后再提交：

```markdown
---
layout: notebook
title: "我的第一篇随笔"
date: 2026-11-11
category: personal
description: "这里写一句话，介绍这篇文章。"
published: true
---

这里开始写正文。

## 一个小标题

可以写普通段落，也可以使用 **加粗**、列表和链接。

- 第一点
- 第二点

[SIC Lab](https://zjin73.github.io/)
```

顶部两条 `---` 之间是文章信息，请保留它们。

仓库中的 `template.md` 默认 `published: false`。复制到新文件并写好内容后，改为 `published: true`。`README.md` 和 `template.md` 都已在 `_config.yml` 中排除，模板文件本身不会被发布。

| 文章类型 | 必须填写的分类值 | 网站显示标签 |
| --- | --- | --- |
| 个人随笔 | `category: personal` | Personal essays |
| 科技文章 | `category: technology` | Technology |

分类字段是单数 `category`。使用上面两个英文值，不要写成 `categories`、中文类别或任意新名称，否则不会正确匹配现有筛选按钮。

提交后，文章会自动进入 Blog 列表并按日期倒序排列，不需要另改 `_pages/blogs.html`。文章地址由文件名生成，所以文章发布后尽量保持文件名稳定。

现有 Talk Tech 链接是科技类的外部博客入口，并没有自动把 Blogspot 中的所有文章搬到本仓库。随笔分类没有文章时，会正常显示空状态。

## 5. 修改首页、Research、Project、Service 和 Daily

这些页面主要使用 HTML。文件名为 `.md` 的首页也包含 HTML。

例如首页中的：

```html
<h3>Jiangsu Industrial Technology Research Institute</h3>
<p>Control Engineer</p>
```

只更新身份时，修改 `Control Engineer` 这段文字即可，保留两侧标签。注意不要误删 `</p>`、`</article>`、`</section>` 等结束标签。

Research 中仍要区分论文状态：

- 先按阶段组织：**Master's stage → Undergraduate stage**，最新阶段在前。
- 阶段内有明确年份的条目从新到旧排列。同一年且没有更细日期时，保留现有顺序；不要猜测缺失日期。
- 每个阶段分别列出 **Publications**，每篇论文旁标明 **Under Review** 或 **Published**，不再设置总的 Under Review 栏目。
- 论文接收或正式发表后，按实际情况更新状态、日期和期刊信息。
- 研究与工程项目放在独立 **Project** 页面 `_pages/projects.html`，不要把项目经历写成论文发表记录。
- **Agent + Control** 链接为 https://github.com/zjin73/Agent-Control-and-Grid 。

新增同类条目时，可以复制该区域里一个完整的 `<article>...</article>`，再替换内容。复制时保留完整标签，不要给多个条目使用相同的 `id`。

Daily 新增图片可以参考现有 `<figure>` 写法，照片放入 `assets/images/`，图片路径和文件名的大小写必须一致。为图片保留准确的 `alt` 说明。

## 6. 更新 CV，并保留手机号遮黑

当前网站直接显示 `files/CV_Zhiheng-JIN.pdf`，它是实际 PDF，不是网页模拟的简历。

1. 在本地准备新 PDF，确认页面比例和文字排版。
2. 在上传之前处理需要隐藏的信息。使用 PDF 软件的真正“涂黑 / Redact”功能并应用处理；单纯画一个黑矩形可能仍保留下面的文字。
3. 保存并重新打开 PDF，确认手机号不可见，复制文字或搜索也读不到号码。
4. 把文件命名为 `CV_Zhiheng-JIN.pdf`，在仓库的 `files/` 文件夹中用 **Upload files** 替换原文件。
5. 修改 [`_pages/cv.md`](_pages/cv.md) 中两个 PDF 地址的 `?v=` 参数，使用同一个新的版本值，以减少旧文件缓存。例如将 `20261111-redacted` 改为本次实际日期加版本号。
6. 保留 PDF 地址后的 `#view=FitH&amp;navpanes=0`，它与当前显示方式有关。
7. 提交并等待发布，然后打开网站的 CV 页面检查。

只换简历内容时，不需要调整 CV 的容器宽度和高度。它们由 `assets/css/researcher.css` 中的 `.cv-frame`、`.cv-document` 等样式控制。

当前版本已把手机号涂黑并从 PDF 文本中移除。以后上传新 PDF 时，需要对新文件再次检查和处理。**替换当前文件不会自动清除 Git 历史中的旧 PDF**；如果要处理历史版本中的个人信息，需要单独处理仓库历史。

## 7. 修改导航和视觉样式

导航统一由 `_data/navigation.yml` 控制。修改名称、顺序或地址时，只编辑这个文件即可；`_layouts/researcher.html` 会自动读取它，当前页面的选中状态也会自动更新。

保留现有设计方向时，可以按以下规则维护：

- 正文主要使用 Arial / Helvetica，当前正文为 20px，辅助信息通常为 18px。
- 保持浅色背景、很淡的网格、方正边框和少量蓝色强调。
- 首页照片固定，News 在左侧，教育和实习在右侧。
- 首页实习只列单位、时间和身份；项目由独立 Project 页面维护。
- News 位于导航倒数第二，CV 保持最后。
- CV 页面保持单一 PDF 查看器，避免添加多余说明和按钮。

样式集中在 `assets/css/researcher.css`。同一选择器可能在后面的媒体查询或补充样式中再次出现，检查后面的规则，避免前面改了却被覆盖。

CSS 修改后，可以同步更新 `_layouts/researcher.html` 中样式表链接的 `?v=` 值，例如换成本次修改的日期加版本号。不要删掉这个链接或其中的 Liquid 表达式。

## 8. 改完怎样确认生效

1. 查看 [Actions](https://github.com/zjin73/zjin73.github.io/actions)，找到与你的提交对应的 Pages 工作流。
2. 等到构建和部署完成。绿色表示成功；如果失败，打开失败的步骤查看错误，不要只检查 Commit 是否已保存。
3. 打开实际网站检查文字、链接、图片和布局。博客还要切换分类检查。
4. 样式调整后，在电脑和手机宽度下各检查一次，注意导航换行、长标题和横向滚动。

如果提交成功但网站看起来没变：

- 确认改动已经进入 `master`，而不是仍在未合并的分支中。
- 确认 Pages 部署完成。
- 使用浏览器强制刷新，或者在地址后加一个新的查询参数，例如 `?v=check1`，检查是否是缓存问题。
- PDF 和 CSS 仍显示旧内容时，检查前文提到的文件版本参数。

如果 Blog 新文章没有出现，先检查它不是被排除的 `template.md`，并且 `published` 不是 `false`；然后依次检查：文件是否在 `_blogs/`、扩展名是否为 `.md`、开头是否有完整的两条 `---`、字段缩进和引号是否正确、分类值是否为 `personal` 或 `technology`。

## 9. 修改出错时怎样恢复

小范围文字改错，可以重新编辑文件，修正后再提交。

如果要恢复某个文件的旧内容：

1. 打开该文件的 **History**。
2. 查看修改之前的版本。
3. 复制确认正确的旧内容，返回 `master` 上的当前文件，重新编辑并提交。
4. 检查发布结果。

这样会新增一条恢复提交，同时保留历史记录。PDF 等二进制文件则可以取回正确的旧版本后重新上传；恢复旧 CV 前仍要检查是否含有未遮盖的手机号。

涉及多个文件的改版，可以先创建分支，通过 Pull Request 查看所有差异，再合并。日常恢复不需要删除仓库或强制覆盖分支历史。

## 10. 使用网页代码编辑器（可选）

如果一次要修改多个文件，可以在 GitHub 仓库页面按英文句号键 `.`，打开 github.dev 编辑器。它提供类似 VS Code 的文件树、搜索和编辑界面。

编辑完成后，在 Source Control 中暂存改动、填写提交说明，再使用 **Commit & Push** 保存到所选分支。github.dev 主要用于编辑，不提供完整的本地 Jekyll 运行环境；发布后仍按上文检查 Actions 和网站。

只改一处文字时，使用 GitHub 的铅笔编辑按钮就足够。

## 11. ChatGPT 为什么可以修改仓库，如何管理权限

这次网站修改通过已连接的 GitHub 集成完成：连接具有相应仓库的写入权限，你又在对话中明确要求修改，随后改动被提交到仓库。

能修改此仓库不代表能够控制整个 GitHub 账号。实际范围取决于 GitHub 端授予该应用的权限和仓库访问范围；连接权限与每次任务中的具体修改要求也应区分。无需把 GitHub 密码、验证码或访问令牌贴到聊天中。

以后可以直接提供仓库名、要改的内容和发布要求，例如：

> 请修改 zjin73/zjin73.github.io，把下面这条消息加入 News，日期为实际日期，保持当前布局，并提交发布。

或者：

> 请创建一篇科技博客，标题和正文如下。保留现有分类和字体，先创建 Pull Request，不要合并。

如果不希望直接上线，要明确说明“只建分支 / Pull Request，不合并”。

查看或收回 GitHub 侧权限的方法：

1. 点击 GitHub 头像 → **Settings → Applications**。
2. 在 **Installed GitHub Apps** 中找到对应应用，点击 **Configure**。
3. 在 **Repository access** 中查看是否为全部仓库或指定仓库。需要限制范围时，选择 **Only select repositories** 并保存。
4. 可以使用 **Suspend** 暂停安装，或 **Uninstall** 卸载该安装。
5. 如果还要撤销该应用代表你操作的授权，检查 **Authorized GitHub Apps** 并撤销对应授权；若连接显示在 **Authorized OAuth Apps**，则在该标签管理对应授权。

收回连接权限不会自动删除已经提交的代码或发布的网站。

## 官方操作参考

- [编辑已有文件](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files)
- [创建新文件和子目录](https://docs.github.com/en/repositories/working-with-files/managing-files/creating-new-files)
- [上传文件](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
- [GitHub Pages 的发布来源](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [github.dev 网页编辑器](https://docs.github.com/en/codespaces/the-githubdev-web-based-editor)
- [查看和修改已安装 GitHub Apps](https://docs.github.com/en/apps/using-github-apps/reviewing-and-modifying-installed-github-apps)

后续如果调整网站结构，请同步更新这份说明中的文件路径和操作步骤。
