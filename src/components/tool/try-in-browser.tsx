'use client';

import * as React from 'react';
import { Zap, X, Sparkles, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * "Try in browser" 按钮 + 点击弹出 Coming Soon 卡片
 * 批次 B 会接 Anthropic API 代理做真实试用,目前透明预告
 */
export function TryInBrowser({ locale }: { locale: 'en' | 'zh' }) {
  const [open, setOpen] = React.useState(false);

  // Esc 关闭
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 h-11 px-4 rounded-full border border-border bg-card/60 text-sm hover:bg-card transition"
      >
        <span>{locale === 'zh' ? '在浏览器里试' : 'Try in browser'}</span>
        <Zap className="h-3.5 w-3.5" />
      </button>

      {/* Modal */}
      <div
        className={cn(
          'fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {/* 遮罩 */}
        <div
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-background/80 backdrop-blur-md"
        />

        {/* 卡片 */}
        <div
          className={cn(
            'relative max-w-md w-full rounded-2xl border border-border/60 bg-card shadow-2xl shadow-black/30 p-6 transition-all',
            open ? 'scale-100' : 'scale-95'
          )}
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-muted transition text-muted-foreground"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="h-12 w-12 rounded-xl bg-[linear-gradient(135deg,#8B5CF6,#6366F1,#06B6D4)] flex items-center justify-center mb-4 shadow-lg shadow-primary/30">
            <Sparkles className="h-6 w-6 text-white" />
          </div>

          <h3 className="text-lg font-semibold mb-1">
            {locale === 'zh' ? '浏览器内试用 · 即将上线' : 'Try in browser · Coming soon'}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {locale === 'zh'
              ? '批次 B 我们会做 "不装就试":AgentStore 代理一组只读 Claude 调用,你可以直接发 3-5 条 prompt 测试工具效果,无需任何配置。'
              : 'In the next release, "no-install trial" goes live: AgentStore proxies read-only Claude calls so you can fire 3-5 prompts and see the tool in action, zero setup required.'}
          </p>

          <div className="rounded-xl border border-border/60 bg-muted/30 p-3 mb-4">
            <div className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
              <Lock className="h-3.5 w-3.5 shrink-0 mt-0.5 text-emerald-400" />
              <span>
                {locale === 'zh'
                  ? '安全:只读、有调用次数上限、你的 API key 永远不会经过我们服务器。'
                  : 'Safety: read-only, rate-limited, and your API keys never touch our servers.'}
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setOpen(false)}
              className="flex-1 h-10 rounded-full border border-border/60 bg-card text-sm hover:bg-muted transition"
            >
              {locale === 'zh' ? '知道了' : 'Got it'}
            </button>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                document.getElementById('install')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="flex-1 h-10 inline-flex items-center justify-center rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition"
            >
              {locale === 'zh' ? '现在先装上' : 'Install now'}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
