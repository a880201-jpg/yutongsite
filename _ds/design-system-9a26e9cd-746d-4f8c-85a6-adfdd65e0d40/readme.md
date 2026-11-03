# 簡約文青 Design System — v2: Film-Photography Editorial

> **This system was redirected.** The original warm-paper "文青" aesthetic (v1) was
> replaced at the user's request with a **modern film-photography portfolio** direction:
> a pure-white canvas floating on a dark backdrop, neutral grotesque + monospace type,
> bracket/paren notation (`[01]`, `back (to) collections`), asymmetric photo grids,
> circular prev/next navigation, and bold solid **accent color blocks** (violet / red /
> gray). Think Swiss editorial × film-photographer portfolio.

## Sources given
No codebase / Figma. Authored from a brand description plus reference screenshots stored in
`assets/reference/`:
- `gw-ny.png`, `gw-ca.png`, `gw-london.png` — **ground truth**: the "Gavin Wilson (R)"
  photo-collection pages (asymmetric photo grid on white; location/date + footer block in a
  per-collection accent — violet / red / gray).
- `matt-mono.png` — **ground truth**: a monospace photographer portfolio (running vertical
  bio, centered mono contact block, numbered `[01]–[09]` filmstrip, photo detail with
  `[02] PORSCHE COLLECTION [KODAK GOLD 200]`, PREVIOUS / NEXT).
- `redux-mono.png` — mono editorial reference (b&w photo grid, hanging-quote pull quotes).
- v1 references (Liv Tyler / Collection / etc.) remain in `assets/reference/` and `uploads/`
  but no longer drive the system.

The photographs used across the kit were cropped from these references into `assets/photos/`.

## Content fundamentals — how the brand writes
- **Precise, lowercase-or-caps mono voice.** Labels and meta are UPPERCASE tracked monospace
  wrapped in brackets/parens: `[FILM PHOTOGRAPHER]`, `[AVAILABLE FROM 09.2025]`,
  `back (to) collections`, `[KODAK GOLD 200]`. Numbering is zero-padded: `[01]`, `[02]`.
- **Body & names** are a neutral grotesque, tight and quiet — the photographs carry the page.
- **Documentary, understated.** Bios read like an artist statement ("captures the
  overlooked — gritty streets, fleeting light, and quiet moments"). Photographers are quoted
  (Ansel Adams, Robert Adams) as hanging pull quotes with right-aligned attribution.
- **Meta is ritual:** location, time, film stock, `©2025`, `all rights reserved (c) 2025`,
  contact as `hello[at]gavinwilson.com`.
- **No emoji, no hype, no serif, no script.** CJK (Noto Sans TC) sits in the same quiet key
  when used.

## Visual foundations
- **Canvas:** pure white `--surface-page` (#fff) content, floating on a near-black
  `--surface-backdrop` (#0e0e0e) with one soft `--shadow-page` lift. Interface is otherwise flat.
- **Ink scale:** near-black → white neutrals (`--ink-900…--ink-000`). Text is near-black;
  meta is `--ink-400`.
- **Accents (swappable per collection):** muted lavender-gray `#babbd0`, dusty clay `#d6a196`,
  gray `#cfcfcf` — deliberately desaturated so a solid block sits quietly beside the b&w system.
  Used as links (`--accent-ink`) and as solid info/footer **blocks**. `--accent` /
  `--accent-ink` are theme hooks — override them (or use `AccentBlock color=`) to recolor.
  Photography is the only rich color; the UI is monochrome.
- **Type:** neutral grotesque (`--font-sans`, Helvetica Neue system) for names/body; monospace
  (`--font-mono`, IBM Plex Mono) for the editorial voice — bracket labels, numbering, meta,
  vertical running text; `--font-cjk` Noto Sans TC for Chinese. **CJK headings are set at Light
  300 on the mono stack** (`font-family: var(--font-mono), var(--font-cjk)`) with wide tracking
  (~.22em) — never bold — so the Latin/punctuation carry a typewriter texture and the Chinese
  sits quietly in the same key as body copy (use `DisplayHeading face="cjk"`). Everything is
  **small** and compact (13px body, 11px meta, 10px labels); there is no large display type
  — the photos are the display.
- **Layout:** asymmetric multi-column photo grids, tight `--grid-gap` (12px) gutters, generous
  white margins; a running mono bio can climb the left page edge (`VerticalText`).
- **Corners:** square (`--radius-sm: 0`). Only the circular prev/next arrows are round.
- **Shadows:** one page-lift + a faint arrow shadow. No card shadows.
- **Motion:** quick and mechanical (`--dur-fast` 120ms, `--ease-out`), subtle hover image
  scale, links fade to 0.7 + underline. No bounce, no loops.
- **Imagery:** film photography — color (Kodak Gold / Portra warmth) and black-and-white
  (Tri-X). Grainy, documentary, natural light.

## Iconography
- **No logo.** The name (`Gavin Wilson (R)`) is the wordmark, set in bold grotesque. Do not
  invent a mark.
- **Almost no icons.** The only glyphs are the **chevron** in the circular `NavArrow` and text
  arrows (`→`, `PREVIOUS`/`NEXT`). Everything else is type. The signature "icon" is really the
  **bracket/number notation** (`[01]`).
- No icon font is used. If a consuming design needs UI icons, substitute a thin-stroke set
  (**Lucide**, 1.5px) kept ink-toned and small, and flag it. **No emoji.**

## Components (`window.DesignSystem_9a26e9`)
- **Button** (`actions/`) — mono link / outline / accent (`solid`); `bracket` wraps `[LABEL]`.
- **NavArrow** (`actions/`) — circular prev/next.
- **DisplayHeading** (`foundation/`) — grotesque name or mono bracket-title.
- **BracketLabel** (`foundation/`) — the signature mono `[01]` / `[LABEL]` notation.
- **Caption** (`foundation/`) — mono meta or grotesque note.
- **Divider** (`foundation/`) — hair / strong / on-dark rule.
- **Tag** (`foundation/`) — mono chip (film stock, year, format).
- **Quote** (`foundation/`) — hanging-quote pull quote + attribution.
- **PhotoTile** (`media/`) — a photograph with square corners, hover zoom, mono caption.
- **FilmStill** (`media/`) — a film still on white with a mono credit (crew role, film & participation dates); pair with `NavArrow` for prev/next.
- **AccentBlock** (`media/`) — solid violet/red/gray info panel (footer / contact).
- **Filmstrip** (`media/`) — numbered thumbnail rail for a detail view.
- **NavBar / NavLink** (`navigation/`) — minimal name + mono links row.
- **VerticalText** (`navigation/`) — mono running bio up the page edge.

**Intentional additions** beyond what the references literally show: `Divider`, `Tag`, and the
`solid` Button variant (needed for real interfaces). Everything else is observed in the source.

## UI kit
- **Collection** (`ui_kits/collection/`) — the film-photography portfolio. Interactive:
  index/contact (mono, vertical bio, numbered filmstrip) → photo detail (PREVIOUS/NEXT + rail),
  a collection gallery (asymmetric grid, per-collection accent, prev/next between NY / CA /
  London), and a **Filmography** page (`FilmStillsScreen`) — a white "credits" spread showing one
  film still with the crew role + participation dates below and circular prev/next arrows.
  Entry: `ui_kits/collection/index.html`.

## Root index / manifest
- `styles.css` — global entry (`@import` lines only).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `layout.css`, `base.css`.
- `components/` — `actions/`, `foundation/`, `media/`, `navigation/`.
- `ui_kits/collection/` — the portfolio UI kit.
- `guidelines/` — foundation specimen cards.
- `assets/photos/` — film photos cropped from references; `assets/reference/` — source screenshots.
- `SKILL.md`, `readme.md`; `_ds_bundle.js` / `_ds_manifest.json` are generated (do not edit).

Namespace: `window.DesignSystem_9a26e9`.

> ⚠️ **Font substitution:** collection pages use **Helvetica Neue** (system — faithful to the
> references); the mono voice is **IBM Plex Mono** (nearest open match to the reference mono).
> Send exact typefaces if you have them and I'll swap them in.
