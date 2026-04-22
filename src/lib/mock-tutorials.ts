export type Tutorial = {
  slug: string;
  title: { en: string; zh: string };
  excerpt: { en: string; zh: string };
  level: 'intro' | 'intermediate' | 'advanced';
  readTime: number;
  views?: number;        // 可选,没有真实统计时不展示
  tag: { en: string; zh: string };
  accent: string;
  topic: string;
  author: string;
  authorAvatar: string;
  publishedAt: string;
  toolSlugs: string[];
  body?: { en: string; zh: string };     // 可选,没写完时显示 "即将上线"
};

/**
 * 教程元数据(标题 / 简介 / 分类)— 我们计划写的内容
 * 具体正文(body)和浏览量(views)在真实写/发布之前都留空
 * UI 对没有 body 的教程显示 "full content coming"
 */
export const tutorials: Tutorial[] = [
  {
    slug: 'tested-80-kukapay',
    title: {
      en: 'We\'re testing 80 kukapay MCPs — full deep dive coming',
      zh: '我们正在测 80 个 kukapay MCP — 深度评测准备中',
    },
    excerpt: {
      en: 'GitHub stars lie. Real install data tells a different story.',
      zh: 'GitHub star 骗人。真实装机量讲另一个故事。',
    },
    level: 'advanced',
    readTime: 10,
    tag: { en: 'Deep dive', zh: '深度' },
    accent: 'from-violet-500 to-fuchsia-500',
    topic: 'editorial',
    author: 'AgentStore Editors',
    authorAvatar: '✨',
    publishedAt: '2026-04-18',
    toolSlugs: ['polymarket-mcp', 'blockscout-mcp', 'cryptoiz-mcp'],
  },
  {
    slug: 'claude-hyperliquid-guide',
    title: {
      en: 'The complete guide to playing Hyperliquid with Claude',
      zh: '用 Claude 玩 Hyperliquid 的完整指南',
    },
    excerpt: {
      en: 'From setup to spotting liquidation cascades.',
      zh: '从装工具到识别爆仓 cascade。',
    },
    level: 'intermediate',
    readTime: 15,
    tag: { en: 'Tutorial', zh: '教程' },
    accent: 'from-cyan-500 to-blue-600',
    topic: 'hyperliquid',
    author: 'AgentStore Editors',
    authorAvatar: '✨',
    publishedAt: '2026-04-15',
    toolSlugs: ['hyperliquid-python-sdk', 'mektigboy-server-hyperliquid'],
  },
  {
    slug: 'anthropic-openclaw-fallout',
    title: {
      en: 'What Anthropic banning OpenClaw means for agent trading',
      zh: 'Anthropic 封 OpenClaw 对 agent 交易意味着什么',
    },
    excerpt: {
      en: 'The economic model of autonomous agents just shifted.',
      zh: '自主 agent 的经济模型刚刚变了。',
    },
    level: 'intro',
    readTime: 5,
    tag: { en: 'Industry', zh: '行业' },
    accent: 'from-amber-500 to-rose-500',
    topic: 'editorial',
    author: 'AgentStore Editors',
    authorAvatar: '✨',
    publishedAt: '2026-04-11',
    toolSlugs: [],
  },
  {
    slug: 'funding-arb-explained',
    title: {
      en: 'Funding arbitrage in 2026: why cross-DEX matters',
      zh: '2026 年的 funding 套利:为什么跨 DEX 更重要',
    },
    excerpt: {
      en: 'Hyperliquid, dYdX, GMX — a new cross-venue game.',
      zh: 'Hyperliquid、dYdX、GMX — 新的跨所游戏。',
    },
    level: 'intermediate',
    readTime: 12,
    tag: { en: 'Strategy', zh: '策略' },
    accent: 'from-indigo-500 to-purple-500',
    topic: 'funding',
    author: 'AgentStore Editors',
    authorAvatar: '✨',
    publishedAt: '2026-04-08',
    toolSlugs: ['kukapay-funding-rates-mcp'],
  },
  {
    slug: 'set-up-your-first-mcp',
    title: {
      en: 'Set up your first crypto MCP in Claude Desktop',
      zh: '给 Claude Desktop 装你的第一个加密 MCP',
    },
    excerpt: {
      en: 'No code, no JSON hand-editing.',
      zh: '不用写代码,不用手改 JSON。',
    },
    level: 'intro',
    readTime: 5,
    tag: { en: 'Getting started', zh: '入门' },
    accent: 'from-emerald-500 to-teal-500',
    topic: 'beginner',
    author: 'AgentStore Editors',
    authorAvatar: '✨',
    publishedAt: '2026-04-05',
    toolSlugs: ['blockscout-mcp', 'coingecko-mcp'],
  },
  {
    slug: 'anti-rug-workflow',
    title: {
      en: 'The anti-rug workflow for memecoin buyers',
      zh: '买 memecoin 前该跑的防 rug 工作流',
    },
    excerpt: {
      en: 'A safety pipeline under 30 seconds per token.',
      zh: '每个币 30 秒内的安全 pipeline。',
    },
    level: 'intermediate',
    readTime: 8,
    tag: { en: 'Safety', zh: '安全' },
    accent: 'from-rose-500 to-red-500',
    topic: 'security',
    author: 'AgentStore Editors',
    authorAvatar: '✨',
    publishedAt: '2026-04-02',
    toolSlugs: ['goplus-mcp', 'kukapay-rug-check-mcp'],
  },
  {
    slug: 'choosing-agent-framework',
    title: {
      en: 'ElizaOS vs Solana Agent Kit vs GOAT — which to use?',
      zh: 'ElizaOS vs Solana Agent Kit vs GOAT — 该用哪个?',
    },
    excerpt: {
      en: 'Depends on whether you care about EVM, Solana, or both.',
      zh: '取决于你在乎 EVM、Solana 还是两者都要。',
    },
    level: 'intermediate',
    readTime: 10,
    tag: { en: 'Comparison', zh: '对比' },
    accent: 'from-sky-500 to-blue-500',
    topic: 'framework',
    author: 'AgentStore Editors',
    authorAvatar: '✨',
    publishedAt: '2026-03-30',
    toolSlugs: ['elizaos', 'solana-agent-kit', 'goat-sdk'],
  },
  {
    slug: 'polymarket-edge-ideas',
    title: {
      en: '3 edge ideas on Polymarket your AI can execute',
      zh: '3 个 Polymarket 上 AI 能执行的 edge 思路',
    },
    excerpt: {
      en: 'News-odds lag, inter-market arb, calibration-vs-crowd.',
      zh: '新闻-赔率时滞、跨市场套利、校准 vs 大众。',
    },
    level: 'advanced',
    readTime: 13,
    tag: { en: 'Strategy', zh: '策略' },
    accent: 'from-fuchsia-500 to-pink-500',
    topic: 'polymarket',
    author: 'AgentStore Editors',
    authorAvatar: '✨',
    publishedAt: '2026-03-27',
    toolSlugs: ['polymarket-mcp'],
  },
  {
    slug: 'okx-140-tools-review',
    title: {
      en: 'OKX Agent Trade Kit review: which of the 140 tools matter',
      zh: 'OKX Agent Trade Kit 评测:140 工具里真正重要的',
    },
    excerpt: {
      en: 'Most exchange toolkits are docs-level. This one is production.',
      zh: '大多数交易所工具只是文档级,这一个是生产级。',
    },
    level: 'intermediate',
    readTime: 11,
    tag: { en: 'Review', zh: '评测' },
    accent: 'from-zinc-500 to-slate-600',
    topic: 'cex',
    author: 'AgentStore Editors',
    authorAvatar: '✨',
    publishedAt: '2026-03-24',
    toolSlugs: ['okx-agent-trade-kit'],
  },
  {
    slug: 'give-agent-a-wallet',
    title: {
      en: 'How to give your AI agent a wallet — safely',
      zh: '怎么安全地给你的 AI agent 一个钱包',
    },
    excerpt: {
      en: 'Non-custodial signing, spending limits, kill-switches.',
      zh: '非托管签名、消费限额、紧急开关。',
    },
    level: 'intermediate',
    readTime: 9,
    tag: { en: 'Wallets', zh: '钱包' },
    accent: 'from-violet-500 to-indigo-500',
    topic: 'wallet',
    author: 'AgentStore Editors',
    authorAvatar: '✨',
    publishedAt: '2026-03-20',
    toolSlugs: ['phantom-mcp', 'coinbase-agentkit', 'crossmint-agent-wallet'],
  },
];

export function getTutorial(slug: string): Tutorial | null {
  return tutorials.find((t) => t.slug === slug) || null;
}
