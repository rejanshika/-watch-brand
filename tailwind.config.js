/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm luxury paper surfaces (balanced light, never piercing stark white)
        ink: "#faf8f5",        // warm luxury ivory page background
        inkSoft: "#f2ede4",    // warm subtle champagne/oatmeal band
        inkCard: "#ffffff",    // crisp card surface
        black: "#111111",      // true dark — footer & dark accents only

        concrete: "#f0ebe1",
        paper: "#faf8f5",

        // Crisp ink-on-paper text ramp
        chalk: "#141414",      // primary text
        chalkSoft: "#222222",
        graphite: "#4d4a45",   // body copy
        slate: "#78746c",      // captions / meta

        // Brand accents — rich and authentic to collections
        accent: "#2c3d8f",     // Arka dial indigo (primary accent)
        accentSoft: "#4358bd",
        accentMuted: "#1d2a66",
        gold: "#c59a3f",       // Warm Konark solar gold
        goldLight: "#dfb863",
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
