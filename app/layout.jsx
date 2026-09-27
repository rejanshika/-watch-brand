import { Playfair_Display, Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

// World-class high-fashion luxury serif for titles & editorial headlines
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// Sleek geometric luxury sans for UI & body readability
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

// High-precision technical mono for calibres, telemetry, coordinates & serials
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "IST 1947 — Watches Inspired by the Way India Lives Time",
  description:
    "IST 1947 turns India's places, rituals, victories and everyday obsessions into watches. Explore Arka, Vanya and Vijay.",
  icons: {
    icon: [
      { url: "/logo-white.png", href: "/logo-white.png" },
      { url: "/icon.png", href: "/icon.png" }
    ],
    shortcut: "/logo-white.png",
    apple: "/logo-white.png",
  },
};

export const viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <link rel="icon" href="/logo-white.png" type="image/png" />
        <link rel="shortcut icon" href="/logo-white.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo-white.png" />
      </head>
      <body className="bg-ink text-chalk antialiased selection:bg-accent selection:text-white">
        <ScrollProgress />
        <SmoothScroll>
          <Nav />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
