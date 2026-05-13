
# Motion & Interaction Overhaul — Atelier Casa Mãe

Goal: elevate the site to award-quality motion design (Awwwards / FWA tier). Treat each interior project as a sculptural object. Reveal technical artifacts (plans, elevations, sketches) through scroll. Smooth, refined, deeply responsive.

References: Transparent Speaker, Bang & Olufsen, Sonos, Teenage Engineering — minimalist, product-as-art, deliberate motion, generous whitespace, monospace + serif duets, materials forward.

---

## 1. Foundations

**Install**
- `framer-motion` — all animations move here (replace CSS `animate-fade-in*` usage progressively).
- `@studio-freight/lenis` — global smooth scroll, integrated with Framer Motion's `useScroll`.

**Global setup**
- Create `src/components/SmoothScroll.tsx` mounting Lenis on `<body>`, syncing RAF with Framer Motion `ScrollTrigger`.
- Add `MotionConfig` provider in `App.tsx` with shared transition `{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }` and `reducedMotion="user"`.
- Add reusable motion primitives in `src/components/motion/`:
  - `Reveal.tsx` — fade/slide/blur on scroll (whileInView + viewport margin).
  - `Magnetic.tsx` — pointer-following wrapper for buttons/links.
  - `Marquee.tsx` — infinite horizontal scroller for credits/process.
  - `ParallaxImage.tsx` — `useScroll` + `useTransform` for image y-shift.
  - `SplitText.tsx` — per-word/letter stagger reveal for headlines.

## 2. Home — sculptural hero & scroll narrative

- **Hero**: headline becomes `SplitText` with per-word mask reveal. Hero image gets subtle parallax + slow scale-in; on hover the image rotates 0° with a soft tilt driven by mouse position (sculpture on a turntable feel). Floating glass card animates in with springy y + opacity. CTA buttons wrapped in `Magnetic` with shine sweep retained.
- **"Sculpture" section** (new, between hero and existing content): full-bleed dark canvas. As the user scrolls, a featured project image scales from a small framed thumbnail to full bleed, while a caption typewriter-reveals next to it. Inspired by Transparent Speaker product page.
- **Process section**: convert to horizontal scroll-pinned track on desktop (`useScroll` + x transform), vertical stack on mobile. Each step card has a number that counts in.
- **Stats**: keep `AnimatedStat` but wrap in `Reveal` with stagger.

## 3. Work — technical artifacts on scroll

- Gallery cards: replace CSS fade with Framer `whileInView` stagger; add a small "specimen label" (monospace, project code, year) that slides in from the side on hover — Teenage Engineering vibe.
- New **"Behind the design"** strip below the gallery: a horizontal scroll of technical artifacts (floor plans, elevations, material swatches). Use placeholder SVG plans for now (procedurally drawn) layered with parallax. Each artifact reveals as it enters viewport — line-draw SVG animation for plan strokes (`pathLength` 0 → 1).
- Lightbox: keep, but add Framer `AnimatePresence` for smoother enter/exit and image cross-fades.

## 4. About — editorial motion

- Portrait gets parallax + subtle scale on scroll. Quote card animates in with mask reveal. Add a vertical marquee of values/keywords beside the bio.

## 5. Contact

- Form fields get focus microinteraction (label rises, underline draws). Submit button magnetic + success state morph.

## 6. Header / Nav

- Logo: hover spring micro-rotation. Nav links: animated underline (`layoutId` shared between active/hover). Mobile menu: full-screen panel with staggered link reveal.

## 7. Microinteractions everywhere

- Buttons: magnetic + tactile press + shine (existing).
- Cards: 3D tilt on pointer move (subtle, max 4°).
- Images: cursor-follow zoom hint.
- Section dividers: thin line that draws across viewport on scroll-in.

## 8. Responsiveness

- Audit every section at 320 / 375 / 768 / 1024 / 1440.
- Disable horizontal-scroll-pinned tracks on `<lg`, fall back to vertical stacks.
- Reduce parallax magnitude on touch (Lenis touch tuning).
- Ensure hero text size clamps with `clamp()` and hero composition stacks gracefully on mobile.

## 9. Performance & a11y

- Respect `prefers-reduced-motion` — `MotionConfig reducedMotion="user"` covers most; Lenis `autoRaf=false` and stop animations when reduced motion.
- Lazy-load heavy SVG plan artifacts.
- Keep LCP hero image with `fetchPriority="high"` (already set).

---

## Technical notes (for the curious)

- Lenis setup pattern:
  ```ts
  const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  function raf(t){ lenis.raf(t); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
  ```
  Sync with Framer: `lenis.on('scroll', ScrollTrigger.update)` style — for Framer we just rely on native scroll events which Lenis dispatches.
- Use `LazyMotion` + `domAnimation` features to keep bundle small.
- Replace existing `.animate-fade-in*` CSS utilities progressively; keep them as fallback during migration.

---

## Rollout order

1. Install deps, add `SmoothScroll`, `MotionConfig`, motion primitives.
2. Home hero + sculpture section + process horizontal scroll.
3. Work gallery + technical-artifacts strip.
4. About + Contact + Header polish.
5. Responsive audit + reduced-motion QA + screenshot pass at 3 breakpoints.

This is a substantial change touching most pages. I'll implement it end-to-end in one pass and screenshot-verify each major section before finishing.
