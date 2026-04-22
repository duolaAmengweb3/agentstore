'use client';

import * as React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { tickerEvents, type TickerEvent } from '@/lib/mock-data';

const kindColor: Record<TickerEvent['kind'], string> = {
  milestone: 'text-amber-400',
  launch: 'text-cyan-400',
  growth: 'text-emerald-400',
  rating: 'text-violet-400',
  warn: 'text-rose-400',
};

const kindIcon: Record<TickerEvent['kind'], string> = {
  milestone: '🔥',
  launch: '🆕',
  growth: '📈',
  rating: '⭐',
  warn: '⚠️',
};

export function LiveTicker() {
  const t = useTranslations('liveTicker');
  const locale = useLocale() as 'en' | 'zh';

  // 没有事件就不渲染 — 未来接 GitHub/npm/Smithery 实时流
  if (tickerEvents.length === 0) return null;

  // 重复两份数据以实现无缝循环
  const doubled = [...tickerEvents, ...tickerEvents];

  return (
    <section className="border-y border-border/60 bg-card/20 backdrop-blur">
      <div className="container flex items-center gap-4 py-3">
        {/* LIVE 指示器 */}
        <div className="shrink-0 inline-flex items-center gap-2 rounded-full bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-400 ring-1 ring-rose-500/20">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
          </span>
          {t('label')}
        </div>

        {/* 滚动轨道 */}
        <div className="relative flex-1 overflow-hidden">
          {/* 左右淡出 mask */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="marquee-track">
            {doubled.map((event, i) => (
              <button
                key={i}
                className="inline-flex items-center gap-2 px-5 text-sm whitespace-nowrap hover:text-foreground transition"
              >
                <span className="text-base">{kindIcon[event.kind]}</span>
                <span className={`${kindColor[event.kind]} font-medium`}>
                  {event.text[locale]}
                </span>
                <span className="text-xs text-muted-foreground">· {event.timeAgo[locale]}</span>
                <span className="text-border">•</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
