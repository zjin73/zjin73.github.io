# 博客文件夹 `_blogs`

网站列表：[Blog](https://zjin73.github.io/blogs/)。维护分支：**master**。

## 本地写文章，再手动上传

1. 中文复制 [template.md](template.md)，英文复制 [template-en.md](template-en.md)。
2. 另存新文件名，例如 `2026-11-13-mpc-note-zh.md` / `2026-11-13-mpc-note-en.md`。
3. 修改标题、日期、摘要和正文，再填写以下字段。
4. 写完把 `published: false` 改为 `published: true`。
5. 在 GitHub 本目录点 **Add file → Upload files**，上传新的 `.md`，提交到 `master`。
6. 等 Pages 部署成功，在 Blog 检查“分类 + 语言”筛选；每篇摘要下可直接打开译文。文章标题下和正文末尾也有明确的蓝色切换按钮：中文版为“切换到英文 / Read in English”，英文版为“阅读中文版 / Read in Chinese”。

| 字段 | 填法 |
| --- | --- |
| `category` | `technology`（科技）或 `personal`（随笔） |
| `lang` | 中文 `zh-CN`；英文 `en` |
| `translation_key` | 同一篇中英文使用相同编号，例如 `mpc-note`；不同文章换不同编号 |
| `published` | `true` 才发表；未公开稿件请留在本地 |

中英各一个文件，**文件名不同，配对编号相同，语言不同**。每个编号每种语言只放一个已发表版本。只有一种语言时也能发表，另一语言按钮不可点击；以后上传配对译文就会自动启用。系统不会自动翻译正文。

筛选可以组合，例如 Technology + 中文；切换语言时保留分类。All / 全部中会分别列出各语言版本。旧的 `chinese` / `english` 写法继续兼容，建议新文章采用上表的标准写法。

- 发新文用新文件名；改旧文保留原文件名。同路径同名上传只覆盖那个文件。
- `template.md`、`template-en.md`、`README.md` 已排除，不会作为文章发布。
- 图片上传到 `assets/images/`，正文引用如 `![说明](/assets/images/mpc-note-01.jpg)`。
- `published: false` 只影响网页生成；公开仓库仍可查看源文件。
- 文章按 `date` 从新到旧排列；未来日期不是定时发布。
- 日常发文不需要改导航、列表页、JavaScript 或配置文件。

完整中英文示例、单语处理、上传步骤、功能文件对应关系与故障排查：[instruction.md 第 7 节](../instruction.md#7-blog本地写-markdown-并发布)。
