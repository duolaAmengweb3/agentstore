'use client';

import { useTranslations, useLocale } from 'next-intl';
import { ArrowUpRight, Eye, Clock } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { creatorOfWeek, stories, tools } from '@/lib/mock-data';
import { formatCompact } from '@/lib/utils';

export function CreatorStories() {
  const t = useTranslations();
  const locale = useLocale() as 'en' | 'zh';
  const reps = creatorOfWeek.representative
    .map((s) => tools.find((tl) => tl.slug === s))
    .filter(Boolean);

  return (
    <section className="container py-10 md:py-14">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* 创作者 2/5 */}
        <div className="lg:col-span-2 relative group">
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${creatorOfWeek.accent} opacity-20 blur-2xl group-hover:opacity-40 transition`} />
          <div className="relative rounded-2xl border border-border/60 bg-card/60 p-5 h-full flex flex-col">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              {t('creator.title')}
            </div>
            <div className="flex items-center gap-4">
              <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${creatorOfWeek.accent} flex items-center justify-center text-3xl shadow-lg`}>
                {creatorOfWeek.avatar}
              </div>
              <div>
                <div className="text-lg font-semibold">{creatorOfWeek.name}</div>
                <div className="text-xs text-muted-foreground">{creatorOfWeek.handle}</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {creatorOfWeek.bio[locale]}
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border/60 bg-muted/30 p-3">
                <div className="text-xl font-semibold tabular-nums">{creatorOfWeek.toolsCount}</div>
                <div className="text-xs text-muted-foreground">{t('creator.toolsCount')}</div>
              </div>
              <div className="rounded-xl border border-border/60 bg-muted/30 p-3">
                <div className="text-xl font-semibold tabular-nums">
                  {formatCompact(creatorOfWeek.totalCalls)}
                </div>
                <div className="text-xs text-muted-foreground">{t('creator.totalCalls')}</div>
              </div>
            </div>

            <div className="mt-4">
              <div className="text-xs text-muted-foreground mb-2">{t('creator.representative')}</div>
              <ul className="space-y-1">
                {reps.map((tl) =>
                  tl ? (
                    <li key={tl.slug} className="flex items-center gap-2 text-sm">
                      <span className="text-base">{tl.icon}</span>
                      <span className="truncate">{tl.name}</span>
                    </li>
                  ) : null
                )}
              </ul>
            </div>

            <Link
              href={`/creators/${creatorOfWeek.slug}`}
              className="mt-auto pt-5 inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              {t('creator.visit')} <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* 故事 3/5 */}
        <div className="lg:col-span-3">
          <div className="flex items-baseline justify-between mb-4">
            <h3 className="text-lg font-semibold">{t('stories.title')}</h3>
          </div>
          <div className="space-y-3">
            {stories.map((s) => (
              <Link
                key={s.slug}
                href={`/learn/${s.slug}` as any}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-5 lift-on-hover cursor-pointer block"
              >
                <div className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${s.accent}`} />
                <div className="pl-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-muted/60 text-muted-foreground">
                      {s.tag[locale]}
                    </span>
                  </div>
                  <h4 className="text-base md:text-lg font-semibold leading-snug group-hover:text-gradient-brand transition">
                    {s.title[locale]}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
                    {s.excerpt[locale]}
                  </p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {s.readTime} {t('stories.readTime')}
                    </span>
                    {s.views != null && (
                      <span className="inline-flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {formatCompact(s.views)} {t('stories.views')}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
