---
name: Maxime Tancrède — CV
description: Personal CV/portfolio site with a dark, glowing magenta-to-cyan gradient identity.
colors:
  magenta-pulse: "#DA107B"
  magenta-deep: "#AE0D62"
  magenta-shadow: "#570631"
  electric-cyan: "#01ECF3"
  cyan-muted: "#00BCC1"
  teal-shadow: "#005C5D"
  void-teal: "#001412"
  text-primary: "#EEEEEE"
  text-muted: "#DDDDDD"
typography:
  display:
    fontFamily: "AllertaStencil, sans-serif"
    fontWeight: 400
    letterSpacing: "normal"
  body:
    fontFamily: "'Inconsolata', monospace"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  pill: "50px"
  md: "15px"
  sm: "10px"
spacing:
  sm: "10px"
  md: "20px"
  lg: "25px"
components:
  button-primary:
    backgroundColor: "{colors.void-teal}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.pill}"
    padding: "1vw"
  button-primary-hover:
    textColor: "#222222"
  card-primary:
    backgroundColor: "{colors.void-teal}"
    rounded: "{rounded.md}"
    padding: "20px"
---

# Design System: Maxime Tancrède — CV

## Overview

**Creative North Star: "The Ring of Light"**

A single-page dark portfolio built around one recurring device: a magenta-to-cyan gradient that never fills a surface, only traces its edge. Every interactive container — buttons, cards, inputs — sits on the same near-black teal fill (`#001412`) and gets its identity from a thin glowing ring rather than a flat color block or a drop shadow. Behind the hero and section headers, the same two hues reappear as huge, heavily blurred blooms, standing in for shadows and giving the page its ambient, backlit feel.

The system is not a formal, exhaustively-tokenized design system — it's a hand-built personal site with one strong, consistently-applied idea. Titles are set in a custom stencil display face (AllertaStencil); everything else runs in a monospace body face (Inconsolata), giving the whole thing a "technical/dev" voice appropriate for a software engineer's CV.

**Key Characteristics:**
- One background: near-black teal (`#001412`), everywhere, no light surfaces.
- One accent system: the magenta↔cyan gradient, used as a border/bloom, never a fill.
- Depth from light (blur blooms), not shadow.
- Every corner is either a full pill (buttons, inputs) or a soft 15px rectangle (cards) — nothing sharp.

## Colors

Two hues only — magenta and cyan — carried through a gradient, plus their darker tonal siblings for secondary glow and text on dark.

### Primary
- **Magenta Pulse** (`#DA107B`): the gradient's warm anchor. Anchors the ring-border gradient, the Presentation hero blooms, hover states, and the `description` scrollbar thumb.
- **Magenta Deep** (`#AE0D62`): text color for the "selected" skill-icon state (`icon-contener-select`).
- **Magenta Shadow** (`#570631`): darker gradient stop used in the flip-card back face.

### Secondary
- **Electric Cyan** (`#01ECF3`): the gradient's cool anchor. Pairs with Magenta Pulse in every `--gradient` use.
- **Cyan Muted** (`#00BCC1`): icon color inside the default (unselected) skill-icon ring.
- **Teal Shadow** (`#005C5D`): darker gradient stop used in the flip-card front/back faces.

### Neutral
- **Void Teal** (`#001412`): the one background color of the entire site. Also the fill behind every gradient-ring border (see Named Rule below).
- **Fog** (`#EEEEEE`): primary text on dark — page copy, animated-in titles.
- **Ash** (`#DDDDDD`): secondary/muted text — form inputs, buttons, links.

A handful of hues appear outside this system but are deliberately confined to single, functional moments, never structural UI: signal red `rgb(255,89,89)` / signal green `rgb(89,255,117)` color the "Qualités" flip-cards per quality type, `deeppink` marks a successful email send, and `blueviolet` (hover: red) is the Scantrad case-study back-link.

### Named Rules
**The Two-Hue Law.** All structural color comes from the magenta↔cyan gradient and its tonal siblings. Red/green/deeppink/blueviolet are reserved for isolated functional signals and never appear in navigation, cards, or buttons.

## Typography

**Display Font:** AllertaStencil (custom `@font-face`, no fallback family declared beyond the browser default)
**Body Font:** Inconsolata (Google Font, with `monospace` fallback)

**Character:** A blocky, technical stencil face for identity moments against a fluid monospace for everything else — reads as engineered/dev-native rather than editorial.

### Hierarchy
- **Display** (400, 128px, name hero): the page owner's name (`Presentation`'s `.name`), with a `color: transparent → #fff` reveal animation on load.
- **Headline** (400, 50px): section titles (`part-title` in `PartContener`, `talent-container-title`) — one per major page section.
- **Title** (400, clamp(19px, 2vw, 25px) – clamp(20px, 3vw, 23px)): card-level titles (`project-case .title`, `talent-case-title`).
- **Body** (300–400, 15–22px, `Inconsolata`): paragraph copy throughout (`.txt`, `.description`, `.Portfolio-p`), consistently set with `clamp()` for fluid scaling instead of fixed breakpoint jumps.
- **Label** (400, 20–36px): button and link text, uppercase on links (`ProjectCase .link`, `Scantrad .link-portflio`).

A third face, "Quantum" (`@font-face` declared in `App.css`), is loaded but not currently applied anywhere in the codebase — treat it as reserved/unused rather than part of the live hierarchy.

### Named Rules
**The Stencil-For-Structure Rule.** AllertaStencil is reserved for section/identity titles only (name, section headers, card titles). Body copy, buttons, and form fields stay in Inconsolata.

## Layout

A single continuously-scrolled page (`.all-page`, `overflow: hidden`, full viewport width) made of stacked full-width sections (Presentation → Compétences → Projets → Qualités → Contact), each wrapped by the shared `PartContener` (centered column, section title + content).

Sizing is fluid throughout: font sizes, paddings, and gaps are set with `clamp()` or `vw` units rather than a fixed spacing scale, so the layout re-proportions continuously instead of jumping at breakpoints. The project list is a horizontal slider (fixed 1325px track, prev/next arrow controls) that becomes a native horizontal scroll area on small screens.

**Breakpoints observed:** `1000px` (Presentation stacks to a single column, Qualités cards wrap, project slider goes edge-to-edge with scroll), `900px` (talent-card border moves from left to top), `800px` (project cards go full-width, slider arrows hide).

## Elevation & Depth

Flat by default — the system does not use `box-shadow` as its depth language. Depth instead comes from large, heavily-blurred gradient "blooms": absolutely-positioned pseudo-elements, `border-radius: 50%`, `opacity: 0.6`, blurred `70px`–`130px`, sitting at `z-index: -1` behind hero text and skill icons, reading as ambient backlighting rather than cast shadow.

The one exception is the Qualités flip-card (`0 4px 8px rgba(0,0,0,0.2)`), a conventional shadow — treat it as a one-off, not a precedent to extend.

### Named Rules
**The Bloom-Not-Shadow Rule.** Depth cues are large blurred gradient blooms behind content, never `box-shadow` on the content itself.

## Shapes

Two radii only, applied by role: **pill** (`50px`) for anything you click or type into (buttons, links, pill-shaped inputs), **soft rectangle** (`15px`, `10px` for the message textarea) for containers (cards, gradient-ring wrappers). No sharp corners appear anywhere in the system.

## Components

### Buttons
- **Shape:** full pill (`border-radius: 50px`).
- **Primary (`button-sender`):** `Void Teal` fill, `Ash` text, ringed by the gradient-ring technique below; `padding: 1vw`.
- **Hover:** the ring inverts — the outer gradient layer becomes flat `#222`, the inner fill becomes the gradient, and text flips to `#222`. Transition `1s ease-in` on both layers.

### Gradient Ring (signature component)
The site's one recurring visual device, reused verbatim across `icon-contener` (skill icons), `project-case` (project cards), `input-div`/`input-div-mess` (form fields), and `button-sender` (submit button):
- A `::before` pseudo-element, inset `-2px`, filled with `var(--gradient)`, `z-index: -2`.
- A `::after` pseudo-element, `2px` padding, filled with `Void Teal`, `z-index: -1`.
- The result is a hairline gradient ring around a flat dark surface, radius inherited from the parent (pill or 15px, depending on role).

### Cards (`project-case`)
- **Corner Style:** 15px.
- **Background:** `Void Teal`, gradient-ring border.
- **Size:** fixed `350×225px`, `25px` margin between cards.
- **Content:** title (`Fog`), scrollable description (`Ash`, custom `Magenta Pulse` scrollbar thumb), pill link/action row at the bottom.

### Flip Cards (`TalentCase`)
- **Style:** 3D flip on scroll-triggered reveal (`transform: rotateY(180deg)`, `0.6s`), staggered `250ms` per card.
- **Front:** avatar over a `Teal Shadow → Magenta Shadow` diagonal gradient, `10px` solid dark-green border.
- **Back:** title + text over a `Magenta Shadow → Void Teal` diagonal gradient, `10px` solid `Teal Shadow` border.
- **Signal border:** the whole container's outer border color is prop-driven — signal red or signal green — per quality being shown.

### Inputs / Fields
- **Style:** transparent fill, no literal `border`, wrapped in the Gradient Ring container; pill radius for name/email, 10px soft-rect for the message field.
- **Text:** `Ash`, no dedicated focus treatment beyond the browser default.

### Navigation
- No persistent nav bar is currently rendered (a sticky tab/icon header exists in code but is commented out of `Home.js`). The only cross-page link is the Scantrad case-study back-arrow: icon-only, `blueviolet`, hover `red`.

## Do's and Don'ts

### Do:
- **Do** build any new bordered container with the Gradient Ring technique (`::before` gradient inset `-2px` at `z-index: -2`, `::after` `Void Teal` fill at `z-index: -1`) instead of a literal `border`.
- **Do** keep every surface on `Void Teal` (`#001412`); this system has no light/white surface.
- **Do** use blurred, low-opacity gradient blooms for depth behind hero or section content, sized generously (`blur(70–130px)`, `opacity: 0.6`).
- **Do** set section/identity titles in AllertaStencil and leave body copy in Inconsolata.
- **Do** size type and spacing with `clamp()`/`vw` so new sections scale fluidly rather than snapping at fixed breakpoints.

### Don't:
- **Don't** introduce `box-shadow` as a default depth cue — the flip-card is the one accepted exception, not a pattern to extend.
- **Don't** use square or sharp corners; every surface is pill (`50px`) or soft-rect (`15px`/`10px`).
- **Don't** bring a third structural hue into buttons, cards, or nav — red/green/deeppink/blueviolet stay confined to their one existing functional signal each.
