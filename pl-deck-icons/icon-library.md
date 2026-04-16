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

### agent-swarm
**Primary:** agents
**Tags:** ai-agents, autonomous, multi-agent, swarm, orchestration, agentic, automation, agentic-ai, intelligence, collaborative | dynamic, orbital
**Animation:** agent-orbit (6 dots orbit 9 overlapping circles at 3 different speeds and 2 directions, staggered with negative delays so all agents spawn mid-orbit — continuous linear motion, never syncs)
**Stroke:** Vertical gradient `#0000FF` (top) → `#1a1a1a` (bottom), thin stroke-width="0.75"
**Geometry:** 3×3 grid of overlapping circles (spacing 12, radius 8) forming vesica-piscis petal intersections

```html
<svg class="icon-agent-swarm" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <linearGradient id="stroke-grad-swarm" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0000FF"/>
      <stop offset="100%" stop-color="#1a1a1a"/>
    </linearGradient>
  </defs>
  <g class="icon-inner">
    <!-- 9 overlapping tracks -->
    <g stroke="url(#stroke-grad-swarm)" stroke-width="0.75" fill="none">
      <circle cx="12" cy="12" r="8"/>
      <circle cx="24" cy="12" r="8"/>
      <circle cx="36" cy="12" r="8"/>
      <circle cx="12" cy="24" r="8"/>
      <circle cx="24" cy="24" r="8"/>
      <circle cx="36" cy="24" r="8"/>
      <circle cx="12" cy="36" r="8"/>
      <circle cx="24" cy="36" r="8"/>
      <circle cx="36" cy="36" r="8"/>
    </g>
    <!-- 6 autonomous agents -->
    <g class="agent-orbit" style="transform-origin: 12px 12px; animation-delay: -2.1s;">
      <circle cx="12" cy="4" r="1.5" fill="url(#stroke-grad-swarm)"/>
    </g>
    <g class="agent-orbit-rev" style="transform-origin: 36px 12px; animation-delay: -0.8s;">
      <circle cx="36" cy="4" r="1.5" fill="url(#stroke-grad-swarm)"/>
    </g>
    <g class="agent-orbit" style="transform-origin: 12px 24px; animation-delay: -3.5s;">
      <circle cx="12" cy="16" r="1.5" fill="url(#stroke-grad-swarm)"/>
    </g>
    <g class="agent-orbit-fast" style="transform-origin: 24px 24px; animation-delay: -1.2s;">
      <circle cx="24" cy="16" r="1.5" fill="url(#stroke-grad-swarm)"/>
    </g>
    <g class="agent-orbit" style="transform-origin: 36px 24px; animation-delay: -4.2s;">
      <circle cx="36" cy="16" r="1.5" fill="url(#stroke-grad-swarm)"/>
    </g>
    <g class="agent-orbit-rev" style="transform-origin: 24px 36px; animation-delay: -2.7s;">
      <circle cx="24" cy="28" r="1.5" fill="url(#stroke-grad-swarm)"/>
    </g>
  </g>
</svg>
```

**Required CSS:**
```css
.agent-orbit      { animation: agentSpin    6s linear infinite; }
.agent-orbit-rev  { animation: agentSpinRev 7s linear infinite; }
.agent-orbit-fast { animation: agentSpin    4s linear infinite; }

@keyframes agentSpin    { from { transform: rotate(0deg);   } to { transform: rotate(360deg); } }
@keyframes agentSpinRev { from { transform: rotate(360deg); } to { transform: rotate(0deg);   } }
```

---

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

### bouncing-stack
**Primary:** role
**Tags:** role, identity, definition, layers, priorities, defining, discovery, step-one, bounce | playful, kinetic
**Animation:** bounce-stack (3 ellipses rest flat at cy=130, then spring up at staggered heights — top 60px, mid 30px, bot 0px — using cubic-bezier(0.25, 1, 0.5, 1) for springy bounce. 2s loop with 25-75% rest phase.)
**Ported from:** PL website Find Your Fit step 1
**Stroke:** Vertical gradient `#0000FF` (top) → `#1a1a1a` (bottom)

```html
<svg class="bouncing-stack" viewBox="0 0 200 200" width="120" height="120">
  <defs>
    <linearGradient id="stack-grad" gradientUnits="userSpaceOnUse" x1="100" y1="70" x2="100" y2="144">
      <stop offset="0%" stop-color="#0000FF"/>
      <stop offset="100%" stop-color="#1a1a1a"/>
    </linearGradient>
  </defs>
  <ellipse cx="100" cy="130" rx="45" ry="14" class="stack stack-bot"/>
  <ellipse cx="100" cy="130" rx="45" ry="14" class="stack stack-mid"/>
  <ellipse cx="100" cy="130" rx="45" ry="14" class="stack stack-top"/>
</svg>
```

**Required CSS:**
```css
.bouncing-stack { overflow: visible; }
.bouncing-stack .stack {
  fill: none;
  stroke: url(#stack-grad);
  stroke-width: 3.5px;
}
.bouncing-stack .stack-top { animation: bounceTop 2s cubic-bezier(0.25, 1, 0.5, 1) infinite; }
.bouncing-stack .stack-mid { animation: bounceMid 2s cubic-bezier(0.25, 1, 0.5, 1) infinite; }
.bouncing-stack .stack-bot { animation: bounceBot 2s cubic-bezier(0.25, 1, 0.5, 1) infinite; }

@keyframes bounceTop {
  0%, 25%, 75%, 100% { transform: translateY(0); }
  50% { transform: translateY(-60px); }
}
@keyframes bounceMid {
  0%, 25%, 75%, 100% { transform: translateY(0); }
  50% { transform: translateY(-30px); }
}
@keyframes bounceBot {
  0%, 25%, 75%, 100% { transform: translateY(0); }
  50% { transform: translateY(0px); }
}
```

---

### spreading-rings
**Primary:** scope
**Tags:** scope, reach, expansion, scale, spread, step-two, rings, discovery, scanning | dynamic, expanding
**Animation:** rings-slide (4 concentric circles start at center, then slide horizontally: outer rings travel ±40px, inner rings travel ±14px. 3s ease-in-out loop with rest phases at 0-15% and 85-100%.)
**Ported from:** PL website Find Your Fit step 2
**Stroke:** Vertical gradient `#0000FF` (top) → `#1a1a1a` (bottom)

```html
<svg class="spreading-rings" viewBox="0 0 200 200" width="120" height="120">
  <defs>
    <linearGradient id="rings-grad" gradientUnits="userSpaceOnUse" x1="100" y1="68" x2="100" y2="132">
      <stop offset="0%" stop-color="#0000FF"/>
      <stop offset="100%" stop-color="#1a1a1a"/>
    </linearGradient>
  </defs>
  <circle cx="100" cy="100" r="32" class="ring ring-1"/>
  <circle cx="100" cy="100" r="32" class="ring ring-2"/>
  <circle cx="100" cy="100" r="32" class="ring ring-3"/>
  <circle cx="100" cy="100" r="32" class="ring ring-4"/>
</svg>
```

**Required CSS:**
```css
.spreading-rings { overflow: visible; }
.spreading-rings .ring {
  fill: none;
  stroke: url(#rings-grad);
  stroke-width: 3.5px;
}
.spreading-rings .ring-1 { animation: slideLeftOuter 3s ease-in-out infinite; }
.spreading-rings .ring-2 { animation: slideLeftInner 3s ease-in-out infinite; }
.spreading-rings .ring-3 { animation: slideRightInner 3s ease-in-out infinite; }
.spreading-rings .ring-4 { animation: slideRightOuter 3s ease-in-out infinite; }

@keyframes slideLeftOuter {
  0%, 15%, 85%, 100% { transform: translateX(0); }
  50% { transform: translateX(-40px); }
}
@keyframes slideLeftInner {
  0%, 15%, 85%, 100% { transform: translateX(0); }
  50% { transform: translateX(-14px); }
}
@keyframes slideRightInner {
  0%, 15%, 85%, 100% { transform: translateX(0); }
  50% { transform: translateX(14px); }
}
@keyframes slideRightOuter {
  0%, 15%, 85%, 100% { transform: translateX(0); }
  50% { transform: translateX(40px); }
}
```

---

### concentric-target
**Primary:** focus
**Tags:** goals, target, alignment, priority, objective, kpi, metrics, okr, discovery, listening | precise, centered
**Animation:** inward-radar (premium: outer ring static, two ripple rings spawn outer and shrink into center, 3s pendulum loop with 1.5s stagger)
**Stroke:** Uses the premium stroke gradient `#0000FF` (top) → `#888888` (bottom)

```html
<svg class="icon-inward-radar" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <linearGradient id="stroke-grad-target" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0000FF"/>
      <stop offset="100%" stop-color="#888888"/>
    </linearGradient>
    <radialGradient id="bg-grad-target" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0000FF" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#0000FF" stop-opacity="0.02"/>
    </radialGradient>
  </defs>
  <circle class="icon-gradient" cx="24" cy="24" r="22" fill="url(#bg-grad-target)"/>
  <circle class="static-ring" cx="24" cy="24" r="20" stroke="url(#stroke-grad-target)" stroke-width="1.5" fill="none"/>
  <circle class="ripple-ring ring-1" cx="24" cy="24" r="20" stroke="url(#stroke-grad-target)" stroke-width="1.5" fill="none"/>
  <circle class="ripple-ring ring-2" cx="24" cy="24" r="20" stroke="url(#stroke-grad-target)" stroke-width="1.5" fill="none"/>
  <circle class="center-dot" cx="24" cy="24" r="3" fill="url(#stroke-grad-target)"/>
</svg>
```

**Required CSS** (add to deck's `<style>`):
```css
.icon-inward-radar .static-ring {
  stroke-dasharray: 200; stroke-dashoffset: 200;
  animation: drawOn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.icon-inward-radar .center-dot {
  transform-origin: center; transform-box: fill-box; transform: scale(0);
  animation: dotPop 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards 0.3s;
}
.icon-inward-radar .ripple-ring {
  transform-origin: center; transform-box: fill-box;
  animation: rippleInward 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
.icon-inward-radar .ripple-ring.ring-1 { animation-delay: 0s; }
.icon-inward-radar .ripple-ring.ring-2 { animation-delay: 1.5s; }
@keyframes drawOn { to { stroke-dashoffset: 0; } }
@keyframes dotPop { to { transform: scale(1); } }
@keyframes rippleInward {
  0% { transform: scale(1); opacity: 0; }
  15% { opacity: 1; }
  85% { transform: scale(0.15); opacity: 0.8; }
  100% { transform: scale(0.1); opacity: 0; }
}
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

### venn-diagram
**Primary:** fit
**Tags:** venn, overlap, fit, synergy, alignment, match, intersection, multi-factor, triple-overlap | harmonious, analytical
**Animation:** venn-draw (staggered stroke-dashoffset: left circle draws at 2% delay, right at 6%, bottom at 10%. Center fills in at 42%. Everything holds until 75%, fades at 88%, rests, then restarts. 4s cycle.)
**Ported from:** PL website Find Your Fit step 3 (result)
**Stroke:** Vertical gradient `#0000FF` (top) → `#1a1a1a` (bottom)

```html
<svg class="venn-diagram" viewBox="0 0 200 200" width="120" height="120">
  <defs>
    <clipPath id="clip-left"><circle cx="80" cy="85" r="38"/></clipPath>
    <clipPath id="clip-right"><circle cx="120" cy="85" r="38"/></clipPath>
    <linearGradient id="venn-grad" gradientUnits="userSpaceOnUse" x1="100" y1="47" x2="100" y2="160">
      <stop offset="0%" stop-color="#0000FF"/>
      <stop offset="100%" stop-color="#1a1a1a"/>
    </linearGradient>
  </defs>
  <circle cx="80" cy="85" r="38" class="venn circle-left"/>
  <circle cx="120" cy="85" r="38" class="venn circle-right"/>
  <circle cx="100" cy="122" r="38" class="venn circle-bottom"/>
  <g clip-path="url(#clip-left)">
    <g clip-path="url(#clip-right)">
      <circle cx="100" cy="122" r="38" class="venn-center"/>
    </g>
  </g>
</svg>
```

**Required CSS:**
```css
.venn-diagram { overflow: visible; }
.venn-diagram .venn {
  fill: none;
  stroke: url(#venn-grad);
  stroke-width: 3.5px;
  stroke-dasharray: 239;
  stroke-dashoffset: 239;
}
.venn-diagram .circle-left {
  transform-origin: 80px 85px;
  transform: rotate(-90deg);
  animation: drawLeft 4s ease-in-out infinite;
}
.venn-diagram .circle-right {
  transform-origin: 120px 85px;
  transform: rotate(-90deg);
  animation: drawRight 4s ease-in-out infinite;
}
.venn-diagram .circle-bottom {
  transform-origin: 100px 122px;
  transform: rotate(90deg);
  animation: drawBottom 4s ease-in-out infinite;
}
.venn-diagram .venn-center {
  fill: url(#venn-grad);
  opacity: 0;
  animation: fillCenter 4s ease-in-out infinite;
}
@keyframes drawLeft {
  0%, 2%    { stroke-dashoffset: 239; opacity: 0; }
  4%        { opacity: 1; }
  25%, 75%  { stroke-dashoffset: 0; opacity: 1; }
  88%, 100% { stroke-dashoffset: 0; opacity: 0; }
}
@keyframes drawRight {
  0%, 6%    { stroke-dashoffset: 239; opacity: 0; }
  8%        { opacity: 1; }
  29%, 75%  { stroke-dashoffset: 0; opacity: 1; }
  88%, 100% { stroke-dashoffset: 0; opacity: 0; }
}
@keyframes drawBottom {
  0%, 10%   { stroke-dashoffset: 239; opacity: 0; }
  12%       { opacity: 1; }
  33%, 75%  { stroke-dashoffset: 0; opacity: 1; }
  88%, 100% { stroke-dashoffset: 0; opacity: 0; }
}
@keyframes fillCenter {
  0%, 42%   { opacity: 0; }
  52%, 75%  { opacity: 1; }
  88%, 100% { opacity: 0; }
}
```

---

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

### fingerprint-scan
**Primary:** biometric
**Tags:** security, identity, authentication, biometric, fingerprint, thumbprint, touch-id, login, verify, trust, privacy | premium, biometric
**Animation:** biometric-trace (Apple Touch ID style: static ghost layer + animating trace layer. Each ridge draws on, holds briefly, then erases along same path. Staggered center-outward in a 3.5s loop)
**Stroke:** Vertical gradient `#1a1a1a` (top-left) → `#0000FF` (bottom-right)
**Geometry:** 17 authentic fingerprint ridges ported from Lottie reference, scaled non-uniformly (x=0.132, y=0.172) for proper elongated thumbprint aspect ratio

```html
<svg class="icon-biometric-trace" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <linearGradient id="stroke-grad-fingerprint" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#1a1a1a"/>
      <stop offset="100%" stop-color="#0000FF"/>
    </linearGradient>
  </defs>
  <g class="icon-inner">
    <ellipse class="icon-gradient" cx="24" cy="24" rx="16" ry="22" fill="url(#stroke-grad-fingerprint)" opacity="0.1"/>

    <!-- STATIC GHOST LAYER -->
    <g stroke="url(#stroke-grad-fingerprint)" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.15">
      <path d="M 23.0 43.14 C 23.0 43.14 22.03 46.35 22.03 46.35"/>
      <path d="M 24.14 23.91 C 24.14 23.91 24.69 26.6 24.69 31.99 C 24.69 36.61 23.9 39.26 23.9 39.26"/>
      <path d="M 27.24 35.23 C 27.24 35.23 27.27 38.55 25.09 46.35"/>
      <path d="M 19.13 45.22 C 19.13 45.22 21.75 38.54 21.75 32.6 C 21.75 26.67 21.29 25.55 21.24 24.33 C 21.2 23.22 21.42 20.88 23.42 20.19 C 25.43 19.5 26.57 21.52 26.9 22.71 C 27.55 25.07 27.49 31.35 27.49 31.35"/>
      <path d="M 21.96 16.95 C 21.96 16.95 22.56 16.49 24.06 16.49 C 25.48 16.49 27.18 17.19 28.39 19.22 C 29.42 20.95 30.26 22.93 30.26 33.07 C 30.26 39.25 28.39 45.3 28.39 45.3"/>
      <path d="M 16.62 43.95 C 16.62 43.95 18.64 39.49 18.93 33.79 C 19.17 29.28 18.42 26.54 18.42 24.4 C 18.42 20.56 19.76 19.14 19.76 19.14"/>
      <path d="M 32.04 20.32 C 32.04 20.32 33.05 23.19 33.05 32.02 C 33.05 39.07 31.84 43.71 31.84 43.71"/>
      <path d="M 15.98 33.66 C 15.98 33.66 16.15 31.86 16.08 29.63 C 16.01 27.39 15.57 26.36 15.57 23.69 C 15.57 21.03 16.63 16.41 19.95 14.19 C 26.51 9.82 30.84 17.02 30.84 17.02"/>
      <path d="M 14.03 41.97 C 14.03 41.97 15.16 39.3 15.49 37.37"/>
      <path d="M 35.43 40.44 C 35.32 40.44 37.58 25.74 34.2 16.82 C 32.6 12.58 29.66 11.08 29.63 11.03"/>
      <path d="M 38.79 30.75 C 38.79 30.75 38.84 32.38 38.66 35.35"/>
      <path d="M 26.84 9.59 C 26.84 9.59 20.71 6.97 15.73 13.76 C 12.81 17.76 12.85 21.86 12.82 24.08 C 12.79 26.31 13.28 28.63 13.28 30.78 C 13.28 35.92 11.83 39.43 11.83 39.43"/>
      <path d="M 18.59 6.75 C 18.59 6.75 25.22 2.74 32.15 8.66 C 38.29 13.91 38.55 25.13 38.55 25.13 C 38.55 25.13 38.65 26.81 38.65 26.81"/>
      <path d="M 9.79 36.34 C 9.79 36.34 10.72 34.27 10.45 31.18 C 10.19 28.08 9.93 27.18 9.93 24.53 C 9.93 21.89 9.93 14.32 15.9 8.86"/>
      <path d="M 41.16 23.34 C 41.16 23.34 40.93 14.2 36.25 8.22 C 31.66 2.37 26.78 2.01 26.78 2.01"/>
      <path d="M 23.84 1.67 C 23.84 1.67 19.25 1.63 15.09 4.98 C 10.93 8.33 8.79 14.22 8.79 14.22"/>
      <path d="M 7.53 17.67 C 7.53 17.67 6.84 20.17 6.84 24.0 C 6.84 27.82 7.76 30.96 7.76 30.96"/>
    </g>

    <!-- ANIMATED TRACE LAYER -->
    <g stroke="url(#stroke-grad-fingerprint)" stroke-width="1.5" fill="none" stroke-linecap="round">
      <g class="fp-1">
        <path d="M 24.14 23.91 C 24.14 23.91 24.69 26.6 24.69 31.99 C 24.69 36.61 23.9 39.26 23.9 39.26" pathLength="100"/>
      </g>
      <g class="fp-2">
        <path d="M 19.13 45.22 C 19.13 45.22 21.75 38.54 21.75 32.6 C 21.75 26.67 21.29 25.55 21.24 24.33 C 21.2 23.22 21.42 20.88 23.42 20.19 C 25.43 19.5 26.57 21.52 26.9 22.71 C 27.55 25.07 27.49 31.35 27.49 31.35" pathLength="100"/>
      </g>
      <g class="fp-3">
        <path d="M 27.24 35.23 C 27.24 35.23 27.27 38.55 25.09 46.35" pathLength="100"/>
        <path d="M 21.96 16.95 C 21.96 16.95 22.56 16.49 24.06 16.49 C 25.48 16.49 27.18 17.19 28.39 19.22 C 29.42 20.95 30.26 22.93 30.26 33.07 C 30.26 39.25 28.39 45.3 28.39 45.3" pathLength="100"/>
        <path d="M 16.62 43.95 C 16.62 43.95 18.64 39.49 18.93 33.79 C 19.17 29.28 18.42 26.54 18.42 24.4 C 18.42 20.56 19.76 19.14 19.76 19.14" pathLength="100"/>
        <path d="M 32.04 20.32 C 32.04 20.32 33.05 23.19 33.05 32.02 C 33.05 39.07 31.84 43.71 31.84 43.71" pathLength="100"/>
        <path d="M 23.0 43.14 C 23.0 43.14 22.03 46.35 22.03 46.35" pathLength="100"/>
      </g>
      <g class="fp-4">
        <path d="M 15.98 33.66 C 15.98 33.66 16.15 31.86 16.08 29.63 C 16.01 27.39 15.57 26.36 15.57 23.69 C 15.57 21.03 16.63 16.41 19.95 14.19 C 26.51 9.82 30.84 17.02 30.84 17.02" pathLength="100"/>
        <path d="M 14.03 41.97 C 14.03 41.97 15.16 39.3 15.49 37.37" pathLength="100"/>
        <path d="M 35.43 40.44 C 35.32 40.44 37.58 25.74 34.2 16.82 C 32.6 12.58 29.66 11.08 29.63 11.03" pathLength="100"/>
        <path d="M 38.79 30.75 C 38.79 30.75 38.84 32.38 38.66 35.35" pathLength="100"/>
      </g>
      <g class="fp-5">
        <path d="M 26.84 9.59 C 26.84 9.59 20.71 6.97 15.73 13.76 C 12.81 17.76 12.85 21.86 12.82 24.08 C 12.79 26.31 13.28 28.63 13.28 30.78 C 13.28 35.92 11.83 39.43 11.83 39.43" pathLength="100"/>
        <path d="M 18.59 6.75 C 18.59 6.75 25.22 2.74 32.15 8.66 C 38.29 13.91 38.55 25.13 38.55 25.13 C 38.55 25.13 38.65 26.81 38.65 26.81" pathLength="100"/>
        <path d="M 9.79 36.34 C 9.79 36.34 10.72 34.27 10.45 31.18 C 10.19 28.08 9.93 27.18 9.93 24.53 C 9.93 21.89 9.93 14.32 15.9 8.86" pathLength="100"/>
        <path d="M 41.16 23.34 C 41.16 23.34 40.93 14.2 36.25 8.22 C 31.66 2.37 26.78 2.01 26.78 2.01" pathLength="100"/>
        <path d="M 23.84 1.67 C 23.84 1.67 19.25 1.63 15.09 4.98 C 10.93 8.33 8.79 14.22 8.79 14.22" pathLength="100"/>
        <path d="M 7.53 17.67 C 7.53 17.67 6.84 20.17 6.84 24.0 C 6.84 27.82 7.76 30.96 7.76 30.96" pathLength="100"/>
      </g>
    </g>
  </g>
</svg>
```

**Required CSS:**
```css
.icon-biometric-trace .fp-1 path,
.icon-biometric-trace .fp-2 path,
.icon-biometric-trace .fp-3 path,
.icon-biometric-trace .fp-4 path,
.icon-biometric-trace .fp-5 path {
  stroke-dasharray: 100 200;
  stroke-dashoffset: 105;
  animation: traceAndErase 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
.icon-biometric-trace .fp-1 path { animation-delay: 0s; }
.icon-biometric-trace .fp-2 path { animation-delay: 0.15s; }
.icon-biometric-trace .fp-3 path { animation-delay: 0.3s; }
.icon-biometric-trace .fp-4 path { animation-delay: 0.45s; }
.icon-biometric-trace .fp-5 path { animation-delay: 0.6s; }
.icon-biometric-trace .icon-gradient {
  opacity: 0;
  animation: gradientIn 0.4s ease-out forwards !important;
  stroke-dasharray: none !important;
  stroke-dashoffset: 0 !important;
}
@keyframes traceAndErase {
  0% { stroke-dashoffset: 105; opacity: 0; }
  15% { opacity: 1; stroke-dashoffset: 60; }
  40%, 60% { stroke-dashoffset: 0; opacity: 1; }
  85% { opacity: 1; stroke-dashoffset: -60; }
  100% { stroke-dashoffset: -105; opacity: 0; }
}
@keyframes gradientIn { to { opacity: 0.1; } }
```

---

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

### globe-spin
**Primary:** global
**Tags:** global, international, reach, remote, worldwide, multi-region, network, connectivity, 24-7, enterprise, world | rotating, premium
**Animation:** meridian-spin (4 meridian ellipses oscillate via scaleX between 1 and -1, passing through 0.02 at edge-on. Staggered -2s each to create continuous rotation illusion over 8s cycle)
**Stroke:** Vertical gradient `#1a1a1a` (top-left) → `#0000FF` (bottom-right), stroke-width="1" (thinner than default for premium look)

```html
<svg class="icon-globe-spin" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <linearGradient id="stroke-grad-globe" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#1a1a1a"/>
      <stop offset="100%" stop-color="#0000FF"/>
    </linearGradient>
    <radialGradient id="bg-grad-globe" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0000FF" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#0000FF" stop-opacity="0.02"/>
    </radialGradient>
  </defs>
  <circle class="icon-gradient" cx="24" cy="24" r="22" fill="url(#bg-grad-globe)"/>
  <circle cx="24" cy="24" r="20" stroke="url(#stroke-grad-globe)" stroke-width="1" fill="none"/>
  <line x1="4" y1="24" x2="44" y2="24" stroke="url(#stroke-grad-globe)" stroke-width="1" stroke-dasharray="2 3" opacity="0.4"/>
  <ellipse class="meridian m-1" cx="24" cy="24" rx="14" ry="20" stroke="url(#stroke-grad-globe)" stroke-width="1" fill="none"/>
  <ellipse class="meridian m-2" cx="24" cy="24" rx="14" ry="20" stroke="url(#stroke-grad-globe)" stroke-width="1" fill="none"/>
  <ellipse class="meridian m-3" cx="24" cy="24" rx="14" ry="20" stroke="url(#stroke-grad-globe)" stroke-width="1" fill="none"/>
  <ellipse class="meridian m-4" cx="24" cy="24" rx="14" ry="20" stroke="url(#stroke-grad-globe)" stroke-width="1" fill="none"/>
  <circle cx="24" cy="4" r="0.8" fill="url(#stroke-grad-globe)"/>
  <circle cx="24" cy="44" r="0.8" fill="url(#stroke-grad-globe)"/>
</svg>
```

**Required CSS:**
```css
.icon-globe-spin .meridian {
  transform-origin: center;
  transform-box: fill-box;
  animation: meridianSpin 8s linear infinite;
}
.icon-globe-spin .m-1 { animation-delay: 0s; }
.icon-globe-spin .m-2 { animation-delay: -2s; }
.icon-globe-spin .m-3 { animation-delay: -4s; }
.icon-globe-spin .m-4 { animation-delay: -6s; }
.icon-globe-spin .icon-gradient {
  opacity: 0;
  animation: gradientIn 0.4s ease-out forwards;
}
/* Cosine-sampled keyframes match real rotation physics */
@keyframes meridianSpin {
  0%    { transform: scaleX(1); }
  6.25% { transform: scaleX(0.924); }
  12.5% { transform: scaleX(0.707); }
  18.75%{ transform: scaleX(0.383); }
  25%   { transform: scaleX(0.02); }
  31.25%{ transform: scaleX(-0.383); }
  37.5% { transform: scaleX(-0.707); }
  43.75%{ transform: scaleX(-0.924); }
  50%   { transform: scaleX(-1); }
  56.25%{ transform: scaleX(-0.924); }
  62.5% { transform: scaleX(-0.707); }
  68.75%{ transform: scaleX(-0.383); }
  75%   { transform: scaleX(0.02); }
  81.25%{ transform: scaleX(0.383); }
  87.5% { transform: scaleX(0.707); }
  93.75%{ transform: scaleX(0.924); }
  100%  { transform: scaleX(1); }
}
@keyframes gradientIn { to { opacity: 1; } }
```

---

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
