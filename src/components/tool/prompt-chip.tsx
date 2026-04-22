'use client';

import * as React from 'react';
import { Check, Copy, Sparkles } from 'lucide-react';

export function PromptChip({ en, zh, locale }: { en: string; zh: string; locale: 'en' | 'zh' }) {
  const [copied, setCopied] = React.useState(false);
  const text = locale === 'zh' ? zh : en;

  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="group w-full text-left rounded-xl border border-border/60 bg-card/40 p-4 hover:border-primary/40 hover:bg-card/70 transition lift-on-hover"
    >
      <div className="flex items-start gap-3">
        <Sparkles className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
        <div className="flex-1 text-sm leading-relaxed text-foreground/90 font-mono">
          "{text}"
        </div>
        <span className="shrink-0 text-xs text-muted-foreground group-hover:text-foreground transition inline-flex items-center gap-1">
          {copied ? (
            <>
              <Check className="h-3 w-3 text-emerald-400" />
              <span className="text-emerald-400">{locale === 'zh' ? '已复制' : 'Copied'}</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              {locale === 'zh' ? '复制' : 'Copy'}
            </>
          )}
        </span>
      </div>
    </button>
  );
}
