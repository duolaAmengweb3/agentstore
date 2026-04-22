import { setRequestLocale } from 'next-intl/server';
import { Clock, Eye, GraduationCap } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Nav } from '@/components/home/nav';
import { Footer } from '@/components/home/footer';
import { tutorials, type Tutorial } from '@/lib/mock-tutorials';
import { formatCompact } from '@/lib/utils';

export const metadata = { title: 'Learn · AgentStore' };

const levelMeta: Record<string, { labelEn: string; labelZh: string; accent: string }> = {
  intro:        { labelEn: 'Getting started',  labelZh: '入门',    accent: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' },
  intermediate: { labelEn: 'Intermediate',     labelZh: '进阶',    accent: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10' },
  advanced:     { labelEn: 'Advanced',         labelZh: '高阶',    accent: 'text-violet-400 border-violet-500/30 bg-violet-500/10' },
};

export default async function LearnIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: l } = await params;
  const locale = l as 'en' | 'zh';
  setRequestLocale(locale);

  // 第一篇作为 hero,剩下按 level 分
  const [hero, ...rest] = tutorials;
  const byLevel: Record<string, Tutorial[]> = {
    intro: rest.filter((t) => t.level === 'intro'),
    intermediate: rest.filter((t) => t.level === 'intermediate'),
    advanced: rest.filter((t) => t.level === 'advanced'),
  };

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60">
          <div className="pointer-events-none absolute inset-0">
            <div className="orb bg-violet-600 -left-20 -top-20 h-80 w-80 opacity-25 animate-float-slow" />
            <div className="orb bg-emerald-500 -right-20 top-10 h-72 w-72 opacity-20 animate-float-slower" />
            <div className="absolute inset-0 bg-grid mask-fade-y opacity-40" />
          </div>
          <div className="container relative py-10 md:py-14">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
              <GraduationCap className="h-3.5 w-3.5" />
              {locale === 'zh' ? '学习' : 'Learn'}
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-3">
              {locale === 'zh' ? '从零到用 AI 玩加密货币' : 'From zero to using AI for crypto'}
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              {locale === 'zh'
                ? '每周更新的深度评测、工作流指南、策略复盘。所有文章中英双语。'
                : 'Weekly deep dives, workflows, and post-mortems. All articles bilingual.'}
            </p>
          </div>
        </section>

        {/* Hero 文章 */}
        {hero && (
          <section className="container py-8">
            <Link
              href={`/learn/${hero.slug}` as const}
              className="group relative block rounded-3xl overflow-hidden border border-border/60 lift-on-hover"
            >
              <div className={`relative aspect-[21/9] bg-gradient-to-br ${hero.accent}`}>
                <div className="absolute inset-0 bg-grid opacity-20 mix-blend-overlay" />
                <div className="absolute inset-0 flex items-end p-6 md:p-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold text-white/90 mb-3 bg-white/10 backdrop-blur rounded-full px-2.5 py-1 border border-white/20">
                      {hero.tag[locale]}
                    </div>
                    <h2 className="text-white text-2xl md:text-4xl font-semibold leading-tight mb-2">
                      {hero.title[locale]}
                    </h2>
                    <p className="text-white/80 text-sm md:text-base line-clamp-2">
                      {hero.excerpt[locale]}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-white/80">
                      <span>{hero.author}</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" />{hero.readTime} {locale === 'zh' ? '分钟' : 'min'}
                      </span>
                      {hero.views != null && (
                        <span className="inline-flex items-center gap-1">
                          <Eye className="h-3 w-3" />{formatCompact(hero.views)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* 按 level 分组 */}
        {(['intro', 'intermediate', 'advanced'] as const).map((lvl) =>
          byLevel[lvl].length > 0 ? (
            <section key={lvl} className="container py-8">
              <div className="flex items-baseline justify-between mb-4">
                <h2 className="text-lg md:text-xl font-semibold">
                  {locale === 'zh' ? levelMeta[lvl].labelZh : levelMeta[lvl].labelEn}
                </h2>
                <span className="text-xs text-muted-foreground">{byLevel[lvl].length}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {byLevel[lvl].map((tut) => (
                  <TutorialCard key={tut.slug} tut={tut} locale={locale} />
                ))}
              </div>
            </section>
          ) : null
        )}
      </main>
      <Footer />
    </>
  );
}

function TutorialCard({ tut, locale }: { tut: Tutorial; locale: 'en' | 'zh' }) {
  return (
    <Link
      href={`/learn/${tut.slug}` as const}
      className="group relative block rounded-2xl overflow-hidden border border-border/60 bg-card/40 lift-on-hover"
    >
      <div className={`relative aspect-[16/10] bg-gradient-to-br ${tut.accent}`}>
        <div className="absolute inset-0 bg-grid opacity-20 mix-blend-overlay" />
        <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-black/40 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold text-white border border-white/20">
          {tut.tag[locale]}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-base leading-snug group-hover:text-gradient-brand transition line-clamp-2">
          {tut.title[locale]}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {tut.excerpt[locale]}
        </p>
        <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />{tut.readTime}m
          </span>
          {tut.views != null && (
            <span className="inline-flex items-center gap-1">
              <Eye className="h-3 w-3" />{formatCompact(tut.views)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
