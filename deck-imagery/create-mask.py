#!/usr/bin/env python3
"""
create-mask.py — Subject isolation mask using rembg

Takes an image and outputs a binary mask PNG (white = subject, black = background).
Used by process-deck-image.js to contain the ASCII gradient effect to the subject only.

Usage:
    python create-mask.py input.png mask.png

Requires: pip install rembg pillow (use the venv in this directory)
"""

import sys
from pathlib import Path
from PIL import Image
from rembg import remove

def create_mask(input_path: str, output_path: str):
    img = Image.open(input_path).convert("RGBA")

    # rembg removes background → returns RGBA with transparent bg
    result = remove(img)

    # Extract alpha channel as the mask (white = subject, black = background)
    alpha = result.split()[3]

    # Binarize: anything > 128 alpha = white (subject)
    mask = alpha.point(lambda p: 255 if p > 128 else 0)

    # Save as grayscale PNG
    mask.convert("L").save(output_path)
    print(f"Mask saved: {output_path} ({img.width}x{img.height})")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python create-mask.py <input.png> <output_mask.png>")
        sys.exit(1)

    input_path = sys.argv[1]
    output_path = sys.argv[2]

    if not Path(input_path).exists():
        print(f"Input file not found: {input_path}")
        sys.exit(1)

    create_mask(input_path, output_path)
