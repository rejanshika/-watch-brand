# IST 1947 — Scroll-driven watch site

Single-page, scroll-driven site for **IST 1947** ("Watches Inspired by the Way
India Lives Time"). Dark cinematic theme, orange accent, Swiss/technical
minimalism. Real brand content (Arka · Vanya · Vijay), real films, and a real
160-frame close-up sequence.

**Stack:** Next.js 15 (App Router) · React · GSAP + ScrollTrigger · Lenis · Tailwind v3.

## Run

```bash
npm install          # deps already vendored in node_modules
npm run dev          # then open http://localhost:3000
# or, this session's port:
./dev-server.sh      # http://localhost:3800
npm run build        # production build (passes clean)
```

## Structure

```
app/            layout, page (section order), globals.css
components/      Nav, Hero, ScrubSequence, Collections, Difference,
                 Products, Story, Specs, Enquire, Footer, SmoothScroll
lib/content.js   ← ALL copy + asset paths in one place (edit here)
public/          frames/ (160 real frames), *.mp4 films, images/, logos
legacy-static/   the previous static prototype (moved here, untouched)
```

## Sections (top → bottom)

1. **Hero** — full-screen `hero_watch.mp4`, "IST 1947" + tagline, orange scroll cue.
2. **The Watch** — pinned scroll-scrub of the real 160-frame sequence (canvas on desktop, `detail_watch.mp4` on mobile), annotation labels fading in.
3. **Collections** — Arka / Vanya / Vijay as alternating dark/light panels with real images + launch dates.
4. **The IST Difference** — four brand differentiators.
5. **Bestsellers** — real product grid with prices.
6. **Our Story** — `IST1947_watch_film_1.mp4` background + the Vijay "five nights" cricket timeline.
7. **Specifications** — Movement / Dial / Build tables.
8. **Register Your Interest** — 3-step form (Contact → Preference → Delivery).
9. **Footer** — orange, logo, real link columns.

## Editing

- **Text / images / videos:** all in `lib/content.js`.
- **Frame count:** `sequence.totalFrames` (currently 160).
- **Order form → backend:** search `⟶ WIRE UP` in `components/Enquire.jsx`.

Notes: 60fps scrub (single canvas, preloaded frames, Lenis on GSAP's ticker);
mobile swaps the scrub for a short video; reduced-motion is respected. Deploy-ready
for Vercel.
