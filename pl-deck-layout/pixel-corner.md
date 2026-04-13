# Animated Pixel Corner Accent

Canvas 2D animated corner accent for content slides. One color at a time, cycling through all 5 brand colors over 45 seconds.

## Key Rules

- **ONE color at a time** — all blocks the same color at any moment. NEVER mix two colors simultaneously.
- **Uniform opacity** — alpha from distance falloff only. No per-block brightness variation beyond the staircase smoothstep.
- **Subtle shimmer** — diagonal band brightens existing blocks by 15% max. Multiplicative (`blockAlpha * (1 + shimmer)`). Must NOT reveal invisible blocks.
- **20px blocks** — finer grain than the hero's 45px.
- **Alternating corners** — `top-right` on odd slides, `bottom-left` on even.

## Parameters

| Param | Default | Description |
|-------|---------|-------------|
| `blockSize` | `20` | Pixel block size in px |
| `fadeRadius` | `0.15` | 0-1, fraction of diagonal |
| `maxAlpha` | `0.88` | Peak alpha near corner origin |
| `asciiDensity` | `0.4` | Fraction of blocks with ASCII character |
| `asciiAlpha` | `blockAlpha * 0.6` | Character opacity |
| `shimmerSpeed` | `0.12` | Diagonal sweep speed |
| `shimmerBoost` | `0.15` | Max multiplicative brightness lift |

## Logo Watermark

- `logo-white.png`, 26px wide, aspect ratio 110/138
- Position: 2 block widths inward from corner origin
- Full opacity, no effects, drawn AFTER all blocks each frame

## Implementation (copy-paste)

```javascript
function initAnimatedCorner(canvasId, cornerOrigin) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const BLOCK_SIZE = 20;
  const CHARS = '0123456789@#$%&*+=?<>{}[]/\\|LABS';
  const logoImg = new Image(); logoImg.src = 'logo-white.png';
  const startTime = performance.now() / 1000;

  let oxScreen, oyScreen;
  switch (cornerOrigin) {
    case 'top-right': oxScreen = 1.0; oyScreen = 0.0; break;
    case 'bottom-left': oxScreen = 0.0; oyScreen = 1.0; break;
    case 'top-left': oxScreen = 0.0; oyScreen = 0.0; break;
    case 'bottom-right': oxScreen = 1.0; oyScreen = 1.0; break;
  }

  const seed = (x, y) => { const h = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123; return h - Math.floor(h); };
  const smoothstep = (e0, e1, x) => { const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0))); return t * t * (3 - 2 * t); };

  const brandColors = [
    [186, 85, 211], [255, 160, 122], [185, 233, 121], [64, 224, 208], [0, 0, 255],
  ];
  const cycle = [[0,0,4,1],[4,1,2,2],[2,2,0,3],[0,3,1,1],[1,1,4,3],[4,3,4,4],[4,4,0,2],[0,2,3,3],[3,3,0,0]];

  function getCycleColor(time) {
    const progress = ((time % 45) / 45);
    const seg = progress * 9;
    const idx = Math.floor(seg);
    const t = smoothstep(0, 1, seg - idx);
    const s = cycle[Math.min(idx, 8)];
    const fA = brandColors[s[0]], fB = brandColors[s[1]], tA = brandColors[s[2]], tB = brandColors[s[3]];
    const pA = fA.map((v, i) => v + (tA[i] - v) * t);
    const pB = fB.map((v, i) => v + (tB[i] - v) * t);
    return pA.map((v, i) => Math.round((v + pB[i]) / 2));
  }

  let width = 0, height = 0;
  function resize() {
    const dpr = window.devicePixelRatio || 1;
    width = canvas.parentElement.clientWidth; height = canvas.parentElement.clientHeight;
    canvas.width = width * dpr; canvas.height = height * dpr;
    canvas.style.width = width + 'px'; canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  function render() {
    const time = performance.now() / 1000 - startTime;
    const [r, g, b] = getCycleColor(time);
    ctx.clearRect(0, 0, width, height);

    const cols = Math.ceil(width / BLOCK_SIZE), rows = Math.ceil(height / BLOCK_SIZE);
    const fadeRadius = 0.15, maxAlpha = 0.88;
    const oxPx = oxScreen * width, oyPx = oyScreen * height;
    const diagonal = Math.sqrt(width * width + height * height);
    const maxDist = diagonal * fadeRadius;
    const shimmerPos = (time * 0.12) % 1.0;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const cx = (col + 0.5) * BLOCK_SIZE, cy = (row + 0.5) * BLOCK_SIZE;
        const dist = Math.sqrt((cx - oxPx) ** 2 + (cy - oyPx) ** 2);
        const t = dist / maxDist;
        if (t >= 1.2) continue;

        let blockAlpha;
        if (t <= 1.0) { blockAlpha = smoothstep(1, 0, t) * maxAlpha; }
        else { blockAlpha = (1.2 - t) * 0.15 * maxAlpha; }
        blockAlpha *= (0.85 + seed(col + 700, row + 700) * 0.15);
        if (blockAlpha < 0.02) continue;

        const nx = cx / width, ny = cy / height;
        const diag = (nx + 1.0 - ny) * 0.5;
        let shimmerDist = Math.abs(diag - shimmerPos);
        shimmerDist = Math.min(shimmerDist, 1.0 - shimmerDist);
        const shimmerMask = Math.exp(-shimmerDist * shimmerDist * 200) * 0.15;
        const finalAlpha = blockAlpha * (1.0 + shimmerMask);

        ctx.fillStyle = `rgba(${r},${g},${b},${finalAlpha})`;
        ctx.fillRect(col * BLOCK_SIZE, row * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);

        if (blockAlpha > 0.06 && seed(col, row) < 0.4) {
          const ch = CHARS[Math.floor(seed(col + 100, row + 100) * CHARS.length)];
          ctx.fillStyle = `rgba(${r},${g},${b},${blockAlpha * 0.6})`;
          ctx.font = '500 ' + (BLOCK_SIZE * 0.45) + 'px "Inter", sans-serif';
          ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
          ctx.fillText(ch, cx, cy);
        }
      }
    }

    if (logoImg.complete && logoImg.naturalWidth > 0) {
      const logoSize = 26, pad = BLOCK_SIZE * 2;
      let lx, ly;
      switch (cornerOrigin) {
        case 'top-right': lx = width - pad; ly = pad; break;
        case 'bottom-left': lx = pad; ly = height - pad; break;
        case 'top-left': lx = pad; ly = pad; break;
        case 'bottom-right': lx = width - pad; ly = height - pad; break;
      }
      ctx.drawImage(logoImg, lx - logoSize/2, ly - logoSize/2, logoSize, logoSize * (110/138));
    }
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}
```

## Initialization

```javascript
// At page load, after slides are rendered:
const totalSlides = document.querySelectorAll('.slide').length;
for (let i = 1; i < totalSlides; i++) {
  initAnimatedCorner('corner-' + i, i % 2 === 1 ? 'top-right' : 'bottom-left');
}
```

## Positioning (CRITICAL)

The canvas must NOT set `slideEl.style.position = 'relative'`. The canvas uses `position: absolute; inset: 0; pointer-events: none` so it layers behind content without blocking clicks. The slide itself uses `position: absolute; inset: 0`.
