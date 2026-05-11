## Goal

Add an elegant, brand-aligned urgency layer to the hero section to capture visitors right after the VSL and push them toward the CTA — without breaking the premium feel.

## What gets added

Two complementary elements (no aggressive red/FOMO, all gold + purple + Madani type):

### 1) Under the VSL video — "live availability" teaser strip

A slim, refined card directly beneath the video, before the countdown, with three micro-signals in one row (stacks vertically on mobile):

- 🔴 Soft pulsing dot + **"الاستشارة مجانية الآن"**
- 🪑 **"المقاعد محدودة لهذا الأسبوع"** with a live counter: **"تبقى X مقاعد فقط"** (X starts at 7, decrements by 1 every ~9–14 minutes, floor 2, persisted in `localStorage` so it doesn't reset on refresh)
- ⏳ **"العرض ينتهي خلال"** mini-mirror of the existing 72h countdown (compact)

Visual: glass card with `border-primary-foreground/20`, soft gold accent line on the right edge (RTL), Madani Arabic numerals for the counter, subtle scale-in on view.

### 2) Above the CTA button — urgency badge

A single, premium pill-shaped badge centered above the CTA:

```
⚠ الأماكن محدودة — تبقى فقط [7] مقاعد لهذا الأسبوع
```

- Soft animated gold-to-purple gradient border, gentle pulsing glow (matching existing CTA pulse rhythm so they feel connected).
- The number `[7]` reads the **same shared seat counter** as the strip above so they stay consistent.
- A tiny "🟢 متاح الآن" leading dot to imply liveness.

## Technical Details

- **New shared hook**: `src/hooks/useLimitedSeats.ts` — single source of truth.
  - Reads/writes `maestra-seats-remaining` and `maestra-seats-last-tick` in `localStorage`.
  - On mount: if no value, seed with random 5–7. On interval (60s check), if elapsed > 9–14 min and current > 2, decrement by 1.
  - Returns `seatsLeft`.
- **New component**: `src/components/hero/LiveAvailabilityStrip.tsx` — the under-video strip. Receives `endTime` prop from `HeroSection` to render the compact mirror countdown.
- **New component**: `src/components/hero/UrgencyBadge.tsx` — the pill above the CTA.
- **Edits to `src/components/HeroSection.tsx`**:
  - Lift `endTime` and `timeLeft` calculation (already exists) and pass to the new strip.
  - Insert `<LiveAvailabilityStrip />` after the VSL video block (right before the big countdown).
  - Insert `<UrgencyBadge />` right above the existing `motion.a` CTA, inside the same `variants={childVariants}` wrapper so it animates in with the CTA.
- **Styling**: only semantic tokens from `index.css` / `tailwind.config.ts` (`primary-foreground`, brand gold via existing gradient utilities). No raw hex in components. Madani font already global.
- **Animations**: framer-motion (already in the file). Reuse existing `animate-[shimmer_6s_...]` pattern; add a subtle `whileInView` scale-in for the strip.
- **No backend, no analytics changes, no copy changes elsewhere.**

## Copy (final Arabic)

- Strip line 1: `استشارة مجانية متاحة الآن`
- Strip line 2: `تبقى {n} مقاعد لهذا الأسبوع`
- Strip line 3: `ينتهي العرض خلال {hh}:{mm}:{ss}`
- Badge: `الأماكن محدودة — تبقى فقط {n} مقاعد`

## Out of scope

- Real backend seat tracking (deferred — current simulation is industry-standard for VSL pages).
- Adding the same urgency to other sections.
- Changing the existing 72h countdown or main CTA copy.

Approve and I'll build it.