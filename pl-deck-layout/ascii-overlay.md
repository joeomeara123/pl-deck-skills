# ASCII Overlay (Canvas 2D Layer)

Renders ASCII characters over the hero gradient, positioned inside the same 45px pixel blocks as the WebGL shader. Characters are drawn on top of a faint block background so they appear to live inside the pixelated grid, not floating independently.

## Parameters

- Characters: `'0123456789@#$%&*+=?<>{}[]/\\|LABS'`
- Grid: 45px blocks, identical to the WebGL pixel grid
- Fill chance: 20% of blocks get a character (sparse, clean look)
- Font: `500 ${Math.round(BLOCK*0.35)}px "Inter", sans-serif`, white, centered within block (35% of block size)
- Block background: `rgba(255,255,255, shimmerMask * 0.06)` drawn as a filled rectangle before the character
- Character alpha: `shimmerMask * cell.brightness` where brightness is random 0.5-1.0
- The block background + character together create the "text inside pixel" look

## Implementation (copy-paste)

```javascript
function initAsciiOverlay() {
  const canvas = document.getElementById('heroAscii');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const BLOCK = 45;
  const CHARS = '0123456789@#$%&*+=?<>{}[]/\\|LABS';
  const startTime = performance.now() / 1000;

  const hash = (x, y) => {
    const h = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
    return h - Math.floor(h);
  };

  let width = 0, height = 0, cells = [];

  function resize() {
    const dpr = Math.min(window.devicePixelRatio, 2);
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Rebuild cell grid — uses same col/row indexing as WebGL
    const cols = Math.ceil(width / BLOCK);
    const rows = Math.ceil(height / BLOCK);
    cells = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (hash(c, r) < 0.2) {
          cells.push({
            x: c * BLOCK,           // block top-left x
            y: r * BLOCK,           // block top-left y
            cx: (c + 0.5) * BLOCK,  // block center x
            cy: (r + 0.5) * BLOCK,  // block center y
            ch: CHARS[Math.floor(hash(c + 50, r + 50) * CHARS.length)],
            brightness: 0.5 + hash(c + 200, r + 200) * 0.5,
            col: c, row: r
          });
        }
      }
    }
  }
  resize();
  window.addEventListener('resize', resize);

  function render() {
    const time = performance.now() / 1000 - startTime;
    ctx.clearRect(0, 0, width, height);

    const shimmerPos = (time * 0.25) % 1.0;

    for (const cell of cells) {
      // Convert block center to UV space matching the WebGL shader
      const nx = cell.cx / width;
      const ny = 1 - (cell.cy / height);
      const diag = (nx + 1.0 - ny) * 0.5;
      let shimmerDist = Math.abs(diag - shimmerPos);
      shimmerDist = Math.min(shimmerDist, 1.0 - shimmerDist);
      const shimmerMask = Math.exp(-shimmerDist * shimmerDist * 120) * 0.6;

      if (shimmerMask < 0.02) continue;

      // Draw block background — makes the character look "inside" the pixel
      const blockAlpha = shimmerMask * 0.06;
      ctx.fillStyle = `rgba(255,255,255,${blockAlpha})`;
      ctx.fillRect(cell.x, cell.y, BLOCK, BLOCK);

      // Draw character centered in block, sized to fit cleanly (35% of block)
      const charAlpha = shimmerMask * cell.brightness;
      const fontSize = Math.round(BLOCK * 0.35);
      ctx.fillStyle = `rgba(255,255,255,${charAlpha})`;
      ctx.font = `500 ${fontSize}px "Inter", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(cell.ch, cell.cx, cell.cy);
    }

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}
```

## Initialization

Call `initAsciiOverlay()` after `initHeroGL()` at page load.
