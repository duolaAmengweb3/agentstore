import { tools, type Tool } from './mock-data';

export type CreatorProfile = {
  slug: string;
  name: string;
  handle: string;
  avatar: string;
  accent: string;
  bio: { en: string; zh: string };
  verified?: boolean;
  twitter?: string;
  github?: string;
  website?: string;
};

const profiles: Record<string, CreatorProfile> = {
  aryankeluskar: {
    slug: 'aryankeluskar',
    name: 'Aryan Keluskar',
    handle: '@aryankeluskar',
    avatar: '🎯',
    accent: 'from-fuchsia-500 via-pink-500 to-rose-500',
    bio: {
      en: 'Built the most-used crypto MCP on the internet. 6 stars on GitHub, 54,822 calls on Smithery.',
      zh: '做了全网调用量最高的加密 MCP。GitHub 6 star,Smithery 54,822 次调用。',
    },
    twitter: 'aryankeluskar',
    github: 'aryankeluskar',
  },
  blockscout: {
    slug: 'blockscout',
    name: 'Blockscout',
    handle: '@blockscoutcom',
    avatar: '🔎',
    accent: 'from-emerald-500 via-teal-500 to-cyan-500',
    verified: true,
    bio: {
      en: 'The open-source onchain explorer for 60+ chains. Official MCP gives your AI access to every block.',
      zh: '60+ 链的开源链上浏览器。官方 MCP 让你的 AI 能看每一个 block。',
    },
    twitter: 'blockscoutcom',
    github: 'blockscout',
    website: 'https://blockscout.com',
  },
  okx: {
    slug: 'okx',
    name: 'OKX',
    handle: '@okx',
    avatar: '⚫',
    accent: 'from-zinc-400 via-slate-500 to-neutral-700',
    verified: true,
    bio: {
      en: 'Top global crypto exchange. Official Agent Trade Kit with 140 tools across spot / perp / options.',
      zh: '全球头部加密交易所。官方 Agent Trade Kit 140 工具覆盖现货 / 永续 / 期权。',
    },
    twitter: 'okx',
    github: 'okx',
    website: 'https://okx.com',
  },
  binance: {
    slug: 'binance',
    name: 'Binance',
    handle: '@binance',
    avatar: '🟡',
    accent: 'from-amber-400 via-yellow-500 to-orange-500',
    verified: true,
    bio: {
      en: 'The world\'s largest crypto exchange. Skills Hub ships 20+ curated skills — including Ai Pro.',
      zh: '全球最大加密交易所。Skills Hub 20+ 精选 skill — 含 Ai Pro。',
    },
    twitter: 'binance',
    github: 'binance',
    website: 'https://binance.com',
  },
  krakenfx: {
    slug: 'krakenfx',
    name: 'Kraken',
    handle: '@krakenfx',
    avatar: '🦑',
    accent: 'from-violet-500 via-purple-500 to-indigo-600',
    verified: true,
    bio: {
      en: 'The first AI-native CLI for crypto, stocks, forex and derivatives. Single-binary. NDJSON output.',
      zh: '首个 AI 原生 CLI,覆盖加密 / 股票 / 外汇 / 衍生品。单二进制 + NDJSON 输出。',
    },
    github: 'krakenfx',
  },
  BitgetLimited: {
    slug: 'BitgetLimited',
    name: 'Bitget',
    handle: '@bitgetglobal',
    avatar: '🟢',
    accent: 'from-emerald-400 via-green-500 to-teal-500',
    verified: true,
    bio: {
      en: '58 tools across 9 modules. Ships GetClaw — Bitget\'s own AI trader.',
      zh: '58 个工具 9 个模块。自有 AI 交易员 GetClaw。',
    },
    github: 'BitgetLimited',
  },
  '1inch': {
    slug: '1inch',
    name: '1inch',
    handle: '@1inch',
    avatar: '🦄',
    accent: 'from-rose-500 via-pink-500 to-red-500',
    verified: true,
    bio: {
      en: 'DEX aggregator. First major DEX to ship official MCP with swap execution — non-custodial.',
      zh: 'DEX 聚合器。首个出官方 MCP 支持 swap 执行的 top DEX,完全非托管。',
    },
    website: 'https://1inch.io',
  },
  'jup-ag': {
    slug: 'jup-ag',
    name: 'Jupiter',
    handle: '@JupiterExchange',
    avatar: '🪐',
    accent: 'from-orange-400 via-amber-500 to-yellow-500',
    verified: true,
    bio: {
      en: 'The Solana DEX aggregator — routing 90%+ of all Solana swap volume.',
      zh: 'Solana DEX 聚合器 — 承载 90%+ 的 Solana swap 成交。',
    },
    github: 'jup-ag',
  },
  coinbase: {
    slug: 'coinbase',
    name: 'Coinbase',
    handle: '@coinbase',
    avatar: '🔷',
    accent: 'from-blue-500 via-sky-500 to-cyan-500',
    verified: true,
    bio: {
      en: '"Every AI agent deserves a wallet." 73,652 monthly npm installs — #1 crypto agent kit.',
      zh: '"Every AI agent deserves a wallet."  月 73,652 次 npm 下载,加密 agent kit #1。',
    },
    twitter: 'coinbase',
    github: 'coinbase',
  },
  elizaos: {
    slug: 'elizaos',
    name: 'ElizaOS',
    handle: '@elizaOS',
    avatar: '🧬',
    accent: 'from-cyan-500 via-sky-500 to-blue-500',
    verified: true,
    bio: {
      en: 'The #1 framework for autonomous crypto agents. 14.2k stars, 45+ plugins.',
      zh: '自治加密 agent 第一框架。14.2k star / 45+ plugin。',
    },
    twitter: 'elizaOS',
    github: 'elizaos',
  },
  sendaifun: {
    slug: 'sendaifun',
    name: 'SendAI',
    handle: '@sendaifun',
    avatar: '🟣',
    accent: 'from-purple-500 via-fuchsia-500 to-pink-500',
    verified: true,
    bio: {
      en: 'Solana Agent Kit — 60+ actions, batteries included. The Solana default.',
      zh: 'Solana Agent Kit — 60+ 动作开箱即用。Solana 默认选择。',
    },
    github: 'sendaifun',
  },
  phantom: {
    slug: 'phantom',
    name: 'Phantom',
    handle: '@phantom',
    avatar: '👻',
    accent: 'from-violet-600 via-purple-600 to-indigo-600',
    verified: true,
    bio: {
      en: 'Non-custodial wallet MCP for Solana / EVM / Bitcoin / Sui. Keys never leave your wallet.',
      zh: '非托管钱包 MCP,覆盖 Solana / EVM / Bitcoin / Sui。钥匙永不出钱包。',
    },
    twitter: 'phantom',
  },
  agentstore: {
    slug: 'agentstore',
    name: 'AgentStore Studio',
    handle: '@agentstorexyz',
    avatar: '✨',
    accent: 'from-violet-500 via-indigo-500 to-cyan-500',
    verified: true,
    bio: {
      en: 'Our in-house tools. Built while reviewing 160+ others — because some gaps we just had to fill.',
      zh: '我们自己做的工具。在评测 160+ 个工具过程里,有些坑我们自己下场填了。',
    },
  },
  kukapay: {
    slug: 'kukapay',
    name: 'kukapay',
    handle: '@kukapay_',
    avatar: '🦊',
    accent: 'from-orange-500 via-rose-500 to-violet-500',
    bio: {
      en: 'One person, 80+ crypto MCPs. The most prolific builder in the space.',
      zh: '一个人,80+ 个加密 MCP。赛道里最高产的 builder。',
    },
    github: 'kukapay',
  },
};

export function getCreator(slug: string): CreatorProfile | null {
  // 精确匹配
  if (profiles[slug]) return profiles[slug];
  // 大小写不敏感回退
  const key = Object.keys(profiles).find((k) => k.toLowerCase() === slug.toLowerCase());
  if (key) return profiles[key];
  // 根据 tools 里第一条 author 匹配的自动生成
  const t = tools.find((t) => t.author === slug);
  if (!t) return null;
  return {
    slug,
    name: slug,
    handle: `@${slug}`,
    avatar: t.icon,
    accent: 'from-slate-500 to-zinc-600',
    bio: {
      en: `Creator of ${tools.filter((x) => x.author === slug).length} tools on AgentStore.`,
      zh: `在 AgentStore 上有 ${tools.filter((x) => x.author === slug).length} 个工具。`,
    },
  };
}

export function getToolsByCreator(slug: string): Tool[] {
  return tools.filter((t) => t.author === slug);
}

export function creatorTotalCalls(slug: string): number {
  return tools
    .filter((t) => t.author === slug)
    .reduce((sum, t) => sum + (t.metrics.smitheryCalls || 0) + Math.floor((t.metrics.npmMonthly || 0) / 30), 0);
}
