# AgentStore 自动化部署

## 架构图

```
  开发(本地)                           定时(每 6h)
  ────────                            ──────────
  git push main                     GH Actions cron
       │                                  │
       │                                  │  fetch-metrics.mjs
       │                                  │  → GitHub API(stars / push)
       │                                  │  → npm API(monthly downloads)
       │                                  │  → PyPI(downloads)
       │                                  │  更新 content/tools/*.md frontmatter
       │                                  │  sync:tools → generated/tools.ts
       │                                  │  git commit + push
       │ ◄────────────────────────────────┘
       ▼
    GitHub Repo
       │
       │  Vercel 监听 push 事件
       ▼
    Vercel(自动 build + deploy)
       │  npm run build
       │    └─ npm run sync:tools(md → ts)
       │    └─ next build(含所有静态页预渲染)
       ▼
   agentstore.xyz(永远最新)
```

## 三条自动化管道

### 管道 1:数据自动刷新(每 6 小时)
触发:`.github/workflows/refresh-metrics.yml` 里的 cron(UTC 00/06/12/18)
流程:
1. GH Actions checkout 代码
2. `npm ci` 装依赖
3. `node scripts/fetch-metrics.mjs` 读 `content/tools/*.md` 里的 `fetch:` 源,请求真实 API
4. 更新 md frontmatter 里的 `metrics` 字段(githubStars / npmMonthly / weeklyGrowthPct 等)
5. `npm run sync:tools` 把 md 同步到 TS
6. 有变更就 `git commit + push`
7. Vercel 监听到 push,自动重新 build + deploy

**结果**:无人工介入,站上的 star 数 / 下载量最多延迟 6 小时。

### 管道 2:代码自动上线(每次 push)
触发:`git push origin main`
流程:
1. Vercel GitHub integration 监听
2. 自动跑 `npm run build`(含 `sync:tools`)
3. 构建成功 → 替换生产环境

**结果**:写完代码 `git push` 就完事,1-2 分钟后生产生效。

### 管道 3:PR 预览(每个 PR)
触发:GitHub PR
流程:
1. Vercel 给每个 PR 生成独立预览 URL
2. `.github/workflows/ci.yml` 跑 typecheck + build
3. 评审看预览 → 合并 → 自动上线

## 初次联动(手动做一次)

### Step 1: 推 GitHub

```bash
cd agentstore

# 如果还没登 gh CLI
gh auth login

# 创建仓库并推
gh repo create agentstore --public --source=. --remote=origin --push
```

不用 `gh` 也行:

```bash
# 先在 GitHub UI 建一个空仓库叫 agentstore
git remote add origin git@github.com:<你>/agentstore.git
git branch -M main
git push -u origin main
```

### Step 2: Vercel 连 GitHub

已部署过的项目直接关联(不重建):

```bash
vercel link      # 选已有项目 agentstore
vercel git connect  # 连到 GitHub repo
```

或者 Dashboard:
> Project Settings → Git → Connect Git Repository

### Step 3: 确认 GH Actions 生效

- GitHub 仓库 → Actions 标签 → 应该能看到 `CI` 和 `Refresh tool metrics`
- 手动触发一次 metrics 刷新验证:Actions → Refresh tool metrics → Run workflow
- 几分钟后看 commits,会有一条 "chore(metrics): refresh ..." 是 bot 提交的

## 环境变量

在 Vercel Dashboard → Settings → Environment Variables 加:

| 变量 | 值 | 用途 |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://agentstore.xyz` 或 vercel 域名 | sitemap / og image 正确引用 |

## 本地命令速查

```bash
# 开发
npm run dev

# 生产构建(含 sync:tools)
npm run build

# 手动刷新数据(本地干跑不写文件)
DRY_RUN=1 node scripts/fetch-metrics.mjs

# 真正刷新 + 提交
node scripts/fetch-metrics.mjs
npm run sync:tools
git add content/tools src/lib/generated
git commit -m "chore(metrics): manual refresh"
git push
```

## 监测

- Vercel Dashboard → Deployments:看每次部署耗时、哪个 commit 触发
- GitHub Actions:看 cron 历史、失败原因
- Vercel Analytics(免费开):看 MAU / DAU / 页面
