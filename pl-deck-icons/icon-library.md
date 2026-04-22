# PL Deck Icon Library

7 premium animated icons with gradient fill + wireframe overlay. Each icon has a unique, hand-crafted animation. Copy SVG code verbatim. Never modify paths.

## Gradient Palette

Each icon pairs two muted brand tones. The gradient blob sits behind the wireframe at low opacity.

| Pairing | From | To | Used for |
|---------|------|----|----------|
| Blue-Orchid | `rgba(0,0,255,0.10)` | `rgba(186,85,211,0.04)` | AI, Intelligence, General |
| Blue-Turquoise | `rgba(0,0,255,0.08)` | `rgba(64,224,208,0.05)` | Strategy, Vision |
| Blue-Green | `rgba(0,0,255,0.08)` | `rgba(185,233,121,0.05)` | Connection, Integration |
| Blue-Blue | `rgba(0,0,255,0.12)` | `rgba(0,0,255,0.03)` | Security, Trust |

---

## Category 1: AI and Agents

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

## Category 2: Strategy and Discovery

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
**Stroke:** Uses the brand vertical gradient `#0000FF` (top) → `#1a1a1a` (bottom)

```html
<svg class="icon-inward-radar" viewBox="0 0 48 48" width="32" height="32">
  <defs>
    <linearGradient id="stroke-grad-target" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0000FF"/>
      <stop offset="100%" stop-color="#1a1a1a"/>
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

## Category 3: Connection and Fit

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

## Category 4: Security and Trust

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

## Category 5: Global and General

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
