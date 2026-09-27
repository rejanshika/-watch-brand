"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { nav, brand } from "@/lib/content";
import LiveISTBadge from "./LiveISTBadge";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        className={`mx-auto flex max-w-edge items-center justify-between rounded-full border px-4 py-3 backdrop-blur-md transition-colors duration-500 sm:px-6 sm:py-3.5 ${
          scrolled ? "border-white/10 bg-black/80 shadow-2xl" : "border-white/5 bg-black/40"
        }`}
      >
        {/* Left: logo + Live IST Ticking Complication */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2.5 pl-1">
            <img src="/logo-white.png" alt={brand.name} className="h-8 sm:h-9 w-auto" />
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
              <span className="text-[9px] text-slate">{l.index}</span>
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
            className="flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-black transition-transform hover:scale-[1.03]"
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
        <div className="mx-auto mt-2 max-w-edge rounded-2xl border border-white/10 bg-black/95 p-5 backdrop-blur-xl lg:hidden shadow-2xl">
          {nav.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-white/5 py-3.5 font-mono text-sm uppercase tracking-[0.18em] text-graphite last:border-0 hover:text-chalk"
            >
              {l.label}
              <span className="text-[10px] text-accent">{l.index}</span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
