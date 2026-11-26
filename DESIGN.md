---
name: Honey Landing
description: Une mosaïque bento blanche où chaque tuile, photo de salon ou capture d'application, prouve une chose.
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
  ink-tile-text: "#cfc8c1"
  footer-black: "#0b0a0a"
  footer-text: "#b3aca5"
  footer-label: "#8c857e"
  footer-mark: "#1b1a19"
typography:
  home-hero:
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(3rem, min(6.4vw, 12vh), 5.6rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  display:
    fontFamily: "Archivo, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(3.2rem, 8.4vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.04em"
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
    fontSize: "1.1rem"
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
  pill: "999px"
spacing:
  xs: "8px"
  sm: "14px"
  md: "20px"
  lg: "28px"
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
    rounded: "{rounded.md}"
    padding: "28px"
    height: "236px"
  tile-white:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "28px"
  tile-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "28px"
  tile-photo:
    backgroundColor: "{colors.soft-panel}"
    rounded: "{rounded.md}"
  tile-mini:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "22px"
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
  dock:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "8px"
  footer:
    backgroundColor: "{colors.footer-black}"
    textColor: "{colors.footer-text}"
---

# Design System: Honey Landing

## Overview

**Creative North Star: "The Tiled Gallery Wall"**

The pages are still a white wall, but it is now tiled. A twelve-column bento mosaic of photos of real salons and real captures of the two apps (Honey App, HoneyPro) is hung on it, and each tile proves one thing: prices in FC, reviews, free slots, a booking that shows up at once in the salon's agenda. The chrome stays quiet: near-black ink, warm grey text, pale warm panels, a black footer. Colour lives inside the app captures.

Brown is a pinch of seasoning. Espresso (#502314) and honey tan (#b37b54) appear as small details: icons, the travelling dot, marquee separators, nav underlines, the partner initial, one Vision tile, text selection. The hero title is very large (up to 6rem) on two lines; everything else is calm. Motion is soft and physical: tiles rise in a cascade, the top mosaic lifts at different speeds on scroll, a warm glow follows the pointer, words drift in a marquee, and one band photo grows as it enters. Never a bounce.

The system rejects a column of stacked sections and a photo hero veiled in brown; brown tiles are never the general surface. The home opening is the one exception to the bento: a full-width service slideshow (see Components, Home Hero).

**Key Characteristics:**
- White page; tiles are #f7f4f1 or white with a hairline; at most one ink tile per mosaic; black footer.
- 12-column bento grid, 20px gaps, 20px tile corners; one arch (round top) for the lead photo.
- Bare app screenshots (no device frame): 18px rounded top corners, 1px hairline, cropped by the bottom edge of an app tile.
- Archivo 500 titles, tightly tracked and very large in the hero; Manrope body; pill buttons.
- Depth is tonal and hairline; shadow only on the mobile menu and a focused field; the pointer glow is a tone, not a shadow.

## Colors

A near-monochrome warm neutral set with one dark brown and one tan used sparingly.

### Primary
- **Ink Black** (ink): text, primary buttons, focus ring, the single ink sync tile.

### Secondary
- **Espresso** (espresso): tile icons, partner initial on the lead partner, link hover, text selection, caret and form accent, and the Vision tile on the about page.
- **Honey Tan** (honey-accent): nav underline, the marquee dot separators, the travelling dot in the sync tile, and the pointer glow (as an 18% tint).

### Neutral
- **Paper White** (paper): page, white tiles, cards, fields, nav (96% opaque), the mobile dock.
- **Soft Panel** (soft-panel): default tile, photo placeholder, notices, hover wash.
- **Warm Grey Text** (muted): paragraphs and secondary copy.
- **Ink Tile Text** (ink-tile-text): paragraphs on the ink tile.
- **Hairline** (hairline, hairline-faint): 1px tile and card borders, marquee rules, closing top rule.
- **Field Stroke** (field-stroke): input borders.
- **Footer Black** (footer-black), **Footer Text** (footer-text), **Footer Label** (footer-label), **Footer Mark** (footer-mark): the footer and its masked Honey wordmark.

### Named Rules
**The Pinch of Brown Rule.** Brown and tan mark details, never fill sections or buttons. The one large brown surface is the Vision tile; it is a single tile, not a pattern.

**The One Ink Tile Rule.** A mosaic holds at most one ink tile, and it carries the single most important claim (synchronisation). Ink is not a second tile colour.

**The Colour Lives in the App Rule.** Saturated colour comes from the screenshots and photos. Do not add decorative colour to the chrome to compensate.

## Typography

**Display Font:** Archivo (with system-ui sans fallbacks)
**Home Hero Font:** Playfair Display 400, upright and italic, for the home h1 only
**Body Font:** Manrope (with system-ui sans fallbacks)

**Character:** Archivo at weight 500 with tight negative tracking gives titles a confident voice, very large and nearly touching lines at hero scale; Manrope keeps reading text open at phone sizes.

### Hierarchy
- **Home hero** (Playfair Display 400, clamp(3rem, min(6.4vw, 12vh), 5.6rem), 1.04): the home h1 on two lines, the second in italic espresso; mobile clamp(2.8rem, 12vw, 4.6rem).
- **Display** (500, clamp(3.2rem, 8.4vw, 6rem), 0.98, -0.04em): large Archivo titles. Inner-page h1 uses clamp(2.4rem, 5.2vw, 4.4rem) at 1.1.
- **Headline** (500, clamp(2rem, 4vw, 3.2rem), 1.1): section h2; tile h2 clamp(2rem, 3.2vw, 2.8rem); the closing call up to 5rem; marquee words clamp(2rem, 4.4vw, 3.4rem).
- **Title** (500, 1.5rem, 1.1): h3; tile h3 clamp(1.3rem, 2vw, 1.7rem); mini tile 1.25rem; list and partner names 1.2rem.
- **Body** (400, 17px, 1.6, muted): paragraphs; tile paragraphs capped near 34ch, split text near 40ch.
- **Lead** (400, 1.1rem in the hero, 1.18rem elsewhere, 36 to 44ch): the sentence beside or under the h1.
- **Button** (Archivo 700, 0.95rem, -0.01em): buttons and text links.
- **Label** (Manrope 600, 0.8rem, 0.08em, uppercase): footer column headings only.

### Named Rules
**The Balanced Title Rule.** All h1 to h3 use `text-wrap: balance` and negative tracking; never loosen them or set them in capitals. The serif belongs to the home h1 and nowhere else.

## Layout

Single container: `min(1180px, 100% - 48px)` (100% - 32px under 560px). Sections breathe at 112px vertical padding (76px under 900px; `tight` sections 56px). The home opens with the full-width Home Hero, which runs under its floating header.

The core structure is the bento: `grid-template-columns: repeat(12, 1fr)`, rows of 236px, 20px gap. Each tile declares its own column span and row span (4 columns by default; spans of 2, 3, 5, 6 are used, with 2-row tall tiles for photos and app captures). The hero mosaic uses a fluid row of 150 to 215px; partner and contact mosaics set their own row (320px, 160px). The contact page splits a 5-column stack (info and social tiles) beside a 7-column, 4-row form tile. Inner pages are short bentos: solutions holds two app tiles (6 columns each) above a four-column steps box; professionnels holds one HoneyPro tile, one wide mini tile and two half mini tiles, then a split with the form card; a-propos holds a 5/7 mission and vision pair above a four-column values box. Remaining non-mosaic structures: a two-column split (88px gap, text beside a 500px photo frame, alternating sides), inner-page headers (title left, photo right), hairline column boxes, a centred scroll-grow photo band, a word marquee strip, and a centred closing call.

Under 900px the bento collapses to two columns with 14px gaps; each tile takes a mobile span (2 by default, 1 for half-width pairs), app tiles grow to 540px (760px on the partner mosaic) and re-centre their screenshot (250px wide, 300px visible) under the text, and the hero mosaic is reordered (tall arch beside two stacked photos, app tile full width). Splits and headers stack, frames switch to 4:3, the nav collapses to a details menu. Under 560px tile padding tightens to 22px, buttons in call groups go full width, and a fixed pill dock appears. Touch targets are at least 44px.

## Elevation & Depth

Flat by default: depth comes from tone (white against #f7f4f1 against one ink tile), 1px hairlines, and the entrance choreography. Tiles carry no shadow, ever; their hover response is a warm radial glow (honey tan at 18%) that follows the pointer inside the tile, fading in over .5s, on pointer devices only. Shadows are reserved for the objects that float: the menu popover and a focused field.

### Shadow Vocabulary
- **Menu** (`box-shadow: 0 18px 40px -18px rgba(17,17,17,.4)`): the mobile menu popover.
- **Field focus** (`box-shadow: 0 0 0 3px rgba(80,35,20,.14)` with an ink border): focused inputs.

### Named Rules
**The Flat Tile Rule.** Tiles, cards and frames carry no shadow; hover is a tone change or the pointer glow. Only the open menu and a focused field lift or ring.

## Shapes

Soft and round with one radius for the mosaic. Pills (999px) for buttons, the skip link, the dock and the flow chips; 10px for fields, notices and menu items; 20px for every tile, photo frame, card, partner chip and column box. The lead photo is an arch (`999px 999px 20px 20px`). App screenshots are 18px rounded at the top with a squared bottom cropped by the tile. Initial badges are 14px rounded squares. The scroll-grow band photo animates its corner from 56px to 20px as it reaches full size.

## Components

### Home Hero
Home page only (`assets/hero.css`, `hero.js`, `hero-motion.js`; every motion setting sits at the top of `hero.css`).
- **Frame:** full width, `clamp(560px, 100svh, 820px)` high, under an 88px header. Under 900px the photo sits above the text.
- **Slides:** Coiffure, Maquillage, Massage & spa, Barbier. Each photo holds the right 62% and fades into a flat background tone matched to it; the tone, the photo and the eyebrow change together every 5s (1.1s cross-fade, slow zoom to 1.05). The first photo loads at once, the others after the page.
- **Text:** bottom left: eyebrow naming the service, the serif title, one sentence, then the service buttons with a progress line and a pause button. Calls to action sit bottom right: one white pill, one translucent pill.
- **Header:** a white pill floating on the photo, blurred with a hairline after scroll; a single underline slides between links; links collapse into the menu under 1060px. Once the white sections take over, the pill closes from both ends toward its centre and fades; it opens again on the way back up.
- **Pointer:** mouse only, on the header and hero: dot and sprung ring, a "Découvrir" disc over the photo, magnetic buttons.
- **Reduced motion:** no autoplay, zoom or custom pointer; slides are chosen by hand.
- Add a slide only with a real photo of that service. Landscape photos of 2000px or more would let a photo fill the whole frame.

### Buttons
- **Shape:** full pill (999px), minimum 44px high, 1.5px border.
- **Primary:** ink fill, white Archivo 700 text, padding 12px 28px.
- **Hover / Focus:** lifts 2px and lightens to #2c2c2c; the trailing arrow slides 4px right; focus is a 2px ink outline offset 3px (white in the footer).
- **Variants:** outline (transparent, fills ink on hover), white (on dark), outline-white (55% white border), small (9px 20px).
- **Text link:** Archivo 700 with a 1.5px underline rule; hover turns espresso and the arrow nudges up-right.

### Navigation
On inner pages: sticky, 96% white, 72px tall, logo at 28px. Links are Manrope 600 at 0.92rem in muted grey; hover and current page turn ink and draw a 2px honey-tan underline from the left. A hairline appears under the bar after scroll. Under 900px links collapse into a details menu behind a round bordered button.

### Bento Tiles
The unit of the system. Base tile: soft panel, 20px corners, 28px padding, content spaced between top and bottom. Variants: **white** (white with a hairline), **ink** (the one sync tile, with a pill flow "Honey App to HoneyPro" and a honey-tan dot travelling along a line), **photo** (no padding, the photo fills the tile and takes the frame reveal; one is the arch), **mini** (22px padding, a 30px espresso icon above a 1.25rem title and a short line; a wide mini steps title up to 1.7rem), and **ticks** (a list of Archivo 500 lines with 24px espresso icons). Tiles enter in a cascade (fade and rise, staggered by an inline delay); the hero tiles rise 32px at .97 scale and then lift on scroll at alternating rates (odd 26px, even 52px) where scroll-driven animation is supported.

### App Tiles and Screenshots
Tiles of type app hold a title, a line, an optional link, and a bare real capture of the app screen (no device frame): 18px rounded top corners, a 1px hairline border, no bottom border, anchored to the tile's bottom edge so the tile crops it, with a capped max-height. It rises in (64px, soft fade) when it enters view. Two layouts: row (text left up to 46%, screenshot right, 260px at most) and col (text above, screenshot centred at 240px, hero 210px). On mobile the screenshot centres under the text at 250px wide by 300px visible height. The partner tile on the home is a full-width row tile with two partner chips under the text.

### Marquee
A word marquee on the home only (hairline top and bottom, Archivo 500 words at up to 3.4rem separated by 12px honey-tan dots, 46s linear loop) opens the page's second act. It pauses on hover; with reduced motion it stops and scrolls by hand.

### Icons
Phosphor icon-font glyphs (class `ph-light`, thin line weight, loaded from the @phosphor-icons/web light stylesheet) are the icon set: 30px espresso glyphs on mini tiles, 34px on column boxes, 24px on tick lists, 18px or 16px arrows in buttons and links, a 22px menu glyph. They are decorative (`aria-hidden`) and inherit colour from the container.

### Scroll-Grow Band
One wide photo (16:10, max 940px) that scales from .68 to 1 while its corners tighten and the image settles from 1.28 scale, driven by a 0 to 1 custom property updated from scroll; centred text and a button follow.

### Cards, Column Boxes and Partner Chips
White, 1px hairline, 20px radius. Column boxes divide with hairlines, wash to soft panel on hover, and may lead with a 34px espresso icon (two columns under 900px, one under 560px). Partner chips carry a 48px initial badge and rise 2px on hover.

### Fields and Contact
White, 1px #d9d3cd stroke, 10px radius, 44px minimum height. Hover darkens the stroke; focus turns it ink with a faint espresso ring. Labels are Manrope 600 at 0.92rem above. On the contact page the form lives in one large tile with a transparent card; info tiles show a small label over an Archivo 500 value (1.45rem).

### Mobile Dock
Under 560px, a fixed white pill with a hairline holds two equal buttons (Commencer, Ajouter mon institut). It slides in after 520px of scroll and slides away over the closing call, the footer and any form.

### Footer
Black (#0b0a0a): a white Archivo statement, the inverted logo, link columns in light grey with uppercase labels, hairline rules at 12% white, and a huge Honey wordmark made from the logo PNG used as a CSS mask in a barely visible dark grey, half-cropped by the bottom edge and rising into place on reveal.

## Do's and Don'ts

### Do:
- **Do** keep the page white and let photos and real app captures carry the colour.
- **Do** compose pages as 12-column bento mosaics with 20px gaps and 20px corners; give each tile one claim.
- **Do** use brown (#502314) and tan (#b37b54) only for details, plus the single Vision tile; allow at most one ink tile per mosaic.
- **Do** show every app screenshot bare (18px top corners, hairline) cropped at the tile's bottom edge, and use only real owner-supplied captures and photos.
- **Do** use pill buttons at 44px minimum, Archivo 700, and a 2px upward lift on hover.
- **Do** reveal softly (opacity, rise, clip wipe, ease `cubic-bezier(.16,1,.3,1)`), keep content visible without JavaScript, give every moving element a reduced-motion state, and collapse mosaics to two columns on phones.
- **Do** separate with 1px hairlines and tone before reaching for a shadow.

### Don't:
- **Don't** stack full-width sections where a mosaic would carry the same content, or veil a photo hero in brown. The full-width photo hero belongs to the home only.
- **Don't** fill sections or buttons with brown.
- **Don't** add shadows to tiles, cards or photo frames; the pointer glow is the tile hover.
- **Don't** loosen or capitalize titles; Archivo stays 500, tight, sentence case.
- **Don't** swap in stock photography or mocked-up screens, and don't wrap captures in a device frame.
