/**
 * 工具详情页需要的扩展数据(actions、安装命令、示例 prompt、评价、相关)
 * 按 slug 查表,找不到就用默认模板兜底
 */

export type InstallCommand = {
  runtime: string;          // "Claude Desktop" | "Cursor" | "Codex" | ...
  kind: 'config' | 'cli';
  code: string;             // 显示出来让用户复制的
};

export type ActionSpec = {
  name: string;
  description: { en: string; zh: string };
  params?: string[];
};

export type Review = {
  author: string;
  avatar: string;
  stars: number;
  date: string;
  body: { en: string; zh: string };
  tags?: string[];
};

export type ToolDetails = {
  description: { en: string; zh: string };
  features: { en: string[]; zh: string[] };
  pros: { en: string[]; zh: string[] };
  cons: { en: string[]; zh: string[] };
  prompts: { en: string; zh: string }[];   // 装完可以这么问
  actions: ActionSpec[];
  install: InstallCommand[];
  prerequisites: { en: string[]; zh: string[] };
  security: {
    openSource: boolean;
    audited: boolean;
    keyHandling: 'local' | 'server' | 'third-party' | 'none';
    paid: boolean;
  };
  reviews: Review[];
  reviewStats: { avg: number; count: number; distribution: [number, number, number, number, number] }; // 5 4 3 2 1
  screenshots: string[]; // 占位:我们用品牌渐变颜色作 hero
  rankings: { label: { en: string; zh: string }; value: string; delta?: number }[];
  related: string[]; // tool slugs
  tutorials: { slug: string; title: { en: string; zh: string }; readTime: number }[];
};

/** 默认模板,任何 tool 找不到自己的 details 都用它 */
function defaultDetails(slug: string, name: string): ToolDetails {
  return {
    description: {
      en: `${name} is a crypto AI agent tool that integrates with Claude Desktop, Cursor, and other MCP-compatible runtimes.`,
      zh: `${name} 是一个加密 AI agent 工具,可接入 Claude Desktop、Cursor 等 MCP 兼容运行时。`,
    },
    features: { en: [], zh: [] },
    pros: { en: [], zh: [] },
    cons: { en: [], zh: [] },
    prompts: [],
    actions: [],
    install: [
      {
        runtime: 'Claude Desktop',
        kind: 'config',
        code: `{
  "mcpServers": {
    "${slug}": {
      "command": "npx",
      "args": ["-y", "${slug}"]
    }
  }
}`,
      },
      {
        runtime: 'Cursor',
        kind: 'cli',
        code: `npx -y ${slug}`,
      },
      {
        runtime: 'Claude Code',
        kind: 'cli',
        code: `claude mcp add ${slug} -- npx -y ${slug}`,
      },
    ],
    prerequisites: {
      en: ['Node.js 20+', 'An MCP-compatible client'],
      zh: ['Node.js 20+', 'MCP 兼容的客户端'],
    },
    security: { openSource: true, audited: false, keyHandling: 'local', paid: false },
    // 评价系统在批次 B 上线(要登录 + 防刷);目前空态
    reviews: [],
    reviewStats: { avg: 0, count: 0, distribution: [0, 0, 0, 0, 0] },
    screenshots: ['from-violet-600 to-fuchsia-600', 'from-indigo-600 to-cyan-500', 'from-emerald-500 to-teal-600'],
    rankings: [],
    related: [],
    tutorials: [],
  };
}

/** 手工写的几个重点工具的 details,其它全部走 default */
const handwritten: Record<string, Partial<ToolDetails>> = {
  'polymarket-mcp': {
    description: {
      en: "Polymarket MCP is the single most-used crypto MCP server, with 54,822 recorded calls on Smithery despite only 6 GitHub stars. It exposes 45+ actions covering markets, odds, positions, trading, and analytics. Ask your Claude what Polymarket thinks the probability of any event is — and let it place orders for you.",
      zh: 'Polymarket MCP 是 Smithery 上调用量第一的加密 MCP(54,822 次),GitHub 只有 6 star 却被狂用。45+ 个动作覆盖市场、赔率、仓位、交易、分析。让你的 Claude 查 Polymarket 上任何事件的概率,并代你下单。',
    },
    features: {
      en: ['45+ actions across market / odds / positions / trade', 'Read + write operations', 'Historical odds data', 'News → odds correlation helpers'],
      zh: ['45+ 个动作,覆盖市场 / 赔率 / 仓位 / 交易', '支持读 + 写', '历史赔率数据', '新闻 ↔ 赔率关联辅助'],
    },
    prompts: [
      { en: "What does Polymarket think is the probability of BTC closing above 100k by year end?", zh: '年底前 BTC 收在 10 万以上的概率 Polymarket 觉得多少?' },
      { en: "Find markets where odds moved more than 10% in the last 24h", zh: '找 24 小时内赔率变化超 10% 的市场' },
      { en: "What's my P&L across all Polymarket positions this month?", zh: '我这个月 Polymarket 所有仓位的盈亏?' },
      { en: "Buy $100 of YES on the 'Trump visits China' market", zh: '在 "Trump 访华" 市场买 100 刀 YES' },
    ],
    rankings: [
      { label: { en: 'Overall', zh: '总榜' }, value: '#1', delta: 0 },
      { label: { en: 'Data category', zh: '数据类' }, value: '#1', delta: 0 },
      { label: { en: 'This week', zh: '本周' }, value: '#2', delta: 1 },
    ],
  },
  'okx-agent-trade-kit': {
    description: {
      en: 'The official OKX Agent Trade Kit. 140 tools across 10 modules — spot, USDT-M / Coin-M perps, options, delivery futures, bots, earn, event contracts, market data, account, and news. Your API key stays local; read-only mode and module filtering are built in.',
      zh: 'OKX 官方 Agent Trade Kit。10 个模块、140 个工具:现货、USDT-M / Coin-M 合约、期权、交割合约、bot、earn、事件合约、市场数据、账户、新闻。API key 只在本地,内置只读模式和模块过滤。',
    },
    features: {
      en: ['140 tools / 10 modules', 'Read-only mode', 'Module filtering', 'Per-call rate limiting', 'Local-only API keys'],
      zh: ['140 工具 / 10 模块', '只读模式', '模块过滤', '单调用速率限制', 'API key 仅本地'],
    },
    prompts: [
      { en: "What's my OKX perpetual P&L this week?", zh: '我这周 OKX 永续的盈亏?' },
      { en: 'Create a grid bot buying ETH from 2800 to 3200 with 20 levels', zh: '开一个从 2800-3200 跨 20 档的 ETH 网格' },
      { en: 'Show top gainers in the last 4h with volume > $10M', zh: '4 小时涨幅最高 + 成交 >1000 万的币' },
      { en: 'Close all my USDT-M perp positions with < 20% PnL', zh: '平掉所有 PnL < 20% 的 USDT-M 永续' },
    ],
    rankings: [
      { label: { en: 'CEX category', zh: 'CEX 类' }, value: '#1', delta: 0 },
      { label: { en: 'Overall', zh: '总榜' }, value: '#7', delta: 3 },
      { label: { en: 'Weekly growth', zh: '本周增长' }, value: '#4', delta: 2 },
    ],
    related: ['binance-skills-hub', 'kraken-cli', 'bitget-agent-hub'],
  },
};

/** 外部统一入口 */
export function getToolDetails(slug: string, name: string): ToolDetails {
  const base = defaultDetails(slug, name);
  const hw = handwritten[slug];
  if (!hw) return base;
  return {
    ...base,
    ...hw,
    // 子字段深合并(features/pros/cons 结构化)
    features: hw.features ?? base.features,
    prompts: hw.prompts ?? base.prompts,
    rankings: hw.rankings ?? base.rankings,
    related: hw.related ?? base.related,
  };
}
