import { setRequestLocale } from 'next-intl/server';
import { Search } from 'lucide-react';
import { Nav } from '@/components/home/nav';
import { Footer } from '@/components/home/footer';
import { SearchResults } from '@/components/search/search-results';

export const metadata = { title: 'Search · AgentStore' };

export default async function SearchPage({
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
          <div className="orb bg-violet-600 -left-20 -top-20 h-80 w-80 opacity-20 animate-float-slow" />
          <div className="absolute inset-0 bg-grid mask-fade-y opacity-30" />
        </div>
        <section className="container py-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
            <Search className="h-3.5 w-3.5" />
            {locale === 'zh' ? '搜索' : 'Search'}
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8">
            {locale === 'zh' ? '在 AgentStore 里搜一切' : 'Search everything on AgentStore'}
          </h1>
          <SearchResults locale={locale} />
        </section>
      </main>
      <Footer />
    </>
  );
}
