/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Slate-based dark foundation (Linear/Vercel-style neutral palette)
        ink: {
          950: "#030712",
          900: "#0F172A",
          850: "#131E30",
          800: "#1E293B",
          700: "#2A374A",
          600: "#334155",
          500: "#475569",
        },
        mist: {
          100: "#F8FAFC",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
        },
        // Primary brand accent (emerald) — used for CTAs, links, focus states
        signal: {
          DEFAULT: "#10B981",
          bright: "#34D399",
          dim: "#0B4A38",
          soft: "#0A2A21",
        },
        // Secondary atmospheric accents — used sparingly for depth/glow only
        violet: {
          DEFAULT: "#7C3AED",
          soft: "#1E1533",
        },
        cyan: {
          DEFAULT: "#22D3EE",
          soft: "#0A2530",
        },
        amber: {
          DEFAULT: "#D9A441",
        },
      },
      fontFamily: {
        display: ["\"Space Grotesk\"", "sans-serif"],
        body: ["\"Inter\"", "sans-serif"],
        mono: ["\"JetBrains Mono\"", "monospace"],
      },
      backgroundImage: {
        "grid-texture":
          "linear-gradient(to right, rgba(248,250,252,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(248,250,252,0.035) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(16,185,129,0.10), transparent 60%)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(248,250,252,0.05), 0 12px 32px -16px rgba(0,0,0,0.65)",
        elevate:
          "0 1px 0 0 rgba(248,250,252,0.06), 0 24px 48px -20px rgba(0,0,0,0.65), 0 0 0 1px rgba(248,250,252,0.05)",
        "glow-signal": "0 0 0 1px rgba(16,185,129,0.28), 0 0 32px -8px rgba(16,185,129,0.4)",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.25 },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(220%)" },
        },
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(14px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: 0.5, transform: "scale(0.94)" },
          "50%": { opacity: 0.85, transform: "scale(1.04)" },
        },
        "drift-slow": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(2%, 3%)" },
        },
      },
      animation: {
        blink: "blink 1.8s ease-in-out infinite",
        scanline: "scanline 5s linear infinite",
        "fade-up": "fade-up 0.6s ease-out both",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "drift-slow": "drift-slow 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
