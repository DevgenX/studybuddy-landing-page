import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050b14",
        surface: "#0d1829",
        surface2: "#112035",
        faint: "#19263d",
        accent: "#22d3ee",
        accent2: "#dbeafe",
        accent3: "#fbbf24",
        muted: "#97a9c2",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      animation: {
        pulse2: "pulse2 2s ease-in-out infinite",
      },
      keyframes: {
        pulse2: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.82)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
