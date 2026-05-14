# Hero Gradient WebGL Shader

Copy-paste this shader for the title slide hero gradient. Ported from HeroGradientGL.tsx on progressionlabs.com.

## Gradient: 14-State Color Cycle Over 70 Seconds

The shader cycles through 14 dual-color states over a 70-second loop, blending two peak colors via 3-octave value noise. The brand palette includes the 5 core colors (Orchid, Salmon, Green, Turquoise, Blue) plus 5 extended themed pairings (Ancient Gild, Vintage Hearth, Terracotta Sunset, Scarlet Glacier, Retro Future).

States (each transitions to the next):
1. Orchid → Blue+Salmon
2. Blue+Salmon → Green
3. Green → Ancient Gild (Gold + Vanilla)
4. Ancient Gild → Orchid+Turquoise
5. Orchid+Turquoise → Salmon
6. Salmon → Terracotta Sunset (Burnt Peach + Soft Apricot)
7. Terracotta → Vintage Hearth (Wine + Ash Grey)
8. Vintage Hearth → Blue+Turquoise
9. Blue+Turquoise → Blue
10. Blue → Scarlet Glacier (Inferno + Periwinkle)
11. Scarlet → Retro Future (Magenta + Yellow)
12. Retro Future → Orchid+Green
13. Orchid+Green → Turquoise
14. Turquoise → Orchid (loops)

Transitions use cubic smoothstep. The 14 segments are arranged so each state's `to` pair matches the next state's `from` pair, giving continuous transitions.

## Luminance Ramp (bottom → top)

Near-black `0.004` → deep `peak*0.06` → mid `peak*0.35` → peak → wash `mix(peak, white, 0.5)` → white. Overlapping smoothsteps eliminate banding.

## Pixel Reveal: Diagonal Shimmer (32px blocks)

Pixelated blocks (32px, matching the website) appear via a sweeping diagonal shimmer band:
- Band sweeps top-left → bottom-right at `fract(time * 0.25)`
- Gaussian mask: `exp(-dist² * 120) * 0.6`
- Per-column y-offset (`hash(cellId.x) * 0.035`) makes blocks visibly differ from the smooth gradient beneath
- **No mouse interaction in decks** — uniform stays at 0

## Page-Load Reveal

A 1.8s entrance animation sweeps from black → dark grey → full gradient, gated by `uRevealProgress`. Per-cell deterministic hash gives an organic dot-pattern reveal.

## Vertex Shader

```glsl
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}
```

## Fragment Shader

```glsl
precision highp float;
uniform float uTime;
uniform float uRevealProgress;
uniform vec2 uResolution;
uniform vec2 uMouse;
uniform float uMouseActive;
varying vec2 vUv;

float ssmooth(float t) { return t * t * (3.0 - 2.0 * t); }
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }

float vnoise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i); float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0)); float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

vec3 computeGradient(vec2 uv, float time, vec3 peakA, vec3 peakB) {
  float gp = uv.y;
  float n1 = vnoise(uv * 1.8 + vec2(time * 0.10, time * 0.07));
  float n2 = vnoise(uv * 3.5 + vec2(-time * 0.08, time * 0.12));
  float n3 = vnoise(uv * 6.0 + vec2(time * 0.15, -time * 0.06));
  float swirl = n1 * 0.5 + n2 * 0.3 + n3 * 0.2;
  float verticalBias = smoothstep(0.05, 0.95, gp);
  float colorMix = clamp(verticalBias + (swirl - 0.5) * 1.0, 0.0, 1.0);
  vec3 peak = mix(peakA, peakB, colorMix);
  float wave = (vnoise(uv * 2.0 + vec2(time * 0.06, -time * 0.04)) - 0.5) * 0.06;
  float protection = smoothstep(0.0, 0.25, gp);
  gp = clamp(gp + wave * protection, 0.0, 1.0);
  vec3 deep = peak * 0.06; vec3 mid = peak * 0.35;
  vec3 wash = mix(peak, vec3(1.0), 0.5);
  float t1 = smoothstep(0.00, 0.10, gp); float t2 = smoothstep(0.06, 0.24, gp);
  float t3 = smoothstep(0.15, 0.55, gp); float t4 = smoothstep(0.45, 0.85, gp);
  float t5 = smoothstep(0.75, 1.00, gp);
  vec3 color = mix(vec3(0.004), deep, t1);
  color = mix(color, mid, t2); color = mix(color, peak, t3);
  color = mix(color, wash, t4); color = mix(color, vec3(1.0), t5);
  return color;
}

vec3 getGradientColor(vec2 uv) {
  // Core brand palette
  vec3 cOrchid    = vec3(0.729, 0.333, 0.827);
  vec3 cSalmon    = vec3(1.000, 0.627, 0.478);
  vec3 cGreen     = vec3(0.725, 0.914, 0.475);
  vec3 cTurquoise = vec3(0.251, 0.878, 0.816);
  vec3 cBlue      = vec3(0.000, 0.000, 1.000);
  // Extended palette
  vec3 cGold        = vec3(0.722, 0.671, 0.220);
  vec3 cVanilla     = vec3(0.878, 0.843, 0.580);
  vec3 cWine        = vec3(0.435, 0.114, 0.106);
  vec3 cAshGrey     = vec3(0.678, 0.741, 0.671);
  vec3 cBurntPeach  = vec3(0.886, 0.447, 0.357);
  vec3 cSoftApricot = vec3(1.000, 0.855, 0.725);
  vec3 cInferno     = vec3(0.667, 0.000, 0.012);
  vec3 cPeriwinkle  = vec3(0.749, 0.706, 0.863);
  vec3 cMagenta     = vec3(1.000, 0.000, 1.000);
  vec3 cYellow      = vec3(1.000, 1.000, 0.000);

  float cycleSec = 70.0;
  float progress = mod(uTime, cycleSec) / cycleSec;
  float seg = progress * 14.0;
  int idx = int(floor(seg));
  float t = ssmooth(seg - floor(seg));

  vec3 fA, fB, tA, tB;
  if (idx == 0)       { fA = cOrchid;     fB = cOrchid;      tA = cBlue;        tB = cSalmon;      }
  else if (idx == 1)  { fA = cBlue;       fB = cSalmon;      tA = cGreen;       tB = cGreen;       }
  else if (idx == 2)  { fA = cGreen;      fB = cGreen;       tA = cGold;        tB = cVanilla;     }
  else if (idx == 3)  { fA = cGold;       fB = cVanilla;     tA = cOrchid;      tB = cTurquoise;   }
  else if (idx == 4)  { fA = cOrchid;     fB = cTurquoise;   tA = cSalmon;      tB = cSalmon;      }
  else if (idx == 5)  { fA = cSalmon;     fB = cSalmon;      tA = cBurntPeach;  tB = cSoftApricot; }
  else if (idx == 6)  { fA = cBurntPeach; fB = cSoftApricot; tA = cWine;        tB = cAshGrey;     }
  else if (idx == 7)  { fA = cWine;       fB = cAshGrey;     tA = cBlue;        tB = cTurquoise;   }
  else if (idx == 8)  { fA = cBlue;       fB = cTurquoise;   tA = cBlue;        tB = cBlue;        }
  else if (idx == 9)  { fA = cBlue;       fB = cBlue;        tA = cInferno;     tB = cPeriwinkle;  }
  else if (idx == 10) { fA = cInferno;    fB = cPeriwinkle;  tA = cMagenta;     tB = cYellow;      }
  else if (idx == 11) { fA = cMagenta;    fB = cYellow;      tA = cOrchid;      tB = cGreen;       }
  else if (idx == 12) { fA = cOrchid;     fB = cGreen;       tA = cTurquoise;   tB = cTurquoise;   }
  else                { fA = cTurquoise;  fB = cTurquoise;   tA = cOrchid;      tB = cOrchid;      }

  vec3 peakA = mix(fA, tA, t); vec3 peakB = mix(fB, tB, t);
  return computeGradient(uv, uTime, peakA, peakB);
}

void main() {
  vec3 smoothColor = getGradientColor(vUv);

  // 32px blocks (matches the website)
  float blockPx = 32.0;
  vec2 grid = uResolution / blockPx;
  vec2 cellId = floor(vUv * grid);
  vec2 pixelUv = cellId / grid;
  float colOffset = hash(vec2(cellId.x, 0.0)) * 0.035;
  pixelUv.y += colOffset;
  vec3 pixelColor = getGradientColor(pixelUv);

  // Mouse mask (unused in decks — uMouseActive is held at 0)
  float aspect = uResolution.x / uResolution.y;
  vec2 aspectVec = vec2(aspect, 1.0);
  float dist = distance(vUv * aspectVec, uMouse * aspectVec);
  float mouseMask = exp(-dist * dist * 18.0) * uMouseActive;

  // Diagonal shimmer band
  float diag = (vUv.x + 1.0 - vUv.y) * 0.5;
  float shimmerPos = fract(uTime * 0.25);
  float shimmerDist = abs(diag - shimmerPos);
  shimmerDist = min(shimmerDist, 1.0 - shimmerDist);
  float shimmerMask = exp(-shimmerDist * shimmerDist * 120.0) * 0.6;

  float mask = max(mouseMask, shimmerMask * (1.0 - uMouseActive));
  vec3 finalColor = mix(smoothColor, pixelColor, mask);

  // Page-load pixel reveal
  if (uRevealProgress < 1.0) {
    float cellCount = floor(uResolution.x / 20.0);
    vec2 revealGrid = vec2(cellCount, cellCount * uResolution.y / uResolution.x);
    vec2 cell = floor(vUv * revealGrid);
    float noise = hash(cell);
    float sweep = 1.0 - vUv.y;
    float threshold = noise * 0.3 + sweep * 0.7;
    vec3 darkColor = vec3(0.14);
    if (uRevealProgress > threshold + 0.08) {
      // revealed
    } else if (uRevealProgress > threshold) {
      gl_FragColor = vec4(darkColor, 1.0); return;
    } else {
      gl_FragColor = vec4(vec3(0.004), 1.0); return;
    }
  }

  gl_FragColor = vec4(finalColor, 1.0);
}
```

## JS Setup (raw WebGL, no Three.js)

The renderer holds shared state (`HERO_STATE`) so the ASCII overlay can sync to the same time/mouse/active values as the shader. Decks force `uMouseActive` to 0 so the pixel reveal is shimmer-only.

```javascript
const HERO_STATE = {
  start: performance.now() / 1000,
  reveal: 0,
  cssW: 0,
  cssH: 0,
};

function initHeroGL() {
  const canvas = document.getElementById('heroGL');
  if (!canvas) return;
  const gl = canvas.getContext('webgl');
  if (!gl) { console.warn('WebGL not supported — CSS fallback gradient active'); return; }

  // CRITICAL: track CSS pixels separately so blockPx=32 stays in CSS pixels,
  // not DPR-scaled canvas pixels.
  function resize() {
    const dpr = Math.min(window.devicePixelRatio, 2);
    HERO_STATE.cssW = canvas.offsetWidth;
    HERO_STATE.cssH = canvas.offsetHeight;
    canvas.width = HERO_STATE.cssW * dpr;
    canvas.height = HERO_STATE.cssH * dpr;
    gl.viewport(0, 0, canvas.width, canvas.height);
  }
  resize();
  window.addEventListener('resize', resize);

  function compile(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src); gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.error('Shader compile error:', gl.getShaderInfoLog(s));
      return null;
    }
    return s;
  }
  const vs = compile(gl.VERTEX_SHADER, VERTEX_SRC);
  const fs = compile(gl.FRAGMENT_SHADER, FRAGMENT_SRC);
  if (!vs || !fs) { console.warn('Shader compilation failed'); return; }
  const prog = gl.createProgram();
  gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    console.error('Program link error:', gl.getProgramInfoLog(prog));
    return;
  }
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);
  const pos = gl.getAttribLocation(prog, 'position');
  gl.enableVertexAttribArray(pos);
  gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

  const uTime = gl.getUniformLocation(prog, 'uTime');
  const uRes = gl.getUniformLocation(prog, 'uResolution');
  const uReveal = gl.getUniformLocation(prog, 'uRevealProgress');
  const uMouse = gl.getUniformLocation(prog, 'uMouse');
  const uMouseActive = gl.getUniformLocation(prog, 'uMouseActive');

  const revealStart = performance.now() / 1000;
  const revealDuration = 1.8;

  function render() {
    const now = performance.now() / 1000;
    const t = now - HERO_STATE.start;
    // Cubic in-out ease for the page-load reveal
    const r = Math.min(1, (now - revealStart) / revealDuration);
    HERO_STATE.reveal = r < 0.5 ? 4 * r * r * r : 1 - Math.pow(-2 * r + 2, 3) / 2;

    gl.uniform1f(uTime, t);
    gl.uniform2f(uRes, HERO_STATE.cssW, HERO_STATE.cssH);
    gl.uniform1f(uReveal, HERO_STATE.reveal);
    gl.uniform2f(uMouse, 0.5, 0.5);
    gl.uniform1f(uMouseActive, 0); // decks are non-interactive
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}
```

## ASCII Overlay (grid-locked to the shader)

A canvas-2D overlay sits at `z-index: 3` above the WebGL canvas with `mix-blend-mode: overlay` and a soft glow. ASCII characters are revealed by the same diagonal shimmer mask, so they appear in sync with the shader's pixel reveal band. The overlay reads from `HERO_STATE.start` so it shares the shader's time origin.

```javascript
function initHeroAscii() {
  const canvas = document.getElementById('heroAscii');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const CHARS = '0123456789@#$%&*+=?<>{}[]/\\|LABS';
  const BLOCK_SIZE = 32;
  const FILL_CHANCE = 0.4;
  const FONT_SIZE = 12;
  let width = 0, height = 0;
  let grid = [];

  function initGrid() {
    width = canvas.offsetWidth; height = canvas.offsetHeight;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr; canvas.height = height * dpr;
    canvas.style.width = width + 'px'; canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    grid = [];
    const cols = Math.ceil(width / BLOCK_SIZE);
    const rows = Math.ceil(height / BLOCK_SIZE);
    for (let cellY = 0; cellY < rows; cellY++) {
      for (let cellX = 0; cellX < cols; cellX++) {
        if (Math.random() < FILL_CHANCE) {
          grid.push({
            cellX, cellY,
            char: CHARS[Math.floor(Math.random() * CHARS.length)],
            brightness: Math.random() * 0.5 + 0.5,
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
    const time = performance.now() / 1000 - HERO_STATE.start;
    ctx.clearRect(0, 0, width, height);
    ctx.font = `500 ${FONT_SIZE}px "Inter", sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const shimmerPos = (time * 0.25) % 1.0;
    for (let i = 0; i < grid.length; i++) {
      const cell = grid[i];
      const vUvX = (cell.cellX + 0.5) * BLOCK_SIZE / width;
      const vUvY = (cell.cellY + 0.5) * BLOCK_SIZE / height;
      const px = vUvX * width;
      const py = height - (vUvY * height); // WebGL y is flipped
      const diag = (vUvX + 1.0 - vUvY) * 0.5;
      let shimmerDist = Math.abs(diag - shimmerPos);
      shimmerDist = Math.min(shimmerDist, 1.0 - shimmerDist);
      const mask = Math.exp(-shimmerDist * shimmerDist * 120.0) * 0.6;
      if (mask > 0.01) {
        const a = mask * cell.brightness;
        ctx.fillStyle = `rgba(255,255,255,${a})`;
        ctx.fillText(cell.char, px, py);
      }
    }
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}
```

Both `initHeroGL()` and `initHeroAscii()` must be called once on page load. The slide-0 HTML must have `class="slide active"` so the WebGL canvas has non-zero dimensions at init time (Safari fails silently otherwise).
