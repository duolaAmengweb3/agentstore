'use client';

import { useTranslations, useLocale } from 'next-intl';
import { topics } from '@/lib/mock-data';

export function TopicTiles() {
  const t = useTranslations('topics');
  const locale = useLocale() as 'en' | 'zh';

  return (
    <section className="container py-6">
      <h3 className="text-base md:text-lg font-semibold mb-3">{t('title')}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {topics.map((tp) => (
          <button
            key={tp.slug}
            className="group relative overflow-hidden rounded-xl border border-border/60 bg-card/40 px-4 py-3 text-left lift-on-hover"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{tp.icon}</span>
              <div className="min-w-0">
                <div className="text-sm font-medium truncate">{tp.label[locale]}</div>
                <div className="text-xs text-muted-foreground">
                  {tp.count} {locale === 'zh' ? '个工具' : 'tools'}
                </div>
              </div>
            </div>
            {/* hover glow */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/10 to-transparent transition" />
          </button>
        ))}
      </div>
    </section>
  );
}
