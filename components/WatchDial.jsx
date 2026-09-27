"use client";

import { useEffect, useRef, useState } from "react";

// Devanagari numerals 1–12, the way the Arka dial prints them.
const NUMERALS = ["१", "२", "३", "४", "५", "६", "७", "८", "९", "१०", "११", "१२"];

// IST is a fixed UTC+5:30 offset — derive it from the epoch rather than
// the viewer's own timezone so the dial reads the same everywhere.
function istParts() {
  const now = Date.now();
  const ist = new Date(now + 5.5 * 3600000);
  return {
    h: ist.getUTCHours(),
    m: ist.getUTCMinutes(),
    s: ist.getUTCSeconds(),
    ms: ist.getUTCMilliseconds(),
  };
}

/**
 * The live Indian Standard Time dial that closes the site: an analog face
 * with a sweeping seconds hand, over a digital IST readout.
 */
export default function WatchDial({ size = 260 }) {
  const [t, setT] = useState(null);
  const frame = useRef();

  useEffect(() => {
    const tick = () => {
      setT(istParts());
      frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, []);

  // Render a static 00:00:00 on the server so hydration matches, then animate.
  const { h, m, s, ms } = t ?? { h: 0, m: 0, s: 0, ms: 0 };
  const secondsFloat = s + ms / 1000;
  const minutesFloat = m + secondsFloat / 60;
  const hoursFloat = (h % 12) + minutesFloat / 60;

  const secAngle = secondsFloat * 6;
  const minAngle = minutesFloat * 6;
  const hourAngle = hoursFloat * 30;

  const pad = (n) => String(n).padStart(2, "0");
  const digital = `${pad(h)}:${pad(m)}:${pad(s)}`;

  return (
    <div className="flex flex-col items-center gap-5">
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        role="img"
        aria-label={`Analog dial showing Indian Standard Time, ${digital}`}
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
            {Array.from({ length: 180 }, (_, i) => (
              <line
                key={i}
                x1="100"
                y1="100"
                x2={100 + 88 * Math.cos((i * 2 * Math.PI) / 180)}
                y2={100 + 88 * Math.sin((i * 2 * Math.PI) / 180)}
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
        {Array.from({ length: 60 }, (_, i) => {
          const a = (i * 6 * Math.PI) / 180 - Math.PI / 2;
          const major = i % 5 === 0;
          const r1 = major ? 78 : 82;
          return (
            <line
              key={i}
              x1={100 + r1 * Math.cos(a)}
              y1={100 + r1 * Math.sin(a)}
              x2={100 + 86 * Math.cos(a)}
              y2={100 + 86 * Math.sin(a)}
              stroke="#1d2a66"
              strokeWidth={major ? 1.5 : 0.6}
              opacity={major ? 0.85 : 0.5}
            />
          );
        })}

        {/* Devanagari hour numerals */}
        {NUMERALS.map((numeral, i) => {
          // index 0 is १ (one o'clock), so 12 (१२) lands at the top.
          // Six is omitted — the Konark small-seconds sits in its place.
          if (i === 5) return null;
          const a = ((i + 1) * 30 * Math.PI) / 180 - Math.PI / 2;
          return (
            <text
              key={numeral}
              x={100 + 66 * Math.cos(a)}
              y={100 + 66 * Math.sin(a)}
              fill="#1d2a66"
              fontSize="12"
              fontWeight="600"
              textAnchor="middle"
              dominantBaseline="central"
            >
              {numeral}
            </text>
          );
        })}

        {/* Konark / Ashoka 24-spoke wheel as the small-seconds counter at 6 */}
        <g transform="translate(100 138)">
          <circle r="22" fill="#2c3d8f" opacity="0.1" />
          <circle r="22" fill="none" stroke="#1d2a66" strokeWidth="1" opacity="0.6" />
          {Array.from({ length: 24 }, (_, i) => {
            const a = (i * 15 * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={6 * Math.cos(a)}
                y1={6 * Math.sin(a)}
                x2={20 * Math.cos(a)}
                y2={20 * Math.sin(a)}
                stroke="#2c3d8f"
                strokeWidth="1.1"
              />
            );
          })}
          <circle r="5.5" fill="#2c3d8f" />
          {/* the wheel's own hand sweeps the seconds */}
          <line
            x1="0"
            y1="3"
            x2="0"
            y2="-19"
            stroke="#c2643a"
            strokeWidth="1.3"
            strokeLinecap="round"
            transform={`rotate(${secAngle})`}
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
            x1="100"
            y1="112"
            x2="100"
            y2="52"
            stroke="#101a3d"
            strokeWidth="5"
            transform={`rotate(${hourAngle} 100 100)`}
          />
          <line
            x1="100"
            y1="116"
            x2="100"
            y2="28"
            stroke="#101a3d"
            strokeWidth="3.2"
            transform={`rotate(${minAngle} 100 100)`}
          />
          <circle cx="100" cy="100" r="4" fill="#101a3d" />
          <circle cx="100" cy="100" r="1.6" fill="#dbe4ff" />
        </g>
      </svg>

      <div className="text-center">
        <div
          className="display text-3xl tabular-nums tracking-[0.12em] text-white sm:text-4xl"
          suppressHydrationWarning
        >
          {digital}
        </div>
        <div className="mono mt-2 text-[10px] uppercase tracking-[0.22em] text-white/55">
          Indian Standard Time · UTC+5:30
        </div>
      </div>
    </div>
  );
}
