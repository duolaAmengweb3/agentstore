'use client';

import * as React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { X, Plus, Star, Activity, Package, Github, TrendingUp, Check, Minus } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { tools, type Tool } from '@/lib/mock-data';
import { getToolDetails } from '@/lib/mock-details';
import { cn, formatCompact } from '@/lib/utils';
import { GetButton } from '@/components/tool/get-button';

export function CompareView({ locale }: { locale: 'en' | 'zh' }) {
  const router = useRouter();
  const sp = useSearchParams();
  const initial = (sp.get('tools') || '').split(',').filter(Boolean);

  const [selected, setSelected] = React.useState<string[]>(initial);
  const [picker, setPicker] = React.useState(false);

  // URL 同步
  React.useEffect(() => {
    const usp = new URLSearchParams();
    if (selected.length) usp.set('tools', selected.join(','));
    router.replace(`?${usp.toString()}`, { scroll: false });
  }, [selected, router]);

  const selectedTools = selected
    .map((s) => tools.find((t) => t.slug === s))
    .filter(Boolean) as Tool[];

  const add = (slug: string) => {
    if (selected.length >= 4) return;
    if (selected.includes(slug)) return;
    setSelected([...selected, slug]);
    setPicker(false);
  };
  const remove = (slug: string) => setSelected(selected.filter((s) => s !== slug));

  if (selectedTools.length === 0) {
    return <EmptyCompare onPick={add} locale={locale} />;
  }

  return (
    <div>
      {/* 列头 — 固定,水平滚 */}
      <div className="relative overflow-x-auto -mx-4 px-4 pb-4">
        <div className="inline-grid gap-3" style={{ gridTemplateColumns: `200px repeat(${selectedTools.length}, minmax(240px, 1fr)) 240px` }}>
          {/* Labels column */}
          <div className="space-y-3">
            <div className="h-[168px]" />
            {ROWS(locale).map((row) => (
              <div key={row.key} className="h-16 flex items-center text-xs font-medium text-muted-foreground">
                {row.label}
              </div>
            ))}
          </div>

          {/* Tool columns */}
          {selectedTools.map((tool) => {
            const details = getToolDetails(tool.slug, tool.name);
            return (
              <div key={tool.slug} className="relative rounded-2xl border border-border/60 bg-card/40 overflow-hidden">
                {/* 关闭 */}
                <button
                  onClick={() => remove(tool.slug)}
                  className="absolute top-3 right-3 z-10 inline-flex h-7 w-7 items-center justify-center rounded-full border border-border/60 bg-background/80 text-muted-foreground hover:text-foreground hover:border-rose-500/50 hover:text-rose-400 transition"
                  aria-label="Remove"
                >
                  <X className="h-3.5 w-3.5" />
                </button>

                {/* Header 168px */}
                <div className="p-4 border-b border-border/60">
                  <Link href={`/apps/${tool.slug}`} className="flex items-start gap-3">
                    <div className="h-14 w-14 rounded-xl bg-muted flex items-center justify-center text-3xl shrink-0">
                      {tool.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold truncate">{tool.name}</span>
                        {tool.official && (
                          <span className="text-[9px] px-1 py-0.5 rounded border border-primary/40 text-primary uppercase tracking-wider shrink-0">
                            Official
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground">{tool.author}</div>
                      <div className="text-xs text-muted-foreground capitalize mt-0.5">{tool.category}</div>
                    </div>
                  </Link>
                  <p className="mt-3 text-xs text-foreground/80 line-clamp-2 min-h-[2rem]">
                    {tool.tagline[locale]}
                  </p>
                </div>

                {/* Rows 每个 64px */}
                <div className="p-4 space-y-3">
                  <Cell icon={<Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />} value={tool.score.toFixed(1)} label="Score" />
                  <Cell
                    icon={<Activity className="h-3.5 w-3.5 text-violet-400" />}
                    value={tool.metrics.smitheryCalls != null ? formatCompact(tool.metrics.smitheryCalls) : '—'}
                    label="Smithery"
                  />
                  <Cell
                    icon={<Package className="h-3.5 w-3.5 text-cyan-400" />}
                    value={tool.metrics.npmMonthly != null ? formatCompact(tool.metrics.npmMonthly) : '—'}
                    label="npm/mo"
                  />
                  <Cell
                    icon={<Github className="h-3.5 w-3.5 text-amber-400" />}
                    value={tool.metrics.githubStars != null ? formatCompact(tool.metrics.githubStars) : '—'}
                    label="★"
                  />
                  <Cell
                    icon={<TrendingUp className="h-3.5 w-3.5 text-emerald-400" />}
                    value={
                      tool.metrics.weeklyGrowthPct != null
                        ? (tool.metrics.weeklyGrowthPct > 0 ? `↑${tool.metrics.weeklyGrowthPct}%` : `${tool.metrics.weeklyGrowthPct}%`)
                        : '—'
                    }
                    label="7d"
                    valueClass={
                      tool.metrics.weeklyGrowthPct != null
                        ? tool.metrics.weeklyGrowthPct > 0
                          ? 'text-emerald-400'
                          : 'text-rose-400'
                        : ''
                    }
                  />
                  <Cell
                    icon={details.security.openSource ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <X className="h-3.5 w-3.5 text-rose-400" />}
                    value={details.security.openSource ? (locale === 'zh' ? '开源' : 'Open') : (locale === 'zh' ? '闭源' : 'Closed')}
                    label={locale === 'zh' ? '开源' : 'Source'}
                  />
                  <Cell
                    icon={details.security.keyHandling === 'local' ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Minus className="h-3.5 w-3.5 text-muted-foreground" />}
                    value={details.security.keyHandling === 'local' ? (locale === 'zh' ? '本地' : 'Local') : details.security.keyHandling}
                    label={locale === 'zh' ? '密钥' : 'Keys'}
                  />
                  <Cell
                    icon={!details.security.paid ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Minus className="h-3.5 w-3.5 text-amber-400" />}
                    value={details.security.paid ? (locale === 'zh' ? '付费' : 'Paid') : (locale === 'zh' ? '免费' : 'Free')}
                    label={locale === 'zh' ? '价格' : 'Price'}
                  />
                  <Cell
                    icon={<span className="text-xs">🧩</span>}
                    value={details.actions.length.toString()}
                    label={locale === 'zh' ? '动作数' : 'Actions'}
                  />
                </div>

                <div className="px-4 pb-4">
                  <GetButton locale={locale} size="md" className="w-full justify-center" />
                </div>
              </div>
            );
          })}

          {/* Add column */}
          {selectedTools.length < 4 && (
            <div className="relative rounded-2xl border-2 border-dashed border-border/60 bg-card/20 flex items-center justify-center p-8">
              {!picker ? (
                <button
                  onClick={() => setPicker(true)}
                  className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition"
                >
                  <div className="h-14 w-14 rounded-full border border-dashed border-border flex items-center justify-center">
                    <Plus className="h-6 w-6" />
                  </div>
                  <div className="text-sm font-medium">
                    {locale === 'zh' ? '添加工具' : 'Add tool'}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {locale === 'zh' ? `最多 ${4 - selectedTools.length} 个` : `Up to ${4 - selectedTools.length} more`}
                  </div>
                </button>
              ) : (
                <ToolPicker
                  excluded={selected}
                  onPick={add}
                  onCancel={() => setPicker(false)}
                  locale={locale}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const ROWS = (locale: 'en' | 'zh') => [
  { key: 'score',       label: locale === 'zh' ? '综合分'   : 'Score' },
  { key: 'smithery',    label: 'Smithery' },
  { key: 'npm',         label: 'npm monthly' },
  { key: 'github',      label: 'GitHub ★' },
  { key: '7d',          label: locale === 'zh' ? '7 日增长' : 'Weekly growth' },
  { key: 'source',      label: locale === 'zh' ? '开源'     : 'Open source' },
  { key: 'keys',        label: locale === 'zh' ? '密钥处理' : 'Key handling' },
  { key: 'price',       label: locale === 'zh' ? '价格'     : 'Price' },
  { key: 'actions',     label: locale === 'zh' ? '动作数'   : 'Action count' },
];

function Cell({
  icon, value, label, valueClass,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  valueClass?: string;
}) {
  return (
    <div className="h-16 flex flex-col justify-center">
      <div className={cn('text-base font-semibold tabular-nums inline-flex items-center gap-1.5', valueClass)}>
        {icon}
        {value}
      </div>
      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  );
}

function ToolPicker({
  excluded, onPick, onCancel, locale,
}: {
  excluded: string[]; onPick: (slug: string) => void; onCancel: () => void; locale: 'en' | 'zh';
}) {
  const [q, setQ] = React.useState('');
  const results = tools
    .filter((t) => !excluded.includes(t.slug))
    .filter((t) =>
      !q.trim() ||
      t.name.toLowerCase().includes(q.toLowerCase()) ||
      t.tagline[locale].toLowerCase().includes(q.toLowerCase())
    )
    .slice(0, 20);

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-3">
        <input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={locale === 'zh' ? '搜工具...' : 'Search tools…'}
          className="flex-1 h-9 rounded-lg border border-border bg-background/60 px-3 text-sm outline-none focus:border-primary/60"
        />
        <button
          onClick={onCancel}
          className="h-9 w-9 rounded-lg hover:bg-muted transition inline-flex items-center justify-center"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="max-h-64 overflow-y-auto space-y-1">
        {results.length === 0 ? (
          <div className="text-xs text-muted-foreground py-4 text-center">
            {locale === 'zh' ? '没有匹配' : 'No matches'}
          </div>
        ) : (
          results.map((t) => (
            <button
              key={t.slug}
              onClick={() => onPick(t.slug)}
              className="w-full flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-muted text-left"
            >
              <span className="text-lg shrink-0">{t.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{t.name}</div>
                <div className="text-[11px] text-muted-foreground truncate">{t.author}</div>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
}

function EmptyCompare({ onPick, locale }: { onPick: (s: string) => void; locale: 'en' | 'zh' }) {
  const top = [...tools].sort((a, b) => b.score - a.score).slice(0, 12);
  return (
    <div>
      <div className="rounded-2xl border border-dashed border-border bg-card/20 p-10 text-center">
        <div className="text-5xl mb-3">⚖️</div>
        <h2 className="text-xl font-semibold mb-2">
          {locale === 'zh' ? '添加工具开始对比' : 'Pick tools to compare'}
        </h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          {locale === 'zh' ? '最多对比 4 个工具。我们会并排显示指标、安全性、价格和功能。' : 'Up to 4 tools side-by-side. Metrics, security, price, and features.'}
        </p>
      </div>
      <h3 className="mt-10 mb-4 text-sm font-medium text-muted-foreground">
        {locale === 'zh' ? '建议起点:综合榜 Top 12' : 'Start with the top 12 overall'}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {top.map((t) => (
          <button
            key={t.slug}
            onClick={() => onPick(t.slug)}
            className="flex items-center gap-2 rounded-lg border border-border/60 bg-card/40 px-3 py-2 text-left hover:border-primary/50 hover:bg-card transition"
          >
            <span className="text-lg shrink-0">{t.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">{t.name}</div>
              <div className="text-[11px] text-muted-foreground truncate capitalize">{t.category}</div>
            </div>
            <Plus className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
          </button>
        ))}
      </div>
    </div>
  );
}
