import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"PingFang SC"',
          '"Noto Sans SC"',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'monospace',
        ],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // AgentStore 品牌色(渐变用)
        brand: {
          violet: "#8B5CF6",
          indigo: "#6366F1",
          cyan:   "#06B6D4",
          mint:   "#14B8A6",
          gold:   "#F59E0B",
          rose:   "#F43F5E",
          green:  "#10B981",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        // 自动滚动的 Live Ticker
        marquee: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-50%)" },
        },
        // 卡片进入时淡入 + 上移
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // 数字辉光呼吸
        "glow-pulse": {
          "0%, 100%": { opacity: "1", filter: "drop-shadow(0 0 4px currentColor)" },
          "50%": { opacity: "0.85", filter: "drop-shadow(0 0 10px currentColor)" },
        },
        // 小圆点闪烁(Live 指示器)
        "blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        // 边缘渐变扫过
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        // 浮动 orb(背景氛围光)
        "float-slow": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(40px, -30px) scale(1.1)" },
        },
        "float-slower": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-30px, 40px) scale(0.95)" },
        },
      },
      animation: {
        marquee: "marquee 60s linear infinite",
        "marquee-fast": "marquee 30s linear infinite",
        "fade-up": "fade-up 0.5s ease-out both",
        "glow-pulse": "glow-pulse 2.4s ease-in-out infinite",
        blink: "blink 1.8s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "float-slow": "float-slow 16s ease-in-out infinite",
        "float-slower": "float-slower 22s ease-in-out infinite",
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
        "grid-light":
          "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
        "brand-gradient":
          "linear-gradient(135deg, #8B5CF6 0%, #6366F1 40%, #06B6D4 100%)",
        "brand-radial":
          "radial-gradient(circle at top left, rgba(139,92,246,0.25), transparent 60%), radial-gradient(circle at bottom right, rgba(6,182,212,0.2), transparent 60%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
