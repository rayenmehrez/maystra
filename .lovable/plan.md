## Goal
Wrap the LeadConnector booking iframe in a premium, on-brand card so the section feels polished and matches the Hero/VSL styling — without changing the widget itself or adding extra elements around it.

## Changes (single file: `src/components/BookingSection.tsx`)

1. **Premium card wrapper** around the iframe:
   - Outer soft radial glow (purple + gold, blurred) — same recipe as the Hero VSL.
   - Animated gradient purple border ring (reuse the existing `border-pulse` keyframe from `index.css`, slowed to ~4s so it feels calm, not urgent).
   - Inner card: white/`bg-card`, `rounded-2xl`, generous padding (`p-2 sm:p-4`), `shadow-purple-lg`.
   - Iframe corners rounded to match (`rounded-xl`, `overflow-hidden`).

2. **Section background polish** (kept subtle, no full hero-style takeover):
   - Add a faint top-to-bottom gradient overlay using lavender tokens so the card pops off the section.
   - Add the `FloatingDotsLight` component behind the card at low opacity for brand continuity (already used elsewhere). Pointer-events none.

3. **Heading treatment**:
   - Keep current copy ("إحجزي إستشارتك المجانية الأن" + "اختاري الموعد المناسب لك").
   - Apply `mt-10` rule and a small gold accent underline under the H2 to match section style.

4. **Untouched**:
   - Iframe `src`, `id`, `scrolling`, min-height (600px), and the `form_embed.js` script loader logic stay exactly as-is.
   - No trust badges, no coach mini-card, no extra copy.

## Technical notes
- All colors via HSL tokens / inline HSL values consistent with Hero (`hsl(280 70% 55%)`, `hsl(45 95% 70%)`, `hsl(272 …)`).
- Border ring uses `WebkitMask` + `maskComposite: exclude` trick (same as Hero VSL) so the gradient shows only on the border.
- Mobile (390px): reduce outer glow blur and padding so the iframe keeps full usable width.
- No new dependencies, no changes to `index.css` (reusing existing `border-pulse` and `shadow-purple-lg`).

## Out of scope
- Widget internals (we cannot style inside the iframe — it's cross-origin).
- Height changes, trust badges, coach card (per your answers).