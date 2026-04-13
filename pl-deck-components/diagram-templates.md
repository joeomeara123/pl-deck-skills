# SVG Diagram Templates

Copy-paste these templates and adapt labels/positions. Every template includes proper `<defs>` for arrow markers and correct `viewBox` with padding.

## Flowchart (Horizontal, 4 Nodes)

```html
<svg viewBox="0 0 720 160" width="100%" style="max-width: 720px;">
  <defs>
    <marker id="fc-arrow" viewBox="0 0 10 10" refX="9" refY="5"
            markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(0,0,255,0.3)" />
    </marker>
  </defs>

  <!-- Node 1 -->
  <rect x="20" y="56" width="140" height="48" rx="6"
        fill="rgba(0,0,255,0.06)" stroke="rgba(0,0,0,0.06)" stroke-width="1" />
  <text x="90" y="80" text-anchor="middle" dominant-baseline="central"
        font-family="Inter" font-size="11" fill="#1a1a1a">Step One</text>

  <!-- Arrow 1→2 -->
  <line x1="160" y1="80" x2="200" y2="80"
        stroke="rgba(0,0,255,0.2)" stroke-width="1.5" marker-end="url(#fc-arrow)" />

  <!-- Node 2 -->
  <rect x="200" y="56" width="140" height="48" rx="6"
        fill="rgba(0,0,255,0.06)" stroke="rgba(0,0,0,0.06)" stroke-width="1" />
  <text x="270" y="80" text-anchor="middle" dominant-baseline="central"
        font-family="Inter" font-size="11" fill="#1a1a1a">Step Two</text>

  <!-- Arrow 2→3 -->
  <line x1="340" y1="80" x2="380" y2="80"
        stroke="rgba(0,0,255,0.2)" stroke-width="1.5" marker-end="url(#fc-arrow)" />

  <!-- Node 3 (decision) -->
  <polygon points="450,56 500,80 450,104 400,80"
           fill="rgba(255,160,122,0.1)" stroke="rgba(0,0,0,0.06)" stroke-width="1" />
  <text x="450" y="80" text-anchor="middle" dominant-baseline="central"
        font-family="Inter" font-size="10" fill="#1a1a1a">Decision?</text>

  <!-- Arrow 3→4 -->
  <line x1="500" y1="80" x2="540" y2="80"
        stroke="rgba(0,0,255,0.2)" stroke-width="1.5" marker-end="url(#fc-arrow)" />

  <!-- Node 4 -->
  <rect x="540" y="56" width="140" height="48" rx="6"
        fill="rgba(0,0,255,0.06)" stroke="rgba(0,0,0,0.06)" stroke-width="1" />
  <text x="610" y="80" text-anchor="middle" dominant-baseline="central"
        font-family="Inter" font-size="11" fill="#1a1a1a">Result</text>
</svg>
```

## Hub-Spoke (Central Node + 4 Spokes)

```html
<svg viewBox="0 0 500 500" width="100%" style="max-width: 500px;">
  <defs>
    <marker id="hs-arrow" viewBox="0 0 10 10" refX="9" refY="5"
            markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(0,0,255,0.3)" />
    </marker>
  </defs>

  <!-- Connector lines (drawn first, behind nodes) -->
  <line x1="250" y1="210" x2="250" y2="80"
        stroke="rgba(0,0,255,0.15)" stroke-width="1.5" marker-end="url(#hs-arrow)" />
  <line x1="290" y1="250" x2="410" y2="250"
        stroke="rgba(0,0,255,0.15)" stroke-width="1.5" marker-end="url(#hs-arrow)" />
  <line x1="250" y1="290" x2="250" y2="410"
        stroke="rgba(0,0,255,0.15)" stroke-width="1.5" marker-end="url(#hs-arrow)" />
  <line x1="210" y1="250" x2="90" y2="250"
        stroke="rgba(0,0,255,0.15)" stroke-width="1.5" marker-end="url(#hs-arrow)" />

  <!-- Center node -->
  <circle cx="250" cy="250" r="40"
          fill="rgba(0,0,255,0.08)" stroke="rgba(0,0,255,0.2)" stroke-width="1.5" />
  <text x="250" y="250" text-anchor="middle" dominant-baseline="central"
        font-family="Inter" font-size="12" font-weight="600" fill="#0000FF">Core</text>

  <!-- Top spoke -->
  <circle cx="250" cy="60" r="30"
          fill="rgba(0,0,255,0.04)" stroke="rgba(0,0,0,0.06)" stroke-width="1" />
  <text x="250" y="60" text-anchor="middle" dominant-baseline="central"
        font-family="Inter" font-size="10" fill="#1a1a1a">Spoke A</text>

  <!-- Right spoke -->
  <circle cx="430" cy="250" r="30"
          fill="rgba(0,0,255,0.04)" stroke="rgba(0,0,0,0.06)" stroke-width="1" />
  <text x="430" y="250" text-anchor="middle" dominant-baseline="central"
        font-family="Inter" font-size="10" fill="#1a1a1a">Spoke B</text>

  <!-- Bottom spoke -->
  <circle cx="250" cy="430" r="30"
          fill="rgba(255,160,122,0.08)" stroke="rgba(255,160,122,0.2)" stroke-width="1" />
  <text x="250" y="430" text-anchor="middle" dominant-baseline="central"
        font-family="Inter" font-size="10" fill="#1a1a1a">Spoke C</text>

  <!-- Left spoke -->
  <circle cx="70" cy="250" r="30"
          fill="rgba(0,0,255,0.04)" stroke="rgba(0,0,0,0.06)" stroke-width="1" />
  <text x="70" y="250" text-anchor="middle" dominant-baseline="central"
        font-family="Inter" font-size="10" fill="#1a1a1a">Spoke D</text>
</svg>
```

## Architecture Stack (5 Layers)

```html
<svg viewBox="0 0 600 320" width="100%" style="max-width: 600px;">
  <!-- Layer labels (monospace, uppercase, blue) -->
  <text x="30" y="52" font-family="'SF Mono', monospace" font-size="9" font-weight="600"
        fill="rgba(0,0,255,0.45)" letter-spacing="1.5">PRESENTATION</text>
  <text x="30" y="112" font-family="'SF Mono', monospace" font-size="9" font-weight="600"
        fill="rgba(0,0,255,0.45)" letter-spacing="1.5">APPLICATION</text>
  <text x="30" y="172" font-family="'SF Mono', monospace" font-size="9" font-weight="600"
        fill="rgba(0,0,255,0.45)" letter-spacing="1.5">DOMAIN</text>
  <text x="30" y="232" font-family="'SF Mono', monospace" font-size="9" font-weight="600"
        fill="rgba(0,0,255,0.45)" letter-spacing="1.5">DATA</text>
  <text x="30" y="292" font-family="'SF Mono', monospace" font-size="9" font-weight="600"
        fill="rgba(0,0,255,0.45)" letter-spacing="1.5">INFRA</text>

  <!-- Layer bars -->
  <rect x="130" y="32" width="440" height="40" rx="4"
        fill="rgba(0,0,255,0.04)" stroke="rgba(0,0,0,0.06)" stroke-width="1" />
  <text x="350" y="52" text-anchor="middle" dominant-baseline="central"
        font-family="Inter" font-size="11" fill="#1a1a1a">Web UI / Mobile App</text>

  <rect x="130" y="92" width="440" height="40" rx="4"
        fill="rgba(0,0,255,0.06)" stroke="rgba(0,0,0,0.06)" stroke-width="1" />
  <text x="350" y="112" text-anchor="middle" dominant-baseline="central"
        font-family="Inter" font-size="11" fill="#1a1a1a">API Gateway / Services</text>

  <rect x="130" y="152" width="440" height="40" rx="4"
        fill="rgba(0,0,255,0.08)" stroke="rgba(0,0,0,0.06)" stroke-width="1" />
  <text x="350" y="172" text-anchor="middle" dominant-baseline="central"
        font-family="Inter" font-size="11" fill="#1a1a1a">Business Logic</text>

  <rect x="130" y="212" width="440" height="40" rx="4"
        fill="rgba(0,0,255,0.06)" stroke="rgba(0,0,0,0.06)" stroke-width="1" />
  <text x="350" y="232" text-anchor="middle" dominant-baseline="central"
        font-family="Inter" font-size="11" fill="#1a1a1a">Database / Storage</text>

  <rect x="130" y="272" width="440" height="40" rx="4"
        fill="rgba(0,0,255,0.04)" stroke="rgba(0,0,0,0.06)" stroke-width="1" />
  <text x="350" y="292" text-anchor="middle" dominant-baseline="central"
        font-family="Inter" font-size="11" fill="#1a1a1a">Cloud / Containers</text>

  <!-- Vertical connectors between layers -->
  <line x1="350" y1="72" x2="350" y2="92" stroke="rgba(0,0,255,0.15)" stroke-width="1" stroke-dasharray="3,3" />
  <line x1="350" y1="132" x2="350" y2="152" stroke="rgba(0,0,255,0.15)" stroke-width="1" stroke-dasharray="3,3" />
  <line x1="350" y1="192" x2="350" y2="212" stroke="rgba(0,0,255,0.15)" stroke-width="1" stroke-dasharray="3,3" />
  <line x1="350" y1="252" x2="350" y2="272" stroke="rgba(0,0,255,0.15)" stroke-width="1" stroke-dasharray="3,3" />
</svg>
```

## Timeline (Horizontal, 4 Points)

```html
<svg viewBox="0 0 700 120" width="100%" style="max-width: 700px;">
  <!-- Timeline line (gradient) -->
  <defs>
    <linearGradient id="tl-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0000FF" />
      <stop offset="50%" stop-color="#FFA07A" />
      <stop offset="100%" stop-color="#0000FF" />
    </linearGradient>
  </defs>

  <line x1="60" y1="40" x2="640" y2="40"
        stroke="url(#tl-grad)" stroke-width="2" />

  <!-- Point 1 -->
  <circle cx="100" cy="40" r="7" fill="#fafafa" stroke="#0000FF" stroke-width="3" />
  <text x="100" y="70" text-anchor="middle"
        font-family="'SF Mono', monospace" font-size="9" font-weight="600"
        fill="rgba(0,0,255,0.45)" letter-spacing="1">Q1</text>
  <text x="100" y="88" text-anchor="middle"
        font-family="Inter" font-size="10" fill="#555">Discovery</text>

  <!-- Point 2 -->
  <circle cx="293" cy="40" r="7" fill="#fafafa" stroke="#0000FF" stroke-width="3" />
  <text x="293" y="70" text-anchor="middle"
        font-family="'SF Mono', monospace" font-size="9" font-weight="600"
        fill="rgba(0,0,255,0.45)" letter-spacing="1">Q2</text>
  <text x="293" y="88" text-anchor="middle"
        font-family="Inter" font-size="10" fill="#555">Build</text>

  <!-- Point 3 -->
  <circle cx="486" cy="40" r="7" fill="#fafafa" stroke="#FFA07A" stroke-width="3" />
  <text x="486" y="70" text-anchor="middle"
        font-family="'SF Mono', monospace" font-size="9" font-weight="600"
        fill="rgba(255,160,122,0.7)" letter-spacing="1">Q3</text>
  <text x="486" y="88" text-anchor="middle"
        font-family="Inter" font-size="10" fill="#555">Launch</text>

  <!-- Point 4 -->
  <circle cx="600" cy="40" r="7" fill="#fafafa" stroke="#0000FF" stroke-width="3" />
  <text x="600" y="70" text-anchor="middle"
        font-family="'SF Mono', monospace" font-size="9" font-weight="600"
        fill="rgba(0,0,255,0.45)" letter-spacing="1">Q4</text>
  <text x="600" y="88" text-anchor="middle"
        font-family="Inter" font-size="10" fill="#555">Scale</text>
</svg>
```

## Vertical Flowchart (3 Nodes)

```html
<svg viewBox="0 0 300 380" width="100%" style="max-width: 300px;">
  <defs>
    <marker id="vf-arrow" viewBox="0 0 10 10" refX="9" refY="5"
            markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(0,0,255,0.3)" />
    </marker>
  </defs>

  <!-- Node 1 -->
  <rect x="50" y="30" width="200" height="60" rx="6"
        fill="rgba(0,0,255,0.06)" stroke="rgba(0,0,0,0.06)" stroke-width="1" />
  <text x="150" y="55" text-anchor="middle" dominant-baseline="central"
        font-family="Inter" font-size="12" font-weight="600" fill="#1a1a1a">Input</text>
  <text x="150" y="73" text-anchor="middle"
        font-family="Inter" font-size="10" fill="#666">Description text</text>

  <!-- Arrow 1→2 -->
  <line x1="150" y1="90" x2="150" y2="140"
        stroke="rgba(0,0,255,0.2)" stroke-width="1.5" marker-end="url(#vf-arrow)" />

  <!-- Node 2 -->
  <rect x="50" y="140" width="200" height="60" rx="6"
        fill="rgba(0,0,255,0.08)" stroke="rgba(0,0,255,0.15)" stroke-width="1" />
  <text x="150" y="165" text-anchor="middle" dominant-baseline="central"
        font-family="Inter" font-size="12" font-weight="600" fill="#0000FF">Process</text>
  <text x="150" y="183" text-anchor="middle"
        font-family="Inter" font-size="10" fill="#666">Description text</text>

  <!-- Arrow 2→3 -->
  <line x1="150" y1="200" x2="150" y2="250"
        stroke="rgba(0,0,255,0.2)" stroke-width="1.5" marker-end="url(#vf-arrow)" />

  <!-- Node 3 -->
  <rect x="50" y="250" width="200" height="60" rx="6"
        fill="rgba(0,0,255,0.06)" stroke="rgba(0,0,0,0.06)" stroke-width="1" />
  <text x="150" y="275" text-anchor="middle" dominant-baseline="central"
        font-family="Inter" font-size="12" font-weight="600" fill="#1a1a1a">Output</text>
  <text x="150" y="293" text-anchor="middle"
        font-family="Inter" font-size="10" fill="#666">Description text</text>
</svg>
```
