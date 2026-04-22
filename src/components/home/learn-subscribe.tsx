'use client';

import { useTranslations } from 'next-intl';
import { GraduationCap, ArrowRight, Mail } from 'lucide-react';
import { Link } from '@/i18n/routing';

export function LearnSubscribe() {
  const learn = useTranslations('learn');
  const sub = useTranslations('subscribe');

  return (
    <section className="container py-10 md:py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 学习入口 */}
        <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-6">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="relative flex gap-4">
            <div className="h-12 w-12 rounded-xl bg-violet-500/20 flex items-center justify-center shrink-0">
              <GraduationCap className="h-6 w-6 text-violet-400" />
            </div>
            <div className="flex-1">
              <div className="text-base md:text-lg font-semibold">{learn('title')}</div>
              <p className="text-sm text-muted-foreground mt-1">{learn('subtitle')}</p>
              <Link
                href="/learn"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                {learn('cta')}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 订阅 */}
        <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-6">
          <div className="absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-1">
              <div className="h-9 w-9 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                <Mail className="h-4 w-4 text-cyan-400" />
              </div>
              <div className="text-base md:text-lg font-semibold">{sub('title')}</div>
            </div>
            <p className="text-sm text-muted-foreground">{sub('subtitle')}</p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder={sub('placeholder')}
                className="flex-1 h-11 rounded-lg border border-border/60 bg-background/60 px-3 text-sm outline-none focus:border-primary/60 transition"
              />
              <button
                type="submit"
                className="h-11 px-5 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition"
              >
                {sub('cta')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
