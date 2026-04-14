---
name: pl-deck-components
description: Use when building cards, SVG diagrams, icons, tables, metrics, and other visual components for Progression Labs HTML decks. Provides proper SVG diagram templates with circles and arrow markers, draw-on icon animations, and component styling rules.
---

# PL Deck Components

Visual components for Progression Labs deck slides. Every component follows the brand color rules: blue `#0000FF` primary, salmon `#FFA07A` accent, red `#dc2626` for warnings only.

## Cards

Clean, minimal cards. No decorative additions by default. Let whitespace do the work.

```css
.card {
  background: rgba(0,0,0,0.012);
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 12px;
  padding: 22px 20px;
  position: relative;
  transition: transform 0.3s ease, border-color 0.3s ease;
}
.card:hover {
  transform: translateY(-3px);
  border-color: rgba(0,0,0,0.12);
}
```

**No corner brackets by default.** The clean border is enough. Only add corner brackets on special emphasis cards (e.g., a single featured card on a slide). Less decoration = more luxury.

## SVG Diagrams

**This is the most common source of visual bugs. Follow these rules exactly.**

### Mandatory SVG Setup

Every diagram MUST include:

```html
<svg viewBox="0 0 [width] [height]" width="100%" style="max-width: [width]px;">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5"
            markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(0,0,255,0.3)" />
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
      fill="rgba(0,0,255,0.06)" stroke="rgba(0,0,0,0.06)" stroke-width="1" />
<text x="120" y="74" text-anchor="middle" dominant-baseline="central"
      font-family="Inter" font-size="11" fill="#1a1a1a">Node Label</text>
```

**Circle node:**
```html
<circle cx="200" cy="150" r="40"
        fill="rgba(0,0,255,0.06)" stroke="rgba(0,0,0,0.06)" stroke-width="1" />
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
      stroke="rgba(0,0,255,0.2)" stroke-width="1.5"
      marker-end="url(#arrow)" />
```

**Curved path connector:**
```html
<path d="M 190,74 C 230,74 250,150 280,150"
      fill="none" stroke="rgba(0,0,255,0.2)" stroke-width="1.5"
      marker-end="url(#arrow)" />
```

**Vertical connector:**
```html
<line x1="120" y1="98" x2="120" y2="140"
      stroke="rgba(0,0,255,0.2)" stroke-width="1.5"
      marker-end="url(#arrow)" />
```

### Labels (on connectors or sections)

```html
<text x="400" y="30" text-anchor="middle"
      font-family="'SF Mono', monospace" font-size="9" font-weight="600"
      fill="rgba(0,0,255,0.45)" letter-spacing="1.5" text-transform="uppercase">
  SECTION LABEL
</text>
```

### Color Rules for Diagrams

| Meaning | Fill | Stroke |
|---------|------|--------|
| Default/confirmed | `rgba(0,0,255,0.06)` | `rgba(0,0,0,0.06)` |
| Needs attention | `rgba(255,160,122,0.1)` | `rgba(255,160,122,0.3)` |
| Problem/silo | `rgba(220,38,38,0.08)` | `rgba(220,38,38,0.25)` |
| Connector lines | — | `rgba(0,0,255,0.2)` |
| Arrow markers | `rgba(0,0,255,0.3)` | — |

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

## Draw-On SVG Icons

Inline SVG icons with a "draw-on" stroke animation. Icons draw in blue using stroke-dasharray/dashoffset.

**Rules:**
- Color: `stroke: #0000FF` only. No multi-color icons.
- Style: `fill: none; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round`
- Size: 24-48px viewBox, max 3 path elements per icon
- NEVER use emojis. NEVER use icon fonts. Always inline SVG.

**CSS animation (copy-paste):**
```css
.icon-draw path, .icon-draw line, .icon-draw circle, .icon-draw rect {
  stroke: #0000FF;
  fill: none;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: iconDrawOn 0.8s ease-out forwards;
}
@keyframes iconDrawOn {
  to { stroke-dashoffset: 0; }
}
```

**Stagger multiple icons:**
```css
.icon-draw:nth-child(1) path { animation-delay: 0.1s; }
.icon-draw:nth-child(2) path { animation-delay: 0.3s; }
.icon-draw:nth-child(3) path { animation-delay: 0.5s; }
.icon-draw:nth-child(4) path { animation-delay: 0.7s; }
```

**Common icon examples:**

Checkmark:
```html
<svg class="icon-draw" viewBox="0 0 24 24" width="32" height="32">
  <path d="M20 6L9 17l-5-5"/>
</svg>
```

Lightning bolt:
```html
<svg class="icon-draw" viewBox="0 0 24 24" width="32" height="32">
  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
</svg>
```

Chart/bars:
```html
<svg class="icon-draw" viewBox="0 0 24 24" width="32" height="32">
  <line x1="6" y1="20" x2="6" y2="10"/>
  <line x1="12" y1="20" x2="12" y2="4"/>
  <line x1="18" y1="20" x2="18" y2="14"/>
</svg>
```

Globe:
```html
<svg class="icon-draw" viewBox="0 0 24 24" width="32" height="32">
  <circle cx="12" cy="12" r="10"/>
  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
</svg>
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
  color: rgba(0,0,255,0.45);
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
  color: #0000FF;
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

ALL step numbers use the SAME color. Never alternate colors per step.

```css
.step-num {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 11px;
  font-weight: 700;
  background: rgba(0,0,255,0.08);
  color: #0000FF;
  flex-shrink: 0;
}
```

## Blockquotes

```css
blockquote {
  border-left: 2px solid #FFA07A;
  padding-left: 16px;
  font-weight: 300;
  font-style: italic;
  color: #444;
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

```css
.badge { font-size: 10px; font-weight: 600; padding: 2px 8px; border-radius: 3px; text-transform: uppercase; letter-spacing: 0.5px; }
.badge-dead { background: rgba(220,38,38,0.1); color: #dc2626; }
.badge-decay { background: rgba(255,160,122,0.15); color: #e67e22; }
.badge-strong { background: rgba(22,163,74,0.1); color: #16a34a; }
.badge-new { background: rgba(0,0,255,0.08); color: #0000FF; }
```
