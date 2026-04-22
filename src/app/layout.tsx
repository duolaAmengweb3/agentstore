import './globals.css';

// 根 layout 只做一件事:让 Next.js 知道有 html/body
// 真正的 locale-aware layout 在 [locale]/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
