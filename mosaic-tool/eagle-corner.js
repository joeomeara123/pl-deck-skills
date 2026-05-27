#!/usr/bin/env node
/**
 * eagle-corner.js — uniform pixel-mosaic + ASCII corner stamp
 *
 * Samples a photograph and tiles solid color blocks in a chosen corner,
 * then draws a brand-navy ASCII glyph inside each block (overlay blend).
 * A radial mask anchored at the corner (smoothstep falloff over
 * `radius * diagonal`) controls block + glyph alpha so the mosaic
 * dissolves into the untouched image.
 *
 * Usage:
 *   node eagle-corner.js <input> <output> --corner <top-left|top-right|bottom-left|bottom-right> [--radius 0.55] [--size 24]
 */

const { createCanvas, loadImage } = require('@napi-rs/canvas');
const fs = require('fs');
const path = require('path');

// Brand navy from websiteplab/app/experiment/experiment.css:16 (--exp-navy: #0943A0)
const COLOR_R = 9, COLOR_G = 67, COLOR_B = 160;

// Character set from AsciiOverlay.tsx
const ASCII_CHARSET = '0123456789@#$%&*+=?<>{}[]/\\|LABS';

// Chunkier blocks than the site (which uses 32px) to match the reference's
// pixel-mosaic feel. Block edge length in pixels = CELL_SIZE * 2.
let CELL_SIZE = 24;

// Higher-quality position hash — uses the full 32-bit space rather than
// `(x*p1 + y*p2) % charset.length`, which clustered around a few chars
// when (cellX, cellY) marched in fixed grid steps.
function posHash(x, y) {
  let h = (x * 73856093) ^ (y * 19349663);
  h = (h ^ (h >>> 13)) >>> 0;
  h = Math.imul(h, 1274126177) >>> 0;
  h = (h ^ (h >>> 16)) >>> 0;
  return h / 4294967296;
}

// Average the RGB of every pixel inside the cell bounds. Softer / less
// noisy than single-pixel sampling — produces the "frosted glass" base
// tone the reference mosaic has.
function averageColor(imageData, cellX, cellY, half) {
  const w = imageData.width, h = imageData.height;
  const x0 = Math.max(0, cellX - half), x1 = Math.min(w, cellX + half);
  const y0 = Math.max(0, cellY - half), y1 = Math.min(h, cellY + half);
  let sr = 0, sg = 0, sb = 0, n = 0;
  for (let y = y0; y < y1; y++) {
    let i = (y * w + x0) * 4;
    for (let x = x0; x < x1; x++, i += 4) {
      sr += imageData.data[i];
      sg += imageData.data[i + 1];
      sb += imageData.data[i + 2];
      n++;
    }
  }
  if (n === 0) return [0, 0, 0];
  return [Math.round(sr / n), Math.round(sg / n), Math.round(sb / n)];
}

function cornerAnchor(corner, width, height) {
  switch (corner) {
    case 'top-left':     return [0, 0];
    case 'top-right':    return [width, 0];
    case 'bottom-left':  return [0, height];
    case 'bottom-right': return [width, height];
    default: throw new Error(`Unknown corner: ${corner}`);
  }
}

// Build a grayscale mask (RGBA buffer) where the chosen corner is pure white
// and the mask falls off to black over ~radius * diagonal distance.
function buildCornerMask(width, height, corner, radius) {
  const [ax, ay] = cornerAnchor(corner, width, height);
  const diag = Math.sqrt(width * width + height * height);
  const reach = diag * radius;
  const data = new Uint8ClampedArray(width * height * 4);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const dx = x - ax, dy = y - ay;
      const dist = Math.sqrt(dx * dx + dy * dy);
      let t = 1 - Math.min(1, dist / reach);
      // smoothstep for softer falloff
      t = t * t * (3 - 2 * t);
      const v = Math.round(t * 255);
      const i = (y * width + x) * 4;
      data[i] = v; data[i + 1] = v; data[i + 2] = v; data[i + 3] = 255;
    }
  }
  return { data, width, height };
}

async function processImage(inputPath, outputPath, corner, radius) {
  const img = await loadImage(inputPath);
  let width = img.width;
  let height = img.height;

  const maxDim = 2048;
  if (width > maxDim || height > maxDim) {
    const scale = maxDim / Math.max(width, height);
    width = Math.round(width * scale);
    height = Math.round(height * scale);
  }

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Layer 1: original image
  ctx.drawImage(img, 0, 0, width, height);
  const imageData = ctx.getImageData(0, 0, width, height);

  // Corner mask
  const mask = buildCornerMask(width, height, corner, radius);
  const maskData = mask.data;
  const maskWidth = mask.width;
  const maskHeight = mask.height;

  // Uniform pixel grid — every cell inside the mask gets a solid block
  // sampled from the source image plus a navy ASCII glyph on top.
  // Mask alpha controls the radial dissolve for both layers.
  const step = CELL_SIZE * 2;
  const fontSize = Math.round(CELL_SIZE * 2 * 0.45);
  ctx.font = `500 ${fontSize}px Inter, system-ui, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  for (let cellY = CELL_SIZE; cellY < height; cellY += step) {
    for (let cellX = CELL_SIZE; cellX < width; cellX += step) {
      const mx = Math.min(Math.round(cellX * maskWidth / width), maskWidth - 1);
      const my = Math.min(Math.round(cellY * maskHeight / height), maskHeight - 1);
      const mi = (my * maskWidth + mx) * 4;
      const maskV = maskData[mi];
      // Hard clip the outer ring — keeps the haze of faint navy-tinted
      // blocks from bleeding across the image. Then linear-ramp the block
      // alpha so visible cells fade in cleanly between threshold and mid-mask.
      if (maskV < 48) continue;
      const blockAlpha = Math.min(1, (maskV - 48) / 96);

      const alpha = maskV / 255;
      // gradT runs 0 at the corner anchor → ~1 at the mask edge. Capped at
      // 0.7 so even the farthest block keeps 30% of its frosted-photo tone
      // — avoids dropping near-pure-navy patches onto the photograph.
      const gradT = Math.min(0.7, 1 - alpha);

      const [ar, ag, ab] = averageColor(imageData, cellX, cellY, CELL_SIZE);
      const k = 0.55;
      const lr = ar + (255 - ar) * k;
      const lg = ag + (255 - ag) * k;
      const lb = ab + (255 - ab) * k;

      const fr = Math.round(lr * (1 - gradT) + COLOR_R * gradT);
      const fg = Math.round(lg * (1 - gradT) + COLOR_G * gradT);
      const fb = Math.round(lb * (1 - gradT) + COLOR_B * gradT);

      ctx.globalAlpha = blockAlpha;
      ctx.fillStyle = `rgb(${fr},${fg},${fb})`;
      ctx.fillRect(cellX - CELL_SIZE, cellY - CELL_SIZE, CELL_SIZE * 2, CELL_SIZE * 2);

      // Layer B: brand-navy ASCII glyph. Lower contrast (0.75 of mask alpha)
      // and no shadow — chars integrate with the block rather than glowing.
      const charIdx = Math.floor(posHash(cellX, cellY) * ASCII_CHARSET.length);
      const char = ASCII_CHARSET[charIdx];
      ctx.globalAlpha = 1;
      ctx.fillStyle = `rgba(${COLOR_R},${COLOR_G},${COLOR_B},${alpha * 0.75})`;
      ctx.fillText(char, cellX, cellY);
    }
  }
  ctx.globalAlpha = 1;
  ctx.globalCompositeOperation = 'source-over';

  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputPath, buffer);
  console.log(`Wrote ${outputPath} (${width}x${height}, corner=${corner}, radius=${radius})`);
}

// CLI
const args = process.argv.slice(2);
if (args.length < 2) {
  console.log('Usage: node eagle-corner.js <input> <output> --corner <top-left|top-right|bottom-left|bottom-right> [--radius 0.55] [--size 16]');
  process.exit(1);
}

const inputPath = path.resolve(args[0]);
const outputPath = path.resolve(args[1]);

let corner = 'top-left';
let radius = 0.55;

const cornerIdx = args.indexOf('--corner');
if (cornerIdx !== -1 && args[cornerIdx + 1]) corner = args[cornerIdx + 1];

const radiusIdx = args.indexOf('--radius');
if (radiusIdx !== -1 && args[radiusIdx + 1]) radius = parseFloat(args[radiusIdx + 1]);

const sizeIdx = args.indexOf('--size');
if (sizeIdx !== -1 && args[sizeIdx + 1]) CELL_SIZE = parseInt(args[sizeIdx + 1], 10);

if (!fs.existsSync(inputPath)) {
  console.error(`Input file not found: ${inputPath}`);
  process.exit(1);
}

processImage(inputPath, outputPath, corner, radius)
  .then(() => process.exit(0))
  .catch(err => { console.error(err); process.exit(1); });
