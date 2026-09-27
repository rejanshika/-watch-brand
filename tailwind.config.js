/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Midnight Obsidian & Celestial Onyx surfaces
        ink: "#07080b",
        inkSoft: "#0e1017",
        inkCard: "#131620",
        black: "#040507",
        
        // Pure Silk Ivory & Crisp Alabaster light panels
        concrete: "#f4f6f9",
        paper: "#ffffff",
        
        // High-contrast, razor-sharp text colors
        chalk: "#ffffff",
        chalkSoft: "#f1f5f9",
        graphite: "#cbd5e1",
        slate: "#94a3b8",
        
        // Luminous Imperial Gold & Royal Azure accents
        accent: "#dfb15b",
        accentSoft: "#f3c77c",
        accentMuted: "#b88c3a",
        azure: "#3b82f6",
        azureGlow: "#60a5fa",
        indigo: "#1e293b",
        vermilion: "#ef4444",
        emerald: "#10b981",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-display)", "Playfair Display", "Georgia", "serif"],
        serif: ["var(--font-display)", "Playfair Display", "Georgia", "serif"],
        mono: ["var(--font-mono)", "Space Grotesk", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        luxury: "0.24em",
        widestLuxury: "0.36em",
      },
      maxWidth: {
        edge: "1600px",
      },
    },
  },
  plugins: [],
};
