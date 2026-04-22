import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import {
  Star, ArrowUpRight, Github, Package, Activity, TrendingUp,
  Shield, Lock, DollarSign, Zap, ChevronLeft, Check, X,
} from 'lucide-react';
import { routing } from '@/i18n/routing';
import { Link } from '@/i18n/routing';
import { tools } from '@/lib/mock-data';
import { getToolDetails } from '@/lib/mock-details';
import { formatCompact, formatNumber } from '@/lib/utils';
import { Nav } from '@/components/home/nav';
import { Footer } from '@/components/home/footer';
import { InstallHelper } from '@/components/tool/install-helper';
import { PromptChip } from '@/components/tool/prompt-chip';
import { GetButton } from '@/components/tool/get-button';
import { StickyGet } from '@/components/tool/sticky-get';
import { TryInBrowser } from '@/components/tool/try-in-browser';
import { JsonLd, buildToolSoftwareSchema, buildBreadcrumbSchema } from '@/components/seo/json-ld';

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://agentstore.xyz';

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    tools.map((t) => ({ locale, slug: t.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) return {};
  const t = tool.tagline[locale as 'en' | 'zh'];
  return { title: `${tool.name} · AgentStore`, description: t };
}

export default async function ToolDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  const locale = localeParam as 'en' | 'zh';
  setRequestLocale(locale);

  const tool = tools.find((t) => t.slug === slug);
  if (!tool) notFound();

  const details = getToolDetails(slug, tool.name);
  const t = await getTranslations();

  // 相关推荐:tool.detail 指定的 + 同分类 top 3
  const relatedSlugs = details.related.length
    ? details.related
    : tools.filter((x) => x.category === tool.category && x.slug !== slug).slice(0, 4).map((x) => x.slug);
  const related = relatedSlugs
    .map((s) => tools.find((x) => x.slug === s))
    .filter(Boolean) as typeof tools;

  const pageUrl = `${BASE}/${locale}/apps/${slug}`;

  return (
    <>
      <JsonLd
        data={[
          buildToolSoftwareSchema({
            name: tool.name,
            description: tool.tagline[locale],
            url: pageUrl,
            author: tool.author,
            authorUrl: `${BASE}/${locale}/creators/${tool.author}`,
            category: tool.category,
            rating: {
              avg: details.reviewStats.avg,
              count: details.reviewStats.count,
            },
            offers: details.security.paid
              ? undefined
              : { price: '0', currency: 'USD' },
          }),
          buildBreadcrumbSchema([
            { name: 'AgentStore', url: `${BASE}/${locale}` },
            { name: 'Apps',       url: `${BASE}/${locale}/apps` },
            { name: tool.name,    url: pageUrl },
          ]),
        ]}
      />
      <Nav />
      <main className="relative">
        {/* ===== Hero ===== */}
        <section className="relative overflow-hidden border-b border-border/60">
          {/* 背景光 */}
          <div className="pointer-events-none absolute inset-0">
            <div className="orb bg-violet-600 -left-24 -top-32 h-[28rem] w-[28rem] opacity-30 animate-float-slow" />
            <div className="orb bg-cyan-500 -right-24 top-16 h-96 w-96 opacity-25 animate-float-slower" />
            <div className="absolute inset-0 bg-grid mask-fade-y opacity-40" />
          </div>

          <div className="container relative py-8 md:py-10">
            {/* 面包屑 */}
            <Link
              href="/apps"
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition mb-6"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              {locale === 'zh' ? '所有工具' : 'All apps'}
            </Link>

            <div className="flex flex-col md:flex-row md:items-start gap-5 md:gap-8">
              {/* 图标 */}
              <div className="relative shrink-0">
                <div className="h-28 w-28 md:h-32 md:w-32 rounded-3xl bg-card border border-border/60 flex items-center justify-center text-6xl md:text-7xl shadow-xl shadow-black/20">
                  {tool.icon}
                </div>
                {tool.official && (
                  <div className="absolute -bottom-1 -right-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 shadow-lg">
                    OFFICIAL
                  </div>
                )}
              </div>

              {/* 名字信息 */}
              <div className="flex-1 min-w-0">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  <span>{t(`categories.${tool.category}`)}</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-2">
                  {tool.name}
                </h1>
                <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
                  {tool.tagline[locale]}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                  <Link href={`/creators/${tool.author}`} className="inline-flex items-center gap-1.5 text-foreground/80 hover:text-foreground transition">
                    <span className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs">
                      {tool.icon}
                    </span>
                    {tool.author}
                  </Link>
                  {details.reviewStats.count > 0 && (
                    <>
                      <span className="text-border">·</span>
                      <span className="inline-flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        <span className="font-semibold">{details.reviewStats.avg}</span>
                        <span className="text-muted-foreground">({details.reviewStats.count})</span>
                      </span>
                    </>
                  )}
                  <span className="text-border">·</span>
                  <span className="text-muted-foreground">
                    {locale === 'zh' ? 'AgentStore 分' : 'AgentStore Score'} {tool.score}
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <GetButton locale={locale} size="lg" />
                  <TryInBrowser locale={locale} />
                  <Link
                    href={`/compare?tools=${tool.slug}` as any}
                    className="inline-flex items-center gap-1.5 h-11 px-4 rounded-full border border-border bg-card/60 text-sm hover:bg-card transition"
                  >
                    <span>{locale === 'zh' ? '加入对比' : 'Compare'}</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 实时数据栏 */}
            <div className="relative mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
              {tool.metrics.smitheryCalls != null && (
                <MetricCard icon={<Activity className="h-4 w-4" />} label="Smithery" value={formatNumber(tool.metrics.smitheryCalls)} accent="text-violet-400" />
              )}
              {tool.metrics.npmMonthly != null && (
                <MetricCard icon={<Package className="h-4 w-4" />} label="npm / mo" value={formatCompact(tool.metrics.npmMonthly)} accent="text-cyan-400" />
              )}
              {tool.metrics.githubStars != null && (
                <MetricCard icon={<Github className="h-4 w-4" />} label="GitHub ⭐" value={formatCompact(tool.metrics.githubStars)} accent="text-amber-400" />
              )}
              {tool.metrics.weeklyGrowthPct != null && (
                <MetricCard icon={<TrendingUp className="h-4 w-4" />} label={locale === 'zh' ? '本周增长' : 'weekly growth'} value={`↑${tool.metrics.weeklyGrowthPct}%`} accent="text-emerald-400" />
              )}
            </div>
          </div>
        </section>

        {/* ===== Rankings ===== */}
        {details.rankings.length > 0 && (
          <section className="container py-8">
            <div className="flex flex-wrap gap-2">
              {details.rankings.map((r, i) => (
                <div key={i} className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3.5 py-1.5 text-xs">
                  <span className="text-muted-foreground">{r.label[locale]}</span>
                  <span className="font-semibold tabular-nums">{r.value}</span>
                  {r.delta != null && r.delta !== 0 && (
                    <span className={r.delta > 0 ? 'text-emerald-400' : 'text-rose-400'}>
                      {r.delta > 0 ? '↑' : '↓'}{Math.abs(r.delta)}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ===== Screenshots(渐变色块占位,批次 B 换真图)===== */}
        <section className="container py-6 md:py-8">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-lg md:text-xl font-semibold">{locale === 'zh' ? '截图' : 'Screenshots'}</h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory">
            {details.screenshots.map((grad, i) => (
              <div key={i} className={`shrink-0 snap-start relative rounded-2xl w-[85%] md:w-[520px] aspect-[16/10] bg-gradient-to-br ${grad} overflow-hidden border border-border/60`}>
                <div className="absolute inset-0 bg-grid opacity-20 mix-blend-overlay" />
                <div className="absolute inset-0 flex items-center justify-center text-white/70 font-mono text-sm">
                  screenshot #{i + 1}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== 关于 ===== */}
        <section className="container py-8 md:py-10">
          <h2 className="text-lg md:text-xl font-semibold mb-4">
            {locale === 'zh' ? '关于这个工具' : 'About'}
          </h2>
          <p className="text-base leading-relaxed text-foreground/90 max-w-3xl">
            {details.description[locale]}
          </p>

          {/* Features(仅在有数据时展示) */}
          {details.features[locale].length > 0 && (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
              {details.features[locale].map((f, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 shrink-0 mt-0.5 text-emerald-400" />
                  <span className="text-foreground/80">{f}</span>
                </div>
              ))}
            </div>
          )}

          {/* Pros / Cons(仅在有数据时展示) */}
          {(details.pros[locale].length > 0 || details.cons[locale].length > 0) && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
              {details.pros[locale].length > 0 && (
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                  <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                    {locale === 'zh' ? '优点' : 'Pros'}
                  </div>
                  <ul className="space-y-2">
                    {details.pros[locale].map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-3.5 w-3.5 shrink-0 mt-0.5 text-emerald-400" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {details.cons[locale].length > 0 && (
                <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-5">
                  <div className="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-3">
                    {locale === 'zh' ? '缺点' : 'Cons'}
                  </div>
                  <ul className="space-y-2">
                    {details.cons[locale].map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <X className="h-3.5 w-3.5 shrink-0 mt-0.5 text-rose-400" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </section>

        {/* ===== Install ===== */}
        <section id="install" className="container py-8 md:py-10">
          <h2 className="text-lg md:text-xl font-semibold mb-4">
            {locale === 'zh' ? '一键安装' : 'Install'}
          </h2>
          <p className="text-sm text-muted-foreground mb-5 max-w-2xl">
            {locale === 'zh'
              ? '选择你的 runtime,复制下面的配置 / 命令,粘贴到对应位置即可。'
              : 'Pick your runtime, copy the snippet, paste it into your client config.'}
          </p>

          <div className="max-w-3xl">
            <InstallHelper commands={details.install} locale={locale} />
          </div>

          {/* 前置要求 */}
          <div className="mt-4 max-w-3xl rounded-xl border border-border/60 bg-muted/20 p-4 text-sm">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              {locale === 'zh' ? '前置要求' : 'Prerequisites'}
            </div>
            <ul className="space-y-1">
              {details.prerequisites[locale].map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-muted-foreground">·</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ===== Prompts(仅在有数据时展示) ===== */}
        {details.prompts.length > 0 && (
        <section className="container py-8 md:py-10">
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            {locale === 'zh' ? '装完你可以这么问 Claude' : 'Try asking your Claude'}
          </h2>
          <p className="text-sm text-muted-foreground mb-5 max-w-2xl">
            {locale === 'zh'
              ? '点击任意一条复制到剪贴板,粘贴到你的 Claude Desktop 试试。'
              : 'Click any prompt to copy. Paste it into Claude Desktop to see what happens.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl">
            {details.prompts.map((p, i) => (
              <PromptChip key={i} en={p.en} zh={p.zh} locale={locale} />
            ))}
          </div>
        </section>
        )}

        {/* ===== Actions(tool 暴露的动作,仅在有数据时展示)===== */}
        {details.actions.length > 0 && (
        <section className="container py-8 md:py-10">
          <h2 className="text-lg md:text-xl font-semibold mb-4">
            {locale === 'zh' ? '动作 (actions)' : 'Actions'}
          </h2>
          <div className="rounded-2xl border border-border/60 bg-card/30 divide-y divide-border/60 max-w-3xl">
            {details.actions.map((a) => (
              <div key={a.name} className="px-5 py-3.5 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-mono text-sm text-primary">{a.name}()</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{a.description[locale]}</div>
                </div>
                {a.params && a.params.length > 0 && (
                  <div className="shrink-0 flex flex-wrap gap-1">
                    {a.params.map((p) => (
                      <span key={p} className="rounded bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                        {p}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        )}

        {/* ===== Security ===== */}
        <section className="container py-8 md:py-10">
          <h2 className="text-lg md:text-xl font-semibold mb-4">
            {locale === 'zh' ? '安全画像' : 'Security profile'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl">
            <SecurityCard
              icon={<Github className="h-4 w-4" />}
              label={locale === 'zh' ? '开源' : 'Open source'}
              value={details.security.openSource}
            />
            <SecurityCard
              icon={<Shield className="h-4 w-4" />}
              label={locale === 'zh' ? '审计' : 'Audited'}
              value={details.security.audited}
            />
            <SecurityCard
              icon={<Lock className="h-4 w-4" />}
              label={locale === 'zh' ? '密钥' : 'Key handling'}
              text={details.security.keyHandling === 'local' ? (locale === 'zh' ? '本地' : 'Local') : details.security.keyHandling}
              good={details.security.keyHandling === 'local'}
            />
            <SecurityCard
              icon={<DollarSign className="h-4 w-4" />}
              label={locale === 'zh' ? '收费' : 'Paid'}
              value={!details.security.paid}
              positiveLabel={locale === 'zh' ? '免费' : 'Free'}
              negativeLabel={locale === 'zh' ? '付费' : 'Paid'}
            />
          </div>
        </section>

        {/* ===== Reviews ===== */}
        <section className="container py-8 md:py-10">
          <h2 className="text-lg md:text-xl font-semibold mb-5">
            {locale === 'zh' ? '用户评价' : 'Reviews'}
          </h2>

          {details.reviewStats.count === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-card/20 p-10 text-center max-w-3xl">
              <div className="text-4xl mb-3">⭐</div>
              <div className="text-base font-medium mb-1">
                {locale === 'zh' ? '还没有评价' : 'No reviews yet'}
              </div>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                {locale === 'zh'
                  ? '评价系统上线后,登录用户可以对自己真正用过的工具打分。'
                  : 'Review system launches soon. Logged-in users will rate tools they\'ve actually used.'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-5xl">
              {/* Left: avg */}
              <div className="rounded-2xl border border-border/60 bg-card/40 p-5">
                <div className="text-5xl font-semibold tabular-nums glow-number text-amber-400">
                  {details.reviewStats.avg}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {locale === 'zh'
                    ? `${details.reviewStats.count} 条评价`
                    : `${details.reviewStats.count} reviews`}
                </div>
                <div className="mt-4 flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i <= Math.round(details.reviewStats.avg) ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground/30'}`}
                    />
                  ))}
                </div>
                <div className="mt-5 space-y-1.5">
                  {[5, 4, 3, 2, 1].map((star, i) => {
                    const n = details.reviewStats.distribution[i];
                    const pct = (n / details.reviewStats.count) * 100;
                    return (
                      <div key={star} className="flex items-center gap-2 text-xs">
                        <span className="w-3 text-muted-foreground">{star}</span>
                        <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-amber-400 to-amber-500"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="w-6 text-right tabular-nums text-muted-foreground">{n}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right: reviews */}
              <div className="lg:col-span-2 space-y-3">
                {details.reviews.map((r, i) => (
                  <div key={i} className="rounded-2xl border border-border/60 bg-card/30 p-5">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center text-base">
                        {r.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm">{r.author}</span>
                          <span className="text-muted-foreground text-xs">· {r.date}</span>
                        </div>
                        <div className="flex gap-0.5 mt-0.5">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i <= r.stars ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground/30'}`}
                            />
                          ))}
                        </div>
                      </div>
                      {r.tags && (
                        <div className="shrink-0 flex gap-1">
                          {r.tags.map((tag) => (
                            <span key={tag} className="rounded-full bg-muted/60 px-2 py-0.5 text-[10px] text-muted-foreground">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-foreground/85 leading-relaxed">{r.body[locale]}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* ===== Related ===== */}
        {related.length > 0 && (
          <section className="container py-8 md:py-10">
            <h2 className="text-lg md:text-xl font-semibold mb-5">
              {locale === 'zh' ? '类似工具' : 'Similar tools'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.slice(0, 4).map((r) => (
                <Link
                  key={r.slug}
                  href={`/apps/${r.slug}`}
                  className="group rounded-2xl border border-border/60 bg-card/40 p-5 lift-on-hover"
                >
                  <div className="flex items-start gap-3">
                    <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center text-2xl shrink-0">
                      {r.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-medium truncate">{r.name}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 transition" />
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {r.author}
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                    {r.tagline[locale]}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
      <StickyGet toolName={tool.name} toolIcon={tool.icon} score={tool.score} locale={locale} />
    </>
  );
}

function MetricCard({
  icon, label, value, accent,
}: {
  icon: React.ReactNode; label: string; value: string; accent: string;
}) {
  return (
    <div className="rounded-xl border border-border/60 bg-card/40 backdrop-blur p-4">
      <div className={`flex items-center gap-2 text-xs text-muted-foreground mb-1`}>
        <span className={accent}>{icon}</span>
        <span>{label}</span>
      </div>
      <div className={`text-2xl font-semibold tabular-nums glow-number ${accent}`}>
        {value}
      </div>
    </div>
  );
}

function SecurityCard({
  icon, label, value, text, good, positiveLabel, negativeLabel,
}: {
  icon: React.ReactNode;
  label: string;
  value?: boolean;
  text?: string;
  good?: boolean;
  positiveLabel?: string;
  negativeLabel?: string;
}) {
  const isGood = text != null ? good : value;
  const display = text ?? (value ? (positiveLabel ?? 'Yes') : (negativeLabel ?? 'No'));
  return (
    <div className={`rounded-xl border p-4 ${isGood ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-border/60 bg-card/40'}`}>
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
        {icon}
        <span>{label}</span>
      </div>
      <div className={`text-base font-semibold ${isGood ? 'text-emerald-400' : 'text-foreground'}`}>
        {display}
      </div>
    </div>
  );
}
