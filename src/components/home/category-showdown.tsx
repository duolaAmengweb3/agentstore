'use client';

import * as React from 'react';
import { useLocale } from 'next-intl';
import { Check, AlertTriangle, ArrowUpRight, Star, Crown } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { tools, type Tool } from '@/lib/mock-data';

/**
 * 按板块横向对比每类的 top-3。
 *
 * 每张卡不只是"名字 + 数字":
 *  - 最适合谁 / 什么场景("best for")
 *  - 要避的坑 / 什么时候别选("watch out")
 *  - 1 个核心 metric(smitheryCalls / npm / stars / growth)
 *
 * 编辑策展,手选的 pick,顺序 = 编辑觉得的首选 → 次选 → 备选。
 * pick 1 上会显示"首选"冠冕。
 */

type ShowdownPick = {
  slug: string;
  bestFor: { en: string; zh: string };
  watchOut: { en: string; zh: string };
};

type ShowdownSection = {
  id: string;
  label: { en: string; zh: string };
  hint: { en: string; zh: string };
  picks: [ShowdownPick, ShowdownPick, ShowdownPick];
};

const SECTIONS: ShowdownSection[] = [
  {
    id: 'cex',
    label: { en: 'CEX trading', zh: '交易所交易' },
    hint: { en: 'Picking how your agent trades on centralized exchanges', zh: '让 agent 在中心化交易所下单' },
    picks: [
      {
        slug: 'okx-agent-trade-kit',
        bestFor: { zh: '想要覆盖最全 — 现货 / 合约 / 期权 / bot / earn 一次到位', en: 'You want the widest coverage — spot / perp / options / bots / earn in one' },
        watchOut: { zh: 'API key 自己管,记得用 --read-only 模式先测', en: 'You manage the API keys yourself — start with --read-only mode' },
      },
      {
        slug: 'kraken-cli',
        bestFor: { zh: '要 DX 最佳 — Rust 单二进制 + NDJSON 输出,给 agent 设计', en: 'You want the best DX — Rust binary + NDJSON, built for agents' },
        watchOut: { zh: 'Kraken 不是所有亚洲用户都能用(地域限制)', en: 'Kraken is not available in all regions (geo-restricted)' },
      },
      {
        slug: 'binance-skills-hub',
        bestFor: { zh: '你已经在 Binance 上,或想用 Skills 格式(非 MCP)', en: 'You\'re already on Binance, or prefer Skills over MCP' },
        watchOut: { zh: 'Skills 不是 MCP,某些 client 不支持。官方正在补齐生态', en: 'Skills ≠ MCP — some clients don\'t yet support them' },
      },
    ],
  },
  {
    id: 'data',
    label: { en: 'On-chain data', zh: '链上数据' },
    hint: { en: 'Reading prices, flows, on-chain state via agent', zh: '让 agent 读行情 / 资金流 / 链上状态' },
    picks: [
      {
        slug: 'polymarket-mcp',
        bestFor: { zh: '做预测市场或舆情赔率 — Smithery 第一(54k+ 调用)的社区 MCP', en: 'Prediction markets / sentiment odds — #1 on Smithery (54k+ calls)' },
        watchOut: { zh: '只覆盖 Polymarket 一家,其他预测市场要另找', en: 'Polymarket-only — other prediction platforms need different tools' },
      },
      {
        slug: 'coingecko-mcp',
        bestFor: { zh: '通用行情基准 — 2M+ 币、所有主链覆盖', en: 'General price benchmark — 2M+ coins across all major chains' },
        watchOut: { zh: '免费档速率低,重度调用要付费 API key', en: 'Free tier is rate-limited — heavy usage needs a paid key' },
      },
      {
        slug: 'defillama-mcp',
        bestFor: { zh: 'DeFi 聚合数据 — TVL / 收益 / yield / 链上统计', en: 'DeFi aggregation — TVL / yields / on-chain stats' },
        watchOut: { zh: '不做价格,那是 CoinGecko 的事;两者搭配用', en: 'No price data — pair it with CoinGecko for that' },
      },
    ],
  },
  {
    id: 'framework',
    label: { en: 'Agent frameworks', zh: 'Agent 框架' },
    hint: { en: 'Building your own agent from scratch', zh: '从头写一个 agent' },
    picks: [
      {
        slug: 'elizaos',
        bestFor: { zh: '要开源生态最大 — 插件多、社区活、有多家 launch partner', en: 'Largest open-source agent ecosystem — plugins, community, partners' },
        watchOut: { zh: 'TypeScript 重度技术栈,学习曲线比 AgentKit 陡', en: 'Heavy TypeScript stack — steeper learning curve than AgentKit' },
      },
      {
        slug: 'coinbase-agentkit',
        bestFor: { zh: '链上 agent 支付 + 钱包入门 — npm 44k/月,下载量冠军', en: 'On-chain agent payments + wallet starter — 44k npm/mo, download leader' },
        watchOut: { zh: '重心在 x402 支付而非 CEX 交易,别当交易 kit 用', en: 'Focus is x402 payments, not CEX trading — don\'t use it as a trade kit' },
      },
      {
        slug: 'solana-agent-kit',
        bestFor: { zh: 'Solana 专属:60+ 动作开箱,DeFi / NFT / memecoin 场景最顺', en: 'Solana-native: 60+ actions, best DX for DeFi / NFT / memecoin' },
        watchOut: { zh: '只管 Solana,跨链就不是它的事了', en: 'Solana-only — cross-chain is out of scope' },
      },
    ],
  },
  {
    id: 'wallet',
    label: { en: 'Agent wallets', zh: 'Agent 钱包' },
    hint: { en: 'Giving your agent a wallet to sign / pay with', zh: '给 agent 配个能签名 / 付款的钱包' },
    picks: [
      {
        slug: 'phantom-mcp',
        bestFor: { zh: '非托管最佳 — 钥匙不出钱包,用 stamper keys + auto re-auth', en: 'Best non-custodial — keys stay in wallet, stamper + auto re-auth' },
        watchOut: { zh: '2026-02 才出,生态还在追赶 Coinbase', en: 'Launched Feb 2026 — ecosystem still catching up to Coinbase' },
      },
      {
        slug: 'coinbase-agentkit',
        bestFor: { zh: '要稳定 / 要量 — 44k npm/月,链上支付协议(x402)兄弟', en: 'Scale + stability — 44k npm/mo, x402 payment protocol sibling' },
        watchOut: { zh: '托管模式,适合"替用户花钱"的场景,不是"自己保管 key"', en: 'Custodial — fits "spend on user\'s behalf" more than "self-custody"' },
      },
      {
        slug: 'crossmint-agent-wallet',
        bestFor: { zh: '让 agent 能刷信用卡 — 已对接 Visa / Mastercard,有消费限额', en: 'Agents that swipe credit cards — Visa/MC integrated, spending limits' },
        watchOut: { zh: '合约型 smart wallet,gas 和复杂度比 EOA 高', en: 'Smart-contract wallet — higher gas + complexity than an EOA' },
      },
    ],
  },
  {
    id: 'infra',
    label: { en: 'Where to run it', zh: '在哪里跑' },
    hint: { en: 'Choosing your MCP client / agent runtime', zh: '选 MCP client / agent runtime' },
    picks: [
      {
        slug: 'claude-desktop',
        bestFor: { zh: '人类直接用 agent — MCP 的参考实现,大多数用户在这里', en: 'Humans using agents directly — the MCP reference client' },
        watchOut: { zh: '纯 GUI,没法跑 headless / 自动化', en: 'GUI-only — no headless / automation mode' },
      },
      {
        slug: 'cursor',
        bestFor: { zh: '写代码顺便用 agent — 编辑器里直接调 MCP', en: 'Coding + agents in one — MCP from inside the editor' },
        watchOut: { zh: '是编辑器不是 runtime,复杂 agent 任务还是用 Claude Desktop', en: 'It\'s an editor, not a runtime — complex agents → Claude Desktop' },
      },
      {
        slug: 'smithery',
        bestFor: { zh: '装 MCP 最省事 — 注册表 + 自动安装 UI', en: 'Easiest way to install — registry + auto-install UI' },
        watchOut: { zh: '不是所有 MCP 都上了 Smithery,冷门的还是手动装', en: 'Not every MCP is on Smithery — niche ones still need manual setup' },
      },
    ],
  },
];

export function CategoryShowdown() {
  const locale = useLocale() as 'en' | 'zh';
  const [active, setActive] = React.useState(SECTIONS[0].id);
  const section = SECTIONS.find((s) => s.id === active)!;

  return (
    <section className="container py-10 md:py-14">
      <div className="mb-5 flex flex-col gap-1">
        <div className="text-[11px] uppercase tracking-[0.25em] text-primary">
          {locale === 'zh' ? '同板块 top 3 对比' : 'Top 3 head-to-head'}
        </div>
        <h2 className="text-lg md:text-xl font-semibold">
          {locale === 'zh' ? '同类里选哪个?' : 'Which one do I pick?'}
        </h2>
        <p className="text-sm text-muted-foreground max-w-2xl">
          {locale === 'zh'
            ? '每类选 3 个,直接说清楚"什么场景用谁"和"要避什么坑",不用你自己对比数字。'
            : 'Three picks per category, with "best for" and "watch out" spelled out so you don\'t have to compare numbers yourself.'}
        </p>
      </div>

      {/* 板块 tab */}
      <div className="mb-5 flex flex-wrap gap-2">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
              active === s.id
                ? 'bg-foreground text-background'
                : 'border border-border/60 bg-card/40 text-muted-foreground hover:text-foreground'
            }`}
          >
            {s.label[locale]}
          </button>
        ))}
      </div>

      <div className="mb-5 text-sm text-muted-foreground">
        {section.hint[locale]}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {section.picks.map((p, idx) => {
          const tool = tools.find((t) => t.slug === p.slug);
          if (!tool) return null;
          return <PickCard key={p.slug} tool={tool} pick={p} rank={idx} locale={locale} />;
        })}
      </div>
    </section>
  );
}

function PickCard({
  tool,
  pick,
  rank,
  locale,
}: {
  tool: Tool;
  pick: ShowdownPick;
  rank: number;
  locale: 'en' | 'zh';
}) {
  const isTop = rank === 0;
  const metric = pickMetric(tool, locale);

  return (
    <Link
      href={`/apps/${tool.slug}`}
      className={`group relative overflow-hidden rounded-2xl border bg-card/60 p-5 transition hover:bg-card ${
        isTop ? 'border-primary/40 shadow-lg shadow-primary/10' : 'border-border/60 hover:border-border'
      }`}
    >
      {isTop && (
        <div className="absolute top-0 right-0 inline-flex items-center gap-1 rounded-bl-xl bg-gradient-to-br from-amber-400 to-orange-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
          <Crown className="h-3 w-3" />
          {locale === 'zh' ? '首选' : 'Top pick'}
        </div>
      )}
      {isTop && <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-60 transition group-hover:opacity-100" />}

      <div className="relative">
        <div className="flex items-start justify-between mb-3">
          <div className="h-12 w-12 rounded-xl bg-muted/70 flex items-center justify-center text-2xl shrink-0">
            {tool.icon}
          </div>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>

        <div className="flex items-center gap-2 mb-1">
          <span className="font-semibold text-base leading-tight">{tool.name}</span>
          {tool.official && (
            <span className="text-[10px] px-1.5 py-0.5 rounded border border-primary/40 text-primary uppercase tracking-wider">
              Official
            </span>
          )}
        </div>
        <div className="text-xs text-muted-foreground mb-3.5">
          {tool.author}
        </div>

        <div className="space-y-2.5">
          <div className="flex items-start gap-2">
            <Check className="h-3.5 w-3.5 shrink-0 mt-0.5 text-emerald-400" />
            <div className="text-sm leading-relaxed">
              <span className="text-[10px] uppercase tracking-wider text-emerald-400/90 font-semibold mr-1.5">
                {locale === 'zh' ? '最适合' : 'Best for'}
              </span>
              <span className="text-foreground/90">{pick.bestFor[locale]}</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <AlertTriangle className="h-3.5 w-3.5 shrink-0 mt-0.5 text-amber-400" />
            <div className="text-sm leading-relaxed">
              <span className="text-[10px] uppercase tracking-wider text-amber-400/90 font-semibold mr-1.5">
                {locale === 'zh' ? '避坑' : 'Watch out'}
              </span>
              <span className="text-foreground/90">{pick.watchOut[locale]}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 pt-3 border-t border-border/40 text-[11px] text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
            <span className="tabular-nums font-semibold text-foreground">{tool.score.toFixed(1)}</span>
          </span>
          {metric && (
            <>
              <span className="text-border">·</span>
              <span className="tabular-nums">{metric}</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}

function pickMetric(tool: Tool, locale: 'en' | 'zh'): string | null {
  const m = tool.metrics;
  if (m.smitheryCalls != null && m.smitheryCalls > 0) {
    return `${formatK(m.smitheryCalls)} ${locale === 'zh' ? '调用' : 'calls'}`;
  }
  if (m.npmMonthly != null && m.npmMonthly > 0) {
    return `${formatK(m.npmMonthly)} ${locale === 'zh' ? '月下载' : '/mo npm'}`;
  }
  if (m.githubStars != null && m.githubStars > 0) {
    return `⭐ ${formatK(m.githubStars)}`;
  }
  if (m.weeklyGrowthPct != null && m.weeklyGrowthPct > 0) {
    return `↑${m.weeklyGrowthPct}% ${locale === 'zh' ? '/ 周' : '/ wk'}`;
  }
  return null;
}

function formatK(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k`;
  return String(n);
}
