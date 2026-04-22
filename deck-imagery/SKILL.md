---
name: deck-imagery
description: Add AI-generated imagery to Progression Labs decks. Generates B&W photographs via Nano Banana, applies the brand's signature frosted-glass pixelation + glowing ASCII overlay, and places them in slides with a configurable split layout. Invoke after building a deck with the pl-deck skill.
---

# Deck Imagery — AI-Generated ASCII Gradient Visuals

Adds high-quality branded imagery to Progression Labs presentation decks. Each image is a dramatic B&W photograph with the signature frosted-glass pixelation + glowing ASCII overlay effect.

## When to Use

Invoke this skill AFTER a deck has been built with the `pl-deck` skill. The user will specify which slides should have imagery.

## Workflow

### Step 1: User Selects Slides

Ask the user which slides need imagery (e.g. "slides 2, 4, 7"). Not every slide needs an image — statement slides, evidence slides, and section openers work best.

### Step 2: Creative Chain (Per Selected Slide)

For each selected slide:

1. **Extract slide content** — read the heading, body text, and quotes from the deck HTML
2. **Invoke `story-explanation` skill** — extract theme, emotion, and visual metaphor from the slide content
3. **Invoke `be-creative` skill** — generate 3 visual concepts using UltraThink methodology
4. **Select the strongest concept** that works as a dramatic B&W photograph

### Step 3: Generate Image

Construct the prompt and generate via `generate-ulart-image.ts`:

**Prompt template:**
```
Dramatic black and white photograph, high contrast, editorial quality, pure black background.
Subject: [concept from be-creative].
Style: moody, cinematic lighting, sharp detail on subject, studio quality.
The subject should be clearly defined against a pure black background with no white edges or borders.
```

- **Always B&W** — never color photographs
- **Pure black background** — the ASCII effect works best on dark backgrounds where the glow pops. Explicitly request "pure black background with no white edges or borders" to prevent Gemini from adding white margins
- **Clear subject** — the pixelation effect needs a defined subject, not abstract patterns
- **Protect focal points** — if the subject has a face or key focal area, ensure the lighting keeps it in mid-tones so the brightness-based pixelation targets the wing/body highlights instead
- **Model:** Nano Banana (Gemini 3 Pro Image) primary, DALL-E 3 fallback
- **Output:** raw PNG in `~/.claude/output/`

### Step 4: Post-Process with ASCII Gradient Effect

Run the processor script on each generated image:

```bash
cd ~/.claude/skills/deck-imagery
node process-deck-image.js <input.png> <output.png> --color <brand-color> [--size <cellSize>]
```

**Parameters:**
| Flag | Default | Description |
|------|---------|-------------|
| `--color` | `orchid` | Brand color for ASCII glow: `orchid`, `salmon`, `blue`, `green`, `turquoise` |
| `--size` | `14` | Pixel block size in px. Smaller = finer grain. Range: 8-30 |

**Color assignment:** Match the brand color to the subject's real-world color:
- Warm animals (cheetah, lion, fox) → `salmon`
- Flowers (roses, warm tones) → `salmon`
- Purple flowers (lavender, orchids, tulips) → `orchid`
- Ocean, water, sky, ice → `blue` or `turquoise`
- Trees, foliage, nature → `green`
- Fire, sunset, warmth → `salmon`
- Crystal, glass, cool tones → `turquoise`
- Abstract/neutral subjects → `orchid`

Do NOT cycle colors arbitrarily. The color should feel connected to the subject.

**Visual rules:**
- Pixelation follows subject brightness — brightest areas get pixelated
- ASCII glow is ONE color per image (never mixed)
- Effect dissolves organically from bright to dark
- Dark background areas remain clean and untouched
- ZERO SCATTER — no floating pixels/ASCII outside subject bounds
- `@napi-rs/canvas` must be installed: `cd ~/.claude/skills/deck-imagery && npm install`

### Step 5: Integrate into Deck

Place the processed PNG into the slide using a **split layout**.

**User specifies ratio per slide** (default 50:50):
- `50` — equal split, text left, image right
- `60` — 60% text, 40% image
- `40` — 40% text, 60% image (more image focus)
- `30` — 30% text, 70% image (image dominant)

**HTML structure for image slides:**
```html
<div class="slide slide-content slide-split" style="--split: 50">
  <div class="slide-text">
    <canvas class="corner-canvas" id="corner-N"></canvas>
    <div class="content">
      <!-- existing slide content (label, divider, heading, body, etc.) -->
    </div>
    <div class="slide-footer">PROGRESSION LABS</div>
  </div>
  <div class="slide-image">
    <img src="slide-N-image.png" alt="">
  </div>
</div>
```

**Required CSS (add to deck `<style>`):**
```css
.slide-split { flex-direction: row; padding: 0; align-items: stretch; }
.slide-split .slide-text {
  flex: 0 0 calc(var(--split) * 1%);
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  padding: 80px 48px; position: relative;
  background: #fafafa;
}
.slide-split .slide-image {
  flex: 1; background: #0a0a1a; position: relative;
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
}
.slide-split .slide-image > img:not(.image-logo) {
  width: 100%; height: 100%;
  object-fit: contain; display: block; min-height: 0;
}
.slide-split .slide-image .image-logo {
  position: absolute; bottom: 24px; right: 24px;
  width: 26px; height: auto; opacity: 1;
}
```

**CRITICAL CSS notes:**
- `align-items: stretch` on `.slide-split` is REQUIRED — without it, the base `.slide` class's `align-items: center` causes the image panel to not fill the full slide height
- `object-fit: contain` (not `cover`) — preserves the image composition with breathing room; the `#0a0a1a` panel background fills any gaps seamlessly since images have dark backgrounds
- `min-height: 0` on the img — prevents flexbox min-height:auto from breaking the layout
- `.image-logo` uses `:not(.image-logo)` selector on the main img to avoid conflicts

**Layout rules:**
- **NO pixel corner accent on image slides** — remove the `<canvas class="corner-canvas">` element entirely. The image provides the visual interest; the corner accent competes with it
- **PL logo on image panel** — `logo-white.png` with class `image-logo`, positioned bottom-right of the image div, 26px wide, full opacity. Matches the corner accent watermark size for consistency
- Image side: full-height, no padding, bleeds to edge
- Footer stays in the text half
- Content in the text half uses the same centering rules as non-image slides

## Processing Script

The post-processing script lives at `~/.claude/skills/deck-imagery/process-deck-image.js`.

**Requires:** `@napi-rs/canvas` — install with `cd ~/.claude/skills/deck-imagery && npm install`

**What it does:**
1. Loads the raw B&W image
2. Samples brightness per pixel block (cell grid)
3. Pixelates bright areas (brightness > 80) — snaps to block grid
4. Overlays glowing ASCII characters using `screen` composite
5. Applies film grain at 6% overlay opacity
6. Exports as PNG

**Ported from:** `websiteplab` repo, `ascii-gradient-tool` branch — `useAsciiGradientRenderer.ts`

## Quality Checklist

Before delivering the deck with imagery:
- [ ] Each image is a B&W photograph with dark background
- [ ] ASCII glow uses a SINGLE brand color per image
- [ ] Pixelation follows subject brightness (bright = pixelated)
- [ ] No floating artifacts outside the subject (ZERO SCATTER)
- [ ] Split layout renders correctly at the specified ratio
- [ ] Corner accent and footer are in the text half, not the image half
- [ ] All images are high resolution (min 1024px on longest side)
