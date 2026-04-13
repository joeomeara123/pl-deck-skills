---
name: pl-deck
description: Use when creating any presentation, deck, or slide-based deliverable for Progression Labs. Orchestrates layout, components, animation, and imagery skills in sequence to produce polished, brand-compliant HTML decks.
---

# Progression Labs Deck Builder

Orchestrates the full deck creation pipeline. Invoke child skills in order for consistent, high-quality output.

## Brand Identity

**Company:** Progression Labs
**Positioning:** AI consultancy helping companies integrate AI solutions
**Aesthetic:** Light-first, technical-minimalist with generative art influences

## Color System

### Primary Palette (ALL slide content)

| Color | Hex | Use |
|-------|-----|-----|
| **Blue** | `#0000FF` | Step numbers, icons, labels, chart bars, diagram nodes, positive indicators |
| **Salmon** | `#FFA07A` | Secondary accent, CTAs, warm highlights |
| **Red** | `#dc2626` | Negative/risk indicators only |

**Gradient shading allowed:** Dark blue `#00008B` through `#0000FF` to light `rgba(0,0,255,0.15)` for depth.

### Full 5-Color Palette (hero gradient and pixel corner ONLY)

| Color | Hex |
|-------|-----|
| Orchid | `#BA55D3` |
| Salmon | `#FFA07A` |
| Green | `#B9E979` |
| Turquoise | `#40E0D0` |
| Blue | `#0000FF` |

These 5 colors cycle in the hero gradient WebGL shader and the pixel corner animation. They are NEVER used in slide body content.

**NEVER do this:**
- Steps in different colors (1=orchid, 2=blue, 3=salmon)
- Chart bars in 5 colors
- Diagram nodes each in a different brand color

### UI Colors (Light Theme)

| Role | Value |
|------|-------|
| Background | `#fafafa` |
| Text primary | `#1a1a1a` |
| Text secondary | `#555` / `#666` |
| Text tertiary | `rgba(0,0,0,0.35)` |
| Border | `rgba(0,0,0,0.06)` |
| Card surface | `rgba(0,0,0,0.012)` |
| Section labels | `rgba(0,0,255,0.45)` |

## Typography

| Role | Stack |
|------|-------|
| All text | `Inter, -apple-system, sans-serif` |
| Monospace | `'SF Mono', 'Fira Code', monospace` |

Load from Google Fonts: `Inter:wght@300;400;500;600;700`

| Element | Size | Weight | Notes |
|---------|------|--------|-------|
| Section heading | clamp(1.8rem, 3.5vw, 2.8rem) | 300 | Light, clean. line-height 1.2, letter-spacing -0.01em |
| Card title | 14px | 600 | |
| Body / subtitle | 1rem | 300 | line-height 1.75, max-width 600px, color #94a3b8 |
| Labels | 10px | 600 | UPPERCASE, letter-spacing 0.12em, monospace |
| CTA text | 10px | 600 | UPPERCASE, letter-spacing 0.1em |

**Rules:** Headings use Inter weight 300 for clean minimalism. Keywords within headings use weight 600 + brand blue. Body text weight 300 in muted slate (#94a3b8). All labels/CTAs UPPERCASE with wide tracking. Section labels in blue at 35% opacity, monospace. Generous spacing between sections (28px+ margins). Less is more. Each slide should feel like it has room to breathe.

## Copy Rules

- **No em dashes.** They read as AI-generated. Use periods, semicolons, or restructure. If a parenthetical aside is needed, use actual parentheses or a comma pair.
- Headings under 10 words.
- Body text must be specific, not generic filler.

## Logo

**The Progression Labs logo is a rounded connector/pill shape. Always use the actual PNG files. NEVER generate an SVG approximation.**

- Light backgrounds: `logo-black.png`
- Dark/gradient backgrounds: `logo-white.png`
- Wordmark: "PROGRESSION LABS" uppercase, 10px, letter-spacing 0.15em, weight 500

---

## Workflow: Build a Deck

Execute these skills in order. Each skill handles one domain.

### Step 1: Layout and Structure
**Invoke `Skill(pl-deck-layout)`**
Establishes slide containers, backgrounds (hero gradient for title, grid+glow for content), centering, logo placement, navigation, and pixel corner accents.

### Step 2: Components
**Invoke `Skill(pl-deck-components)`**
Builds cards, SVG diagrams (with proper circles and arrow markers), draw-on icons, tables, metrics, step numbers, blockquotes, and dividers.

### Step 3: Animation
**Invoke `Skill(pl-deck-animate)`**
Adds GSAP timeline choreography, slot machine number count-ups, icon draw-on animations, and transition locking.

### Step 4: Imagery (if needed)
**Invoke `Skill(deck-imagery)`**
Generates AI imagery with the brand's frosted-glass pixelation and ASCII overlay treatment.

---

## Post-Build Verification Checklist

After generating every slide, verify against this checklist. Do not skip.

### Visual Quality
- [ ] No more than 2 colors in slide content (blue + one accent). No rainbow.
- [ ] Step numbers ALL the same color (blue) and size.
- [ ] No em dashes in any text.
- [ ] Diagrams have fewer elements than limits (see pl-deck-components).
- [ ] All SVG text at least 8px.
- [ ] White space is generous. Nothing cramped.

### Layout
- [ ] Content centered (not bunched to top-left).
- [ ] Padding at least 80px top/bottom, 72px sides.
- [ ] Cards and grids evenly spaced.
- [ ] Footer pinned to bottom.

### Brand Compliance
- [ ] Icons use `stroke: #0000FF`, not multi-color, not emoji.
- [ ] Corner brackets blue `#0000FF`.
- [ ] Labels monospace, uppercase, blue at 45% opacity.
- [ ] Quotes have salmon left border.

### Animation (HTML decks)
- [ ] Elements initially hidden (`opacity: 0`).
- [ ] GSAP timeline follows choreography table.
- [ ] Stat numbers use slot-machine count-up.
- [ ] Icons use draw-on stroke animation.

### Copy
- [ ] No em dashes anywhere.
- [ ] Headings concise (under 10 words).
- [ ] Body text specific, not generic.
