---
name: Ember Warm Modern
colors:
  surface: '#121318'
  surface-dim: '#121318'
  surface-bright: '#38393e'
  surface-container-lowest: '#0d0e13'
  surface-container-low: '#1a1b20'
  surface-container: '#1e1f25'
  surface-container-high: '#292a2f'
  surface-container-highest: '#34343a'
  on-surface: '#e3e1e9'
  on-surface-variant: '#ddc0b7'
  inverse-surface: '#e3e1e9'
  inverse-on-surface: '#2f3036'
  outline: '#a58b83'
  outline-variant: '#56423b'
  surface-tint: '#ffb59b'
  primary: '#ffb59b'
  on-primary: '#5b1a00'
  primary-container: '#e07147'
  on-primary-container: '#501600'
  inverse-primary: '#9f411a'
  secondary: '#c9c6c0'
  on-secondary: '#31312c'
  secondary-container: '#474742'
  on-secondary-container: '#b7b5af'
  tertiary: '#90d794'
  on-tertiary: '#003912'
  tertiary-container: '#5ca062'
  on-tertiary-container: '#00320e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59b'
  on-primary-fixed: '#380d00'
  on-primary-fixed-variant: '#802a03'
  secondary-fixed: '#e5e2db'
  secondary-fixed-dim: '#c9c6c0'
  on-secondary-fixed: '#1c1c18'
  on-secondary-fixed-variant: '#474742'
  tertiary-fixed: '#abf4ae'
  tertiary-fixed-dim: '#90d794'
  on-tertiary-fixed: '#002107'
  on-tertiary-fixed-variant: '#07521f'
  background: '#121318'
  on-background: '#e3e1e9'
  surface-variant: '#34343a'
  text-primary-light: '#1A1A1A'
  text-secondary: '#6B6B6B'
  status-done: '#3A7D44'
  status-pending: '#E3A008'
  status-skipped: '#C1443B'
  status-upcoming: '#D8D4CC'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system expresses quiet discipline, grounded momentum, and tangible craft. Drawing from the tactile weight of high-grade stationery and the programmatic precision of commit graphs, it treats habit tracking not as clinical productivity monitoring, but as building and tending a personal hearth.

The aesthetic fuses **Tactile Warmth** and **Data-Forward Modernism**. A deep ink environment provides an immersive, distraction-free stage where cards rest like physical paper tiles. The visual language avoids synthetic SaaS tropes—refusing neon gradients, harsh drop-shadows, and hyper-saturated primaries—in favor of rich terracotta, warm parchment tones, and earthy status accents. Interactions are deliberate and weighted, emphasizing completion, daily rhythm, and long-term continuity.

## Colors

The system uses an inverted tonal hierarchy: a dark charcoal envelope containing light, tactile paper-like surface containers. 

### Role Assignments

- **Primary (`#D96C42` - Burnt Sienna / Terracotta):** Reserved strictly for brand touchpoints, primary call-to-actions, active indicators, and interactive highlights. It is never mixed with status data.
- **Secondary (`#F4F1EA` - Warm Paper Neutral):** Serves as the primary content canvas for cards, modals, and input panels, introducing high contrast and an editorial reading plane.
- **Tertiary (`#3A7D44` - Forest Green):** The primary affirmation tone, signifying completed streaks and verified actions.
- **Neutral (`#14151A` - Deep Ink Charcoal):** The underlying foundation. Provides spatial depth and ensures that data grids pop with clarity.

### Semantic Grid Status Tokens

The streak matrices maintain strict functional detachment from interactive tokens:

- **`status-done` (`#3A7D44`):** Solid fill indicating verified completion.
- **`status-pending` (`#E3A008`):** Solid amber fill highlighting an open task awaiting action for the current cycle.
- **`status-skipped` (`#C1443B`):** Muted terracotta-red fill denoting deliberate skips or breaks.
- **`status-upcoming` (`#D8D4CC`):** Transparent interior with a `1.5px` border stroke representing future uncommitted slots.

## Typography

Typography establishes an intentional tension between mechanical structure and organic readability. 

- **Space Grotesk** commands display titles, section headings, numbers, and system labels. Its geometric quirks reinforce the app's analytical grid nature without appearing institutional.
- **Inter** handles narrative copy, descriptive metadata, and dense content layouts, providing neutral legibility across diverse light and dark surface environments.

Text on dark `#14151A` backgrounds renders in warm white (`#F4F1EA`) for primary hierarchy and muted parchment (`#D8D4CC`) for secondary hints. Inside light cards (`#F4F1EA`), text defaults strictly to charcoal (`#1A1A1A`) and mid-gray (`#6B6B6B`).

## Layout & Spacing

The layout is anchored by an 8px base rhythmic grid, governing internal component gaps and spatial compositions.

### Layout Model

- **Mobile (< 768px):** Single-column fluid stack. Touch margins are fixed to `1rem` (`16px`). Touch targets for active elements enforce a minimum boundary of `44px × 44px`. Primary actions lock to full-width containers.
- **Tablet (768px - 1024px):** 2-column card grid with `1.5rem` gutters. Matrix cells expand proportionally to accommodate direct touch logging.
- **Desktop (> 1024px):** 3-column habit card arrangement constrained within a max-width wrapper of `1200px`. Expanded grid views activate precision hover states.

Content surfaces maintain internal padding between `1rem` and `1.5rem`. Component separation follows strict token multiples, avoiding ambiguous arbitrary distances.

## Elevation & Depth

Visual hierarchy does not rely on steep Z-plane drop-shadows or neon glows. Instead, depth is articulated through surface contrast, tactile resting elevation, and physical layering.

### Surface Hierarchy

1. **Canvas Level (Ground):** `#14151A` deep ink backdrop; flat, absorbent, and unbordered.
2. **Card Level (First Order Surface):** `#F4F1EA` warm paper resting directly over the ground. It features a subtle, low-intensity ambient shadow: `0 2px 8px rgba(0, 0, 0, 0.08)`.
3. **Interactive Hover (Desktop Lift):** On cursor hover, cards elevate slightly using `0 4px 12px rgba(0, 0, 0, 0.12)`, paired with a `1px` translation along the Y-axis.
4. **Modal & Floating Overlays:** Suspended panels cast `0 8px 24px rgba(0, 0, 0, 0.24)`, flanked by an ink backdrop scrim with 60% opacity.

## Shapes

The design system maintains geometric precision balanced with accessible tactile edges. 

- **Structural Containers:** Habit tracker cards, authentication modules, dialog sheets, and input fields utilize an `8px` (`0.5rem`) corner radius.
- **Micro Grids & Data Squares:** Streak cells in habit trackers use a strict `4px` (`0.25rem`) radius to preserve clean horizontal and vertical gutter alignments within calendar matrices.
- **Buttons & Interactive Tags:** Primary buttons use `6px` to maintain a sturdy, chiselled profile. Status pills and user indicators use full circular rounding (`9999px`).

## Components

### Buttons

- **Primary CTA:** Styled in `#D96C42` with white/parchment typography (`#F4F1EA`), `6px` corner radius, `Space Grotesk` medium font. On hover, background shifts to a deeper shade (`#C25B33`). Full-width on mobile viewports; self-aligning on desktop.
- **Secondary / Ghost:** Outlined with `1.5px solid #1A1A1A` on light surfaces or `#D8D4CC` on dark canvases; transparent fill.
- **Destructive:** Subtle muted red text or surface accents using `#C1443B`.

### Cards

- Constructed with `#F4F1EA` background surfaces, `8px` corner radius, and `16px` to `24px` internal padding. They hold dark charcoal typography (`#1A1A1A`), discrete metadata rows, and integrated streak visualization blocks.

### Habit Streak Matrices (GitHub Style)

- **Mini Dashboard Grid:** Compact `16px` to `20px` square cells set to a `4px` corner radius with `3px` internal gutters, visualizing rolling 4-to-6 week cycles.
- **Full Counter Matrix:** 7-column day layout (Sun–Sat) with `40px` to `60px` square targets on mobile.
- **Cell States:**
  - *Completed:* `#3A7D44` solid fill.
  - *Pending Today:* `#E3A008` fill with a subtle breathing border focus.
  - *Skipped:* `#C1443B` solid fill.
  - *Upcoming / Inactive:* Transparent fill with `1.5px solid #D8D4CC` border.

### Input Fields & Steppers

- Form inputs feature `#FFFFFF` or light cream surface fills within cards, framed by `1px solid #D8D4CC` borders and `8px` corner radii. Text renders in `#1A1A1A`.
- Active focus state is indicated by a crisp `1.5px solid #D96C42` outline without fuzzy outer rings.
- Error state shifts border to `1.5px solid #C1443B`.
- Numeric steppers feature split icon buttons (`-` / `+`) flanking a centered `Space Grotesk` numeric read-out.

### Segmented Toggles & Pill Status Badges

- **Segmented Controls:** Enclosed in a recessed `#E7E3DA` track with `6px` radius; active segment slides using a white `#FFFFFF` surface tile elevated by a minimal `0 1px 3px rgba(0,0,0,0.1)` shadow.
- **Pill Badges:** Fully rounded (`9999px`) metadata indicators with `6px 12px` padding, displaying system states in `12px Space Grotesk`.