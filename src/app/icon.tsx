import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

/**
 * 动态生成 AgentStore 图标 — 品牌渐变方块 + ✨
 * Next.js 会自动把这个 route 作为 <link rel="icon"> 和 PWA 图标用
 */
export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 50%, #06B6D4 100%)',
          borderRadius: '22%',
          fontSize: 320,
          color: 'white',
        }}
      >
        ✨
      </div>
    ),
    size
  );
}
