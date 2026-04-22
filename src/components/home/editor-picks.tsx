'use client';

import { useLocale } from 'next-intl';
import { ArrowUpRight, Star } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { tools } from '@/lib/mock-data';

/**
 * 首页"编辑精选":3 个大卡,突出编辑的 2-3 句判断(summary)
 * 指标(star / calls / growth)只做辅助,不是主角
 *
 * 选哪三个 by:
 *  - Polymarket MCP:Smithery 调用量第一(54,822),crypto MCP 的 proof-of-demand
 *  - OKX Agent Trade Kit:最全的 CEX agent toolkit,官方出品
 *  - Kraken CLI:DX 天花板,值得所有 agent 工具作者学习
 *
 * 手选 — 不是靠 metrics 排出来的,就是编辑的选品
 */
const PICK_SLUGS = ['polymarket-mcp', 'okx-agent-trade-kit', 'kraken-cli'];

export function EditorPicks() {
  const locale = useLocale() as 'en' | 'zh';

  const picks = PICK_SLUGS
    .map((slug) => tools.find((t) => t.slug === slug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  if (picks.length === 0) return null;

  return (
    <section className="container py-10 md:py-14">
      <div className="mb-6 flex items-baseline justify-between">
        <div>
          <div className="mb-1 text-[11px] uppercase tracking-[0.25em] text-primary">
            {locale === 'zh' ? '编辑精选' : "Editor's picks"}
          </div>
          <h2 className="text-lg md:text-xl font-semibold">
            {locale === 'zh' ? '这三个值得你花时间' : 'Three worth your time'}
          </h2>
        </div>
        <span className="text-xs text-muted-foreground max-w-xs text-right">
          {locale === 'zh'
            ? '不是榜单跑出来的,是编辑读完文档 + 代码后的判断'
            : 'Not ranked by metrics — chosen after reading the docs + code'}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {picks.map((tool) => (
          <Link
            key={tool.slug}
            href={`/apps/${tool.slug}`}
            className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/60 p-6 transition hover:border-primary/40 hover:bg-card"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent opacity-60 transition group-hover:opacity-100" />

            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div className="h-14 w-14 rounded-2xl bg-muted/70 flex items-center justify-center text-3xl shrink-0">
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
              <div className="text-xs text-muted-foreground mb-3">
                {tool.author}
              </div>

              {tool.summary ? (
                <p className="text-sm text-foreground/90 leading-relaxed">
                  {tool.summary[locale]}
                </p>
              ) : (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tool.tagline[locale]}
                </p>
              )}

              <div className="mt-5 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
                <span className="inline-flex items-center gap-1 rounded-full bg-muted/50 px-2 py-0.5">
                  <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
                  <span className="tabular-nums font-semibold text-foreground">{tool.score.toFixed(1)}</span>
                </span>
                {tool.metrics.smitheryCalls != null && (
                  <span className="rounded-full bg-muted/50 px-2 py-0.5 tabular-nums">
                    {formatK(tool.metrics.smitheryCalls)} {locale === 'zh' ? '调用' : 'calls'}
                  </span>
                )}
                {tool.metrics.githubStars != null && (
                  <span className="rounded-full bg-muted/50 px-2 py-0.5 tabular-nums">
                    ⭐ {formatK(tool.metrics.githubStars)}
                  </span>
                )}
                {tool.metrics.weeklyGrowthPct != null && tool.metrics.weeklyGrowthPct > 0 && (
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 tabular-nums text-emerald-400">
                    ↑{tool.metrics.weeklyGrowthPct}%
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function formatK(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k`;
  return String(n);
}
