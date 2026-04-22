'use client';

import * as React from 'react';
import { Check, Copy, Terminal, FileJson } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { InstallCommand } from '@/lib/mock-details';

export function InstallHelper({ commands, locale }: { commands: InstallCommand[]; locale: 'en' | 'zh' }) {
  const [active, setActive] = React.useState(0);
  const [copied, setCopied] = React.useState(false);

  const current = commands[active];

  const copy = () => {
    navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 backdrop-blur">
      {/* Tabs */}
      <div className="flex items-center gap-1 border-b border-border/60 bg-muted/20 p-1.5 overflow-x-auto">
        {commands.map((c, i) => (
          <button
            key={c.runtime}
            onClick={() => setActive(i)}
            className={cn(
              'inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap transition',
              i === active
                ? 'bg-background text-foreground shadow-sm border border-border/60'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {c.kind === 'config' ? <FileJson className="h-3 w-3" /> : <Terminal className="h-3 w-3" />}
            {c.runtime}
          </button>
        ))}
      </div>

      {/* Body */}
      <div className="relative">
        <pre className="overflow-x-auto p-5 pr-16 text-xs md:text-sm font-mono leading-relaxed text-foreground/90">
          <code>{current.code}</code>
        </pre>

        <button
          onClick={copy}
          className={cn(
            'absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition',
            copied
              ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400'
              : 'border-border/60 bg-background/80 text-muted-foreground hover:text-foreground'
          )}
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" />
              {locale === 'zh' ? '已复制' : 'Copied'}
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              {locale === 'zh' ? '复制' : 'Copy'}
            </>
          )}
        </button>
      </div>
    </div>
  );
}
