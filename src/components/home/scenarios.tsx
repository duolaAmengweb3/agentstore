'use client';

import { useLocale } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { tools, collections } from '@/lib/mock-data';

/**
 * 首屏场景入口:用户带着任务进来("我想做 X")
 * 每个卡对应一个我们策展好的 collection,把 tagline 写成 natural-language 问题
 * 不是"Collection / Wallet First"这种内部术语
 */

type Scenario = {
  /** collection slug(对应 /collections/{slug}) */
  collection: string;
  question: { en: string; zh: string };
  answer: { en: string; zh: string };
  icon: string;
  accent: string;
};

const SCENARIOS: Scenario[] = [
  {
    collection: 'wallet-first',
    question: { zh: '想给 agent 配个钱包?', en: 'Need to give your agent a wallet?' },
    answer: { zh: 'Coinbase / Phantom / Crossmint,三家各有定位', en: 'Coinbase, Phantom, Crossmint — three different approaches' },
    icon: '🔐',
    accent: 'from-violet-500/25 via-indigo-500/15 to-transparent',
  },
  {
    collection: 'anti-rug',
    question: { zh: '买 memecoin 前怕 rug?', en: 'Worried a memecoin will rug?' },
    answer: { zh: 'GoPlus + RugCheck + Honeypot detector 跑一遍', en: 'Run GoPlus + RugCheck + honeypot detector first' },
    icon: '🛡️',
    accent: 'from-rose-500/25 via-red-500/15 to-transparent',
  },
  {
    collection: 'hyperliquid-kit',
    question: { zh: '做 Hyperliquid 交易 agent?', en: 'Building a Hyperliquid trading agent?' },
    answer: { zh: 'Python SDK + MCP 社区版,都在这里', en: 'The Python SDK + community MCP, all curated here' },
    icon: '⚡',
    accent: 'from-cyan-500/25 via-sky-500/15 to-transparent',
  },
  {
    collection: 'data-pros',
    question: { zh: '想做严肃链上数据?', en: 'Serious on-chain data work?' },
    answer: { zh: 'CoinGecko / Etherscan / DefiLlama 官方 MCP', en: 'Official MCPs from CoinGecko, Etherscan, DefiLlama' },
    icon: '🧮',
    accent: 'from-indigo-500/25 via-purple-500/15 to-transparent',
  },
  {
    collection: 'solana-memecoin-hunter',
    question: { zh: 'Solana 狙击 memecoin?', en: 'Sniping Solana memecoins?' },
    answer: { zh: 'Jupiter + memecoin radar + rug check 组合', en: 'Jupiter + memecoin radar + rug-check combo' },
    icon: '🚀',
    accent: 'from-emerald-500/25 via-green-500/15 to-transparent',
  },
  {
    collection: 'dev-must-read',
    question: { zh: '自己写一个 agent?', en: 'Building your own agent?' },
    answer: { zh: 'ElizaOS / Solana Agent Kit / Coinbase AgentKit', en: 'ElizaOS, Solana Agent Kit, Coinbase AgentKit' },
    icon: '💻',
    accent: 'from-slate-500/25 via-zinc-500/15 to-transparent',
  },
];

export function Scenarios() {
  const locale = useLocale() as 'en' | 'zh';

  return (
    <section className="container py-10 md:py-14">
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="text-lg md:text-xl font-semibold">
          {locale === 'zh' ? '你是来干嘛的?' : 'What are you trying to do?'}
        </h2>
        <span className="text-xs text-muted-foreground">
          {locale === 'zh' ? '点一个,直接看我们策展的工具组合' : 'Pick one to see our curated stack'}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {SCENARIOS.map((s) => {
          const col = collections.find((c) => c.slug === s.collection);
          const toolCount = col
            ? col.toolSlugs.filter((slug) => tools.some((t) => t.slug === slug)).length
            : 0;
          return (
            <Link
              key={s.collection}
              href={`/collections/${s.collection}` as any}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-5 transition hover:border-border hover:bg-card"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-70 transition group-hover:opacity-100`} />
              <div className="relative">
                <div className="mb-3 flex items-start justify-between">
                  <div className="text-2xl">{s.icon}</div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
                <div className="text-base font-semibold leading-snug">
                  {s.question[locale]}
                </div>
                <div className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  {s.answer[locale]}
                </div>
                {toolCount > 0 && (
                  <div className="mt-4 text-[11px] uppercase tracking-wider text-muted-foreground">
                    {toolCount} {locale === 'zh' ? '个工具' : 'tools'}
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
