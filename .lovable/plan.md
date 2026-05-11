## Goal

Replace the plain first frame of the hero VSL with a polished, branded cover image that acts like a movie poster — coach عبير on one side, the title **"منهج المايسترا"** elegantly typeset beside her, soft purple gradient styling consistent with the brand.

## Approach

1. **Store the kie.ai API key** as a Lovable secret named `KIE_AI_API_KEY` (using `add_secret`). The key is used once from a sandbox script — not from the running app — so it never ships to the browser.

2. **Generate the cover image** via kie.ai's GPT-image edit endpoint:
   - Input: the uploaded reference frame (`user-uploads://image-4.png`)
   - Prompt (summary): keep the coach in her current pose/setting, add an elegant Arabic title "منهج المايسترا" set beside her in a refined Madani-style serif/display face, soft purple gradient overlay (#784fa0 → translucent), subtle gold accent line, small subtitle "مع المدربة عبير المعتوق", cinematic depth, premium VSL poster look, 16:9, no UI/play button baked in.
   - Output saved to `src/assets/vsl-cover.jpg`.

3. **QA the output**: view the generated image, confirm typography is legible, no clipped text, brand colors respected, coach remains the focal point. If issues are found, refine the prompt and re-run (up to 2 retries).

4. **Wire it into the hero video** in `src/components/HeroSection.tsx`:
   - Import `vslCover` from `@/assets/vsl-cover.jpg`.
   - Add `poster={vslCover}` to the `<video>` element so the cover shows before play / while loading.
   - Keep the existing loading skeleton and play overlay behavior.

## Technical Details

- **Endpoint**: `https://api.kie.ai/api/v1/gpt4o-image/generate` (image edit mode with input image URL or base64), per kie.ai's GPT-image docs. Script runs with `code--exec` using `requests`; reads `KIE_AI_API_KEY` from env.
- **File touched**: only `src/components/HeroSection.tsx` (one import + one `poster` attribute). New asset: `src/assets/vsl-cover.jpg`.
- **No runtime dependency on kie.ai** — the generated image is bundled like any other asset.

## Out of scope

- Changing the video itself or its controls.
- Building a regenerate-in-app feature.

Once you approve, I'll request the secret and run the generation.