'use client';

import { useTranslations, useLocale } from 'next-intl';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { collections } from '@/lib/mock-data';
import { formatCompact } from '@/lib/utils';

export function CollectionsGrid() {
  const t = useTranslations('collections');
  const locale = useLocale() as 'en' | 'zh';

  return (
    <section className="container py-10 md:py-14">
      <div className="flex items-baseline justify-between mb-5">
        <h2 className="text-lg md:text-xl font-semibold">{t('title')}</h2>
        <Link
          href="/collections"
          className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-0.5"
        >
          {t('viewAll')} <ArrowUpRight className="h-3 w-3" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {collections.map((c) => (
          <Link
            key={c.slug}
            href={`/collections/${c.slug}`}
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 aspect-[4/3] text-left lift-on-hover"
          >
            {/* 渐变封面 */}
            <div className={`absolute inset-0 bg-gradient-to-br ${c.accent} opacity-90`} />
            {/* 噪点 / 网格 */}
            <div className="absolute inset-0 bg-grid opacity-30 mix-blend-overlay" />
            {/* 顶部大 emoji 作为"封面画" */}
            <div className="absolute top-4 right-4 text-5xl opacity-90 group-hover:scale-110 transition duration-300">
              {c.icon}
            </div>

            {/* 底部文字信息 */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
              <h3 className="text-white font-semibold text-base md:text-lg leading-tight mb-1">
                {c.title[locale]}
              </h3>
              <p className="text-white/80 text-xs line-clamp-2">
                {c.subtitle[locale]}
              </p>
              <div className="mt-2 flex items-center gap-3 text-[11px] text-white/70">
                <span>{c.toolSlugs.length} {locale === 'zh' ? '个工具' : 'tools'}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
