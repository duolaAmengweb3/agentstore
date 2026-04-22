'use client';

import * as React from 'react';
import { useTranslations } from 'next-intl';
import { Search, TrendingUp, Sparkles, Activity } from 'lucide-react';
import { globalStats } from '@/lib/mock-data';
import { formatCompact, formatNumber } from '@/lib/utils';

export function HeroSearch() {
  const t = useTranslations('hero');
  const trending = t.raw('trendingTerms') as string[];

  return (
    <section className="relative overflow-hidden">
      {/* 背景氛围光 orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb bg-violet-600 -left-32 -top-32 h-96 w-96 animate-float-slow" />
        <div className="orb bg-cyan-500 -right-32 top-10 h-[28rem] w-[28rem] animate-float-slower" />
        <div className="absolute inset-0 bg-grid mask-fade-y opacity-60" />
      </div>

      <div className="container relative py-10 md:py-14">
        {/* Slogan */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-blink" />
          <span>Web3 AI Agent Store</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
          给你的 AI 装上{' '}
          <span className="text-gradient-brand">加密世界</span>
        </h1>
        <p className="mt-3 text-muted-foreground max-w-2xl text-sm md:text-base">
          The App Store for crypto AI agents — discover, install, and master every tool your
          Claude / ChatGPT / Cursor / Eliza agent needs.
        </p>

        {/* 大搜索框 */}
        <div className="mt-8 max-w-3xl">
          <div className="group relative card-gradient-border">
            <div className="relative flex items-center gap-3 h-14 md:h-16 px-5 rounded-2xl bg-card/60 backdrop-blur">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground/70 text-base md:text-lg"
              />
              <kbd className="hidden sm:inline-flex items-center rounded border border-border/60 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                ⌘ K
              </kbd>
            </div>
          </div>

          {/* 热门搜索 chip */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs text-muted-foreground inline-flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              {t('trending')}
            </span>
            {trending.map((term) => (
              <button
                key={term}
                className="h-7 px-3 rounded-full border border-border/60 bg-card/40 text-xs text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-card transition"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* 实时全局统计 */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl">
          <StatPill
            icon={<Sparkles className="h-3.5 w-3.5" />}
            value={formatNumber(globalStats.totalTools)}
            label={t('stats.tools')}
            accent="text-violet-400"
          />
          <StatPill
            icon={<TrendingUp className="h-3.5 w-3.5" />}
            value={`+${globalStats.newThisWeek}`}
            label={t('stats.newThisWeek')}
            accent="text-cyan-400"
          />
          <StatPill
            icon={<Activity className="h-3.5 w-3.5" />}
            value={formatCompact(globalStats.totalCalls)}
            label={t('stats.totalCalls')}
            accent="text-emerald-400"
          />
          <StatPill
            icon={<span>🔥</span>}
            value={globalStats.milestoneToday.toString()}
            label={t('stats.milestoneToday')}
            accent="text-amber-400"
          />
        </div>
      </div>
    </section>
  );
}

function StatPill({
  icon,
  value,
  label,
  accent,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  accent: string;
}) {
  return (
    <div className="relative rounded-xl border border-border/60 bg-card/40 backdrop-blur p-4 overflow-hidden lift-on-hover">
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
        <span className={accent}>{icon}</span>
        <span>{label}</span>
      </div>
      <div className={`text-2xl md:text-3xl font-semibold tabular-nums glow-number ${accent}`}>
        {value}
      </div>
    </div>
  );
}
