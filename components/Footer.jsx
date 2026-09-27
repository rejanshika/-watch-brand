"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { footer } from "@/lib/content";
import WatchDial from "./WatchDial";

export default function Footer() {
  const [quote, setQuote] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setQuote((q) => (q + 1) % footer.quotes.length),
      4200
    );
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-edge px-6 py-20 sm:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Wordmark, motto, rotating quip */}
          <div className="lg:col-span-4">
            <img
              src="/brand/ist-logo-white.svg"
              alt={footer.wordmark}
              className="h-14 w-auto"
            />
            <p className="mt-6 font-sans text-sm text-white/80">{footer.motto}</p>
            <p className="font-sans text-sm text-white/55">{footer.mottoSub}</p>
            <p className="eyebrow mt-1 text-[10px] text-white/35">
              {footer.mottoNote}
            </p>

            <div className="mt-8 h-px w-16 bg-white/20" />

            {/* Rotating quips — one at a time, cross-faded */}
            <div className="relative mt-6 h-16">
              {footer.quotes.map((q, i) => (
                <div
                  key={q.text}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    i === quote ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden={i !== quote}
                >
                  <blockquote className="display text-xl text-white">
                    {q.text}
                  </blockquote>
                  <cite className="eyebrow mt-1.5 block text-[10px] not-italic text-white/45">
                    {q.cite}
                  </cite>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-5">
            {footer.columns.map((col) => (
              <div key={col.heading}>
                <p className="eyebrow mb-4 text-[10px] text-white/45">
                  {col.heading}
                </p>
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item}>
                      <Link
                        href="/collections"
                        className="font-sans text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* The live IST dial */}
          <div className="flex justify-center lg:col-span-3 lg:justify-end">
            <WatchDial size={240} />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>{footer.note}</span>
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
            <span className="font-mono uppercase tracking-[0.22em] text-white/70">
              Designed &amp; Assembled in India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
