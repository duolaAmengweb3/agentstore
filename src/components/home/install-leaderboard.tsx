'use client';

import { useLocale } from 'next-intl';
import { Flame, TrendingUp } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { tools, type Tool, type Category } from '@/lib/mock-data';
import { formatCompact } from '@/lib/utils';

/**
 * 分板块安装量榜:每类 top 5 by "install volume"。
 * installs = smitheryCalls + npmMonthly(两个主要渠道),取较大值作为代表。
 *
 * 为什么放首页:用户要看数据,metric 榜单是客观证据(不是编辑口味)。
 * 为什么分板块:跨类比数字没意义(Claude Desktop vs Polymarket MCP 不在一条赛道上)。
 */

type Board = {
  id: Category;
  label: { en: string; zh: string };
  emoji: string;
  gradient: string;
};

const BOARDS: Board[] = [
  { id: 'cex',       label: { en: 'CEX',          zh: '交易所'   }, emoji: '💱', gradient: 'from-amber-500/25 via-orange-500/15' },
  { id: 'data',      label: { en: 'On-chain data', zh: '链上数据' }, emoji: '📊', gradient: 'from-indigo-500/25 via-purple-500/15' },
  { id: 'framework', label: { en: 'Frameworks',    zh: 'AI 框架'  }, emoji: '🧠', gradient: 'from-emerald-500/25 via-teal-500/15' },
  { id: 'wallet',    label: { en: 'Wallets',       zh: '钱包'     }, emoji: '🔐', gradient: 'from-violet-500/25 via-fuchsia-500/15' },
];

/** 把一个工具的安装量标准化成一个可比较的数 + source 标签(给 UI 显示) */
function installVolume(tool: Tool): { value: number; source: 'smithery' | 'npm' | 'stars' | null } {
  const { smitheryCalls, npmMonthly, githubStars } = tool.metrics;
  if (smitheryCalls != null && smitheryCalls > 0) {
    return { value: smitheryCalls, source: 'smithery' };
  }
  if (npmMonthly != null && npmMonthly > 0) {
    return { value: npmMonthly, source: 'npm' };
  }
  if (githubStars != null && githubStars > 0) {
    return { value: githubStars, source: 'stars' };
  }
  return { value: 0, source: null };
}

export function InstallLeaderboard() {
  const locale = useLocale() as 'en' | 'zh';

  return (
    <section className="container py-10 md:py-14">
      <div className="mb-6 flex items-baseline justify-between">
        <div>
          <div className="mb-1 flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-primary">
            <Flame className="h-3 w-3" />
            {locale === 'zh' ? '分板块安装量榜' : 'Installs by category'}
          </div>
          <h2 className="text-lg md:text-xl font-semibold">
            {locale === 'zh' ? '同类里谁真的在被用' : 'Who\'s actually being installed'}
          </h2>
        </div>
        <span className="text-xs text-muted-foreground max-w-xs text-right">
          {locale === 'zh'
            ? 'Smithery 调用 + npm 月下载,每 6 小时自动刷新'
            : 'Smithery calls + npm monthly downloads, refreshed every 6 hours'}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {BOARDS.map((board) => {
          const items = tools
            .filter((t) => t.category === board.id)
            .map((t) => ({ tool: t, ...installVolume(t) }))
            .filter((x) => x.value > 0)
            .sort((a, b) => b.value - a.value)
            .slice(0, 5);

          return (
            <div key={board.id} className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-5">
              <div className={`absolute inset-0 bg-gradient-to-br ${board.gradient} to-transparent opacity-60`} />
              <div className="relative">
                <div className="mb-4 flex items-baseline justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{board.emoji}</span>
                    <span className="font-semibold text-sm">{board.label[locale]}</span>
                    <span className="text-xs text-muted-foreground">
                      · {locale === 'zh' ? `${items.length} / ${tools.filter((t) => t.category === board.id).length}` : `top ${items.length}`}
                    </span>
                  </div>
                  <Link
                    href={`/apps?category=${board.id}` as any}
                    className="text-xs text-muted-foreground hover:text-foreground transition"
                  >
                    {locale === 'zh' ? '看完整板块 →' : 'See all →'}
                  </Link>
                </div>

                {items.length === 0 ? (
                  <div className="text-xs text-muted-foreground py-6 text-center">
                    {locale === 'zh' ? '暂无数据' : 'No data yet'}
                  </div>
                ) : (
                  <ul className="space-y-1.5">
                    {items.map((item, i) => (
                      <li key={item.tool.slug}>
                        <Link
                          href={`/apps/${item.tool.slug}`}
                          className="flex items-center gap-3 rounded-lg p-2 -m-2 hover:bg-muted/40 transition"
                        >
                          <div className={`w-5 text-xs font-mono tabular-nums text-right ${
                            i === 0 ? 'font-bold text-amber-400' :
                            i === 1 ? 'font-bold text-zinc-300' :
                            i === 2 ? 'font-bold text-orange-400' :
                            'text-muted-foreground'
                          }`}>
                            {i + 1}
                          </div>
                          <div className="h-7 w-7 flex items-center justify-center rounded-lg bg-muted/60 text-base shrink-0">
                            {item.tool.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium truncate">{item.tool.name}</div>
                            <div className="text-[11px] text-muted-foreground line-clamp-1">
                              {item.tool.tagline[locale]}
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            <div className="text-sm font-semibold tabular-nums">
                              {formatCompact(item.value)}
                            </div>
                            <div className="text-[10px] text-muted-foreground">
                              {item.source === 'smithery' ? (locale === 'zh' ? '调用' : 'calls') :
                               item.source === 'npm' ? (locale === 'zh' ? '月下载' : '/mo npm') :
                               '⭐'}
                            </div>
                          </div>
                          {item.tool.metrics.weeklyGrowthPct != null && item.tool.metrics.weeklyGrowthPct > 0 && (
                            <div className="inline-flex items-center gap-0.5 text-xs tabular-nums text-emerald-400 shrink-0">
                              <TrendingUp className="h-3 w-3" />
                              {item.tool.metrics.weeklyGrowthPct}%
                            </div>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
