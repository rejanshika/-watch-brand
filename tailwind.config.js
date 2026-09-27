/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bright, paper-white surfaces (mirrors ist1947.com)
        ink: "#ffffff",        // page background
        inkSoft: "#f7f6f3",    // warm off-white alternating band
        inkCard: "#ffffff",    // card surface
        black: "#111111",      // true dark — footer & dark blocks only

        concrete: "#f4f6f9",
        paper: "#ffffff",

        // Ink-on-paper text ramp
        chalk: "#000000",      // primary text
        chalkSoft: "#1c1c1c",
        graphite: "#4a4a4a",   // body copy
        slate: "#7a7a7a",      // captions / meta

        // Brand accents — bright, drawn from the collections
        accent: "#2c3d8f",     // Arka dial indigo (primary accent)
        accentSoft: "#4358bd",
        accentMuted: "#1d2a66",
        arka: "#7c6ad8",       // Arka sunset lavender
        arkaWarm: "#c2643a",   // Konark copper
        vanya: "#1f7a52",      // Vanya wild green
        vijay: "#1878d4",      // Vijay bright blue
        azure: "#1878d4",
        azureGlow: "#4ea3f0",
        indigo: "#1d2a66",
        vermilion: "#e0452f",
        emerald: "#1f7a52",
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
