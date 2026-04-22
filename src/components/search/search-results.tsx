'use client';

import * as React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search, X, Star, Activity, TrendingUp, Github, Clock, Eye, Layers, Flame, Compass } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { tools, collections, topics } from '@/lib/mock-data';
import { tutorials } from '@/lib/mock-tutorials';
import { getCreator } from '@/lib/mock-creators';
import { cn, formatCompact } from '@/lib/utils';

type Tab = 'all' | 'tools' | 'collections' | 'tutorials' | 'creators';

export function SearchResults({ locale }: { locale: 'en' | 'zh' }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQ = searchParams.get('q') || '';

  const [q, setQ] = React.useState(initialQ);
  const [tab, setTab] = React.useState<Tab>('all');

  const query = q.trim().toLowerCase();

  // 搜索各类
  const matchedTools = React.useMemo(() => {
    if (!query) return [];
    return tools.filter((t) =>
      t.name.toLowerCase().includes(query) ||
      t.author.toLowerCase().includes(query) ||
      t.tagline.en.toLowerCase().includes(query) ||
      t.tagline.zh.includes(query) ||
      t.category.includes(query)
    );
  }, [query]);

  const matchedCollections = React.useMemo(() => {
    if (!query) return [];
    return collections.filter((c) =>
      c.title.en.toLowerCase().includes(query) ||
      c.title.zh.includes(query) ||
      c.subtitle.en.toLowerCase().includes(query) ||
      c.subtitle.zh.includes(query)
    );
  }, [query]);

  const matchedTutorials = React.useMemo(() => {
    if (!query) return [];
    return tutorials.filter((t) =>
      t.title.en.toLowerCase().includes(query) ||
      t.title.zh.includes(query) ||
      t.excerpt.en.toLowerCase().includes(query) ||
      t.excerpt.zh.includes(query) ||
      t.topic.includes(query)
    );
  }, [query]);

  const matchedCreators = React.useMemo(() => {
    if (!query) return [];
    const authors = Array.from(new Set(tools.map((t) => t.author)));
    return authors
      .filter((a) => a.toLowerCase().includes(query))
      .map((a) => getCreator(a))
      .filter(Boolean);
  }, [query]);

  const total = matchedTools.length + matchedCollections.length + matchedTutorials.length + matchedCreators.length;

  React.useEffect(() => {
    // URL 同步 ?q=
    const t = setTimeout(() => {
      const usp = new URLSearchParams();
      if (q) usp.set('q', q);
      router.replace(`?${usp.toString()}`, { scroll: false });
    }, 300);
    return () => clearTimeout(t);
  }, [q, router]);

  const tabs: { id: Tab; labelEn: string; labelZh: string; count: number }[] = [
    { id: 'all',         labelEn: 'All',         labelZh: '全部',  count: total },
    { id: 'tools',       labelEn: 'Tools',       labelZh: '工具',  count: matchedTools.length },
    { id: 'collections', labelEn: 'Collections', labelZh: '合集',  count: matchedCollections.length },
    { id: 'tutorials',   labelEn: 'Tutorials',   labelZh: '教程',  count: matchedTutorials.length },
    { id: 'creators',    labelEn: 'Creators',    labelZh: '创作者', count: matchedCreators.length },
  ];

  const showTools = tab === 'all' || tab === 'tools';
  const showCollections = tab === 'all' || tab === 'collections';
  const showTutorials = tab === 'all' || tab === 'tutorials';
  const showCreators = tab === 'all' || tab === 'creators';

  return (
    <div>
      {/* 搜索框 */}
      <div className="relative card-gradient-border max-w-3xl">
        <div className="relative flex items-center gap-3 h-14 px-5 rounded-2xl bg-card/60 backdrop-blur">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            autoFocus
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={locale === 'zh' ? '搜工具、合集、作者、教程...' : 'Search tools, collections, creators, tutorials…'}
            className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground/70 text-base"
          />
          {q && (
            <button
              onClick={() => setQ('')}
              className="inline-flex h-7 w-7 items-center justify-center rounded-lg hover:bg-muted transition text-muted-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Tabs */}
      {q.trim() && (
        <div className="mt-6 flex items-center gap-2 overflow-x-auto -mx-1 px-1 pb-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                'h-8 px-3.5 rounded-full text-xs font-medium whitespace-nowrap transition border inline-flex items-center gap-1.5',
                tab === t.id
                  ? 'border-primary bg-primary/10 text-foreground'
                  : 'border-border/60 bg-card/40 text-muted-foreground hover:text-foreground hover:border-border'
              )}
            >
              {locale === 'zh' ? t.labelZh : t.labelEn}
              <span className="text-[10px] tabular-nums opacity-60">{t.count}</span>
            </button>
          ))}
        </div>
      )}

      {/* Results */}
      <div className="mt-8">
        {!q.trim() ? (
          <EmptyState locale={locale} />
        ) : total === 0 ? (
          <NoResults q={q} locale={locale} />
        ) : (
          <div className="space-y-10">
            {showTools && matchedTools.length > 0 && (
              <Section title={locale === 'zh' ? `工具(${matchedTools.length})` : `Tools (${matchedTools.length})`}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {matchedTools.slice(0, tab === 'tools' ? 999 : 6).map((t) => (
                    <Link
                      key={t.slug}
                      href={`/apps/${t.slug}`}
                      className="group flex items-start gap-3 rounded-xl border border-border/60 bg-card/40 p-4 lift-on-hover"
                    >
                      <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center text-xl shrink-0">
                        {t.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="font-medium truncate text-sm">{t.name}</span>
                          {t.official && <span className="text-[9px] px-1 rounded border border-primary/40 text-primary">OFFICIAL</span>}
                        </div>
                        <div className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
                          {t.tagline[locale]}
                        </div>
                        <div className="mt-2 flex items-center gap-3 text-[11px] text-muted-foreground">
                          {t.metrics.smitheryCalls != null && (
                            <span className="inline-flex items-center gap-0.5">
                              <Activity className="h-2.5 w-2.5" />
                              {formatCompact(t.metrics.smitheryCalls)}
                            </span>
                          )}
                          <span className="inline-flex items-center gap-0.5">
                            <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
                            {t.score}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </Section>
            )}

            {showCollections && matchedCollections.length > 0 && (
              <Section title={locale === 'zh' ? `合集(${matchedCollections.length})` : `Collections (${matchedCollections.length})`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {matchedCollections.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/collections/${c.slug}`}
                      className={`group relative overflow-hidden flex items-center gap-4 rounded-xl border border-border/60 bg-gradient-to-br ${c.accent} p-4 lift-on-hover`}
                    >
                      <div className="h-12 w-12 rounded-xl bg-black/30 backdrop-blur flex items-center justify-center text-2xl shrink-0">
                        {c.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm truncate text-white">{c.title[locale]}</div>
                        <div className="text-xs text-white/80 line-clamp-1 mt-0.5">{c.subtitle[locale]}</div>
                        <div className="mt-1 text-[11px] text-white/70 inline-flex items-center gap-1">
                          <Layers className="h-2.5 w-2.5" />
                          {c.toolSlugs.length} {locale === 'zh' ? '工具' : 'tools'}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </Section>
            )}

            {showTutorials && matchedTutorials.length > 0 && (
              <Section title={locale === 'zh' ? `教程(${matchedTutorials.length})` : `Tutorials (${matchedTutorials.length})`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {matchedTutorials.map((tut) => (
                    <Link
                      key={tut.slug}
                      href={`/learn/${tut.slug}` as any}
                      className="group flex gap-4 rounded-xl border border-border/60 bg-card/40 p-4 lift-on-hover"
                    >
                      <div className={`h-16 w-16 shrink-0 rounded-xl bg-gradient-to-br ${tut.accent}`} />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm line-clamp-2 group-hover:text-gradient-brand transition">
                          {tut.title[locale]}
                        </div>
                        <div className="mt-2 flex items-center gap-3 text-[11px] text-muted-foreground">
                          <span className="inline-flex items-center gap-0.5">
                            <Clock className="h-2.5 w-2.5" />
                            {tut.readTime}m
                          </span>
                          {tut.views != null && (
                            <span className="inline-flex items-center gap-0.5">
                              <Eye className="h-2.5 w-2.5" />
                              {formatCompact(tut.views)}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </Section>
            )}

            {showCreators && matchedCreators.length > 0 && (
              <Section title={locale === 'zh' ? `创作者(${matchedCreators.length})` : `Creators (${matchedCreators.length})`}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {matchedCreators.map((c) =>
                    c ? (
                      <Link
                        key={c.slug}
                        href={`/creators/${c.slug}`}
                        className={`group flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-gradient-to-br ${c.accent} bg-opacity-10 p-4 lift-on-hover`}
                        style={{ backgroundColor: undefined }}
                      >
                        <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${c.accent} flex items-center justify-center text-2xl shadow-lg`}>
                          {c.avatar}
                        </div>
                        <div className="text-sm font-medium text-center truncate max-w-full">{c.name}</div>
                        <div className="text-xs text-muted-foreground">{c.handle}</div>
                      </Link>
                    ) : null
                  )}
                </div>
              </Section>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
}

function EmptyState({ locale }: { locale: 'en' | 'zh' }) {
  const suggestions = ['hyperliquid', 'polymarket', 'kukapay', 'solana', 'coinbase', 'funding', 'rug', 'memecoin'];
  const trendingTools = [...tools].sort((a, b) => (b.metrics.smitheryCalls || 0) - (a.metrics.smitheryCalls || 0)).slice(0, 6);
  const hotTopics = topics.slice(0, 6);
  const hotCollections = collections.slice(0, 4);

  return (
    <div className="space-y-10">
      {/* 热搜词 */}
      <div>
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground mb-3">
          <Flame className="h-3 w-3" />
          {locale === 'zh' ? '热门搜索' : 'Popular searches'}
        </div>
        <div className="flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => (window.location.search = `?q=${s}`)}
              className="h-8 px-3 rounded-full border border-border/60 bg-card/40 text-xs text-foreground/80 hover:border-primary/50 hover:bg-card transition"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* 热门话题 */}
      <div>
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground mb-3">
          <Compass className="h-3 w-3" />
          {locale === 'zh' ? '热门话题' : 'Hot topics'}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {hotTopics.map((tp) => (
            <button
              key={tp.slug}
              onClick={() => (window.location.search = `?q=${tp.label.en.toLowerCase()}`)}
              className="group flex items-center gap-3 rounded-xl border border-border/60 bg-card/40 px-4 py-3 text-left lift-on-hover"
            >
              <span className="text-2xl">{tp.icon}</span>
              <div className="min-w-0">
                <div className="text-sm font-medium truncate">{tp.label[locale]}</div>
                <div className="text-xs text-muted-foreground">{tp.count} {locale === 'zh' ? '个工具' : 'tools'}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 本周最热工具 */}
      <div>
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground mb-3">
          <TrendingUp className="h-3 w-3" />
          {locale === 'zh' ? '最多调用的工具' : 'Most-installed tools'}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {trendingTools.map((t) => (
            <Link
              key={t.slug}
              href={`/apps/${t.slug}`}
              className="group flex items-start gap-3 rounded-xl border border-border/60 bg-card/40 p-3 lift-on-hover"
            >
              <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center text-xl shrink-0">
                {t.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{t.name}</div>
                <div className="text-xs text-muted-foreground truncate">{t.author}</div>
              </div>
              {t.metrics.smitheryCalls != null && (
                <div className="shrink-0 text-right">
                  <div className="text-xs font-semibold tabular-nums">{formatCompact(t.metrics.smitheryCalls)}</div>
                  <div className="text-[10px] text-muted-foreground">{locale === 'zh' ? '调用' : 'calls'}</div>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* 合集入口 */}
      <div>
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground mb-3">
          <Layers className="h-3 w-3" />
          {locale === 'zh' ? '精选合集' : 'Featured collections'}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {hotCollections.map((c) => (
            <Link
              key={c.slug}
              href={`/collections/${c.slug}`}
              className={`group relative overflow-hidden aspect-[4/3] rounded-xl border border-border/60 bg-gradient-to-br ${c.accent} lift-on-hover`}
            >
              <div className="absolute inset-0 bg-grid opacity-30 mix-blend-overlay" />
              <div className="absolute top-3 left-3 text-3xl">{c.icon}</div>
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <div className="text-white text-xs font-semibold truncate">{c.title[locale]}</div>
                <div className="text-white/70 text-[10px]">{c.toolSlugs.length} {locale === 'zh' ? '工具' : 'tools'}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function NoResults({ q, locale }: { q: string; locale: 'en' | 'zh' }) {
  return (
    <div className="py-16 text-center">
      <div className="text-4xl mb-3">🕳️</div>
      <div className="text-lg font-medium mb-1">
        {locale === 'zh' ? `找不到 "${q}"` : `Nothing found for "${q}"`}
      </div>
      <div className="text-sm text-muted-foreground">
        {locale === 'zh' ? '换个关键词,或者提交一个工具建议给我们。' : 'Try different keywords — or submit a wishlist entry.'}
      </div>
    </div>
  );
}
