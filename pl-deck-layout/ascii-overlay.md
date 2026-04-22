# ASCII Overlay (Canvas 2D Layer)

Renders ASCII characters over the hero gradient, aligned to the same 45px pixel blocks as the WebGL shader. Characters appear only where the shimmer band is active.

Ported directly from `AsciiOverlay.tsx` on the PL website.

## Key Rules

- **No DPR scaling** on canvas. Set `canvas.width = offsetWidth` (1:1 with CSS pixels). The WebGL canvas handles its own DPR via Three.js/raw GL; the ASCII overlay stays simple.
- **No block backgrounds**. Only draw characters (`fillText`), never `fillRect`. The WebGL shader handles the pixel block visuals.
- **Y-axis flip**. Canvas Y is inverted vs WebGL. Convert with `py = height - (vUvY * height)`.
- **Shared time origin**. Both WebGL and ASCII must use the same `HERO_START` timestamp so the shimmer bands are perfectly synchronized.
- **Characters only appear in the shimmer band**. If `shimmerMask < 0.01`, skip the cell entirely.

## Parameters

- Characters: `'0123456789@#$%&*+=?<>{}[]/\\|LABS'`
- Grid: 45px blocks, identical to the WebGL pixel grid
- Fill chance: 40% of blocks get a character
- Font: `500 14px "Inter", sans-serif`, white, centered
- Character alpha: `shimmerMask * cell.brightness` where brightness is random 0.5-1.0

## Implementation (copy-paste)

```javascript
// Shared time origin (declare once, before both initHeroGL and initAsciiOverlay)
const HERO_START = performance.now();

function initAsciiOverlay() {
  const canvas = document.getElementById('heroAscii');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const BLOCK = 45;
  const CHARS = '0123456789@#$%&*+=?<>{}[]/\\|LABS';
  const FILL = 0.4;

  let width = 0, height = 0, grid = [];

  function initGrid() {
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    // 1:1 with CSS pixels — NO DPR scaling
    canvas.width = width;
    canvas.height = height;
    grid = [];
    const cols = Math.ceil(width / BLOCK);
    const rows = Math.ceil(height / BLOCK);
    // cellY starts from 0 at BOTTOM to match WebGL UV origin
    for (let cellY = 0; cellY < rows; cellY++) {
      for (let cellX = 0; cellX < cols; cellX++) {
        if (Math.random() < FILL) {
          grid.push({
            cellX: cellX,
            cellY: cellY,
            char: CHARS[Math.floor(Math.random() * CHARS.length)],
            brightness: Math.random() * 0.5 + 0.5
          });
        }
      }
    }
  }
  initGrid();
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initGrid, 100);
  });

  function render() {
    const time = (performance.now() - HERO_START) / 1000;
    ctx.clearRect(0, 0, width, height);
    ctx.font = '500 14px "Inter", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let i = 0; i < grid.length; i++) {
      const cell = grid[i];
      // WebGL UV coordinates for center of this block
      const vUvX = (cell.cellX + 0.5) * BLOCK / width;
      const vUvY = (cell.cellY + 0.5) * BLOCK / height;
      // Convert to canvas pixel coords (canvas Y is inverted vs WebGL)
      const px = vUvX * width;
      const py = height - (vUvY * height);

      // Shimmer mask (matches WebGL shader exactly)
      const diag = (vUvX + 1.0 - vUvY) * 0.5;
      const shimmerPos = (time * 0.25) % 1.0;
      let shimmerDist = Math.abs(diag - shimmerPos);
      shimmerDist = Math.min(shimmerDist, 1.0 - shimmerDist);
      const shimmerMask = Math.exp(-shimmerDist * shimmerDist * 120.0) * 0.6;

      // Only draw if shimmer band is active here
      if (shimmerMask > 0.01) {
        const finalAlpha = shimmerMask * cell.brightness;
        ctx.fillStyle = `rgba(255,255,255,${finalAlpha})`;
        ctx.fillText(cell.char, px, py);
      }
    }
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}
```

## Critical: Slide Must Be Visible

The hero slide (`#slide-0`) MUST have `class="slide active"` in the HTML so the canvas has non-zero dimensions when `initHeroGL()` and `initAsciiOverlay()` run. If the slide starts with `display: none`, both canvases will initialize with 0x0 dimensions and fail silently.

## Initialization

Call `initAsciiOverlay()` after `initHeroGL()` at page load. Both use `HERO_START` for synchronized shimmer.
