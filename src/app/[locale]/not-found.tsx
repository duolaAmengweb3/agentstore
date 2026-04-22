import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getLocale } from 'next-intl/server';
import { ArrowLeft, Search, Sparkles } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Nav } from '@/components/home/nav';
import { Footer } from '@/components/home/footer';

export default async function NotFound() {
  const locale = (await getLocale()) as 'en' | 'zh';
  setRequestLocale(locale);

  const zh = locale === 'zh';

  return (
    <>
      <Nav />
      <main className="relative min-h-[calc(100vh-200px)] overflow-hidden">
        {/* 背景氛围 */}
        <div className="pointer-events-none absolute inset-0">
          <div className="orb bg-violet-600 -left-32 -top-20 h-[28rem] w-[28rem] opacity-25 animate-float-slow" />
          <div className="orb bg-cyan-500 -right-32 top-20 h-96 w-96 opacity-20 animate-float-slower" />
          <div className="absolute inset-0 bg-grid mask-fade-y opacity-40" />
        </div>

        <section className="container relative py-20 md:py-28 flex flex-col items-center text-center max-w-2xl">
          {/* 404 大字 */}
          <div className="relative mb-8">
            <div className="text-[120px] md:text-[180px] font-bold tracking-tighter leading-none text-gradient-brand select-none">
              404
            </div>
            <Sparkles className="absolute top-4 right-0 h-8 w-8 text-primary/60 animate-pulse" />
          </div>

          <h1 className="text-2xl md:text-3xl font-semibold mb-3">
            {zh ? '这页 agent 没找到' : 'Your agent can\'t find this page'}
          </h1>
          <p className="text-muted-foreground mb-8 max-w-md">
            {zh
              ? '可能这个工具还没收录、合集被重命名了,或者你复制的链接缺了一截。'
              : 'Maybe the tool isn\'t listed yet, the collection got renamed, or the link you pasted is incomplete.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-[linear-gradient(135deg,#8B5CF6,#6366F1,#06B6D4)] text-white font-semibold shadow-lg shadow-primary/30 hover:brightness-110 transition"
            >
              <ArrowLeft className="h-4 w-4" />
              {zh ? '回首页' : 'Back home'}
            </Link>
            <Link
              href="/search"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-border bg-card/60 text-sm hover:bg-card transition"
            >
              <Search className="h-4 w-4" />
              {zh ? '去搜索' : 'Search'}
            </Link>
            <Link
              href="/apps"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-border bg-card/60 text-sm hover:bg-card transition"
            >
              {zh ? '逛工具库' : 'Browse apps'}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
