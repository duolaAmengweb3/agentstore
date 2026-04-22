'use client';

import { useTranslations } from 'next-intl';
import { ChevronRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { categoryMeta, type CategoryMeta } from '@/lib/mock-data';

export function CategoryTiles() {
  const t = useTranslations('categories');

  return (
    <section className="container py-4 md:py-6">
      <div className="flex items-baseline justify-between mb-5">
        <h2 className="text-lg md:text-xl font-semibold">{t('title')}</h2>
        <Link
          href="/apps"
          className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-0.5"
        >
          all apps <ChevronRight className="h-3 w-3" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {categoryMeta.map((cat) => (
          <Tile key={cat.id} cat={cat} t={t} />
        ))}
      </div>
    </section>
  );
}

function Tile({ cat, t }: { cat: CategoryMeta; t: ReturnType<typeof useTranslations> }) {
  return (
    <Link
      href={`/apps?category=${cat.id}`}
      className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br ${cat.accent} p-4 text-left lift-on-hover`}
    >
      {/* 图标拼图背景 */}
      <div className="absolute top-2 right-2 grid grid-cols-2 gap-1 opacity-60 group-hover:opacity-100 transition">
        {cat.icons.map((i, idx) => (
          <div
            key={idx}
            className="h-6 w-6 flex items-center justify-center rounded-md bg-background/60 backdrop-blur text-xs"
          >
            {i}
          </div>
        ))}
      </div>

      <div className="relative mt-10">
        <div className="text-xs text-muted-foreground mb-1">{t(cat.id)}</div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-semibold tabular-nums">{cat.count}</span>
          <span className="text-xs text-muted-foreground">{t('toolsUnit')}</span>
        </div>
        {cat.newThisWeek > 0 && (
          <div className="mt-1 inline-flex items-center gap-1 text-xs text-emerald-400">
            <span className="h-1 w-1 rounded-full bg-emerald-400" />
            +{cat.newThisWeek} {t('newUnit')}
          </div>
        )}
      </div>
    </Link>
  );
}
