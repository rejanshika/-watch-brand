"use client";

import { useState } from "react";
import { enquire } from "@/lib/content";

export default function Enquire() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});
  const [done, setDone] = useState(false);

  const current = enquire.steps[step];
  const isLast = step === enquire.steps.length - 1;

  const update = (name, value) => setData((d) => ({ ...d, [name]: value }));

  const canAdvance = current.fields
    .filter((f) => f.required)
    .every((f) => (data[f.name] || "").trim().length > 0);

  const next = () => {
    if (!canAdvance) return;
    if (isLast) {
      setDone(true);
      return;
    }
    setStep((s) => s + 1);
  };

  return (
    <section id="enquire" className="bg-black text-chalk border-t border-white/10">
      <div className="mx-auto max-w-3xl px-6 py-24 sm:px-10 md:py-32">
        <span className="eyebrow text-accent">{enquire.eyebrow}</span>
        <h2 className="display mt-3 text-4xl sm:text-6xl text-chalk">
          Be First When <span className="display-italic text-accent">We Launch</span>
        </h2>

        {done ? (
          <div className="elev mt-12 rounded-3xl border border-accent/40 bg-inkCard p-10 text-center">
            <span className="mono text-xs uppercase tracking-widest text-accent font-semibold">Registration Confirmed</span>
            <p className="display mt-3 text-3xl sm:text-4xl text-chalk">You're on the list.</p>
            <p className="mt-4 font-sans text-sm text-graphite max-w-md mx-auto">
              Thank you — our concierge team will reach out with your numbered allocation window the moment your collection launches.
            </p>
          </div>
        ) : (
          <div className="mt-12">
            {/* Step indicator */}
            <div className="mb-10 flex items-center gap-3">
              {enquire.steps.map((s, i) => (
                <div key={s.id} className="flex flex-1 items-center gap-3">
                  <button
                    type="button"
                    onClick={() => i < step && setStep(i)}
                    className={`flex items-center gap-2 text-xs uppercase tracking-[0.18em] transition-colors ${
                      i === step ? "text-chalk font-semibold" : i < step ? "text-graphite hover:text-chalk" : "text-slate"
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full border text-xs font-mono font-bold transition-all ${
                        i <= step ? "border-accent bg-accent text-black shadow-[0_0_15px_rgba(223,177,91,0.4)]" : "border-white/20 bg-white/5"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span className="hidden sm:inline font-mono">{s.name}</span>
                  </button>
                  {i < enquire.steps.length - 1 && <span className="h-px flex-1 bg-white/10" />}
                </div>
              ))}
            </div>

            {/* Fields */}
            <div className="grid gap-6 sm:grid-cols-2">
              {current.fields.map((f) => (
                <label
                  key={f.name}
                  className={`block ${f.type === "text" && current.fields.length % 2 ? "sm:col-span-2" : ""}`}
                >
                  <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-graphite">
                    {f.label}
                    {f.required && <span className="text-accent"> *</span>}
                  </span>
                  <input
                    type={f.type}
                    value={data[f.name] || ""}
                    placeholder={f.placeholder}
                    onChange={(e) => update(f.name, e.target.value)}
                    className="w-full border-b border-white/20 bg-transparent py-3 font-sans text-base text-chalk placeholder:text-slate/60 focus:border-accent focus:outline-none transition-colors"
                  />
                </label>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-12 flex items-center gap-4">
              {step > 0 && (
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className="font-mono text-xs uppercase tracking-[0.18em] text-graphite hover:text-chalk transition-colors"
                >
                  ← Previous Step
                </button>
              )}
              <button
                type="button"
                onClick={next}
                disabled={!canAdvance}
                className="elev group ml-auto flex w-full items-center justify-between rounded-2xl border border-white/15 bg-inkCard px-8 py-5 text-left transition-all duration-300 hover:border-accent hover:bg-accent hover:text-black disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto sm:min-w-[280px]"
              >
                <span className="display text-2xl font-bold">{isLast ? "Confirm Registration" : "Continue"}</span>
                <span className="text-xl text-accent transition-transform group-hover:translate-x-1.5 group-hover:text-black">→</span>
              </button>
            </div>

            <p className="mt-8 font-sans text-xs leading-relaxed text-slate">
              <span className="font-mono uppercase tracking-widest text-graphite">Atelier Privacy Guarantee</span>
              <br />
              Your confidential information is never shared. Used exclusively for priority collection notifications.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
