import { setRequestLocale } from 'next-intl/server';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Nav } from '@/components/home/nav';
import { Footer } from '@/components/home/footer';
import { rankingMeta, rankTools, type RankingType } from '@/lib/rankings';
import { formatCompact } from '@/lib/utils';

export const metadata = { title: 'Rankings · AgentStore' };

export default async function RankingsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: l } = await params;
  const locale = l as 'en' | 'zh';
  setRequestLocale(locale);

  const order: RankingType[] = ['overall', 'growth', 'new', 'underrated', 'overrated', 'dead'];

  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden border-b border-border/60">
          <div className="pointer-events-none absolute inset-0">
            <div className="orb bg-amber-500 -left-20 -top-20 h-80 w-80 opacity-20 animate-float-slow" />
            <div className="orb bg-violet-600 -right-20 top-10 h-80 w-80 opacity-20 animate-float-slower" />
            <div className="absolute inset-0 bg-grid mask-fade-y opacity-40" />
          </div>
          <div className="container relative py-10 md:py-14">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
              {locale === 'zh' ? '榜单' : 'Rankings'}
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-3">
              {locale === 'zh' ? '6 张榜单,让真实数据说话' : 'Six rankings, driven by real data'}
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              {locale === 'zh'
                ? 'GitHub star 会骗人,Smithery 装机量和 npm 下载不会。我们每周按 8 个指标合成 6 张榜,连"华而不实"和"已死"都公开。'
                : 'GitHub stars lie. Smithery calls and npm downloads don\'t. We compile six rankings weekly — including the uncomfortable "overrated" and "dead" lists.'}
            </p>
          </div>
        </section>

        <section className="container py-10 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {order.map((type) => {
              const meta = rankingMeta[type];
              const top = rankTools(type).slice(0, 5);
              return (
                <Link
                  key={type}
                  href={`/rankings/${type}` as const}
                  className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-5 lift-on-hover"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${meta.accent} opacity-[0.08] group-hover:opacity-[0.15] transition`} />

                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${meta.accent} flex items-center justify-center text-2xl shadow-lg`}>
                          {meta.icon}
                        </div>
                        <div>
                          <div className="text-lg font-semibold">{meta.title[locale]}</div>
                          <div className="text-xs text-muted-foreground">
                            {top.length} {locale === 'zh' ? '条目' : 'entries'}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition" />
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {meta.subtitle[locale]}
                    </p>

                    {top.length > 0 ? (
                      <ul className="space-y-1.5">
                        {top.map((tool, i) => (
                          <li key={tool.slug} className="flex items-center gap-3 text-sm">
                            <div className="w-5 text-xs font-mono text-muted-foreground tabular-nums text-right">
                              {i + 1}
                            </div>
                            <div className="h-6 w-6 flex items-center justify-center rounded-md bg-muted/60 text-base shrink-0">
                              {tool.icon}
                            </div>
                            <div className="flex-1 min-w-0 truncate">{tool.name}</div>
                            <div className="text-xs text-muted-foreground tabular-nums shrink-0">
                              {type === 'growth' && tool.metrics.weeklyGrowthPct != null
                                ? `↑${tool.metrics.weeklyGrowthPct}%`
                                : type === 'overall'
                                ? tool.score.toFixed(1)
                                : tool.metrics.smitheryCalls
                                ? formatCompact(tool.metrics.smitheryCalls)
                                : '—'}
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="text-xs text-muted-foreground py-3">
                        {locale === 'zh' ? '暂无数据' : 'No data yet'}
                      </div>
                    )}

                    <div className="mt-4 text-xs text-primary group-hover:underline">
                      {locale === 'zh' ? `查看完整 ${meta.title.zh} →` : `See full ${meta.title.en.toLowerCase()} →`}
                    </div>
                  </div>
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
