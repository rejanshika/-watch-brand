"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { hero } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export default function Hero() {
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const split = SplitText.create(".hero-title", { type: "chars", aria: "auto" });

        const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.15 });
        tl.from(".hero-watch", { scale: 1.14, opacity: 0, duration: 1.7, ease: "power2.out" })
          .from(".hero-glow", { opacity: 0, duration: 1.6 }, 0)
          .from(".hero-eyebrow", { opacity: 0, y: 12, duration: 0.7 }, "-=1.3")
          .from(
            split.chars,
            { yPercent: 120, opacity: 0, rotateX: -60, stagger: 0.05, duration: 0.9, ease: "power4.out" },
            "-=1.0"
          )
          .from(".hero-tag", { y: 20, opacity: 0, duration: 0.8 }, "-=0.5")
          .from(".hero-scroll", { opacity: 0, y: 10, duration: 0.6 }, "-=0.4")
          .from(".hero-corner", { opacity: 0, y: 10, duration: 0.6, stagger: 0.1 }, "-=0.5");

        // gentle continuous float
        gsap.to(".hero-watch", {
          y: -14,
          duration: 4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        // scroll parallax
        gsap.to(".hero-watch", {
          yPercent: 18,
          scale: 1.05,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to(".hero-copy", {
          yPercent: -30,
          opacity: 0.2,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });

        // pointer parallax for depth
        const px = gsap.quickTo(".hero-parallax", "xPercent", { duration: 0.9, ease: "power3" });
        const py = gsap.quickTo(".hero-parallax", "yPercent", { duration: 0.9, ease: "power3" });
        const onMove = (e) => {
          const x = e.clientX / window.innerWidth - 0.5;
          const y = e.clientY / window.innerHeight - 0.5;
          px(x * -3);
          py(y * -3);
        };
        window.addEventListener("mousemove", onMove);

        return () => {
          window.removeEventListener("mousemove", onMove);
          split.revert();
        };
      });
    },
    { scope: root }
  );

  return (
    <section
      id="top"
      ref={root}
      className="relative flex h-[100svh] min-h-[660px] w-full items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#cfd0ee_0%,#e4d7ea_38%,#f6dfd0_68%,#fdf3e7_100%)]"
    >
      {/* the Arka sunset plate, full bleed and bright */}
      <div className="hero-parallax pointer-events-none absolute inset-0 scale-105">
        <img
          src={hero.image}
          alt="The IST 1947 Arka collection against a Konark sunset"
          className="hero-watch absolute inset-0 h-full w-full object-cover"
        />
      </div>
      {/* legibility scrims — light, so the page stays bright */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_44%,rgba(255,255,255,0.86),rgba(255,255,255,0.35)_55%,transparent_78%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/85 via-white/15 to-white/90" />
      <div className="hero-glow pointer-events-none absolute left-1/2 top-[46%] h-[46vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50 blur-[130px]" />

      {/* copy — single centered block */}
      <div className="hero-copy relative z-10 flex flex-col items-center px-6 text-center">
        <p className="hero-eyebrow eyebrow mb-5 text-accentMuted tracking-[0.28em]">
          Advanced Horology · Made in India
        </p>
        <h1
          className="hero-title display text-[17vw] leading-none text-[#3d1f14] sm:text-[13vw] lg:text-[10vw]"
          style={{ perspective: "600px" }}
        >
          {hero.headline}
        </h1>
        <p className="hero-tag mt-6 max-w-md font-sans text-base leading-relaxed text-[#5a3a2c] sm:text-lg">
          {hero.tagline}
        </p>
      </div>

      {/* scroll cue — anchored near the bottom */}
      <a
        href="#experience"
        className="hero-scroll absolute bottom-24 left-1/2 z-10 -translate-x-1/2"
        aria-label="Scroll to explore"
      >
        <span className="group flex h-12 w-12 items-center justify-center rounded-full border border-accent/50 bg-white/70 backdrop-blur-md transition-all hover:bg-accent hover:border-accent">
          <span className="animate-bounce text-accent transition-colors group-hover:text-white">
            ↓
          </span>
        </span>
      </a>

      {/* corner labels */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex justify-between px-6 sm:px-10">
        <span className="hero-corner eyebrow rounded-full border border-black/10 bg-white/70 px-3.5 py-1.5 text-chalkSoft backdrop-blur-sm">
          {hero.corners[0]}
        </span>
        <span className="hero-corner eyebrow hidden rounded-full border border-black/10 bg-white/70 px-3.5 py-1.5 text-chalkSoft backdrop-blur-sm sm:block">
          {hero.corners[1]}
        </span>
        <span className="hero-corner eyebrow rounded-full border border-black/10 bg-white/70 px-3.5 py-1.5 text-chalkSoft backdrop-blur-sm">
          {hero.corners[2]}
        </span>
      </div>
    </section>
  );
}
