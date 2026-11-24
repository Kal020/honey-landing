---
name: Honey Landing
description: Une page blanche de galerie où les photos de salons et les captures des deux applications font tout le travail.
colors:
  ink: "#111111"
  muted: "#5a5754"
  paper: "#ffffff"
  soft-panel: "#f7f4f1"
  hairline: "#e9e5e0"
  hairline-faint: "#eeeae6"
  field-stroke: "#d9d3cd"
  espresso: "#502314"
  honey-accent: "#b37b54"
  footer-black: "#0b0a0a"
  footer-text: "#b3aca5"
  footer-label: "#8c857e"
  footer-mark: "#1b1a19"
  titanium: "#d6d1c8"
typography:
  display:
    fontFamily: "Archivo, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.7rem, 6.4vw, 5.4rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Archivo, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.2rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Archivo, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Manrope, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: "Manrope, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.18rem"
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: "Archivo, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    letterSpacing: "-0.01em"
  label:
    fontFamily: "Manrope, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    letterSpacing: "0.08em"
rounded:
  sm: "10px"
  md: "20px"
  lg: "28px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "88px"
  section: "112px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "12px 28px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "#2c2c2c"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 28px"
  button-on-dark:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
  tile:
    backgroundColor: "{colors.soft-panel}"
    rounded: "{rounded.lg}"
    padding: "48px 0 0 44px"
    height: "500px"
  photo-frame:
    backgroundColor: "{colors.soft-panel}"
    rounded: "{rounded.md}"
  card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "30px"
  field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
    height: "44px"
  vision-tile:
    backgroundColor: "{colors.espresso}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "32px"
  footer:
    backgroundColor: "{colors.footer-black}"
    textColor: "{colors.footer-text}"
---

# Design System: Honey Landing

## Overview

**Creative North Star: "The White Gallery Wall"**

The pages are a white wall. Photos of real salons and real captures of the two apps (Honey App, HoneyPro) hang on it and do the persuading. The page itself stays quiet: near-black ink, warm grey text, a very pale warm panel, and a black footer that closes it. Colour lives inside the app screenshots, not in the chrome.

Brown is a pinch of seasoning. Espresso (#502314) and honey tan (#b37b54) appear only as small details: a partner's initial, the active-link underline, the step icons, the Vision tile, text selection. Layout is generous (112px section padding, 88px split gaps) and calm. Motion is a slow reveal, never a bounce.

The system rejects a full-width photo hero veiled in brown, and brown tiles as the general surface.

**Key Characteristics:**
- White page, #f7f4f1 panels, black footer; brown only as a detail.
- Rounded photo frames (20px) with one arch (top fully round) for the lead photo.
- Light-titanium iPhone frame with thin black bezel and Dynamic Island around every app capture.
- Archivo titles tightly tracked, Manrope body; pill buttons.
- Depth is tonal and hairline; shadow is reserved for the phone and the mobile menu.

## Colors

A near-monochrome warm neutral set with one dark brown and one tan used sparingly.

### Primary
- **Ink Black** (ink): text, primary buttons, focus ring, outline button border.

### Secondary
- **Espresso** (espresso): Vision tile, partner initial on the lead partner, step icons, link hover, text selection, caret and form accent.
- **Honey Tan** (honey-accent): the 2px active/hover underline under nav links only.

### Neutral
- **Paper White** (paper): page, cards, fields, nav (96% opaque).
- **Soft Panel** (soft-panel): photo-frame placeholder, app tiles, notices, hover wash on column boxes.
- **Warm Grey Text** (muted): paragraphs and secondary copy.
- **Hairline** (hairline, hairline-faint): 1px dividers, card and box borders, closing-section top rule.
- **Field Stroke** (field-stroke): input borders.
- **Footer Black** (footer-black), **Footer Text** (footer-text), **Footer Label** (footer-label), **Footer Mark** (footer-mark): the footer and its large masked Honey wordmark, a barely-lifted dark grey.
- **Titanium** (titanium): iPhone frame only.

### Named Rules
**The Pinch of Brown Rule.** Brown and tan mark details, never fill sections or buttons. The one large brown surface is the Vision tile, and it is a single tile, not a pattern.

**The Colour Lives in the App Rule.** Saturated colour comes from the screenshots. Do not add decorative colour to the chrome to compensate.

## Typography

**Display Font:** Archivo (with system-ui sans fallbacks)
**Body Font:** Manrope (with system-ui sans fallbacks)

**Character:** Archivo at weight 500 with tight negative tracking gives titles a confident, modern voice; Manrope keeps the reading text open and friendly at phone sizes.

### Hierarchy
- **Display** (500, clamp(2.7rem, 6.4vw, 5.4rem), 1.1): the home h1; inner pages use clamp(2.4rem, 5.2vw, 4.4rem).
- **Headline** (500, clamp(2rem, 4vw, 3.2rem), 1.1): section h2; the closing call uses up to 5rem.
- **Title** (500, 1.5rem, 1.1): h3, tile titles (1.9rem), row labels (1.2rem), partner names.
- **Body** (400, 17px, 1.6, muted colour): paragraphs, capped around 40 to 44ch in split text.
- **Lead** (400, 1.18rem): the sentence under the h1, 40 to 44ch.
- **Button** (Archivo 700, 0.95rem, -0.01em): buttons and text links.
- **Label** (Manrope 600, 0.8rem, 0.08em, uppercase): footer column headings only.

### Named Rules
**The Balanced Title Rule.** All h1 to h3 use `text-wrap: balance` and negative tracking (-0.03em); never loosen them.

## Layout

Single container: `min(1180px, 100% - 48px)`, 32px side margin below 560px. Sections breathe at 112px vertical padding (76px under 900px). The recurring structure is a two-column split (88px gap, text beside a photo frame, alternating sides, 500px max frame width) and, on the home, a 1.05/.95 hero with a three-photo collage. Inner pages open with a title-left, photo-right header. App tiles sit two across (500px tall), with a phone cropped at the tile's bottom edge. Column boxes (`--n` columns) share hairline borders. Under 900px everything stacks to one column, frames switch to 4:3, the nav collapses to a details menu; under 560px buttons in call-to-action groups go full width. Touch targets are at least 44px. A gallery of 3:4 frames offsets every even frame by 56px.

## Elevation & Depth

Flat by default: depth comes from tone (white against #f7f4f1), 1px hairlines and overlapping photo frames (a 6px white outline separates the small collage photo). Shadows are rare and physical, used only on objects that float.

### Shadow Vocabulary
- **Phone** (`box-shadow: 0 22px 40px -14px rgba(16,8,8,.38), 0 2px 4px rgba(16,8,8,.28)`): the iPhone frame.
- **Menu** (`box-shadow: 0 18px 40px -18px rgba(17,17,17,.4)`): the mobile menu popover.
- **Field focus** (`box-shadow: 0 0 0 3px rgba(80,35,20,.14)` with an ink border): focused inputs.

### Named Rules
**The Flat Wall Rule.** Cards, tiles and frames carry no shadow. Only the phone and the open menu lift.

## Shapes

Soft and round. Pills (999px) for buttons and the skip link; 10px for fields, notices and menu items; 20px for photo frames, cards, partner chips and column boxes; 28px for the app tiles and panel. The lead photo is an arch (`999px 999px 20px 20px`). Phone frames are 42px at the top with a squared bottom that is cropped by the tile. Initial badges are 14px rounded squares.

## Components

### Buttons
- **Shape:** full pill (999px), minimum 44px high, 1.5px border.
- **Primary:** ink black fill, white Archivo 700 text, padding 12px 28px.
- **Hover / Focus:** lifts 2px and lightens to #2c2c2c; the trailing arrow icon slides 4px right; focus is a 2px ink outline offset 3px (white in the footer).
- **Variants:** outline (transparent, ink border, fills ink on hover), white (on dark), outline-white (55% white border), small (9px 20px).
- **Text link:** Archivo 700 with a 1.5px underline rule; hover turns espresso and the arrow nudges up-right.

### Navigation
Sticky, 96% white, 72px tall, logo at 28px. Links are Manrope 600 at 0.92rem in muted grey; hover and current page turn ink and draw a 2px honey-tan underline from the left. A hairline appears under the bar after scroll. Under 900px links collapse into a details menu behind a round bordered button.

### Photo Frames
Rounded 20px frames on #f7f4f1, 4:5 by default. Images reveal with a clip-path wipe and a settle from 1.22 scale, gently parallax where supported, and zoom to 1.04 on hover. Reduced motion shows them static.

### App Tiles and Phone
Soft panel tiles hold a title, a line, a link, and a cropped light-titanium iPhone (250px, black 6px bezel, Dynamic Island, white status bar) showing a real app capture. Two phones can overlap in a panel (`duo`), the lower one sunk 40px.

### Cards and Column Boxes
White, 1px hairline, 20px radius. Column boxes divide with hairlines, wash to soft panel on hover, and may lead with a 34px espresso icon.

### Fields
White, 1px #d9d3cd stroke, 10px radius, 44px minimum height. Hover darkens the stroke; focus turns it ink with a faint espresso ring. Labels are Manrope 600 at 0.92rem above.

### Footer
Black (#0b0a0a): a white Archivo statement, the inverted logo, link columns in light grey with uppercase labels, hairline rules at 12% white, and a huge Honey wordmark made from the logo PNG used as a CSS mask in a barely visible dark grey, half-cropped by the bottom edge and rising into place on reveal.

## Do's and Don'ts

### Do:
- **Do** keep the page white and let photos and real app captures carry the colour.
- **Do** use brown (#502314) and tan (#b37b54) only for details, plus the single Vision tile.
- **Do** frame every app screenshot in the titanium iPhone and use only real owner-supplied captures and photos.
- **Do** use pill buttons at 44px minimum, Archivo 700, and a 2px upward lift on hover.
- **Do** reveal content softly (opacity, clip wipe, slow ease `cubic-bezier(.16,1,.3,1)`) and honour `prefers-reduced-motion`; content is visible without JavaScript.
- **Do** separate with 1px hairlines and tone before reaching for a shadow.

### Don't:
- **Don't** put a full-width photo hero veiled in brown on any page.
- **Don't** fill sections or buttons with brown.
- **Don't** add shadows to cards, tiles or photo frames.
- **Don't** loosen or capitalize titles; Archivo stays 500, tight, sentence case.
- **Don't** swap in stock photography or mocked-up screens.
