import { setRequestLocale } from 'next-intl/server';
import { Rss, Bell, TrendingUp, Package, AlertTriangle, Star, Sparkles, Zap } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Nav } from '@/components/home/nav';
import { Footer } from '@/components/home/footer';
import { tickerEvents, tools } from '@/lib/mock-data';
import { formatCompact } from '@/lib/utils';

export const metadata = { title: 'Updates · AgentStore' };

const kindIcon = {
  milestone: { icon: TrendingUp, color: 'text-amber-400',    bg: 'bg-amber-500/10' },
  launch:    { icon: Package,    color: 'text-cyan-400',     bg: 'bg-cyan-500/10' },
  growth:    { icon: TrendingUp, color: 'text-emerald-400',  bg: 'bg-emerald-500/10' },
  rating:    { icon: Star,       color: 'text-violet-400',   bg: 'bg-violet-500/10' },
  warn:      { icon: AlertTriangle, color: 'text-rose-400',  bg: 'bg-rose-500/10' },
};

export default async function UpdatesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: l } = await params;
  const locale = l as 'en' | 'zh';
  setRequestLocale(locale);

  // tickerEvents 已清空(批次 B 接 webhook 后填充)
  const today = tickerEvents.slice(0, 5);
  const thisWeek = tickerEvents.slice(5);

  // "本周新品 / 大版本" — 从 tools 里挑增长最快的
  const recentLaunches = [...tools]
    .filter((t) => (t.metrics.weeklyGrowthPct || 0) > 20)
    .sort((a, b) => (b.metrics.weeklyGrowthPct || 0) - (a.metrics.weeklyGrowthPct || 0))
    .slice(0, 6);

  // 最近活跃榜(替代"今日" 空态)— 按调用量 + 活跃度综合
  const mostActive = [...tools]
    .filter((t) => (t.metrics.smitheryCalls || 0) > 0 || (t.metrics.npmMonthly || 0) > 0)
    .sort((a, b) => {
      const aScore = (a.metrics.smitheryCalls || 0) + (a.metrics.npmMonthly || 0) * 3;
      const bScore = (b.metrics.smitheryCalls || 0) + (b.metrics.npmMonthly || 0) * 3;
      return bScore - aScore;
    })
    .slice(0, 6);

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60">
          <div className="pointer-events-none absolute inset-0">
            <div className="orb bg-cyan-500 -left-20 -top-20 h-80 w-80 opacity-20 animate-float-slow" />
            <div className="absolute inset-0 bg-grid mask-fade-y opacity-40" />
          </div>
          <div className="container relative py-10 md:py-12">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
              <Bell className="h-3.5 w-3.5" />
              {locale === 'zh' ? '更新' : 'Updates'}
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-3">
              {locale === 'zh' ? '生态正在发生什么' : 'What\'s happening right now'}
            </h1>
            <p className="text-muted-foreground max-w-2xl mb-6">
              {locale === 'zh'
                ? '新品发布、版本更新、里程碑、告警、行业大事件 — 全部实时流。订阅邮件 / RSS / Telegram / Discord。'
                : 'Launches, version bumps, milestones, warnings, industry events — live stream. Subscribe via email / RSS / Telegram / Discord.'}
            </p>
            <div className="flex flex-wrap gap-2">
              <SubscribeBtn icon={<Bell className="h-3 w-3" />} label="Email" />
              <SubscribeBtn icon={<Rss className="h-3 w-3" />} label="RSS" />
              <SubscribeBtn icon={<span>📱</span>} label="Telegram" />
              <SubscribeBtn icon={<span>💬</span>} label="Discord" />
            </div>
          </div>
        </section>

        {/* Today 流(空时显示友好预告) */}
        <section className="container py-10">
          <div className="flex items-center gap-3 mb-5">
            <h2 className="text-lg md:text-xl font-semibold">
              {locale === 'zh' ? '实时活动' : 'Live activity'}
            </h2>
            <div className="flex-1 h-px bg-border/40" />
            {today.length > 0 && (
              <span className="inline-flex items-center gap-1.5 text-xs text-rose-400">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-blink" />
                LIVE
              </span>
            )}
          </div>

          {today.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-card/20 p-8 md:p-10 text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-muted/50 mb-3">
                <Zap className="h-6 w-6 text-muted-foreground" />
              </div>
              <div className="text-base font-medium mb-1">
                {locale === 'zh' ? '实时事件流即将上线' : 'Live event stream coming soon'}
              </div>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                {locale === 'zh'
                  ? '批次 B 我们会接 GitHub release / npm publish / Smithery metrics webhook,实时推送工具发布、版本更新、里程碑、告警。'
                  : 'Batch B will wire up GitHub release / npm publish / Smithery metrics webhooks to stream launches, version bumps, milestones, and warnings in real time.'}
              </p>
              <div className="mt-5 inline-flex items-center gap-2 text-xs text-muted-foreground">
                <Rss className="h-3 w-3" />
                {locale === 'zh' ? '订阅邮件 / RSS 上线时通知你' : 'Subscribe email / RSS to get notified when it lands'}
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-border/60 bg-card/30 divide-y divide-border/60">
              {today.map((e, i) => {
                const { icon: Icon, color, bg } = kindIcon[e.kind];
                return (
                  <div key={i} className="flex items-start gap-4 px-4 md:px-5 py-4 hover:bg-muted/30 transition">
                    <div className={`h-10 w-10 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
                      <Icon className={`h-4 w-4 ${color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`text-sm font-medium ${color}`}>
                        {e.text[locale]}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">{e.timeAgo[locale]}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* 最活跃工具(替代空 ticker)*/}
        {mostActive.length > 0 && (
          <section className="container py-10">
            <div className="flex items-center gap-3 mb-5">
              <h2 className="text-lg md:text-xl font-semibold inline-flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-400" />
                {locale === 'zh' ? '最活跃的工具(按真实调用量)' : 'Most active tools (by real install data)'}
              </h2>
              <div className="flex-1 h-px bg-border/40" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mostActive.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/apps/${tool.slug}`}
                  className="group block rounded-2xl border border-border/60 bg-card/40 p-5 lift-on-hover"
                >
                  <div className="flex items-start gap-3">
                    <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center text-2xl shrink-0">
                      {tool.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{tool.name}</div>
                      <div className="text-xs text-muted-foreground">{tool.author}</div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                    {tool.metrics.smitheryCalls != null && (
                      <span className="inline-flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        {formatCompact(tool.metrics.smitheryCalls)} {locale === 'zh' ? '调用' : 'calls'}
                      </span>
                    )}
                    {tool.metrics.npmMonthly != null && (
                      <span>{formatCompact(tool.metrics.npmMonthly)}/mo</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 新品发布 */}
        {recentLaunches.length > 0 && (
          <section className="container py-10">
            <div className="flex items-center gap-3 mb-5">
              <h2 className="text-lg md:text-xl font-semibold inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                {locale === 'zh' ? '本周新品 / 大版本' : 'New launches / major releases'}
              </h2>
              <div className="flex-1 h-px bg-border/40" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recentLaunches.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/apps/${tool.slug}`}
                  className="group block rounded-2xl border border-border/60 bg-card/40 p-5 lift-on-hover"
                >
                  <div className="flex items-start gap-3">
                    <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center text-2xl shrink-0">
                      {tool.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{tool.name}</div>
                      <div className="text-xs text-muted-foreground">{tool.author}</div>
                    </div>
                    {tool.metrics.weeklyGrowthPct != null && (
                      <span className="shrink-0 text-xs text-emerald-400 font-semibold tabular-nums">
                        ↑{tool.metrics.weeklyGrowthPct}%
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-foreground/80 line-clamp-2">{tool.tagline[locale]}</p>
                  {tool.metrics.smitheryCalls != null && (
                    <div className="mt-4 text-xs text-muted-foreground">
                      {formatCompact(tool.metrics.smitheryCalls)} {locale === 'zh' ? '调用' : 'calls'}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 本周聚合(仅在有数据时)*/}
        {thisWeek.length > 0 && (
          <section className="container py-10">
            <div className="flex items-center gap-3 mb-5">
              <h2 className="text-lg md:text-xl font-semibold">
                {locale === 'zh' ? '本周更早' : 'Earlier this week'}
              </h2>
              <div className="flex-1 h-px bg-border/40" />
            </div>
            <div className="rounded-2xl border border-border/60 bg-card/30 divide-y divide-border/60">
              {thisWeek.map((e, i) => {
                const { icon: Icon, color, bg } = kindIcon[e.kind];
                return (
                  <div key={i} className="flex items-start gap-4 px-4 md:px-5 py-3.5 hover:bg-muted/30 transition">
                    <div className={`h-9 w-9 rounded-lg ${bg} flex items-center justify-center shrink-0`}>
                      <Icon className={`h-3.5 w-3.5 ${color}`} />
                    </div>
                    <div className="flex-1 min-w-0 text-sm">{e.text[locale]}</div>
                    <div className="text-xs text-muted-foreground shrink-0">{e.timeAgo[locale]}</div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

function SubscribeBtn({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="inline-flex items-center gap-2 h-9 px-4 rounded-full border border-border/60 bg-card/40 text-xs hover:border-primary/40 hover:bg-card transition">
      {icon}
      {label}
    </button>
  );
}
