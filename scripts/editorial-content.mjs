/**
 * 手写的每工具 editorial 内容:具体 tagline + 2-3 句编辑判断。
 * 全部基于 /docs/ 的调研事实,一次性写,尽量准确。
 *
 * 由 apply-editorial.mjs 消费,写入 content/tools/*.md 的 frontmatter。
 */

export const editorial = {
  // ============ CEX 工具 ============

  'okx-agent-trade-kit': {
    tagline_zh: 'OKX 官方 MCP + CLI,140 个工具覆盖现货 / 合约 / 期权 / bot / earn',
    tagline_en: 'OKX official MCP + CLI — 140 tools across spot / perp / options / bots / earn',
    summary_zh: 'CEX 类功能覆盖最全的一家(10 模块,含 70+ 技术指标)。API key 只在本地,内置只读模式 + 模块过滤 + 限速。想用 OKX 做 agent 交易直接选这个,没有替代方案。',
    summary_en: 'Most complete CEX agent toolkit (10 modules including 70+ TA indicators). API keys stay local, with built-in read-only mode, per-module filtering, and rate limiting. If you want to trade OKX via an agent, this is the only serious choice.',
  },
  'binance-skills-hub': {
    tagline_zh: '币安官方 20+ Skills(Markdown + YAML 格式,可 npx skills add 安装)',
    tagline_en: 'Binance official Skills Hub — 20+ agent skills, npx-installable',
    summary_zh: '币安选的不是出 MCP,而是 Skills 格式(每个 skill 是一个 workflow bundle)。C 端产品 Binance Ai Pro 就建在上面。2026-04 追加了 13 个含 DEX swap / smart money / 合约风险的 skill。',
    summary_en: 'Binance chose skills (workflow bundles in Markdown + YAML) over a single MCP. Powers the Binance Ai Pro consumer product. April 2026 added 13 new skills including DEX swaps, smart money, and contract risk detection.',
  },
  'binance-cli': {
    tagline_zh: '币安官方传统 CLI,23 模块但不是 agent 原生(输出非 machine-first)',
    tagline_en: 'Binance official traditional CLI — 23 modules but not agent-native',
    summary_zh: '成熟但平庸的传统 API 包装,不为 LLM 设计。想在 agent 里用币安,去看 Skills Hub 而不是这个。',
    summary_en: 'Mature but plain REST wrapper — not built for LLM tool use. If you want Binance in an agent workflow, use Skills Hub instead.',
  },
  'binance-mcp-nirholas': {
    tagline_zh: '社区最全的币安 MCP:478+ 个 endpoint 覆盖现货 / margin / staking / NFT / pay',
    tagline_en: 'Community Binance MCP — 478+ endpoints across spot / margin / staking / NFT / pay',
    summary_zh: '不是官方但社区里最全的 binance MCP。star 数不多(22)但端点覆盖最广。适合需要 Binance 某个冷门功能的场景。',
    summary_en: 'Unofficial but the most exhaustive community Binance MCP — 478+ endpoints. Low stars (22) but deep coverage, good for niche Binance features not in official skills.',
  },
  'kraken-cli': {
    tagline_zh: 'Rust 单文件二进制,内置 MCP,NDJSON 输出 — 首个真正 AI-native 的 CLI',
    tagline_en: 'Rust single-binary CLI with built-in MCP, NDJSON output — first truly AI-native CLI',
    summary_zh: '整个 CEX 圈开发者体验天花板。Rust 零依赖单文件、NDJSON 输出(machine-first)、内置 stdio MCP、默认模式下危险操作要确认。覆盖 crypto / 股票 / 外汇 / 永续 317 合约。架构值得抄。',
    summary_en: 'The developer experience benchmark for CEX agent tools. Zero-dependency Rust binary, NDJSON output (machine-first), built-in stdio MCP, danger-action confirmation by default. Covers crypto + 79 tokenized stocks + forex + 317 perp contracts. Worth studying as a reference architecture.',
  },
  'bitget-agent-hub': {
    tagline_zh: 'Bitget 官方 Agent Hub:9 模块 58 个工具(spot/futures/margin/copy/earn 等)',
    tagline_en: 'Bitget official Agent Hub — 58 tools across 9 modules (spot/futures/margin/copy/earn)',
    summary_zh: '紧跟 OKX / 币安的第二梯队。2026-03 追加了 5 个 AI 分析 skill + 19 个数据工具。配套有自家 AI 交易代理 GetClaw。',
    summary_en: 'Second-tier (after OKX / Binance) but tracks them closely. March 2026 added 5 AI analytics skills and 19 data tools. Pairs with Bitget\'s own agent trader, GetClaw.',
  },
  'getclaw': {
    tagline_zh: 'Bitget 自有 AI 交易代理,独立沙盒账户自主下单',
    tagline_en: 'Bitget\'s native AI trading agent — sandboxed sub-account, autonomous execution',
    summary_zh: 'C 端产品,对标 Binance Ai Pro。agent 有独立账户、自主接指令下单,和 MuleRun 合作做 AI Trading Assistant。面向普通用户而非开发者。',
    summary_en: 'Consumer-facing, Binance Ai Pro analogue. Agent runs on a dedicated sub-account, executes orders autonomously from natural-language instructions. Partnered with MuleRun. For end users, not developers.',
  },
  'gate-for-ai': {
    tagline_zh: 'Gate.io 三合一:MCP + 40 个 AI Skills + CLI',
    tagline_en: 'Gate.io three-in-one — MCP + 40 AI Skills + CLI',
    summary_zh: '2026-03-27 才出开发者文档,相对晚。Gate MCP 连 ChatGPT / Claude / OpenClaw 做交易 + 行情 + 钱包 + 链上数据。架构清晰但生态 / star 不如 OKX。',
    summary_en: 'Developer docs only shipped March 2026-03-27 — late to the party. Clean architecture (MCP + skills + CLI) but smaller ecosystem than OKX. Use if you already run Gate.',
  },
  'kucoin-skills-hub': {
    tagline_zh: 'KuCoin 官方 Skills(但只读)— 无法下单 / 撤单 / 转账',
    tagline_en: 'KuCoin official Skills — read-only (no orders, cancels, or transfers)',
    summary_zh: '实验性,只能 GET。25 star,落后 Binance 的 738 Skills Hub 一个 cycle。真的要用 KuCoin 做交易,第三方 MCP 反而更完整。',
    summary_en: 'Experimental — GET-only, can\'t trade. 25 stars, one cycle behind Binance\'s 738-star Skills Hub. Community MCPs actually do more on KuCoin.',
  },
  'bybit-mcp': {
    tagline_zh: 'Bybit 官方 MCP(刚起步),基于 V5 API',
    tagline_en: 'Bybit official MCP (early days) — V5 API wrapper',
    summary_zh: '2026 年才起步,文档还在完善,比 OKX / 币安晚一个周期。社区 MCP(sammcj/bybit-mcp)反而更成熟。',
    summary_en: 'Launched in 2026, docs still being filled in — one cycle behind OKX / Binance. The community MCP (sammcj/bybit-mcp) is actually more mature for now.',
  },
  'bybit-mcp-sammcj': {
    tagline_zh: '社区 Bybit MCP,Ollama 社区口碑好,仅测试网交易',
    tagline_en: 'Community Bybit MCP — popular with Ollama crowd, testnet-only trading',
    summary_zh: '写数据查询最常用的 Bybit MCP(16 star 但装机稳定)。交易只走测试网,安全。适合本地 LLM + Bybit 数据的工作流。',
    summary_en: 'The Bybit MCP most-used with local LLMs (16 stars but steady installs). Trading is testnet-only, which is actually safer. Great for offline Ollama + Bybit data workflows.',
  },
  'coinbase-agentkit': {
    tagline_zh: 'Coinbase 官方:给 AI agent 一个钱包(EVM + Solana + Base),50+ 动作',
    tagline_en: 'Coinbase official — "every AI agent deserves a wallet" (EVM + Solana + Base, 50+ actions)',
    summary_zh: '整个加密 agent 领域 npm 下载冠军(44K/月)。注意:Coinbase 的重心在链上 agent 支付(x402)而非 CEX 交易 — 想用 Coinbase 做 CEX 交易这不是主力选择。',
    summary_en: 'The npm download champion of the whole crypto agent space (44K/mo). Note: Coinbase\'s focus is on-chain agent payments (x402), NOT CEX trading — if you want CEX trading on Coinbase, this isn\'t the primary path.',
  },
  'coinbase-payments-mcp': {
    tagline_zh: 'Coinbase Payments MCP(基于 x402):让 agent 直接用稳定币付款',
    tagline_en: 'Coinbase Payments MCP — let agents pay with stablecoins via x402',
    summary_zh: '不是交易 MCP,是"agent commerce"品类的开创产品。HTTP 402 复活做链上 stablecoin 微支付,Base 链 2 秒到账。Google / AWS / Anthropic / Visa / Mastercard 都加入了 x402 Foundation。',
    summary_en: 'Not a trading MCP — it pioneered the "agent commerce" category. HTTP 402 reborn as on-chain stablecoin micropayment, 2-second settlement on Base. Google / AWS / Anthropic / Visa / Mastercard are all in the x402 Foundation.',
  },
  'crypto-com-ai-agent-sdk': {
    tagline_zh: 'Crypto.com AI Agent SDK,但以 Cronos 链为中心',
    tagline_en: 'Crypto.com AI Agent SDK — but centered on Cronos chain, not the exchange',
    summary_zh: '类似 Coinbase AgentKit 思路(agent + wallet + 链)但规模小很多,CEX 交易是顺带做。文档较粗糙,生态小。',
    summary_en: 'Similar to Coinbase AgentKit (agent + wallet + chain) but way smaller, with CEX trading only a side feature. Rough docs, small ecosystem.',
  },
  'ccxt-mcp': {
    tagline_zh: 'CCXT 库的 MCP 包装,100+ 交易所统一接口',
    tagline_en: 'CCXT library wrapped as MCP — 100+ exchanges through one interface',
    summary_zh: '多 CEX 交易最实用的社区 MCP(Smithery 调用量 489,是多交易所类第一)。但:需把 API key 放 env 里,不是非托管 — 安全底线低。',
    summary_en: 'The most practical community multi-CEX MCP (489 Smithery calls, top of multi-exchange category). Downside: requires raw API keys in env — not non-custodial.',
  },

  // ============ DEX 工具 ============

  'hyperliquid-python-sdk': {
    tagline_zh: 'HL 官方 Python SDK,原生支持 agent wallet 签名(可下单不可提币)',
    tagline_en: 'Hyperliquid official Python SDK — native agent-wallet signing (can trade, can\'t withdraw)',
    summary_zh: 'HL 生态 agent 交易的事实起点。创造了"受限签名器"原语:给 agent 一把只能下单 / 撤单 / 不能提款的新钥匙 — 现在全加密行业都在抄这个设计。',
    summary_en: 'The de facto starting point for HL agent trading. Invented the "restricted signer" primitive: give your agent a key that can order / cancel but NOT withdraw. The rest of the crypto industry is now copying this design.',
  },
  'mektigboy-server-hyperliquid': {
    tagline_zh: '社区流行的 HL MCP,封装 /info 端点',
    tagline_en: 'Popular community Hyperliquid MCP wrapping the /info endpoint',
    summary_zh: '44 star,最早起来的 HL MCP。只读,读 mids / candles / L2 book。现在可能停滞(2025-03 后没大更新),但仍是最多人装的 HL 信息型 MCP。',
    summary_en: '44 stars, one of the earliest HL MCPs. Read-only — mids, candles, L2 order book. Possibly stale now (no major update after Mar 2025) but still the most-installed HL info MCP.',
  },
  'openbroker-cli': {
    tagline_zh: 'MIT CLI,为 HL 自治 agent 而生 — 网格 / DCA / funding 套利 / 做市每条一命令',
    tagline_en: 'MIT-licensed CLI built for autonomous HL agents — grid / DCA / funding arb / MM each one command',
    summary_zh: '定位"给 autonomous agent 的 CLI"。不是 MCP,是高层策略 CLI,每种策略是一条命令。适合你想让 agent 自主执行某个固定策略的场景。',
    summary_en: 'Positions itself as "a CLI for autonomous agents." Not an MCP — it\'s a high-level strategy CLI where each strategy is one command. Good if you want your agent to execute a fixed strategy autonomously.',
  },
  'dydx-v4-clients': {
    tagline_zh: 'dYdX v4 官方 SDK(TS / Python / Rust),但无官方 MCP / AI agent 路径',
    tagline_en: 'dYdX v4 official SDK (TS / Python / Rust) — no official MCP / agent path',
    summary_zh: '$1B+/日成交量的 perp DEX,却在 AI agent 方向明显落后。无官方 MCP、文档无 agent 章节,自己包装要花力气。对 cexagent 来说是**机会空白**。',
    summary_en: 'A $1B+/day perp DEX that\'s conspicuously behind on AI agents. No official MCP, no agent docs — you\'ll need to wrap it yourself. A clear whitespace opportunity.',
  },
  'driftpy': {
    tagline_zh: 'Drift 官方 Python SDK;已集成 Solana Agent Kit,可被 Eliza / LangChain 直接调用',
    tagline_en: 'Drift official Python SDK — already integrated into Solana Agent Kit, callable from Eliza / LangChain',
    summary_zh: 'Solana 最成熟的 perp DEX 的官方 SDK。自 2026-01 起通过 Solana Agent Kit 进了 agent 生态,用户不用直接接它,接 Solana Agent Kit 就能操 Drift。',
    summary_en: 'The official SDK of Solana\'s most mature perp DEX. Since Jan 2026, reachable via Solana Agent Kit — so most users consume Drift via that rather than directly.',
  },
  'vertex-python-sdk': {
    tagline_zh: 'Arbitrum perp + 现货统一账户 SDK(Python),无 agent 特化',
    tagline_en: 'Arbitrum perp + spot unified account SDK (Python) — no agent-specific affordances',
    summary_zh: '基础扎实,但 agent 特化完全没做 — 没 MCP / 没 agent wallet 原语 / 文档无 agent 章节。想在 agent 里用 Vertex,准备自己封装。',
    summary_en: 'Solid basics, zero agent-specific work — no MCP, no agent-wallet primitive, no agent docs. Want to use Vertex in an agent? Bring your own wrapper.',
  },
  'aevo-trading-skills': {
    tagline_zh: 'Aevo 官方 45 个 tools 的 Agent Skills:期权 + 永续 + pre-launch 一个保证金账户',
    tagline_en: 'Aevo official — 45 tools as Agent Skills covering options + perp + pre-launch futures',
    summary_zh: '2026-03 出的 skill 包,是 Aevo 唯一 agent 专用工具。期权 + 永续 + pre-launch 统一保证金是卖点,对结构化策略很有用。',
    summary_en: 'March 2026 skill bundle — Aevo\'s only agent-specific tooling. Unified margin across options + perp + pre-launch futures is the differentiator, especially useful for structured strategies.',
  },
  'paradex-mcp': {
    tagline_zh: 'Paradex(Starknet L3 perp)社区 MCP,质量高,官方 SDK 是 paradex-py',
    tagline_en: 'Paradex (Starknet L3 perp) community MCP — well-made, official SDK is paradex-py',
    summary_zh: 'Skywork / LobeHub 推荐过的社区 MCP,支持 L1 / L2 双认证。Paradex 2026-02 累计成交 $2518 亿 — zero-fee 零售 + Starknet 隐私是卖点。',
    summary_en: 'A Skywork / LobeHub-recommended community MCP with dual L1 / L2 auth. Paradex cleared $251.8B cumulative volume by Feb 2026 — zero-fee retail + Starknet privacy are the draws.',
  },
  'lighter-python': {
    tagline_zh: 'Lighter(ETH zkRollup perp)官方 Python SDK,含链上 signer',
    tagline_en: 'Lighter (ETH zkRollup perp) official Python SDK — with onchain signer',
    summary_zh: 'agent 叙事最弱的主流 perp DEX 之一。SDK 成熟但没 MCP / 没 agent-wallet 原语。要用 Lighter 做 agent,自己封装。',
    summary_en: 'One of the weakest AI-agent stories among mainstream perp DEXes. Mature SDK but no MCP, no agent-wallet primitive. BYOB (bring your own bridge).',
  },
  'gmx-ai': {
    tagline_zh: 'GMX 官方 agent skills:开合约(100x)/ LP / swap / 查持仓,支持 market / limit / SL / TP',
    tagline_en: 'GMX official agent skills — open perps (up to 100x) / LP / swap / query positions with market / limit / SL / TP',
    summary_zh: 'GMX 在 docs 开了 "AI Agents" 专章 — 是少数在官网就宣告 agent 战略的 DEX。Oracle 定价 + 两阶段执行意味着没 MEV 问题,对 agent 特别友好。',
    summary_en: 'GMX carved out an "AI Agents" section right in its docs — one of the few DEXes declaring an agent strategy at the home level. Oracle-priced + two-phase execution means no MEV, which agents love.',
  },
  '1inch-mcp': {
    tagline_zh: '1inch 官方 MCP(首个支持 swap 执行的 top EVM DEX 官方 MCP)',
    tagline_en: '1inch official MCP — first top EVM DEX with official MCP including swap execution',
    summary_zh: '2026-03 上线的行业大事件。15 个 API(Swap / Balance / Portfolio / Token / Gas)通过 MCP 开放,兼容 Cursor / VS Code / Claude / Codex 等 10+ 工具。**完全非托管**:MCP 只暴露 API,不替用户签名 — 合规范本。',
    summary_en: 'A landmark March 2026 launch. 15 APIs (Swap / Balance / Portfolio / Token / Gas) over MCP, compatible with 10+ clients (Cursor / VS Code / Claude / Codex). **Fully non-custodial** — the server never signs. A compliance blueprint.',
  },
  '0x-agent-skills': {
    tagline_zh: '0x 官方 Agent Skills:跨 15+ 链 + Solana 的 agent swap,兼容 45+ AI coding agents',
    tagline_en: '0x official Agent Skills — cross-chain agent swaps across 15+ chains + Solana, compatible with 45+ AI coding agents',
    summary_zh: 'Cross-Chain Agentic Swaps 2026 私测中,AI agent 1 分钟内跨 15+ 链。明确对齐 Google AP2 + OpenAI Agentic Commerce Protocol 标准。',
    summary_en: 'Cross-Chain Agentic Swaps are in private beta as of 2026, letting an AI agent swap across 15+ chains in under a minute. Explicitly aligned with Google AP2 + OpenAI Agentic Commerce Protocol standards.',
  },
  'jupiter-ultra': {
    tagline_zh: 'Jupiter Ultra:Solana 最佳路由聚合 + RFQ,吞吐 Solana 90% swap 成交',
    tagline_en: 'Jupiter Ultra — Solana best-route aggregation + RFQ, clearing 90% of Solana swap volume',
    summary_zh: '不接 Jupiter 基本等于没接 Solana 现货。Jupiter docs 自称"为 AI agent 和开发者同时设计",有 pre-built context files + MCP 访问。Solana Agent Kit 默认内置。',
    summary_en: 'Skipping Jupiter basically means skipping Solana spot. Jupiter docs call themselves "built for AI agents and LLM-powered development" with pre-built context files + MCP. Default inside Solana Agent Kit.',
  },
  'jupiter-swap-api-client': {
    tagline_zh: 'Jupiter 官方 Rust SDK(Swap API V6):quote → swap 两阶段执行',
    tagline_en: 'Jupiter official Rust SDK (Swap API V6) — quote → swap two-phase execution',
    summary_zh: '如果你的 agent 是 Rust,直接用这个。否则走 Jupiter HTTP API / Solana Agent Kit 即可。',
    summary_en: 'If your agent is in Rust, use this directly. Otherwise stick to Jupiter\'s HTTP API or Solana Agent Kit.',
  },
  'uniswap-ai-toolkit': {
    tagline_zh: 'Uniswap 官方 AI 工具链(skills + plugins + agents),适配任意 coding agent',
    tagline_en: 'Uniswap official AI toolkit — skills + plugins + agents for any coding agent',
    summary_zh: 'Uniswap 2026-02 出了 AI-first Developer Platform。内部调研 85% 开发者有自治 agent 经验,所以主动引入 AI 工具。但还没专门的 MCP — 社区 kukapay/uniswap-trader-mcp 是执行层首选。',
    summary_en: 'Uniswap launched an AI-first Developer Platform in Feb 2026 after an internal survey found 85% of devs already used autonomous agents. Still no dedicated MCP — community kukapay/uniswap-trader-mcp is the execution-layer go-to.',
  },
  'pancakeswap-ai': {
    tagline_zh: 'PancakeSwap 官方 AI(BNB 链):Planner-only 模式,只给计划不下单',
    tagline_en: 'PancakeSwap official AI — planner-only mode, never executes on your behalf',
    summary_zh: '和其它 DEX 很不一样:agent 只查数据 + 模拟 + 输出深链,让用户自己在 Web 上点击执行。对保守用户 / 合规严格场景是模板。',
    summary_en: 'Different from other DEX tools — agent only reads data + simulates + emits deep links, user clicks execute in the web UI. A good template for conservative users or strict compliance scenarios.',
  },

  // ============ AI 框架 ============

  'elizaos': {
    tagline_zh: '加密自治 agent 第一框架:TS 多 agent 模拟,45+ plugin,超一半新 AI crypto 项目在用',
    tagline_en: 'The #1 framework for autonomous crypto agents — 45+ plugins, powering >50% of new AI crypto projects in 2026',
    summary_zh: '作者 Shaw,团队 2026-04 宣布 Eliza Labs wind-down 回归基础、v3 进 beta — 发展有波动但生态广。18+ blockchain / crypto plugin(含 plugin-hyperliquid / plugin-solana)。写一个 plugin-cexagent 是最快进入这个生态的方式。',
    summary_en: 'By Shaw. In April 2026 the team announced Eliza Labs is winding down and going back to basics with v3 in beta — bumpy trajectory but massive ecosystem. 18+ blockchain / crypto plugins including plugin-hyperliquid / plugin-solana. Writing a plugin-cexagent is the fastest way into this ecosystem.',
  },
  'solana-agent-kit': {
    tagline_zh: 'Solana 默认 agent framework(SendAI),60+ 动作,Jupiter / Drift / Orca 全内置',
    tagline_en: 'Solana default agent framework by SendAI — 60+ actions with Jupiter / Drift / Orca / Wormhole built in',
    summary_zh: '如果你要做 Solana agent,这是事实默认。支持 Eliza / LangChain / Vercel AI SDK,所以各大框架的 Solana 能力实际是透过它来的。1656 GitHub star,npm 月下载 6K+。',
    summary_en: 'If you build anything Solana-agent-related, this is the de facto default. Supports Eliza / LangChain / Vercel AI SDK, so all of those frameworks\' Solana capabilities actually route through here. 1656 stars, 6K+ npm/mo.',
  },
  'solana-mcp-sendai': {
    tagline_zh: 'Solana Agent Kit 的 MCP 服务器版本',
    tagline_en: 'Solana Agent Kit exposed as an MCP server',
    summary_zh: '不想写代码集成 Solana Agent Kit,直接用它的 MCP 版给 Claude Desktop / Cursor 即可。',
    summary_en: 'Don\'t want to integrate Solana Agent Kit as code? Use the MCP version in Claude Desktop / Cursor directly.',
  },
  'goat-sdk': {
    tagline_zh: '200+ 集成的多链 agent 工具包,内置 MCP adapter',
    tagline_en: '200+ integrations multi-chain agent toolkit with built-in MCP adapter',
    summary_zh: 'Crossmint 主导。EVM + Solana 都有,包 Uniswap / Jupiter / Morpho / 1inch / ENS / CoinGecko / OpenSea / Alchemy。983 star,功能最丰富的多链 toolkit。',
    summary_en: 'Led by Crossmint. Covers EVM + Solana with Uniswap / Jupiter / Morpho / 1inch / ENS / CoinGecko / OpenSea / Alchemy. 983 stars, the most feature-rich multichain toolkit.',
  },
  'virtuals-game': {
    tagline_zh: 'Virtuals GAME framework:Agent 经济生态,$3 亿 agentic GDP,Butler / Ethy 等明星 agent',
    tagline_en: 'Virtuals GAME framework — agent economy ecosystem, $300M agentic GDP, star agents Butler / Ethy',
    summary_zh: '不是传统 SDK,是"让 agent 成为可代币化资产"的基础设施。自带 ACP 协议(request → escrow → settlement 生命周期),2026-03 集成 Arbitrum 做规模化交易。如果你做交易型 agent,Virtuals 的 200+ agent 都是你潜在客户。',
    summary_en: 'Not a traditional SDK — it\'s infrastructure that turns agents into tokenizable assets. Built-in ACP protocol (request → escrow → settlement lifecycle), March 2026 integration with Arbitrum for scale. Their 200+ trading agents are your customer base if you build a trading agent backend.',
  },
  'fetchai-uagents': {
    tagline_zh: 'Fetch.ai uAgents:Python 自治 agent + 链上身份 + Almanac 合约注册',
    tagline_en: 'Fetch.ai uAgents — Python autonomous agents with onchain identity + Almanac contract registration',
    summary_zh: '老牌 agent 经济,偏"agent 之间互相付费 / 调用"场景。2026 年 agent-to-agent 交易同比 +340%。值得学它的 agent 身份 / 经济激励模型。',
    summary_en: 'Veteran agent economy player, focused on "agents paying each other for services." Agent-to-agent tx grew +340% YoY in 2026. Worth studying its identity + economic-incentive model.',
  },
  'giza-agents': {
    tagline_zh: 'Giza 可验证 ML agent(Starknet 为主):用 STARK 证明 AI 决策合法',
    tagline_en: 'Giza verifiable-ML agents (Starknet-focused) — STARK-proof AI decisions',
    summary_zh: '最强调"可审计推理"的 DeFi agent。用 Cairo 写 ZK 证明 + Account Abstraction。将来监管要求"AI 交易可审计",这条线会值钱。现在小众。',
    summary_en: 'The most audit-focused DeFi agent stack. Cairo-written ZK proofs + Account Abstraction. Niche today but likely to matter when regulators require AI-trading audits.',
  },

  // ============ 钱包 / 签名 ============

  'phantom-mcp': {
    tagline_zh: 'Phantom 官方 MCP(2026-02 发布):Solana + EVM + Bitcoin + Sui 非托管签名',
    tagline_en: 'Phantom official MCP (launched Feb 2026) — non-custodial signing for Solana + EVM + Bitcoin + Sui',
    summary_zh: '钥匙不出钱包,用 stamper keys + auto re-auth。非托管钱包 MCP 里最好的一个,适合给零售 agent 配钱包的场景。3 个月累计 8456 npm 下载,增长 +74%。',
    summary_en: 'Keys never leave the wallet — uses stamper keys + auto re-auth. The best non-custodial wallet MCP, great for giving consumer agents a wallet. 8,456 npm downloads in its first 3 months, +74% growth.',
  },
  'crossmint-agent-wallet': {
    tagline_zh: 'Crossmint 智能合约 agent 钱包:内置消费限额,可支付卡网络',
    tagline_en: 'Crossmint smart-contract agent wallets with built-in spending limits + card-network payments',
    summary_zh: '面向"agent 替用户消费"场景。2026-04 对接了 Visa / Mastercard,agent 可以像人一样刷卡买数字商品服务。是 Coinbase x402 的另一思路:走传统支付网络 + 智能合约限额。',
    summary_en: 'Designed for "agents spending on your behalf." April 2026 integrated with Visa / Mastercard so agents can swipe cards for digital goods like a human. A different take from Coinbase x402 — traditional payment rails + smart-contract limits.',
  },
  'crossmint-checkout': {
    tagline_zh: 'Crossmint Checkout:让 agent 用信用卡 / USDC 完成数字商品交易',
    tagline_en: 'Crossmint Checkout — let agents purchase digital goods with credit card or USDC',
    summary_zh: 'Crossmint 系列中的支付结算组件,独立于 agent-wallet。专注"结账"这一步:收卡 / 收稳定币 / 交货。适合给 agent 做"帮我买"场景里的最后一公里。',
    summary_en: 'The checkout piece of the Crossmint stack — separate from agent-wallet. Focused on the final step: accept cards or stablecoins, deliver the digital good. Useful as the "last-mile" primitive in "agent, buy me X" flows.',
  },
  'base-mcp': {
    tagline_zh: 'Base L2 官方工具包(含 CDP 钱包):链上操作 + 事务 + 分析',
    tagline_en: 'Base L2 official toolkit (with CDP wallet) — onchain ops + transactions + analytics',
    summary_zh: '346 star 的 Base 链 MCP,Coinbase 孵化。想在 Base 上做 agent 工作流的首选 — 和 Coinbase AgentKit 是兄弟产品。',
    summary_en: '346-star Base-chain MCP, incubated by Coinbase. The go-to if you\'re building agent workflows on Base — sibling product to Coinbase AgentKit.',
  },
  'thirdweb-mcp': {
    tagline_zh: 'thirdweb 官方 MCP:合约 + 交易 + 分析,自然语言调用',
    tagline_en: 'thirdweb official MCP — contracts + transactions + analytics via natural language',
    summary_zh: '如果你已经在 thirdweb 生态里搭应用,加这个 MCP 让 Claude 操作你的合约。169K/月 npm 下载 — 实际大部分来自 SDK 而非 MCP,但背景生态保证有用户。',
    summary_en: 'Already building on thirdweb? Add this MCP and let Claude drive your contracts. 169K npm/mo — though most of that is from the SDK rather than the MCP itself, the ecosystem backing guarantees traction.',
  },
  'near-mcp': {
    tagline_zh: 'NEAR 官方 MCP,用 NEAR keychain 签名',
    tagline_en: 'NEAR Protocol official MCP — signs via NEAR keychain',
    summary_zh: '29 star,NEAR 在 AI agent 方向的官方门面。NEAR 自己也在推 "Intents" + agent 路线。',
    summary_en: '29 stars, NEAR\'s official front door for AI agents. NEAR is also pushing its own "Intents" + agent narrative.',
  },
  'alby-nwc-mcp': {
    tagline_zh: '闪电网络 MCP(基于 Nostr Wallet Connect),非托管付款',
    tagline_en: 'Lightning Network MCP via Nostr Wallet Connect — non-custodial payments',
    summary_zh: 'BTC / 闪电付款场景的 agent MCP 选择。非托管 — 钱在用户自己钱包,NWC 只做签名请求。',
    summary_en: 'The agent MCP choice for BTC / Lightning payments. Non-custodial — funds stay in the user\'s wallet, NWC only brokers signing requests.',
  },
  'bitcoin-mcp': {
    tagline_zh: 'Bitcoin + Lightning 基础操作 MCP:生成 / 校验 / 解码 / 查询',
    tagline_en: 'Bitcoin + Lightning basic operations MCP — keygen / validate / decode / query',
    summary_zh: '不做交易,只做 BTC 基础操作。74 star,基础扎实。要做 BTC 交易 / 付款,配 Alby NWC / Breez。',
    summary_en: 'No trading — just BTC basics. 74 stars, solid fundamentals. For trading / payments, pair with Alby NWC or Breez.',
  },
  'mcpdotdirect-evm': {
    tagline_zh: '通用 EVM MCP:任意 EVM 链 + 任意钱包 + ERC-20 + 签名,374 star',
    tagline_en: 'Generic EVM MCP — any chain, any wallet, ERC-20 support, 374 stars',
    summary_zh: '社区最流行的通用 EVM MCP。可配任意 RPC,支持钱包 + 代币转账 + 合约交互。注意:私钥在 env 里,是原始密钥模式,不非托管。',
    summary_en: 'The most popular community generic-EVM MCP. Configurable RPC, wallet + token transfers + contract interactions. Caveat: raw private key in env — custodial-ish, not truly non-custodial.',
  },
  'bsc-mcp-termix': {
    tagline_zh: 'BNB 链 MCP:发 BNB / BEP-20 / 部署合约',
    tagline_en: 'BNB Chain MCP — send BNB / BEP-20 / deploy contracts',
    summary_zh: '104 star,BSC 圈子稳定用。支持部署合约是亮点。和 mcpdotdirect/evm-mcp 一样,需要 env 里的私钥。',
    summary_en: '104 stars, steady in the BSC community. Contract deployment is the differentiator. Like mcpdotdirect/evm-mcp, needs a private key in env.',
  },
  'armor-crypto-mcp': {
    tagline_zh: 'Armor 商业托管钱包 + swap + 策略规划',
    tagline_en: 'Armor commercial managed wallet + swap + strategic planning',
    summary_zh: '托管式(和非托管相反),适合不想管钥匙的用户。184 star,是商业产品的 MCP 接口。',
    summary_en: 'Custodial (opposite of non-custodial), for users who don\'t want to manage keys. 184 stars — an MCP surface to a commercial product.',
  },

  // ============ 数据分析 ============

  'polymarket-mcp': {
    tagline_zh: 'Polymarket 预测市场 MCP:54,822 次调用 — 装机量整个加密 MCP 圈第一',
    tagline_en: 'Polymarket prediction markets MCP — 54,822 calls, #1 most-installed crypto MCP overall',
    summary_zh: 'GitHub 只有 6 star 但 Smithery 上是所有加密 MCP 的调用量第一。反过来证明"star 骗人"。45+ 动作覆盖市场 / 赔率 / 仓位 / 交易 / 分析。读写都有。',
    summary_en: 'Only 6 GitHub stars but #1 in Smithery calls — living proof that stars lie. 45+ actions covering markets / odds / positions / trades / analytics. Both read and write.',
  },
  'blockscout-mcp': {
    tagline_zh: 'Blockscout 官方 MCP,60+ 链的链上浏览器',
    tagline_en: 'Blockscout official MCP — onchain explorer across 60+ chains',
    summary_zh: '17,711 Smithery 调用,加密数据类第二名。适合 agent "查链上"最基础的默认工具。',
    summary_en: '17,711 Smithery calls, #2 in the data category. A default for any "let my agent look up onchain state" workflow.',
  },
  'coingecko-mcp': {
    tagline_zh: 'CoinGecko 官方 MCP:15k 币 + 200+ 网络,agent 查价第一站',
    tagline_en: 'CoinGecko official MCP — 15k coins + 200+ networks, the default price lookup for agents',
    summary_zh: 'npm 月下载 13,885。agent 问"BTC 多少钱"这类最高频问题基本都经过 CoinGecko。有免费 tier + pro tier + GeckoTerminal 整合。',
    summary_en: '13,885 npm/mo. The highest-frequency question ("what\'s BTC price") basically routes through CoinGecko. Free tier + Pro tier + GeckoTerminal integration.',
  },
  'etherscan-mcp': {
    tagline_zh: 'Etherscan 官方 MCP:60+ 链链上事务 / 合约 / ABI 查询',
    tagline_en: 'Etherscan official MCP — onchain transactions / contracts / ABIs across 60+ chains',
    summary_zh: 'agent 查链上 tx / 合约的默认工具。和 Blockscout 定位重叠但数据覆盖 / 速度不同:选 Etherscan 官方的通常更准。',
    summary_en: 'The default for agents looking up onchain transactions or contracts. Overlaps with Blockscout — but official Etherscan tends to have better-quality data.',
  },
  'helius-mcp': {
    tagline_zh: 'Helius 官方 MCP(Solana):60 个工具覆盖 RPC / tx / webhook / stream',
    tagline_en: 'Helius official MCP (Solana) — 60 tools across RPC / tx / webhooks / streams',
    summary_zh: 'Solana 数据基础设施头部。如果你做 Solana agent 要链上数据 + RPC,Helius 几乎绕不过。',
    summary_en: 'Top Solana data infra provider. If your Solana agent touches RPC or onchain data, Helius is nearly impossible to skip.',
  },
  'chainstack-mcp': {
    tagline_zh: 'Chainstack 官方 MCP:多链 RPC + developer portal(EVM + Solana)',
    tagline_en: 'Chainstack official MCP — multi-chain RPC + developer portal (EVM + Solana)',
    summary_zh: 'Chainstack 2026 年开始发力 agent,是 RPC 商业化的路径。适合已经用 Chainstack 当 RPC provider 的用户。',
    summary_en: 'Chainstack started pushing into agents in 2026 as a path to monetize RPC. Pick it if Chainstack is already your RPC provider.',
  },
  'quicknode-mcp': {
    tagline_zh: 'QuickNode MCP:用自然语言管理你的 endpoint / 计费 / 用量',
    tagline_en: 'QuickNode MCP — manage endpoints / billing / usage via natural language',
    summary_zh: '注意:这个 MCP **不是数据查询**,是 QuickNode 平台管理。想用 RPC 数据请配别的(Helius / Chainstack)。',
    summary_en: 'Note: this MCP is **not** for data lookups — it\'s for managing your QuickNode platform account. Use Helius / Chainstack for RPC-data MCPs.',
  },
  'moralis-mcp': {
    tagline_zh: '多链钱包 / 代币 / NFT / DeFi 仓位查询(社区版,因官方 repo 较新)',
    tagline_en: 'Multi-chain wallet / token / NFT / DeFi positions (community version — official is newer)',
    summary_zh: 'Moralis 数据覆盖面广,是 portfolio 类查询的强项。社区版本(a6b8/moralis-mcp)是目前能用的;MoralisWeb3 官方有自己的 cortex MCP 但文档集中在付费层。',
    summary_en: 'Moralis has broad data coverage, especially for portfolio queries. The community a6b8/moralis-mcp is what\'s usable today; MoralisWeb3\'s own cortex MCP exists but is docs-focused on the paid tier.',
  },
  'bitquery-mcp': {
    tagline_zh: 'Bitquery 官方 MCP(通过 Composio):40+ 链 GraphQL 数据',
    tagline_en: 'Bitquery official MCP (via Composio) — 40+ chains over GraphQL',
    summary_zh: 'Bitquery 数据侧重"查询自由度",GraphQL 接口能构建很复杂的链上数据问题。适合 agent 需要"灵活问链"的场景。',
    summary_en: 'Bitquery\'s edge is query flexibility — its GraphQL surface lets you ask complex onchain questions. Great when the agent needs ad-hoc freedom.',
  },
  'codex-mcp': {
    tagline_zh: 'Codex.io 官方 MCP:代币 + 市场数据',
    tagline_en: 'Codex.io official MCP — token + market data',
    summary_zh: 'Codex.io 是 DeFi 数据 API,agent 需要 token 级别的价格 / 流动性 / 交易量可用这个。',
    summary_en: 'Codex.io is a DeFi data API — use this when the agent needs per-token price / liquidity / volume.',
  },
  'bankless-onchain-mcp': {
    tagline_zh: 'Bankless 官方链上 MCP:portfolio + 协议 + 治理',
    tagline_en: 'Bankless official onchain MCP — portfolio + protocols + governance',
    summary_zh: '78 star。Bankless 的数据角度偏"治理 / 协议参与",比纯数据更有编辑观点。适合做 DeFi 研究 agent。',
    summary_en: '78 stars. Bankless\' data angle is governance / protocol participation — more editorial than pure data. A match for DeFi research agents.',
  },
  'nodit-mcp': {
    tagline_zh: 'Nodit 官方 MCP:多链索引数据 + 即用 schema',
    tagline_en: 'Nodit official MCP — multi-chain indexed data with ready-to-query schemas',
    summary_zh: 'Nodit 是主打"把链上数据结构化"的新基建。54 star 不算多,但数据 schema 开箱即用是卖点。',
    summary_en: 'Nodit\'s pitch is "structure the onchain data." 54 stars (modest) but its out-of-the-box schema is the differentiator.',
  },
  'cryptoapis-mcp': {
    tagline_zh: 'CryptoAPIs 14 个 MCP 服务器:EVM / UTXO / Solana / XRP / Tron / Kaspa',
    tagline_en: 'CryptoAPIs — 14 MCP servers covering EVM / UTXO / Solana / XRP / Tron / Kaspa',
    summary_zh: '覆盖面最广的加密数据 API 之一,拆成 14 个细分 MCP(address / blocks / fees / HD wallet / signer / simulate / broadcast...)。企业向。',
    summary_en: 'One of the broadest crypto-data APIs, split into 14 granular MCPs (address / blocks / fees / HD wallet / signer / simulate / broadcast...). Enterprise-flavored.',
  },
  'pyth-mcp': {
    tagline_zh: 'Pyth Hermes 价格源 MCP:1930+ 源 + TWAP + 历史',
    tagline_en: 'Pyth Hermes price feeds MCP — 1,930+ feeds + TWAP + history',
    summary_zh: '做链上套利 / 结算 / 清算逻辑要真实价,Pyth 是除 Chainlink 外最主流的预言机。',
    summary_en: 'If your agent needs real-world prices for arbitrage / settlement / liquidation logic, Pyth is the main oracle choice after Chainlink.',
  },
  'chainlink-feeds-mcp': {
    tagline_zh: 'Chainlink 链上价格源 MCP',
    tagline_en: 'Chainlink onchain price feeds MCP',
    summary_zh: 'Chainlink 是最老牌的去中心化预言机。agent 要"链上可验证的价",Chainlink feeds 是标准。',
    summary_en: 'Chainlink is the canonical decentralized oracle. When the agent needs a "verifiable onchain price," Chainlink feeds is the standard.',
  },
  'goplus-mcp': {
    tagline_zh: 'GoPlus 官方安全 MCP:代币安全 / 地址风险 / Web3 威胁情报,40+ 链',
    tagline_en: 'GoPlus official security MCP — token safety / address risk / Web3 threat intel, 40+ chains',
    summary_zh: 'GoPlus 月 7 亿次调用是整个 Web3 安全 layer 的事实标杆。2026-03 专门为 AI agent 出了 x402 版本,agent 检测 rug 的首选。',
    summary_en: 'GoPlus\'s 700M monthly calls make it the de facto Web3 security layer. March 2026 shipped an x402-native version specifically for AI agents — the top choice for rug detection.',
  },
  'dexscreener-mcp': {
    tagline_zh: 'DexScreener MCP:pair 数据 + K 线 + 新池发现,免费 API',
    tagline_en: 'DexScreener MCP — pair data + charts + new-pool discovery, free API',
    summary_zh: 'DexScreener 是 DEX 数据免费层最好用的,但它自带 GoPlus 风控标记(不是自研)。agent 查某个币对 / 找新池用它。',
    summary_en: 'DexScreener is the best free DEX-data layer, though risk labels come from GoPlus (not their own). Use it when the agent looks up a pair or hunts new pools.',
  },
  'coinmarketcap-mcp': {
    tagline_zh: 'CMC MCP:老牌市场数据',
    tagline_en: 'CoinMarketCap MCP — veteran market data',
    summary_zh: '和 CoinGecko 重叠,规模略小。历史数据 / API 上限不一样,按 CMC 付费情况选。',
    summary_en: 'Overlaps with CoinGecko, slightly smaller scope. Different historical-data depth and rate limits — pick based on your CMC plan.',
  },
  'coincap-mcp': {
    tagline_zh: 'CoinCap MCP:免费,无需 API key,轻量价格源',
    tagline_en: 'CoinCap MCP — free, no API key needed, lightweight price source',
    summary_zh: '没 CoinGecko / CMC 全,但完全免费无需 key。适合快速开箱的 agent demo。',
    summary_en: 'Not as complete as CoinGecko / CMC but fully free and key-less. Good for quick agent demos.',
  },
  'tradingview-mcp': {
    tagline_zh: 'TradingView MCP:实时 crypto / 股票筛选 + 高级 TA 指标,2065 star',
    tagline_en: 'TradingView MCP — live crypto / stock screener + advanced TA, 2065 stars',
    summary_zh: '整个加密 MCP 圈 star 数第一。作者 atilaahmettaner。Miles Deutscher(500k 粉)就推过"Claude Code x TradingView 是最强交易配置"。',
    summary_en: 'The most-starred crypto MCP overall. By atilaahmettaner. Miles Deutscher (500k followers) has publicly called "Claude Code x TradingView" the strongest trading setup.',
  },
  'quantoracle-mcp': {
    tagline_zh: '63 个量化计算 tools(Black-Scholes / 波动率 / 相关性等),Smithery 11,630 调用',
    tagline_en: '63 quant-computation tools (Black-Scholes / vol / correlation) — 11,630 Smithery calls',
    summary_zh: '给 agent 装上"能算期权定价 / VaR / 相关性"能力。量化 / 做市场景适用。',
    summary_en: 'Gives your agent "can price options / compute VaR / correlations" math. Useful for quant / market-making workflows.',
  },
  'bitpoort-mcp': {
    tagline_zh: 'Bitpoort 链上数据 MCP:鲸鱼追踪 + 清算地图,41 个工具',
    tagline_en: 'Bitpoort onchain data MCP — whale tracking + liquidation maps, 41 tools',
    summary_zh: 'Smithery 11,482 调用,装机量靠前的鲸鱼追踪 MCP。和 Nansen 定位接近但偏免费 tier。',
    summary_en: '11,482 Smithery calls — one of the more-installed whale-tracking MCPs. Nansen-adjacent but more free-tier.',
  },
  'strale-mcp': {
    tagline_zh: 'Strale:DeFi 数据聚合 MCP,Smithery 10,981 调用',
    tagline_en: 'Strale — DeFi data aggregation MCP, 10,981 Smithery calls',
    summary_zh: '多协议 DeFi 数据(Aave / Morpho / Compound 等)统一接口。装机量稳定但生态知名度一般。',
    summary_en: 'Unified access across DeFi protocols (Aave / Morpho / Compound). Steady installs but low brand recognition.',
  },
  'cryptoiz-mcp': {
    tagline_zh: 'Cryptoiz:Solana 聪明钱信号 + DEX smart money 追踪',
    tagline_en: 'Cryptoiz — Solana smart-money signals + DEX smart-money tracking',
    summary_zh: 'Smithery 9,991 调用,聪明钱追踪类首选。覆盖 170+ Solana 代币,检测鲸鱼 / 海豚动作。',
    summary_en: '9,991 Smithery calls — the smart-money-tracking first choice. Covers 170+ Solana tokens, detects whale / dolphin moves.',
  },
  'kukapay-funding-rates-mcp': {
    tagline_zh: 'kukapay 跨 CEX 资金费率合并,一张表看套利机会',
    tagline_en: 'kukapay cross-CEX funding rates — one table to spot arbitrage',
    summary_zh: '6 家 CEX(Binance/OKX/Bybit/Bitget/Gate/CoinEx)的 funding rate 合并输出 markdown 表 + divergence 列。不包括 DEX(Hyperliquid / dYdX / GMX),这是空白。',
    summary_en: 'Merges funding rates across 6 CEXes (Binance/OKX/Bybit/Bitget/Gate/CoinEx) into a markdown table with divergence column. Does NOT cover DEXes (Hyperliquid / dYdX / GMX) — a clear gap.',
  },
  'kukapay-crypto-orderbook-mcp': {
    tagline_zh: 'kukapay 盘口深度查询',
    tagline_en: 'kukapay orderbook depth query',
    summary_zh: '给 agent 看某个交易对的买卖盘深度,判断流动性 / 大单堆积。Smithery 使用量中等。',
    summary_en: 'Lets the agent inspect bid/ask depth for a pair — liquidity and big-order clustering. Medium Smithery usage.',
  },
  'kukapay-crypto-indicators-mcp': {
    tagline_zh: 'kukapay 50+ TA-Lib 指标 MCP 化,122 GitHub star',
    tagline_en: 'kukapay — 50+ TA-Lib indicators wrapped as MCP, 122 GitHub stars',
    summary_zh: 'GitHub star 数最高的 kukapay MCP 之一,但 PyPI 下载量其实很少 — 典型"star 高但实际装机少"。主要价值是省你接 TA-Lib 的麻烦。',
    summary_en: 'One of the highest-starred kukapay MCPs — but PyPI downloads are low, a classic "stars ≠ installs" case. Main value: saves you from wiring TA-Lib yourself.',
  },
  'kukapay-whale-tracker-mcp': {
    tagline_zh: 'kukapay 鲸鱼追踪:Whale Alert API 封装,52 star',
    tagline_en: 'kukapay whale tracker — Whale Alert API wrapper, 52 stars',
    summary_zh: 'kukapay 里 star 最高的一个(52)。查 >$1M 大额转账流。盯的是"链"不是"单个地址",地址级追踪请用 wallet-inspector。',
    summary_en: 'The most-starred kukapay (52). Watches >$1M transfers across chains. Tracks the chain not individual addresses — for per-address, use wallet-inspector.',
  },
  'kukapay-hyperliquid-info-mcp': {
    tagline_zh: 'kukapay HL 信息查询,27 star',
    tagline_en: 'kukapay Hyperliquid info query — 27 stars',
    summary_zh: 'Hyperliquid 公开数据(mids / candles / L2 book)封装。只读。比 mektigboy 的版本活跃度高一点。',
    summary_en: 'Wraps HL public endpoints (mids / candles / L2 book). Read-only. Slightly more active than mektigboy\'s version.',
  },
  'kukapay-crypto-feargreed-mcp': {
    tagline_zh: 'Alt.me 恐惧贪婪指数接口,53 star',
    tagline_en: 'Alt.me fear & greed index interface — 53 stars',
    summary_zh: '单一数据点:市场情绪 0-100。适合放到你 agent 每日简报的一部分。',
    summary_en: 'Single data point: market sentiment 0–100. Good as part of an agent\'s daily briefing.',
  },
  'kukapay-crypto-liquidations-mcp': {
    tagline_zh: 'Binance 清算实时流',
    tagline_en: 'Binance liquidation real-time stream',
    summary_zh: '接 Binance liquidation feed,看哪个币、哪个方向、多大规模爆仓。7 star,小众但高频交易者有用。',
    summary_en: 'Plugs into Binance\'s liquidation feed — which coin, which side, how big. 7 stars, niche but valuable for high-frequency traders.',
  },
  'kukapay-rug-check-mcp': {
    tagline_zh: 'Solana rug 检测(通过 RugCheck.xyz),19 star',
    tagline_en: 'Solana rug detection via RugCheck.xyz — 19 stars',
    summary_zh: 'memecoin 买前必跑的检查。只覆盖 Solana,EVM 链用 honeypot-detector-mcp 或 GoPlus。',
    summary_en: 'A must-run before buying any memecoin. Solana-only — for EVM chains use honeypot-detector-mcp or GoPlus.',
  },
  'kukapay-polymarket-predictions-mcp': {
    tagline_zh: 'kukapay 的 Polymarket 赔率查询(只读,不交易)',
    tagline_en: 'kukapay\'s Polymarket odds query (read-only, no trading)',
    summary_zh: '只读版。要下单请用 aryankeluskar/polymarket-mcp(54,822 调用那个)。',
    summary_en: 'Read-only version. For placing orders, use aryankeluskar/polymarket-mcp (the 54,822-calls one).',
  },
  'kukapay-dune-analytics-mcp': {
    tagline_zh: '用自然语言跑 Dune 查询,30 star',
    tagline_en: 'Run Dune queries via natural language — 30 stars',
    summary_zh: 'agent 能直接说"给我看过去 7 天 ETH holder 分布",经 Dune 跑 SQL。需要你有 Dune 账号 + API key。',
    summary_en: 'Your agent can say "show me ETH holder distribution last 7 days" and hit Dune SQL. Requires a Dune account + API key.',
  },
  'defillama-mcp': {
    tagline_zh: 'DefiLlama MCP:TVL / yields / 协议排行',
    tagline_en: 'DefiLlama MCP — TVL / yields / protocol rankings',
    summary_zh: 'DeFi 行业基础设施数据,dcSpark 实现的社区版。要做 yield farming / TVL 分析 agent 必装。',
    summary_en: 'DeFi\'s default infra-data layer, community-implemented by dcSpark. Mandatory for yield-farming / TVL-analysis agents.',
  },
  'nansen-mcp': {
    tagline_zh: 'Nansen 官方 MCP:智能钱包标签,18+ 链(付费)',
    tagline_en: 'Nansen official MCP — smart-wallet labels across 18+ chains (paid)',
    summary_zh: 'Nansen 的"聪明钱"标签是多年运营的护城河,不是简单 API 能复制的。$49-69/月。如果预算够,给 agent 装这个 smart money 信号质量最高。',
    summary_en: 'Nansen\'s "smart money" labels are a years-built moat, not something a simple API replicates. $49-69/mo. If budget allows, the highest-quality smart-money signal for an agent.',
  },
  'web3-research-mcp': {
    tagline_zh: '加密"deep research"agent 工具,完全本地运行,148 star',
    tagline_en: 'Crypto "deep research" agent tool — runs entirely local, 148 stars',
    summary_zh: '不是查单一数据源,是自动组合多源做深度研究。离线友好,适合"给我把这个协议全面调研一下"的场景。',
    summary_en: 'Not a single-source lookup — it orchestrates multi-source deep research. Offline-friendly, good for "research this protocol for me" asks.',
  },
  'heurist-mesh-mcp': {
    tagline_zh: 'Heurist Mesh:去中心化 agent 算力 MCP,64 star',
    tagline_en: 'Heurist Mesh — decentralized agent compute MCP, 64 stars',
    summary_zh: 'agent 想跑模型但不想付 Anthropic / OpenAI?Heurist Mesh 是去中心化的 inference 网络。小众但有意思。',
    summary_en: 'Agent needs to run models without paying Anthropic / OpenAI? Heurist Mesh is a decentralized inference network. Niche but interesting.',
  },
  'kukapay-wallet-inspector-mcp': {
    tagline_zh: '单钱包多链历史 / 持仓查询(Dune 底层)',
    tagline_en: 'Per-wallet multichain history / holdings (Dune-powered)',
    summary_zh: '给 agent 一个地址,让它查这个人所有链上的活动 / 持仓。不是实时,是历史快照。',
    summary_en: 'Give the agent an address, let it list that wallet\'s activity / holdings across chains. Not realtime — historical snapshot.',
  },
  'kukapay-memecoin-radar-mcp': {
    tagline_zh: 'Solana memecoin 趋势 + KOL 交易检测',
    tagline_en: 'Solana memecoin trend + KOL trade detection',
    summary_zh: '追 memecoin pump 趋势 + 看已知 KOL 最近买了啥。给 degen agent 的 radar。',
    summary_en: 'Track memecoin pump trends + see what known KOLs just bought. A degen agent\'s radar.',
  },
  'kukapay-crypto-news-mcp': {
    tagline_zh: '加密新闻聚合流(多源),34 star',
    tagline_en: 'Crypto news aggregation feed (multi-source) — 34 stars',
    summary_zh: '把加密媒体 RSS 统一接口给 agent。适合构建"每日简报"或"重大事件监控"。',
    summary_en: 'Unifies crypto media RSS behind one MCP. Good for "daily briefing" or "major event monitoring" bots.',
  },
  'kukapay-crypto-sentiment-mcp': {
    tagline_zh: '头部币种情绪指数,47 star',
    tagline_en: 'Top-coin sentiment index — 47 stars',
    summary_zh: '给 agent 一个"市场热度 / 恐慌 / 狂热"的数值维度。配 fear-greed 指数用。',
    summary_en: 'Gives the agent a "market buzz / panic / euphoria" dimension. Pairs well with the fear-greed index.',
  },
  'kukapay-etf-flow-mcp': {
    tagline_zh: 'BTC / ETH 现货 ETF 净流入',
    tagline_en: 'BTC / ETH spot ETF net flows',
    summary_zh: '2024 年 ETF 通过后,机构资金流向变成重要信号。给 agent 看"昨天有多少机构钱进来"。',
    summary_en: 'After ETF approval in 2024, institutional flows became a key signal. Lets the agent see "how much institutional money came in yesterday."',
  },
  'kukapay-token-minter-mcp': {
    tagline_zh: '21 链 ERC-20 铸币 MCP',
    tagline_en: 'ERC-20 minting across 21 chains',
    summary_zh: '让 agent 帮你发 ERC-20,不常见需求。适合做 memecoin launchpad agent。',
    summary_en: 'Lets the agent mint ERC-20s for you — uncommon need. Fits memecoin-launchpad agents.',
  },

  // ============ 基础设施 ============

  'claude-desktop': {
    tagline_zh: 'Anthropic Claude Desktop — MCP 原生客户端,最主流 agent runtime',
    tagline_en: 'Anthropic Claude Desktop — MCP-native client, the most common agent runtime',
    summary_zh: '整个 MCP 生态事实上的默认客户端。用户想"给 Claude 装工具",99% 的意思是"给 Claude Desktop 装 MCP"。',
    summary_en: 'The de facto default client of the whole MCP ecosystem. When a user says "add a tool to Claude," 99% of the time they mean Claude Desktop + MCP.',
  },
  'cursor': {
    tagline_zh: 'Cursor:AI 原生代码编辑器,内置 MCP 支持',
    tagline_en: 'Cursor — AI-native code editor with built-in MCP',
    summary_zh: '程序员主要 agent runtime。Cursor 用户倾向于"写代码时让 agent 查链上"这种工作流。',
    summary_en: 'The main agent runtime for developers. Cursor users tend to run "query onchain state while coding" workflows.',
  },
  'smithery': {
    tagline_zh: 'Smithery:MCP 注册表 + 一键托管,唯一主流 MCP 发现平台',
    tagline_en: 'Smithery — MCP registry + one-click hosting, the main MCP discovery platform',
    summary_zh: '用户装 MCP 的最常见入口(不是 GitHub)。Polymarket MCP 在 Smithery 拿 54,822 调用,第一的 install 数据源。',
    summary_en: 'The most common entry point users actually install MCPs from (not GitHub). Polymarket MCP hit 54,822 Smithery calls — the #1 install-data source.',
  },
  'pulsemcp': {
    tagline_zh: 'PulseMCP:第三方 MCP 目录,带流量估算',
    tagline_en: 'PulseMCP — third-party MCP directory with traffic estimates',
    summary_zh: '和 Smithery 类似但有流量排行。用户用它找"现在火的 MCP"。',
    summary_en: 'Similar to Smithery but with traffic rankings. Users go here to find "what MCPs are trending."',
  },
  'mcp-so': {
    tagline_zh: 'mcp.so:知名 MCP 列表平台',
    tagline_en: 'mcp.so — popular MCP listing platform',
    summary_zh: 'MCP 生态的另一个 discovery 站。重 SEO。',
    summary_en: 'Another MCP ecosystem discovery site. SEO-heavy.',
  },
  'openclaw': {
    tagline_zh: 'OpenClaw:开源 agent runtime(Claude Code 的开源对标)',
    tagline_en: 'OpenClaw — open-source agent runtime (open-source counterpart to Claude Code)',
    summary_zh: '2026-04-04 被 Anthropic 关闭 Claude Pro/Max 订阅接入 — 单次 agent 循环成本飙到 $1000-$5000。从此"自主循环"型 agent 经济模型改变。',
    summary_en: 'Blocked by Anthropic on April 4, 2026 from accessing Claude Pro/Max subscriptions — per-loop cost shot to $1000-5000. The autonomous-loop economics of this class of agent shifted overnight.',
  },
  'codex-cli': {
    tagline_zh: 'OpenAI Codex CLI,支持 MCP',
    tagline_en: 'OpenAI Codex CLI with MCP support',
    summary_zh: 'OpenAI 的 agent CLI。要让 GPT-5 类模型用 MCP 工具,就用这个。',
    summary_en: 'OpenAI\'s agent CLI. The way to let GPT-5-class models use MCP tools.',
  },
  'goose': {
    tagline_zh: 'Block 开源的本机 AI agent,支持 MCP',
    tagline_en: 'Block\'s open-source on-device AI agent, MCP-capable',
    summary_zh: 'Block(Jack Dorsey 的公司)出的本地 agent,534 star。注重"跑在你自己机器上",隐私向。',
    summary_en: 'Block (Jack Dorsey\'s company) ships this local agent — 534 stars. "Runs on your own machine," privacy-first.',
  },
  'gemini-cli': {
    tagline_zh: 'Google Gemini CLI,兼容 MCP',
    tagline_en: 'Google Gemini CLI — MCP compatible',
    summary_zh: 'Google 的 agent CLI。要用 Gemini 系列模型接 MCP 工具,就走这个。',
    summary_en: 'Google\'s agent CLI. Gemini-series models + MCP tools go through here.',
  },
  'windsurf': {
    tagline_zh: 'Codeium Windsurf:AI 编辑器,原生支持 MCP',
    tagline_en: 'Codeium Windsurf — AI editor with native MCP',
    summary_zh: 'Cursor 的直接竞品。开发者选 Cursor 还是 Windsurf 更多是偏好问题。',
    summary_en: 'Direct competitor to Cursor. Choosing between them is mostly personal preference at this point.',
  },
  'moonpay-agents': {
    tagline_zh: 'MoonPay Agents:onramp / offramp / 交易给 AI agent',
    tagline_en: 'MoonPay Agents — onramp / offramp / trading for AI agents',
    summary_zh: 'MoonPay 的"给 agent 经济用的 onramp"。agent 要 fiat → crypto 入金,MoonPay 是业界标准。',
    summary_en: 'MoonPay\'s "onramp for the agent economy." When an agent needs fiat → crypto entry, MoonPay is industry-standard.',
  },
};

export default editorial;
