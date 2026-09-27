"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { nav, brand } from "@/lib/content";
import LiveISTBadge from "./LiveISTBadge";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      {/* Top Protective Gradient Scrim on scroll to prevent text clash */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#ffffff]/95 via-[#ffffff]/70 to-transparent transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="relative mx-auto max-w-edge px-3 pt-3 sm:px-6 sm:pt-4">
        <nav
          className={`flex items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 sm:px-6 sm:py-3 ${
            scrolled
              ? "border-black/10 bg-[#ffffff]/95 shadow-[0_10px_30px_-12px_rgba(17,17,17,0.18)] backdrop-blur-xl"
              : "border-black/10 bg-[#ffffff]/75 backdrop-blur-md"
          }`}
        >
          {/* Left: logo + Live IST Ticking Complication */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2.5 pl-1">
              <img src="/brand/ist-logo-black.svg" alt={brand.name} className="h-8 sm:h-9 w-auto" />
            </Link>
            <div className="hidden xl:block">
              <LiveISTBadge compact={true} />
            </div>
          </div>

          {/* Center: links */}
          <div className="hidden items-center gap-7 lg:flex">
            {nav.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-graphite transition-colors hover:text-chalk"
              >
                <span className="text-[9px] text-accent">{l.index}</span>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right: CTA + menu */}
          <div className="flex items-center gap-3">
            <div className="block xl:hidden">
              <LiveISTBadge compact={true} />
            </div>
            <Link
              href={nav.cta.href}
              className="flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-transform hover:scale-[1.03] shadow-md"
            >
              <span className="text-sm leading-none">+</span>
              {nav.cta.label}
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="flex h-9 w-9 items-center justify-center rounded-full text-chalk lg:hidden"
            >
              <span className="flex flex-col gap-1">
                <span className="block h-px w-4 bg-current" />
                <span className="block h-px w-4 bg-current" />
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile drawer */}
        {open && (
          <div className="mt-2 rounded-2xl border border-black/10 bg-[#ffffff]/98 p-5 backdrop-blur-2xl lg:hidden shadow-[0_20px_44px_-20px_rgba(17,17,17,0.22)]">
            {nav.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-black/5 py-3.5 font-mono text-sm uppercase tracking-[0.18em] text-graphite last:border-0 hover:text-chalk"
              >
                {l.label}
                <span className="text-[10px] text-accent">{l.index}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
