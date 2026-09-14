# Plan: Rebuild "لماذا منهج المايسترا؟" Section

## Goal
Replace the current content of `WhyMaestraSection` with the new TTDA-accredited methodology narrative and the uploaded TTDA London logo, keeping the section visually consistent with the existing purple/lavender brand.

## What will change

### 1. Content rewrite in `src/components/WhyMaestraSection.tsx`
- Keep the section heading `لماذا منهج المايسترا؟`.
- Replace the current subtitle, video, and 3-card grid with the new structured copy:
  - Opening hook: "المايسترا أكثر من برنامج للتطوير الذاتي…"
  - Arabic + English positioning line.
  - Methodology paragraph.
  - TTDA Global accreditation line with the logo displayed beside/below it.
  - "ماذا يعني ذلك لكِ؟" block.
  - What the journey combines (two highlighted points).
  - "من الجذور… إلى الهوية… إلى القوة الخارجية… إلى القيادة." as a visual progression line.
  - Completion certificate mention.
  - Final CTA paragraph ending with the crown emoji.

### 2. Add the TTDA logo as a CDN asset
- Upload `user-uploads://image-7.png` via `lovable-assets` to create `src/assets/ttda-logo.png.asset.json`.
- Import the asset pointer in the component and render the logo at a reasonable size (e.g. 120–160px wide) with a subtle gold/white background container so it reads clearly against the lavender section.

### 3. Visual treatment
- Use the existing `AnimatedSection` wrappers for staggered entrance.
- Keep `bg-lavender` and `FloatingDots` background.
- Use a centered, max-width readable column (max-w-3xl) for the narrative.
- Highlight key phrases (e.g. "TTDA Global", "Methodology متكاملة", "شهادة TTDA Global") with the existing gold/primary accent color.
- Add a small CTA button below the text that smooth-scrolls to `#booking` using the existing copy convention: "إحجزي إستشارتك المجانية الأن".
- Remove the old autoplay video and the old 3-icon cards entirely.

## Files to edit
- `src/components/WhyMaestraSection.tsx` — full content rewrite.
- Create `src/assets/ttda-logo.png.asset.json` — via `lovable-assets create`.

## Out of scope
- No backend/Supabase work.
- No changes to other sections or navigation.
- No new dependencies.
