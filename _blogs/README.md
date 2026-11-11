# 博客文件夹 `_blogs`

这是博客源文件目录，前面有下划线。网站列表地址为 [https://zjin73.github.io/blogs/](https://zjin73.github.io/blogs/)。

1. 复制 [template.md](template.md) 到本地，另存为新文件，例如 `2026-11-12-my-first-note.md`。
2. 修改标题、日期、摘要、分类和正文；分类只用 `personal`（个人随笔）或 `technology`（科技）。
3. 写完把 `published: false` 改为 `published: true`。
4. 在 GitHub 的本目录点 **Add file → Upload files**，上传新 `.md` 并提交到 `master`。
5. 等 Pages 部署成功，博客列表会自动增加文章，不需要编辑列表页或导航。

```yaml
---
layout: notebook
title: "我的学习记录"
date: 2026-11-12
category: personal
description: "一句话介绍文章。"
published: true
---
```

正文写在第二条 `---` 分隔线之后。标题由布局自动显示，正文的小标题从 `##` 开始即可。

- **发新文章：新文件名。改旧文章：保留旧文件名。** 同路径同名上传会替换该文章。
- `template.md` 和本 `README.md` 已排除，不会变成文章。不能直接把文章写在 `template.md` 并期待发布。
- 图片上传到 [`../assets/images/`](../assets/images/)，正文引用如 `![描述](/assets/images/2026-11-12-note-01.jpg)`。
- 文章按 `date` 从新到旧排列；未来日期不是定时发布。
- `published: false` 只影响网站生成，公开仓库仍可看到源文件。
- 中文和英文可以写两个独立 `.md`，通过正文链接互相跳转；当前没有自动语言切换功能。

完整示例、代码块、配图、上传步骤和故障排查：[返回 instruction.md](../instruction.md)。
