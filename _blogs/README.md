# Blog 文章目录

这里存放 SIC Lab 网站的博客正文。目录名称是 **`_blogs`**，前面有下划线。

- [当前目录](https://github.com/zjin73/zjin73.github.io/tree/master/_blogs)
- [文章模板](template.md)
- [完整网站维护说明](../instruction.md)
- [网站 Blog 页面](https://zjin73.github.io/blogs/)

## 发布一篇文章

1. 打开 `template.md`，复制它的内容。
2. 回到本目录，点击 **Add file → Create new file**，填写新文件名，例如 `first-note.md`。如果从仓库根目录创建，则填写 `_blogs/first-note.md`。
3. 粘贴模板，修改标题、日期、分类、简介和正文。
4. 将 `published: false` 改为 `published: true`。
5. 提交到 `master`，等待仓库 Actions 中的 Pages 部署成功。

| 类型 | 分类字段 |
| --- | --- |
| 个人随笔 | `category: personal` |
| 科技文章 | `category: technology` |

每篇文章使用一个新的 `.md` 文件。保留开头的两条 `---`，并使用真实日期。

`README.md` 和 `template.md` 已在 `_config.yml` 中排除，不会出现在网站文章列表里。**不要直接把 `template.md` 当作文章发布**；请复制到新文件，模板自身即使改成 `published: true` 也仍会被排除。

新文章会自动进入 Blog 列表，不需要修改 `_pages/blogs.html`。已有 Talk Tech 是外部博客入口，和本目录中的文章分别维护。
