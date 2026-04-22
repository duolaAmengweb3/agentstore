'use client';

import { useTranslations } from 'next-intl';
import { Sparkles, Github } from 'lucide-react';
import { Link } from '@/i18n/routing';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-border/60 mt-10">
      <div className="container py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo & 简介 */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="relative h-7 w-7">
                <div className="absolute inset-0 rounded-lg bg-[linear-gradient(135deg,#8B5CF6,#6366F1,#06B6D4)]" />
                <div className="absolute inset-[2px] rounded-[7px] bg-background/80 flex items-center justify-center">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                </div>
              </div>
              <span className="font-semibold tracking-tight">AgentStore</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              The App Store for crypto AI agents. Discover, install, master every tool.
            </p>
            <div className="mt-4 flex gap-2">
              <Social href="https://github.com/duolaAmengweb3/agentstore" icon={<Github className="h-4 w-4" />} label="GitHub" />
            </div>
          </div>

          <Column title={t('product')} items={[
            { label: 'Apps',        href: '/apps' },
            { label: 'Collections', href: '/collections' },
            { label: 'Rankings',    href: '/rankings' },
            { label: 'Updates',     href: '/updates' },
          ]} />
          <Column title={t('resources')} items={[
            { label: 'Learn',    href: '/learn' },
            { label: 'About',    href: '/about' },
            { label: 'Submit',   href: '/about/submit' },
            { label: 'Wizard',   href: '/wizard' },
          ]} />
          <Column title={t('legal')} items={[
            { label: 'Methodology', href: '/about/methodology' },
            { label: 'Submit',      href: '/about/submit' },
            { label: 'Compare',     href: '/compare' },
            { label: 'Search',      href: '/search' },
          ]} />
        </div>

        <div className="mt-10 pt-6 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} AgentStore · {t('built')}</span>
          <span>Made for Claude · ChatGPT · Cursor · Eliza · and any MCP-compatible agent</span>
        </div>
      </div>
    </footer>
  );
}

function Column({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
        {title}
      </h4>
      <ul className="space-y-2">
        {items.map((l) => (
          <li key={l.label}>
            <Link href={l.href as any} className="text-sm text-foreground/80 hover:text-foreground transition">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Social({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-card/40 text-muted-foreground hover:text-foreground hover:border-border transition"
    >
      {icon}
    </a>
  );
}
