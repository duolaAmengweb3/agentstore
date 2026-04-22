# AgentStore

**Web3 AI Agent 应用商店** — The App Store for crypto AI agents.

完整产品 PRD 见 [`PRD.md`](./PRD.md)。

---

## 🧑‍💻 本地开发

前置:**Node.js 20+** 和 **npm**(或 pnpm / yarn)。

```bash
# 进项目目录
cd agentstore

# 装依赖(第一次)
npm install

# 起开发服务器
npm run dev
```

打开浏览器:
- **英文**:http://localhost:3000/en
- **中文**:http://localhost:3000/zh
- 访问 `/` 会自动根据浏览器语言重定向

---

## 📜 常用命令

```bash
npm run dev          # 开发(热重载)
npm run build        # 生产构建
npm run start        # 跑生产构建
npm run typecheck    # TypeScript 类型检查
```

---

## 📁 代码结构

```
agentstore/
├── PRD.md                          ← 完整产品文档
├── package.json
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── src/
│   ├── middleware.ts               ← i18n 路由中间件
│   ├── i18n/
│   │   ├── routing.ts              ← locales / defaultLocale
│   │   ├── request.ts              ← 服务器端 locale 解析
│   │   └── messages/
│   │       ├── en.json             ← 英文文案
│   │       └── zh.json             ← 中文文案
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── globals.css             ← 全局样式 + 酷炫动画
│   │   └── [locale]/
│   │       ├── layout.tsx          ← locale + theme provider
│   │       └── page.tsx            ← 首页装配
│   ├── components/
│   │   ├── theme-provider.tsx
│   │   ├── theme-toggle.tsx
│   │   ├── locale-switch.tsx
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   └── home/                   ← 首页 12 个模块,各自独立
│   │       ├── nav.tsx             ← 毛玻璃 sticky 导航
│   │       ├── hero-search.tsx     ← 大搜索 + 发光统计
│   │       ├── live-ticker.tsx     ← 实时事件流(marquee 动画)
│   │       ├── rankings-grid.tsx   ← 3 栏榜单(综合 / 增长 / 新星)
│   │       ├── category-tiles.tsx  ← 6 分类瓷砖
│   │       ├── collections-grid.tsx← 8 张合集渐变卡
│   │       ├── today-feed.tsx      ← Product Hunt 式 feed
│   │       ├── creator-stories.tsx ← 创作者 + 编辑故事双栏
│   │       ├── wizard-cta.tsx      ← AI 向导引导
│   │       ├── topic-tiles.tsx     ← 热门话题
│   │       ├── learn-subscribe.tsx ← 学习 + 订阅
│   │       └── footer.tsx
│   └── lib/
│       ├── utils.ts                ← cn / formatCompact / timeAgo
│       └── mock-data.ts            ← 批次 A 的首页 mock 数据
│
└── README.md
```

---

## 🎨 视觉设计

### 核心原则

**"Apple 的皮,Web3 的骨"**:
- **视觉语言**(皮):Apple App Store / Linear / Raycast 风格(圆角、胶囊按钮、发光、丝滑动效)
- **信息密度**(骨):DefiLlama / Dexscreener / Product Hunt 风格(首屏高密度、数字一等公民、多列并排)

### 关键视觉

- **默认深色主题**(crypto 用户主场)
- **品牌色**:紫 `#8B5CF6` → 蓝 `#6366F1` → 青 `#06B6D4` 135° 渐变
- **发光数字**:实时统计用 `.glow-number` 带 drop-shadow
- **毛玻璃 Nav**:滚动时激活,`backdrop-filter: blur(18px)`
- **Live Ticker**:`.marquee-track` CSS 动画无缝循环,hover 暂停
- **浮动 orbs**:Hero 背景用 `.orb` + `animate-float-slow` 营造氛围
- **网格背景**:`.bg-grid` + `.mask-fade-y` 从上往下淡出
- **Hover 上浮**:`.lift-on-hover` 统一交互反馈

所有工具类定义在 [`src/app/globals.css`](./src/app/globals.css)。

---

## 🌏 国际化

- 路由前缀式:`/en/...` `/zh/...`
- 中间件自动检测浏览器语言并重定向
- 文案放 `src/i18n/messages/<locale>.json`
- 切换按钮在导航右上(🌐 图标)
- `next-intl` 提供 `useTranslations` / `useLocale` hooks

添加新语言:
1. `src/i18n/routing.ts` 加 locale
2. `src/i18n/messages/` 加对应 JSON
3. `src/lib/mock-data.ts` 里双语字段补上

---

## 🧪 Mock 数据

批次 A 先用 `src/lib/mock-data.ts` 的硬编码数据,数字参照真实调研(`/docs/validation-report.md`):
- Polymarket MCP 54,822 calls(真)
- Coinbase AgentKit 73K npm monthly(真)
- OKX Agent Trade Kit 15,645 npm(真)
- 其它按真实量级编造

**批次 B 迁移计划**:
- 工具数据源改成 `/content/tools/*.md`(frontmatter)
- 构建时扫描 markdown → 生成页面
- 抓取 cron(Vercel)每 6 小时更新 metrics

---

## 🚀 部署到 Vercel

1. 推到 GitHub
2. Vercel 导入仓库
3. 环境变量:`NEXT_PUBLIC_SITE_URL=https://agentstore.xyz`
4. 部署自动完成

---

## 🛣️ 开发路线图

当前完成:**批次 A · 首页**

✅ 五轴 Nav / i18n / 主题切换
✅ Hero 搜索区 + 实时全局统计
✅ Live Ticker 实时流
✅ 三栏榜单
✅ 六大分类瓷砖
✅ 精选合集 Grid
✅ 最新更新 Feed(Product Hunt 式)
✅ 创作者 + 故事双栏
✅ AI 向导 CTA
✅ 热门话题
✅ 学习 + 订阅
✅ Footer

**下一步**:
- 工具详情页 `/apps/:slug`
- 合集详情页 `/collections/:slug`
- 创作者页 `/creators/:slug`
- 榜单页 `/rankings/:type`
- 教程页 `/learn/...`
- Mock → 真实 markdown 内容系统
- 定时抓取 cron

详见 [`PRD.md`](./PRD.md) §14。
