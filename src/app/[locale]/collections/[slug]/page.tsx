import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { ChevronLeft, Download, Share2, Star, Activity, TrendingUp, Github } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { routing } from '@/i18n/routing';
import { collections, tools, type Tool } from '@/lib/mock-data';
import { formatCompact } from '@/lib/utils';
import { Nav } from '@/components/home/nav';
import { Footer } from '@/components/home/footer';
import { GetButton } from '@/components/tool/get-button';

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    collections.map((c) => ({ locale, slug: c.slug }))
  );
}

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  const locale = localeParam as 'en' | 'zh';
  setRequestLocale(locale);

  const collection = collections.find((c) => c.slug === slug);
  if (!collection) notFound();

  const colTools = collection.toolSlugs
    .map((s) => tools.find((t) => t.slug === s))
    .filter(Boolean) as Tool[];

  // 推荐的其它合集
  const otherCollections = collections.filter((c) => c.slug !== slug).slice(0, 3);

  // 每个工具在合集里的"理由"(只给确实存在的工具写)
  const reason: Record<string, { en: string; zh: string }> = {
    'jupiter-ultra': {
      en: 'Best execution for any Solana swap.',
      zh: '任何 Solana swap 的最佳执行。',
    },
    'cryptoiz-mcp': {
      en: 'Smart money lights on Solana — what winners are doing.',
      zh: 'Solana 聪明钱信号 — 赢家在做啥。',
    },
    'elizaos': {
      en: 'The framework half the crypto AI projects are built on.',
      zh: '半数新加密 AI 项目在用的框架。',
    },
    'solana-agent-kit': {
      en: '60+ Solana actions, batteries included.',
      zh: '60+ 个 Solana 动作,开箱即用。',
    },
    'coinbase-agentkit': {
      en: 'Every AI agent deserves a wallet.',
      zh: '每个 AI agent 都该有钱包。',
    },
    'phantom-mcp': {
      en: 'Non-custodial signing — keys never leave the wallet.',
      zh: '非托管签名 — 钥匙永不出钱包。',
    },
    'blockscout-mcp': {
      en: 'Onchain explorer primitives for any EVM agent.',
      zh: '任何 EVM agent 的链上浏览原语。',
    },
    'coingecko-mcp': {
      en: 'Default price and market data — used by most agents.',
      zh: '默认价格和市场数据 — 大多数 agent 都在用。',
    },
    'etherscan-mcp': {
      en: 'Official Etherscan across 60+ chains.',
      zh: 'Etherscan 官方支持 60+ 链。',
    },
    'goplus-mcp': {
      en: 'Token safety check — 12M wallets and 700M monthly calls trust it.',
      zh: '代币安全检测 — 1200 万钱包、月 7 亿调用量背书。',
    },
    'kukapay-rug-check-mcp': {
      en: 'RugCheck.xyz for your agent.',
      zh: 'RugCheck.xyz 封装给 agent 用。',
    },
    'kukapay-memecoin-radar-mcp': {
      en: 'Memecoin trend + KOL trade detection.',
      zh: 'memecoin 趋势 + KOL 交易检测。',
    },
    'kukapay-funding-rates-mcp': {
      en: 'Cross-exchange funding rates consolidated.',
      zh: '跨交易所资金费率合并一张表。',
    },
    'hyperliquid-python-sdk': {
      en: 'Official HL SDK with native agent-wallet signing.',
      zh: 'HL 官方 SDK,原生 agent-wallet 签名。',
    },
    'mektigboy-server-hyperliquid': {
      en: 'Popular community HL MCP wrapping the info endpoint.',
      zh: '社区流行版 HL MCP,封装 info 端点。',
    },
    'kukapay-hyperliquid-info-mcp': {
      en: 'Hyperliquid public data, ready for LLMs.',
      zh: 'HL 公开数据,可被 LLM 直接消费。',
    },
    'openbroker-cli': {
      en: 'MIT CLI built for autonomous HL agents.',
      zh: '为 HL 自治 agent 设计的 MIT CLI。',
    },
    'defillama-mcp': {
      en: 'TVL, yields, and protocol rankings.',
      zh: 'TVL、收益和协议排行。',
    },
    'moralis-mcp': {
      en: 'Multi-chain portfolio and DeFi positions.',
      zh: '多链 portfolio + DeFi 仓位。',
    },
    'dune-analytics-mcp': {
      en: 'Run Dune queries via natural language.',
      zh: '自然语言跑 Dune 查询。',
    },
    'crossmint-agent-wallet': {
      en: 'Smart-contract agent wallets with spending limits.',
      zh: '带额度的智能合约 agent 钱包。',
    },
    'mcpdotdirect-evm': {
      en: 'Generic EVM MCP — any chain, any wallet.',
      zh: '通用 EVM MCP — 任意链、任意钱包。',
    },
    'base-mcp': {
      en: 'Base L2 onchain toolkit with CDP wallet.',
      zh: 'Base L2 官方链上工具包 + CDP 钱包。',
    },
    'kukapay-polymarket-predictions-mcp': {
      en: 'Lightweight Polymarket odds-query wrapper.',
      zh: '轻量 Polymarket 赔率查询封装。',
    },
    'polymarket-mcp': {
      en: '#1 in actual install count on Smithery — 54,822 calls.',
      zh: 'Smithery 装机量第一 — 54,822 次调用。',
    },
    'goat-sdk': {
      en: '200+ integrations across EVM + Solana.',
      zh: 'EVM + Solana 200+ 集成。',
    },
    'virtuals-game': {
      en: 'Agent economy framework — Butler, ACP, $3B agentic GDP.',
      zh: 'Agent 经济框架 — Butler、ACP、$3B agentic GDP。',
    },
    'fetchai-uagents': {
      en: 'Python autonomous agents with on-chain identity.',
      zh: 'Python 自治 agent + 链上身份。',
    },
    'dexscreener-mcp': {
      en: 'DEX pairs + charts + new pool feed.',
      zh: 'DEX 交易对 + K 线 + 新池。',
    },
    'kukapay-honeypot-detector-mcp': {
      en: 'Multi-chain honeypot detection.',
      zh: '跨链蜜罐检测。',
    },
  };

  return (
    <>
      <Nav />
      <main className="relative">
        {/* Hero 封面 */}
        <section className={`relative overflow-hidden bg-gradient-to-br ${collection.accent}`}>
          <div className="absolute inset-0 bg-grid opacity-30 mix-blend-overlay" />
          <div className="absolute -top-20 -right-20 text-[18rem] opacity-30 leading-none rotate-12">
            {collection.icon}
          </div>

          <div className="container relative py-14 md:py-20">
            <Link
              href="/collections"
              className="inline-flex items-center gap-1 text-xs text-white/70 hover:text-white mb-6"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              {locale === 'zh' ? '所有合集' : 'All collections'}
            </Link>

            <div className="text-xs uppercase tracking-[0.2em] text-white/70 mb-3">
              {locale === 'zh' ? '合集' : 'Collection'}
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4 max-w-3xl">
              {collection.title[locale]}
            </h1>
            <p className="text-white/85 text-base md:text-lg max-w-2xl">
              {collection.subtitle[locale]}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/80">
              <span>{colTools.length} {locale === 'zh' ? '个工具' : 'tools'}</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-white text-black font-semibold shadow-xl hover:scale-[1.02] transition">
                <Download className="h-4 w-4" />
                {locale === 'zh' ? '一键装全部' : 'Install all'}
              </button>
              <button className="inline-flex items-center gap-2 h-12 px-5 rounded-full bg-white/10 backdrop-blur text-white border border-white/20 hover:bg-white/20 transition text-sm">
                <Share2 className="h-4 w-4" />
                {locale === 'zh' ? '分享' : 'Share'}
              </button>
            </div>
          </div>
        </section>

        {/* 编辑前言 */}
        <section className="container py-10">
          <div className="max-w-3xl">
            <p className="text-base md:text-lg leading-relaxed text-foreground/90">
              {locale === 'zh'
                ? `${collection.title.zh}是 AgentStore 编辑精选。我们相信这 ${colTools.length} 个工具是真实在推特 / Discord / 工作流里被用的那一组,而不是 GitHub 上"看着很火但没人装"的。每个工具下面都附上了我们放它进合集的理由。`
                : `${collection.title.en} is an AgentStore editors' pick. These ${colTools.length} tools are what we see actually running on Twitter / Discord / in real workflows — not the "looks hot on GitHub but no one installs" kind. We note why each belongs in the collection.`}
            </p>
          </div>
        </section>

        {/* 工具清单 */}
        <section className="container pb-10">
          <div className="space-y-3 max-w-4xl">
            {colTools.map((tool, i) => (
              <div
                key={tool.slug}
                className="group relative rounded-2xl border border-border/60 bg-card/40 p-5 md:p-6 lift-on-hover"
              >
                {/* 序号 */}
                <div className="absolute top-5 right-5 font-mono text-2xl text-muted-foreground/30 tabular-nums">
                  #{i + 1}
                </div>

                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* 图标 */}
                  <div className="h-14 w-14 shrink-0 rounded-2xl bg-muted flex items-center justify-center text-2xl">
                    {tool.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <Link
                        href={`/apps/${tool.slug}`}
                        className="font-semibold text-lg hover:text-gradient-brand transition"
                      >
                        {tool.name}
                      </Link>
                      {tool.official && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded border border-primary/40 text-primary uppercase tracking-wider">
                          Official
                        </span>
                      )}
                      <span className="text-xs text-muted-foreground">· {tool.author}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {tool.tagline[locale]}
                    </p>

                    {/* 为什么放这里 */}
                    {reason[tool.slug] && (
                      <div className="text-sm rounded-lg border-l-2 border-primary/50 bg-primary/5 pl-3 py-1.5 italic text-foreground/85">
                        <span className="text-xs uppercase tracking-wider text-primary not-italic mr-2">
                          {locale === 'zh' ? '为什么在这里' : 'Why it belongs'}
                        </span>
                        {reason[tool.slug][locale]}
                      </div>
                    )}

                    {/* 指标 */}
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      {tool.metrics.smitheryCalls != null && (
                        <span className="inline-flex items-center gap-1">
                          <Activity className="h-3 w-3" />
                          <span className="tabular-nums">{formatCompact(tool.metrics.smitheryCalls)}</span>
                          <span>{locale === 'zh' ? '调用' : 'calls'}</span>
                        </span>
                      )}
                      {tool.metrics.githubStars != null && (
                        <span className="inline-flex items-center gap-1">
                          <Github className="h-3 w-3" />
                          <span className="tabular-nums">{formatCompact(tool.metrics.githubStars)}</span>
                        </span>
                      )}
                      {tool.metrics.weeklyGrowthPct != null && tool.metrics.weeklyGrowthPct > 0 && (
                        <span className="inline-flex items-center gap-0.5 text-emerald-400 font-medium">
                          <TrendingUp className="h-3 w-3" />↑{tool.metrics.weeklyGrowthPct}%
                        </span>
                      )}
                      <span className="inline-flex items-center gap-0.5">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        <span className="tabular-nums font-medium text-foreground">{tool.score}</span>
                      </span>
                    </div>
                  </div>

                  {/* 按钮 */}
                  <div className="flex md:flex-col gap-2 md:items-end shrink-0">
                    <GetButton locale={locale} />
                    <Link
                      href={`/apps/${tool.slug}`}
                      className="inline-flex items-center h-8 px-3 rounded-full text-xs text-muted-foreground hover:text-foreground transition"
                    >
                      {locale === 'zh' ? '详情' : 'Details'}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 再次 CTA */}
          <div className="mt-8 max-w-4xl rounded-2xl border border-primary/30 bg-primary/5 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <div className="font-semibold">
                {locale === 'zh' ? '一键装整套到 Claude Desktop' : 'Install the whole set in Claude Desktop'}
              </div>
              <div className="text-sm text-muted-foreground mt-0.5">
                {locale === 'zh'
                  ? `生成一个合并 config,把这 ${colTools.length} 个工具一次全装。`
                  : `Generate a merged config that sets up all ${colTools.length} at once.`}
              </div>
            </div>
            <button className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-[linear-gradient(135deg,#8B5CF6,#6366F1,#06B6D4)] text-white font-semibold shadow-lg shadow-primary/30 hover:brightness-110 transition whitespace-nowrap">
              <Download className="h-4 w-4" />
              {locale === 'zh' ? '一键装全部' : 'Install all'}
            </button>
          </div>
        </section>

        {/* 其它合集 */}
        <section className="container py-10">
          <h2 className="text-lg md:text-xl font-semibold mb-5">
            {locale === 'zh' ? '相关合集' : 'Related collections'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherCollections.map((c) => (
              <Link
                key={c.slug}
                href={`/collections/${c.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 aspect-[4/3] lift-on-hover"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${c.accent} opacity-90`} />
                <div className="absolute inset-0 bg-grid opacity-30 mix-blend-overlay" />
                <div className="absolute top-4 right-4 text-5xl opacity-90">{c.icon}</div>
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <h3 className="text-white font-semibold text-base leading-tight mb-0.5">
                    {c.title[locale]}
                  </h3>
                  <div className="text-[11px] text-white/70">
                    {c.toolSlugs.length} {locale === 'zh' ? '个工具' : 'tools'}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
