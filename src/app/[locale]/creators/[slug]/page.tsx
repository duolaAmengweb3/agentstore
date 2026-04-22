import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import {
  ChevronLeft, BadgeCheck, Star, Activity, TrendingUp, Github, Twitter, Globe, ArrowUpRight, Package,
} from 'lucide-react';
import { Link, routing } from '@/i18n/routing';
import { Nav } from '@/components/home/nav';
import { Footer } from '@/components/home/footer';
import { getCreator, getToolsByCreator, creatorTotalCalls } from '@/lib/mock-creators';
import { tools } from '@/lib/mock-data';
import { formatCompact } from '@/lib/utils';

export async function generateStaticParams() {
  const authors = Array.from(new Set(tools.map((t) => t.author)));
  return routing.locales.flatMap((locale) =>
    authors.map((slug) => ({ locale, slug }))
  );
}

export default async function CreatorPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: l, slug } = await params;
  const locale = l as 'en' | 'zh';
  setRequestLocale(locale);

  const creator = getCreator(slug);
  if (!creator) notFound();

  const theirTools = getToolsByCreator(slug);
  const totalCalls = creatorTotalCalls(slug);
  const totalStars = theirTools.reduce((s, t) => s + (t.metrics.githubStars || 0), 0);

  // 排序:按 score 降序
  const sortedTools = [...theirTools].sort((a, b) => b.score - a.score);
  // 分布统计(分类)
  const categoryDist = theirTools.reduce<Record<string, number>>((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60">
          <div className={`absolute inset-0 bg-gradient-to-br ${creator.accent} opacity-[0.18]`} />
          <div className="absolute inset-0 bg-grid mask-fade-y opacity-30" />

          <div className="container relative py-10 md:py-14">
            <Link
              href="/apps"
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground mb-6"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              {locale === 'zh' ? '所有工具' : 'All apps'}
            </Link>

            <div className="flex flex-col md:flex-row md:items-end gap-6">
              {/* 头像 */}
              <div className="shrink-0">
                <div className={`h-24 w-24 md:h-32 md:w-32 rounded-3xl bg-gradient-to-br ${creator.accent} flex items-center justify-center text-5xl md:text-6xl shadow-2xl shadow-black/30`}>
                  {creator.avatar}
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  {locale === 'zh' ? '创作者' : 'Creator'}
                </div>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">{creator.name}</h1>
                  {creator.verified && (
                    <BadgeCheck className="h-6 w-6 text-primary fill-primary/20" />
                  )}
                </div>
                <div className="text-muted-foreground text-sm mb-3">{creator.handle}</div>
                <p className="text-base text-foreground/85 max-w-2xl">
                  {creator.bio[locale]}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {creator.twitter && (
                    <a
                      href={`https://x.com/${creator.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 h-9 px-3 rounded-full border border-border/60 bg-card/60 text-xs hover:bg-card transition"
                    >
                      <Twitter className="h-3 w-3" />X
                    </a>
                  )}
                  {creator.github && (
                    <a
                      href={`https://github.com/${creator.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 h-9 px-3 rounded-full border border-border/60 bg-card/60 text-xs hover:bg-card transition"
                    >
                      <Github className="h-3 w-3" />GitHub
                    </a>
                  )}
                  {creator.website && (
                    <a
                      href={creator.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 h-9 px-3 rounded-full border border-border/60 bg-card/60 text-xs hover:bg-card transition"
                    >
                      <Globe className="h-3 w-3" />{locale === 'zh' ? '网站' : 'Website'}
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* 聚合统计 */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
              <AggStat icon={<Package className="h-4 w-4" />} value={theirTools.length.toString()} label={locale === 'zh' ? '个工具' : 'tools'} accent="text-violet-400" />
              <AggStat icon={<Activity className="h-4 w-4" />} value={formatCompact(totalCalls)} label={locale === 'zh' ? '累计调用' : 'total calls'} accent="text-cyan-400" />
              <AggStat icon={<Github className="h-4 w-4" />} value={formatCompact(totalStars)} label="GitHub ⭐" accent="text-amber-400" />
              <AggStat
                icon={<Star className="h-4 w-4" />}
                value={
                  theirTools.length
                    ? (theirTools.reduce((s, t) => s + t.score, 0) / theirTools.length).toFixed(1)
                    : '—'
                }
                label={locale === 'zh' ? '平均分' : 'avg score'}
                accent="text-emerald-400"
              />
            </div>
          </div>
        </section>

        {/* Tools grid */}
        <section className="container py-10">
          <div className="flex items-baseline justify-between mb-5">
            <h2 className="text-lg md:text-xl font-semibold">
              {locale === 'zh' ? `全部作品(${theirTools.length})` : `All tools (${theirTools.length})`}
            </h2>
          </div>

          {sortedTools.length === 0 ? (
            <div className="rounded-2xl border border-border/60 bg-card/40 p-10 text-center text-muted-foreground">
              {locale === 'zh' ? '这位创作者暂时没有工具收录。' : 'No tools indexed for this creator yet.'}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sortedTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/apps/${tool.slug}`}
                  className="group relative block rounded-2xl border border-border/60 bg-card/40 p-5 lift-on-hover"
                >
                  <div className="flex items-start gap-3">
                    <div className="h-12 w-12 shrink-0 rounded-xl bg-muted flex items-center justify-center text-2xl">
                      {tool.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-medium truncate">{tool.name}</span>
                        {tool.official && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded border border-primary/40 text-primary uppercase tracking-wider shrink-0">
                            Official
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5 capitalize">
                        {tool.category}
                      </div>
                    </div>
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition shrink-0" />
                  </div>
                  <p className="mt-3 text-sm text-foreground/80 line-clamp-2 min-h-[2.5rem]">
                    {tool.tagline[locale]}
                  </p>
                  <div className="mt-4 flex items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2">
                      {tool.metrics.smitheryCalls != null && (
                        <span className="inline-flex items-center gap-1 text-muted-foreground">
                          <Activity className="h-3 w-3" />
                          <span className="tabular-nums">{formatCompact(tool.metrics.smitheryCalls)}</span>
                        </span>
                      )}
                      {tool.metrics.weeklyGrowthPct != null && tool.metrics.weeklyGrowthPct > 0 && (
                        <span className="inline-flex items-center gap-0.5 text-emerald-400 font-medium tabular-nums">
                          <TrendingUp className="h-3 w-3" />↑{tool.metrics.weeklyGrowthPct}%
                        </span>
                      )}
                    </div>
                    <div className="inline-flex items-center gap-1">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                      <span className="tabular-nums font-medium">{tool.score}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* 分类分布 */}
          {Object.keys(categoryDist).length > 0 && (
            <div className="mt-10 rounded-2xl border border-border/60 bg-card/30 p-5 max-w-2xl">
              <div className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-3">
                {locale === 'zh' ? '分类分布' : 'Category breakdown'}
              </div>
              <div className="flex flex-wrap gap-2">
                {Object.entries(categoryDist)
                  .sort(([, a], [, b]) => b - a)
                  .map(([cat, n]) => (
                    <div key={cat} className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-3 py-1 text-xs">
                      <span className="capitalize">{cat}</span>
                      <span className="tabular-nums font-medium">{n}</span>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

function AggStat({
  icon, value, label, accent,
}: { icon: React.ReactNode; value: string; label: string; accent: string }) {
  return (
    <div className="rounded-xl border border-border/60 bg-card/50 backdrop-blur p-4">
      <div className={`flex items-center gap-2 text-xs text-muted-foreground mb-1`}>
        <span className={accent}>{icon}</span>
        <span>{label}</span>
      </div>
      <div className={`text-2xl md:text-3xl font-semibold tabular-nums glow-number ${accent}`}>
        {value}
      </div>
    </div>
  );
}
