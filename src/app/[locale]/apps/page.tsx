import { setRequestLocale } from 'next-intl/server';
import { Nav } from '@/components/home/nav';
import { Footer } from '@/components/home/footer';
import { AppsGallery } from '@/components/apps/apps-gallery';

export const metadata = {
  title: 'All Apps · AgentStore',
};

export default async function AppsPage({
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
      <main>
        <section className="container py-8 md:py-10">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
            {locale === 'zh' ? '工具库' : 'Apps'}
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-3">
            {locale === 'zh' ? '所有 AI Agent 工具' : 'Every tool for your AI agent'}
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            {locale === 'zh'
              ? '按类别浏览、筛选、排序。所有数据实时更新,每 6 小时从 Smithery / npm / GitHub 同步一次。'
              : 'Browse, filter, sort. All metrics are live — synced from Smithery / npm / GitHub every 6 hours.'}
          </p>
        </section>

        <section className="container pb-12">
          <AppsGallery locale={locale} />
        </section>
      </main>
      <Footer />
    </>
  );
}
