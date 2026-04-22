'use client';

import { useTranslations, useLocale } from 'next-intl';
import { ArrowUpRight, TrendingUp, Trophy, Sparkles } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { tools, type Tool } from '@/lib/mock-data';
import { formatCompact } from '@/lib/utils';

export function RankingsGrid() {
  const t = useTranslations('rankings');
  const locale = useLocale() as 'en' | 'zh';

  const overall = [...tools].sort((a, b) => b.score - a.score).slice(0, 5);
  const growth = [...tools]
    .filter((t) => t.metrics.weeklyGrowthPct != null)
    .sort((a, b) => (b.metrics.weeklyGrowthPct || 0) - (a.metrics.weeklyGrowthPct || 0))
    .slice(0, 5);
  const rising = [...tools]
    .filter((t) => t.metrics.smitheryCalls && t.metrics.smitheryCalls < 5000 && (t.metrics.weeklyGrowthPct || 0) > 100)
    .sort((a, b) => (b.metrics.weeklyGrowthPct || 0) - (a.metrics.weeklyGrowthPct || 0))
    .slice(0, 5);

  return (
    <section className="container py-10 md:py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <RankingCard
          title={t('overall')}
          icon={<Trophy className="h-4 w-4" />}
          items={overall}
          accent="from-amber-500/20 via-orange-500/10 to-transparent"
          valueKey="score"
          locale={locale}
          viewAll={t('viewAll')}
          href="/rankings/overall"
        />
        <RankingCard
          title={t('growth')}
          icon={<TrendingUp className="h-4 w-4" />}
          items={growth}
          accent="from-emerald-500/20 via-teal-500/10 to-transparent"
          valueKey="growth"
          locale={locale}
          viewAll={t('viewAll')}
          href="/rankings/growth"
        />
        <RankingCard
          title={t('rising')}
          icon={<Sparkles className="h-4 w-4" />}
          items={rising.length ? rising : growth}
          accent="from-violet-500/20 via-fuchsia-500/10 to-transparent"
          valueKey="calls"
          locale={locale}
          viewAll={t('viewAll')}
          href="/rankings/new"
        />
      </div>
    </section>
  );
}

function RankingCard({
  title,
  icon,
  items,
  accent,
  valueKey,
  locale,
  viewAll,
  href,
}: {
  title: string;
  icon: React.ReactNode;
  items: Tool[];
  accent: string;
  valueKey: 'score' | 'growth' | 'calls';
  locale: 'en' | 'zh';
  viewAll: string;
  href: '/rankings/overall' | '/rankings/growth' | '/rankings/new';
}) {
  return (
    <div className="relative group">
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${accent} opacity-60 blur-xl group-hover:opacity-100 transition`} />
      <div className="relative rounded-2xl border border-border/60 bg-card/70 backdrop-blur-sm p-4 h-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <span className="text-primary">{icon}</span>
            {title}
          </div>
          <Link
            href={href}
            className="text-xs text-muted-foreground hover:text-foreground transition flex items-center gap-0.5"
          >
            {viewAll}
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>

        {items.length === 0 ? (
          <div className="text-xs text-muted-foreground py-6 text-center">
            {locale === 'zh' ? '暂无条目' : 'Nothing here yet'}
          </div>
        ) : (
        <ul className="space-y-2">
          {items.map((tool, i) => (
            <Link
              key={tool.slug}
              href={`/apps/${tool.slug}`}
              className="flex items-center gap-3 rounded-lg p-2 -m-2 hover:bg-muted/50 cursor-pointer transition"
            >
              <div className="w-6 text-xs font-mono text-muted-foreground tabular-nums text-right">
                {i + 1}
              </div>
              <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-muted/60 text-lg shrink-0">
                {tool.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{tool.name}</div>
                <div className="text-xs text-muted-foreground line-clamp-1" title={tool.tagline[locale]}>
                  {tool.tagline[locale]}
                </div>
              </div>
              <div className="text-right shrink-0">
                {valueKey === 'score' && (
                  <>
                    <div className="text-sm font-semibold tabular-nums">{tool.score}</div>
                    <div className="text-[10px] text-muted-foreground uppercase">score</div>
                  </>
                )}
                {valueKey === 'growth' && (
                  <>
                    <div className="text-sm font-semibold tabular-nums text-emerald-400">
                      ↑{tool.metrics.weeklyGrowthPct}%
                    </div>
                    <div className="text-[10px] text-muted-foreground">7d</div>
                  </>
                )}
                {valueKey === 'calls' && (
                  <>
                    <div className="text-sm font-semibold tabular-nums">
                      {formatCompact(tool.metrics.smitheryCalls || 0)}
                    </div>
                    <div className="text-[10px] text-muted-foreground">{locale === 'zh' ? '调用' : 'calls'}</div>
                  </>
                )}
              </div>
            </Link>
          ))}
        </ul>
        )}
      </div>
    </div>
  );
}
