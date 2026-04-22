'use client';

import { useTranslations } from 'next-intl';
import { Wand2, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';

export function WizardCta() {
  const t = useTranslations('wizard');

  return (
    <section className="container py-6">
      <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-[linear-gradient(135deg,rgba(139,92,246,0.12),rgba(6,182,212,0.08)_60%,transparent)] p-5 md:p-6">
        {/* 背景 orb */}
        <div className="orb bg-violet-600 h-48 w-48 -right-16 -top-16 opacity-25 animate-float-slow" />
        <div className="orb bg-cyan-500 h-48 w-48 -left-16 -bottom-16 opacity-20 animate-float-slower" />

        <div className="relative flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-[linear-gradient(135deg,#8B5CF6,#06B6D4)] flex items-center justify-center shadow-lg shadow-primary/30">
              <Wand2 className="h-6 w-6 text-white" />
            </div>
            <div className="md:max-w-xl">
              <h3 className="text-lg md:text-xl font-semibold">{t('title')}</h3>
              <p className="text-sm text-muted-foreground mt-0.5">{t('subtitle')}</p>
            </div>
          </div>

          <div className="md:ml-auto">
            <Link
              href="/wizard"
              className="group inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background font-medium text-sm shadow-lg hover:shadow-xl transition"
            >
              {t('cta')}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
