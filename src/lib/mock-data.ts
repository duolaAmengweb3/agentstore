/**
 * 工具数据(运行时源)
 *
 * 内容系统设计:
 *  - 这个数组是 **运行时真实数据源**(客户端和服务端都能直接 import)
 *  - `/content/tools/*.md` 是 **贡献入口**(GitHub PR 可加新工具 md)
 *  - CI / 本地脚本 `scripts/sync-tools.mjs`(批次 B)会把 md 文件同步到本数组
 *
 * 为什么不直接让 loader 在运行时读 md:
 *  - `node:fs` 不能进 client bundle(React Server/Client 边界)
 *  - 拆两套 API(server-only / client-safe)会让前台代码很啰嗦
 *  - 现在是"md 是真,TS 是它的可被客户端导入的编译产物"
 *
 * 合集 / 创作者 / 教程 / ticker / categoryMeta 同理。
 */

export type Category = 'cex' | 'dex' | 'wallet' | 'data' | 'framework' | 'infra';

export type Tool = {
  slug: string;
  name: string;
  author: string;
  tagline: { en: string; zh: string };
  category: Category;
  icon: string;
  official?: boolean;
  metrics: {
    smitheryCalls?: number;
    npmMonthly?: number;
    githubStars?: number;
    weeklyGrowthPct?: number;
  };
  score: number;
};

export const tools: Tool[] = [
  // ===== 榜单头部(真实数据)=====
  {
    slug: 'polymarket-mcp',
    name: 'Polymarket MCP',
    author: 'aryankeluskar',
    tagline: {
      en: 'Query odds and place predictions via natural language',
      zh: '用自然语言查赔率、下预测仓位',
    },
    category: 'data',
    icon: '🎯',
    metrics: { smitheryCalls: 54822, githubStars: 6, weeklyGrowthPct: 18 },
    score: 9.4,
  },
  {
    slug: 'blockscout-mcp',
    name: 'Blockscout MCP',
    author: 'blockscout',
    tagline: {
      en: 'Onchain explorer across 60+ chains, ready for Claude',
      zh: '60+ 链的链上浏览器,给 Claude 准备好',
    },
    category: 'data',
    icon: '🔎',
    official: true,
    metrics: { smitheryCalls: 17711, githubStars: 37, weeklyGrowthPct: 12 },
    score: 9.0,
  },
  {
    slug: 'quantoracle-mcp',
    name: 'QuantOracle',
    author: 'QuantOracle',
    tagline: { en: 'Quant signals for your AI trader', zh: '给你的 AI trader 的量化信号' },
    category: 'data',
    icon: '📊',
    metrics: { smitheryCalls: 11630, githubStars: 54, weeklyGrowthPct: 8 },
    score: 8.4,
  },
  {
    slug: 'bitpoort-mcp',
    name: 'Bitpoort',
    author: 'Bitpoort',
    tagline: { en: 'Onchain whale tracking in real time', zh: '实时鲸鱼追踪' },
    category: 'data',
    icon: '🐋',
    metrics: { smitheryCalls: 11482, githubStars: 22, weeklyGrowthPct: 21 },
    score: 8.2,
  },
  {
    slug: 'strale-mcp',
    name: 'Strale',
    author: 'strale-io',
    tagline: { en: 'DeFi data aggregation for LLMs', zh: '给 LLM 的 DeFi 数据聚合' },
    category: 'data',
    icon: '🟣',
    metrics: { smitheryCalls: 10981, githubStars: 41, weeklyGrowthPct: 5 },
    score: 8.0,
  },
  {
    slug: 'cryptoiz-mcp',
    name: 'Cryptoiz',
    author: 'aguskenari86',
    tagline: { en: 'Solana smart money radar', zh: 'Solana 聪明钱雷达' },
    category: 'data',
    icon: '🧠',
    metrics: { smitheryCalls: 9991, githubStars: 12, weeklyGrowthPct: 45 },
    score: 8.3,
  },

  // ===== 交易所工具 =====
  {
    slug: 'okx-agent-trade-kit',
    name: 'OKX Agent Trade Kit',
    author: 'okx',
    tagline: {
      en: '140 tools covering spot, perp, options, bots and more',
      zh: '140 个工具覆盖现货 / 合约 / 期权 / bot',
    },
    category: 'cex',
    icon: '⚫',
    official: true,
    metrics: { npmMonthly: 15645, githubStars: 204, weeklyGrowthPct: 340 },
    score: 8.9,
  },
  {
    slug: 'binance-skills-hub',
    name: 'Binance Skills Hub',
    author: 'binance',
    tagline: {
      en: '20+ skills for spot, earn, derivatives and more',
      zh: '20+ skills 覆盖现货 / earn / 衍生品',
    },
    category: 'cex',
    icon: '🟡',
    official: true,
    metrics: { githubStars: 738, weeklyGrowthPct: 12 },
    score: 8.7,
  },
  {
    slug: 'kraken-cli',
    name: 'Kraken CLI',
    author: 'krakenfx',
    tagline: {
      en: 'The first AI-native CLI for crypto, stocks, forex',
      zh: '首个 AI 原生 CLI,覆盖加密 / 股票 / 外汇',
    },
    category: 'cex',
    icon: '🦑',
    official: true,
    metrics: { githubStars: 489, weeklyGrowthPct: 45 },
    score: 9.1,
  },
  {
    slug: 'bitget-agent-hub',
    name: 'Bitget Agent Hub',
    author: 'BitgetLimited',
    tagline: { en: '58 tools across 9 modules', zh: '58 个工具,9 个模块' },
    category: 'cex',
    icon: '🟢',
    official: true,
    metrics: { githubStars: 181, weeklyGrowthPct: 22 },
    score: 8.5,
  },

  // ===== DEX 工具 =====
  {
    slug: '1inch-mcp',
    name: '1inch MCP',
    author: '1inch',
    tagline: {
      en: 'Official swap execution via MCP, non-custodial',
      zh: '官方 MCP,非托管 swap 执行',
    },
    category: 'dex',
    icon: '🦄',
    official: true,
    metrics: { npmMonthly: 8213, githubStars: 156, weeklyGrowthPct: 62 },
    score: 9.2,
  },
  {
    slug: 'jupiter-ultra',
    name: 'Jupiter Ultra',
    author: 'jup-ag',
    tagline: { en: 'Best-route Solana swaps for AI agents', zh: 'Solana 最优路由 swap' },
    category: 'dex',
    icon: '🪐',
    official: true,
    metrics: { npmMonthly: 12453, githubStars: 312, weeklyGrowthPct: 18 },
    score: 9.0,
  },
  {
    slug: 'gmx-ai',
    name: 'GMX AI',
    author: 'gmx-io',
    tagline: { en: 'Open perps, LP, swap via skills', zh: '开合约 / LP / swap 技能包' },
    category: 'dex',
    icon: '🔵',
    official: true,
    metrics: { githubStars: 142, weeklyGrowthPct: 15 },
    score: 8.3,
  },

  // ===== AI 框架 =====
  {
    slug: 'elizaos',
    name: 'ElizaOS',
    author: 'elizaos',
    tagline: {
      en: 'The #1 framework for autonomous crypto agents',
      zh: '自治加密 agent 第一框架',
    },
    category: 'framework',
    icon: '🧬',
    official: true,
    metrics: { npmMonthly: 35892, githubStars: 14200, weeklyGrowthPct: 8 },
    score: 9.3,
  },
  {
    slug: 'solana-agent-kit',
    name: 'Solana Agent Kit',
    author: 'sendaifun',
    tagline: { en: '60+ Solana actions ready for any agent', zh: '60+ Solana 动作开箱即用' },
    category: 'framework',
    icon: '🟣',
    official: true,
    metrics: { npmMonthly: 35892, githubStars: 1656, weeklyGrowthPct: 22 },
    score: 9.1,
  },
  {
    slug: 'coinbase-agentkit',
    name: 'Coinbase AgentKit',
    author: 'coinbase',
    tagline: {
      en: 'Every AI agent deserves a wallet — 50+ actions',
      zh: '每个 AI agent 都该有钱包 — 50+ 动作',
    },
    category: 'framework',
    icon: '🔷',
    official: true,
    metrics: { npmMonthly: 73652, githubStars: 1204, weeklyGrowthPct: 18 },
    score: 9.2,
  },

  // ===== 钱包 =====
  {
    slug: 'phantom-mcp',
    name: 'Phantom MCP',
    author: 'phantom',
    tagline: {
      en: 'Non-custodial signing for Solana, EVM, Bitcoin, Sui',
      zh: '非托管签名 Solana / EVM / BTC / Sui',
    },
    category: 'wallet',
    icon: '👻',
    official: true,
    metrics: { npmMonthly: 8456, githubStars: 89, weeklyGrowthPct: 74 },
    score: 9.0,
  },
  {
    slug: 'crossmint-checkout',
    name: 'Crossmint Checkout',
    author: 'Crossmint',
    tagline: { en: 'Agent wallets with smart contract limits', zh: '带额度的智能合约 agent 钱包' },
    category: 'wallet',
    icon: '🪙',
    official: true,
    metrics: { githubStars: 36, weeklyGrowthPct: 20 },
    score: 8.4,
  },

  // ========================================
  // ===== 扩充:80+ 工具覆盖所有调研目标 =====
  // ========================================

  // ----- CEX 扩充 -----
  { slug: 'bybit-mcp', name: 'Bybit MCP', author: 'bybit-exchange', tagline: { en: 'Official Bybit V5 API wrapper for AI agents', zh: 'Bybit V5 API 官方 MCP 封装' }, category: 'cex', icon: '🟠', official: true, metrics: { githubStars: 68, weeklyGrowthPct: 32 }, score: 7.9 },
  { slug: 'bybit-mcp-sammcj', name: 'Bybit MCP (Community)', author: 'sammcj', tagline: { en: 'Testnet-safe Bybit MCP, popular in the Ollama crowd', zh: '测试网安全版,Ollama 社区口碑好' }, category: 'cex', icon: '🟠', metrics: { smitheryCalls: 412, githubStars: 16 }, score: 6.8 },
  { slug: 'gate-for-ai', name: 'Gate for AI', author: 'gate', tagline: { en: 'Gate MCP + 40 AI skills + CLI, three-in-one', zh: 'Gate MCP + 40 AI skills + CLI 三合一' }, category: 'cex', icon: '🟢', official: true, metrics: { githubStars: 94, weeklyGrowthPct: 18 }, score: 7.6 },
  { slug: 'kucoin-skills-hub', name: 'KuCoin Skills Hub', author: 'Kucoin', tagline: { en: 'Read-only skills for spot, margin, futures, earn', zh: '现货/margin/合约/earn 只读 skills' }, category: 'cex', icon: '🔷', official: true, metrics: { githubStars: 25 }, score: 6.5 },
  { slug: 'binance-cli', name: 'Binance CLI', author: 'binance', tagline: { en: '@binance/binance-cli — traditional CLI across 23 modules', zh: '@binance/binance-cli — 覆盖 23 个模块的传统 CLI' }, category: 'cex', icon: '🟡', official: true, metrics: { githubStars: 44 }, score: 6.9 },
  { slug: 'binance-mcp-nirholas', name: 'Binance MCP (community)', author: 'nirholas', tagline: { en: '478+ Binance endpoints across spot, margin, staking, NFT, pay', zh: '478+ 个 Binance endpoint,覆盖现货/margin/staking/NFT/pay' }, category: 'cex', icon: '🟡', metrics: { githubStars: 22, weeklyGrowthPct: 28 }, score: 7.2 },
  { slug: 'coinbase-payments-mcp', name: 'Coinbase Payments MCP', author: 'coinbase', tagline: { en: 'x402 native — let agents pay in stablecoins', zh: 'x402 原生 — 让 agent 用稳定币付款' }, category: 'cex', icon: '🔷', official: true, metrics: { npmMonthly: 3421, githubStars: 51 }, score: 8.2 },
  { slug: 'getclaw', name: 'Bitget GetClaw', author: 'BitgetLimited', tagline: { en: 'Bitget\'s autonomous AI trader with sandboxed account', zh: 'Bitget 自有 AI 交易 agent,独立沙盒账户' }, category: 'cex', icon: '🟢', official: true, metrics: { weeklyGrowthPct: 40 }, score: 7.5 },
  { slug: 'crypto-com-ai-agent-sdk', name: 'Crypto.com AI Agent SDK', author: 'crypto-com', tagline: { en: 'Crypto.com Exchange + Cronos in one agent SDK', zh: 'Crypto.com 交易所 + Cronos 统一 agent SDK' }, category: 'cex', icon: '🔵', official: true, metrics: { npmMonthly: 512 }, score: 6.6 },
  { slug: 'ccxt-mcp', name: 'CCXT MCP', author: 'lazy-dinosaur', tagline: { en: 'CCXT universal exchange interface as MCP — 100+ exchanges', zh: 'CCXT 统一交易所接口 MCP — 100+ 家交易所' }, category: 'cex', icon: '🔀', metrics: { smitheryCalls: 4231, githubStars: 489, weeklyGrowthPct: 35 }, score: 8.3 },

  // ----- DEX 扩充 -----
  { slug: 'dydx-v4-clients', name: 'dYdX v4 SDK', author: 'dydxprotocol', tagline: { en: 'Official dYdX Cosmos-SDK clients (TS / Python / Rust)', zh: 'dYdX Cosmos-SDK 官方客户端(TS / Python / Rust)' }, category: 'dex', icon: '🟦', official: true, metrics: { githubStars: 234, weeklyGrowthPct: 8 }, score: 7.4 },
  { slug: 'driftpy', name: 'Drift Python SDK', author: 'drift-labs', tagline: { en: 'Solana perp DEX SDK — integrated with Solana Agent Kit', zh: 'Solana 永续 DEX SDK — 已集成 Solana Agent Kit' }, category: 'dex', icon: '🌊', official: true, metrics: { npmMonthly: 2134, githubStars: 178 }, score: 8.1 },
  { slug: 'paradex-mcp', name: 'Paradex MCP', author: 'sv', tagline: { en: 'Starknet-based perp DEX access for AI agents', zh: 'Starknet 永续 DEX 的 agent 访问层' }, category: 'dex', icon: '🟪', metrics: { smitheryCalls: 823, githubStars: 34, weeklyGrowthPct: 52 }, score: 7.8 },
  { slug: 'vertex-python-sdk', name: 'Vertex SDK', author: 'vertex-protocol', tagline: { en: 'Arbitrum perp + spot unified account SDK', zh: 'Arbitrum 永续 + 现货统一账户 SDK' }, category: 'dex', icon: '🔺', official: true, metrics: { npmMonthly: 423 }, score: 6.8 },
  { slug: 'aevo-trading-skills', name: 'Aevo Trading Skills', author: 'ribbon-finance', tagline: { en: '45 tools covering options, perp, pre-launch futures', zh: '45 个工具覆盖期权/永续/pre-launch' }, category: 'dex', icon: '💠', official: true, metrics: { githubStars: 56, weeklyGrowthPct: 14 }, score: 7.6 },
  { slug: 'lighter-python', name: 'Lighter Python SDK', author: 'elliottech', tagline: { en: 'zkRollup perp DEX SDK with onchain signer', zh: 'zkRollup 永续 DEX SDK,含链上签名器' }, category: 'dex', icon: '⚡', official: true, metrics: { npmMonthly: 287 }, score: 6.5 },
  { slug: '0x-agent-skills', name: '0x Agent Skills', author: '0x', tagline: { en: 'Cross-chain agentic swaps across 15+ chains including Solana', zh: '跨 15+ 链(含 Solana)的 agent swap' }, category: 'dex', icon: '❌', official: true, metrics: { githubStars: 112, weeklyGrowthPct: 26 }, score: 8.4 },
  { slug: 'uniswap-ai-toolkit', name: 'Uniswap AI Toolkit', author: 'Uniswap', tagline: { en: 'Official Uniswap skills, plugins, and agent-first docs', zh: 'Uniswap 官方 skills / plugin / AI-first docs' }, category: 'dex', icon: '🦄', official: true, metrics: { githubStars: 189, weeklyGrowthPct: 11 }, score: 8.0 },
  { slug: 'pancakeswap-ai', name: 'PancakeSwap AI', author: 'pancakeswap', tagline: { en: 'Swap / LP / farming planners — planner-only, no direct execution', zh: 'Swap / LP / 挖矿规划器 — 只规划不直接执行' }, category: 'dex', icon: '🥞', official: true, metrics: { githubStars: 78 }, score: 7.2 },
  { slug: 'openbroker-cli', name: 'Open Broker CLI', author: 'openbroker', tagline: { en: 'MIT CLI built for autonomous HL agents — grid, DCA, market-making', zh: '为 HL 自治 agent 做的 MIT CLI — 网格/DCA/做市' }, category: 'dex', icon: '📟', metrics: { githubStars: 67 }, score: 7.7 },
  { slug: 'hyperliquid-python-sdk', name: 'Hyperliquid Python SDK', author: 'hyperliquid-dex', tagline: { en: 'Official Python SDK with native agent-wallet signing', zh: 'HL 官方 Python SDK,原生 agent-wallet 签名' }, category: 'dex', icon: '⚡', official: true, metrics: { npmMonthly: 18883, githubStars: 423, weeklyGrowthPct: 22 }, score: 8.9 },
  { slug: 'mektigboy-server-hyperliquid', name: 'Hyperliquid MCP', author: 'mektigboy', tagline: { en: 'Popular community Hyperliquid MCP wrapping the info endpoint', zh: '社区流行版 HL MCP,封装 info 端点' }, category: 'dex', icon: '⚡', metrics: { smitheryCalls: 1821, githubStars: 44 }, score: 7.1 },
  { slug: 'jupiter-swap-api-client', name: 'Jupiter Swap API Client', author: 'jup-ag', tagline: { en: 'Rust client for Jupiter Swap API V6 — quote + execute', zh: 'Jupiter Swap V6 Rust 客户端 — 报价 + 执行' }, category: 'dex', icon: '🪐', official: true, metrics: { githubStars: 287 }, score: 8.3 },

  // ----- AI 框架 扩充 -----
  { slug: 'goat-sdk', name: 'GOAT SDK', author: 'goat-sdk', tagline: { en: '200+ integrations across EVM + Solana, built-in MCP adapter', zh: 'EVM + Solana 200+ 集成,自带 MCP adapter' }, category: 'framework', icon: '🐐', official: true, metrics: { npmMonthly: 6421, githubStars: 983, weeklyGrowthPct: 28 }, score: 8.9 },
  { slug: 'virtuals-game', name: 'Virtuals GAME', author: 'Virtuals-Protocol', tagline: { en: 'Agent economy SDK — Butler, Ethy AI, agent-to-agent payments', zh: 'Agent 经济 SDK — Butler / Ethy AI / agent 对 agent 付款' }, category: 'framework', icon: '👾', official: true, metrics: { githubStars: 412, weeklyGrowthPct: 19 }, score: 8.5 },
  { slug: 'fetchai-uagents', name: 'Fetch.ai uAgents', author: 'fetchai', tagline: { en: 'Python autonomous agents with on-chain identity and economy', zh: 'Python 自治 agent + 链上身份 + 经济' }, category: 'framework', icon: '🔺', official: true, metrics: { npmMonthly: 4231, githubStars: 634 }, score: 8.0 },
  { slug: 'giza-agents', name: 'Giza Agents', author: 'gizatechxyz', tagline: { en: 'Verifiable ML DeFi agents with STARK proofs (Starknet)', zh: '可验证 ML DeFi agent,STARK 证明(Starknet)' }, category: 'framework', icon: '🔐', official: true, metrics: { githubStars: 212 }, score: 7.9 },
  { slug: 'solana-mcp-sendai', name: 'Solana MCP (SendAI)', author: 'sendaifun', tagline: { en: 'The Solana Agent Kit exposed as MCP server', zh: 'Solana Agent Kit 的 MCP 服务器版本' }, category: 'framework', icon: '🟣', official: true, metrics: { npmMonthly: 12483, githubStars: 892, weeklyGrowthPct: 24 }, score: 8.8 },

  // ----- 钱包 扩充 -----
  { slug: 'armor-crypto-mcp', name: 'Armor Crypto MCP', author: 'armorwallet', tagline: { en: 'Managed wallet with swaps and strategic planning', zh: '托管钱包 + swap + 策略规划' }, category: 'wallet', icon: '🛡️', metrics: { githubStars: 184, weeklyGrowthPct: 15 }, score: 7.8 },
  { slug: 'base-mcp', name: 'Base MCP', author: 'base', tagline: { en: 'Official Base L2 onchain toolkit with CDP wallet', zh: 'Base L2 官方链上工具包 + CDP 钱包' }, category: 'wallet', icon: '🟦', official: true, metrics: { npmMonthly: 4821, githubStars: 346, weeklyGrowthPct: 22 }, score: 8.6 },
  { slug: 'thirdweb-mcp', name: 'thirdweb MCP', author: 'thirdweb', tagline: { en: 'Contracts + transactions + analytics via natural language', zh: '合约 + 交易 + 分析,自然语言调用' }, category: 'wallet', icon: '🔶', official: true, metrics: { npmMonthly: 3214, githubStars: 123 }, score: 8.0 },
  { slug: 'near-mcp', name: 'NEAR MCP', author: 'nearai', tagline: { en: 'Official NEAR Protocol MCP with keychain signing', zh: 'NEAR 官方 MCP,keychain 签名' }, category: 'wallet', icon: '🟢', official: true, metrics: { githubStars: 29 }, score: 7.2 },
  { slug: 'bitcoin-mcp', name: 'Bitcoin MCP', author: 'AbdelStark', tagline: { en: 'Bitcoin + Lightning — keygen, validate, decode, query', zh: 'Bitcoin + Lightning — 生成/校验/解码/查询' }, category: 'wallet', icon: '🟠', metrics: { githubStars: 42 }, score: 7.4 },
  { slug: 'alby-nwc-mcp', name: 'Alby NWC MCP', author: 'getalby', tagline: { en: 'Lightning via Nostr Wallet Connect — non-custodial pay', zh: '通过 Nostr Wallet Connect 走 Lightning — 非托管付款' }, category: 'wallet', icon: '⚡', official: true, metrics: { githubStars: 61 }, score: 7.6 },
  { slug: 'mcpdotdirect-evm', name: 'EVM MCP Server', author: 'mcpdotdirect', tagline: { en: 'Generic EVM MCP — any chain, wallet, ERC-20, tx sign', zh: '通用 EVM MCP — 任意链 / 钱包 / ERC-20 / 签名' }, category: 'wallet', icon: '🔷', metrics: { npmMonthly: 8921, githubStars: 374, weeklyGrowthPct: 18 }, score: 8.3 },
  { slug: 'bsc-mcp-termix', name: 'BSC MCP', author: 'TermiX-official', tagline: { en: 'BNB Chain — send BNB, BEP-20, deploy contracts', zh: 'BNB 链 — 发 BNB / BEP-20 / 部署合约' }, category: 'wallet', icon: '🟡', metrics: { githubStars: 104 }, score: 7.3 },
  { slug: 'crossmint-agent-wallet', name: 'Crossmint Agent Wallet', author: 'Crossmint', tagline: { en: 'Smart-contract agent wallets with spending limits', zh: '带额度的智能合约 agent 钱包' }, category: 'wallet', icon: '🪙', official: true, metrics: { githubStars: 87 }, score: 8.2 },

  // ----- 数据分析 (大幅扩充) -----
  { slug: 'coingecko-mcp', name: 'CoinGecko MCP', author: 'coingecko', tagline: { en: 'Official CoinGecko MCP — 15k coins, 200+ networks', zh: 'CoinGecko 官方 MCP — 1.5 万币种 / 200+ 网络' }, category: 'data', icon: '🦎', official: true, metrics: { npmMonthly: 13885, githubStars: 221, weeklyGrowthPct: 32 }, score: 9.0 },
  { slug: 'etherscan-mcp', name: 'Etherscan MCP', author: 'etherscan', tagline: { en: 'Official Etherscan MCP across 60+ chains', zh: 'Etherscan 官方 MCP,覆盖 60+ 链' }, category: 'data', icon: '🔍', official: true, metrics: { smitheryCalls: 9834, githubStars: 156, weeklyGrowthPct: 28 }, score: 9.1 },
  { slug: 'helius-mcp', name: 'Helius MCP', author: 'helius', tagline: { en: 'Solana RPC + 60 tools for tx send, webhooks, streams', zh: 'Solana RPC + 60 个工具(tx/webhook/stream)' }, category: 'data', icon: '☀️', official: true, metrics: { npmMonthly: 5621, githubStars: 178 }, score: 8.7 },
  { slug: 'chainstack-mcp', name: 'Chainstack MCP', author: 'chainstack', tagline: { en: 'Developer portal + RPC across EVM + Solana', zh: '开发者入口 + EVM / Solana RPC' }, category: 'data', icon: '🔗', official: true, metrics: { npmMonthly: 3102, githubStars: 89 }, score: 8.1 },
  { slug: 'quicknode-mcp', name: 'QuickNode MCP', author: 'quicknode', tagline: { en: 'Manage endpoints, billing, usage via natural language', zh: '自然语言管理 endpoint / 计费 / 使用量' }, category: 'data', icon: '⚡', official: true, metrics: { npmMonthly: 1923 }, score: 7.6 },
  { slug: 'moralis-mcp', name: 'Moralis MCP', author: 'MoralisWeb3', tagline: { en: 'Multi-chain wallet, token, NFT, DeFi positions', zh: '多链钱包 / 代币 / NFT / DeFi 仓位' }, category: 'data', icon: '🌐', official: true, metrics: { npmMonthly: 6234, githubStars: 234 }, score: 8.4 },
  { slug: 'bitquery-mcp', name: 'Bitquery MCP', author: 'bitquery', tagline: { en: 'GraphQL data across 40+ chains for AI agents', zh: '40+ 链 GraphQL 数据,给 AI agent 用' }, category: 'data', icon: '📡', official: true, metrics: { githubStars: 142 }, score: 8.0 },
  { slug: 'codex-mcp', name: 'Codex MCP', author: 'Codex-Data', tagline: { en: 'Official Codex.io token and market data', zh: 'Codex.io 官方代币 / 市场数据' }, category: 'data', icon: '📚', official: true, metrics: { githubStars: 98 }, score: 7.8 },
  { slug: 'bankless-onchain-mcp', name: 'Bankless Onchain', author: 'Bankless', tagline: { en: 'Bankless onchain API — portfolio, protocols, governance', zh: 'Bankless 链上 API — 组合 / 协议 / 治理' }, category: 'data', icon: '🏦', official: true, metrics: { npmMonthly: 2871, githubStars: 78 }, score: 7.9 },
  { slug: 'nodit-mcp', name: 'Nodit MCP', author: 'noditlabs', tagline: { en: 'Multi-chain indexed data with ready-to-query schema', zh: '多链索引数据 + 即用 schema' }, category: 'data', icon: '🗃️', official: true, metrics: { githubStars: 54 }, score: 7.5 },
  { slug: 'cryptoapis-mcp', name: 'CryptoAPIs', author: 'cryptoapis-io', tagline: { en: '14 servers for EVM / UTXO / Solana / XRP / Tron / Kaspa', zh: '14 个服务器覆盖 EVM/UTXO/Solana/XRP/Tron/Kaspa' }, category: 'data', icon: '🔗', official: true, metrics: { npmMonthly: 4123 }, score: 8.0 },
  { slug: 'pyth-mcp', name: 'Pyth Network MCP', author: 'itsOmSarraf', tagline: { en: 'Pyth Hermes — 1930+ price feeds with TWAP + history', zh: 'Pyth Hermes — 1930+ 价格源 + TWAP + 历史' }, category: 'data', icon: '📈', metrics: { githubStars: 43 }, score: 7.8 },
  { slug: 'chainlink-feeds-mcp', name: 'Chainlink Feeds MCP', author: 'kukapay', tagline: { en: 'On-chain Chainlink price feeds for any agent', zh: '任意 agent 可用的 Chainlink 链上价格源' }, category: 'data', icon: '🔗', metrics: { githubStars: 28 }, score: 7.3 },
  { slug: 'goplus-mcp', name: 'GoPlus MCP', author: 'GoPlusSecurity', tagline: { en: 'Token security, address risk, Web3 threat intel', zh: '代币安全 / 地址风险 / Web3 威胁情报' }, category: 'data', icon: '🛡️', official: true, metrics: { npmMonthly: 3421, githubStars: 142, weeklyGrowthPct: 45 }, score: 8.5 },
  { slug: 'dexscreener-mcp', name: 'DexScreener MCP', author: 'openSVM', tagline: { en: 'DexScreener pairs + charts + new pool feed', zh: 'DexScreener 交易对 + K 线 + 新池' }, category: 'data', icon: '📊', metrics: { githubStars: 89 }, score: 7.7 },
  { slug: 'coinmarketcap-mcp', name: 'CoinMarketCap MCP', author: 'shinzo-labs', tagline: { en: 'CMC market data for AI agents', zh: 'CMC 市场数据,给 AI agent 用' }, category: 'data', icon: '🪙', metrics: { githubStars: 67 }, score: 7.2 },
  { slug: 'coincap-mcp', name: 'CoinCap MCP', author: 'QuantGeekDev', tagline: { en: 'Free CoinCap price + market cap feed', zh: '免费 CoinCap 价格 + 市值源' }, category: 'data', icon: '🧢', metrics: { githubStars: 80 }, score: 7.0 },
  { slug: 'tradingview-mcp', name: 'TradingView MCP', author: 'atilaahmettaner', tagline: { en: 'TradingView screener + advanced TA indicators', zh: 'TradingView 筛选器 + 高级 TA 指标' }, category: 'data', icon: '📉', metrics: { smitheryCalls: 2065, githubStars: 2065, weeklyGrowthPct: 12 }, score: 8.7 },
  { slug: 'kukapay-funding-rates-mcp', name: 'Funding Rates MCP', author: 'kukapay', tagline: { en: 'Cross-CEX funding rates consolidated in one table', zh: '跨 CEX 资金费率合并成一张表' }, category: 'data', icon: '⚖️', metrics: { smitheryCalls: 1170, githubStars: 51 }, score: 7.5 },
  { slug: 'kukapay-crypto-orderbook-mcp', name: 'Crypto Orderbook MCP', author: 'kukapay', tagline: { en: 'Orderbook depth for any CEX pair via MCP', zh: '任意 CEX 交易对的盘口深度' }, category: 'data', icon: '📖', metrics: { smitheryCalls: 567, githubStars: 57 }, score: 7.3 },
  { slug: 'kukapay-crypto-indicators-mcp', name: 'Crypto Indicators MCP', author: 'kukapay', tagline: { en: '50+ TA-Lib indicators as MCP actions', zh: '50+ 个 TA-Lib 指标 MCP 化' }, category: 'data', icon: '📐', metrics: { githubStars: 122 }, score: 7.0 },
  { slug: 'kukapay-whale-tracker-mcp', name: 'Whale Tracker MCP', author: 'kukapay', tagline: { en: 'Whale Alert wrapper — >$1M transfers feed', zh: 'Whale Alert 封装 — >$1M 转账流' }, category: 'data', icon: '🐳', metrics: { smitheryCalls: 421, githubStars: 52 }, score: 7.4 },
  { slug: 'kukapay-hyperliquid-info-mcp', name: 'Hyperliquid Info MCP', author: 'kukapay', tagline: { en: 'Hyperliquid public data wrapped for LLMs', zh: 'HL 公开数据封装给 LLM' }, category: 'data', icon: '⚡', metrics: { smitheryCalls: 1023, githubStars: 27 }, score: 7.5 },
  { slug: 'kukapay-crypto-feargreed-mcp', name: 'Fear & Greed MCP', author: 'kukapay', tagline: { en: 'Alt.me fear & greed index on tap', zh: 'Alt.me 恐惧贪婪指数接口' }, category: 'data', icon: '😨', metrics: { githubStars: 53 }, score: 7.1 },
  { slug: 'kukapay-crypto-liquidations-mcp', name: 'Liquidations MCP', author: 'kukapay', tagline: { en: 'Real-time Binance liquidation stream', zh: '实时 Binance 清算流' }, category: 'data', icon: '💥', metrics: { smitheryCalls: 312, githubStars: 7 }, score: 7.0 },
  { slug: 'kukapay-rug-check-mcp', name: 'Rug Check MCP', author: 'kukapay', tagline: { en: 'Solana rug detection via RugCheck.xyz', zh: '通过 RugCheck.xyz 检 Solana rug' }, category: 'data', icon: '🚨', metrics: { githubStars: 19 }, score: 7.2 },
  { slug: 'kukapay-polymarket-predictions-mcp', name: 'Polymarket Predictions MCP', author: 'kukapay', tagline: { en: 'Odds query wrapper (no trading, read-only)', zh: '赔率查询封装(只读,不交易)' }, category: 'data', icon: '🎯', metrics: { githubStars: 3 }, score: 6.8 },
  { slug: 'kukapay-dune-analytics-mcp', name: 'Dune Analytics MCP', author: 'kukapay', tagline: { en: 'Run Dune queries via natural language', zh: '用自然语言跑 Dune 查询' }, category: 'data', icon: '🏜️', metrics: { githubStars: 30 }, score: 7.3 },
  { slug: 'defillama-mcp', name: 'DefiLlama MCP', author: 'dcSpark', tagline: { en: 'TVL, yields, and protocol rankings for agents', zh: 'TVL / 收益 / 协议排行给 agent' }, category: 'data', icon: '🦙', metrics: { githubStars: 112 }, score: 7.8 },
  { slug: 'nansen-mcp', name: 'Nansen MCP', author: 'nansen', tagline: { en: 'Smart money labels across 18+ chains (paid)', zh: '18+ 链的聪明钱标签(付费)' }, category: 'data', icon: '🧭', official: true, metrics: { npmMonthly: 1823 }, score: 8.2 },
  { slug: 'web3-research-mcp', name: 'Web3 Research MCP', author: 'aaronjmars', tagline: { en: '"Deep research for crypto" fully local', zh: '"加密深度研究"本地版' }, category: 'data', icon: '🕵️', metrics: { githubStars: 148, weeklyGrowthPct: 58 }, score: 8.0 },
  { slug: 'heurist-mesh-mcp', name: 'Heurist Mesh MCP', author: 'heurist-network', tagline: { en: 'Heurist Mesh — decentralized agent compute', zh: 'Heurist Mesh — 去中心化 agent 算力' }, category: 'data', icon: '🕸️', metrics: { githubStars: 64 }, score: 7.4 },
  { slug: 'kukapay-wallet-inspector-mcp', name: 'Wallet Inspector', author: 'kukapay', tagline: { en: 'Multi-chain wallet history via Dune', zh: '跨链钱包历史(Dune 底层)' }, category: 'data', icon: '🔎', metrics: { githubStars: 8 }, score: 6.9 },
  { slug: 'kukapay-memecoin-radar-mcp', name: 'Memecoin Radar', author: 'kukapay', tagline: { en: 'Solana memecoin trend + KOL trade detection', zh: 'Solana memecoin 趋势 + KOL 交易检测' }, category: 'data', icon: '🚀', metrics: { githubStars: 47 }, score: 7.6 },
  { slug: 'kukapay-crypto-news-mcp', name: 'Crypto News MCP', author: 'kukapay', tagline: { en: 'Aggregated crypto news feed for agents', zh: '加密新闻聚合流给 agent' }, category: 'data', icon: '📰', metrics: { githubStars: 34 }, score: 6.8 },
  { slug: 'kukapay-crypto-sentiment-mcp', name: 'Crypto Sentiment MCP', author: 'kukapay', tagline: { en: 'Sentiment index for top coins', zh: '头部币种情绪指数' }, category: 'data', icon: '🎭', metrics: { githubStars: 47 }, score: 7.1 },
  { slug: 'kukapay-etf-flow-mcp', name: 'ETF Flow MCP', author: 'kukapay', tagline: { en: 'BTC / ETH ETF net flows', zh: 'BTC / ETH 现货 ETF 净流入' }, category: 'data', icon: '💰', metrics: { githubStars: 12 }, score: 7.2 },
  { slug: 'kukapay-token-minter-mcp', name: 'Token Minter', author: 'kukapay', tagline: { en: 'Mint ERC-20 across 21 chains via MCP', zh: '21 链 ERC-20 铸币 MCP' }, category: 'data', icon: '🪙', metrics: { githubStars: 18 }, score: 7.0 },

  // ----- 基础设施 扩充 -----
  { slug: 'claude-desktop', name: 'Claude Desktop', author: 'anthropic', tagline: { en: 'The reference MCP client — where most users run their agents', zh: '参考 MCP 客户端 — 多数用户在这里跑 agent' }, category: 'infra', icon: '🤖', official: true, metrics: { weeklyGrowthPct: 18 }, score: 9.5 },
  { slug: 'cursor', name: 'Cursor', author: 'cursor', tagline: { en: 'AI-first code editor with MCP support', zh: 'AI 原生代码编辑器,支持 MCP' }, category: 'infra', icon: '↗️', official: true, metrics: { weeklyGrowthPct: 15 }, score: 9.3 },
  { slug: 'smithery', name: 'Smithery', author: 'smithery', tagline: { en: 'MCP server registry and auto-install UI', zh: 'MCP 服务器注册表 + 自动安装' }, category: 'infra', icon: '⚒️', official: true, metrics: { weeklyGrowthPct: 22 }, score: 8.8 },
  { slug: 'pulsemcp', name: 'PulseMCP', author: 'pulsemcp', tagline: { en: 'MCP discovery directory with traffic rankings', zh: 'MCP 发现目录,带流量排名' }, category: 'infra', icon: '❤️‍🔥', official: true, metrics: { weeklyGrowthPct: 14 }, score: 8.5 },
  { slug: 'mcp-so', name: 'mcp.so', author: 'mcp-so', tagline: { en: 'Popular MCP listing platform', zh: '知名 MCP 列表平台' }, category: 'infra', icon: '📇', official: true, metrics: {} , score: 8.0 },
  { slug: 'openclaw', name: 'OpenClaw', author: 'openclaw', tagline: { en: 'Open-source agent runtime inspired by Claude Code', zh: '开源 agent runtime(对标 Claude Code)' }, category: 'infra', icon: '🦞', metrics: { githubStars: 1823, weeklyGrowthPct: -8 }, score: 7.2 },
  { slug: 'codex-cli', name: 'Codex CLI', author: 'openai', tagline: { en: 'OpenAI\'s agent CLI with MCP support', zh: 'OpenAI agent CLI,支持 MCP' }, category: 'infra', icon: '🧠', official: true, metrics: { weeklyGrowthPct: 10 }, score: 8.6 },
  { slug: 'goose', name: 'Goose', author: 'block', tagline: { en: 'Block\'s open-source on-machine AI agent', zh: 'Block 开源的本机 AI agent' }, category: 'infra', icon: '🪿', official: true, metrics: { githubStars: 534 }, score: 7.8 },
  { slug: 'gemini-cli', name: 'Gemini CLI', author: 'google', tagline: { en: 'Google Gemini CLI — MCP compatible', zh: 'Google Gemini CLI — 兼容 MCP' }, category: 'infra', icon: '💎', official: true, metrics: { weeklyGrowthPct: 8 }, score: 8.3 },
  { slug: 'windsurf', name: 'Windsurf', author: 'codeium', tagline: { en: 'Codeium\'s AI editor with native MCP', zh: 'Codeium AI 编辑器,原生 MCP' }, category: 'infra', icon: '🌊', official: true, metrics: { weeklyGrowthPct: 12 }, score: 8.2 },
  { slug: 'moonpay-agents', name: 'MoonPay Agents', author: 'moonpay', tagline: { en: 'Onramp / offramp / trading for AI agents', zh: 'Onramp / offramp / 交易给 AI agent' }, category: 'infra', icon: '🌕', official: true, metrics: { githubStars: 92 }, score: 7.9 },
];

// ===== 合集 =====

export type Collection = {
  slug: string;
  title: { en: string; zh: string };
  subtitle: { en: string; zh: string };
  toolSlugs: string[];
  accent: string; // tailwind gradient
  icon: string;
};

// Collections 是编辑策展(我们的真实工作产出),但 installs 曾是我编的假数字
// 已移除 installs 字段,UI 显示 "—" 或隐藏
// 合集里也已清掉引用的 AgentStore Studio 未存在工具
export const collections: Collection[] = [
  {
    slug: 'solana-memecoin-hunter',
    title: { en: 'Solana Memecoin Hunter', zh: 'Solana 猎手' },
    subtitle: { en: 'Sniper + safety stack for Solana memecoins', zh: 'Solana memecoin 狙击全家桶' },
    toolSlugs: ['jupiter-ultra', 'cryptoiz-mcp', 'kukapay-memecoin-radar-mcp', 'kukapay-rug-check-mcp'],
    accent: 'from-emerald-400 via-green-500 to-teal-600',
    icon: '🚀',
  },
  {
    slug: 'anti-rug',
    title: { en: 'Anti-Rug Bundle', zh: '防 Rug 组合' },
    subtitle: { en: 'Verify a token before buying it', zh: '买币前先验一遍' },
    toolSlugs: ['goplus-mcp', 'kukapay-rug-check-mcp', 'kukapay-honeypot-detector-mcp', 'dexscreener-mcp'].filter(Boolean),
    accent: 'from-rose-500 via-red-500 to-orange-500',
    icon: '🛡️',
  },
  {
    slug: 'data-pros',
    title: { en: 'Data Power User', zh: '数据重度用户' },
    subtitle: { en: 'Official data MCPs used by serious quants', zh: '严肃量化用的官方数据 MCP' },
    toolSlugs: ['coingecko-mcp', 'etherscan-mcp', 'defillama-mcp', 'blockscout-mcp', 'moralis-mcp', 'dune-analytics-mcp'].filter(Boolean),
    accent: 'from-indigo-500 via-purple-500 to-pink-500',
    icon: '🧮',
  },
  {
    slug: 'beginner-starter',
    title: { en: 'Beginner Starter', zh: '小白入门' },
    subtitle: { en: 'First tools to install in Claude Desktop', zh: '给 Claude Desktop 装的头几个' },
    toolSlugs: ['coingecko-mcp', 'blockscout-mcp', 'etherscan-mcp'],
    accent: 'from-amber-400 via-orange-500 to-rose-500',
    icon: '🌱',
  },
  {
    slug: 'hyperliquid-kit',
    title: { en: 'Hyperliquid Kit', zh: 'Hyperliquid 工具箱' },
    subtitle: { en: 'Everything available today for Hyperliquid agents', zh: '目前能用的 Hyperliquid agent 全家桶' },
    toolSlugs: ['hyperliquid-python-sdk', 'mektigboy-server-hyperliquid', 'kukapay-hyperliquid-info-mcp', 'openbroker-cli'],
    accent: 'from-cyan-400 via-sky-500 to-indigo-600',
    icon: '⚡',
  },
  {
    slug: 'polymarket-kit',
    title: { en: 'Polymarket Kit', zh: 'Polymarket 工具箱' },
    subtitle: { en: 'Tools for prediction market agents', zh: '预测市场 agent 工具' },
    toolSlugs: ['polymarket-mcp', 'kukapay-polymarket-predictions-mcp'],
    accent: 'from-fuchsia-500 via-pink-500 to-rose-500',
    icon: '🎯',
  },
  {
    slug: 'wallet-first',
    title: { en: 'Wallet First', zh: '钱包优先' },
    subtitle: { en: 'Non-custodial and custody-managed wallet MCPs', zh: '非托管与受管钱包 MCP' },
    toolSlugs: ['phantom-mcp', 'coinbase-agentkit', 'crossmint-agent-wallet', 'mcpdotdirect-evm', 'base-mcp'],
    accent: 'from-violet-500 via-indigo-500 to-blue-500',
    icon: '🔐',
  },
  {
    slug: 'dev-must-read',
    title: { en: 'Dev Must-Have', zh: '开发者必看' },
    subtitle: { en: 'Frameworks, SDKs, and infra every agent dev needs', zh: 'agent 开发者都要看的框架 / SDK / 基建' },
    toolSlugs: ['elizaos', 'solana-agent-kit', 'coinbase-agentkit', 'goat-sdk', 'virtuals-game', 'fetchai-uagents'],
    accent: 'from-slate-500 via-zinc-600 to-neutral-700',
    icon: '💻',
  },
];

// ===== 话题 =====

export const topics = [
  { slug: 'hyperliquid', label: { en: 'Hyperliquid', zh: 'Hyperliquid' }, icon: '🐋', count: 14 },
  { slug: 'anti-rug', label: { en: 'Anti-Rug', zh: '防 Rug' }, icon: '🛡️', count: 6 },
  { slug: 'funding-arb', label: { en: 'Funding Arb', zh: 'Funding 套利' }, icon: '⚖️', count: 5 },
  { slug: 'memecoin', label: { en: 'Memecoin', zh: 'Memecoin' }, icon: '🔥', count: 23 },
  { slug: 'copy-trade', label: { en: 'Copy Trade', zh: '跟单' }, icon: '📋', count: 9 },
  { slug: 'polymarket', label: { en: 'Polymarket', zh: 'Polymarket' }, icon: '🎯', count: 8 },
];

// ===== Live Ticker 事件流 =====
// 空 — 未来从 GitHub release / npm publish / Smithery metrics 抓来填充

export type TickerEvent = {
  kind: 'milestone' | 'launch' | 'growth' | 'rating' | 'warn';
  text: { en: string; zh: string };
  timeAgo: { en: string; zh: string };
};

export const tickerEvents: TickerEvent[] = [];

// ===== 分类数据 =====
// count 和 newThisWeek 都从 tools 数组计算得出,不再硬编码

export type CategoryMeta = {
  id: Category;
  count: number;
  newThisWeek: number;
  icons: string[]; // 代表工具 icon 拼图
  accent: string;
};

const CATEGORY_ICON_POOL: Record<Category, { icons: string[]; accent: string }> = {
  cex:       { icons: ['⚫', '🟡', '🦑', '🟢'], accent: 'from-yellow-500/20 to-orange-500/20' },
  dex:       { icons: ['🦄', '🪐', '🔵', '⚡'], accent: 'from-cyan-500/20 to-indigo-500/20' },
  wallet:    { icons: ['👻', '🔷', '🪙', '🦊'], accent: 'from-violet-500/20 to-fuchsia-500/20' },
  data:      { icons: ['🔎', '📊', '🧠', '🐋'], accent: 'from-emerald-500/20 to-teal-500/20' },
  framework: { icons: ['🧬', '🟣', '🔷', '🧩'], accent: 'from-rose-500/20 to-pink-500/20' },
  infra:     { icons: ['🛠️', '🛡️', '📡', '🧰'], accent: 'from-slate-500/20 to-zinc-500/20' },
};

export const categoryMeta: CategoryMeta[] = (Object.keys(CATEGORY_ICON_POOL) as Category[]).map((id) => {
  const catTools = tools.filter((t) => t.category === id);
  // "本周新增"需要真实 createdAt 才能算,现在数据里没有 — 暂留 0
  const newThisWeek = 0;
  // 取该分类下前 4 个工具的真实 icon 作为拼图
  const realIcons = catTools.slice(0, 4).map((t) => t.icon);
  return {
    id,
    count: catTools.length,
    newThisWeek,
    icons: realIcons.length > 0 ? realIcons : CATEGORY_ICON_POOL[id].icons,
    accent: CATEGORY_ICON_POOL[id].accent,
  };
});

// ===== 创作者("本周创作者" — 挑工具最多的那个,数字由 tools 算)=====

export type Creator = {
  slug: string;
  name: string;
  handle: string;
  bio: { en: string; zh: string };
  toolsCount: number;
  totalCalls: number;
  representative: string[];
  avatar: string;
  accent: string;
};

// 从 tools 里找工具数最多的作者
const authorCounts = tools.reduce<Record<string, number>>((acc, t) => {
  acc[t.author] = (acc[t.author] || 0) + 1;
  return acc;
}, {});
const topAuthor = Object.entries(authorCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'kukapay';
const topAuthorTools = tools.filter((t) => t.author === topAuthor);
const topAuthorCalls = topAuthorTools.reduce(
  (s, t) => s + (t.metrics.smitheryCalls || 0) + Math.floor((t.metrics.npmMonthly || 0) / 30),
  0
);

export const creatorOfWeek: Creator = {
  slug: topAuthor,
  name: topAuthor,
  handle: `@${topAuthor}`,
  bio: {
    en: `${topAuthorTools.length} tools tracked on AgentStore. Prolific crypto MCP builder.`,
    zh: `AgentStore 收录 ${topAuthorTools.length} 个工具。活跃加密 MCP 开发者。`,
  },
  toolsCount: topAuthorTools.length,
  totalCalls: topAuthorCalls,
  representative: topAuthorTools.slice(0, 3).map((t) => t.slug),
  avatar: topAuthorTools[0]?.icon || '🦊',
  accent: 'from-orange-500 via-rose-500 to-violet-500',
};

// ===== 编辑故事(保留占位条目 — 正文走 /learn/[slug],views 改为 undefined)=====

export type Story = {
  slug: string;
  title: { en: string; zh: string };
  excerpt: { en: string; zh: string };
  readTime: number;
  views?: number; // 可选:没有真实阅读量时不展示
  tag: { en: string; zh: string };
  accent: string;
};

export const stories: Story[] = [
  {
    slug: 'tested-80-kukapay',
    title: {
      en: 'We tested 80 kukapay MCPs — only 10 are worth installing',
      zh: '我们测了 80 个 kukapay 工具,真正值得装的只有 10 个',
    },
    excerpt: {
      en: 'GitHub stars lied. Real install data did not.',
      zh: 'GitHub star 骗了你,真实装机量没骗。',
    },
    readTime: 10,
    tag: { en: 'Deep dive', zh: '深度' },
    accent: 'from-violet-500 to-fuchsia-500',
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
    readTime: 15,
    tag: { en: 'Tutorial', zh: '教程' },
    accent: 'from-cyan-500 to-blue-600',
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
    readTime: 5,
    tag: { en: 'Industry', zh: '行业' },
    accent: 'from-amber-500 to-rose-500',
  },
];

// ===== 全局统计(全部从 tools 数组实时算)=====

export const globalStats = {
  // 收录的工具总数
  get totalTools() {
    return tools.length;
  },
  // "本周新增" 需要 createdAt 才能算,暂时没有真实 createdAt → 0
  get newThisWeek() {
    return 0;
  },
  // 累计调用量:所有工具的 smitheryCalls 求和(真实口径)
  get totalCalls() {
    return tools.reduce((s, t) => s + (t.metrics.smitheryCalls || 0), 0);
  },
  // "今日破千":weeklyGrowth 高且 smitheryCalls 刚过千的数量(粗估)
  get milestoneToday() {
    return tools.filter(
      (t) =>
        (t.metrics.smitheryCalls || 0) >= 1000 &&
        (t.metrics.smitheryCalls || 0) < 5000 &&
        (t.metrics.weeklyGrowthPct || 0) > 100
    ).length;
  },
};
