"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const ref = useRef(null);

  useEffect(() => {
    const el = document.documentElement;
    // Cache the scrollable distance. Reading scrollHeight forces a synchronous
    // layout of the whole document, so it must never happen inside the scroll
    // handler — a ResizeObserver recomputes it only when the page really grows.
    let max = el.scrollHeight - el.clientHeight;
    let ticking = false;

    const paint = () => {
      ticking = false;
      const p = max > 0 ? el.scrollTop / max : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
    };

    // Coalesce to one paint per frame: Lenis emits scroll far faster than that.
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(paint);
    };

    const measure = () => {
      max = el.scrollHeight - el.clientHeight;
      paint();
    };

    const ro = new ResizeObserver(measure);
    ro.observe(document.body);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    measure();

    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left will-change-transform"
      style={{
        transform: "scaleX(0)",
        background: "linear-gradient(90deg,#7c6ad8,#4358bd,#1d2a66)",
      }}
    />
  );
}
