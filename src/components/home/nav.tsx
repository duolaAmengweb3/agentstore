'use client';

import * as React from 'react';
import { useTranslations } from 'next-intl';
import { Search, LayoutGrid, Layers, Trophy, Bell, GraduationCap, Sparkles } from 'lucide-react';
import { Link, useRouter } from '@/i18n/routing';
import { ThemeToggle } from '@/components/theme-toggle';
import { LocaleSwitch } from '@/components/locale-switch';
import { cn } from '@/lib/utils';

const items = [
  { href: '/apps',        labelKey: 'apps',        icon: LayoutGrid },
  { href: '/collections', labelKey: 'collections', icon: Layers },
  { href: '/rankings',    labelKey: 'rankings',    icon: Trophy },
  { href: '/updates',     labelKey: 'updates',     icon: Bell },
  { href: '/learn',       labelKey: 'learn',       icon: GraduationCap },
] as const;

export function Nav() {
  const t = useTranslations('nav');
  const router = useRouter();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  // ⌘ K 快捷键跳到搜索
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        router.push('/search');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [router]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-all duration-300',
        scrolled
          ? 'glass border-border/60'
          : 'border-transparent bg-transparent'
      )}
    >
      <div className="container flex h-14 items-center gap-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-7 w-7">
            <div className="absolute inset-0 rounded-lg bg-[linear-gradient(135deg,#8B5CF6,#6366F1,#06B6D4)] group-hover:shadow-[0_0_16px_rgba(139,92,246,0.5)] transition-shadow" />
            <div className="absolute inset-[2px] rounded-[7px] bg-background/80 flex items-center justify-center">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
            </div>
          </div>
          <span className="font-semibold tracking-tight">
            AgentStore
          </span>
        </Link>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-1 ml-2">
          {items.map(({ href, labelKey, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition"
            >
              <Icon className="h-3.5 w-3.5 opacity-70" />
              {t(labelKey)}
            </Link>
          ))}
        </nav>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Mini search */}
        <Link
          href="/search"
          className="hidden sm:inline-flex items-center gap-2 h-9 px-3 rounded-lg border border-border/60 bg-card/50 text-xs text-muted-foreground hover:text-foreground hover:border-border transition min-w-[220px]"
        >
          <Search className="h-3.5 w-3.5" />
          <span className="flex-1 text-left">Search…</span>
          <kbd className="hidden lg:inline-flex items-center rounded border border-border/60 px-1 font-mono text-[10px]">
            ⌘ K
          </kbd>
        </Link>

        <ThemeToggle />
        <LocaleSwitch />
      </div>
    </header>
  );
}
