/**
 * 服务端组件 — 注入 JSON-LD <script> 标签
 * 用法:在 page.tsx 的 JSX 里 <JsonLd data={...} />
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://agentstore.xyz';

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AgentStore',
    url: BASE,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE}/en/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AgentStore',
    url: BASE,
    logo: `${BASE}/logo.png`,
    sameAs: [
      'https://twitter.com/agentstorexyz',
      'https://github.com/agentstore',
    ],
    description: 'The App Store for crypto AI agents',
  };
}

export function buildToolSoftwareSchema(opts: {
  name: string;
  description: string;
  url: string;
  author: string;
  authorUrl: string;
  category: string;
  rating: { avg: number; count: number };
  offers?: { price: string; currency: string };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    author: {
      '@type': 'Organization',
      name: opts.author,
      url: opts.authorUrl,
    },
    aggregateRating: opts.rating.count > 0 ? {
      '@type': 'AggregateRating',
      ratingValue: opts.rating.avg,
      reviewCount: opts.rating.count,
      bestRating: 5,
      worstRating: 1,
    } : undefined,
    offers: opts.offers ? {
      '@type': 'Offer',
      price: opts.offers.price,
      priceCurrency: opts.offers.currency,
    } : {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function buildArticleSchema(opts: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  author: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    author: { '@type': 'Organization', name: opts.author },
    publisher: {
      '@type': 'Organization',
      name: 'AgentStore',
      url: BASE,
    },
  };
}
