'use client';

import { useTranslations, useLocale } from 'next-intl';
import { ArrowUpRight, Star } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { tools, type Tool } from '@/lib/mock-data';
import { formatCompact } from '@/lib/utils';

export function TodayFeed() {
  const t = useTranslations('feed');
  const locale = useLocale() as 'en' | 'zh';

  // 今日(模拟:增长快的几个)
  const today = [...tools]
    .sort((a, b) => (b.metrics.weeklyGrowthPct || 0) - (a.metrics.weeklyGrowthPct || 0))
    .slice(0, 3);
  const yesterday = tools.slice(3, 6);
  const thisWeek = tools.slice(6, 9);

  return (
    <section className="container py-10 md:py-14">
      <div className="flex items-baseline justify-between mb-5">
        <h2 className="text-lg md:text-xl font-semibold">
          {locale === 'zh' ? '最新上线 & 更新' : 'Latest launches & updates'}
        </h2>
        <button className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-0.5">
          {t('viewMore')} <ArrowUpRight className="h-3 w-3" />
        </button>
      </div>

      <div className="rounded-2xl border border-border/60 bg-card/30 backdrop-blur overflow-hidden">
        <FeedSection label={t('today')} tools={today} locale={locale} feedT={t} />
        <FeedSection label={t('yesterday')} tools={yesterday} locale={locale} feedT={t} />
        <FeedSection label={t('thisWeek')} tools={thisWeek} locale={locale} feedT={t} />
      </div>
    </section>
  );
}

function FeedSection({
  label,
  tools,
  locale,
  feedT,
}: {
  label: string;
  tools: Tool[];
  locale: 'en' | 'zh';
  feedT: ReturnType<typeof useTranslations>;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 px-4 py-2 bg-muted/30 border-b border-border/60">
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted-foreground">
          {label}
        </span>
        <div className="flex-1 h-px bg-border/40" />
      </div>
      <ul className="divide-y divide-border/60">
        {tools.map((tool) => (
          <li
            key={tool.slug}
            className="group flex items-center gap-4 px-4 py-3 hover:bg-muted/30 transition"
          >
            <Link
              href={`/apps/${tool.slug}`}
              className="flex items-center gap-4 flex-1 min-w-0"
            >
              <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-muted/60 text-xl shrink-0">
                {tool.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium truncate">{tool.name}</span>
                  {tool.official && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded border border-primary/40 text-primary uppercase tracking-wider">
                      Official
                    </span>
                  )}
                  <span className="text-xs text-muted-foreground shrink-0">· {tool.author}</span>
                </div>
                <div className="text-xs text-muted-foreground truncate mt-0.5">
                  {tool.tagline[locale]}
                </div>
              </div>
            </Link>

            {/* 实时指标 */}
            <div className="hidden md:flex items-center gap-3 text-xs shrink-0">
              {tool.metrics.smitheryCalls && (
                <Stat
                  value={formatCompact(tool.metrics.smitheryCalls)}
                  label={locale === 'zh' ? '调用' : 'calls'}
                />
              )}
              {tool.metrics.npmMonthly && (
                <Stat
                  value={formatCompact(tool.metrics.npmMonthly)}
                  label={locale === 'zh' ? '月下载' : '/mo'}
                />
              )}
              {tool.metrics.weeklyGrowthPct != null && tool.metrics.weeklyGrowthPct > 0 && (
                <span className="text-emerald-400 tabular-nums font-medium">
                  ↑{tool.metrics.weeklyGrowthPct}%
                </span>
              )}
              <div className="inline-flex items-center gap-0.5 tabular-nums">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                {tool.score}
              </div>
            </div>

            <Button variant="get" size="sm" className="shrink-0">
              {feedT('get')}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-right">
      <div className="text-sm font-semibold tabular-nums leading-tight">{value}</div>
      <div className="text-[10px] text-muted-foreground leading-none">{label}</div>
    </div>
  );
}
