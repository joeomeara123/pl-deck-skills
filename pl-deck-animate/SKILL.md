---
name: pl-deck-animate
description: Use when adding GSAP animations to Progression Labs HTML decks. Handles slide transition choreography, slot machine number count-ups, icon draw-on animations, and animation locking to prevent double-skip.
---

# PL Deck Animation

GSAP-powered slide animations for Progression Labs decks. Elements animate in visual hierarchy order (a "build" effect like Keynote).

## CDN

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
```

## Animation Lock

Prevent double-skip by blocking navigation during transitions:

```javascript
let isAnimating = false;

function goToSlide(idx) {
  if (isAnimating || idx < 0 || idx >= slides.length || idx === currentSlide) return;
  isAnimating = true;

  slides[currentSlide].classList.remove('active');
  slides[idx].classList.add('active');
  dots[currentSlide].classList.remove('active');
  dots[idx].classList.add('active');
  currentSlide = idx;

  animateSlideIn(slides[idx]);
}
```

## CSS Prep (Hide Before Animation)

All animatable elements start hidden. GSAP reveals them in sequence.

```css
.slide .content .label,
.slide .content .heading,
.slide .content .body-text,
.slide .content .brand-quote,
.slide .content .card,
.slide .content .future-card,
.slide .content .stat-item,
.slide .content .versus-col,
.slide .content .cta-btn,
.slide .content .highlight-number,
.slide .content .logo-wrap,
.slide .content .plus-divider,
.slide .content .contact-heading,
.slide .content .contact-name,
.slide .content .contact-role,
.slide .content .contact-email {
  opacity: 0;
}
.slide .content .divider {
  transform: scaleX(0);
}
```

## Per-Element Choreography

Elements animate in this order (visual hierarchy, top to bottom):

| Element | Animation | Duration | Offset |
|---------|-----------|----------|--------|
| `.label` | `opacity: 0→1, y: 12→0` | 0.4s | first |
| `.divider` | `scaleX: 0→1` | 0.5s | +0.08s |
| `.heading` | `opacity: 0→1, y: 20→0` | 0.6s | +0.12s |
| `.body-text` | `opacity: 0→1, y: 14→0` | 0.5s | +0.15s |
| `.plus-divider` | `opacity: 0→1` | 0.4s | +0.08s |
| `.card` / `.future-card` | `opacity: 0→1, y: 30→0` | 0.6s | stagger: 0.1s |
| `.highlight-number` | `opacity: 0→1, scale: 0.8→1` | 0.6s | stagger: 0.1s |
| `.stat-item` | `opacity: 0→1, y: 16→0` | 0.5s | stagger: 0.12s |
| `.versus-col` (left) | `opacity: 0→1, x: -30→0` | 0.6s | simultaneous |
| `.versus-col` (right) | `opacity: 0→1, x: 30→0` | 0.6s | +0.1s |
| `.brand-quote` | `opacity: 0→1, x: -20→0` | 0.6s | after body |
| `.cta-btn` | `opacity: 0→1, y: 12→0` | 0.5s | last |
| `.logo-wrap` (hero) | `opacity: 0→1, scale: 0.9→1` | 0.8s | 0s |
| `.contact-heading` | `opacity: 0→1, y: 20→0` | 0.7s | first |

## Core animateSlideIn Function (copy-paste)

```javascript
function animateSlideIn(el) {
  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' },
    onComplete: () => { isAnimating = false; }
  });

  // Labels
  const labels = el.querySelectorAll('.content .label');
  if (labels.length) tl.to(labels, { opacity: 1, y: 0, duration: 0.4 }, 0);

  // Dividers
  const dividers = el.querySelectorAll('.content .divider');
  if (dividers.length) tl.to(dividers, { scaleX: 1, duration: 0.5 }, 0.08);

  // Headings
  const headings = el.querySelectorAll('.content .heading');
  if (headings.length) tl.to(headings, { opacity: 1, y: 0, duration: 0.6 }, 0.12);

  // Body text
  const bodyText = el.querySelectorAll('.content .body-text');
  if (bodyText.length) tl.to(bodyText, { opacity: 1, y: 0, duration: 0.5 }, 0.2);

  // Plus dividers
  const plusDivs = el.querySelectorAll('.content .plus-divider');
  if (plusDivs.length) tl.to(plusDivs, { opacity: 1, duration: 0.4 }, 0.25);

  // Cards (stagger)
  const cards = el.querySelectorAll('.content .card, .content .future-card');
  if (cards.length) tl.to(cards, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, 0.3);

  // Stat items (stagger)
  const stats = el.querySelectorAll('.content .stat-item');
  if (stats.length) tl.to(stats, { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 }, 0.3);

  // Versus columns
  const versusLeft = el.querySelectorAll('.content .versus-col:first-child');
  const versusRight = el.querySelectorAll('.content .versus-col:last-child');
  if (versusLeft.length) tl.to(versusLeft, { opacity: 1, x: 0, duration: 0.6 }, 0.3);
  if (versusRight.length) tl.to(versusRight, { opacity: 1, x: 0, duration: 0.6 }, 0.4);

  // Brand quote
  const quote = el.querySelectorAll('.content .brand-quote');
  if (quote.length) tl.to(quote, { opacity: 1, x: 0, duration: 0.6 }, 0.4);

  // Highlight numbers (scale + slot machine count-up)
  const nums = el.querySelectorAll('.content .highlight-number');
  if (nums.length) {
    tl.to(nums, { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1 }, 0.3);
    // Slot machine animation
    nums.forEach((numEl, i) => {
      const raw = numEl.textContent.trim();
      const prefix = raw.match(/^[^0-9]*/)?.[0] || '';
      const suffix = raw.match(/[^0-9.]*$/)?.[0] || '';
      const numStr = raw.replace(/[^0-9.]/g, '');
      const target = parseFloat(numStr);
      if (isNaN(target)) return;
      const hasDecimal = numStr.includes('.');
      const decimals = hasDecimal ? numStr.split('.')[1].length : 0;
      const useCommas = raw.includes(',');
      const obj = { val: 0 };
      tl.to(obj, {
        val: target, duration: 1.2, ease: 'power2.out',
        onUpdate() {
          let display = hasDecimal ? obj.val.toFixed(decimals) : Math.round(obj.val).toString();
          if (useCommas) display = Number(display).toLocaleString('en-US', { minimumFractionDigits: decimals });
          numEl.textContent = prefix + display + suffix;
        }
      }, 0.3 + i * 0.08);
    });
  }

  // Draw-on icons (wireframe strokes)
  el.querySelectorAll('.icon-draw path, .icon-draw line, .icon-draw circle').forEach((path, i) => {
    if (path.classList.contains('icon-gradient')) return; // skip gradient blobs
    const len = path.getTotalLength ? path.getTotalLength() : 200;
    gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
    tl.to(path, { strokeDashoffset: 0, duration: 0.8, ease: 'power2.out' }, 0.2 + i * 0.15);
  });

  // Fade in icon gradient blobs alongside wireframe draw-on
  el.querySelectorAll('.icon-gradient').forEach(grad => {
    gsap.set(grad, { opacity: 0 });
    tl.to(grad, { opacity: 1, duration: 0.6, ease: 'power2.out' }, 0.2);
  });

  // CTA buttons (last)
  const cta = el.querySelectorAll('.content .cta-btn');
  if (cta.length) tl.to(cta, { opacity: 1, y: 0, duration: 0.5 }, '-=0.2');

  // Contact elements
  const contactEls = el.querySelectorAll('.content .contact-heading, .content .contact-name, .content .contact-role, .content .contact-email');
  if (contactEls.length) tl.to(contactEls, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, 0.2);

  // Hero logo (title slide)
  const logo = el.querySelectorAll('.content .logo-wrap, .hero-content .hero-logo');
  if (logo.length) tl.to(logo, { opacity: 1, scale: 1, duration: 0.8 }, 0);
}
```

## Reset Function

When navigating away from a slide, reset its elements so they can animate again on return:

```javascript
function resetSlide(el) {
  const selectors = '.label, .heading, .body-text, .brand-quote, .card, .future-card, .stat-item, .versus-col, .cta-btn, .highlight-number, .logo-wrap, .plus-divider, .contact-heading, .contact-name, .contact-role, .contact-email';
  el.querySelectorAll(selectors).forEach(child => {
    gsap.set(child, { clearProps: 'all' });
    child.style.opacity = '0';
  });
  el.querySelectorAll('.divider').forEach(d => {
    gsap.set(d, { clearProps: 'all' });
    d.style.transform = 'scaleX(0)';
  });
}
```

## Prism Pixel Renderer

Chunky 32px pixel texture inside the `.slide-bg-prism` corner gradient. Color-matched to the gradient, deep `cornerFade²` falloff so it dissipates gradually into the slide, quiet diagonal shimmer for motion.

The function definition lives in `pl-deck-layout/pixel-corner.md` (canonical source). Copy `initPrismPixels()` from there. Do NOT improvise; do NOT use the older rainbow-cycling version.

Key behaviour:
- 32px blocks, matching the hero shader
- Blue ramp navy → white from corner outward
- Base alpha 0.32 + 0.25 shimmer brightening
- No clip-path, no hard edge — visibility is purely the fade curve

## Trigger Points

```javascript
// Slide 0 MUST have class="slide active" in HTML (WebGL needs non-zero canvas dimensions).
// On page load, just trigger the entrance animation:
setTimeout(() => {
  animateSlideIn(slides[0]);
}, 300);

// Initialize prism pixel overlay
initPrismPixels();

// In goToSlide — called after setting .active class
// (see Animation Lock section above)
```

## Easing Reference

| Use case | Easing |
|----------|--------|
| Default entrance | `power3.out` |
| Slot machine numbers | `power2.out` |
| Icon draw-on | `power2.out` |
| Card hover (CSS) | `ease` (0.3s) |
