import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AgentStore · Web3 AI Agent 应用商店',
    short_name: 'AgentStore',
    description: 'The App Store for crypto AI agents — discover, install, master every Web3 AI tool.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#0A0A0C',
    theme_color: '#8B5CF6',
    orientation: 'portrait',
    lang: 'en',
    categories: ['finance', 'productivity', 'developer', 'utilities'],
    icons: [
      {
        src: '/icon?size=192',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon?size=512',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
