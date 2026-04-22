import { setRequestLocale } from 'next-intl/server';
import { Wand2 } from 'lucide-react';
import { Nav } from '@/components/home/nav';
import { Footer } from '@/components/home/footer';
import { WizardFlow } from '@/components/wizard/wizard-flow';

export const metadata = { title: 'Wizard · AgentStore' };

export default async function WizardPage({
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
        {/* 背景 */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="orb bg-violet-600 -left-32 -top-32 h-96 w-96 opacity-25 animate-float-slow" />
          <div className="orb bg-cyan-500 -right-32 top-40 h-96 w-96 opacity-20 animate-float-slower" />
          <div className="absolute inset-0 bg-grid mask-fade-y opacity-30" />
        </div>

        <div className="container py-10 md:py-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
            <Wand2 className="h-3.5 w-3.5" />
            {locale === 'zh' ? '推荐向导' : 'Wizard'}
          </div>
          <WizardFlow locale={locale} />
        </div>
      </main>
      <Footer />
    </>
  );
}
