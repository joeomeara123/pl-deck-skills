# Prism Corner Pixel Renderer

Canvas 2D renderer for the chunky pixel texture inside the `.slide-bg-prism` gradient. Sits ABOVE the CSS radial gradient and underneath the slide grain. Renders the same 32px blocks as the hero shader, color-matched to the gradient, with a deep `cornerFade²` falloff so the pixels dissipate gradually into the smooth halo.

## Design Intent

The prism corner is a **quiet hint of pixel texture inside a soft blue gradient that fades into the slide**. There is no defined curve outline, no hard edge, no clip path. The chunky pixel pattern is barely-there decoration in the corner — visible enough to telegraph the brand's pixel motif, but never strong enough to compete with the slide content.

## Visual Rules

- **No bounding shape.** The pixel area is defined purely by the fade curve. The boundary is wherever alpha reaches zero.
- **Color-match the CSS gradient.** Pixel ramp goes from navy at the corner to white at `d=1`, matching the rgba stops in `.slide-bg-prism`. They read as the same gradient becoming chunky.
- **Deep fade.** `cornerFade²` falloff — pixels are full strength only in the deepest corner area, fading rapidly as `d` increases.
- **Subtle base alpha.** 0.32 base — pixels are persistent but quiet.
- **Quiet shimmer.** A 0.25 Gaussian shimmer band sweeps diagonally, brightening cells as it passes — same math as the hero shader, but at lower amplitude.
- **Sparse ASCII.** Characters only render where `fadeCurve > 0.35` and on ~18% of cells. Color contrasts with each cell's luminance.

## Parameters

| Param | Value | Notes |
|-------|-------|-------|
| `BS` (block size) | `32` | Matches the hero shader's `blockPx = 32.0` |
| `EXTENT_X` | `0.60` | Horizontal radius (fraction of slide width) |
| `EXTENT_Y` | `0.80` | Vertical radius (fraction of slide height) |
| Base alpha | `0.32` | Persistent pixel visibility |
| Shimmer amplitude | `0.25` | Additional brightness as shimmer sweeps |
| ASCII fill chance | `0.18` | Sparse characters |
| ASCII font | `500 ~13px Inter` | Same family as the hero ASCII overlay |

The CSS radial-gradient in `.slide-bg-prism` must use the same `EXTENT_X` / `EXTENT_Y` percentages so the pixel renderer and the gradient share the same ellipse axes.

## Color Ramp

```js
function rampColor(t) {
  // t = 0 at corner, t = 1 at the curve's outer edge
  const stops = [
    [0.00, [0, 0, 139]],     // navy
    [0.22, [37, 99, 235]],   // blue-600
    [0.42, [96, 165, 250]],  // blue-400
    [0.62, [147, 197, 253]], // blue-300
    [0.82, [219, 234, 254]], // blue-100
    [1.00, [255, 255, 255]], // white
  ];
  for (let i = 0; i < stops.length - 1; i++) {
    if (t <= stops[i + 1][0]) {
      const u = (t - stops[i][0]) / (stops[i + 1][0] - stops[i][0]);
      const a = stops[i][1], b = stops[i + 1][1];
      return [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u, a[2] + (b[2] - a[2]) * u];
    }
  }
  return stops[stops.length - 1][1];
}
```

## Renderer (copy-paste)

```javascript
function initPrismPixels() {
  const BS = 32;
  const CHARS = '0123456789@#$%&*+=?<>{}[]/\\|LABS';
  const seed = (x, y) => { const h = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123; return h - Math.floor(h); };
  const smoothstep = (e0, e1, x) => { const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0))); return t * t * (3 - 2 * t); };

  function rampColor(t) {
    const stops = [
      [0.00, [0, 0, 139]],
      [0.22, [37, 99, 235]],
      [0.42, [96, 165, 250]],
      [0.62, [147, 197, 253]],
      [0.82, [219, 234, 254]],
      [1.00, [255, 255, 255]],
    ];
    for (let i = 0; i < stops.length - 1; i++) {
      if (t <= stops[i + 1][0]) {
        const u = (t - stops[i][0]) / (stops[i + 1][0] - stops[i][0]);
        const a = stops[i][1], b = stops[i + 1][1];
        return [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u, a[2] + (b[2] - a[2]) * u];
      }
    }
    return stops[stops.length - 1][1];
  }

  // Must match the .slide-bg-prism CSS radial-gradient size
  const EXTENT_X = 0.60;
  const EXTENT_Y = 0.80;

  document.querySelectorAll('.prism-pixels').forEach(canvas => {
    const ctx = canvas.getContext('2d');
    const startTime = performance.now() / 1000;
    let w = 0, h = 0;
    function resize() {
      const d = devicePixelRatio || 1;
      w = canvas.parentElement.clientWidth;
      h = canvas.parentElement.clientHeight;
      canvas.width = w * d; canvas.height = h * d;
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      ctx.setTransform(d, 0, 0, d, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    function render() {
      const pw = canvas.parentElement.clientWidth;
      const ph = canvas.parentElement.clientHeight;
      if (pw > 0 && ph > 0 && (pw !== w || ph !== h)) resize();
      if (w === 0 || h === 0) { requestAnimationFrame(render); return; }
      const time = performance.now() / 1000 - startTime;
      ctx.clearRect(0, 0, w, h);

      const cols = Math.ceil(w / BS), rows = Math.ceil(h / BS);
      const shimmerPos = (time * 0.25) % 1.0;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const cx = (col + 0.5) * BS, cy = (row + 0.5) * BS;
          const nx = cx / w, ny = cy / h;
          const dx = (1 - nx) / EXTENT_X;
          const dy = (1 - ny) / EXTENT_Y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d > 1.0) continue;

          // Deep cornerFade² — pixels die out gradually inside the gradient
          const cornerFade = smoothstep(1.0, 0.0, d);
          const fadeCurve = cornerFade * cornerFade;
          if (fadeCurve < 0.02) continue;

          // Per-column y-offset mis-sample (matches hero shader)
          const colOffset = seed(col, 0) * 0.06;
          const sampleNy = ny + colOffset;
          const sdx = (1 - nx) / EXTENT_X;
          const sdy = (1 - sampleNy) / EXTENT_Y;
          const sampleD = Math.min(1, Math.sqrt(sdx * sdx + sdy * sdy));
          const [r, g, b] = rampColor(sampleD);

          // Quiet diagonal shimmer
          const diag = (nx + 1.0 - ny) * 0.5;
          let shimmerDist = Math.abs(diag - shimmerPos);
          shimmerDist = Math.min(shimmerDist, 1.0 - shimmerDist);
          const shimmerMask = Math.exp(-shimmerDist * shimmerDist * 120.0) * 0.25;

          const alpha = (0.32 + shimmerMask * 0.25) * fadeCurve;
          ctx.fillStyle = `rgba(${Math.round(r)},${Math.round(g)},${Math.round(b)},${alpha})`;
          ctx.fillRect(col * BS, row * BS, BS + 1, BS + 1);

          // Sparse ASCII characters in the dense core
          if (fadeCurve > 0.35 && seed(col, row) < 0.18) {
            const ch = CHARS[Math.floor(seed(col + 100, row + 100) * CHARS.length)];
            const luma = 0.299 * r + 0.587 * g + 0.114 * b;
            const cc = luma > 170 ? '20,30,90' : '255,255,255';
            const charAlpha = (0.22 + shimmerMask * 0.25) * fadeCurve;
            ctx.fillStyle = `rgba(${cc},${charAlpha})`;
            ctx.font = '500 ' + (BS * 0.4) + 'px "Inter", sans-serif';
            ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText(ch, cx, cy);
          }
        }
      }
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  });
}
```

## Initialization

Call once after slides are in the DOM:

```javascript
initPrismPixels();
```

The function targets every `.prism-pixels` canvas across all slides. No per-corner setup needed.

## Tuning Knobs

| If the effect feels... | Try |
|------------------------|-----|
| Too dominant / loud | Lower base alpha (0.32 → 0.22) and/or tighten extents |
| Invisible | Bump base alpha (0.32 → 0.45) — but be wary of looking "stuck-on" |
| Too constrained | Bump `EXTENT_X` and `EXTENT_Y` (also update CSS gradient) |
| Pixels read as a hard shape | Increase the fade exponent (use `cornerFade ** 3` instead of `cornerFade²`) |
| Shimmer too distracting | Drop shimmer amplitude (`0.25 → 0.15`) or remove it entirely |
