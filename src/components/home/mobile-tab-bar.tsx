'use client';

import * as React from 'react';
import { LayoutGrid, Layers, Trophy, Search, Sparkles } from 'lucide-react';
import { Link, usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';

const tabs = [
  { href: '/',            icon: Sparkles,   labelEn: 'Today',       labelZh: '今日' },
  { href: '/apps',        icon: LayoutGrid, labelEn: 'Apps',        labelZh: '工具' },
  { href: '/collections', icon: Layers,     labelEn: 'Collections', labelZh: '合集' },
  { href: '/rankings',    icon: Trophy,     labelEn: 'Rankings',    labelZh: '榜单' },
  { href: '/search',      icon: Search,     labelEn: 'Search',      labelZh: '搜索' },
] as const;

export function MobileTabBar({ locale }: { locale: 'en' | 'zh' }) {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border/60 glass pb-safe">
      <div className="grid grid-cols-5 h-14">
        {tabs.map((t) => {
          const active = isActive(t.href);
          const Icon = t.icon;
          return (
            <Link
              key={t.href}
              href={t.href}
              className={cn(
                'flex flex-col items-center justify-center gap-0.5 transition',
                active ? 'text-primary' : 'text-muted-foreground active:text-foreground'
              )}
            >
              <Icon className={cn('h-5 w-5', active && 'drop-shadow-[0_0_6px_rgba(139,92,246,0.6)]')} />
              <span className="text-[10px] font-medium">
                {locale === 'zh' ? t.labelZh : t.labelEn}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
