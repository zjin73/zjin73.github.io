# instruction — 个人网站维护说明

本说明对应 **zjin73/zjin73.github.io** 当前实际代码与线上页面，核对日期：2026-11-14（北京时间）。唯一完整维护手册保留原文件名 `instruction.md`，位于仓库根目录。

- 网站：[zjin73.github.io](https://zjin73.github.io/)
- 仓库：[zjin73/zjin73.github.io](https://github.com/zjin73/zjin73.github.io)
- 维护分支：**master**。
- 技术：Jekyll + GitHub Pages；没有网站后台编辑器，内容由仓库文件生成。
- 当前是 Zhiheng Jin 的个人网站。顶部只有居中的导航，没有 SIC Lab 标题或副标题。
- 本手册只对应这个仓库；另一个账号的 JCL 网站不使用这里的配置。

## 1. 最常用的三个入口

| 我要做什么 | 打开哪里 | 具体操作 |
| --- | --- | --- |
| 发布新博客 | [`_blogs/`](https://github.com/zjin73/zjin73.github.io/tree/master/_blogs) | 本地写一个有新文件名的 `.md`，上传到这个文件夹，设置 `published: true` |
| Gallery 加照片 | [`assets/images/`](https://github.com/zjin73/zjin73.github.io/tree/master/assets/images) 和 [`_pages/gallery.html`](https://github.com/zjin73/zjin73.github.io/blob/master/_pages/gallery.html) | 先上传照片，再在 Gallery 源码里添加对应的 `<figure>` 展示条目 |
| 发 News | [`_data/news.yml`](https://github.com/zjin73/zjin73.github.io/blob/master/_data/news.yml) | 保留原内容，增加一条日期和正文；首页与 News 页面自动读取 |

**注意：博客目录是 `_blogs`，有下划线。网站地址 `/blogs/` 与仓库文件夹名称不是一回事。照片上传后不会自动进入 Gallery，博客和照片更新也不会自动生成 News。**

## 2. 各个导航对应什么内容、文件和样貌

顺序以 [`_data/navigation.yml`](_data/navigation.yml) 为准，当前为：Home、Research、Project、Service、Blog、Gallery、News、CV。

| 导航与网址 | 内容文件 | 当前内容与布局 |
| --- | --- | --- |
| [Home](https://zjin73.github.io/) | [`_pages/about.md`](_pages/about.md) | 上方左侧姓名、介绍、邮箱、社交链接，右侧固定个人照片；下一行研究兴趣；下方左侧最新 News，右侧 Education 和 Internships；底部 CV 链接。没有首页论文或项目摘要。 |
| [Research](https://zjin73.github.io/research/) | [`_pages/research.html`](_pages/research.html) | 硕士阶段在前，本科在后；每个阶段放论文、专利等。硕士研究介绍为多机器人运动规划、生成式控制和 MPC。记录左侧状态/时间，右侧标题和作者；论文逐条标注 Under Review / Published，没有整体 Under Review 方框。 |
| [Project](https://zjin73.github.io/projects/) | [`_pages/projects.html`](_pages/projects.html) | 两个简洁的纵向项目区块：先 Agent + Control，再 Control Theory Slides；标题直接链接对应 GitHub 仓库。 |
| [Service](https://zjin73.github.io/service/) | [`_pages/service.html`](_pages/service.html) | Teaching（自动控制原理助教）和 Peer learning（线性代数、理论力学辅导）。已无 Community & extracurricular activities。 |
| [Blog](https://zjin73.github.io/blogs/) | [`_pages/blogs.html`](_pages/blogs.html) + [`_blogs/`](_blogs/) | 顶部分类与语言两行筛选，可组合选择；文章按日期从新到旧，标明语言并提供译文链接；文章页顶部和底部均可切换中英文。只显示自己上传到 `_blogs/` 的文章。 |
| [Gallery](https://zjin73.github.io/gallery/) | [`_pages/gallery.html`](_pages/gallery.html) + [`assets/images/`](assets/images/) | Cooking 两张、Theatre 两张、Discussions & presentations 一张；照片下方配文字。没有活动履历列表，也不是轮播图。 |
| [News](https://zjin73.github.io/news/) | [`_pages/news.html`](_pages/news.html) + [`_data/news.yml`](_data/news.yml) | 日期左、正文右的时间线，最新在前；目前只有“个人网站搭建成功啦！”。导航倒数第二。 |
| [CV](https://zjin73.github.io/cv/) | [`_pages/cv.md`](_pages/cv.md) + [`files/CV_Zhiheng-JIN.pdf`](files/CV_Zhiheng-JIN.pdf) | 居中、有最大宽度限制的真实 PDF 阅读区域，当前 3 页，手机号已涂黑；页面没有额外引导区块。导航最后一个。 |

### 当前视觉风格

浅灰背景、很淡的网格、黑色文字、蓝色链接与选中导航、直线边框。英文字体为 Arial / Helvetica，中文由系统字体补足。正文主要为 20px，说明文字主要为 18px。桌面内容最大宽度为 1240px，导航居中；窄屏导航自动换行，主页内容和相册改为单列。CV 使用独立的浅灰背景和约 860px 最大阅读宽度，PDF 工具栏由浏览器提供。

[查看八个导航页面的实际截图](docs/appearance.md)。这些是核对时的截图，不是运行网站所依赖的照片；之后改网站不会自动更新截图。

## 3. 文件和文件夹的职责

| 路径 | 用途 | 日常是否需要修改 |
| --- | --- | --- |
| [`_pages/`](_pages/) | 八个主页面和 `404.md`；文件顶部 `permalink` 决定访问地址 | 修改页面文字时需要 |
| [`_blogs/`](_blogs/) | 每种语言一个 Markdown 文件；另有说明和中英文模板 | 发博客需要 |
| [`_data/navigation.yml`](_data/navigation.yml) | 全站导航名称、顺序和链接 | 调整导航时需要 |
| [`_data/news.yml`](_data/news.yml) | 全部新闻的唯一数据源 | 发 News 需要 |
| [`assets/images/`](assets/images/) | 首页头像、Gallery 照片；新博客配图也可放这里 | 上传照片时需要 |
| [`files/`](files/) | 当前真实 CV PDF；今后公开附件可放这里并加链接 | 换 CV/附件时需要 |
| [`_layouts/researcher.html`](_layouts/researcher.html) | 通用 HTML 外壳、导航、页脚、CSS 和脚本引用 | 全站结构调整时才需要 |
| [`_layouts/notebook.html`](_layouts/notebook.html) | 单篇博客的标题、日期、分类、顶部与底部语言切换、摘要、正文与返回链接 | 博客版式调整时才需要 |
| [`assets/css/researcher.css`](assets/css/researcher.css) | 字体、颜色、间距、相册比例、手机适配等样式 | 修改视觉风格时需要 |
| [`assets/js/blog-filters.js`](assets/js/blog-filters.js) | 博客分类与语言组合筛选、网址状态 | 修改筛选逻辑时才需要 |
| [`_includes/blog-language.html`](_includes/blog-language.html)、[`_includes/blog-translations.html`](_includes/blog-translations.html) | 识别语言代码、关联中英文译文 | 修改双语功能时才需要 |
| [`_config.yml`](_config.yml) | Jekyll 配置、博客集合、默认布局、排除项和插件 | 一般不用改 |
| [`Gemfile`](Gemfile) | GitHub Pages/Jekyll 本地构建依赖 | 本地运行环境调整时使用 |
| [`.gitignore`](.gitignore) | 防止生成文件与本地缓存进入版本管理 | 一般不用改 |
| [`README.md`](README.md) | 打开仓库时看到的简介与维护入口 | 入口变动时更新 |
| [`instruction.md`](instruction.md) | 本维护手册 | 网站结构改变时同步更新 |
| [`docs/appearance.md`](docs/appearance.md)、`docs/screenshots/` | 当前样貌说明及截图，已排除出网站构建 | 需要更新样貌档案时修改 |
| [`LICENSE`](LICENSE) | 仓库许可文件 | 不作为网页内容维护 |

`_pages/*.md` 有些文件正文使用 HTML，这是当前实现方式。不要把所有 `.md` 都当成纯 Markdown 文章。只有 `_blogs/` 下的文章按博客模板自动生成列表。

现有旧链接保留跳转：`/publications/` → `/research/`，`/portfolio/` 与 `/project/` → `/projects/`，`/daily/` → `/gallery/`，`/resume` → `/cv/`，`/about/` 与 `/about.html` → 首页。无需重新建立旧页面或旧文件夹。Gallery 代码中的 `daily-*` 是仍在使用的样式类名，不代表还存在 Daily 页面。

## 4. 已放好的照片和 PDF

以下六张图片与一个 PDF 都已经实际保存在本仓库中，不依赖 Google Sites 热链。

| 文件 | 实际尺寸 | 用途 |
| --- | --- | --- |
| [`assets/images/zhiheng-portrait.jpg`](assets/images/zhiheng-portrait.jpg) | 1080 × 891 | 首页右上角固定照片 |
| [`assets/images/cooking-table.jpg`](assets/images/cooking-table.jpg) | 1280 × 1755 | Gallery / Cooking：餐桌 |
| [`assets/images/cooking.jpg`](assets/images/cooking.jpg) | 1280 × 1755 | Gallery / Cooking：做饭 |
| [`assets/images/theatre-scene.jpg`](assets/images/theatre-scene.jpg) | 1280 × 994 | Gallery / Theatre：舞台场景 |
| [`assets/images/theatre-stage.jpg`](assets/images/theatre-stage.jpg) | 1280 × 1920 | Gallery / Theatre：舞台人物 |
| [`assets/images/discussion.jpg`](assets/images/discussion.jpg) | 1280 × 833 | Gallery / Discussions & presentations |
| [`files/CV_Zhiheng-JIN.pdf`](files/CV_Zhiheng-JIN.pdf) | 3 页 PDF | CV 页面嵌入的已遮盖手机号版本 |

新增图片建议用小写英文、数字与短横线命名，例如 `2026-11-12-campus-01.jpg`，避免空格和同名覆盖。JPEG、PNG、WebP 均可；手机 HEIC 应先导出为这些格式之一。按实际用途适度压缩，通常长边 1600–2400px 已足够，不必上传几十 MB 的原图。不要只改扩展名假装转换格式。

## 5. 通用操作：本地修改，再手动上传

无需先学 Git 命令或安装 Jekyll。

1. 打开上面的仓库，确认账号为 `zjin73`、分支为 `master`。
2. 对已有文本文件，先打开其最新版本，再点 **Raw** 保存内容或复制到 VS Code。保留正确的文件名和后缀。
3. 使用 VS Code、纯文本编辑器或 Markdown 编辑器修改，编码选 UTF-8；不要保存成 Word、富文本或 `.md.txt`。
4. 打开目标文件夹，点 **Add file → Upload files**，上传文件。只传这个文件夹应该包含的文件。例如进入 `_blogs/` 后只上传文章文件，不要再套一层 `_blogs` 文件夹。
5. 在提交界面检查路径、变更内容和提交说明，例如 `Add blog about MPC`；选择直接提交到 `master`，再点 **Commit changes**。如果选择新分支，则还需要合并 PR，线上才会更新。
6. 查看仓库 [Actions](https://github.com/zjin73/zjin73.github.io/actions) 中对应提交的 **pages build and deployment**。等待成功，再打开网站检查。构建和缓存更新需要一点时间。

只改几行也可以直接打开 GitHub 文件，点铅笔图标 **Edit this file**，改完提交。

### 同名文件会发生什么

- **同一个文件夹 + 同一个文件名**：替换这个文件的内容，不会覆盖整个代码库。
- **新的文件名**：新增文件；新文章、新照片通常采用这个方式。
- **不同文件夹里同名**：是不同文件。上传到错误目录不会自动替换正确的目标。
- GitHub 路径区分大小写：`Photo.jpg` 和 `photo.jpg` 不能混用。
- 修改旧文章请保留文件名，避免旧链接失效；发新文章一定用新文件名。
- 上传旧的本地副本前先比较远端最新内容，避免把最近的修改覆盖回去。上传页面先检查差异。

## 6. Gallery：如何添加照片

### 在现有分组内加一张

1. 把新照片命名为例如 `2026-11-12-cooking-01.jpg`。
2. 上传到 [`assets/images/`](https://github.com/zjin73/zjin73.github.io/tree/master/assets/images)。
3. 编辑 [`_pages/gallery.html`](_pages/gallery.html)。源码已按分组、照片分行排列。找到对应的 `<div class="daily-gallery cooking-gallery">`。
4. 在这个容器的结束 `</div>` **之前**加入下面这段。替换文件名、描述、真实像素宽高与图注；不要覆盖原有 `<figure>`。

```html
<figure>
  <img src="{{ '/assets/images/2026-11-12-cooking-01.jpg' | relative_url }}"
       alt="与朋友一起准备晚餐"
       width="1600" height="1200" loading="lazy">
  <figcaption>2026.11.12 · 一起做饭的一天。</figcaption>
</figure>
```

`src` 必须与已经上传的文件路径完全一致。`alt` 是图片的文字描述；`figcaption` 会显示在图片下面。示例的 1600 × 1200 只是示例尺寸，应改为照片真实尺寸，CSS 会按比例缩放。不要设置随意的固定显示高度，也不要把本地 `C:\...` 路径写进网页。

当前 Cooking 为等宽两列，Theatre 为适应横竖照片的两列；窄屏都变成一列。新照片在 HTML 中的位置就是显示位置；没有自动按拍摄时间排序。`Discussions & presentations` 当前是单张大图，如需继续单张排列，可复制其完整 `<figure class="discussion-photo">`。

### 新建一个分组

例如新增 Travel，在 `gallery.html` 最后一个 `</section>` 后追加：

```html
<section class="content-section daily-section">
  <div class="daily-heading">
    <div>
      <h2>Travel</h2>
      <p>Some moments from recent trips.</p>
    </div>
  </div>
  <div class="daily-gallery cooking-gallery">
    <figure>
      <img src="{{ '/assets/images/2026-11-12-travel-01.jpg' | relative_url }}"
           alt="这里写照片的具体内容"
           width="1600" height="1200" loading="lazy">
      <figcaption>2026.11.12 · 地点与简短说明。</figcaption>
    </figure>
  </div>
</section>
```

先上传例子所引用的真实图片，再加入展示代码。`cooking-gallery` 在此只是复用现有 760px 等宽相册样式，分组名称由 `<h2>` 决定。不要把示例路径直接提交而不上传对应照片。

### 替换或移除照片

替换旧照片可以上传同路径同名文件；若长宽比变化，同时更新 HTML 的 `width` / `height`。若只想从 Gallery 隐藏，删掉对应的整个 `<figure>…</figure>` 即可。删除图片文件前先搜索仓库中是否还有首页或博客引用它。首页照片单独由 `about.md` 引用，不会随 Gallery 自动变化。

## 7. Blog：本地写 Markdown 并发布

### 一篇可以照着写的示例

1. 复制中文模板 [`_blogs/template.md`](_blogs/template.md)；写英文时复制 [`_blogs/template-en.md`](_blogs/template-en.md)。另存为本地新文件。
2. 文件名例如 **`2026-11-12-my-first-note.md`**；日期加英文短标题方便分享。
3. 修改文件顶部两行 `---` 之间的字段，然后写正文。下面这份可以直接作为个人随笔的起点：

````markdown
---
layout: notebook
title: "一次学习记录"
date: 2026-11-12
category: personal
lang: zh-CN
translation_key: my-first-note
description: "记录今天的想法，以及下一步准备做什么。"
published: true
---

今天我想记录一个学习过程中遇到的问题。

## 发生了什么

这里写背景、过程和感受。

## 我学到了什么

- 第一个收获。
- 第二个收获。

## 接下来

写下下一步准备做的事情。

[返回主页](https://zjin73.github.io/)
````

4. 上传这个新的 `.md` 到 [`_blogs/`](https://github.com/zjin73/zjin73.github.io/tree/master/_blogs)，提交到 `master`。
5. 部署成功后，打开 [Blog](https://zjin73.github.io/blogs/)，在 All 和 Personal essays 中找到它。**不需要手动编辑博客列表页或导航。**

`template.md`、`template-en.md` 和本目录的 `README.md` 都已在配置中排除，不会成为文章；必须另存新文件名。例子只是教程，不会自动发布到网站。

### 字段如何填写

| 字段 | 填法与作用 |
| --- | --- |
| `layout` | 保持 `notebook` |
| `title` | 网页文章标题，用引号包住；文件名可以与标题不同 |
| `date` | `YYYY-MM-DD`；列表按此字段从新到旧，而不是按上传时间或文件名排序 |
| `category` | 只用 `personal`（个人随笔）或 `technology`（科技、控制、科研） |
| `lang` | 中文用 `zh-CN`，英文用 `en`；决定语言筛选、页面语言和译文切换 |
| `translation_key` | 同一篇文章的中英文用相同编号，不同文章用不同编号；单语文章可留空 |
| `description` | 一两句话摘要；显示在列表和文章页，不会自动从正文截取 |
| `published` | `true` 发表；`false` 不生成网站文章，但公开仓库中仍能看到源文件 |

修改技术文章时把 `category` 改为 `technology`。现有筛选是两个固定分类，并不是自由标签系统；新增 `tags` 不会自动生成按钮。当前配置 `future: true`，**未来日期不是定时发布功能**，不要靠填未来日期隐藏稿件。未公开草稿建议留在本地。

标题由布局自动显示，正文直接写引言或从 `##` 小标题开始，不必再写一次 `# 文章标题`。

### 文章配图和代码

先把图片上传到 `assets/images/`，正文这样写：

```markdown
![这张图说明什么](/assets/images/2026-11-12-experiment-01.jpg)
```

也可以按文章建子文件夹，例如 `assets/images/blogs/mpc-note/figure-01.png`，但 Markdown 路径也必须同步。上传图片不会把它自动加进 Gallery。

代码使用三个反引号包围，并写语言名，例如：

````markdown
```python
print("Hello, control!")
```
````

当前支持 Markdown 标题、列表、引用、表格和代码块；没有配置 MathJax/KaTeX，不能假设 LaTeX 公式会自动排成数学公式。后续需要数学渲染时应单独增加支持。

### 分类和语言是两个独立筛选条件

Blog 顶部有两行按钮，可组合使用：

| 筛选项 | 页面选项 | Markdown 字段 |
| --- | --- | --- |
| Category / 分类 | All / 全部、Personal essays / 随笔、Technology / 科技 | `category: personal` 或 `category: technology` |
| Language / 语言 | All / 全部、中文、English | `lang: zh-CN` 或 `lang: en` |

例如先选 Technology，再选中文，只显示中文技术文章；切换到 English 时保留当前分类。没有匹配文章时会明确提示。选择 All / 全部会解除对应这一项筛选，另一项保持不变。

每种语言是一个独立 Markdown 文件，在 All / 全部中会分别显示。文章卡片上标明分类、语言和日期。筛选结果保存在网址的 `#category=technology&lang=zh-CN` 中，可复制链接；刷新和浏览器前进/后退可恢复相应选择。旧的 `#technology` / `#personal` 链接仍然有效。关闭 JavaScript 后仍能查看完整文章列表，文章内的译文链接也能使用。

### 中英两版：两个文件，共用一个配对编号

中文使用 [template.md](_blogs/template.md)，英文使用 [template-en.md](_blogs/template-en.md)。先另存为两个不同的新文件名，例如：

- `2026-11-13-mpc-note-zh.md`
- `2026-11-13-mpc-note-en.md`

中文文件顶部：

```yaml
---
layout: notebook
title: "MPC 学习记录"
date: 2026-11-13
category: technology
lang: zh-CN
translation_key: mpc-note
description: "关于模型预测控制的一些学习记录。"
published: true
---
```

英文文件顶部：

```yaml
---
layout: notebook
title: "Notes on Model Predictive Control"
date: 2026-11-13
category: technology
lang: en
translation_key: mpc-note
description: "Learning notes on model predictive control."
published: true
---
```

分别把中文正文和英文正文写在各自第二条 `---` 后面，然后把两个文件上传到同一个 `_blogs/` 文件夹、提交到 `master`。中英文标题和摘要可以不同，建议分类和日期保持一致。**不需要修改导航、博客列表或手写译文链接。**

`translation_key` 是配对编号，不是文件名。同一篇文章的两种语言必须完全一致；不同文章必须使用不同编号，例如 `mpc-note`、`payload-identification`。只用小写英文字母、数字、短横线最方便。同一个编号每种语言只能有一个已发表文件，不要把模板里的 `change-this-key` 原样用于多篇文章。

部署后，文章标题下和正文末尾都有语言切换入口：中文版显示 **当前：中文** 和蓝色按钮 **切换到英文 / Read in English**；英文版显示 **Current: English** 和蓝色按钮 **阅读中文版 / Read in Chinese**。博客列表中每篇已配对文章的摘要下也有对应译文链接，可以直接跳转。中文页面的日期分类和返回链接也采用中文。此功能负责筛选和切换已有译文，**不会自动翻译正文，也不会自动翻译全站导航或其他页面**。

### 只有中文版／英文版时怎么办

只上传一种语言也可以正常发布和筛选；填好 `lang` 即可，`translation_key` 可先留空，或提前填写以后准备共用的编号。

另一语言没有已发表的配对文章时，文章页显示不可点击的“暂无英文版”或“Not available”，列表中不生成对应译文链接，不会跳到错误页面。以后上传译文，用相同编号和另一 `lang`，并设置 `published: true`，切换链接就会自动出现。下架其中一版时，另一版的切换按钮会自动恢复为不可用。不要为了显示按钮上传空译文。

兼容旧写法：`chinese` / `zh` / `zh-Hans` 识别为中文，`english` / `en-US` / `en-GB` 识别为英文；新文章统一写 `zh-CN` 或 `en`。缺少语言或填了无法识别的值时，文章标为“未设置语言”，只会出现在语言 All / 全部中。语言字段只声明正文语言，不能把中文正文标成英文来代替翻译。

现有《AI冲击下的科研，我们应该关注什么？》及其英文版已通过 `translation_key: research-in-the-age-of-ai` 关联，原文件名、网址和正文保持不变。

### 如果要手动改这个功能本身

| 想改什么 | 修改文件 |
| --- | --- |
| 分类／语言按钮文字、文章列表标签 | `_pages/blogs.html` |
| 两个筛选条件如何组合、网址中的筛选状态 | `assets/js/blog-filters.js` |
| 语言代码兼容规则 | `_includes/blog-language.html` |
| 译文如何配对、列表译文链接与文章语言按钮 | `_includes/blog-translations.html` |
| 文章标题、摘要、语言按钮的位置和返回链接 | `_layouts/notebook.html` |
| 页面 `<html lang>`、脚本和样式的版本号 | `_layouts/researcher.html` |
| 筛选按钮／切换按钮的样式、手机布局 | `assets/css/researcher.css` |
| 模板排除规则 | `_config.yml` 的 `exclude` |

日常发文只改文章 Markdown。只有新增第三个分类／第三种语言等功能改造，才需要同步修改上述对应文件；随便添加一个 `tags` 或新的 `lang` 值不会自动新增按钮。修改 JavaScript/CSS 后可更新通用布局中相应 `?v=` 版本号，减少旧缓存干扰。

### 编辑与删除旧文章

编辑旧文：从仓库下载最新版本，保留原文件名，改完上传覆盖该文件。临时下架：将 `published` 改为 `false` 后提交。删除：删除对应 `.md`，原网址会失效；配图只有确认无其他引用后再删。不要用新文章覆盖旧文章的同名文件。

## 8. News：发一条新动态

编辑 [`_data/news.yml`](_data/news.yml)。它是一个列表，每条以 `- date:` 开头。保留原动态，把新内容加在上面，例如：

```yaml
- date: "2026-11-12"
  text: "更新了 Gallery，记录最近的生活。"
  lang: zh

- date: "2026-11-11"
  text: "个人网站搭建成功啦！"
  lang: zh
```

上面第一条只是写法示例，发布时改成真实的事件与日期。

- `date` 统一用带引号的 `YYYY-MM-DD`；页面自动按日期降序排列。
- `text` 是正文；中文 `lang: zh`，英文可用 `lang: en`。
- `text`、`lang` 前面是 **两个空格**，不要使用 Tab；英文双引号包裹的内容中如果还需要英文双引号，写成 `\"`，或者改用中文引号。
- 长文本可以用 YAML 的 `text: >-`，下一行正文缩进四个空格；它会合并成一个段落。
- 同一天多条事件建议合为一条，避免依赖同日条目的排序细节。
- 当前 News 正文按纯文本输出，不会解析 Markdown 链接或 HTML；只添加 `url` 字段也不会自动生成链接。

提交后，同一份数据会更新两个地方：**首页显示最新 3 条，News 页面显示全部**。无需同时修改 `about.md` 或 `news.html`。它也没有定时发布过滤；要到当天再公开，就当天提交。

## 9. 其余页面怎么维护

### Home：介绍、联系方式、教育、实习

编辑 [`_pages/about.md`](_pages/about.md)。姓名、介绍、邮箱、YouTube、X、LinkedIn、GitHub 链接和教育实习都在这里。

当前邮箱是 `zjin73@nuaa.edu.cn`。更换邮箱时同时改 `mailto:` 链接和可见文字；`_config.yml` 不会自动替换页面正文。CV 里的邮箱需要另外改 PDF。

教育经历与实习按 HTML 中的顺序展示，不自动排序；最新放前。实习目前只写时间、机构和身份：江苏研究院为 **Control Engineer**，辽宁通航为 **Research Assistant**。本科导师 Yiming Du 的链接也在本文件。

### Research：论文、专利与阶段

编辑 [`_pages/research.html`](_pages/research.html)。保留 Master's stage 在前、Undergraduate stage 在后的结构，在对应阶段的 Publications 或 Patents 容器内复制一个完整的 `<article class="detail">…</article>`，再替换文字。

顺序由 HTML 控制，新增记录放在所属小节最前。论文状态按事实更新：在审为 `Under Review`，正式发表为 `Published`；发表条目的状态类使用 `paper-status published`，并补齐真实年份、期刊、卷页或 DOI。当前硕士专利为 `Application accepted`（已受理），不要把“受理”误改为“授权”。本科专利已有编号 CN217460494U，属于独立记录。

网页不会从 CV 或 GitHub 自动提取论文，也不会自动更新状态。新论文要单独维护这里；若想发一条动态，再另外编辑 News。

### Project：代码库与课件入口

编辑 [`_pages/projects.html`](_pages/projects.html)。现有顺序：

1. [Agent + Control](https://github.com/zjin73/Agent-Control-and-Grid)
2. [Control Theory Slides](https://github.com/zjin73/Control-Theory-Slides)

这些是链接，不是把对应项目代码复制进网站仓库。项目代码/课件本身在各自仓库更新；只有要改项目标题、简介或链接时，才改网站的 `projects.html`。

新增项目可以复制一个完整 `content-section`，修改标题、描述、`href`，并给标题 `id` 与容器 `aria-labelledby` 设置相同的新值。不要重用已有的 `id`。

### Service

编辑 [`_pages/service.html`](_pages/service.html)，维护教学与学业辅导内容。不要把已删除的社团活动履历重新加回去，除非以后明确需要。

### CV：替换实际 PDF

1. 本地导出新的 PDF，确认排版与内容。
2. 使用 PDF 编辑器的真正“涂黑/修订/Redact”功能去除手机号；不要只叠加一个可以移除的黑色图形。保存后尝试搜索/复制手机号验证已删除。
3. 文件命名为 `CV_Zhiheng-JIN.pdf`，上传到 [`files/`](https://github.com/zjin73/zjin73.github.io/tree/master/files)，替换旧文件。
4. 编辑 [`_pages/cv.md`](_pages/cv.md)，把 **两处** `?v=20261111-redacted` 更新为同一个新版本，例如 `?v=20261112-redacted-v2`，减少旧 PDF 缓存干扰。保留后面的 `#view=FitH&amp;navpanes=0`。
5. 部署后在 [CV 页面](https://zjin73.github.io/cv/) 检查分页、缩放和遮盖效果。PDF 工具栏属于浏览器，设备间可能不同。

网站没有 PDF 的可编辑源稿。更新网页履历不会改 PDF，换 PDF 也不会自动改 Home / Research。覆盖当前 PDF 不等于清除 Git 历史中的旧版本；历史清理是另一项工作。

## 10. 导航、样式和配置

导航集中修改 [`_data/navigation.yml`](_data/navigation.yml)，不是每页分别改。保持 YAML 缩进，每项包含 `title` 和 `url`；`url` 应匹配目标页面的 `permalink`。调整条目顺序即可调整全站导航顺序。

页面路径由 front matter 的 `permalink` 决定，不能只改导航文字就认为网址已更名。改网址要同步更新链接，并使用 `redirect_from` 保留旧地址跳转。

全站样式在 [`assets/css/researcher.css`](assets/css/researcher.css)。保持正文和说明文字的可读字号；照片使用 `height: auto`，避免拉伸。改样式后如遇缓存，可更新 `_layouts/researcher.html` 中 CSS 链接的 `?v=` 值；不要随意删除整个查询参数。

`_config.yml` 中的 `title: ""` 是顶部无网站品牌标题这一现状的配置之一；顶部具体显示由布局决定。博客集合 `blogs`、`include: _pages`、插件和维护文件排除项属于构建设置，日常发文不必修改。

## 11. 发布检查与常见问题

每次提交后：看 Actions 成功 → 打开对应网页 → 核对文字、图片与链接 → 缩窄浏览器窗口检查布局。刚更新看不到，先等部署成功，再强制刷新（Windows/Linux：Ctrl+Shift+R；Mac：Cmd+Shift+R）。

| 现象 | 先检查什么 |
| --- | --- |
| 新博客没出现 | 文件是否在 `_blogs/`；后缀是否真的 `.md`；两条 `---` 是否齐全；`published: true`；是否仍叫被排除的 `template.md` / `template-en.md`；Actions 是否成功 |
| 分类筛选找不到文章 | `category` 是否严格为 `personal` / `technology`，以及当前语言筛选是否也匹配 |
| 语言筛选找不到文章 | `lang` 是否为 `zh-CN` / `en`；先选语言 All 查看是否标为“未设置语言” |
| 中英文切换按钮显示暂无版本 | 另一版本是否已上传到 `_blogs/`、`published: true`、`translation_key` 完全相同且语言不同 |
| 中英文切换到了错误文章 | 不同文章是否误用了同一个 `translation_key`；每个配对编号每种语言只保留一篇 |
| 中文页面看不到新入口 | 先从 Blog 列表重新进入文章，再强制刷新（Mac：Cmd+Shift+R；Windows/Linux：Ctrl+Shift+R）；入口位于标题下和正文末尾 |
| 切换语言后文字没有翻译 | 检查对应文件是否真正写了译文；此功能不自动翻译正文 |
| 配图不显示 | 文件是否上传成功；`src`/Markdown 路径、大小写、扩展名是否完全一致；是否还在使用本地磁盘路径 |
| Gallery 上传照片后无变化 | 是否同时在 `gallery.html` 添加了 `<figure>` |
| News 构建失败 | YAML 是否使用空格、缩进是否正确、引号是否闭合 |
| 首页 News 数量少 | 首页故意只取最新 3 条；完整列表在 News 页面 |
| 中文乱码 | 本地保存编码是否 UTF-8 |
| 改了文件但网站没有变 | 是否提交到了 `master`；若在新分支，PR 是否合并；对应 Pages 部署是否成功 |
| 文章网址变了 | 是否重命名了 `.md`；默认文章地址含文件名，不含 `.md` 后缀 |
| CV 仍显示旧版本 | 文件是否传到 `files/`；`cv.md` 的两处版本号是否更新；刷新浏览器 PDF 缓存 |

日常不需要改 Pages 设置。若以后迁移部署方式，在仓库 Settings → Pages 核对来源；当前通过 master 分支的页面构建发布，不要把 `_site`、本地缓存或 ZIP 压缩包当作源代码上传。

### 改错了怎样恢复

打开错误文件的 **History**，找到之前正常的版本，复制旧内容到当前文件并重新提交。图片/PDF 可从旧版本下载，再上传覆盖对应文件。恢复单个文件比把整个仓库回退更容易保留其他新修改；不要为了撤销一篇博客而重置整站历史。

### 关于 GitHub 授权

网站能被修改，是因为操作所用 GitHub 账号或应用具有这个仓库的写入权限；知道网址不等于获得修改权限。以后自己维护时，登录有权限的账号即可。公开仓库中的源文件和历史可以被其他人阅读，因此 `published: false` 不是私密存储。

## 12. 可选：本地运行整个网站

只想本地写文章并网页上传，可跳过本节。若已安装 Ruby 与 Bundler，并在本机下载/克隆了最新仓库，可在仓库根目录运行：

```bash
bundle install
bundle exec jekyll serve
```

随后打开终端给出的本地地址（通常为 `http://127.0.0.1:4000/`）。本地预览不等于线上发布，仍需提交到 master；不要上传 `_site/`、`.jekyll-cache/` 等生成目录。本地依赖安装情况因系统不同而异，最终仍以 GitHub Pages 构建成功和线上页面为准。

官方参考：[GitHub 上传文件](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)、[GitHub Pages 发布来源](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)、[Jekyll Collections](https://jekyllrb.com/docs/collections/)。
