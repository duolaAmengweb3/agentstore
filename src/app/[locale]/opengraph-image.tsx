import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'AgentStore — The App Store for crypto AI agents';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: 'linear-gradient(135deg, #0A0A0C 0%, #1A0B2E 60%, #0E2338 100%)',
          color: '#FAFAFA',
          fontFamily: 'system-ui',
        }}
      >
        {/* Top logo chip */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: 'linear-gradient(135deg, #8B5CF6, #6366F1, #06B6D4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 42,
            }}
          >
            ✨
          </div>
          <div style={{ fontSize: 40, fontWeight: 600, letterSpacing: -1 }}>AgentStore</div>
        </div>

        {/* Main title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.05, maxWidth: 960, letterSpacing: -2 }}>
            The App Store for{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #A78BFA, #818CF8, #22D3EE)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              crypto AI agents
            </span>
          </div>
          <div style={{ fontSize: 32, color: '#9CA3AF', maxWidth: 900 }}>
            Discover, install, master every Web3 AI tool — ranked by real install data.
          </div>
        </div>

        {/* Footer stats */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 36, fontSize: 26, color: '#D1D5DB' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ color: '#A78BFA' }}>●</span> 100+ tools
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ color: '#22D3EE' }}>●</span> 8 curated collections
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ color: '#34D399' }}>●</span> bilingual · EN / 中文
          </div>
        </div>
      </div>
    ),
    size
  );
}
