'use client';

import * as React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.error('[agentstore]', error);
  }, [error]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ background: '#0A0A0C', color: '#F2F2F2', fontFamily: 'Inter, system-ui, sans-serif' }}>
        <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <div style={{ maxWidth: 560, textAlign: 'center' }}>
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: 20,
                background: 'rgba(244, 63, 94, 0.12)',
                color: '#F43F5E',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 24,
              }}
            >
              <AlertTriangle size={32} />
            </div>

            <h1 style={{ fontSize: 28, fontWeight: 600, marginBottom: 8, letterSpacing: -0.5 }}>
              Something broke
            </h1>
            <p style={{ color: '#909099', fontSize: 14, marginBottom: 24 }}>
              The page threw an unexpected error. This is on us. You can retry, or head home.
            </p>

            {error.digest && (
              <div
                style={{
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, monospace',
                  fontSize: 11,
                  color: '#6B7280',
                  background: '#141418',
                  border: '1px solid #262629',
                  borderRadius: 8,
                  padding: '6px 10px',
                  display: 'inline-block',
                  marginBottom: 24,
                }}
              >
                error id · {error.digest}
              </div>
            )}

            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={reset}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  height: 44,
                  padding: '0 20px',
                  borderRadius: 999,
                  background: 'linear-gradient(135deg,#8B5CF6,#6366F1,#06B6D4)',
                  color: 'white',
                  fontSize: 14,
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px -8px rgba(139,92,246,0.4)',
                }}
              >
                <RefreshCw size={16} />
                Try again
              </button>
              <Link
                href="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  height: 44,
                  padding: '0 20px',
                  borderRadius: 999,
                  border: '1px solid #262629',
                  background: '#141418',
                  color: '#F2F2F2',
                  fontSize: 14,
                  textDecoration: 'none',
                }}
              >
                <Home size={16} />
                Home
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
