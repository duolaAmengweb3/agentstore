import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { ChevronLeft, Clock, Eye, Share2 } from 'lucide-react';
import { Link, routing } from '@/i18n/routing';
import { Nav } from '@/components/home/nav';
import { Footer } from '@/components/home/footer';
import { tutorials, getTutorial } from '@/lib/mock-tutorials';
import { tools } from '@/lib/mock-data';
import { formatCompact } from '@/lib/utils';
import { GetButton } from '@/components/tool/get-button';
import { JsonLd, buildArticleSchema, buildBreadcrumbSchema } from '@/components/seo/json-ld';

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://agentstore.xyz';

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    tutorials.map((t) => ({ locale, slug: t.slug }))
  );
}

export default async function TutorialDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: l, slug } = await params;
  const locale = l as 'en' | 'zh';
  setRequestLocale(locale);

  const tut = getTutorial(slug);
  if (!tut) notFound();

  const tutTools = tut.toolSlugs
    .map((s) => tools.find((x) => x.slug === s))
    .filter(Boolean) as typeof tools;

  const related = tutorials
    .filter((x) => x.slug !== tut.slug && x.topic === tut.topic)
    .slice(0, 3);

  // 极简 markdown → HTML(只处理 ## 标题 + 段落 + 列表)
  const bodyText = tut.body?.[locale] || '';
  const paragraphs = bodyText.split('\n').filter(Boolean);
  const hasBody = paragraphs.length > 0;

  const pageUrl = `${BASE}/${locale}/learn/${slug}`;

  return (
    <>
      <JsonLd
        data={[
          buildArticleSchema({
            headline: tut.title[locale],
            description: tut.excerpt[locale],
            url: pageUrl,
            datePublished: tut.publishedAt,
            author: tut.author,
          }),
          buildBreadcrumbSchema([
            { name: 'AgentStore', url: `${BASE}/${locale}` },
            { name: 'Learn',      url: `${BASE}/${locale}/learn` },
            { name: tut.title[locale], url: pageUrl },
          ]),
        ]}
      />
      <Nav />
      <main>
        {/* Hero */}
        <section className={`relative overflow-hidden bg-gradient-to-br ${tut.accent}`}>
          <div className="absolute inset-0 bg-grid opacity-20 mix-blend-overlay" />
          <div className="container relative py-10 md:py-16">
            <Link
              href="/learn"
              className="inline-flex items-center gap-1 text-xs text-white/75 hover:text-white mb-6"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              {locale === 'zh' ? '所有教程' : 'All tutorials'}
            </Link>
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold text-white/90 mb-4 bg-white/10 backdrop-blur rounded-full px-2.5 py-1 border border-white/20">
              {tut.tag[locale]}
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight max-w-4xl">
              {tut.title[locale]}
            </h1>
            <p className="mt-4 text-white/85 max-w-2xl text-base md:text-lg">
              {tut.excerpt[locale]}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/80">
              <div className="inline-flex items-center gap-2">
                <span className="h-7 w-7 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-sm">
                  {tut.authorAvatar}
                </span>
                <span>{tut.author}</span>
              </div>
              <span>·</span>
              <span>{tut.publishedAt}</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />{tut.readTime} {locale === 'zh' ? '分钟' : 'min'}
              </span>
              {tut.views != null && (
                <>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Eye className="h-3 w-3" />{formatCompact(tut.views)}
                  </span>
                </>
              )}
            </div>
          </div>
        </section>

        {/* 正文 + 侧边栏 */}
        <div className="container py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
            {/* 正文 */}
            <article className="prose-custom max-w-none">
              {hasBody ? (
                <>
                  {paragraphs.map((p, i) => {
                    if (p.startsWith('## ')) {
                      return (
                        <h2 key={i} className="text-2xl font-semibold mt-8 mb-3">
                          {p.replace(/^## /, '')}
                        </h2>
                      );
                    }
                    if (p.startsWith('# ')) {
                      return (
                        <h1 key={i} className="text-3xl font-semibold mt-8 mb-4">
                          {p.replace(/^# /, '')}
                        </h1>
                      );
                    }
                    if (/^\d+\.\s/.test(p)) {
                      return (
                        <p key={i} className="text-base leading-relaxed text-foreground/90 mb-2 pl-3 border-l-2 border-primary/30">
                          {p}
                        </p>
                      );
                    }
                    return (
                      <p key={i} className="text-base leading-relaxed text-foreground/90 mb-4">
                        {p}
                      </p>
                    );
                  })}

                  <div className="mt-10 pt-6 border-t border-border/60 flex items-center justify-between gap-3">
                    <div className="text-xs text-muted-foreground">
                      {locale === 'zh' ? '喜欢这篇?分享给朋友' : 'Liked it? Share with friends'}
                    </div>
                    <button className="inline-flex items-center gap-1.5 h-9 px-4 rounded-full border border-border bg-card/60 text-sm hover:bg-card transition">
                      <Share2 className="h-3.5 w-3.5" />
                      {locale === 'zh' ? '分享' : 'Share'}
                    </button>
                  </div>
                </>
              ) : (
                <div className="rounded-2xl border border-dashed border-border bg-card/20 p-10 text-center">
                  <div className="text-4xl mb-3">✍️</div>
                  <div className="text-lg font-medium mb-2">
                    {locale === 'zh' ? '文章撰写中' : 'Full article coming'}
                  </div>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    {locale === 'zh'
                      ? '这篇教程我们还在写。已经有简介和相关工具,正文会在完成后发布。'
                      : 'We\'re still drafting this one. Excerpt and related tools are set; full body publishes when ready.'}
                  </p>
                  <p className="text-xs text-muted-foreground mt-4">
                    {locale === 'zh' ? '订阅周报,文章发布时通知你。' : 'Subscribe to weekly to get notified when it drops.'}
                  </p>
                </div>
              )}
            </article>

            {/* 侧边栏 */}
            <aside className="space-y-5">
              {tutTools.length > 0 && (
                <div className="rounded-2xl border border-border/60 bg-card/40 p-5">
                  <div className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-3">
                    {locale === 'zh' ? '提到的工具' : 'Tools in this tutorial'}
                  </div>
                  <div className="space-y-2">
                    {tutTools.map((t) => (
                      <div key={t.slug} className="flex items-center gap-3 group">
                        <Link
                          href={`/apps/${t.slug}`}
                          className="flex items-center gap-3 flex-1 min-w-0"
                        >
                          <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center text-lg shrink-0">
                            {t.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium truncate">{t.name}</div>
                            <div className="text-xs text-muted-foreground truncate">{t.author}</div>
                          </div>
                        </Link>
                        <GetButton locale={locale} size="sm" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
                <div className="text-sm font-semibold mb-1">
                  {locale === 'zh' ? '订阅周报' : 'Subscribe to weekly'}
                </div>
                <div className="text-xs text-muted-foreground mb-3">
                  {locale === 'zh' ? '每周一,10 分钟读完加密 AI 圈。' : 'Monday mornings, 10-minute read.'}
                </div>
                <input
                  type="email"
                  placeholder={locale === 'zh' ? '你的邮箱' : 'your@email.com'}
                  className="w-full h-9 rounded-lg border border-border bg-background/60 px-3 text-sm outline-none focus:border-primary/60 transition mb-2"
                />
                <button className="w-full h-9 rounded-lg bg-foreground text-background text-xs font-medium hover:opacity-90 transition">
                  {locale === 'zh' ? '订阅' : 'Subscribe'}
                </button>
              </div>
            </aside>
          </div>
        </div>

        {/* 相关教程 */}
        {related.length > 0 && (
          <section className="container py-10">
            <h2 className="text-lg md:text-xl font-semibold mb-5">
              {locale === 'zh' ? '相关教程' : 'Related reading'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/learn/${r.slug}` as const}
                  className="group relative block rounded-2xl overflow-hidden border border-border/60 bg-card/40 lift-on-hover"
                >
                  <div className={`relative aspect-[16/10] bg-gradient-to-br ${r.accent}`}>
                    <div className="absolute inset-0 bg-grid opacity-20 mix-blend-overlay" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-sm leading-snug line-clamp-2 group-hover:text-gradient-brand transition">
                      {r.title[locale]}
                    </h3>
                    <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />{r.readTime}m
                      {r.views != null && (
                        <>
                          <span>·</span>
                          <Eye className="h-3 w-3" />{formatCompact(r.views)}
                        </>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
