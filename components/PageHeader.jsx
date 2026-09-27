import Motif from "./Motif";

export default function PageHeader({ eyebrow, title, intro, motif, artLabel }) {
  return (
    <header className="relative overflow-hidden bg-ink text-chalk border-b border-black/10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,#f1ece3,#faf8f5_75%)]" />

      <div
        className={`relative mx-auto max-w-edge px-6 pb-20 pt-36 sm:px-10 sm:pt-44 ${
          motif ? "grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]" : ""
        }`}
      >
        <div>
          <span className="eyebrow text-accent">{eyebrow}</span>
          <h1 className="display mt-4 text-5xl sm:text-7xl lg:text-8xl text-chalk leading-none">{title}</h1>
          {intro && (
            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-graphite sm:text-lg">
              {intro}
            </p>
          )}
        </div>

        {motif && (
          <div className="floaty relative mx-auto aspect-square w-full max-w-[400px]">
            {/* framed artwork card with warm luxury tone */}
            <div className="elev absolute inset-0 overflow-hidden rounded-[2.5rem] border border-black/10 bg-gradient-to-b from-[#f7f4ed] to-[#ece5d8] shadow-sm">
              {/* glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
              <Motif
                variant={motif}
                className="absolute left-1/2 top-1/2 h-[86%] w-[86%] -translate-x-1/2 -translate-y-1/2 text-accent"
              />
              {artLabel && (
                <span className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.32em] text-accent font-semibold bg-white/80 px-3.5 py-1 rounded-full border border-black/10 shadow-sm">
                  {artLabel}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
