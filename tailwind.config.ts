import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0A0A0A",
        bone: "#E8E0D0",
        arterial: "#CC1B1B",
        crimson: "#1A0000",
        ash: "#2A2A2A",
        "bone-dim": "#8A8278",
      },
      fontFamily: {
        display: ["var(--font-anton)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      letterSpacing: {
        "ultra": "0.3em",
        "extreme": "0.5em",
      },
      animation: {
        "flicker": "flicker 8s infinite",
        "glitch": "glitch 4s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 1.5s ease forwards",
        "scan": "scan 6s linear infinite",
      },
      keyframes: {
        flicker: {
          "0%, 96%, 100%": { opacity: "1" },
          "97%": { opacity: "0.85" },
          "98%": { opacity: "1" },
          "99%": { opacity: "0.6" },
        },
        glitch: {
          "0%, 90%, 100%": { transform: "translate(0, 0)", filter: "none" },
          "91%": { transform: "translate(-2px, 0)", filter: "hue-rotate(180deg)" },
          "92%": { transform: "translate(2px, 0)", filter: "none" },
          "93%": { transform: "translate(-1px, 1px)", filter: "hue-rotate(90deg)" },
          "94%": { transform: "translate(0, 0)", filter: "none" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
