#!/usr/bin/env node
/**
 * process-deck-image.js — ASCII Gradient Post-Processor
 * Ported from websiteplab ascii-gradient-tool (useAsciiGradientRenderer.ts)
 *
 * Takes a B&W photograph and applies:
 * 1. Frosted-glass pixelation on bright areas
 * 2. Glowing ASCII overlay in a single brand color
 * 3. Film grain
 *
 * Usage:
 *   node process-deck-image.js <input.png> <output.png> [--color orchid|salmon|blue|green|turquoise]
 *
 * Requires: @napi-rs/canvas (npm install -g @napi-rs/canvas)
 */

const { createCanvas, loadImage, GlobalFonts } = require('@napi-rs/canvas');
const fs = require('fs');
const path = require('path');

// ─── Brand Colors ───
const BRAND_COLORS = {
  orchid:    [186, 85, 211],
  salmon:    [255, 160, 122],
  blue:      [0, 0, 255],
  green:     [185, 233, 121],
  turquoise: [64, 224, 208],
};

// ─── Defaults (overridable via CLI) ───
const ASCII_CHARSET = '0123456789@#$%&*+=?<>{}[]/\\|LABS';
let CELL_SIZE = 14;
const ASCII_DENSITY = 0.5;
let BRIGHTNESS_CUTOFF = 80;   // mask handles containment, cutoff controls how much of subject gets pixelated
const GRAIN_OPACITY = 0.06;

// Deterministic position hash (same as shapes.ts)
function posHash(x, y) {
  return ((x * 7919 + y * 104729) >>> 0) / 4294967296;
}

// Perceptual brightness (ITU-R BT.709)
function getBrightness(r, g, b) {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// Sample pixel at (x, y) from ImageData
function sampleColor(imageData, x, y) {
  const px = Math.min(Math.max(Math.round(x), 0), imageData.width - 1);
  const py = Math.min(Math.max(Math.round(y), 0), imageData.height - 1);
  const i = (py * imageData.width + px) * 4;
  return [imageData.data[i], imageData.data[i + 1], imageData.data[i + 2]];
}

async function processImage(inputPath, outputPath, brandColor, maskPath) {
  const [colorR, colorG, colorB] = BRAND_COLORS[brandColor] || BRAND_COLORS.orchid;

  // Load mask if provided
  let maskData = null;
  let maskWidth = 0, maskHeight = 0;
  if (maskPath && fs.existsSync(maskPath)) {
    const maskImg = await loadImage(maskPath);
    const maskCanvas = createCanvas(maskImg.width, maskImg.height);
    const maskCtx = maskCanvas.getContext('2d');
    maskCtx.drawImage(maskImg, 0, 0);
    const mImgData = maskCtx.getImageData(0, 0, maskImg.width, maskImg.height);
    maskData = mImgData.data;
    maskWidth = maskImg.width;
    maskHeight = maskImg.height;
    console.log(`Mask loaded: ${maskPath} (${maskWidth}x${maskHeight})`);
  }

  // Load image
  const img = await loadImage(inputPath);
  let width = img.width;
  let height = img.height;

  // Cap at 2048px
  const maxDim = 2048;
  if (width > maxDim || height > maxDim) {
    const scale = maxDim / Math.max(width, height);
    width = Math.round(width * scale);
    height = Math.round(height * scale);
  }

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Layer 1: Draw original image as base
  ctx.drawImage(img, 0, 0, width, height);
  const imageData = ctx.getImageData(0, 0, width, height);

  // Layer 2 + 3: Grid iteration — frosted pixel blocks + glowing ASCII
  // Step = cellSize * 2 (from useAsciiGradientRenderer)
  const step = CELL_SIZE * 2;
  const fontSize = Math.max(8, CELL_SIZE * 1.6);
  ctx.font = `500 ${fontSize}px Inter, system-ui, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Collect all drawn blocks for post-loop tinting
  const allBlocks = [];

  for (let cellY = CELL_SIZE; cellY < height; cellY += step) {
    for (let cellX = CELL_SIZE; cellX < width; cellX += step) {
      // Mask check — if mask provided, skip cells outside the subject
      if (maskData) {
        const mx = Math.min(Math.round(cellX * maskWidth / width), maskWidth - 1);
        const my = Math.min(Math.round(cellY * maskHeight / height), maskHeight - 1);
        const mi = (my * maskWidth + mx) * 4; // RGBA
        if (maskData[mi] < 128) continue;
      }

      // Sample color at cell center
      const [r, g, b] = sampleColor(imageData, cellX, cellY);
      const brightness = getBrightness(r, g, b);

      // Brightness cutoff — secondary filter after mask
      if (brightness < BRIGHTNESS_CUTOFF) continue;

      // Layer 2: Frosted glass pixel block — pure greyscale
      ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx.fillRect(cellX - CELL_SIZE, cellY - CELL_SIZE, CELL_SIZE * 2, CELL_SIZE * 2);

      // Track for watercolor blobs
      allBlocks.push({ x: cellX - CELL_SIZE, y: cellY - CELL_SIZE, r, g, b });

      // Layer 3: Glowing ASCII — screen blend creates natural watercolor tinting
      const fillGate = posHash(cellX, cellY);
      if (fillGate > ASCII_DENSITY) continue;

      const charIdx = ((cellX * 7919 + cellY * 104729) >>> 0) % ASCII_CHARSET.length;
      const char = ASCII_CHARSET[charIdx];

      // ASCII opacity gradient — top-to-bottom fade (dense at top, faint at bottom)
      ctx.globalCompositeOperation = 'source-over';
      const ny = cellY / height;
      const asciiOpacity = Math.max(0.05, 0.9 - ny * 0.85); // 0.9 at top → 0.05 at bottom
      ctx.shadowBlur = Math.max(3, CELL_SIZE * 0.3);
      ctx.shadowColor = `rgba(${colorR},${colorG},${colorB},${asciiOpacity * 0.4})`;
      ctx.fillStyle = `rgba(${colorR},${colorG},${colorB},${asciiOpacity})`;
      ctx.fillText(char, cellX, cellY);

      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
    }
  }

  // Watercolor blobs — 3-5 clusters of color-tinted blocks
  if (allBlocks.length > 0) {
    const blobCount = 3 + Math.floor(Math.random() * 3);
    const shuffled = [...allBlocks].sort(() => Math.random() - 0.5);
    const blobCenters = shuffled.slice(0, blobCount);
    const blobRadius = CELL_SIZE * 10;

    for (const block of allBlocks) {
      let closestDist = Infinity;
      for (const center of blobCenters) {
        const dx = block.x - center.x, dy = block.y - center.y;
        closestDist = Math.min(closestDist, Math.sqrt(dx * dx + dy * dy));
      }
      if (closestDist > blobRadius) continue;
      const t = 1 - (closestDist / blobRadius);
      const tintStrength = t * t;
      // Draw a semi-transparent colored overlay on the block
      ctx.fillStyle = `rgba(${colorR},${colorG},${colorB},${tintStrength * 0.35})`;
      ctx.fillRect(block.x, block.y, CELL_SIZE * 2, CELL_SIZE * 2);
      // Redraw ASCII on tinted blocks
      const bCx = block.x + CELL_SIZE, bCy = block.y + CELL_SIZE;
      if (posHash(bCx, bCy) <= ASCII_DENSITY) {
        const ci = ((bCx * 7919 + bCy * 104729) >>> 0) % ASCII_CHARSET.length;
        ctx.fillStyle = `rgba(${colorR},${colorG},${colorB},0.7)`;
        ctx.fillText(ASCII_CHARSET[ci], bCx, bCy);
      }
    }
  }

  // Layer 4: Film grain overlay
  if (GRAIN_OPACITY > 0) {
    const grainCanvas = createCanvas(width, height);
    const grainCtx = grainCanvas.getContext('2d');
    const grainData = grainCtx.createImageData(width, height);
    const pixels = grainData.data;
    for (let i = 0; i < pixels.length; i += 4) {
      const v = Math.random() * 255;
      pixels[i] = v;
      pixels[i + 1] = v;
      pixels[i + 2] = v;
      pixels[i + 3] = 255;
    }
    grainCtx.putImageData(grainData, 0, 0);
    ctx.globalAlpha = GRAIN_OPACITY;
    ctx.globalCompositeOperation = 'overlay';
    ctx.drawImage(grainCanvas, 0, 0);
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
  }

  // Export PNG
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputPath, buffer);
  console.log(`Processed: ${outputPath} (${width}x${height}, color: ${brandColor})`);
}

// ─── CLI ───
const args = process.argv.slice(2);
if (args.length < 2) {
  console.log('Usage: node process-deck-image.js <input.png> <output.png> [--color orchid|salmon|blue|green|turquoise] [--size 14] [--mask mask.png]');
  process.exit(1);
}

const inputPath = path.resolve(args[0]);
const outputPath = path.resolve(args[1]);
let color = 'orchid';

const colorIdx = args.indexOf('--color');
if (colorIdx !== -1 && args[colorIdx + 1]) {
  color = args[colorIdx + 1].toLowerCase();
}

const sizeIdx = args.indexOf('--size');
if (sizeIdx !== -1 && args[sizeIdx + 1]) {
  CELL_SIZE = parseInt(args[sizeIdx + 1], 10);
}

const cutoffIdx = args.indexOf('--cutoff');
if (cutoffIdx !== -1 && args[cutoffIdx + 1]) {
  BRIGHTNESS_CUTOFF = parseInt(args[cutoffIdx + 1], 10);
}

let maskPath = null;
const maskIdx = args.indexOf('--mask');
if (maskIdx !== -1 && args[maskIdx + 1]) {
  maskPath = path.resolve(args[maskIdx + 1]);
}

if (!fs.existsSync(inputPath)) {
  console.error(`Input file not found: ${inputPath}`);
  process.exit(1);
}

processImage(inputPath, outputPath, color, maskPath)
  .then(() => process.exit(0))
  .catch(err => { console.error(err); process.exit(1); });
