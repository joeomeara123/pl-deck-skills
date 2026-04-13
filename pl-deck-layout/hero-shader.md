# Hero Gradient WebGL Shader

Copy-paste this shader code for the title slide hero gradient. Ported from HeroGradientGL.tsx on progressionlabs.com.

## Gradient: Animated 5-Color Cycling

All 5 brand colors cycle through 9 dual-color states over 45 seconds:
- Orchid → Blue+Salmon → Green → Orchid+Turquoise → Salmon → Blue+Turquoise → Blue → Orchid+Green → Turquoise → loop
- Transitions use cubic smoothstep easing
- 3-octave value noise creates organic color swirling
- Luminance ramp (bottom→top): near-black `0.004` → deep `peak*0.06` → mid `peak*0.35` → peak → wash `mix(peak, white, 0.5)` → white

## Pixel Reveal: Diagonal Shimmer Only

Pixelated blocks (45px) appear via a sweeping diagonal shimmer band:
- Band sweeps top-left → bottom-right at `fract(time * 0.25)`
- Gaussian: `exp(-dist^2 * 120) * 0.6`
- NO mouse interaction in decks (strip uMouse/uMouseActive uniforms)

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
uniform vec2 uResolution;
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
  vec3 cO = vec3(0.729, 0.333, 0.827); // Orchid
  vec3 cS = vec3(1.000, 0.627, 0.478); // Salmon
  vec3 cG = vec3(0.725, 0.914, 0.475); // Green
  vec3 cT = vec3(0.251, 0.878, 0.816); // Turquoise
  vec3 cB = vec3(0.000, 0.000, 1.000); // Blue
  float progress = mod(uTime, 45.0) / 45.0;
  float seg = progress * 9.0;
  int idx = int(floor(seg));
  float t = ssmooth(seg - floor(seg));
  vec3 fA, fB, tA, tB;
  if (idx == 0)      { fA = cO; fB = cO; tA = cB; tB = cS; }
  else if (idx == 1) { fA = cB; fB = cS; tA = cG; tB = cG; }
  else if (idx == 2) { fA = cG; fB = cG; tA = cO; tB = cT; }
  else if (idx == 3) { fA = cO; fB = cT; tA = cS; tB = cS; }
  else if (idx == 4) { fA = cS; fB = cS; tA = cB; tB = cT; }
  else if (idx == 5) { fA = cB; fB = cT; tA = cB; tB = cB; }
  else if (idx == 6) { fA = cB; fB = cB; tA = cO; tB = cG; }
  else if (idx == 7) { fA = cO; fB = cG; tA = cT; tB = cT; }
  else               { fA = cT; fB = cT; tA = cO; tB = cO; }
  vec3 peakA = mix(fA, tA, t); vec3 peakB = mix(fB, tB, t);
  return computeGradient(uv, uTime, peakA, peakB);
}

void main() {
  vec3 smoothColor = getGradientColor(vUv);
  float blockPx = 45.0;
  vec2 grid = uResolution / blockPx;
  vec2 cellId = floor(vUv * grid);
  vec2 pixelUv = cellId / grid;
  float colOffset = hash(vec2(cellId.x, 0.0)) * 0.035;
  pixelUv.y += colOffset;
  vec3 pixelColor = getGradientColor(pixelUv);

  // Diagonal shimmer (no mouse interaction in decks)
  float diag = (vUv.x + 1.0 - vUv.y) * 0.5;
  float shimmerPos = fract(uTime * 0.25);
  float shimmerDist = abs(diag - shimmerPos);
  shimmerDist = min(shimmerDist, 1.0 - shimmerDist);
  float shimmerMask = exp(-shimmerDist * shimmerDist * 120.0) * 0.6;

  vec3 finalColor = mix(smoothColor, pixelColor, shimmerMask);
  gl_FragColor = vec4(finalColor, 1.0);
}
```

## JS Setup (Raw WebGL, No Three.js)

```javascript
function initHeroGL() {
  const canvas = document.getElementById('heroGL');
  const gl = canvas.getContext('webgl');
  if (!gl) return;

  // CRITICAL: Track CSS pixel dimensions separately from canvas pixel dimensions.
  // The shader's blockPx=45.0 operates in CSS pixels, so uResolution must receive
  // CSS dimensions — NOT canvas.width/height which includes DPR scaling.
  // Passing DPR-scaled values makes blocks appear too small on retina displays.
  let cssW = 0, cssH = 0;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio, 2);
    cssW = canvas.offsetWidth;
    cssH = canvas.offsetHeight;
    canvas.width = cssW * dpr;
    canvas.height = cssH * dpr;
    gl.viewport(0, 0, canvas.width, canvas.height);
  }
  resize();
  window.addEventListener('resize', resize);

  // Compile shaders (vertex + fragment from above)
  function compile(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return s;
  }
  const vs = compile(gl.VERTEX_SHADER, VERTEX_SRC);
  const fs = compile(gl.FRAGMENT_SHADER, FRAGMENT_SRC);
  const prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  gl.useProgram(prog);

  // Fullscreen quad
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);
  const pos = gl.getAttribLocation(prog, 'position');
  gl.enableVertexAttribArray(pos);
  gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

  const uTime = gl.getUniformLocation(prog, 'uTime');
  const uRes = gl.getUniformLocation(prog, 'uResolution');
  const start = performance.now();

  function render() {
    const t = (performance.now() - start) / 1000;
    gl.uniform1f(uTime, t);
    gl.uniform2f(uRes, cssW, cssH); // CSS pixels, not canvas pixels
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}
```
