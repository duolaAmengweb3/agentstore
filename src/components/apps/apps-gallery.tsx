'use client';

import * as React from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Search, Grid3x3, List, Filter, TrendingUp, Star, Github, Activity, ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { tools, type Tool, type Category } from '@/lib/mock-data';
import { cn, formatCompact } from '@/lib/utils';
import { GetButton } from '@/components/tool/get-button';

const CATS: { id: Category | 'all'; labelEn: string; labelZh: string }[] = [
  { id: 'all',       labelEn: 'All',         labelZh: '全部' },
  { id: 'cex',       labelEn: 'CEX',         labelZh: '交易所' },
  { id: 'dex',       labelEn: 'DEX',         labelZh: 'DEX' },
  { id: 'wallet',    labelEn: 'Wallets',     labelZh: '钱包' },
  { id: 'data',      labelEn: 'Data',        labelZh: '数据' },
  { id: 'framework', labelEn: 'Frameworks',  labelZh: '框架' },
  { id: 'infra',     labelEn: 'Infra',       labelZh: '基础设施' },
];

type SortKey = 'score' | 'calls' | 'growth' | 'stars' | 'newest';

export function AppsGallery({ locale }: { locale: 'en' | 'zh' }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initialCat = (searchParams.get('category') as Category | 'all') || 'all';
  const initialQ = searchParams.get('q') || '';
  const initialSort = (searchParams.get('sort') as SortKey) || 'score';

  const [cat, setCat] = React.useState<Category | 'all'>(
    ['all', 'cex', 'dex', 'wallet', 'data', 'framework', 'infra'].includes(initialCat as string)
      ? initialCat
      : 'all'
  );
  const [q, setQ] = React.useState(initialQ);
  const [sort, setSort] = React.useState<SortKey>(
    ['score', 'calls', 'growth', 'stars', 'newest'].includes(initialSort) ? initialSort : 'score'
  );
  const [view, setView] = React.useState<'grid' | 'list'>('grid');

  // URL → state(浏览器前进/后退触发)
  React.useEffect(() => {
    const urlCat = searchParams.get('category') as Category | 'all';
    if (['cex', 'dex', 'wallet', 'data', 'framework', 'infra', 'all'].includes(urlCat)) {
      setCat(urlCat);
    }
    const urlQ = searchParams.get('q');
    if (urlQ !== null) setQ(urlQ);
    const urlSort = searchParams.get('sort') as SortKey;
    if (['score', 'calls', 'growth', 'stars', 'newest'].includes(urlSort)) setSort(urlSort);
  }, [searchParams]);

  // state → URL(debounce 300ms,避免过度 history entry)
  React.useEffect(() => {
    const t = setTimeout(() => {
      const usp = new URLSearchParams();
      if (cat !== 'all') usp.set('category', cat);
      if (q.trim()) usp.set('q', q.trim());
      if (sort !== 'score') usp.set('sort', sort);
      const query = usp.toString();
      router.replace(`${pathname}${query ? `?${query}` : ''}`, { scroll: false });
    }, 300);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cat, q, sort]);

  const filtered = React.useMemo(() => {
    let arr = tools;
    if (cat !== 'all') arr = arr.filter((t) => t.category === cat);
    if (q.trim()) {
      const s = q.trim().toLowerCase();
      arr = arr.filter((t) =>
        t.name.toLowerCase().includes(s) ||
        t.author.toLowerCase().includes(s) ||
        t.tagline[locale].toLowerCase().includes(s)
      );
    }
    const sorted = [...arr].sort((a, b) => {
      switch (sort) {
        case 'score':  return b.score - a.score;
        case 'calls':  return (b.metrics.smitheryCalls || 0) - (a.metrics.smitheryCalls || 0);
        case 'growth': return (b.metrics.weeklyGrowthPct || 0) - (a.metrics.weeklyGrowthPct || 0);
        case 'stars':  return (b.metrics.githubStars || 0) - (a.metrics.githubStars || 0);
        case 'newest': return 0;
      }
    });
    return sorted;
  }, [cat, q, sort, locale]);

  return (
    <>
      {/* 过滤/排序条 */}
      <div className="sticky top-14 z-30 -mx-6 px-6 py-4 glass border-b border-border/60">
        <div className="flex flex-col gap-3">
          {/* 搜索 + 视图切换 */}
          <div className="flex items-center gap-2">
            <div className="flex-1 flex items-center gap-2 h-10 rounded-lg border border-border/60 bg-card/60 px-3">
              <Search className="h-3.5 w-3.5 text-muted-foreground" />
              <input
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={locale === 'zh' ? '搜工具 / 作者 / 描述...' : 'Search tools / authors / descriptions...'}
                className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
              />
              {q && (
                <button
                  onClick={() => setQ('')}
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  ✕
                </button>
              )}
            </div>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="h-10 rounded-lg border border-border/60 bg-card/60 px-3 text-xs outline-none cursor-pointer hover:bg-card"
            >
              <option value="score">{locale === 'zh' ? '综合分' : 'Score'}</option>
              <option value="calls">{locale === 'zh' ? '调用量' : 'Calls'}</option>
              <option value="growth">{locale === 'zh' ? '本周增长' : 'Growth'}</option>
              <option value="stars">{locale === 'zh' ? 'Star 数' : 'Stars'}</option>
            </select>

            <div className="hidden md:flex items-center rounded-lg border border-border/60 bg-card/60 p-0.5">
              <button
                onClick={() => setView('grid')}
                className={cn('h-8 w-8 rounded-md flex items-center justify-center transition', view === 'grid' ? 'bg-background shadow-sm' : 'text-muted-foreground hover:text-foreground')}
                aria-label="Grid view"
              >
                <Grid3x3 className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => setView('list')}
                className={cn('h-8 w-8 rounded-md flex items-center justify-center transition', view === 'list' ? 'bg-background shadow-sm' : 'text-muted-foreground hover:text-foreground')}
                aria-label="List view"
              >
                <List className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* 分类 chips */}
          <div className="flex items-center gap-2 overflow-x-auto -mx-1 px-1 pb-0.5">
            <Filter className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
            {CATS.map((c) => (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                className={cn(
                  'h-8 px-3.5 rounded-full text-xs font-medium whitespace-nowrap transition border',
                  cat === c.id
                    ? 'border-primary bg-primary/10 text-foreground'
                    : 'border-border/60 bg-card/40 text-muted-foreground hover:text-foreground hover:border-border'
                )}
              >
                {locale === 'zh' ? c.labelZh : c.labelEn}
                {c.id !== 'all' && (
                  <span className="ml-1.5 text-[10px] opacity-60">
                    {tools.filter((t) => t.category === c.id).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 结果统计 */}
      <div className="flex items-center justify-between mt-6 mb-3 text-sm text-muted-foreground">
        <span>
          {filtered.length}{' '}
          {locale === 'zh' ? '个结果' : 'results'}
        </span>
      </div>

      {/* 工具网格 / 列表 */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-muted-foreground text-sm">
          {locale === 'zh' ? '没有匹配的工具。' : 'No matches.'}
        </div>
      ) : view === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((t) => (
            <ToolCard key={t.slug} tool={t} locale={locale} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-border/60 bg-card/30 overflow-hidden divide-y divide-border/60">
          {filtered.map((t) => (
            <ToolRow key={t.slug} tool={t} locale={locale} />
          ))}
        </div>
      )}
    </>
  );
}

function ToolCard({ tool, locale }: { tool: Tool; locale: 'en' | 'zh' }) {
  return (
    <Link
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
          <div className="text-xs text-muted-foreground truncate mt-0.5">
            {tool.author}
          </div>
        </div>
        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition shrink-0" />
      </div>
      <p className="mt-3 text-sm text-foreground/80 line-clamp-2 min-h-[2.5rem]">
        {tool.tagline[locale]}
      </p>

      {/* 底部指标 */}
      <div className="mt-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-3 text-xs">
          {tool.metrics.smitheryCalls != null && (
            <span className="inline-flex items-center gap-1 text-muted-foreground">
              <Activity className="h-3 w-3" />
              <span className="tabular-nums">{formatCompact(tool.metrics.smitheryCalls)}</span>
            </span>
          )}
          {tool.metrics.githubStars != null && (
            <span className="inline-flex items-center gap-1 text-muted-foreground">
              <Github className="h-3 w-3" />
              <span className="tabular-nums">{formatCompact(tool.metrics.githubStars)}</span>
            </span>
          )}
          {tool.metrics.weeklyGrowthPct != null && tool.metrics.weeklyGrowthPct > 0 && (
            <span className="inline-flex items-center gap-0.5 text-emerald-400 font-medium tabular-nums">
              <TrendingUp className="h-3 w-3" />
              ↑{tool.metrics.weeklyGrowthPct}%
            </span>
          )}
        </div>
        <div className="inline-flex items-center gap-1 text-xs shrink-0">
          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
          <span className="tabular-nums font-medium">{tool.score}</span>
        </div>
      </div>
    </Link>
  );
}

function ToolRow({ tool, locale }: { tool: Tool; locale: 'en' | 'zh' }) {
  return (
    <Link
      href={`/apps/${tool.slug}`}
      className="group flex items-center gap-4 px-4 py-3 hover:bg-muted/30 transition"
    >
      <div className="h-11 w-11 shrink-0 rounded-xl bg-muted flex items-center justify-center text-xl">
        {tool.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-medium truncate">{tool.name}</span>
          {tool.official && (
            <span className="text-[10px] px-1.5 py-0.5 rounded border border-primary/40 text-primary uppercase tracking-wider shrink-0">
              Official
            </span>
          )}
          <span className="text-xs text-muted-foreground shrink-0">· {tool.author}</span>
        </div>
        <div className="text-xs text-muted-foreground truncate mt-0.5">
          {tool.tagline[locale]}
        </div>
      </div>

      <div className="hidden md:flex items-center gap-3 text-xs shrink-0">
        {tool.metrics.smitheryCalls && (
          <div className="text-right">
            <div className="text-sm font-semibold tabular-nums">{formatCompact(tool.metrics.smitheryCalls)}</div>
            <div className="text-[10px] text-muted-foreground">{locale === 'zh' ? '调用' : 'calls'}</div>
          </div>
        )}
        {tool.metrics.weeklyGrowthPct != null && tool.metrics.weeklyGrowthPct > 0 && (
          <span className="text-emerald-400 tabular-nums font-medium">↑{tool.metrics.weeklyGrowthPct}%</span>
        )}
        <div className="inline-flex items-center gap-0.5 tabular-nums">
          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
          {tool.score}
        </div>
      </div>

      <GetButton locale={locale} size="md" />
    </Link>
  );
}
