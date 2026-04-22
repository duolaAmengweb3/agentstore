# AgentStore — Web3 AI Agent 应用商店 · PRD

**项目名**:AgentStore
**一句话**:Web3 版的 App Store — 所有给 Claude / ChatGPT / Cursor / Eliza 等 AI 用的加密货币工具,像逛 App Store 一样发现、安装、使用。
**文档日期**:2026-04-21
**部署目标**:Vercel(Next.js)
**设计范式**:**Apple App Store 五轴结构**(Today / Apps / Collections / Updates / Search)
**状态**:PRD 完整版(已决策)

---

# 第一部分:人话总结

## 一句话看懂 AgentStore

**AgentStore = 给 AI 用的 App Store,加密货币垂直版。**

打开它就像打开苹果 App Store:
- **Today 页**:每日精选故事 / 大图推荐卡 / 编辑推荐工具
- **Apps 页**:所有"加密 AI 工具"分类浏览
- **Collections 页**:主题合集(Degen 必装 / 开发者套装 / 量化工具箱 ...)
- **Updates 页**:我装过的工具更新 + 新品发布
- **Search 页**:全局搜索

用户心智零成本 — 所有人都用过 App Store,AgentStore 的体验就是把那套搬到 "Claude / ChatGPT / Cursor / Eliza 的加密工具" 这个新场景。

**核心差异 vs App Store**:
- 我们装的不是手机 App,是给 AI 的工具
- 每个"应用"装完后,你在 Claude / ChatGPT 里直接用自然语言调用
- 每个"应用"都有**真实使用量** / **社区评分** / **教程** / **一键安装命令**

## 用户打开 AgentStore 能做的 12 件事(画面感)

1. **搜**:搜 "Hyperliquid" / "funding 套利" / "防 rug",秒出结果
2. **逛**:按六大类浏览(交易所 / DEX / 钱包 / 数据 / AI 框架 / 基础设施)
3. **看真相**:每个工具的 Smithery 调用量、npm 下载、GitHub 活跃度**实时更新**,不是死 star
4. **对比**:勾两三个,出对比表(功能 / 价格 / 装机量 / 口碑)
5. **装**:点"一键装到 Claude Desktop",自动生成配置,复制粘贴即可
6. **学**:每个工具带教程和"装完能这么问 Claude"的示例,一键复制
7. **试**:不装就试 — 在网页直接和预配置的工具对话
8. **看榜**:综合榜 / 增长榜 / 新星榜 / **低调真品榜** / **华而不实榜** / 已死榜
9. **追动态**:邮件周报、RSS、Telegram 通知,新工具 / 大事件不错过
10. **建工具箱**:勾自己在用的,生成"我的 AI 交易工具箱"个人页,可分享
11. **AI 向导**:问答 4-6 步 →「你是谁 → 想干啥 → 用啥 agent → 这 5 个最适合你」
12. **共建**:评分、短评、投稿教程、工具愿望清单

## 为什么现在做(3 个硬事实)

1. **工具太分散**:160+ 个加密 AI 工具散在 GitHub / npm / Smithery / 交易所文档 / 开发者博客,**没统一入口**
2. **star 骗人**:最火的加密预测工具只有 6 star,实际 Smithery **54,822** 次调用;另一个 122 star 的"技术指标工具"反而没人装。用户今天**无法判断真伪**
3. **中文几乎零**:加密 AI 教程英文都少,中文基本没有 — 但中文用户群极大

## 我们的独特优势

1. **调研已经完成** — 7 份文档 3,440+ 行覆盖 160+ 工具,开站第一天就能灌满
2. **真实数据而非 star** — 接 Smithery / npm / GitHub API,每个工具**实时真实使用数据**
3. **中文优先,双语同步**
4. **有观点,不是冷冰冰的目录** — 每个工具有我们的评分和推荐理由

## 和未来自营工具的关系

AgentStore **不是临时站**,它是**基础设施**。

先当裁判,再下场。6 个月后我们自己做的交易 / 数据工具上线时,从 AgentStore 首页推,起步就比别人高 10 倍。

---

# 第二部分:详细内容

## 1. 项目概述

### 1.1 完整定位

AgentStore = **"Web3 AI 工具的完整生态站"**,一个站做八件事:
- 工具目录(广度)
- 实时数据仪表盘(真相)
- 一键安装助手(降门槛)
- 教程学习中心(深度)
- 榜单发现(趋势)
- 动态通知(持续)
- 社区共建(规模)
- 个人工具箱(留存)

### 1.2 和现有方案的差异

| 现有方案 | 短板 | AgentStore 怎么补 |
|---|---|---|
| GitHub awesome list(TensorBlock / DeMCP / SendAI)| 静态、无数据、无 UI、更新慢 | 动态、实时数据、交互式 |
| Smithery.ai / PulseMCP | 通用,加密垂直弱,UX 对小白不友好 | 加密垂直,面向非程序员设计 |
| mcp.so | 列表型,无深度内容 | 教程 + 评测 + 案例 |
| 交易所官方文档 | 只写自家 | 跨家对比,站用户一侧 |
| 加密媒体(CoinDesk 等) | 不写这垂类 | 专注这一垂类 |

### 1.3 产品的本质

**"Product Hunt + G2 + 开发者文档站"** 的 Web3 AI 垂直版:
- **Product Hunt 式发现**:每日推荐、新品发布
- **G2 式评价**:真实打分、对比、使用数据
- **文档站式教学**:教程、代码示例、视频

### 1.4 设计范式 — "Apple 的皮,Web3 的骨"

**定位**:用 Apple App Store 的**视觉语言**,做一个 Web3 用户需要的**信息密度**产品。

- **视觉语言**(皮):圆角 16px、Inter / PingFang 字体、胶囊按钮、hover 轻浮、深浅主题、克制配色、丝滑动效 — 全部学 Apple
- **信息密度**(骨):首屏就能看到**统计数字 + 实时流 + 榜单 + 分类 + 合集 + feed** 六种信息,像 **DefiLlama / Dexscreener / Product Hunt / Raycast Store** 那样 — Web3 用户不接受"一屏一故事"的留白型

**参考产品**:
- **视觉**:Apple App Store(网页和桌面都参考)、Linear.app、Raycast、Vercel Dashboard
- **信息密度**:DefiLlama、Dexscreener、Product Hunt、Raycast Store、GitHub Explore

**概念比喻**:像一个**数据感很强但看起来很精致的仪表盘**,而不是"优雅的画廊"。

详细信息架构与视觉规范见 §4。
一次使用流 = "发现 → 安装 → 学习 → 使用 → 管理",就像用 macOS / iOS 一样顺。

---

## 2. 目标用户与使用场景

### 2.1 三类核心用户

**A. Degen 交易者 / 小白**(占比预估 60%)
- 日常用 Claude / ChatGPT 研究加密
- 不写代码但愿意折腾装工具
- 诉求:找工具、看怎么装、抄别人怎么问 AI

**B. Agent 开发者 / 程序员**(25%)
- 做 Eliza bot / Virtuals agent / Discord bot
- 诉求:对比选型、看 API、找集成案例

**C. 量化 / 研究员**(15%)
- 用 Cursor / Claude Code 做策略
- 愿意付费买专业工具
- 诉求:深度评测、新工具雷达、排行榜

### 2.2 典型使用流

**小白 Dan**:
> 在推特看到别人晒"让 Claude 查 Hyperliquid 大仓"截图 → 搜到 AgentStore → 看 "Hyperliquid 专题" → 看三个工具对比 → 点"一键装到 Claude Desktop" → 复制配置 → 3 分钟后用上

**开发者 Bob**:
> 做 Solana memecoin agent 需要"聪明钱追踪" → 搜 AgentStore → 对比 cryptoiz / Nansen / 自建 → 看深度评测 → 决定用 cryptoiz → 照教程集成进 Eliza

**研究员 Alice**:
> 订阅 AgentStore 周报 → 每周一 10 分钟读完"本周趋势" → 看到 OKX 新出大版本 → 点进深度评测 → 升级自己 Cursor 配置

---

## 3. 核心能力清单(本 PRD 的核心)

AgentStore 不是逐步推出功能,而是**完整产品**。以下是全部能力。

### 3.1 工具库(最核心)

#### 3.1.1 浏览

- **六大分类**:交易所工具 / DEX 工具 / 钱包签名 / 数据分析 / AI 框架 / 基础设施
- 每类下面按"官方"、"社区"、"链分类"(ETH / Solana / Hyperliquid / 多链)子筛选
- **网格 + 列表**两种视图
- **排序**:综合分 / 最热 / 新发布 / 更新最近 / star / 调用量

#### 3.1.2 工具详情页(AgentStore 最贵的那一页)

每个工具页包含 12 个区块:

**① 顶部信息块**
- 工具名 + 官方标记
- 一句话简介
- 作者 / 组织(点进去看创作者页)
- 类别 + 标签
- 官网 + GitHub 链接

**② 实时数据面板**(每 6 小时刷新)
- **Smithery 调用量**:累计 + 本周 + 同比增长
- **npm 月下载** / **PyPI 月下载**
- **GitHub star** / **fork** / **contributors**
- **最后 commit 时间** + 活跃度红绿灯(绿=活跃 / 黄=慢 / 红=停滞)
- **AgentStore 综合分**(1-10)+ 社区评分
- **排名徽章**:"类别 #2 / 总榜 #17 / 本周 #3"
- **趋势图**:90 天调用量折线

**③ 一键安装区**
- 下拉选 runtime(Claude Desktop / Cursor / Codex / Gemini CLI / Claude Code / 其它)
- 自动生成对应**完整配置**(JSON / CLI / env)
- 三种使用方式:
  - **复制粘贴**:一键复制到剪贴板
  - **下载 config 补丁**:.json 导入 Claude Desktop 自动合并
  - **深度链接**:点击自动打开本地 Claude Desktop 触发安装
- 二维码(手机扫跳安装指引)
- "**下一步**"引导:获取 API key、验证安装

**④ 功能清单**
- 所有动作(tools)列表
- 每个 hover 看参数 / 返回

**⑤ "装完你可以这么问"**(超实用)
- 5-8 条自然语言 prompt 示例
- 每条"复制到剪贴板"按钮
- 点"在浏览器里试" → 跳内嵌体验(§3.3.2)

**⑥ 对比与替代**
- 自动推荐 3-5 个相似工具
- "加入对比"按钮

**⑦ 教程快链**
- 所有相关 AgentStore 教程

**⑧ 用户评价**
- 平均分 + 最新 5 条短评
- "我用过" / "我想试" 按钮

**⑨ 更新历史**
- 最近 5 个版本的 release note(中英双语化)

**⑩ 创作者**
- 作者信息 + 他做过其它工具 + 推特 / GitHub

**⑪ 安全画像**
- 是否开源
- 密钥处理方式(本地 / 服务器 / 第三方)
- 是否付费
- 数据隐私说明
- 已知风险(审核后标)

**⑫ 同类横向评测链接**

#### 3.1.3 对比页(/compare)
- URL 可分享(`/compare?tools=a,b,c`)
- 并列对比:功能 / 调用量 / 价格 / 上手难度 / runtime / 最近更新 / AgentStore 分
- 每行高亮差异
- 底部 **AI 对比助手**自动生成"Alice 如果你在乎 X 选 A;Bob 如果 Y 选 B"

#### 3.1.4 搜索
- 全局顶部搜索框
- 搜 5 维度:工具 / 教程 / 作者 / 标签 / 动作名
- 实时下拉建议
- 模糊 + 拼音支持(中文友好)
- 搜索结果页可筛选 + 排序

---

### 3.2 实时数据(AgentStore 的信任基石)

#### 3.2.1 数据源与刷新

| 数据 | 来源 | 刷新频率 |
|---|---|---|
| Smithery 调用量 | Smithery registry API | 6 小时 |
| npm 下载 | npmjs.org API | 24 小时 |
| PyPI 下载 | pepy.tech / pypistats | 24 小时 |
| GitHub star / fork / commits | GitHub REST API | 6 小时 |
| 价格 / TVL(相关工具)| CoinGecko / DefiLlama | 30 分钟 |

#### 3.2.2 数据展示

- 每个**工具卡片**右上角:Smithery 调用量 + 趋势箭头
- 每个**工具详情页**:完整实时面板 + 90 天曲线
- **首页 banner**:"AgentStore 追踪 **237 个工具** / 累计调用 **892,341 次** / 本周新增 **14 个**"(大屏数字跳动)
- **"现在就发生"组件**(首页):近 24 小时新发布 / 版本更新 / 突破千次调用的工具滚动显示(像 Hacker News 实时流)

#### 3.2.3 历史数据可视化

- 每工具"调用量 / star / 下载量" 过去 6 个月曲线
- 可多工具历史对比(对比页自带)

---

### 3.3 一键使用(降门槛,AgentStore 的招牌能力)

**目标**:从"找到"到"用上" ≤ 3 分钟。

#### 3.3.1 智能安装助手

**流程**:
1. 点工具页"安装到我的 Claude"
2. 选 runtime
3. 自动生成完整配置
4. 三种使用:
   - **复制粘贴**到用户自己 config
   - **下载 config 补丁**自动合并
   - **深度链接**直接触发 Claude Desktop 安装(实验)
5. 显示下一步:API key 获取、验证安装成功

#### 3.3.2 浏览器内直接试(Try in browser)

**概念**:不装就试。

- 每工具页"试一下" tab
- 内嵌精简 Claude 对话框(调用我们托管的 read-only 测试账号)
- 用预设 prompt 试,看输出
- 只读、不下单、调用次数限制
- 需要用户密钥的工具展示"模拟输出"
- 登录用户可绑自己 Anthropic key 无限试

#### 3.3.3 "整套工具箱一键装"

- 首页大区块:**"推荐工具箱"**(Degen 套装 / 开发者套装 / 量化套装 / 小白入门套装)
- 每套 5-10 个工具
- 点"全部安装",一次搞定

#### 3.3.4 "我的工具箱"分享页

- 登录后勾自己在用的工具
- 一键生成跨平台配置
- 生成**可分享个人页**(`agentstore.xyz/box/@dan`)
- 朋友能看"Dan 的 12 个工具",**一键装 Dan 的工具箱**

---

### 3.4 榜单(6 张榜,每周刷新)

| # | 榜名 | 排序依据 | 更新 |
|---|---|---|---|
| 1 | **综合榜** | AgentStore 分(调用量 40% + 活跃度 30% + 好评 30%) | 每周 |
| 2 | **增长榜** | 近 30 天调用量增长率 | 每周 |
| 3 | **新星榜** | 近 60 天上线 + 调用量爬升 | 每两周 |
| 4 | **低调真品榜** | star 低但调用量高(反 star 偏见)| 每月 |
| 5 | **华而不实榜** | star 高但调用量低(避坑)| 每月 |
| 6 | **已死榜** | 6 月无更新或归档 | 每月 |

每张榜:前 50、排名变化(↑3/↓1/new)、按类别筛选、历史存档、**分享卡片**(生成精美图片发推)。

**专题榜**(跟热点灵活出):
- "Hyperliquid 必装 10 大工具"
- "2026 年中最火 20 个加密 AI 工具"

---

### 3.5 教程与学习中心

#### 3.5.1 四种形态

- **A. 入门路径**(线性):"从零开始用 AI 玩加密"(10 小时路径,5 门课 20 节)
- **B. 按主题**:选 topic 如 "Hyperliquid"、"memecoin 风控"
- **C. 按工具**:每工具 1 篇深度教程
- **D. 视频**:YouTube + B 站双首发

#### 3.5.2 每篇教程规范

**顶部**:读完能学会什么(3 句)/ 耗时 / 难度 / 前置
**中间**:截图为主 / 代码块带复制 / prompt 带"在 Claude 里试"按钮 / 工具 chip 可点
**底部**:相关教程 / "看完装这些" / 评价(有帮助否)

#### 3.5.3 交互式体验

- 代码块一键复制 + 在线运行
- Prompt 块一键复制 + 浏览器试
- 工具 chip hover 预览,点击跳详情

#### 3.5.4 多语言

- 中英双语**同步**发布
- 未来:日 / 韩 / 俄 / 西语

---

### 3.6 动态与通知(持续留存)

#### 3.6.1 动态流(/news)

三种混合:
1. **工具发布 / 大版本**(自动抓 GitHub release + npm publish + 人工审)
2. **生态大事件**(人工撰写)
3. **每周简报**(人工整理)

首页"最新动态"侧边滚动。

#### 3.6.2 每周简报(AgentStore Weekly)

固定栏目:
- 📈 本周 Top 10 工具
- 🆕 本周新上 3-5 个
- 📰 3 件值得关注的事
- 📚 2 篇深度好文
- 💎 一个"容易被忽略的小工具"
- 🎯 一个"你可能没想过的 prompt"

**发布渠道**:邮件 / RSS / 站内归档 / 推特 thread / 公众号 + 小红书(双语)

#### 3.6.3 通知中心

多渠道订阅:
- 📧 邮件(每周 / 每日 / 即时)
- 📱 Telegram bot
- 💬 Discord bot
- 🔔 站内推送
- 📡 RSS

**粒度**:
- 关注工具(新版本 / 上榜 / 被替代)
- 关注类别(新工具)
- 关注事件类型(安全 / Anthropic 政策)
- 关注作者(kukapay / Coinbase 新发)

---

### 3.7 社区与共建

#### 3.7.1 工具评价
- 1-10 打分 + 100 字短评
- 预设标签("好用" / "文档差" / "有坑" / "官方响应快")
- 点赞 / 举报
- 按"有帮助"排序
- 反垃圾(新用户限制)

#### 3.7.2 工具愿望清单
- 用户发"我需要一个做 XX 的工具"
- 投票,开发者可认领
- AgentStore 定期整理"本季缺位工具"报告
- 长期无人做的可能自营(§15)

#### 3.7.3 用户投稿
- **投工具**:提 PR 加新工具(markdown 模板)
- **投教程**:Notion 表单提交,编辑审核
- **报 bug / 数据错误**:任何页面右下角一键反馈

#### 3.7.4 贡献者主页
- 每贡献者一页
- 贡献统计 / 署名文章 / 徽章
- 月度"Top Contributor" 推特表彰
- 贡献榜(总 / 本月 / 新人)

---

### 3.8 个人化(留存关键)

登录后解锁:

#### 3.8.1 我的仪表盘(/dashboard)
- 我的 Watch list 工具实时数据
- 关注作者的最新动态
- 收藏教程 / 阅读进度
- 我的评价和贡献

#### 3.8.2 我的工具箱(/box/@me)
- 勾工具,生成个人工具箱
- 一键导出跨平台配置
- 可公开分享
- **和他人工具箱取差集**("你比我多啥")

#### 3.8.3 AI 推荐向导(/wizard)
**问答式 4-6 步**:
1. 你是交易者 / 开发者 / 研究员 / 小白?
2. 你想做啥?(多选)
3. 你用哪个 agent?
4. 预算?(免费 / $10 / $50 / 不限)
5. 你在乎啥?(易用 / 全能 / 便宜 / 官方)

输出:个性化推荐 5-8 个工具 + 安装顺序 + 学习资源。结果可分享 URL。

#### 3.8.4 工具族谱(/genealogy/:tool)
- "家族树"可视化
- 从哪 fork、被谁 fork、有哪些衍生
- 帮用户理解相似工具关系

#### 3.8.5 创作者主页(/creator/:name)
- 作者 / 组织一页(kukapay / Coinbase / ElizaOS)
- 列出做过的所有工具
- 整体活跃度、总 star、总调用量
- 最新动作
- 可订阅

---

### 3.9 浏览器插件(AgentStore Lens)

**概念**:在任何网页看到加密工具名,悬停显示 AgentStore 数据。

**场景**:
- GitHub 看到某 MCP 仓库 → 悬浮"AgentStore 综合分 7.5 / 本周调用 2,413 / 点这里完整评测"
- 推特看到工具名 → 高亮 + hover 查数据
- Smithery / PulseMCP → 显示"AgentStore 上有对比文章"

**作用**:不需要用户主动搜 AgentStore,在他们日常阅读里**自动引流**。

**技术**:Chrome / Firefox 扩展(Plasmo 框架),爬取页面关键词,调 AgentStore API 匹配。

---

### 3.10 开发者 / 创作者能力

#### 3.10.1 公开 API
- `GET /api/tools` — 全部工具数据
- `GET /api/tools/:slug/metrics` — 实时指标
- `GET /api/rankings/:type` — 各种榜单
- 免费 + 限流

#### 3.10.2 AgentStore Badge
工具作者在自己 README 嵌:
```
[![AgentStore Ranked](https://agentstore.xyz/badge/okx-agent-trade-kit)](https://agentstore.xyz/tools/okx-agent-trade-kit)
```
显示"Ranked #2 on AgentStore CEX Category",点击跳详情。

#### 3.10.3 Webhook
- 工具作者注册,排名变化 / 大量评论 / 新上榜单时收通知

#### 3.10.4 "提交我的工具"流程
- 表单 / PR → 编辑审核 → 48 小时内上线
- 审核标准公开(`/about/submission-guide`)

---

### 3.11 AI 能力(差异化护城河)

#### 3.11.1 AI 搜索(/ask)
- 自然语言:"我想让 Claude 能查 Hyperliquid 上谁要爆仓"
- 直接返回答案:推荐哪几个工具 + 装法 + 试一试
- 技术:Claude Haiku + embedding

#### 3.11.2 AI 对比助手
- 对比页底部自动生成"Alice 如果 X 选 A,Bob 如果 Y 选 B"
- 每周更新,根据最新数据

#### 3.11.3 AI 向导升级版
- 不选项,直接跟 AI 对话描述需求
- AI 根据描述 + AgentStore 数据 + 用户画像推荐

#### 3.11.4 教程自动翻译
- 英文发布后 AI 翻中文初稿,人工润色发布

#### 3.11.5 工具摘要自动生成
- 每工具 README / 文档自动摘要成"300 字看懂"

---

### 3.12 用户体验

- **黑白双主题**
- **移动端完整支持**(不阉割)
- **键盘快捷键**:`/` 搜索、`g h` 首页、`g t` 工具、`?` 帮助
- **命令面板**(Cmd+K):像 Linear / GitHub 随搜随跳
- **性能**:首屏 < 1.5s(静态生成 + Vercel CDN)
- **无障碍**:WCAG AA
- **离线**:PWA 核心页离线可读

---

## 4. 信息架构(完整)

### 4.1 五轴导航(AppStore 范式)

**桌面端**:顶部 nav 横栏:`今日 / 工具 / 合集 / 更新 / 搜索 🔍`
**移动端**:底部 tab bar:`Today / Apps / Collections / Updates / Search`(和 iOS App Store 一模一样)
**右上角**:用户头像 / 登录按钮 / 语言切换 / 深浅主题切换

每个轴对应一个大区 + 下面多个子页。下方详述。

```
AgentStore/
│
├── [今日] Today (/)  ← 首页,每日策展
│   ├── 今日大 Hero(每日一张封面故事)
│   ├── 今日精选工具(Today's App)
│   ├── 今日合集(Today's Collection)
│   ├── 编辑故事(Story)3-5 篇
│   ├── 本周榜单 Top 5
│   ├── 创作者聚焦(This Week's Creator)
│   ├── 实时"正在发生"(live ticker)
│   └── 订阅 CTA
│
├── [工具] Apps (/apps)
│   ├── 六大分类瓷砖(大瓷砖入口)
│   ├── 各分类列表页(/apps/cex, /apps/dex, /apps/wallet, /apps/data, /apps/framework, /apps/infra)
│   ├── 工具详情页(/apps/:slug)← 最核心页(像 App 详情页)
│   ├── 对比页(/compare?apps=a,b,c)
│   └── 所有工具榜(/apps/all,带筛选)
│
├── [合集] Collections (/collections)  ← App Store 精髓
│   ├── 合集目录(大图卡片瀑布流)
│   ├── 合集详情页(/collections/:slug)
│   │   例:/collections/degen-essentials
│   │        /collections/hyperliquid-pro-kit
│   │        /collections/solana-memecoin-hunter
│   │        /collections/defi-quant-starter
│   │        /collections/beginner-starter-pack
│   │        /collections/funding-arb-hunter
│   └── 用户自建合集(/collections/@user/name)
│
├── [更新] Updates (/updates)  ← 活跃度与留存
│   ├── 我装过的工具的更新(登录后,个性化)
│   ├── 生态新品发布(launches)
│   ├── 大事件(events)
│   └── 每周简报(digest)
│
├── [搜索] Search (/search)
│   ├── 全局搜索(工具 / 合集 / 教程 / 作者 / 故事)
│   ├── 热门搜索
│   └── AI 问答式搜索(/ask)
│
├── [学习] Learn (/learn)  ← 从"搜索"或首页入口
│   ├── 入门路径
│   ├── 按主题
│   ├── 按工具
│   ├── 视频中心
│   └── 单篇教程
│
├── [榜单] Rankings (/rankings)  ← 从"合集"或首页入口
│   ├── 综合榜(/rankings/overall)
│   ├── 增长榜(/rankings/growth)
│   ├── 新星榜(/rankings/new)
│   ├── 低调真品榜(/rankings/underrated)
│   ├── 华而不实榜(/rankings/overrated)
│   └── 已死榜(/rankings/dead)
│
├── [创作者] Creators (/creators/:slug)  ← 像 App Store "开发者"页
│   ├── kukapay / coinbase / okx / elizaos ...
│   └── 每人展示全部作品 + 订阅按钮
│
├── [发现] Discover (/discover)
│   ├── AI 推荐向导(/wizard)
│   └── AI 搜索(/ask)
│
├── [社区] Community (/community)
│   ├── 愿望清单
│   ├── 投稿
│   ├── 贡献者主页
│   └── 聊天室入口
│
├── [个人] Profile (登录后)
│   ├── 仪表盘(/me)
│   ├── 工具箱(/me/box)
│   ├── 我的更新(/me/updates ← 对应 App Store "Updates" 标签)
│   └── 设置(/me/settings)
│
└── [关于] About (/about)
    ├── 关于 AgentStore
    ├── 评分方法论
    ├── 投稿指南
    ├── API 文档
    └── 浏览器插件
```

---

### 4.2 首页 — 信息密集型 Web3 仪表盘

首页是 AgentStore 最重要的页面。

**设计原则**:
1. **首屏就能看到 5+ 种类型信息**(统计 / 实时流 / 榜单 / 分类 / 合集 / 新品)
2. **数字比图片重要** — Web3 用户对数字敏感
3. **垂直密度高** — 不浪费空间,不过度留白
4. **水平多列** — 3-4 列并排是常态
5. **视觉仍像 Apple** — 圆角 16、Inter 字体、胶囊按钮、hover 上浮、克制配色、丝滑动效

**参考产品层**:
- 信息结构 → **DefiLlama** / **Dexscreener** / **Product Hunt** / **Raycast Store** / **GitHub Explore**
- 视觉品质 → **Apple App Store** / **Linear** / **Vercel Dashboard** / **Raycast**

**一屏内容目标**:用户首次打开,不滚就能看到 ≥ 6 个可点击的工具 / 合集 / 数字入口。

---

#### 模块 0:顶部导航栏(Sticky)

- 高:56px(桌面)/ 48px(移动)
- 左:AgentStore logo(小尺寸,克制)
- 中:导航 tab(`工具 / 合集 / 榜单 / 更新 / 学习`)
- 中偏右:**搜索栏**(始终展开,不是图标)— 像 GitHub / Linear
- 右:语言切换 / 主题切换 / 登录头像
- 滚动时半透明毛玻璃(backdrop-blur)

---

#### 模块 1:Hero 搜索区(占比小,信息密度高)

**高 160-200px,不是 500px 大图**。

```
┌──────────────────────────────────────────────────────────────┐
│                                                                │
│  🔎  搜工具、合集、作者、教程...                              │
│                                                                │
│  热门: hyperliquid · funding 套利 · 防 rug · 跨链 · memecoin  │
│                                                                │
│  📊 追踪 237 工具 · 本周 +14 · 累计调用 892,341 · 3 个今日破千│
│                                                                │
└──────────────────────────────────────────────────────────────┘
```

- 巨大搜索框(≥ 60px 高)
- 下面一行:**热门搜索 chip**(6-8 个,可点)
- 再一行:**实时全局统计**(工具数 / 本周新增 / 累计调用 / 今日里程碑)— 数字每 30 秒刷新,有微动画

---

#### 模块 2:Live Ticker(实时流,横向滚动)

**Web3 产品的灵魂组件**,始终在滚。像 Dexscreener 顶部或 Dune 实时流。

```
┌──────────────────────────────────────────────────────────────┐
│  🔴 LIVE                                                       │
│  🔥 funding-arb-scanner 刚突破 1,000 次调用 · 3 min ago       │
│  🆕 kukapay 发布 defi-rates-mcp · 15 min ago                  │
│  📈 hyperliquid-radar 本周 +340% · 1h ago                     │
│  ⭐ safety-hook 新获 20 个五星评价 · 2h ago                    │
│  ⚠️ xxx-mcp 被标记已死(6 月无更新) · 5h ago                  │
│  [更多 →]                                                      │
└──────────────────────────────────────────────────────────────┘
```

- 一行一条,自动向左滚动(CSS marquee 或 JS)
- hover 暂停 + 显示完整
- 每条可点进对应工具 / 作者 / 新闻页
- 数据来自 `webhook + cron` 事件流

---

#### 模块 3:三栏榜单并列(本周最值得看的三张榜)

**一屏核心信息,用户不滚就看到**。

```
┌───────────────────┬───────────────────┬───────────────────┐
│ 🏆 综合榜 Top 10  │ 📈 本周增长 Top 5 │ ✨ 新星 Top 5     │
├───────────────────┼───────────────────┼───────────────────┤
│ 1 polymarket-mcp  │ 1 hl-radar +340%  │ 1 claude-ta NEW  │
│   54,822 调用     │ 2 safety +220%    │ 2 safety-hook    │
│ 2 blockscout      │ 3 funding +180%   │ 3 xray-v2        │
│   17,711          │ 4 ...             │ 4 ...             │
│ 3 quantoracle     │ 5 ...             │ 5 ...             │
│   11,630          │                   │                   │
│ 4 bitpoort        │                   │                   │
│ 5 strale          │                   │                   │
│ ...               │                   │                   │
│ 查看全部 →        │ 查看全部 →        │ 查看全部 →        │
└───────────────────┴───────────────────┴───────────────────┘
```

- 每栏 Top 5-10 条,带**实时调用量数字**和**涨跌箭头**
- 点任意条跳工具详情页
- 点"查看全部"跳对应榜单页

---

#### 模块 4:六大分类瓷砖(紧凑版)

```
┌────────────┬────────────┬────────────┬────────────┬────────────┬────────────┐
│ 交易所 CEX │ DEX 工具   │ 钱包 签名  │ 数据 分析  │ AI 框架    │ 基础设施   │
│ 48 工具    │ 42 工具    │ 26 工具    │ 78 工具    │ 18 工具    │ 32 工具    │
│ +12 本周新 │ +3 本周新  │            │ +5 本周新  │            │ +2 本周新  │
│ [图标拼]   │ [图标拼]   │ [图标拼]   │ [图标拼]   │ [图标拼]   │ [图标拼]   │
└────────────┴────────────┴────────────┴────────────┴────────────┴────────────┘
```

- 一排 6 个瓷砖(不是"大瓷砖两行三列")
- 每个瓷砖显示**数字** + **本周新增** + **代表工具图标拼图 4 个**
- hover 瓷砖整个微微上浮 + 代表工具图标展开

---

#### 模块 5:精选合集 Grid(一屏看到 4-6 张)

```
┌──────────────┬──────────────┬──────────────┬──────────────┐
│ DEGEN 必装   │ Hyperliquid  │ Solana 猎手  │ 防 RUG 组合  │
│ 10 件套      │ 高手 7 件    │ 6 件         │ 5 件         │
│ [封面渐变]   │ [封面]       │ [封面]       │ [封面]       │
│ 2,413 装过   │ 891 装过     │ 1,205 装过   │ 3,678 装过   │
└──────────────┴──────────────┴──────────────┴──────────────┘
┌──────────────┬──────────────┬──────────────┬──────────────┐
│ 量化启动包   │ 小白入门 7 步│ Funding 套利 │ 开发者必看   │
│ 8 件         │ 7 件         │ 4 件         │ 12 件         │
└──────────────┴──────────────┴──────────────┴──────────────┘
  [查看全部合集 →]
```

- 4 列 × 2 行 = 8 张合集(桌面)
- 每张卡片 180-220px 高
- 封面图 + 名字 + 工具数 + **装过人数**(社证)
- 点击进合集详情页

---

#### 模块 6:今日最新发布(Feed 列表,像 Product Hunt)

```
┌──────────────────────────────────────────────────────────────┐
│ 今日 · 2026-04-21                                              │
├──────────────────────────────────────────────────────────────┤
│ [图标] hyperliquid-radar v2 · kukapay                        │
│        查 HL 爆仓风险 · 多时间轴聚合                         │
│        📊 2,413 调用 ↑340%  ⭐ 4.8 · 12 评价    [GET]        │
├──────────────────────────────────────────────────────────────┤
│ [图标] safety-hook-pro · cryptoguard                         │
│        agent 下单前自动安全检查                              │
│        📊 982 调用 NEW  ⭐ — 还无评价           [GET]        │
├──────────────────────────────────────────────────────────────┤
│ [图标] okx-trade-kit v2.1 · okx                              │
│        新增 14 个 options tool                                │
│        📊 15,645/月 ↑12%  ⭐ 4.6 · 89 评价      [GET]        │
├──────────────────────────────────────────────────────────────┤
│ 昨日                                                           │
│ ...                                                            │
├──────────────────────────────────────────────────────────────┤
│ [查看更多更新 →]                                               │
└──────────────────────────────────────────────────────────────┘
```

- 类似 Product Hunt 的 feed 结构
- 按时间倒序:今日 / 昨日 / 本周 / 更早
- 每条:**图标 + 名字 + 作者 + 一句描述 + 关键指标 + GET 按钮**
- 一屏能看 5-8 条
- 所有数字都是真实实时

---

#### 模块 7:双栏(创作者 + 编辑故事)

```
┌──────────────────────────┬──────────────────────────┐
│ 本周创作者                │ 编辑精选故事              │
├──────────────────────────┼──────────────────────────┤
│ [头像] kukapay            │ 1. 我们测了 80 个 kukapay │
│        81 个工具           │    工具,这 10 个值得装    │
│        累计 124,891 调用   │    10 分钟读 · 12k 阅读   │
│                           ├──────────────────────────┤
│ 代表作:                  │ 2. 用 Claude 玩 HL 完整   │
│ · funding-rates-mcp       │    指南(附装机清单)      │
│ · whale-tracker-mcp       │    15 分钟 · 8.7k         │
│ · crypto-indicators-mcp   ├──────────────────────────┤
│                           │ 3. Anthropic 封 OpenClaw  │
│ [访问主页]                │    对 agent 交易意味什么   │
│                           │    5 分钟 · 4.2k          │
└──────────────────────────┴──────────────────────────┘
```

- **左栏创作者** 40%:头像 + 名字 + 工具数 + 总调用 + 3 个代表作 + 主页按钮
- **右栏故事** 60%:3 篇精选,每篇带阅读量 + 时长
- 密度远高于 App Store 的"一屏一故事"

---

#### 模块 8:AI 推荐向导 CTA(软引导,不强推)

```
┌──────────────────────────────────────────────────────────────┐
│  🧙 不知道装啥?                                              │
│                                                                │
│  问 4 个问题,AgentStore 帮你选最合适的 5-8 个工具             │
│                                                                │
│                                       [开始回答 4 个问题 →]    │
└──────────────────────────────────────────────────────────────┘
```

- 一个色块 banner,80-100px 高
- 引导新手去 `/wizard` 路径
- 可关闭(cookie 记住)

---

#### 模块 9:专题榜单 / 热门话题(若干个小块)

```
┌────────────────┬────────────────┬────────────────┐
│ 🐋 Hyperliquid │ 🛡️ 防 RUG      │ ⛽ Funding 套利│
│ 14 个工具       │ 6 个工具        │ 5 个工具        │
│ 本周最热 →     │ 新手必看 →     │ 能赚钱 →      │
└────────────────┴────────────────┴────────────────┘
```

- 3-4 个热门话题瓷砖
- 点击进对应话题聚合页(工具 + 教程 + 合集一站式)

---

#### 模块 10:教程中心入口 + 订阅 + Footer

```
┌─────────────────────────────────────────────────────┐
│ 🎓 想系统学?                                         │
│ 从零开始用 AI 玩加密货币 · 5 门课 / 20 节 / 10 小时 │
│                                      [进入学习 →]    │
├─────────────────────────────────────────────────────┤
│ 📬 AgentStore 周报                                    │
│ 每周一,10 分钟读懂加密 AI 圈                         │
│ [邮箱输入框]              [订阅]                      │
├─────────────────────────────────────────────────────┤
│ Footer(logo / 链接 / 社交 / 语言 / "Built ...")     │
└─────────────────────────────────────────────────────┘
```

---

#### 首屏信息密度核对(设计 KPI)

**用户首次打开,不滚动就看到**:

- ✅ 大搜索框 + 热门词 chip 8 个
- ✅ 实时全局统计数字 3+ 个
- ✅ Live Ticker 实时事件 3-5 条
- ✅ 三栏榜单 Top 3 共 9 个工具
- ✅ 六大分类瓷砖(6 个数字 + 图标拼)
- ✅ 部分合集卡片开始露出

**共计一屏可点击入口 ≥ 30 个**(对比 App Store Today 页首屏约 2-3 个)。

**这才是 Web3 用户要的密度**。

---

#### 桌面 vs 移动

| 模块 | 桌面 | 移动 |
|---|---|---|
| Hero 搜索 | 全宽,热门词一行 | 全宽,热门词换行 |
| Live Ticker | 一行滚 | 一行滚(更矮) |
| 三栏榜单 | 3 列并列 | **上下 3 段** |
| 六大分类 | 1 行 6 列 | **2 行 3 列** |
| 精选合集 | 4 列 × 2 行 | **2 列 × 4 行** |
| 今日 Feed | 竖 feed | 竖 feed(卡片更紧凑) |
| 双栏创作者+故事 | 2 列 | **上下 2 段** |
| 底部 Tab Bar | 无 | **有 5 个 tab**(iOS 风) |

移动端核心:**tab bar 在底部永驻**,像 iOS App Store,但内容密度不降。

---

### 4.2.1 首屏线稿草图(ASCII)

```
╔══════════════════════════════════════════════════════════════╗
║ [Logo]    工具  合集  榜单  更新  学习   [搜索]  🌐 🌓 👤   ║  ← Nav
╠══════════════════════════════════════════════════════════════╣
║                                                                ║
║   🔎 搜工具、合集、作者、教程...                               ║  ← Hero 搜索
║   热门: hyperliquid · funding 套利 · memecoin · ...            ║
║   📊 237 工具 · +14/周 · 892k 调用 · 3 今日破千                ║
║                                                                ║
╠══════════════════════════════════════════════════════════════╣
║ 🔴 LIVE  🔥 funding-arb-scanner 破千调用  🆕 kukapay 发新品 →║  ← Live Ticker
╠═══════════════╤══════════════╤═══════════════════════════════╣
║  🏆 综合榜    │  📈 增长榜    │  ✨ 新星榜                   ║
║  1. polymkt   │  1. hl-radar  │  1. claude-ta                 ║
║  2. blocksc   │  2. safety    │  2. safety-hook               ║
║  3. quantor   │  3. funding   │  3. xray-v2                   ║  ← 三栏榜单
║  4. bitpoort  │  4. ...       │  4. ...                       ║
║  5. strale    │  5. ...       │  5. ...                       ║
║  全部 →        │  全部 →       │  全部 →                       ║
╠═══════╤═══════╤═══════╤═══════╤═══════╤═══════════════════════╣
║ CEX48 │ DEX42 │ 钱包26│ 数据78│ 框架18│ 基建32                ║  ← 六分类
║ +12   │ +3    │       │ +5    │       │ +2                    ║
╠═══════╧═══════╧═══════╧═══════╧═══════╧═══════════════════════╣
║  [DEGEN 必装] [HL 高手] [SOL 猎手] [防 RUG]                   ║  ← 合集 2x4
║  [量化] [小白] [Funding] [开发者]                              ║
╠══════════════════════════════════════════════════════════════╣
║  今日 · Feed                                                   ║
║  [icon] hl-radar v2 · kukapay       2,413 ↑340% ⭐4.8  [GET]  ║  ← Feed
║  [icon] safety-hook-pro · cg       982 NEW  ⭐—    [GET]     ║
║  [icon] okx-trade-kit v2.1 · okx   15k/m ↑12% ⭐4.6  [GET]    ║
║  昨日 · ...                                                     ║
╠═════════════════════════════╤════════════════════════════════╣
║  本周创作者 · kukapay        │  编辑精选故事                  ║
║  81 工具 · 124k 调用         │  1. 测了 80 个 kukapay 工具   ║  ← 双栏
║  代表作 3 个                 │  2. Claude 玩 HL 完整指南     ║
║  [主页 →]                   │  3. Anthropic 封 OpenClaw     ║
╠══════════════════════════════════════════════════════════════╣
║  🧙 不知道装啥? 问 4 个问题帮你选   [开始 →]                 ║
╠═════════════════════════════════════════════════════════════╣
║  🐋 HL · 14  🛡️ 防 RUG · 6  ⛽ Funding · 5  🔥 Memecoin · 23 ║  ← 话题
╠══════════════════════════════════════════════════════════════╣
║  🎓 从零学加密 AI · 5 门课 [进入学习 →]                        ║
║  📬 周报订阅 [邮箱] [订阅]                                     ║
║  Footer                                                        ║
╚══════════════════════════════════════════════════════════════╝
```

---

### 4.3 工具详情页 — AppStore App 详情页式

完全对应 Apple App Store 的 App 详情页视觉结构:

```
┌──────────────────────────────────────────────────┐
│ 返回   分享   "装上"(大橙按钮)         ← 顶部  │
├──────────────────────────────────────────────────┤
│                                                  │
│  [图标 128px]  Funding Arb Scanner              │
│                作者 · kukapay                    │
│                ⭐ 4.7 / 2,413 评价              │
│                                                  │
│                [GET / 装上] (显眼按钮)          │
│                                                  │
├──────────────────────────────────────────────────┤
│ 实时数据栏(横向)                               │
│ Smithery: 2,413  npm: 15,645/mo  GitHub: 204 ⭐ │
│ 排名: CEX #2 · 总榜 #17 · 本周 ↑3              │
├──────────────────────────────────────────────────┤
│ 截图 / 演示视频(横向滚动,像 App Store)        │
│ [gif1] [gif2] [gif3] [gif4]                     │
├──────────────────────────────────────────────────┤
│ 关于这个工具(展开阅读,大段描述)               │
├──────────────────────────────────────────────────┤
│ 装完你可以这么问 Claude                          │
│ - "查 BTC funding rate"   [复制] [在浏览器试]  │
│ - ...                                            │
├──────────────────────────────────────────────────┤
│ 开发者信息                                       │
│ [头像] kukapay · 81 个工具 · 查看主页           │
├──────────────────────────────────────────────────┤
│ 评价与评分(平均分 + 最新 5 条 + 查看全部)      │
├──────────────────────────────────────────────────┤
│ 类似工具(横滑)                                 │
│ [app1] [app2] [app3] [app4]                     │
├──────────────────────────────────────────────────┤
│ 信息(表格)                                     │
│ 类别 / 语言 / 支持 runtime / 安全画像 / 付费    │
│ 最新版本 / 更新历史                              │
├──────────────────────────────────────────────────┤
│ 相关教程(卡片列表)                             │
├──────────────────────────────────────────────────┤
│ 相关合集(小卡片)                               │
│ "这个工具出现在 3 个合集里"                     │
├──────────────────────────────────────────────────┤
│ 举报 / 建议 / 我要贡献                           │
└──────────────────────────────────────────────────┘
```

**关键点**:
- **"GET / 装上"按钮一直漂浮在右上**(页面滚动时 sticky)
- 详情页顶部视觉体量大,一如 App Store
- 数据、截图、评分、开发者、相似推荐、评价、信息 七大区块按 App Store 顺序

---

### 4.4 合集详情页(Collections)— AppStore 精华

AppStore 的"合集"是最出彩的内容形态(例:"5 款冬日必备天气 App")。

AgentStore 合集页布局:

```
┌──────────────────────────────────────────────────┐
│ 大图封面(800 高,渐变覆盖)                     │
│                                                  │
│   DEGEN 必装 10 件套                             │
│   推特上 90% 晒 Claude 截图的 degen 都在用      │
│   [一键装全部] [分享]                           │
│                                                  │
├──────────────────────────────────────────────────┤
│ 编辑前言(200-400 字)                           │
│ "在 2026 年做 degen,AI 是杠杆..."              │
├──────────────────────────────────────────────────┤
│ 工具清单 Card 1                                  │
│ #1 [图标] Funding Arb Scanner                   │
│     "为什么在这个合集:跨所套利 degen 每天第一步"│
│     [装] [看详情]                               │
├──────────────────────────────────────────────────┤
│ 工具清单 Card 2                                  │
│ #2 [图标] Hyperliquid Radar                     │
│     "...理由..."                                │
├──────────────────────────────────────────────────┤
│ ... 10 个全列完                                  │
├──────────────────────────────────────────────────┤
│ 一键全装(再次提示)                             │
├──────────────────────────────────────────────────┤
│ 相关合集 · 相关故事 · 作者其它合集               │
└──────────────────────────────────────────────────┘
```

**合集重要性**:合集是 AgentStore 的**最强病毒传播单元**。一张合集可以被:
- 发推(带封面图 + 链接)
- 分享到 Telegram / Discord
- 嵌入博客 / Medium
- 用户生成自己的合集

---

### 4.5 设计规范(视觉 DNA)— Apple 的皮,Web3 的骨

**皮(视觉语言)**:借鉴 Apple App Store / Linear / Raycast

- **字体**:英文 **Inter** 或 **SF Pro Display**;中文 **PingFang SC** / **Noto Sans SC**
- **圆角**:卡片 16px / 按钮 12px / 图标 22%(iOS 标准)
- **阴影**:极轻,`shadow-sm` → hover `shadow-md`,微上浮
- **色调**:
  - 浅色:白 bg / 深灰字 / 微蓝灰副字
  - 深色:`#0A0A0A` bg / 白字 / 灰副字
  - 主色点缀:**AgentStore 紫蓝渐变**(区别 App Store 纯蓝)
- **按钮**:"GET" / "装上" 胶囊形(pill),主色填充
- **动效**:hover 上浮 + 阴影增强;click scale 0.98;页面切换淡入;**但不过度**,不要花哨动画
- **图标**:统一圆角方形(iOS app icon 风),作者提供或我们从 logo 自动生成

**骨(信息密度)**:参考 DefiLlama / Dexscreener / Product Hunt / Raycast Store

- **卡片内**:数字 > 图片 > 文字
- **垂直间距**:card-padding `p-4` 为主,避免 `p-8` / `p-12` 这种留白
- **水平密度**:桌面 3-6 列并排是常态,不做"一张大卡片占全宽"
- **实时数据一等公民**:每个工具卡片显眼位置显示调用量 / 涨跌箭头 / 徽章
- **hover 即预览**:不需要点击就能看更多信息(tooltip / popover)

**双模式标准**:
- 浅色模式:精致商务,像 Linear
- 深色模式:**deep black + 发光数字**,像 Bloomberg terminal
- **加密用户大多偏爱深色**,深色要做得最好

**参考截图**(团队设计时常打开):
- https://dexscreener.com(密度 + 实时)
- https://defillama.com(密度 + 数字 + 榜单)
- https://linear.app(视觉品质 + 克制)
- https://raycast.com/store(垂类 store 最佳参考)
- Apple App Store iOS(视觉品质)

---

### 4.5.1 参考产品对比(我们要抄谁的什么)

| 参考 | 抄它的什么 |
|---|---|
| **Apple App Store** | 圆角 / 按钮 / 图标 / 详情页布局 / 合集概念 |
| **Raycast Store** | 垂类 extension store 的 ideal 状态 — 密度 + 视觉美 |
| **DefiLlama** | 首页信息密度 / 实时数据展示 / 榜单样式 |
| **Dexscreener** | Live Ticker / 表格密度 / 深色模式 |
| **Product Hunt** | Feed 结构 / "今日 / 昨日 / 本周" 时间分段 |
| **GitHub Explore** | 分类瓷砖 / trending 分隔 |
| **Linear** | Nav 栏简洁 / 字体品质 / 整体克制 |
| **Vercel Dashboard** | 卡片组合 / 颜色系统 |

---

### 4.6 移动端差异

移动端完全按 iOS App Store tab bar 实现:
- 底部 5 个 tab:Today / Apps / Collections / Updates / Search
- 每个 tab 内部滚动独立
- 下拉刷新
- PWA 安装后,体验几乎等于 App
- 手势:左右滑动返回

---

## 5. 内容体系

### 5.1 工具库:起步 200+,目标 500+

| 类别 | 预期 | 代表 |
|---|---|---|
| 交易所工具 | 30-50 | Binance Skills Hub / OKX Agent Trade Kit / Kraken CLI / Bitget Agent Hub / Coinbase AgentKit / Bybit / Gate / KuCoin / Backpack / Crypto.com ... |
| DEX 工具 | 30-50 | 1inch / 0x / Jupiter / Hyperliquid 系列 / Uniswap AI Toolkit / dYdX / GMX / Drift / Paradex / Aevo ... |
| 钱包 / 签名 | 20-30 | Phantom / Coinbase AgentKit / Crossmint / OKX Agentic / thirdweb / Alby / Breez ... |
| 数据分析 | 50-100 | CoinGecko / Etherscan / Helius / Moralis / Chainstack / Nansen / Dune / DefiLlama / kukapay 80+ / Codex / Bankless / GoPlus ... |
| AI 框架 | 15-25 | ElizaOS / Solana Agent Kit / GOAT / Virtuals GAME / Fetch.ai uAgents / Giza ... |
| 基础设施 | 25-40 | Smithery / PulseMCP / mcp.so / Claude Desktop / Cursor / Codex / OpenClaw ... |

**数据来源**:现有 4 份调研 markdown 脚本解析 → 160 个核心工具首批能填。

### 5.2 教程:起步 50+,目标 200+

| 级别 | 数量 | 例 |
|---|---|---|
| 入门路径 | 20 | "什么是 AI agent 工具"、"5 分钟装第一个"、"怎么选 runtime" |
| 主题教程 | 30 | "让 Claude 会查 Hyperliquid"、"用 agent 做 funding 套利"、"给 agent 配 pre-tx 安全检查"、"一小时搭 Eliza bot" |
| 深度评测 | 20 | "OKX Agent Trade Kit 深度评测"、"5 个 Hyperliquid 工具实测"、"Kukapay 80 个工具哪些真值得装"、"1inch vs 0x" |
| 视频 | 10 | 上述选题短版 |

### 5.3 内容维护节奏

| 周期 | 产出 |
|---|---|
| 每日 | 抓新版本 / 审新工具(半小时)|
| 每周一 | 发周报 |
| 每周三 | 1 篇深度教程 |
| 每周五 | 1 篇深度评测 / 对比 |
| 每月 | 重评 top 50 / 更新榜单算法 |

---

## 6. 数据模型

**Markdown + frontmatter 为 source of truth**(工具数据、教程、动态全部)+ **Supabase Postgres** 存用户数据(登录 / 评价 / 工具箱)。

### 6.1 Tool

```yaml
id: okx-agent-trade-kit
name: OKX Agent Trade Kit
tagline_en: OKX official, 140 tools covering spot/perp/options
tagline_zh: OKX 官方,140 个工具覆盖现货/合约/期权

category: cex                     # cex|dex|wallet|data|framework|infra
subcategory: trading
official: true
author: okx
language: typescript

homepage_url: https://github.com/okx/agent-trade-kit
github_url: https://github.com/okx/agent-trade-kit
npm_package: "@okx_ai/okx-trade-mcp"
pypi_package: null

install:
  commands:
    - runtime: claude-desktop
      config: |
        {
          "mcpServers": {
            "okx-trade": {
              "command": "npx",
              "args": ["-y", "@okx_ai/okx-trade-mcp"],
              "env": {"OKX_API_KEY": "...", "OKX_SECRET": "..."}
            }
          }
        }
    - runtime: cursor
      command: "npm install -g @okx_ai/okx-trade-mcp"
    - runtime: codex
      command: "..."
  prerequisites:
    - "OKX 账号 + API key(只读即可)"
    - "Node.js 22+"

actions:
  - name: get_ticker
    description: 查询实时报价
    params: [symbol]
  - name: create_spot_order
    description: 创建现货订单
    params: [symbol, side, amount, price]

example_prompts:
  - "帮我看看 BTC/USDT 永续的资金费率"
  - "创建一个网格机器人买 ETH 在 2800-3200"

features: [...]
pros: [...]
cons: [...]

security:
  open_source: true
  audited: false
  key_handling: local
  paid: false

metrics:
  github_stars: 204
  github_forks: 38
  github_last_push: 2026-04-15
  npm_downloads_monthly: 15645
  smithery_use_count: 0
  last_auto_updated: 2026-04-21T12:00:00Z

rating:
  agentstore_score: 8.5
  community_score: 7.8
  review_count: 12
  freshness: active

alternatives: [binance-skills-hub, bybit-mcp, bitget-agent-hub]
related_tutorials: [okx-agent-trade-kit-review]
tags: [cex, trading, official, okx, typescript]
```

### 6.2 Tutorial

```yaml
id: claude-hyperliquid-guide
title_en: Make Claude a Hyperliquid Risk Analyst
title_zh: 让 Claude 会查 Hyperliquid 大仓
subtitle_zh: 15 分钟教会你的 AI 玩永续合约分析
level: intermediate
read_time: 15

learn:
  - 装一个 Hyperliquid 工具到 Claude Desktop
  - 让 Claude 查 top 爆仓风险仓位

prerequisites:
  - 有 Claude Desktop
  - 基础 Claude 使用经验

tools: [hyperliquid-info-mcp, hyperliquid-whalealert-mcp]
author: agentstore-editors
published_at: 2026-04-22

content_md:
  en: |
    ...
  zh: |
    ...

videos:
  - platform: youtube
    id: abc123
  - platform: bilibili
    id: BV1xxx
```

### 6.3 NewsItem / Ranking / UserProfile

schema 详见开发阶段 spec(格式同上)。

---

## 7. 技术栈

| 层 | 选型 | 理由 |
|---|---|---|
| 框架 | **Next.js 14(App Router)** | SSR / SSG / SEO / Vercel 原生 |
| UI | **shadcn/ui + Tailwind + Radix** | 成熟、好看、无锁定 |
| 图表 | **Recharts / Tremor** | 简单 |
| 内容 source | **Markdown + frontmatter**,git 仓库为 source of truth | 零数据库、社区可 PR、版本可回溯 |
| 搜索 | **Pagefind**(静态) + **Typesense**(动态) | 免费 + 强大 |
| 用户数据 | **Supabase**(Postgres + Auth) | 免费层够用 |
| 实时抓取 | **Vercel Cron** + **GitHub Actions** | 定时更新 metrics |
| 图片 | **Vercel Image** + **Cloudinary** | |
| 邮件 | **Resend** | 便宜简单 |
| 分析 | **Umami 自托管**(Fly.io)+ **Plausible** | 隐私合规 |
| 错误监控 | **Sentry 免费层** | |
| 部署 | **Vercel** | |
| AI | **Anthropic Claude API**(Haiku 摘要 / Sonnet 对比)| |
| 浏览器插件 | **Plasmo 框架** | TypeScript 生态 |
| 国际化 | **Next.js i18n + next-intl** | |

**架构图**:

```
┌─────────────────────────────┐
│    GitHub Repo (content)    │
│  /tools/*.md  /learn/*.md   │
│  /news/*.md   /creator/*.md │
└───────────┬─────────────────┘
            │  git push 触发
            ▼
┌─────────────────────────────┐
│    Vercel (Next.js)         │
│    SSG / ISR,全球 CDN      │
│    agentstore.xyz              │
└─────┬────────────────┬──────┘
      │                │
      ▼                ▼
┌──────────┐    ┌──────────────┐
│Supabase  │    │ Anthropic    │
│(users /  │    │ Claude API   │
│ reviews /│    │ AI 搜索/摘要 │
│watchlist)│    └──────────────┘
└──────────┘

定时抓取(Vercel Cron,每 6 小时):
┌─────────────────────────────┐
│  抓 GitHub / npm / Smithery │
│       ↓                     │
│  更新 markdown frontmatter  │
│       ↓                     │
│  git commit + push          │
│       ↓                     │
│  Vercel 自动重部署          │
└─────────────────────────────┘
```

### 7.1 为什么用 markdown + git 不用纯数据库

1. **零运维**:工具数据放 git 里,Vercel 自动部署
2. **社区可 PR 贡献**:降投稿门槛
3. **版本可追溯**:git history 就是审计日志
4. **构建时生成静态页**:访问速度极快,SEO 好
5. **内容型数据不需要事务一致性**

用户数据(评价、工具箱)才进 Supabase,因为需要低延迟读写和 auth。

### 7.2 成本估算(月)

| 项 | 费用 |
|---|---|
| Vercel | $0(Hobby 够用到 10k MAU),$20(Pro,之后)|
| 域名 | $1(agentstore.xyz 年费分摊)|
| Supabase | $0(免费层)|
| Umami(Fly.io) | $0 |
| Resend(< 3k 邮件/月)| $0 |
| Typesense(自托管 Fly.io)| $0-5 |
| Anthropic API | $5-20(AI 搜索 + 对比 + 摘要)|
| **总计** | **< $10 / 月**(起步)|
| 10 万 MAU 后 | ~$50-100 / 月 |

---

## 8. 多语言

### 8.1 语言路线图

1. **英文 + 中文简体**(首发同步)
2. **中文繁体**(批次 B)
3. **日文、韩文、西语**(批次 C 及以后)

### 8.2 实现

- Next.js i18n 路由(`/en/...`, `/zh/...`)
- 浏览器自动检测 + cookie 记住
- 教程每篇独立翻译(AI 翻初稿 + 人工润色)
- 工具 tagline / description 双语字段

---

## 9. 冷启动内容灌入

### 9.1 数据迁移脚本(TypeScript)

1. 读 `/docs/cex-agents.md`, `dex-agents.md`, `ai-native-projects.md`, `mcp-ecosystem.md` 四份调研
2. 解析工具段(结构化 + LLM 辅助提取 + 人工校对)
3. 生成 AgentStore 标准 markdown → `/tools/*.md`
4. 抓取 GitHub / npm / Smithery 初始数据填 metrics
5. 生成初始 creator 页(kukapay / okx / coinbase / ... )

**估算 2-3 天跑完 + 人工校对,灌 160 个核心工具。**

### 9.2 教程首批

现有调研文档里大量内容可直接改写:
- `cex-agents.md` 的 OKX 详解 → 一篇评测
- `dex-agents.md` 的 Hyperliquid 部分 → workflow 教程
- `mcp-ecosystem.md` 的榜单数据 → 两篇榜单解读

**直接产出 10-15 篇首发教程**。

### 9.3 榜单冷启动

- Smithery API 一次性拉所有加密工具 useCount
- 初始榜单即生成
- 标注"自 2026-04 起追踪"

---

## 10. 分发 & SEO

### 10.1 SEO

**关键词三梯队**:

| 梯队 | 示例 | 落地 |
|---|---|---|
| 头部 | "crypto mcp" / "加密 MCP" / "web3 ai agent" / "hyperliquid claude" / "chatgpt 加密" | 首页 / 分类页 / 重点教程 |
| 长尾 | "okx agent kit 教程" / "how to install {tool}" / "{tool} vs {tool}" / "claude 查 hyperliquid" | 每工具页 / 每教程 / 对比页自然覆盖 |
| 品牌 | "agentstore" + 垂类词 | 反向链接建设 |

**技术**:每页独立 title / meta / og image、JSON-LD(Product / Review / FAQ)、sitemap 自动、hreflang、Core Web Vitals 全绿、首屏 < 1.5s。

### 10.2 非 SEO 流量

| 渠道 | 打法 |
|---|---|
| 推特 / X | 每新工具 1 条;每周简报 1 条;@ KOL |
| 小红书 / 公众号 / 掘金 / 知乎 | 中文教程深度铺 |
| Reddit | r/ClaudeAI / r/CryptoCurrency 深度内容 |
| Telegram / Discord | 建 AgentStore 群;入 ElizaOS / Virtuals / SendAI 群 |
| GitHub | 每工具页脚 "found via AgentStore";fork awesome list 加 AgentStore 链 |
| Hacker News | 重大内容 Show HN |
| YouTube / B 站 | 双平台视频 |
| 邮件周报 | 核心留存 |
| **AgentStore Lens 浏览器插件** | 在 GitHub / Twitter 日常阅读自动引流 |
| **AgentStore Badge** | 工具作者 README 嵌徽章,反向带流量 |

---

## 11. 运营节奏

### 11.1 每周固定产出

- 周一:发周报
- 周三:1 篇深度教程
- 周五:1 篇深度评测 / 对比
- 每日:维护数据 / 审新工具 / 社区回复

### 11.2 KOL 合作清单(优先联系)

**国际**:
- @shawmakesmagic(ElizaOS)
- @milesdeutscher(Claude x TradingView 代言人)
- @aixbt_agent(Virtuals 生态)
- @jesse_pollak(Base)
- @unusual_whales
- @lookonchain

**华语**:后续根据实际圈子选

### 11.3 社区

- 官方 Telegram(中英各一)/ Discord
- 进 ElizaOS / Virtuals / SendAI / kukapay 群
- 月度 Top Contributor 推特表彰

---

## 12. 成功指标

### 12.1 北极星指标
**MAU(月活独立访客)**

### 12.2 关键指标

| 指标 | 6 月末目标 |
|---|---|
| MAU | 30,000 |
| DAU | 1,500 |
| 30 日留存 | 35% |
| 工具数 | 500+ |
| 教程数 | 150+ |
| 邮件订阅 | 5,000 |
| 安装命令复制率 | 20% |
| 对比页分享 | 300/月 |
| 工具箱创建 | 1,000 |
| KOL 自然转发 | 10+ 次 |
| GitHub Badge 嵌入 | 30+ |

### 12.3 每周追踪

日新访客、来源、人均页面(目标 > 2.5)、停留时长(> 2 min)、跳出率(< 55%)、教程完成率、"复制安装"点击数、"浏览器试"使用数。

---

## 13. 风险

| 风险 | 影响 | 应对 |
|---|---|---|
| 内容工作量失控 | 中 | 现成调研灌 70% / 脚本自动抓 / 社区众包 |
| 数据抓取被限 | 中 | 多数据源冗余 / 缓存 / 人工兜底 |
| MCP 标准变动 | 中 | 跟官方 SDK / 数据模型留扩展 |
| 搜索引擎不收录 | 中 | 技术 SEO 扎实 / 反向链接 / 多元分发 |
| 大平台禁加密 | 中 | 多语言多渠道 / 邮件订阅为底 |
| 竞争者垂直化 | 高 | 中文 + 深度教程 + 社区 + AI 差异化 |
| 自营工具利益冲突 | 中 | 评分透明 / 自营标注 / 竞品公平列 |
| 数据错误信任危机 | 高 | 来源显示 + 时间戳 / 一键反馈 + 快修 |
| 安全 / 隐私合规 | 中 | 插件只读 / API key 永不经 AgentStore |

---

## 14. 开发节奏

**上线即完整站**,分三个交付批次,每批次上线后都是"可用完整产品"。

### 批次 A — 站上线(3-4 周)

核心页面 + 核心能力全上:

- ✅ 首页 / 工具库 / 详情页 / 对比页 / 教程 / 搜索
- ✅ 基础榜单(综合榜 + 增长榜)
- ✅ 动态流
- ✅ 安装助手(复制粘贴版)
- ✅ 实时数据(GitHub + npm + Smithery)
- ✅ **AI 搜索**(差异化必带)
- ✅ 中英双语
- ✅ 响应式 + 移动端
- ✅ 初始 160 工具 / 20 教程
- ✅ 基础 SEO
- ✅ 邮件订阅

### 批次 B — 互动与留存(再 3-4 周)

- 登录(Supabase Auth)
- 我的工具箱 / Watch list / 仪表盘
- 社区评价
- AI 推荐向导
- 榜单完整 6 张
- 每周简报系统
- Telegram / Discord / RSS 通知
- AI 对比助手
- 浏览器内试运行基础版

### 批次 C — 生态扩展(第 3 个月)

- **浏览器插件 AgentStore Lens**
- 公开 API + AgentStore Badge
- 工具族谱 / 创作者主页
- AI 对话式工具向导
- 教程视频中心
- 愿望清单 / 贡献者体系
- Webhook
- 工具箱公开分享页

---

## 15. 与未来自营工具的战略关系

### 15.1 三阶段

```
阶段 1(M1-M6):AgentStore 独立运营
  作用:建品牌、拉流量、收用户
  产出:MAU 3 万 / 订阅 5 千 / 工具 500 / 教程 150

阶段 2(M7-M9):AgentStore + 自营工具共存
  上线第一批自营(funding 套利 / Claude 截图 TA / ...)
  AgentStore 首页 + 教程 + 周报推
  自营工具反哺 AgentStore 深度内容

阶段 3(M10+):飞轮
  AgentStore = 自营工具的发射平台
  所有未来自营走 AgentStore 首发
  既是评委也是选手,但算法透明 + 竞品公平
```

### 15.2 利益冲突管理

一旦开始自营,必须做到:
1. 打分算法公开(`/about/ranking-methodology`)
2. 自营工具标注 **AgentStore Studio**
3. 竞品公平上榜
4. 好评不刷

透明 = 最大的信任资产。

### 15.3 飞轮效果

- 没 AgentStore:自营工具发出去靠运气 / 推特,起步装机可能 0
- 有 AgentStore:首发 24 小时直接进入 5 千订阅邮件 / 首页 banner / 教程深度教学 / KOL 池 → 起步装机 1,000+
- **第一天 10 倍差距,三个月 50 倍复利**

---

## 16. 已定决策(替你决定了,以下全部直接采纳)

### 16.1 项目基础(已定)

| 项 | 决定 | 理由 |
|---|---|---|
| **项目名** | AgentStore | 用户确认(对标 App Store 心智) |
| **域名首选** | **agentstore.xyz** | 加密圈 .xyz 是默认;短、好记 |
| **域名备选** | agentstore.ai / agentstore.app / agentstore.io | .xyz 拿不到用 .ai 次之 |
| **中文站名** | **"AgentStore · Web3 AI 应用商店"** | 保留英文主品牌 + 中文 tagline |
| **slogan(中)** | **"给你的 AI 装上加密世界"** | 短、有动作感、克制 OS 叙事 |
| **slogan 备选(中)** | "Web3 版 App Store,给你的 AI 用" | 直白版 |
| **slogan(英)** | **"The App Store for crypto AI agents"** | 一眼懂,定位清晰 |
| **设计范式** | **Apple App Store**(Today / Apps / Collections / Updates / Search 五轴)| 用户心智零成本,见 §4.1-4.6 |
| **部署** | Vercel(Hobby 起步,升 Pro) | 用户确认 |
| **首发语言** | **中英同步** | 用户确认 |

### 16.2 定位(已定)

| 项 | 决定 | 理由 |
|---|---|---|
| **内容基调** | **有观点的评测站**,不是纯中立目录 | 差异化关键;我们打分、我们推荐、我们有态度 |
| **教程主写语言** | **中英同步发布** | 中文差异化更强;英文拉国际流量;两边都不能丢 |
| **先打哪个市场** | **双线推**,英文主拉加密推特 KOL,中文主拉华语社区 | 两个池子不互斥,同步做成本不高多少 |

### 16.3 上线首发爆款 3 篇(已选)

首发推特引爆靠这 3 篇:

1. **"2026 加密 AI 工具全景:看完这一篇,你的 Claude 比 90% 的 trader 强"**
   - 长文合集,把我们调研的精华浓缩成推特可转发的一页
   - 目标:Hacker News Top 10 / 推特 1000+ 转发
2. **"我们测了 80 个加密 MCP 工具,这 10 个才是真正值得装的(附装机量真实数据)"**
   - 基于 Smithery 真实调用量打脸"GitHub star 欺骗论"
   - 自带争议点(点名华而不实工具)→ 易引战 = 易传播
3. **"让 Claude 玩 Hyperliquid 的完整指南 — 从装工具到识别爆仓风险"**
   - 最精细具体教程,专攻 degen 用户
   - 配 5 分钟视频版,B 站 + YouTube 双发

### 16.4 浏览器插件 AgentStore Lens(已定)

- **放在批次 C 做(第 3 个月)**
- 理由:批次 A 聚焦站本身功能完整度 + 内容质量;插件是增量引流工具,等站有内容后做回报才大

### 16.5 AI 能力启用时机(已定)

| AI 能力 | 批次 |
|---|---|
| **AI 搜索 /ask** | **批次 A**(差异化必带) |
| AI 对比助手 | 批次 B |
| AI 推荐向导 | 批次 B |
| AI 教程翻译 | 批次 A(后端 job 即可) |
| AI 工具摘要 | 批次 A(后端 job 即可) |

### 16.6 登录系统(已定)

- **批次 A 不做登录**:所有核心功能(浏览 / 搜索 / 对比 / 复制安装 / 订阅邮件)都不需要登录
- **批次 B 引入登录**:为工具箱 / 评价 / 仪表盘
- 登录提供方:**GitHub OAuth + Google OAuth**(开发者友好)+ 邮箱 magic link(小白友好)
- 通过 Supabase Auth,免费

### 16.7 数据模型决策(已定)

- 工具 / 教程 / 动态 / 榜单 → **markdown + git**(git 即数据库)
- 用户 / 评价 / 工具箱 / 订阅 → **Supabase Postgres**
- 混合架构,两边优势都吃

### 16.8 评分算法(已定,可公开)

AgentStore Score = ⎣调用量 × 40% + 活跃度 × 30% + 用户评分 × 30%⎦

其中:
- **调用量分**(Smithery useCount + npm monthly + 加权标准化)
- **活跃度分**(最后 commit 距今天数 × contributors 数)
- **用户评分**(至少 10 条才计入;否则 = AgentStore 编辑分)

所有算法公开在 `/about/ranking-methodology`。

### 16.9 API key 安全(已定)

- AgentStore 本身**不托管任何用户 API key**
- 生成配置时只在用户浏览器内拼接;下载的 config 文件用户自己管
- "浏览器内试" 用我们自己的 read-only 测试密钥(Anthropic API),用户不暴露
- 所有"密钥处理"字段在工具页面清楚标注,用户知情

### 16.10 上线路径(已定)

**Week 0**:仓库 + Next.js 脚手架 + 域名 + Vercel 部署 pipeline
**Week 1-2**:核心页面(首页 / 工具 / 详情 / 教程 / 搜索)
**Week 3**:实时抓取 cron + AI 搜索 + 数据灌入脚本
**Week 4**:160 工具数据 + 20 教程 + 双语切换 + SEO + 发布(批次 A)

---

## 附录 A:和之前 docs/ 文件夹的关系

| 文件 | 关系 |
|---|---|
| `/docs/README.md` | 行业全景,是 AgentStore 的**研究基础** |
| `/docs/cex-agents.md` | 工具库 CEX 类冷启动数据源 |
| `/docs/dex-agents.md` | 工具库 DEX 类冷启动数据源 |
| `/docs/ai-native-projects.md` | 工具库 AI 框架类冷启动数据源 |
| `/docs/mcp-ecosystem.md` | 工具库各类冷启动数据源 + 榜单基础数据 |
| `/docs/product-plan.md` | **作废**(那是"做 MCP 矩阵"方案,现在转为做 AgentStore 平台) |
| `/docs/validation-report.md` | 自营工具将来的优先级(M7 后用)|

**建议**:`/docs/` 保留不动,作为 AgentStore 的内容原料库;AgentStore 开发都在 `/agentstore/` 下。

---

## 附录 B:术语对照表(保证团队说同一语言)

| 概念 | 我们叫什么 |
|---|---|
| 加密货币 AI 工具(无论是 MCP 还是 Agent Skill 还是 SDK) | **工具**(tool) |
| 工具的某个具体功能 | **动作**(action) |
| 用户跑 AI 的程序(Claude Desktop / Cursor / Eliza ...) | **runtime** |
| 用户选的一组工具 | **工具箱**(toolbox) |
| 用户可分享的工具箱 URL | **工具箱页**(box page) |
| 工具作者 / 组织 | **创作者**(creator) |
| 站内评分 | **AgentStore 分**(AgentStore Score) |
| 我们自己未来做的工具 | **AgentStore Studio 工具** |

---

**PRD 结束**。所有决策已替你定,可以直接进入 `/agentstore/src/` 开发。下一步待确认:是否现在开始搭 Next.js 脚手架和数据模型?
