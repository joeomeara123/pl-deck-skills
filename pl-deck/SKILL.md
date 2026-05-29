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
| **Blue** | `#0000FF` | Step numbers, icons, labels, chart bars, diagram nodes, **good / best practice / recommended path** |
| **Red** | `#dc2626` | **Bad / anti-pattern / risk / what to avoid** |
| **Salmon** | `#FFA07A` | Hero gradient + pixel corner only. Not used for content semantics. |

**Gradient shading allowed:** Dark blue `#00008B` through `#0000FF` to light `rgba(0,0,255,0.15)` for depth.

### Blue / Red as a signaling system

When a slide contrasts good vs bad (best practice vs anti-pattern, recommended vs risky, what worked vs what didn't), use the system consistently:

| Treatment | Good | Bad |
|---|---|---|
| Background tint | `rgba(0,0,255,0.04)` | `rgba(220,38,38,0.04)` |
| Border | `1px solid rgba(0,0,255,0.2)` | `1px solid rgba(220,38,38,0.25)` |
| Inline tag pill | Blue `#0000FF` background, white text, 9px mono uppercase | Red `#dc2626` background, white text, 9px mono uppercase |
| Diagram stroke | `#0000FF` | `#dc2626` |
| Text accent (sparingly) | `#0000FF` weight 600 | `#dc2626` weight 600 |

Apply on slides where the structure is paired contrast (e.g. best practice / anti-pattern tables, what-happened / what-should-have-happened flows). Do not over-apply: a single-topic slide with no good/bad framing should stay neutral.

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
| Section heading | clamp(1.4rem, 2.8vw, 2.2rem) | 300 | Light, clean. line-height 1.2, letter-spacing -0.01em |
| Card title | 13px | 600 | |
| **Body prose (floor)** | **0.92rem (~14.7px)** | 300 | line-height ≥ 1.6, max line length ≤ 70ch. **Hard minimum** — do not shrink below this. |
| Body emphasis / executive copy | 1rem | 400 | line-height 1.7 — use for executive-summary slides where the prose is the main content |
| Labels | 9px | 600 | UPPERCASE, letter-spacing 0.12em, monospace. Exempt from the prose floor (labels are tokens, not prose). |
| CTA text | 9px | 600 | UPPERCASE, letter-spacing 0.1em |

**Rules:** Headings use Inter weight 300 for clean minimalism. Keywords within headings use weight 600 + brand blue. Body text weight 300 in dark slate (#1a1a1a or #555). All labels/CTAs UPPERCASE with wide tracking. Section labels in blue at 35% opacity, monospace. Less is more. Generous room to breathe. Content max-width 960px.

## Copy Rules

- **No em dashes.** They read as AI-generated. Use periods, semicolons, or restructure. If a parenthetical aside is needed, use actual parentheses or a comma pair.
- Headings under 10 words.
- Body text must be specific, not generic filler.
- **If a slide does not fit comfortably with 0.92rem prose, trim content, not size.** Shrinking type below the floor is a brand violation. Cut bullets, simplify rows, or split across slides.

## Logo

**The Progression Labs logo is a rounded connector/pill shape. Always use the actual PNG files. NEVER generate an SVG approximation.**

- Light backgrounds: `logo-black.png`
- Dark/gradient backgrounds: `logo-white.png`
- Wordmark: "PROGRESSION LABS" uppercase, 10px, letter-spacing 0.15em, weight 500

---

## Workflow: Build a Deck

Execute these skills in order. Each skill handles one domain.

### Step 0: Assets
Copy logo files into the deck output directory before writing any HTML:
```bash
cp ~/.claude/skills/assets/logo-white.png ~/.claude/skills/assets/logo-black.png <deck-directory>/
```

### Step 1: Layout and Structure
**Invoke `Skill(pl-deck-layout)`**
Establishes slide containers, backgrounds (hero gradient for title, grid+glow for content), centering, logo placement, navigation, and pixel corner accents.

### Step 2: Components
**Invoke `Skill(pl-deck-components)`**
Builds cards, SVG diagrams (with proper circles and arrow markers), tables, metrics, step numbers, blockquotes, and dividers. Does NOT place icons (that happens in Step 3).

### Step 3: Icons
**Invoke `Skill(pl-deck-icons)`**
Reads slide content (headings and body text), matches concepts to geometric abstract icons from the curated library using semantic tags, and places gradient+wireframe icons in cards and sections. Icons use the `.icon-draw` class for GSAP integration.

### Step 4: Diagram Quality Pass
Review every SVG diagram against the diagram quality rules in `pl-deck-components`. Each diagram must tell a clear visual story that a reader grasps in under 5 seconds. Run the Diagram Quality Checklist (below) on every diagram before proceeding.

### Step 5: Animation
**Invoke `Skill(pl-deck-animate)`**
Adds GSAP timeline choreography, slot machine number count-ups, icon draw-on animations (wireframe strokes + gradient fade-in), and transition locking.

### Step 6: Imagery (if needed)
**Invoke `Skill(deck-imagery)`**
Generates AI imagery with the brand's frosted-glass pixelation and ASCII overlay treatment.

---

## Slide Templates

Use these blueprints to structure slide content. Pick the template that matches the deck type, then adapt the copy to the specific topic.

### Capabilities Deck (5-7 slides)

| Slide | Type | Heading Pattern | Components |
|-------|------|----------------|------------|
| 0 | Hero | (logo only) | WebGL gradient, ASCII overlay |
| 1 | Statement | "What We [Verb]" | Label, heading, body text, 3-column card grid |
| 2 | Evidence | "[Topic] First" or "How We [Verb]" | Label, heading, body, steps with icons |
| 3 | Metrics | "Measurable [Noun]" | Label, heading, body, stat grid with slot-machine numbers |
| 4 | CTA | "Start [Verb]ing" | Label, heading, body, CTA button |

### Case Study Deck (6-8 slides)

| Slide | Type | Heading Pattern | Components |
|-------|------|----------------|------------|
| 0 | Hero | (logo only) | WebGL gradient, ASCII overlay |
| 1 | Context | "The Challenge" | Label, heading, body, blockquote from client |
| 2 | Diagnosis | "What We Found" | Label, heading, diagram (before state) |
| 3 | Approach | "Our Approach" | Label, heading, steps with icons |
| 4 | Solution | "What We Built" | Label, heading, diagram (after state), imagery |
| 5 | Results | "The Impact" | Label, heading, stat grid with slot-machine numbers |
| 6 | CTA | "Your Turn" | Label, heading, body, CTA button |

### Proposal Deck (5-6 slides)

| Slide | Type | Heading Pattern | Components |
|-------|------|----------------|------------|
| 0 | Hero | (logo only) | WebGL gradient, ASCII overlay |
| 1 | Understanding | "Your [Problem]" | Label, heading, body, blockquote |
| 2 | Approach | "How We Solve This" | Label, heading, steps or diagram |
| 3 | Timeline | "The Roadmap" | Label, heading, timeline diagram or phased steps |
| 4 | Investment | "Pricing" or "The Investment" | Label, heading, table or stat grid |
| 5 | CTA | "Next Steps" | Label, heading, body, CTA button |

### Slide Type Reference

**Statement slides:** One clear idea. Heading + body + supporting component (cards, steps, or diagram). Max 3 cards or 4 steps per slide.

**Evidence slides:** Back up a claim. Steps with icons, or a before/after diagram. The fingerprint icon works well for security; agent-swarm for AI capabilities; globe-spin for reach/scale.

**Metrics slides:** 3 stat columns with slot-machine count-up numbers. Each stat: one `.highlight-number` + one `.stat-label`. Keep labels under 5 words.

**CTA slides:** Short heading, 1-2 sentences of body, single CTA button. Pair with rocket-ascent or concentric-target icon.

### Copy Patterns

**Headings:** "[Adjective] [Noun]" or "[Verb] [Object]". One keyword in `<strong>` for blue emphasis. Under 10 words.
- Good: "Measurable **Results**", "Start **Building**", "Security **First**"
- Bad: "How We Help Companies Integrate AI Into Their Workflows"

**Body text:** One specific claim per paragraph. No filler. Max 2 sentences.
- Good: "Our clients see 73% reduction in manual processing within 90 days of deployment."
- Bad: "We help companies achieve better results through innovative AI solutions."

**Stat labels:** ALL CAPS monospace. Action-oriented.
- Good: "REDUCTION IN MANUAL PROCESSING"
- Bad: "Percentage decrease"

---

## Post-Build Verification Checklist

After generating every slide, verify against this checklist. Do not skip.

### Visual Quality
- [ ] Slide content uses brand palette only: blue, red, greys. No rainbow.
- [ ] Step numbers ALL the same color (blue), plain text (no circles/backgrounds).
- [ ] No em dashes in any text.
- [ ] **Boxes are allowed for emphasis** (see pl-deck-components Boxes section). Use subtle tinted backgrounds (`rgba(0,0,255,0.04)` blue, `rgba(220,38,38,0.04)` red, `rgba(0,0,0,0.025)` neutral) with 8-12px border-radius and 1px solid 20% borders. Default to dashed dividers for soft grouping; reserve boxes for paired contrast or callouts.
- [ ] Diagrams have fewer elements than limits (see pl-deck-components).
- [ ] All SVG text at least 8px.
- [ ] White space is generous. Nothing cramped. Less is more.

### Layout
- [ ] Content **vertically centred** in the slide area (`justify-content: center`), text inside left-aligned.
- [ ] Padding: 48px top, 100px sides, 56px bottom. Content max-width 960px.
- [ ] Card grids use vertical dashed line dividers between columns (or boxes for paired contrast).
- [ ] Footer pinned to bottom.

### Brand Compliance
- [ ] Icons are from the `pl-deck-icons` library (not improvised). Geometric/abstract, not literal pictograms.
- [ ] Icon wireframe strokes use `stroke: #0000FF`. Gradient fills are subtle (8-15% opacity).
- [ ] No icon repeated on consecutive slides.
- [ ] Labels monospace, uppercase, blue at 35% opacity.
- [ ] Quotes have a blue left border (2px solid `#0000FF`), or red if the quote represents an anti-pattern.
- [ ] Inline tag pills (`.tag-good` / `.tag-bad`) are allowed for compact good/bad labels; plain colored text is also fine for restraint.

### Diagram Quality (run on EVERY SVG diagram)
- [ ] **5-second test**: Can a reader understand the main point in 5 seconds?
- [ ] **One clear story**: Diagram communicates exactly one idea. If it needs explanation, simplify.
- [ ] **Visual hierarchy**: The most important element is visually dominant (larger, bolder, or more contrast). Secondary elements recede.
- [ ] **Varied node sizes**: Nodes are NOT all the same size. Important nodes are larger. Minor nodes are smaller. Size = importance.
- [ ] **Breathing room**: At least 40px between nodes. Nothing cramped or overlapping.
- [ ] **Clear flow direction**: Reader's eye follows an obvious path (top-to-bottom, left-to-right, or center-outward).
- [ ] **Labels are readable**: All text at least 9px. Critical labels at 11px+. No text inside tiny circles.
- [ ] **Connectors are purposeful**: Every line connects two things that need connecting. No decorative spaghetti.
- [ ] **Before/after or problem/solution structure**: Diagrams showing transformation should have a clear visual divide between the old state and new state.
- [ ] **Not a bulleted list in disguise**: If the diagram could be replaced by 3 bullet points with no loss of understanding, it should be bullet points instead.

### Animation (HTML decks)
- [ ] Elements initially hidden (`opacity: 0`).
- [ ] GSAP timeline follows choreography table.
- [ ] Stat numbers use slot-machine count-up.
- [ ] Icons use draw-on stroke animation.

### Copy
- [ ] No em dashes anywhere.
- [ ] Headings concise (under 10 words).
- [ ] Body text specific, not generic.
