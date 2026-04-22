import { setRequestLocale } from 'next-intl/server';
import { Scale } from 'lucide-react';
import { Nav } from '@/components/home/nav';
import { Footer } from '@/components/home/footer';
import { CompareView } from '@/components/compare/compare-view';

export const metadata = { title: 'Compare · AgentStore' };

export default async function ComparePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: l } = await params;
  const locale = l as 'en' | 'zh';
  setRequestLocale(locale);

  return (
    <>
      <Nav />
      <main className="relative min-h-[calc(100vh-56px)]">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="orb bg-cyan-500 -right-20 -top-20 h-80 w-80 opacity-20 animate-float-slow" />
          <div className="absolute inset-0 bg-grid mask-fade-y opacity-30" />
        </div>
        <section className="container py-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
            <Scale className="h-3.5 w-3.5" />
            {locale === 'zh' ? '对比' : 'Compare'}
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-2">
            {locale === 'zh' ? '工具对比' : 'Tool comparison'}
          </h1>
          <p className="text-muted-foreground max-w-2xl mb-10">
            {locale === 'zh'
              ? '最多 4 个工具并排 — 同类场景下,谁的调用量大、谁更开源、谁更便宜,一眼看明白。'
              : 'Up to 4 tools side-by-side. At a glance: who has more real installs, who\'s open-source, who\'s free.'}
          </p>
          <CompareView locale={locale} />
        </section>
      </main>
      <Footer />
    </>
  );
}
