---
name: pl-deck-components
description: Use when building cards, SVG diagrams, icons, tables, metrics, and other visual components for Progression Labs HTML decks. Provides proper SVG diagram templates with circles and arrow markers, draw-on icon animations, and component styling rules.
---

# PL Deck Components

Visual components for Progression Labs deck slides. Every component follows the brand color rules: blue `#1e5bff` primary, salmon `#FFA07A` accent, red `#dc2626` for warnings only.

## Cards

Default to open text blocks separated by dashed lines. Use boxes selectively when a slide needs paired contrast (good vs bad) or when a card needs to anchor a group of related elements.

### Open card (default for most slides)

```css
.card {
  background: none;
  border: none;
  border-bottom: 1px dashed rgba(0,0,0,0.08);
  padding: 0 0 20px;
  position: relative;
  text-align: left;
}
.card:last-child { border-bottom: none; }

/* Grid layout: vertical dividers between columns, generous padding both sides */
.card-grid .card {
  border-bottom: none;
  border-right: 1px dashed rgba(0,0,0,0.08);
  padding: 0 28px;
}
.card-grid .card:first-child { padding-left: 0; }
.card-grid .card:last-child { border-right: none; padding-right: 0; }
```

## Boxes (for emphasis and paired contrast)

Use boxes when:
- A slide contrasts good vs bad (best practice vs anti-pattern, recommended vs risky)
- A callout needs to anchor a key insight
- A grid of cells benefits from clear visual borders (e.g., a business model canvas)

Do not use boxes everywhere. Default is still open cards with dashed dividers. A deck where every card is boxed feels heavy. Reserve boxes for the moments that matter.

### Box variants

```css
/* Good / best practice / recommended */
.box-good {
  background: rgba(30,91,255,0.04);
  border: 1px solid rgba(30,91,255,0.2);
  border-radius: 10px;
  padding: 18px 24px;
}

/* Bad / anti-pattern / risk / what to avoid */
.box-bad {
  background: rgba(220,38,38,0.04);
  border: 1px solid rgba(220,38,38,0.25);
  border-radius: 10px;
  padding: 18px 24px;
}

/* Neutral / structural — for canvas cells, role cards, generic groupings */
.box-neutral {
  background: rgba(0,0,0,0.025);
  border: 1px dashed rgba(0,0,0,0.12);
  border-radius: 10px;
  padding: 18px 24px;
}

/* Compact tag pill — inline good/bad label */
.tag-good, .tag-bad {
  display: inline-block;
  font-family: 'SF Mono', monospace;
  font-size: 9px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 3px 8px;
  border-radius: 4px;
  color: white;
}
.tag-good { background: #1e5bff; }
.tag-bad { background: #dc2626; }
```

### Rules
- Border-radius range: 8–12px. Sharper than that reads as a hard rectangle; softer reads as a button.
- Backgrounds always at very low opacity (4% tint) so the box reads as a quiet surface, not a coloured block.
- Borders 1px solid at 20–25% opacity. Heavier borders compete with the content.
- Padding minimum 22px vertical, 28px horizontal. Less feels cramped.
- Never combine `.box-good` and `.box-bad` styles on the same element. Pick one.
- Do not stack a box inside a box. If you need nested grouping, the outer container should be a `.box-neutral` and the inner should be unframed text.

## Minimum Legibility Floor

These are hard minimums for all body prose in deck content. If a slide cannot fit comfortably with these values, **trim content, not text size**. Shrinking type below the floor is a brand violation, not a workaround.

| Property | Minimum |
|---|---|
| Body prose font-size | `1rem` (16px) |
| Body prose line-height | `1.65` |
| Box internal padding | `22px` vertical, `28px` horizontal |
| Max prose line length | `70ch` (~640px at body size) |
| Table cell prose (exception) | `0.92rem` allowed inside multi-column tables (3+ cols) where 1rem would overflow |

**Acceptable exceptions** (small text is allowed only for these uses):
- Uppercase mono **labels** (`.label`, `.box-label`, `.cell-label`, column headers): 9px is fine because they are metadata, not prose
- Pill **tags** (`.tag-good`, `.tag-bad`): 9px because they are tokens, not prose
- Slide-footer wordmark (`PROGRESSION LABS`): 9px

**Never shrink:**
- Body paragraphs (`<p>`)
- List items inside boxes (`<li>`)
- Table cell content
- Diagram annotation text (use the 9-11px range from the SVG section instead)

If a slide overflows with 0.92rem prose, cut content. Common trims: shorter bullet phrases, drop redundant sub-bullets, move detail to a follow-up slide, or simplify a row into a single sentence + a colored badge.

## Equal-height grids

Any grid with 2+ child boxes or cards must use equal-height rows. Uneven row heights make the deck look unbalanced — the eye reads jagged edges as "rough." Uniform rhythm > uneven content.

```css
/* Any multi-box grid */
.boxes-2x2, .pair-grid, .canvas-grid, .three-bullet, .three-col-body {
  display: grid;
  grid-template-columns: repeat(<N>, 1fr);
  grid-auto-rows: 1fr;          /* equal-height rows — required */
  align-items: stretch;          /* children fill the row */
}

/* The box itself uses flex column so its content stacks normally */
.boxes-2x2 > .box-neutral,
.pair-grid > .box-good,
.pair-grid > .box-bad,
.canvas-grid > .canvas-cell {
  display: flex;
  flex-direction: column;
}
```

### Rules
- Use `grid-auto-rows: 1fr` on the parent grid, not `min-height` on each child. `1fr` distributes available height evenly across rows; `min-height` just sets a floor and still allows uneven growth.
- When you set `1fr` row sizing, also make the child a flex column so its inner content (label + body + footer) stacks naturally and the box itself can grow to fill the row.
- If one box has dramatically more content than the others, **trim content** rather than break the equal-height rule. (Use the legibility floor + content-trim rule above.)

### Two-column or N-column layouts

When two columns sit side-by-side (e.g. Method + Focus areas, Best practice + Anti-pattern), they should use the **same internal treatment** — both tables, both lists, both prose blocks. Mixing a list on the left with a table on the right reads as two unrelated halves rather than one balanced layout.

Acceptable mixed treatments (rare): a body paragraph on the left + a figure/diagram on the right. The asymmetry is intentional and obvious.

Not acceptable: a numbered `<ol>` on one side + a `.focus-table` on the other side of the same slide.

## SVG Diagrams

**Diagrams are the most impactful visual element on a slide. A bad diagram is worse than no diagram. Follow these rules exactly.**

### Design Principles (read BEFORE drawing any diagram)

1. **One idea per diagram.** If you need to explain the diagram, it's too complex. Split it or simplify.
2. **Visual hierarchy through size.** The central concept should be the largest element. Supporting nodes should be noticeably smaller. Never make all nodes the same size.
3. **Whitespace is structure.** 40px minimum between nodes. 20px padding inside the viewBox edges. Cramped diagrams look amateur.
4. **Before/after beats abstract.** When showing a transformation (silos to unified, chaos to order), physically separate the two states with space or a divider. The reader should see the contrast instantly.
5. **Direction tells the story.** Top-to-bottom = hierarchy/layers. Left-to-right = process/flow. Center-outward = hub-spoke/influence. Pick one and commit.
6. **Connectors are minimal.** Dashed lines at `rgba(30,91,255,0.15)` with subtle arrows. Never more connectors than nodes. If it looks like spaghetti, remove lines until it doesn't.
7. **Labels inside nodes, not floating.** Text should be anchored to something. Floating labels create visual noise.
8. **Use color to encode meaning, not decoration.** Blue = good / recommended / what worked. Red = bad / anti-pattern / what went wrong. Grey = unconfirmed/neutral. Salmon is reserved for the hero gradient and pixel corner; do not use it in diagram nodes. One color per meaning, max 3 colors per diagram.
9. **Ask: would a bulleted list work better?** If yes, use a bulleted list. Diagrams earn their place by showing relationships that text cannot.

### Mandatory SVG Setup

Every diagram MUST include:

```html
<svg viewBox="0 0 [width] [height]" width="100%" style="max-width: [width]px;">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5"
            markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(30,91,255,0.3)" />
    </marker>
  </defs>
  <!-- nodes and connectors here -->
</svg>
```

**viewBox padding:** At least 20px on all sides. Never let elements touch the SVG edge.

### Node Types

**Rectangle node:**
```html
<rect x="50" y="50" width="140" height="48" rx="6"
      fill="rgba(30,91,255,0.06)" stroke="rgba(0,0,0,0.06)" stroke-width="1" />
<text x="120" y="74" text-anchor="middle" dominant-baseline="central"
      font-family="Inter" font-size="11" fill="#1a1a1a">Node Label</text>
```

**Circle node:**
```html
<circle cx="200" cy="150" r="40"
        fill="rgba(30,91,255,0.06)" stroke="rgba(0,0,0,0.06)" stroke-width="1" />
<text x="200" y="150" text-anchor="middle" dominant-baseline="central"
      font-family="Inter" font-size="11" fill="#1a1a1a">Label</text>
```

**Diamond (decision) node:**
```html
<polygon points="200,110 250,150 200,190 150,150"
         fill="rgba(255,160,122,0.1)" stroke="rgba(0,0,0,0.06)" stroke-width="1" />
<text x="200" y="150" text-anchor="middle" dominant-baseline="central"
      font-family="Inter" font-size="10" fill="#1a1a1a">Yes/No?</text>
```

### Connectors

**Straight line with arrow:**
```html
<line x1="190" y1="74" x2="280" y2="74"
      stroke="rgba(30,91,255,0.2)" stroke-width="1.5"
      marker-end="url(#arrow)" />
```

**Curved path connector:**
```html
<path d="M 190,74 C 230,74 250,150 280,150"
      fill="none" stroke="rgba(30,91,255,0.2)" stroke-width="1.5"
      marker-end="url(#arrow)" />
```

**Vertical connector:**
```html
<line x1="120" y1="98" x2="120" y2="140"
      stroke="rgba(30,91,255,0.2)" stroke-width="1.5"
      marker-end="url(#arrow)" />
```

### Labels (on connectors or sections)

```html
<text x="400" y="30" text-anchor="middle"
      font-family="'SF Mono', monospace" font-size="9" font-weight="600"
      fill="rgba(30,91,255,0.45)" letter-spacing="1.5" text-transform="uppercase">
  SECTION LABEL
</text>
```

### Color Rules for Diagrams

| Meaning | Fill | Stroke |
|---------|------|--------|
| Default/confirmed | `rgba(30,91,255,0.06)` | `rgba(0,0,0,0.06)` |
| Needs attention | `rgba(255,160,122,0.1)` | `rgba(255,160,122,0.3)` |
| Problem/silo | `rgba(220,38,38,0.08)` | `rgba(220,38,38,0.25)` |
| Connector lines | — | `rgba(30,91,255,0.2)` |
| Arrow markers | `rgba(30,91,255,0.3)` | — |

**NEVER use orchid, green, or turquoise in diagram nodes.**

### Element Limits (CRITICAL)

| Diagram type | Max elements | Max nesting | Min spacing |
|-------------|-------------|-------------|-------------|
| Flowchart | 8-10 nodes | 2 levels | 40px between nodes |
| Hub-spoke / network | 12-15 visible nodes | 2 levels from center | 30px between nodes |
| Architecture stack | 5-6 layers | 1 boundary divider | 8px between rows |
| Radial / hub-spoke | 1 center + 3-4 spokes, max 4 leaves per spoke | 2 rings | Spokes 90deg apart min |

**If content exceeds these limits, SPLIT into two slides.**

### Simplification Checklist (run before finalizing any diagram)

1. Can any two nodes be merged without losing meaning?
2. Are there more than 2 colors in use? If yes, reduce.
3. Is there text smaller than 8px? Remove or enlarge.
4. Would a reader understand the flow in under 5 seconds?
5. Could this be a simple bulleted list instead?

For copy-paste SVG templates of common diagram types (flowchart, hub-spoke, architecture stack, timeline), read `diagram-templates.md`.

## No Emojis or Icon Fonts

Never use emojis or icon fonts in decks. The visual language is typography, the brand blue/red, SVG diagrams, and the mosaic imagery — nothing pictographic.

**CSS animation (still needed in every deck):**
```css
.icon-draw path, .icon-draw line, .icon-draw circle, .icon-draw rect {
  stroke: #1e5bff;
  fill: none;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: iconDrawOn 0.8s ease-out forwards;
}
.icon-gradient {
  opacity: 0;
  animation: iconGradientIn 0.6s ease-out forwards;
}
@keyframes iconDrawOn {
  to { stroke-dashoffset: 0; }
}
@keyframes iconGradientIn {
  to { opacity: 1; }
}
```

**GSAP integration (for timeline coordination):**
```javascript
el.querySelectorAll('.icon-draw path, .icon-draw line, .icon-draw circle').forEach((path, i) => {
  const len = path.getTotalLength ? path.getTotalLength() : 200;
  gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
  tl.to(path, { strokeDashoffset: 0, duration: 0.8, ease: 'power2.out' }, 0.2 + i * 0.15);
});
```

## Tables

```css
.data-table {
  width: 100%;
  border-collapse: collapse;
}
.data-table th {
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 9px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: rgba(30,91,255,0.45);
  padding: 8px 12px;
  text-align: left;
  border-bottom: 1px dashed rgba(0,0,0,0.08);
}
.data-table td {
  font-size: 11.5px;
  padding: 8px 12px;
  color: #1a1a1a;
  border-bottom: 1px dashed rgba(0,0,0,0.06);
}
```

## Metrics / Stat Numbers

```css
.highlight-number {
  font-family: Inter, sans-serif;
  font-size: clamp(1.8rem, 3.2vw, 2.6rem);
  font-weight: 300;
  color: #1e5bff;
}
.stat-label {
  font-family: 'SF Mono', monospace;
  font-size: 9px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(0,0,0,0.35);
  margin-top: 6px;
}
```

## Step Numbers

Plain large numbers, no circles or backgrounds. ALL step numbers use the SAME color.

```css
.step-num {
  font-family: Inter, sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: #1e5bff;
  flex-shrink: 0;
  line-height: 1;
}
.step {
  border-bottom: 1px dashed rgba(0,0,0,0.08);
  padding-bottom: 16px;
}
.step:last-child { border-bottom: none; padding-bottom: 0; }
```

## Blockquotes

```css
blockquote {
  border-left: 2px solid #1e5bff;
  padding-left: 16px;
  font-weight: 300;
  font-style: italic;
  color: #1a1a1a;
}
```

## Dashed "+" Dividers

```css
.plus-divider {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 24px 0;
}
.plus-divider::before, .plus-divider::after {
  content: '';
  flex: 1;
  height: 0;
  border-top: 1px dashed rgba(0,0,0,0.08);
}
.plus-divider span {
  font-size: 12px;
  color: rgba(0,0,0,0.15);
}
```
```html
<div class="plus-divider"><span>+</span></div>
```

## Status Badges

No backgrounds or boxes. Plain colored text in monospace.

```css
.badge { font-family: 'SF Mono', monospace; font-size: 9px; font-weight: 600; padding: 0; text-transform: uppercase; letter-spacing: 0.5px; }
.badge-dead { color: #dc2626; }
.badge-decay { color: #e67e22; }
.badge-strong { color: #16a34a; }
.badge-new { color: #1e5bff; }
```
