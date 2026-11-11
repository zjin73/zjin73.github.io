# Zhiheng Jin — personal website

个人网站：**[zjin73.github.io](https://zjin73.github.io/)**。本仓库 `zjin73/zjin73.github.io` 使用 Jekyll 和 GitHub Pages，从 `master` 分支发布。

**维护从这里开始：[instruction.md — 完整中文维护手册](instruction.md)**。包含导航与源码对应表、当前页面样貌、现有图片/PDF 清单，以及本地写作、手动上传、发布检查和恢复误改的方法。

| 常用操作 | 入口 |
| --- | --- |
| 写新博客 | [`_blogs/`](_blogs/) · [写作模板](_blogs/template.md) · [博客说明](_blogs/README.md) |
| Gallery 加照片 | 上传至 [`assets/images/`](assets/images/)，再编辑 [`_pages/gallery.html`](_pages/gallery.html) |
| 发布 News | 编辑 [`_data/news.yml`](_data/news.yml)；首页最新 3 条，News 页面显示全部 |
| 更新首页信息 | [`_pages/about.md`](_pages/about.md) |
| 更新研究成果 | [`_pages/research.html`](_pages/research.html) |
| 更新项目/课件链接 | [`_pages/projects.html`](_pages/projects.html) |
| 更新教学服务 | [`_pages/service.html`](_pages/service.html) |
| 更换真实 CV | [`files/CV_Zhiheng-JIN.pdf`](files/CV_Zhiheng-JIN.pdf)，同时更新 [`_pages/cv.md`](_pages/cv.md) 的版本号 |
| 调整导航 | [`_data/navigation.yml`](_data/navigation.yml) |
| 查看当前样貌 | [八个页面的截图与说明](docs/appearance.md) |
| 检查发布结果 | [GitHub Actions](https://github.com/zjin73/zjin73.github.io/actions) |

当前导航：Home · Research · Project · Service · Blog · Gallery · News · CV。顶部没有网站品牌标题。整体为浅灰网格背景、蓝色强调、清晰的大字号和简洁直线布局。

新博客需要新文件名，并设置 `published: true`；新照片上传后还需添加 Gallery 展示条目。同路径同名上传只替换对应文件。完整步骤与可复制示例以 [instruction.md](instruction.md) 为准。
