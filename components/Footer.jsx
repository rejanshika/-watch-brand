import Link from "next/link";
import { footer } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050608] text-chalk">
      <div className="mx-auto max-w-edge px-6 py-20 sm:px-10">
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          {/* Wordmark + small film */}
          <div className="max-w-sm">
            <img src="/logo-white.png" alt={footer.wordmark} className="h-8 w-auto" />
            <p className="display mt-6 text-3xl sm:text-4xl text-chalk leading-tight">
              {footer.tagline}
            </p>
            <div className="elev mt-8 w-48 overflow-hidden rounded-2xl border border-white/15 bg-black">
              <video
                className="block h-auto w-full"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/IST1947_watch_film_1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 sm:gap-14">
            {footer.columns.map((col) => (
              <div key={col.heading}>
                <p className="eyebrow mb-4 text-accent">{col.heading}</p>
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#top"
                        className="font-sans text-sm text-graphite transition-colors hover:text-chalk"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-slate sm:flex-row sm:items-center sm:justify-between">
          <span>{footer.note}</span>
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-mono uppercase tracking-[0.22em] text-chalk">Designed & Assembled in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
