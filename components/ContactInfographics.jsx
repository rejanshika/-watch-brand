"use client";

import { useState } from "react";

export default function ContactInfographics() {
  const [activeFaqCategory, setActiveFaqCategory] = useState("allocation");
  const [activeLifecycleStep, setActiveLifecycleStep] = useState(0);

  const transitMetrics = [
    { label: "Transit Insurance", value: "100% Fully Insured", sub: "Underwritten door-to-door" },
    { label: "Nationwide Reach", value: "19,000+ PIN Codes", sub: "All 28 States & 8 UTs" },
    { label: "Dispatch Velocity", value: "24–48 Hours", sub: "White-glove priority express" },
    { label: "Security Protocol", value: "Tamper-Evident Seal", sub: "Individually serial-stamped" },
  ];

  const lifecycleStages = [
    {
      num: "01",
      phase: "Activation",
      title: "Digital Passport & Serial Registration",
      timeframe: "Day 01 — At Delivery",
      desc: "Tap your NFC-enabled warranty card with your smartphone to immediately register your watch's unique serial number on the IST 1947 digital ledger.",
      points: [
        "Instant certificate of horological authenticity",
        "Ownership certificate tied to your contact profile",
        "Real-time countdown of your 2-year warranty window",
      ],
    },
    {
      num: "02",
      phase: "Mid-Term",
      title: "12-Month Rate Regulation & Demag",
      timeframe: "Month 12 — Atelier Care",
      desc: "Complimentary atelier health check. Our watchmakers inspect the movement balance, adjust isochronal rate accuracy, and demagnetize the hairspring.",
      points: [
        "Precision multi-position timegrapher calibration",
        "Cleanse and demagnetization of escapement",
        "Insured two-way courier collection and return",
      ],
    },
    {
      num: "03",
      phase: "Comprehensive",
      title: "24-Month Gasket Re-Seal & Pressure Test",
      timeframe: "Month 24 — Full Overhaul",
      desc: "Complete inspection of water-resistant synthetic seals, crown gasket replacement, and dry/wet pressure testing up to 10 ATM rating.",
      points: [
        "Replacement of all caseback and crown gaskets",
        "Hydrostatic pressure chamber certification",
        "Comprehensive mechanical lubrication refresh",
      ],
    },
    {
      num: "04",
      phase: "Legacy",
      title: "Lifetime Provenance & Archive",
      timeframe: "Permanent — Lifetime",
      desc: "Your timepiece permanently remains registered in the IST 1947 Atelier Archive, preserving its collector value and provenance for future generations.",
      points: [
        "Full servicing and maintenance history record",
        "Priority allocation access for future limited editions",
        "Lifetime collector support directly from founders",
      ],
    },
  ];

  const conciergeSteps = [
    {
      step: "01",
      title: "Interest Registration",
      detail: "Select your desired collection (Arka, Vanya, or Vijay) and register your contact preferences.",
    },
    {
      step: "02",
      title: "Numbered Allocation",
      detail: "Our concierge team confirms availability of your individually numbered serial piece (#001–#100).",
    },
    {
      step: "03",
      title: "Custom Sizing & Engraving",
      detail: "Personalize your leather strap fit and confirm complimentary custom caseback initials.",
    },
    {
      step: "04",
      title: "Timegrapher QC Audit",
      detail: "Master watchmakers perform 48-hour chronometric rate testing and water resistance verification.",
    },
    {
      step: "05",
      title: "Armored Vault Dispatch",
      detail: "Sealed in tamper-evident velvet packaging and shipped via 100% insured priority transit.",
    },
  ];

  const faqs = {
    allocation: [
      {
        q: "How does the numbered edition allocation work?",
        a: "Every IST 1947 watch is individually serialized on the caseback. When you register your interest, pieces are reserved chronologically. For the limited Vijay collection (strictly 100 pieces), our concierge directly assists you in securing specific available serials.",
      },
      {
        q: "What is the expected launch date for each collection?",
        a: "Arka launches on 30 September; Vanya launches on 15 October; Vijay launches on 30 October. Registered collectors receive 24-hour priority early-access before general release.",
      },
      {
        q: "Can I pre-order multiple timepieces?",
        a: "Yes. In the enquiry form, indicate your desired collections and pieces. A concierge representative will coordinate multi-piece allocations in a single bespoke dispatch.",
      },
    ],
    technical: [
      {
        q: "What movement powers IST 1947 watches?",
        a: "All collections are powered by the robust, self-winding Miyota 82S7 Automatic movement featuring 21 synthetic ruby jewel bearings, a 42-hour power reserve, 21,600 VPH beat rate, and a custom Ashoka-Chakra 24-spoke small seconds rotor complication.",
      },
      {
        q: "What crystal and glass is used on the dial?",
        a: "Every timepiece is equipped with a domed, scratch-resistant sapphire crystal (9 Mohs mineral hardness) treated with an internal anti-reflective coating to ensure pristine legibility without glare.",
      },
      {
        q: "Are the watches water resistant for swimming?",
        a: "Arka is rated at 5 ATM (50m / 165ft), suitable for everyday wear and rain. Vanya and Vijay are rated at 10 ATM (100m / 330ft), suitable for swimming and adventure.",
      },
    ],
    warranty: [
      {
        q: "What does the 2-Year Digital Warranty cover?",
        a: "The warranty covers all mechanical movements, manufacturing defects, dial components, and timekeeping accuracy. You can claim service anytime via your NFC digital warranty card.",
      },
      {
        q: "How do I service or regulate my watch?",
        a: "Simply contact hello@ist1947.com or message our concierge via WhatsApp. We arrange insured complimentary pickup from your address anywhere in India, service the piece at our atelier, and return it within 7 business days.",
      },
    ],
    shipping: [
      {
        q: "Is shipping free and insured across India?",
        a: "Yes. Complimentary, 100% fully insured courier transit is provided for every order across 19,000+ PIN codes in India. If any transit incident occurs, your piece is completely protected.",
      },
      {
        q: "Do you ship internationally?",
        a: "We currently deliver across all 28 states and Union Territories in India. For international collector inquiries (UAE, UK, USA, Singapore), please contact our concierge directly via email.",
      },
    ],
  };

  return (
    <div className="bg-ink text-chalk">
      {/* ─── INFOGRAPHIC 01: PAN-INDIA INSURED TRANSIT ECOSYSTEM ─── */}
      <section className="border-t border-black/10 bg-inkSoft py-24 sm:py-32">
        <div className="mx-auto max-w-edge px-6 sm:px-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="eyebrow text-accent">Security & Logistics Protocol</span>
            <h2 className="display text-4xl sm:text-5xl lg:text-6xl text-chalk">
              Nationwide <span className="display-italic text-accent">Insured Transit</span>
            </h2>
            <p className="font-sans text-base leading-relaxed text-graphite">
              Every IST 1947 timepiece travels inside a tamper-evident, sealed security vault box with complete door-to-door insurance coverage across India.
            </p>
          </div>

          {/* 4 Big Metric Telemetry Cards */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {transitMetrics.map((m, idx) => (
              <div
                key={m.label}
                className="elev group rounded-3xl border border-black/10 bg-white p-6 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="mono text-xs uppercase tracking-widest text-accent font-semibold">0{idx + 1} · {m.label}</span>
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </div>
                <span className="display mt-4 block text-2xl sm:text-3xl text-chalk group-hover:text-accent transition-colors font-bold">
                  {m.value}
                </span>
                <p className="mt-2 font-sans text-xs text-graphite">{m.sub}</p>
              </div>
            ))}
          </div>

          {/* Visual Security & Unboxing Protocol Flow */}
          <div className="mt-12 elev rounded-3xl border border-black/10 bg-white p-8 sm:p-10 shadow-sm">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center border-b border-black/10 pb-6">
              <div>
                <span className="eyebrow text-accent">Tamper-Proof Unboxing Standard</span>
                <h3 className="display mt-1 text-2xl sm:text-3xl text-chalk">Armored Packaging Architecture</h3>
              </div>
              <span className="mono inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-4 py-1.5 text-xs text-emerald font-semibold">
                <span className="h-2 w-2 rounded-full bg-emerald animate-pulse" />
                Active Security Protocol
              </span>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/5 bg-inkSoft p-5">
                <span className="mono text-xs text-accent font-semibold">Stage A</span>
                <h4 className="display mt-2 text-lg text-chalk">Hardened Outer Vault</h4>
                <p className="mt-2 font-sans text-xs leading-relaxed text-graphite">
                  Reinforced impact-resistant container lined with moisture-barrier and shock-absorbing foam.
                </p>
              </div>
              <div className="rounded-2xl border border-black/5 bg-inkSoft p-5">
                <span className="mono text-xs text-accent font-semibold">Stage B</span>
                <h4 className="display mt-2 text-lg text-chalk">Serialized Security Seal</h4>
                <p className="mt-2 font-sans text-xs leading-relaxed text-graphite">
                  Holographic, tamper-evident tape that reveals void patterns if opened before client receipt.
                </p>
              </div>
              <div className="rounded-2xl border border-black/5 bg-inkSoft p-5">
                <span className="mono text-xs text-accent font-semibold">Stage C</span>
                <h4 className="display mt-2 text-lg text-chalk">Presentation Velvet Box</h4>
                <p className="mt-2 font-sans text-xs leading-relaxed text-graphite">
                  Hand-crafted presentation box with watch pillow, manual, microfiber cloth, and NFC warranty card.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INFOGRAPHIC 02: 2-YEAR DIGITAL WARRANTY LIFECYCLE ─── */}
      <section className="border-t border-black/10 bg-ink py-24 sm:py-32">
        <div className="mx-auto max-w-edge px-6 sm:px-10">
          <div className="max-w-3xl space-y-2">
            <span className="eyebrow text-accent">Atelier Guarantee & Care</span>
            <h2 className="display text-4xl sm:text-5xl lg:text-6xl text-chalk">
              2-Year Digital Warranty <br />
              <span className="display-italic text-accent">& Service Lifecycle</span>
            </h2>
            <p className="font-sans text-base leading-relaxed text-graphite">
              Your investment is protected by a 24-month comprehensive mechanical guarantee, backed by lifetime archive provenance.
            </p>
          </div>

          {/* Interactive Lifecycle Stages */}
          <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Step navigation */}
            <div className="lg:col-span-5 space-y-3">
              {lifecycleStages.map((stage, idx) => (
                <button
                  key={stage.num}
                  onClick={() => setActiveLifecycleStep(idx)}
                  className={`w-full rounded-2xl border p-5 text-left transition-all duration-300 ${
                    activeLifecycleStep === idx
                      ? "border-accent bg-white shadow-md"
                      : "border-black/10 bg-white/60 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="mono text-xs uppercase tracking-wider text-accent font-semibold">{stage.num} · {stage.phase}</span>
                    <span className="mono text-[10px] text-slate">{stage.timeframe.split("—")[0]}</span>
                  </div>
                  <h4 className="display mt-2 text-lg text-chalk font-semibold">{stage.title}</h4>
                </button>
              ))}
            </div>

            {/* Stage Deep Dive Showcase */}
            <div className="lg:col-span-7">
              <div className="elev rounded-3xl border border-black/10 bg-white p-8 sm:p-10 shadow-sm">
                <div className="flex items-center justify-between border-b border-black/10 pb-4">
                  <span className="eyebrow text-accent font-semibold">{lifecycleStages[activeLifecycleStep].phase} Phase</span>
                  <span className="mono text-xs font-bold text-chalk">{lifecycleStages[activeLifecycleStep].timeframe}</span>
                </div>

                <h3 className="display mt-4 text-3xl text-chalk">
                  {lifecycleStages[activeLifecycleStep].title}
                </h3>

                <p className="mt-4 font-sans text-sm leading-relaxed text-graphite">
                  {lifecycleStages[activeLifecycleStep].desc}
                </p>

                <div className="mt-6 space-y-3 border-t border-black/10 pt-4">
                  {lifecycleStages[activeLifecycleStep].points.map((pt, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent font-bold text-xs">✓</span>
                      <span className="font-sans text-xs text-graphite">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INFOGRAPHIC 03: CONCIERGE ALLOCATION WORKFLOW ─── */}
      <section className="border-t border-black/10 bg-inkSoft py-24 sm:py-32">
        <div className="mx-auto max-w-edge px-6 sm:px-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="eyebrow text-accent">Collector Experience</span>
            <h2 className="display text-4xl sm:text-5xl text-chalk">
              Bespoke Allocation Flow
            </h2>
            <p className="font-sans text-sm text-graphite">
              From your initial enquiry to unboxing your serialized timepiece.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {conciergeSteps.map((c) => (
              <div
                key={c.step}
                className="elev rounded-2xl border border-black/10 bg-white p-6 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <span className="mono text-2xl font-bold text-accent">{c.step}</span>
                  <h4 className="display mt-4 text-lg text-chalk">{c.title}</h4>
                  <p className="mt-2 font-sans text-xs leading-relaxed text-graphite">{c.detail}</p>
                </div>
                <div className="mt-6 border-t border-black/10 pt-3">
                  <span className="mono text-[10px] text-slate">Stage {c.step} / 05</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INFOGRAPHIC 04: INTERACTIVE CONCIERGE FAQ MATRIX ─── */}
      <section className="border-t border-black/10 bg-ink py-24 sm:py-32">
        <div className="mx-auto max-w-edge px-6 sm:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="eyebrow text-accent">Knowledge Base</span>
              <h2 className="display mt-3 text-4xl sm:text-5xl text-chalk">
                Concierge FAQ Matrix
              </h2>
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "allocation", label: "Allocation & Launch" },
                { id: "technical", label: "Calibre & Movement" },
                { id: "warranty", label: "2-Year Warranty" },
                { id: "shipping", label: "Insured Shipping" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFaqCategory(tab.id)}
                  className={`rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                    activeFaqCategory === tab.id
                      ? "bg-accent text-white font-semibold shadow-sm"
                      : "border border-black/10 bg-white/70 text-graphite hover:text-chalk"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* FAQs list */}
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {(faqs[activeFaqCategory] || []).map((item, idx) => (
              <div
                key={idx}
                className="elev rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <span className="mono text-xs font-bold text-accent">Q:</span>
                  <h4 className="font-sans text-base font-semibold text-chalk">{item.q}</h4>
                </div>
                <div className="mt-4 flex items-start gap-3 border-t border-black/10 pt-4">
                  <span className="mono text-xs font-bold text-slate">A:</span>
                  <p className="font-sans text-sm leading-relaxed text-graphite">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
