import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { collections, tools } from '@/lib/mock-data';
import { formatCompact } from '@/lib/utils';
import { Nav } from '@/components/home/nav';
import { Footer } from '@/components/home/footer';

export const metadata = {
  title: 'Collections · AgentStore',
};

export default async function CollectionsIndexPage({
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
        <section className="relative overflow-hidden border-b border-border/60">
          <div className="pointer-events-none absolute inset-0">
            <div className="orb bg-violet-600 -left-20 -top-20 h-80 w-80 opacity-25 animate-float-slow" />
            <div className="orb bg-cyan-500 -right-20 top-0 h-80 w-80 opacity-25 animate-float-slower" />
            <div className="absolute inset-0 bg-grid mask-fade-y opacity-40" />
          </div>

          <div className="container relative py-10 md:py-14">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
              {locale === 'zh' ? '合集' : 'Collections'}
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-3">
              {locale === 'zh' ? '编辑精选工具合集' : 'Curated collections'}
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              {locale === 'zh'
                ? '主题合集是从 200+ 工具里挑出来的"真正会一起用"的组合。每个合集都带"为什么在这里"的理由,点"一键装全部"直接给 Claude 配齐。'
                : 'Each collection is a set of tools that actually belong together — with an explanation for every pick. Install the whole set in one click.'}
            </p>
          </div>
        </section>

        <section className="container py-8 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {collections.map((c) => {
              const firstTool = tools.find((t) => t.slug === c.toolSlugs[0]);
              return (
                <Link
                  key={c.slug}
                  href={`/collections/${c.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card aspect-[4/5] lift-on-hover"
                >
                  {/* 渐变封面 */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.accent}`} />
                  <div className="absolute inset-0 bg-grid opacity-30 mix-blend-overlay" />

                  {/* 大 emoji */}
                  <div className="absolute top-6 left-6 text-7xl opacity-90 group-hover:scale-110 group-hover:rotate-6 transition duration-500">
                    {c.icon}
                  </div>

                  {/* 右上角工具图标拼图 */}
                  <div className="absolute top-4 right-4 flex -space-x-2">
                    {c.toolSlugs.slice(0, 3).map((s) => {
                      const t = tools.find((x) => x.slug === s);
                      if (!t) return null;
                      return (
                        <div
                          key={s}
                          className="h-7 w-7 rounded-full border-2 border-black/20 bg-black/40 backdrop-blur flex items-center justify-center text-xs"
                        >
                          {t.icon}
                        </div>
                      );
                    })}
                    {c.toolSlugs.length > 3 && (
                      <div className="h-7 w-7 rounded-full border-2 border-black/20 bg-black/60 backdrop-blur flex items-center justify-center text-[10px] font-mono text-white">
                        +{c.toolSlugs.length - 3}
                      </div>
                    )}
                  </div>

                  {/* 文字信息 */}
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <h3 className="text-white font-semibold text-lg md:text-xl leading-tight mb-1">
                      {c.title[locale]}
                    </h3>
                    <p className="text-white/80 text-sm line-clamp-2">
                      {c.subtitle[locale]}
                    </p>
                    <div className="mt-3 flex items-center gap-3 text-[11px] text-white/70">
                      <span>{c.toolSlugs.length} {locale === 'zh' ? '个工具' : 'tools'}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
