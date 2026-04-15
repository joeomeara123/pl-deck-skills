---
name: pl-deck-icons
description: Select and place geometric abstract icons in Progression Labs HTML decks. Reads slide content, matches concepts to icons from the curated library using semantic tags, and integrates with GSAP draw-on animations. Invoke as Step 3 in the deck pipeline, after components and before animation.
---

# PL Deck Icons

Select and place icons from the curated library of 28 geometric abstract icons. Each icon combines a soft gradient fill with thin wireframe strokes for a premium, editorial feel.

## When to Use

Invoke after `pl-deck-components` (Step 2) and before `pl-deck-animate` (Step 4). The deck structure and content must already exist so this skill can read slide headings and body text to match icons.

## Icon Style

Every icon has two visual layers:

1. **Gradient blob** (background): A soft radial or linear gradient fill at 8-15% opacity using muted brand tones. Applied to a circle, ellipse, or organic shape. Class: `icon-gradient`
2. **Wireframe overlay** (foreground): Thin geometric strokes. `stroke: #0000FF`, `stroke-width: 1.5`, `fill: none`, `stroke-linecap: round`, `stroke-linejoin: round`

Optional: Small dots at key vertices (`fill: #0000FF`, `r: 1.5`) for the constellation/node effect.

**NEVER improvise icon SVG paths. ALWAYS copy from `icon-library.md` verbatim.**

## Selection Algorithm

For each slide that needs an icon:

1. Extract the slide heading and body text
2. Lowercase and tokenize into keywords
3. Match keywords against each icon's **domain tags** (exact match = 2 points, substring match = 1 point)
4. Match against **primary concept** (exact match = 3 points)
5. Select the highest-scoring icon
6. **Tiebreaker:** Prefer the less-recently-used icon to avoid repetition
7. **No match (score = 0):** Use a general-purpose icon: `concentric-target`, `starburst-spark`, or `radial-sunburst`
8. **NEVER repeat the same icon on consecutive slides**

## Placement Rules

| Context | Width/Height | Container | Position |
|---------|-------------|-----------|----------|
| Card icon | `width="32" height="32"` | `.card-icon` div | Before card title |
| Section header | `width="40" height="40"` | Above or beside heading | Centered above or left of heading |
| Step icon | `width="28" height="28"` | Inline with step number | Left of step number |

- ViewBox is always `0 0 48 48` (rendered size controlled by width/height attributes)
- All icon SVGs get class `icon-draw` on the outer `<svg>` element
- Gradient blob elements get class `icon-gradient`
- Max **1 icon per card**
- Max **4 icons visible on one slide**
- If a slide has no cards or steps, place a single icon above the section heading

## SVG Output Template

```html
<div class="card-icon">
  <svg class="icon-draw" viewBox="0 0 48 48" width="32" height="32">
    <defs>
      <!-- gradient from icon-library.md -->
    </defs>
    <!-- gradient blob shape (class="icon-gradient") -->
    <!-- wireframe paths -->
    <!-- optional vertex dots -->
  </svg>
</div>
```

## GSAP Integration

The existing `pl-deck-animate` system handles icons automatically:

- **Wireframe strokes:** `.icon-draw path, .icon-draw line, .icon-draw circle` elements get draw-on animation via `strokeDasharray`/`strokeDashoffset`
- **Gradient blobs:** `.icon-gradient` elements fade in from `opacity: 0` to `opacity: 1` over 0.6s alongside the draw-on

No additional animation setup is needed. Icons animate when their slide transitions in.

## Optional Animation Extensions

Some icons specify animation types beyond draw-on. Add these CSS keyframes to the deck's `<style>` block only when needed:

**Pulse** (gentle scale throb after draw-on):
```css
.icon-pulse .icon-gradient {
  animation: iconPulse 2.5s ease-in-out infinite;
  animation-delay: 1s;
}
@keyframes iconPulse {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.06); opacity: 1; }
}
```

**Orbit** (slow rotation on specific sub-elements):
```css
.icon-orbit .orbit-path {
  animation: iconOrbit 8s linear infinite;
  transform-origin: center;
}
@keyframes iconOrbit {
  to { transform: rotate(360deg); }
}
```

**Breathe** (gentle opacity cycle):
```css
.icon-breathe .icon-gradient {
  animation: iconBreathe 3s ease-in-out infinite;
  animation-delay: 1s;
}
@keyframes iconBreathe {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}
```

## Icon Library Reference

For the full catalogue of 28 icons with SVG code, semantic tags, and animation types, read [icon-library.md](icon-library.md).
