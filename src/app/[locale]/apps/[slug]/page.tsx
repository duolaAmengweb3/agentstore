import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import {
  Star, ArrowUpRight, Github, Package, Activity, TrendingUp,
  Shield, Lock, DollarSign, Zap, ChevronLeft, Check, X,
  Clock, Users, Scale, FileCode, ExternalLink, GitCommitHorizontal,
} from 'lucide-react';
import { routing } from '@/i18n/routing';
import { Link } from '@/i18n/routing';
import { tools } from '@/lib/mock-data';
import { getToolDetails } from '@/lib/mock-details';
import { getToolDetailData } from '@/lib/content/tools';
import { formatCompact, formatNumber } from '@/lib/utils';
import { Nav } from '@/components/home/nav';
import { Footer } from '@/components/home/footer';
import { InstallHelper } from '@/components/tool/install-helper';
import { PromptChip } from '@/components/tool/prompt-chip';
import { GetButton } from '@/components/tool/get-button';
import { StickyGet } from '@/components/tool/sticky-get';
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
  const detailData = getToolDetailData(slug);  // readme / repoInfo / fetch 源
  const t = await getTranslations();

  // 相关推荐:tool.detail 指定的 + 同分类 top 3
  const relatedSlugs = details.related.length
    ? details.related
    : tools.filter((x) => x.category === tool.category && x.slug !== slug).slice(0, 4).map((x) => x.slug);
  const related = relatedSlugs
    .map((s) => tools.find((x) => x.slug === s))
    .filter(Boolean) as typeof tools;

  // 同类对比:在 tool.category 里看 tool 排第几 / 百分位
  const peers = tools.filter((x) => x.category === tool.category);
  const peerByCalls = [...peers].sort((a, b) => (b.metrics.smitheryCalls || 0) - (a.metrics.smitheryCalls || 0));
  const peerByStars = [...peers].sort((a, b) => (b.metrics.githubStars || 0) - (a.metrics.githubStars || 0));
  const peerByScore = [...peers].sort((a, b) => b.score - a.score);
  const rankInCat = {
    calls: peerByCalls.findIndex((x) => x.slug === slug) + 1,
    stars: peerByStars.findIndex((x) => x.slug === slug) + 1,
    score: peerByScore.findIndex((x) => x.slug === slug) + 1,
    total: peers.length,
  };
  const catMedianCalls = (() => {
    const arr = peers.map((p) => p.metrics.smitheryCalls || 0).sort((a, b) => a - b);
    return arr[Math.floor(arr.length / 2)] || 0;
  })();
  const callsVsMedian =
    tool.metrics.smitheryCalls && catMedianCalls
      ? Math.round((tool.metrics.smitheryCalls / catMedianCalls - 1) * 100)
      : null;

  // 活跃度:根据 repoInfo.lastPush 或 metrics.lastPush 算
  const lastPush = detailData?.repoInfo?.createdAt; // 先占位,真正的 lastPush 在 metrics
  // 从 md frontmatter 里读 lastPush(fetch-metrics 写的)
  const freshness = (() => {
    // 从 md 的 metrics 里取(sync 到 TS 时没保留,所以从 detailData 拿不到)
    // 这里直接基于 detailData.repoInfo 判断归档状态
    if (detailData?.repoInfo?.archived) return { state: 'archived', labelEn: 'Archived', labelZh: '已归档', color: 'text-rose-400' };
    return null;
  })();

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
                  <GetButton locale={locale} size="lg" smitheryId={detailData?.fetch?.smithery} />
                  {detailData?.fetch?.github && (
                    <a
                      href={`https://github.com/${detailData.fetch.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 h-11 px-4 rounded-full border border-border bg-card/60 text-sm hover:bg-card transition"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>GitHub</span>
                      <ExternalLink className="h-3 w-3 text-muted-foreground" />
                    </a>
                  )}
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

        {/* ===== Editor's take(人手写的判断,帮用户快速决策)===== */}
        {detailData?.summary && (
          <section className="container pt-8 md:pt-10">
            <div className="relative max-w-3xl overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6 md:p-7">
              <div className="absolute inset-0 bg-grid opacity-[0.08]" />
              <div className="relative">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                  <span>{locale === 'zh' ? '编辑判断' : "Editor's take"}</span>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-foreground/95">
                  {detailData.summary[locale]}
                </p>
                <div className="mt-3 text-[11px] text-muted-foreground">
                  {locale === 'zh'
                    ? '由 AgentStore 研究团队基于文档 + 代码 + 真实调用数据手写'
                    : 'Hand-written by the AgentStore research team from docs + code + live usage data'}
                </div>
              </div>
            </div>
          </section>
        )}

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

        {/* ===== 关于(优先用真实 README)===== */}
        <section className="container py-8 md:py-10">
          <h2 className="text-lg md:text-xl font-semibold mb-4">
            {locale === 'zh' ? '关于这个工具' : 'About'}
          </h2>
          {detailData?.readme?.about ? (
            <>
              <p className="text-base leading-relaxed text-foreground/90 max-w-3xl whitespace-pre-line">
                {detailData.readme.about}
              </p>
              <div className="mt-2 text-xs text-muted-foreground inline-flex items-center gap-1">
                <Github className="h-3 w-3" />
                {locale === 'zh' ? '来自作者的 README' : 'From the project README'}
              </div>
            </>
          ) : (
            <p className="text-base leading-relaxed text-foreground/90 max-w-3xl">
              {tool.tagline[locale]}
            </p>
          )}

          {/* Features:优先 README,然后 mock-details */}
          {(() => {
            const readmeFeatures = detailData?.readme?.features;
            const handcrafted = details.features[locale];
            const features = (readmeFeatures && readmeFeatures.length > 0)
              ? readmeFeatures
              : handcrafted;
            if (!features || features.length === 0) return null;
            return (
              <div className="mt-8 max-w-3xl">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  {locale === 'zh' ? '核心能力' : 'Key capabilities'}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.slice(0, 8).map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 shrink-0 mt-0.5 text-emerald-400" />
                      <span className="text-foreground/85">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}

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

        {/* ===== 能做什么(模块 / 动作)===== */}
        {detailData?.readme?.modules && detailData.readme.modules.length > 0 && (
          <section className="container py-8 md:py-10">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              {locale === 'zh' ? '具体能做什么' : 'What you can actually do'}
            </h2>
            <p className="text-sm text-muted-foreground mb-5 max-w-2xl">
              {locale === 'zh'
                ? '按模块拆解,每个模块里的工具对应能执行的动作。'
                : 'Broken down by module — each lists the real actions available.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {detailData.readme.modules.map((m, i) => (
                <div key={i} className="rounded-2xl border border-border/60 bg-card/40 p-5 lift-on-hover">
                  <div className="flex items-baseline justify-between mb-2">
                    <div className="font-mono text-sm text-primary">{m.name}</div>
                    {m.count != null && (
                      <div className="text-xs text-muted-foreground tabular-nums">
                        {m.count} {locale === 'zh' ? '个工具' : 'tools'}
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ===== 示例命令 / Prompts(优先 readme.examples,fallback mock-details.prompts)===== */}
        {(() => {
          const readmeExamples = detailData?.readme?.examples;
          const handwritten = details.prompts;
          const items = (readmeExamples && readmeExamples.length > 0)
            ? readmeExamples.map((ex) => ({ en: ex, zh: ex, isCommand: true }))
            : handwritten.map((p) => ({ ...p, isCommand: false }));
          if (items.length === 0) return null;
          return (
            <section className="container py-8 md:py-10">
              <h2 className="text-lg md:text-xl font-semibold mb-2">
                {locale === 'zh'
                  ? (readmeExamples?.length ? '真实示例命令' : '装完你可以这么问 Claude')
                  : (readmeExamples?.length ? 'Real example commands' : 'Try asking your Claude')}
              </h2>
              <p className="text-sm text-muted-foreground mb-5 max-w-2xl">
                {readmeExamples?.length
                  ? (locale === 'zh' ? '这些命令从作者 README 里真实抽取,点"复制"在你本地试。' : 'Pulled straight from the project README — copy and run locally.')
                  : (locale === 'zh' ? '点击任意一条复制,粘贴到 Claude Desktop 试试。' : 'Click any prompt to copy. Paste into Claude Desktop.')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl">
                {items.slice(0, 8).map((p, i) => (
                  <PromptChip key={i} en={p.en} zh={p.zh} locale={locale} />
                ))}
              </div>
            </section>
          );
        })()}

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

        {/* ===== 活跃度脉搏(仓库元数据)===== */}
        {detailData?.repoInfo && (
          <section className="container py-8 md:py-10">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              {locale === 'zh' ? '项目活跃度' : 'Project pulse'}
            </h2>
            <p className="text-sm text-muted-foreground mb-5 max-w-2xl">
              {locale === 'zh'
                ? '从 GitHub 实时拉取,看这个项目到底活不活。'
                : 'Live from GitHub — see if the project is actually maintained.'}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl">
              {detailData.repoInfo.language && (
                <PulseCard
                  icon={<FileCode className="h-4 w-4" />}
                  label={locale === 'zh' ? '语言' : 'Language'}
                  value={detailData.repoInfo.language}
                  accent="text-violet-400"
                />
              )}
              {detailData.repoInfo.license && (
                <PulseCard
                  icon={<Scale className="h-4 w-4" />}
                  label={locale === 'zh' ? '许可证' : 'License'}
                  value={detailData.repoInfo.license}
                  accent="text-cyan-400"
                />
              )}
              {detailData.repoInfo.contributors != null && (
                <PulseCard
                  icon={<Users className="h-4 w-4" />}
                  label={locale === 'zh' ? '贡献者' : 'Contributors'}
                  value={String(detailData.repoInfo.contributors)}
                  accent="text-emerald-400"
                />
              )}
              {detailData.repoInfo.openIssues != null && (
                <PulseCard
                  icon={<GitCommitHorizontal className="h-4 w-4" />}
                  label={locale === 'zh' ? '未解决 issues' : 'Open issues'}
                  value={String(detailData.repoInfo.openIssues)}
                  accent={detailData.repoInfo.openIssues > 50 ? 'text-amber-400' : 'text-emerald-400'}
                />
              )}
              {detailData.repoInfo.createdAt && (
                <PulseCard
                  icon={<Clock className="h-4 w-4" />}
                  label={locale === 'zh' ? '创建于' : 'Created'}
                  value={new Date(detailData.repoInfo.createdAt).toLocaleDateString(
                    locale === 'zh' ? 'zh-CN' : 'en-US',
                    { year: 'numeric', month: 'short' }
                  )}
                  accent="text-muted-foreground"
                />
              )}
              {detailData.repoInfo.archived && (
                <PulseCard
                  icon={<Shield className="h-4 w-4" />}
                  label={locale === 'zh' ? '状态' : 'Status'}
                  value={locale === 'zh' ? '已归档' : 'Archived'}
                  accent="text-rose-400"
                />
              )}
            </div>

            {/* topics */}
            {detailData.repoInfo.topics && detailData.repoInfo.topics.length > 0 && (
              <div className="mt-5 max-w-4xl">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  {locale === 'zh' ? '标签' : 'Topics'}
                </div>
                <div className="flex flex-wrap gap-2">
                  {detailData.repoInfo.topics.map((t) => (
                    <span key={t} className="inline-flex rounded-full bg-muted px-3 py-1 text-xs text-foreground/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 外部链接 */}
            {detailData?.fetch && (
              <div className="mt-5 flex flex-wrap gap-2">
                {detailData.fetch.github && (
                  <a
                    href={`https://github.com/${detailData.fetch.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-full border border-border/60 bg-card/50 text-xs hover:bg-card transition"
                  >
                    <Github className="h-3.5 w-3.5" />
                    {detailData.fetch.github}
                    <ExternalLink className="h-3 w-3 text-muted-foreground" />
                  </a>
                )}
                {detailData.fetch.npm && (
                  <a
                    href={`https://www.npmjs.com/package/${detailData.fetch.npm}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-full border border-border/60 bg-card/50 text-xs hover:bg-card transition"
                  >
                    <Package className="h-3.5 w-3.5" />
                    {detailData.fetch.npm}
                    <ExternalLink className="h-3 w-3 text-muted-foreground" />
                  </a>
                )}
                {detailData.fetch.smithery && (
                  <a
                    href={`https://smithery.ai/server/${detailData.fetch.smithery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-full border border-border/60 bg-card/50 text-xs hover:bg-card transition"
                  >
                    📦 Smithery
                    <ExternalLink className="h-3 w-3 text-muted-foreground" />
                  </a>
                )}
              </div>
            )}
          </section>
        )}

        {/* ===== 与同类对比 ===== */}
        {rankInCat.total > 1 && (
          <section className="container py-8 md:py-10">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              {locale === 'zh' ? '和同类工具对比' : 'How it compares'}
            </h2>
            <p className="text-sm text-muted-foreground mb-5 max-w-2xl">
              {locale === 'zh'
                ? `在 ${rankInCat.total} 个同类(${t(`categories.${tool.category}`)})工具里的位置`
                : `Position among ${rankInCat.total} tools in the ${tool.category} category`}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl">
              <RankCard
                label={locale === 'zh' ? '按调用量' : 'By calls'}
                rank={rankInCat.calls}
                total={rankInCat.total}
                accent="from-violet-500/20 to-fuchsia-500/20"
              />
              <RankCard
                label={locale === 'zh' ? '按 Star 数' : 'By stars'}
                rank={rankInCat.stars}
                total={rankInCat.total}
                accent="from-amber-500/20 to-orange-500/20"
              />
              <RankCard
                label={locale === 'zh' ? '按综合分' : 'By AgentStore Score'}
                rank={rankInCat.score}
                total={rankInCat.total}
                accent="from-emerald-500/20 to-teal-500/20"
              />
            </div>

            {/* 对比文案 */}
            {callsVsMedian != null && (
              <div className="mt-5 max-w-3xl rounded-xl border border-border/60 bg-muted/20 p-4 text-sm text-foreground/85 leading-relaxed">
                {locale === 'zh' ? (
                  <>
                    {tool.name} 的调用量是同类中位数的{' '}
                    <span className={callsVsMedian > 0 ? 'text-emerald-400 font-semibold' : 'text-rose-400 font-semibold'}>
                      {callsVsMedian > 0 ? `+${callsVsMedian}%` : `${callsVsMedian}%`}
                    </span>
                    {callsVsMedian > 100 ? ' — 显著高于同类,反映有真实用户基础。' :
                     callsVsMedian > 0 ? ' — 略高于同类。' :
                     callsVsMedian < -30 ? ' — 低于同类中位数,可能是新工具或小众。' :
                     ' — 和同类相近。'}
                  </>
                ) : (
                  <>
                    {tool.name} is{' '}
                    <span className={callsVsMedian > 0 ? 'text-emerald-400 font-semibold' : 'text-rose-400 font-semibold'}>
                      {callsVsMedian > 0 ? `+${callsVsMedian}%` : `${callsVsMedian}%`}
                    </span>{' '}
                    vs the category median on install volume
                    {callsVsMedian > 100 ? ' — significantly ahead, indicating real user adoption.' :
                     callsVsMedian > 0 ? ' — slightly ahead.' :
                     callsVsMedian < -30 ? ' — below median (likely new or niche).' :
                     ' — roughly in line with peers.'}
                  </>
                )}
              </div>
            )}
          </section>
        )}

        {/* Prompts 已经合并到前面的"示例/Prompts"板块(优先 readme.examples)*/}

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

function PulseCard({
  icon, label, value, accent,
}: { icon: React.ReactNode; label: string; value: string; accent: string }) {
  return (
    <div className="rounded-xl border border-border/60 bg-card/40 p-4">
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
        <span className={accent}>{icon}</span>
        <span>{label}</span>
      </div>
      <div className={`text-lg font-semibold tabular-nums ${accent}`}>{value}</div>
    </div>
  );
}

function RankCard({
  label, rank, total, accent,
}: { label: string; rank: number; total: number; accent: string }) {
  const pct = Math.round((1 - (rank - 1) / total) * 100);  // 百分位(越高越前)
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-5">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-60`} />
      <div className="relative">
        <div className="text-xs text-muted-foreground mb-2">{label}</div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-3xl font-semibold tabular-nums">#{rank}</span>
          <span className="text-sm text-muted-foreground">/ {total}</span>
        </div>
        <div className="mt-3 h-1.5 rounded-full bg-muted/60 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="mt-1.5 text-[11px] text-muted-foreground tabular-nums">
          top {100 - pct < 1 ? '<1' : Math.max(1, 100 - pct)}%
        </div>
      </div>
    </div>
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
