# PL Deck Icon Library

28 geometric abstract icons with gradient fill + wireframe overlay. Copy SVG code verbatim. Never modify paths.

## Gradient Palette

Each icon pairs two muted brand tones. The gradient blob sits behind the wireframe at low opacity.

| Pairing | From | To | Used for |
|---------|------|----|----------|
| Blue-Orchid | `rgba(0,0,255,0.10)` | `rgba(186,85,211,0.04)` | AI, Intelligence, General |
| Blue-Turquoise | `rgba(0,0,255,0.08)` | `rgba(64,224,208,0.05)` | Strategy, Vision |
| Orchid-Salmon | `rgba(186,85,211,0.08)` | `rgba(255,160,122,0.05)` | Process, Transformation |
| Blue-Green | `rgba(0,0,255,0.08)` | `rgba(185,233,121,0.05)` | Connection, Integration |
| Turquoise-Green | `rgba(64,224,208,0.08)` | `rgba(185,233,121,0.05)` | Growth, Scale |
| Blue-Blue | `rgba(0,0,255,0.12)` | `rgba(0,0,255,0.03)` | Security, Trust |
| Orchid-Salmon | `rgba(186,85,211,0.06)` | `rgba(255,160,122,0.06)` | Teams, People |

---

## Category 1: AI and Intelligence

### neural-constellation
**Primary:** intelligence
**Tags:** ai, machine-learning, neural-network, deep-learning, algorithms, model | technical, analytical
**Animation:** draw-on + pulse
**Ported from:** PL website AsciiIcon `expert`

```html
<svg class="icon-draw icon-pulse" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <radialGradient id="grad-neural" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgb(0,0,255)" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="rgb(186,85,211)" stop-opacity="0.04"/>
    </radialGradient>
  </defs>
  <circle class="icon-gradient" cx="24" cy="24" r="20" fill="url(#grad-neural)"/>
  <circle cx="14" cy="14" r="1.5" fill="#0000FF"/>
  <circle cx="34" cy="14" r="1.5" fill="#0000FF"/>
  <circle cx="24" cy="34" r="1.5" fill="#0000FF"/>
  <circle cx="24" cy="20" r="1.5" fill="#0000FF"/>
  <path d="M14 14L24 20M34 14L24 20M24 20L24 34M14 14L24 34M34 14L24 34" stroke="#0000FF" stroke-width="1" fill="none" stroke-dasharray="3 3" stroke-linecap="round"/>
</svg>
```

---

### atom-orbital
**Primary:** technology
**Tags:** ai, tech, science, research, computing, quantum, system | technical, futuristic
**Animation:** draw-on + orbit

```html
<svg class="icon-draw icon-orbit" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <radialGradient id="grad-atom" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgb(0,0,255)" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="rgb(186,85,211)" stop-opacity="0.04"/>
    </radialGradient>
  </defs>
  <circle class="icon-gradient" cx="24" cy="24" r="20" fill="url(#grad-atom)"/>
  <ellipse class="orbit-path" cx="24" cy="24" rx="18" ry="8" stroke="#0000FF" stroke-width="1.5" fill="none" stroke-linecap="round" transform="rotate(-30 24 24)"/>
  <ellipse class="orbit-path" cx="24" cy="24" rx="18" ry="8" stroke="#0000FF" stroke-width="1.5" fill="none" stroke-linecap="round" transform="rotate(30 24 24)"/>
  <circle cx="24" cy="24" r="3" fill="#0000FF" opacity="0.15"/>
  <circle cx="24" cy="24" r="1.5" fill="#0000FF"/>
</svg>
```

---

### starburst-spark
**Primary:** innovation
**Tags:** idea, breakthrough, insight, spark, creative, new, discover | energetic, dynamic
**Animation:** draw-on + pulse

```html
<svg class="icon-draw icon-pulse" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <radialGradient id="grad-starburst" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgb(0,0,255)" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="rgb(186,85,211)" stop-opacity="0.04"/>
    </radialGradient>
  </defs>
  <circle class="icon-gradient" cx="24" cy="24" r="18" fill="url(#grad-starburst)"/>
  <path d="M24 6L26 20L42 18L28 24L42 30L26 28L24 42L22 28L6 30L20 24L6 18L22 20Z" stroke="#0000FF" stroke-width="1.5" fill="none" stroke-linejoin="round"/>
  <circle cx="24" cy="24" r="2" fill="#0000FF" opacity="0.2"/>
</svg>
```

---

### data-flow
**Primary:** data
**Tags:** pipeline, streaming, etl, database, analytics, information, ingestion | technical, structured
**Animation:** draw-on

```html
<svg class="icon-draw" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <linearGradient id="grad-dataflow" x1="0" y1="0" x2="48" y2="48">
      <stop offset="0%" stop-color="rgb(0,0,255)" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="rgb(186,85,211)" stop-opacity="0.04"/>
    </linearGradient>
  </defs>
  <rect class="icon-gradient" x="6" y="10" width="36" height="28" rx="14" fill="url(#grad-dataflow)"/>
  <line x1="10" y1="20" x2="32" y2="20" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="4 3"/>
  <line x1="10" y1="24" x2="32" y2="24" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="4 3"/>
  <line x1="10" y1="28" x2="32" y2="28" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="4 3"/>
  <path d="M34 20L38 24L34 28" stroke="#0000FF" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

---

### brain-circuit
**Primary:** intelligence
**Tags:** cognitive, thinking, reasoning, smart, logic, decision, llm, agent | complex, analytical
**Animation:** draw-on + breathe

```html
<svg class="icon-draw icon-breathe" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <radialGradient id="grad-brain" cx="50%" cy="45%" r="50%">
      <stop offset="0%" stop-color="rgb(0,0,255)" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="rgb(186,85,211)" stop-opacity="0.04"/>
    </radialGradient>
  </defs>
  <circle class="icon-gradient" cx="24" cy="22" r="18" fill="url(#grad-brain)"/>
  <path d="M12 28C12 16 18 8 24 8C30 8 36 16 36 28" stroke="#0000FF" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <path d="M16 22L24 18M24 18L32 22M20 28L24 24M24 24L28 28" stroke="#0000FF" stroke-width="1" fill="none" stroke-dasharray="3 3" stroke-linecap="round"/>
  <circle cx="24" cy="18" r="1.5" fill="#0000FF"/>
  <circle cx="16" cy="22" r="1.5" fill="#0000FF"/>
  <circle cx="32" cy="22" r="1.5" fill="#0000FF"/>
</svg>
```

---

## Category 2: Strategy and Vision

### concentric-target
**Primary:** focus
**Tags:** goals, target, alignment, priority, objective, kpi, metrics, okr | precise, centered
**Animation:** draw-on

```html
<svg class="icon-draw" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <radialGradient id="grad-target" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgb(0,0,255)" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="rgb(64,224,208)" stop-opacity="0.05"/>
    </radialGradient>
  </defs>
  <circle class="icon-gradient" cx="24" cy="24" r="20" fill="url(#grad-target)"/>
  <circle cx="24" cy="24" r="18" stroke="#0000FF" stroke-width="1.5" fill="none"/>
  <circle cx="24" cy="24" r="11" stroke="#0000FF" stroke-width="1.5" fill="none"/>
  <circle cx="24" cy="24" r="4" stroke="#0000FF" stroke-width="1.5" fill="none"/>
  <circle cx="24" cy="24" r="1.5" fill="#0000FF"/>
</svg>
```

---

### compass-cross
**Primary:** direction
**Tags:** strategy, navigate, roadmap, path, guide, plan, north-star | purposeful, clear
**Animation:** draw-on

```html
<svg class="icon-draw" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <radialGradient id="grad-compass" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgb(0,0,255)" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="rgb(64,224,208)" stop-opacity="0.05"/>
    </radialGradient>
  </defs>
  <circle class="icon-gradient" cx="24" cy="24" r="20" fill="url(#grad-compass)"/>
  <circle cx="24" cy="24" r="18" stroke="#0000FF" stroke-width="1.5" fill="none"/>
  <line x1="24" y1="4" x2="24" y2="14" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="24" y1="34" x2="24" y2="44" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="4" y1="24" x2="14" y2="24" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="34" y1="24" x2="44" y2="24" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round"/>
  <circle cx="24" cy="24" r="2" fill="#0000FF" opacity="0.2"/>
</svg>
```

---

### horizon-layers
**Primary:** vision
**Tags:** future, roadmap, long-term, horizon, phases, timeline, milestones | expansive, forward
**Animation:** draw-on

```html
<svg class="icon-draw" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <linearGradient id="grad-horizon" x1="0" y1="0" x2="0" y2="48">
      <stop offset="0%" stop-color="rgb(64,224,208)" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="rgb(0,0,255)" stop-opacity="0.04"/>
    </linearGradient>
  </defs>
  <ellipse class="icon-gradient" cx="24" cy="26" rx="22" ry="16" fill="url(#grad-horizon)"/>
  <line x1="6" y1="32" x2="42" y2="32" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="10" y1="26" x2="38" y2="26" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
  <line x1="14" y1="20" x2="34" y2="20" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round" opacity="0.35"/>
  <line x1="18" y1="14" x2="30" y2="14" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round" opacity="0.15"/>
</svg>
```

---

### prism-triangle
**Primary:** clarity
**Tags:** framework, model, lens, perspective, analysis, insight, structure | sharp, analytical
**Animation:** draw-on

```html
<svg class="icon-draw" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <linearGradient id="grad-prism" x1="24" y1="6" x2="24" y2="42" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="rgb(0,0,255)" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="rgb(64,224,208)" stop-opacity="0.05"/>
    </linearGradient>
  </defs>
  <polygon class="icon-gradient" points="24,6 42,40 6,40" fill="url(#grad-prism)"/>
  <polygon points="24,6 42,40 6,40" stroke="#0000FF" stroke-width="1.5" fill="none" stroke-linejoin="round"/>
  <line x1="24" y1="6" x2="18" y2="40" stroke="#0000FF" stroke-width="1" fill="none" stroke-dasharray="3 3" opacity="0.5"/>
</svg>
```

---

## Category 3: Process and Transformation

### orbital-arrows
**Primary:** transformation
**Tags:** transform, change, agile, iterate, cycle, continuous, devops, cicd | dynamic, circular
**Animation:** draw-on + orbit
**Ported from:** PL website AsciiIcon `transform`

```html
<svg class="icon-draw icon-orbit" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <radialGradient id="grad-orbital" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgb(186,85,211)" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="rgb(255,160,122)" stop-opacity="0.05"/>
    </radialGradient>
  </defs>
  <circle class="icon-gradient" cx="24" cy="24" r="20" fill="url(#grad-orbital)"/>
  <path d="M24 8A16 16 0 0 1 40 24" stroke="#0000FF" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <path d="M40 24A16 16 0 0 1 24 40" stroke="#0000FF" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <path d="M24 40A16 16 0 0 1 8 24" stroke="#0000FF" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <path d="M8 24A16 16 0 0 1 24 8" stroke="#0000FF" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <polygon points="40,24 36,21 36,27" fill="#0000FF"/>
  <polygon points="8,24 12,21 12,27" fill="#0000FF"/>
</svg>
```

---

### spiral-growth
**Primary:** iteration
**Tags:** iterate, improve, refine, continuous, evolve, optimize, learn | organic, progressive
**Animation:** draw-on

```html
<svg class="icon-draw" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <radialGradient id="grad-spiral" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgb(186,85,211)" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="rgb(255,160,122)" stop-opacity="0.05"/>
    </radialGradient>
  </defs>
  <circle class="icon-gradient" cx="24" cy="24" r="20" fill="url(#grad-spiral)"/>
  <path d="M24 22C24 20 26 18 28 18C32 18 34 22 34 26C34 32 28 36 22 36C14 36 10 28 10 20C10 10 18 4 28 4" stroke="#0000FF" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <circle cx="24" cy="22" r="1.5" fill="#0000FF"/>
</svg>
```

---

### pipeline-nodes
**Primary:** process
**Tags:** workflow, pipeline, step, sequence, flow, stages, funnel, operations | structured, sequential
**Animation:** draw-on

```html
<svg class="icon-draw" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <linearGradient id="grad-pipeline" x1="0" y1="24" x2="48" y2="24" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="rgb(186,85,211)" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="rgb(255,160,122)" stop-opacity="0.05"/>
    </linearGradient>
  </defs>
  <rect class="icon-gradient" x="4" y="14" width="40" height="20" rx="10" fill="url(#grad-pipeline)"/>
  <path d="M10 24C14 18 18 18 24 24C30 30 34 30 38 24" stroke="#0000FF" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <circle cx="10" cy="24" r="2.5" stroke="#0000FF" stroke-width="1.5" fill="none"/>
  <circle cx="24" cy="24" r="2.5" stroke="#0000FF" stroke-width="1.5" fill="none"/>
  <circle cx="38" cy="24" r="2.5" stroke="#0000FF" stroke-width="1.5" fill="none"/>
</svg>
```

---

### filter-funnel
**Primary:** refinement
**Tags:** filter, qualify, reduce, prioritize, triage, sort, select | focused, reductive
**Animation:** draw-on

```html
<svg class="icon-draw" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <linearGradient id="grad-funnel" x1="24" y1="8" x2="24" y2="40" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="rgb(186,85,211)" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="rgb(255,160,122)" stop-opacity="0.04"/>
    </linearGradient>
  </defs>
  <path class="icon-gradient" d="M6 12H42L28 28V38L20 42V28Z" fill="url(#grad-funnel)"/>
  <line x1="6" y1="12" x2="42" y2="12" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="12" y1="20" x2="36" y2="20" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="18" y1="28" x2="30" y2="28" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="22" y1="36" x2="26" y2="36" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round"/>
</svg>
```

---

## Category 4: Connection and Integration

### venn-overlap
**Primary:** synergy
**Tags:** integration, merge, combine, overlap, collaboration, partnership, unify | harmonious, balanced
**Animation:** draw-on
**Ported from:** PL website StepIcons Venn

```html
<svg class="icon-draw" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <radialGradient id="grad-venn-l" cx="35%" cy="50%" r="45%">
      <stop offset="0%" stop-color="rgb(0,0,255)" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="rgb(0,0,255)" stop-opacity="0.02"/>
    </radialGradient>
    <radialGradient id="grad-venn-r" cx="65%" cy="50%" r="45%">
      <stop offset="0%" stop-color="rgb(185,233,121)" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="rgb(185,233,121)" stop-opacity="0.02"/>
    </radialGradient>
  </defs>
  <circle class="icon-gradient" cx="18" cy="24" r="14" fill="url(#grad-venn-l)"/>
  <circle class="icon-gradient" cx="30" cy="24" r="14" fill="url(#grad-venn-r)"/>
  <circle cx="18" cy="24" r="14" stroke="#0000FF" stroke-width="1.5" fill="none"/>
  <circle cx="30" cy="24" r="14" stroke="#0000FF" stroke-width="1.5" fill="none"/>
</svg>
```

---

### hub-spoke
**Primary:** network
**Tags:** network, connected, hub, ecosystem, platform, api, microservices, distributed | interconnected, central
**Animation:** draw-on + breathe

```html
<svg class="icon-draw icon-breathe" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <radialGradient id="grad-hub" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgb(0,0,255)" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="rgb(185,233,121)" stop-opacity="0.05"/>
    </radialGradient>
  </defs>
  <circle class="icon-gradient" cx="24" cy="24" r="20" fill="url(#grad-hub)"/>
  <circle cx="24" cy="24" r="4" stroke="#0000FF" stroke-width="1.5" fill="none"/>
  <line x1="24" y1="8" x2="24" y2="20" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="24" y1="28" x2="24" y2="40" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="8" y1="24" x2="20" y2="24" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="28" y1="24" x2="40" y2="24" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round"/>
  <circle cx="24" cy="8" r="2" fill="#0000FF"/>
  <circle cx="24" cy="40" r="2" fill="#0000FF"/>
  <circle cx="8" cy="24" r="2" fill="#0000FF"/>
  <circle cx="40" cy="24" r="2" fill="#0000FF"/>
</svg>
```

---

### chain-links
**Primary:** integration
**Tags:** integrate, connect, link, bridge, join, api, middleware, compose | linked, unified
**Animation:** draw-on

```html
<svg class="icon-draw" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <radialGradient id="grad-chain" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgb(0,0,255)" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="rgb(185,233,121)" stop-opacity="0.05"/>
    </radialGradient>
  </defs>
  <circle class="icon-gradient" cx="24" cy="24" r="20" fill="url(#grad-chain)"/>
  <ellipse cx="18" cy="24" rx="10" ry="7" stroke="#0000FF" stroke-width="1.5" fill="none" transform="rotate(-30 18 24)"/>
  <ellipse cx="30" cy="24" rx="10" ry="7" stroke="#0000FF" stroke-width="1.5" fill="none" transform="rotate(30 30 24)"/>
</svg>
```

---

### bridge-arc
**Primary:** bridging
**Tags:** bridge, connect, gap, transition, migrate, handoff, onboard | connecting, spanning
**Animation:** draw-on

```html
<svg class="icon-draw" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <radialGradient id="grad-bridge" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="rgb(0,0,255)" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="rgb(185,233,121)" stop-opacity="0.04"/>
    </radialGradient>
  </defs>
  <ellipse class="icon-gradient" cx="24" cy="22" rx="20" ry="16" fill="url(#grad-bridge)"/>
  <path d="M8 34C8 18 16 10 24 10C32 10 40 18 40 34" stroke="#0000FF" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <line x1="8" y1="26" x2="8" y2="38" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="40" y1="26" x2="40" y2="38" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round"/>
  <circle cx="8" cy="34" r="1.5" fill="#0000FF"/>
  <circle cx="40" cy="34" r="1.5" fill="#0000FF"/>
</svg>
```

---

## Category 5: Growth and Scale

### ascending-bars
**Primary:** performance
**Tags:** growth, metrics, kpi, revenue, roi, results, performance, progress, chart | measurable, upward
**Animation:** draw-on

```html
<svg class="icon-draw" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <linearGradient id="grad-bars" x1="0" y1="42" x2="0" y2="8" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="rgb(64,224,208)" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="rgb(185,233,121)" stop-opacity="0.05"/>
    </linearGradient>
  </defs>
  <rect class="icon-gradient" x="4" y="8" width="40" height="34" rx="4" fill="url(#grad-bars)"/>
  <line x1="12" y1="38" x2="12" y2="26" stroke="#0000FF" stroke-width="3" stroke-linecap="round"/>
  <line x1="20" y1="38" x2="20" y2="20" stroke="#0000FF" stroke-width="3" stroke-linecap="round"/>
  <line x1="28" y1="38" x2="28" y2="14" stroke="#0000FF" stroke-width="3" stroke-linecap="round"/>
  <line x1="36" y1="38" x2="36" y2="10" stroke="#0000FF" stroke-width="3" stroke-linecap="round"/>
</svg>
```

---

### expanding-rings
**Primary:** scale
**Tags:** scale, expand, grow, reach, amplify, broadcast, awareness | expansive, radiating
**Animation:** draw-on + breathe
**Ported from:** PL website BounceRings

```html
<svg class="icon-draw icon-breathe" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <radialGradient id="grad-rings" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgb(64,224,208)" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="rgb(185,233,121)" stop-opacity="0.04"/>
    </radialGradient>
  </defs>
  <circle class="icon-gradient" cx="24" cy="24" r="22" fill="url(#grad-rings)"/>
  <circle cx="24" cy="24" r="6" stroke="#0000FF" stroke-width="1.5" fill="none"/>
  <circle cx="24" cy="24" r="13" stroke="#0000FF" stroke-width="1.5" fill="none" stroke-dasharray="4 3"/>
  <circle cx="24" cy="24" r="20" stroke="#0000FF" stroke-width="1.5" fill="none" stroke-dasharray="4 3" opacity="0.5"/>
  <circle cx="24" cy="24" r="2" fill="#0000FF"/>
</svg>
```

---

### rocket-ascent
**Primary:** launch
**Tags:** launch, ship, deploy, release, go-live, mvp, startup, speed | energetic, upward
**Animation:** draw-on
**Ported from:** PL website AsciiIcon `builds`

```html
<svg class="icon-draw" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <linearGradient id="grad-rocket" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="rgb(64,224,208)" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="rgb(185,233,121)" stop-opacity="0.04"/>
    </linearGradient>
  </defs>
  <ellipse class="icon-gradient" cx="24" cy="22" rx="14" ry="20" fill="url(#grad-rocket)"/>
  <path d="M24 6L30 24H18Z" stroke="#0000FF" stroke-width="1.5" fill="none" stroke-linejoin="round"/>
  <line x1="22" y1="28" x2="20" y2="36" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="3 2"/>
  <line x1="26" y1="28" x2="28" y2="36" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="3 2"/>
  <circle cx="24" cy="16" r="2" stroke="#0000FF" stroke-width="1" fill="none"/>
</svg>
```

---

### stacked-ellipses
**Primary:** layers
**Tags:** stack, layers, platform, architecture, infrastructure, foundation, tiers | layered, stable
**Animation:** draw-on
**Ported from:** PL website StepIcons bounce

```html
<svg class="icon-draw" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <linearGradient id="grad-stacked" x1="24" y1="10" x2="24" y2="40" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="rgb(64,224,208)" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="rgb(185,233,121)" stop-opacity="0.05"/>
    </linearGradient>
  </defs>
  <ellipse class="icon-gradient" cx="24" cy="26" rx="18" ry="16" fill="url(#grad-stacked)"/>
  <ellipse cx="24" cy="34" rx="16" ry="6" stroke="#0000FF" stroke-width="1.5" fill="none"/>
  <ellipse cx="24" cy="24" rx="16" ry="6" stroke="#0000FF" stroke-width="1.5" fill="none"/>
  <ellipse cx="24" cy="14" rx="16" ry="6" stroke="#0000FF" stroke-width="1.5" fill="none"/>
</svg>
```

---

## Category 6: Security and Trust

### shield-check
**Primary:** protection
**Tags:** security, compliance, trust, safe, protect, governance, risk, audit | solid, reliable
**Animation:** draw-on

```html
<svg class="icon-draw" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <radialGradient id="grad-shield" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="rgb(0,0,255)" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="rgb(0,0,255)" stop-opacity="0.03"/>
    </radialGradient>
  </defs>
  <path class="icon-gradient" d="M24 4L40 14V26C40 34 32 42 24 44C16 42 8 34 8 26V14Z" fill="url(#grad-shield)"/>
  <path d="M24 4L40 14V26C40 34 32 42 24 44C16 42 8 34 8 26V14Z" stroke="#0000FF" stroke-width="1.5" fill="none" stroke-linejoin="round"/>
  <path d="M18 24L22 28L30 18" stroke="#0000FF" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

---

### lock-keyhole
**Primary:** security
**Tags:** lock, encrypt, private, access, authentication, permission, secure | locked, protected
**Animation:** draw-on

```html
<svg class="icon-draw" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <radialGradient id="grad-lock" cx="50%" cy="55%" r="50%">
      <stop offset="0%" stop-color="rgb(0,0,255)" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="rgb(0,0,255)" stop-opacity="0.03"/>
    </radialGradient>
  </defs>
  <rect class="icon-gradient" x="10" y="20" width="28" height="22" rx="4" fill="url(#grad-lock)"/>
  <rect x="10" y="20" width="28" height="22" rx="4" stroke="#0000FF" stroke-width="1.5" fill="none"/>
  <path d="M16 20V14C16 9 19 6 24 6C29 6 32 9 32 14V20" stroke="#0000FF" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <circle cx="24" cy="30" r="3" stroke="#0000FF" stroke-width="1.5" fill="none"/>
  <line x1="24" y1="33" x2="24" y2="37" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round"/>
</svg>
```

---

### nested-diamonds
**Primary:** structure
**Tags:** framework, governance, methodology, hierarchy, system, architecture, principles | layered, structured
**Animation:** draw-on

```html
<svg class="icon-draw" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <radialGradient id="grad-diamonds" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgb(0,0,255)" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="rgb(0,0,255)" stop-opacity="0.03"/>
    </radialGradient>
  </defs>
  <polygon class="icon-gradient" points="24,4 44,24 24,44 4,24" fill="url(#grad-diamonds)"/>
  <polygon points="24,4 44,24 24,44 4,24" stroke="#0000FF" stroke-width="1.5" fill="none" stroke-linejoin="round"/>
  <polygon points="24,14 34,24 24,34 14,24" stroke="#0000FF" stroke-width="1.5" fill="none" stroke-linejoin="round"/>
  <circle cx="24" cy="24" r="1.5" fill="#0000FF"/>
</svg>
```

---

## Category 7: Teams and People

### constellation-cluster
**Primary:** team
**Tags:** team, people, organization, talent, collaboration, culture, hiring, workforce | human, connected
**Animation:** draw-on + breathe

```html
<svg class="icon-draw icon-breathe" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <radialGradient id="grad-cluster" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgb(186,85,211)" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="rgb(255,160,122)" stop-opacity="0.06"/>
    </radialGradient>
  </defs>
  <circle class="icon-gradient" cx="24" cy="24" r="20" fill="url(#grad-cluster)"/>
  <circle cx="24" cy="18" r="2" fill="#0000FF"/>
  <circle cx="14" cy="28" r="2" fill="#0000FF"/>
  <circle cx="34" cy="28" r="2" fill="#0000FF"/>
  <circle cx="18" cy="36" r="2" fill="#0000FF"/>
  <circle cx="30" cy="36" r="2" fill="#0000FF"/>
  <path d="M24 18L14 28M24 18L34 28M14 28L18 36M34 28L30 36M18 36L30 36" stroke="#0000FF" stroke-width="1" fill="none" stroke-dasharray="3 3" stroke-linecap="round"/>
</svg>
```

---

### parallel-paths
**Primary:** collaboration
**Tags:** parallel, together, align, partner, co-create, dual, side-by-side | cooperative, paired
**Animation:** draw-on

```html
<svg class="icon-draw" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <linearGradient id="grad-parallel" x1="0" y1="0" x2="48" y2="48">
      <stop offset="0%" stop-color="rgb(186,85,211)" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="rgb(255,160,122)" stop-opacity="0.06"/>
    </linearGradient>
  </defs>
  <rect class="icon-gradient" x="8" y="4" width="32" height="40" rx="16" fill="url(#grad-parallel)"/>
  <path d="M18 8C18 14 14 18 14 24C14 30 18 34 18 40" stroke="#0000FF" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <path d="M30 8C30 14 34 18 34 24C34 30 30 34 30 40" stroke="#0000FF" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <circle cx="18" cy="24" r="1.5" fill="#0000FF"/>
  <circle cx="30" cy="24" r="1.5" fill="#0000FF"/>
</svg>
```

---

## Category 8: General Abstract

### wireframe-globe
**Primary:** global
**Tags:** global, international, world, market, expand, reach, geographic, enterprise | broad, expansive
**Animation:** draw-on + orbit

```html
<svg class="icon-draw icon-orbit" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <radialGradient id="grad-globe" cx="45%" cy="40%" r="50%">
      <stop offset="0%" stop-color="rgb(0,0,255)" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="rgb(186,85,211)" stop-opacity="0.04"/>
    </radialGradient>
  </defs>
  <circle class="icon-gradient" cx="24" cy="24" r="20" fill="url(#grad-globe)"/>
  <circle cx="24" cy="24" r="18" stroke="#0000FF" stroke-width="1.5" fill="none"/>
  <ellipse cx="24" cy="24" rx="8" ry="18" stroke="#0000FF" stroke-width="1" fill="none"/>
  <line x1="6" y1="24" x2="42" y2="24" stroke="#0000FF" stroke-width="1" stroke-dasharray="3 3"/>
</svg>
```

---

### radial-sunburst
**Primary:** energy
**Tags:** energy, impact, power, influence, highlight, illuminate, standout, value | bright, radiating
**Animation:** draw-on + pulse

```html
<svg class="icon-draw icon-pulse" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <radialGradient id="grad-sunburst" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgb(0,0,255)" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="rgb(186,85,211)" stop-opacity="0.04"/>
    </radialGradient>
  </defs>
  <circle class="icon-gradient" cx="24" cy="24" r="20" fill="url(#grad-sunburst)"/>
  <circle cx="24" cy="24" r="6" stroke="#0000FF" stroke-width="1.5" fill="none"/>
  <line x1="24" y1="4" x2="24" y2="14" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="24" y1="34" x2="24" y2="44" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="4" y1="24" x2="14" y2="24" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="34" y1="24" x2="44" y2="24" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="10" y1="10" x2="17" y2="17" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="31" y1="31" x2="38" y2="38" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="38" y1="10" x2="31" y2="17" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="17" y1="31" x2="10" y2="38" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round"/>
</svg>
```
