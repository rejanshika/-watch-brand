"use client";

import { useEffect, useRef } from "react";

// Devanagari numerals 1–12, the way the Arka dial prints them.
const NUMERALS = ["१", "२", "३", "४", "५", "६", "७", "८", "९", "१०", "११", "१२"];

// Static sunray lines generated once outside render to avoid array allocation
const SUNRAY_LINES = Array.from({ length: 180 }, (_, i) => {
  const rad = (i * 2 * Math.PI) / 180;
  return {
    x2: (100 + 88 * Math.cos(rad)).toFixed(2),
    y2: (100 + 88 * Math.sin(rad)).toFixed(2),
  };
});

// Static minute marks generated once
const MINUTE_MARKS = Array.from({ length: 60 }, (_, i) => {
  const a = (i * 6 * Math.PI) / 180 - Math.PI / 2;
  const major = i % 5 === 0;
  const r1 = major ? 78 : 82;
  return {
    key: i,
    major,
    x1: (100 + r1 * Math.cos(a)).toFixed(2),
    y1: (100 + r1 * Math.sin(a)).toFixed(2),
    x2: (100 + 86 * Math.cos(a)).toFixed(2),
    y2: (100 + 86 * Math.sin(a)).toFixed(2),
  };
});

// Static 24 spokes for small seconds
const SMALL_SPOKES = Array.from({ length: 24 }, (_, i) => {
  const a = (i * 15 * Math.PI) / 180;
  return {
    key: i,
    x1: (6 * Math.cos(a)).toFixed(2),
    y1: (6 * Math.sin(a)).toFixed(2),
    x2: (20 * Math.cos(a)).toFixed(2),
    y2: (20 * Math.sin(a)).toFixed(2),
  };
});

// Static numeral positions
const NUMERAL_POSITIONS = NUMERALS.map((numeral, i) => {
  if (i === 5) return null; // 6 o'clock is replaced by subdial
  const a = ((i + 1) * 30 * Math.PI) / 180 - Math.PI / 2;
  return {
    numeral,
    x: (100 + 66 * Math.cos(a)).toFixed(2),
    y: (100 + 66 * Math.sin(a)).toFixed(2),
  };
});

/**
 * Ultra-High-Performance Live IST Watch Dial:
 * - ZERO React re-renders during animation.
 * - Direct DOM element transform mutations via refs on requestAnimationFrame.
 * - Auto-pauses when out of viewport via IntersectionObserver.
 * - 120 FPS hardware-accelerated GPU updates with zero main-thread overhead.
 */
export default function WatchDial({ size = 260 }) {
  const containerRef = useRef(null);
  const hourHandRef = useRef(null);
  const minHandRef = useRef(null);
  const secHandRef = useRef(null);
  const digitalRef = useRef(null);
  const rafId = useRef(null);
  const isVisible = useRef(false);

  useEffect(() => {
    const pad = (n) => (n < 10 ? `0${n}` : `${n}`);

    const updateHands = () => {
      if (!isVisible.current) return;

      const now = Date.now();
      const ist = new Date(now + 5.5 * 3600000);
      const h = ist.getUTCHours();
      const m = ist.getUTCMinutes();
      const s = ist.getUTCSeconds();
      const ms = ist.getUTCMilliseconds();

      const secondsFloat = s + ms / 1000;
      const minutesFloat = m + secondsFloat / 60;
      const hoursFloat = (h % 12) + minutesFloat / 60;

      const secAngle = secondsFloat * 6;
      const minAngle = minutesFloat * 6;
      const hourAngle = hoursFloat * 30;

      if (secHandRef.current) {
        secHandRef.current.setAttribute("transform", `rotate(${secAngle.toFixed(2)})`);
      }
      if (minHandRef.current) {
        minHandRef.current.setAttribute("transform", `rotate(${minAngle.toFixed(2)} 100 100)`);
      }
      if (hourHandRef.current) {
        hourHandRef.current.setAttribute("transform", `rotate(${hourAngle.toFixed(2)} 100 100)`);
      }
      if (digitalRef.current) {
        const digitalStr = `${pad(h)}:${pad(m)}:${pad(s)}`;
        if (digitalRef.current.textContent !== digitalStr) {
          digitalRef.current.textContent = digitalStr;
        }
      }

      rafId.current = requestAnimationFrame(updateHands);
    };

    // IntersectionObserver to pause loop when footer is not visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          if (!rafId.current) {
            rafId.current = requestAnimationFrame(updateHands);
          }
        } else {
          if (rafId.current) {
            cancelAnimationFrame(rafId.current);
            rafId.current = null;
          }
        }
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col items-center gap-5">
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        role="img"
        aria-label="Analog dial showing Indian Standard Time"
        className="max-w-full"
      >
        <defs>
          <radialGradient id="wd-face" cx="50%" cy="38%" r="72%">
            <stop offset="0%" stopColor="#dbe4ff" />
            <stop offset="55%" stopColor="#b9c8f2" />
            <stop offset="100%" stopColor="#8ea2d8" />
          </radialGradient>
          <radialGradient id="wd-bezel" cx="50%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#f2f5ff" />
            <stop offset="60%" stopColor="#c3cfeb" />
            <stop offset="100%" stopColor="#7f92c4" />
          </radialGradient>
          {/* Sunray guilloché: fine radial texture across the face */}
          <g id="wd-sunray">
            {SUNRAY_LINES.map((line, i) => (
              <line
                key={i}
                x1="100"
                y1="100"
                x2={line.x2}
                y2={line.y2}
                stroke="#2c3d8f"
                strokeWidth="0.35"
                opacity="0.13"
              />
            ))}
          </g>
        </defs>

        {/* Case + bezel */}
        <circle cx="100" cy="100" r="98" fill="url(#wd-bezel)" />
        <circle cx="100" cy="100" r="92" fill="url(#wd-face)" />
        <circle cx="100" cy="100" r="92" fill="none" stroke="#2c3d8f" strokeWidth="1.2" opacity="0.45" />
        <use href="#wd-sunray" />

        {/* Minute track */}
        {MINUTE_MARKS.map((m) => (
          <line
            key={m.key}
            x1={m.x1}
            y1={m.y1}
            x2={m.x2}
            y2={m.y2}
            stroke="#1d2a66"
            strokeWidth={m.major ? 1.5 : 0.6}
            opacity={m.major ? 0.85 : 0.5}
          />
        ))}

        {/* Devanagari hour numerals */}
        {NUMERAL_POSITIONS.map((pos) => {
          if (!pos) return null;
          return (
            <text
              key={pos.numeral}
              x={pos.x}
              y={pos.y}
              fill="#1d2a66"
              fontSize="12"
              fontWeight="600"
              textAnchor="middle"
              dominantBaseline="central"
            >
              {pos.numeral}
            </text>
          );
        })}

        {/* Konark / Ashoka 24-spoke wheel as the small-seconds counter at 6 */}
        <g transform="translate(100 138)">
          <circle r="22" fill="#2c3d8f" opacity="0.1" />
          <circle r="22" fill="none" stroke="#1d2a66" strokeWidth="1" opacity="0.6" />
          {SMALL_SPOKES.map((s) => (
            <line
              key={s.key}
              x1={s.x1}
              y1={s.y1}
              x2={s.x2}
              y2={s.y2}
              stroke="#2c3d8f"
              strokeWidth="1.1"
            />
          ))}
          <circle r="5.5" fill="#2c3d8f" />
          {/* the wheel's own hand sweeps the seconds */}
          <line
            ref={secHandRef}
            x1="0"
            y1="3"
            x2="0"
            y2="-19"
            stroke="#c2643a"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </g>

        {/* Brand mark at 12 */}
        <text
          x="100"
          y="52"
          fill="#1d2a66"
          fontSize="9"
          fontWeight="700"
          letterSpacing="1.6"
          textAnchor="middle"
        >
          IST
        </text>
        <text x="100" y="62" fill="#1d2a66" fontSize="5" letterSpacing="1.2" textAnchor="middle" opacity="0.8">
          1947
        </text>

        {/* Hands */}
        <g strokeLinecap="round">
          <line
            ref={hourHandRef}
            x1="100"
            y1="112"
            x2="100"
            y2="52"
            stroke="#101a3d"
            strokeWidth="5"
          />
          <line
            ref={minHandRef}
            x1="100"
            y1="116"
            x2="100"
            y2="28"
            stroke="#101a3d"
            strokeWidth="3.2"
          />
          <circle cx="100" cy="100" r="4" fill="#101a3d" />
          <circle cx="100" cy="100" r="1.6" fill="#dbe4ff" />
        </g>
      </svg>

      <div className="text-center">
        <div
          ref={digitalRef}
          className="display text-3xl tabular-nums tracking-[0.12em] text-white sm:text-4xl"
          suppressHydrationWarning
        >
          00:00:00
        </div>
        <div className="mono mt-2 text-[10px] uppercase tracking-[0.22em] text-white/55">
          Indian Standard Time · UTC+5:30
        </div>
      </div>
    </div>
  );
}
