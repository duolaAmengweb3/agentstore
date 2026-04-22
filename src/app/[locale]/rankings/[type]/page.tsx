import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { ChevronLeft, Star, Activity, Github, TrendingUp, Package } from 'lucide-react';
import { routing, Link } from '@/i18n/routing';
import { Nav } from '@/components/home/nav';
import { Footer } from '@/components/home/footer';
import { rankingMeta, rankTools, type RankingType } from '@/lib/rankings';
import { GetButton } from '@/components/tool/get-button';
import { formatCompact } from '@/lib/utils';

const TYPES: RankingType[] = ['overall', 'growth', 'new', 'underrated', 'overrated', 'dead'];

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    TYPES.map((type) => ({ locale, type }))
  );
}

export default async function RankingDetailPage({
  params,
}: {
  params: Promise<{ locale: string; type: string }>;
}) {
  const { locale: l, type } = await params;
  const locale = l as 'en' | 'zh';
  setRequestLocale(locale);

  if (!TYPES.includes(type as RankingType)) notFound();
  const t = type as RankingType;
  const meta = rankingMeta[t];
  const list = rankTools(t);

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className={`relative overflow-hidden bg-gradient-to-br ${meta.accent}`}>
          <div className="absolute inset-0 bg-grid opacity-25 mix-blend-overlay" />
          <div className="absolute -top-20 -right-20 text-[14rem] opacity-25 leading-none rotate-12">
            {meta.icon}
          </div>

          <div className="container relative py-10 md:py-14">
            <Link
              href="/rankings"
              className="inline-flex items-center gap-1 text-xs text-white/70 hover:text-white mb-6"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              {locale === 'zh' ? '所有榜单' : 'All rankings'}
            </Link>

            <div className="text-xs uppercase tracking-[0.2em] text-white/75 mb-3">
              {locale === 'zh' ? '榜单' : 'Ranking'}
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-3">
              {meta.title[locale]}
            </h1>
            <p className="text-white/85 max-w-2xl text-sm md:text-base">
              {meta.subtitle[locale]}
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1.5 text-xs text-white/90 border border-white/20">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-blink" />
              {locale === 'zh' ? '每周刷新 · 上周六' : 'Refreshed weekly · last Saturday'}
            </div>
          </div>
        </section>

        {/* 列表 */}
        <section className="container py-10">
          {list.length === 0 ? (
            <div className="rounded-2xl border border-border/60 bg-card/40 p-10 text-center text-muted-foreground">
              {locale === 'zh' ? '本榜本周没有符合的工具。' : 'Nothing matches this ranking this week.'}
            </div>
          ) : (
            <div className="rounded-2xl border border-border/60 bg-card/30 overflow-hidden divide-y divide-border/60">
              {list.map((tool, i) => (
                <div
                  key={tool.slug}
                  className="group flex items-center gap-4 px-4 md:px-6 py-4 hover:bg-muted/30 transition"
                >
                  {/* 序号 */}
                  <div className="w-10 shrink-0 text-center">
                    {i < 3 ? (
                      <div className={`inline-flex h-8 w-8 items-center justify-center rounded-xl font-bold text-base ${
                        i === 0 ? 'bg-amber-400/20 text-amber-400' :
                        i === 1 ? 'bg-slate-400/20 text-slate-300' :
                        'bg-orange-500/20 text-orange-400'
                      }`}>
                        {i + 1}
                      </div>
                    ) : (
                      <span className="text-sm font-mono text-muted-foreground tabular-nums">
                        {i + 1}
                      </span>
                    )}
                  </div>

                  {/* 图标 */}
                  <Link
                    href={`/apps/${tool.slug}`}
                    className="h-12 w-12 shrink-0 rounded-xl bg-muted flex items-center justify-center text-2xl"
                  >
                    {tool.icon}
                  </Link>

                  {/* 信息 */}
                  <Link href={`/apps/${tool.slug}`} className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium truncate">{tool.name}</span>
                      {tool.official && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded border border-primary/40 text-primary uppercase tracking-wider">
                          Official
                        </span>
                      )}
                      <span className="text-xs text-muted-foreground shrink-0">· {tool.author}</span>
                    </div>
                    <div className="text-xs text-muted-foreground truncate mt-0.5">
                      {tool.tagline[locale]}
                    </div>
                  </Link>

                  {/* 指标 */}
                  <div className="hidden md:flex items-center gap-4 text-xs shrink-0">
                    {tool.metrics.smitheryCalls != null && (
                      <MetricInline icon={<Activity className="h-3 w-3" />} value={formatCompact(tool.metrics.smitheryCalls)} label={locale === 'zh' ? '调用' : 'calls'} />
                    )}
                    {tool.metrics.npmMonthly != null && (
                      <MetricInline icon={<Package className="h-3 w-3" />} value={formatCompact(tool.metrics.npmMonthly)} label="npm/mo" />
                    )}
                    {tool.metrics.githubStars != null && (
                      <MetricInline icon={<Github className="h-3 w-3" />} value={formatCompact(tool.metrics.githubStars)} label="★" />
                    )}
                    {tool.metrics.weeklyGrowthPct != null && tool.metrics.weeklyGrowthPct > 0 && (
                      <div className="inline-flex items-center gap-0.5 text-emerald-400 font-semibold tabular-nums">
                        <TrendingUp className="h-3 w-3" />↑{tool.metrics.weeklyGrowthPct}%
                      </div>
                    )}
                    <div className="inline-flex items-center gap-0.5 tabular-nums">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                      {tool.score}
                    </div>
                  </div>

                  <GetButton locale={locale} size="md" />
                </div>
              ))}
            </div>
          )}
        </section>

        {/* 其它榜单跳转 */}
        <section className="container py-10 md:py-14">
          <h2 className="text-lg md:text-xl font-semibold mb-4">
            {locale === 'zh' ? '其它榜单' : 'Other rankings'}
          </h2>
          <div className="flex flex-wrap gap-2">
            {TYPES.filter((x) => x !== t).map((other) => {
              const m = rankingMeta[other];
              return (
                <Link
                  key={other}
                  href={`/rankings/${other}` as const}
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-2 text-sm hover:border-primary/50 hover:bg-card transition"
                >
                  <span className="text-base">{m.icon}</span>
                  {m.title[locale]}
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function MetricInline({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="text-right">
      <div className="text-sm font-semibold tabular-nums leading-tight">{value}</div>
      <div className="text-[10px] text-muted-foreground leading-none inline-flex items-center gap-0.5 justify-end">
        {icon}
        <span>{label}</span>
      </div>
    </div>
  );
}
