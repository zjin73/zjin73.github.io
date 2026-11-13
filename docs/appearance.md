# 当前网站样貌

核对日期：2026-11-12（北京时间）。这些截图记录当时实际线上页面，不是设计示意图。主导航、字体和布局与源码对应；内容继续更新后，截图需要另行更新。

维护说明：[instruction.md](../instruction.md)。截图存放于 `docs/screenshots/`；`docs/` 已从 Jekyll 网站构建中排除，只用于仓库维护文档。网站使用的原照片仍在 `assets/images/`，不能用本目录截图代替。

| 页面 | 当前结构 | 截图 |
| --- | --- | --- |
| Home | 姓名介绍与固定照片；研究兴趣；左 News、右教育和实习 | [完整首页](screenshots/home.png) |
| Research | 硕士在前、本科在后；各阶段论文和专利 | [研究页](screenshots/research.png) |
| Project | Agent + Control；Control Theory Slides | [项目页](screenshots/project.png) |
| Service | Teaching 与 Peer learning | [服务页](screenshots/service.png) |
| Blog | 分类与中文／English 双维筛选；文章页提供译文切换 | [旧版留档，非当前版本](screenshots/blog.png) |
| Gallery | Cooking、Theatre、Discussions & presentations，五张照片 | [完整相册](screenshots/gallery.png) |
| News | 新到旧的时间线 | [动态页](screenshots/news.png) |
| CV | 居中真实 PDF 阅读器，手机号已涂黑 | [CV 首屏](screenshots/cv.png) |

## Home

![当前首页](screenshots/home.png)

## Gallery

![当前相册](screenshots/gallery.png)

## 其余页面

![Research](screenshots/research.png)

![Project](screenshots/project.png)

![Service](screenshots/service.png)

2026-11-14 更新：Blog 只显示自行上传的文章；列表顶部为 Category / 分类与 Language / 语言两行筛选，可组合使用。文章标题下和正文末尾均显示蓝色译文切换按钮：中文版“切换到英文 / Read in English”，英文版“阅读中文版 / Read in Chinese”；列表中也有对应译文链接。入口自动关联相同 `translation_key` 的已发表译文。手机上筛选行纵向排列、按钮自动换行。具体维护方法见 [instruction.md 第 7 节](../instruction.md#7-blog本地写-markdown-并发布)。

下图是此前版本的留档，不代表当前 Blog，不包含这次新增的语言筛选与切换。

![Blog（移除外部入口前留档）](screenshots/blog.png)

![News](screenshots/news.png)

![CV](screenshots/cv.png)

桌面截图宽度约 1360px。CV 截图是阅读器首屏；PDF 内部可滚动翻页，工具栏和缩放因浏览器不同而异。窄屏布局由 `assets/css/researcher.css` 的媒体查询控制：导航换行、内容纵向排列、相册单列，照片保持原比例。
