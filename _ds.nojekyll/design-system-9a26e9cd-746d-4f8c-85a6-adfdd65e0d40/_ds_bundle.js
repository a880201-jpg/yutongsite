/* @ds-bundle: {"format":4,"namespace":"DesignSystem_9a26e9","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"NavArrow","sourcePath":"components/actions/NavArrow.jsx"},{"name":"BracketLabel","sourcePath":"components/foundation/BracketLabel.jsx"},{"name":"Caption","sourcePath":"components/foundation/Caption.jsx"},{"name":"DisplayHeading","sourcePath":"components/foundation/DisplayHeading.jsx"},{"name":"Divider","sourcePath":"components/foundation/Divider.jsx"},{"name":"Quote","sourcePath":"components/foundation/Quote.jsx"},{"name":"Tag","sourcePath":"components/foundation/Tag.jsx"},{"name":"AccentBlock","sourcePath":"components/media/AccentBlock.jsx"},{"name":"FilmStill","sourcePath":"components/media/FilmStill.jsx"},{"name":"Filmstrip","sourcePath":"components/media/Filmstrip.jsx"},{"name":"PhotoTile","sourcePath":"components/media/PhotoTile.jsx"},{"name":"NavLink","sourcePath":"components/navigation/NavBar.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"VerticalText","sourcePath":"components/navigation/VerticalText.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"800b972600bf","components/actions/NavArrow.jsx":"343c5ea1f747","components/foundation/BracketLabel.jsx":"7f4b30784f42","components/foundation/Caption.jsx":"4975f43766e2","components/foundation/DisplayHeading.jsx":"4ea939bca43f","components/foundation/Divider.jsx":"715d930082f7","components/foundation/Quote.jsx":"645cca145994","components/foundation/Tag.jsx":"c865f796b8bd","components/media/AccentBlock.jsx":"c9f7f8df4ebe","components/media/FilmStill.jsx":"813f370835b4","components/media/Filmstrip.jsx":"6e6347363282","components/media/PhotoTile.jsx":"e14be7062aad","components/navigation/NavBar.jsx":"fe0da7ab6507","components/navigation/VerticalText.jsx":"218310613437","ui_kits/collection/CollectionScreen.jsx":"524ffa3e5edc","ui_kits/collection/FilmStillsScreen.jsx":"68a0ef76d616","ui_kits/collection/IndexScreen.jsx":"c3e3c0d5f963","ui_kits/collection/PhotoDetailScreen.jsx":"438b00b99890","ui_kits/collection/data.js":"40da0f2b59f6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_9a26e9 = window.DesignSystem_9a26e9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — precise, monospace, mostly quiet. Editorial rather than "app".
 * Variants: "link" (mono underline-on-hover), "outline" (1px square box),
 * "solid" (accent fill). All-caps, tracked, sharp corners.
 */
function Button({
  children,
  variant = 'outline',
  size = 'md',
  as = 'button',
  disabled = false,
  bracket = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '6px 12px',
      fontSize: 'var(--fs-micro)'
    },
    md: {
      padding: '9px 16px',
      fontSize: 'var(--fs-meta)'
    },
    lg: {
      padding: '13px 22px',
      fontSize: 'var(--fs-caption)'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5em',
    fontFamily: 'var(--font-mono)',
    fontWeight: 400,
    letterSpacing: 'var(--ls-label)',
    textTransform: 'uppercase',
    lineHeight: 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
    borderRadius: 'var(--radius-none)',
    transition: 'all var(--dur-fast) var(--ease-out)',
    border: '1px solid transparent',
    background: 'transparent',
    opacity: disabled ? 0.35 : 1,
    ...sizes[size]
  };
  const variants = {
    link: {
      color: 'var(--text-strong)',
      padding: 0,
      textDecoration: 'underline',
      textUnderlineOffset: '0.2em'
    },
    outline: {
      color: 'var(--text-strong)',
      borderColor: 'var(--line-strong)'
    },
    solid: {
      color: 'var(--on-accent)',
      background: 'var(--accent)',
      borderColor: 'var(--accent)'
    }
  };
  const Comp = as;
  const label = bracket ? /*#__PURE__*/React.createElement(React.Fragment, null, "[", children, "]") : children;
  return /*#__PURE__*/React.createElement(Comp, _extends({
    className: "dsq-button",
    "data-variant": variant,
    disabled: as === 'button' ? disabled : undefined,
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), label);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/NavArrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NavArrow — the circular prev/next button seen floating beside the gallery
 * page. Thin ring, chevron, hover fill. `direction` picks the chevron.
 */
function NavArrow({
  direction = 'next',
  size = 44,
  disabled = false,
  style = {},
  ...rest
}) {
  const s = size;
  return /*#__PURE__*/React.createElement("button", _extends({
    className: "dsq-navarrow",
    "data-direction": direction,
    disabled: disabled,
    "aria-label": direction === 'next' ? 'Next' : 'Previous',
    style: {
      width: s,
      height: s,
      borderRadius: '50%',
      border: '1px solid var(--line-hair)',
      background: 'var(--surface-page)',
      boxShadow: 'var(--shadow-arrow)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.3 : 1,
      transition: 'all var(--dur-fast) var(--ease-out)',
      color: 'var(--text-strong)',
      padding: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: s * 0.3,
    height: s * 0.3,
    viewBox: "0 0 10 16",
    fill: "none",
    "aria-hidden": "true",
    style: {
      transform: direction === 'prev' ? 'scaleX(-1)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 1 L9 8 L2 15",
    stroke: "currentColor",
    strokeWidth: "1.4",
    fill: "none"
  })));
}
Object.assign(__ds_scope, { NavArrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/NavArrow.jsx", error: String((e && e.message) || e) }); }

// components/foundation/BracketLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BracketLabel — the signature mono label with numbering/bracket notation:
 * [01], [FILM PHOTOGRAPHER], [KODAK GOLD 200]. Pass `n` for a zero-padded index,
 * or just children. `wrap` chooses bracket style.
 */
function BracketLabel({
  children,
  n,
  pad = 2,
  wrap = 'square',
  tone = 'meta',
  style = {},
  ...rest
}) {
  const num = n != null ? String(n).padStart(pad, '0') : null;
  const inner = num != null ? children ? `${num} ${children}` : num : children;
  const open = wrap === 'round' ? '(' : wrap === 'none' ? '' : '[';
  const close = wrap === 'round' ? ')' : wrap === 'none' ? '' : ']';
  const color = tone === 'accent' ? 'var(--accent-ink)' : tone === 'strong' ? 'var(--text-strong)' : 'var(--text-meta)';
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "dsq-bracketlabel",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-micro)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), open, inner, close);
}
Object.assign(__ds_scope, { BracketLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/BracketLabel.jsx", error: String((e && e.message) || e) }); }

// components/foundation/Caption.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Caption — small metadata. "grotesque" (Helvetica, sentence-case notes) or
 * "mono" (tracked meta — coordinates, timestamps, credits).
 */
function Caption({
  children,
  face = 'mono',
  style = {},
  ...rest
}) {
  const mono = face === 'mono';
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "dsq-caption-el",
    style: {
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
      fontSize: mono ? 'var(--fs-meta)' : 'var(--fs-caption)',
      letterSpacing: mono ? 'var(--ls-mono)' : 'var(--ls-normal)',
      color: 'var(--text-meta)',
      lineHeight: 'var(--lh-snug)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Caption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/Caption.jsx", error: String((e && e.message) || e) }); }

// components/foundation/DisplayHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DisplayHeading — the title voice. Faces:
 *  - "grotesque" (Helvetica, tight & bold) — names / collection titles
 *  - "mono" (IBM Plex Mono, all-caps, tracked) — editorial / bracketed titles
 *  - "cjk" (mono stack → Noto Sans TC, Light 300, wide tracking) — Chinese
 *    headings that share the typewriter texture of body copy (not bold).
 * Kept small; photographs are the display element.
 */
function DisplayHeading({
  children,
  level = 2,
  size = 'title',
  face = 'grotesque',
  align = 'left',
  style = {},
  ...rest
}) {
  const sizes = {
    display: 'var(--fs-display)',
    title: 'var(--fs-title)',
    lead: 'var(--fs-lead)',
    body: 'var(--fs-body)'
  };
  const Tag = `h${level}`;
  const faces = {
    grotesque: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-tight)',
      textTransform: 'none'
    },
    mono: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 400,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase'
    },
    cjk: {
      // mono stack gives Latin / punctuation a typewriter texture; Chinese
      // falls back to Noto Sans TC at Light 300 with wide tracking.
      fontFamily: 'var(--font-mono), var(--font-cjk)',
      fontWeight: 300,
      letterSpacing: '0.22em',
      textTransform: 'none'
    }
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: "dsq-display",
    "data-face": face,
    style: {
      ...faces[face],
      fontSize: sizes[size],
      lineHeight: 'var(--lh-tight)',
      color: 'var(--text-strong)',
      textAlign: align,
      margin: 0,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { DisplayHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/DisplayHeading.jsx", error: String((e && e.message) || e) }); }

// components/foundation/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Divider — a rule. "hair" (light 1px on white), "strong" (full-contrast ink
 * editorial rule), or "onDark". Horizontal by default; `vertical` for inline.
 */
function Divider({
  vertical = false,
  tone = 'hair',
  style = {},
  ...rest
}) {
  const color = tone === 'strong' ? 'var(--line-strong)' : tone === 'onDark' ? 'var(--line-on-dark)' : 'var(--line-hair)';
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "dsq-divider",
    role: "separator",
    style: vertical ? {
      display: 'inline-block',
      width: '1px',
      alignSelf: 'stretch',
      minHeight: '1em',
      background: color,
      ...style
    } : {
      display: 'block',
      height: '1px',
      width: '100%',
      background: color,
      border: 'none',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/Divider.jsx", error: String((e && e.message) || e) }); }

// components/foundation/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Quote — a pull quote with hanging quotation marks and a right-aligned
 * attribution, as used between photographs. "grotesque" or "mono" face.
 */
function Quote({
  children,
  cite,
  face = 'grotesque',
  marks = true,
  style = {},
  ...rest
}) {
  const mono = face === 'mono';
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: "dsq-quote",
    style: {
      margin: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      position: 'relative',
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
      fontSize: mono ? 'var(--fs-body)' : 'var(--fs-lead)',
      fontWeight: 400,
      lineHeight: mono ? 'var(--lh-body)' : 'var(--lh-snug)',
      letterSpacing: mono ? 'var(--ls-mono)' : 'var(--ls-tight)',
      color: 'var(--text-strong)'
    }
  }, marks && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '-0.9em',
      left: '-0.1em',
      color: 'var(--text-faint)',
      fontFamily: 'var(--font-mono)'
    }
  }, "\u201C"), children, marks && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)',
      fontFamily: 'var(--font-mono)'
    }
  }, " \u201D")), cite && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--sp-3)',
      textAlign: 'right',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, cite));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/Quote.jsx", error: String((e && e.message) || e) }); }

// components/foundation/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — a small mono metadata chip (film stock, format, year). "outline" (1px
 * square) or "accent" (accent-tinted). Sharp corners, tracked mono.
 */
function Tag({
  children,
  variant = 'outline',
  bracket = false,
  style = {},
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--fs-micro)',
    letterSpacing: 'var(--ls-label)',
    textTransform: 'uppercase',
    padding: '4px 8px',
    borderRadius: 'var(--radius-none)',
    lineHeight: 1,
    whiteSpace: 'nowrap'
  };
  const variants = {
    outline: {
      border: '1px solid var(--line-hair)',
      color: 'var(--text-muted)',
      background: 'transparent'
    },
    accent: {
      border: '1px solid var(--accent)',
      color: 'var(--accent-ink)',
      background: 'transparent'
    },
    fill: {
      border: '1px solid transparent',
      color: 'var(--text-body)',
      background: 'var(--surface-fill)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "dsq-tag",
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), bracket ? /*#__PURE__*/React.createElement(React.Fragment, null, "[", children, "]") : children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/Tag.jsx", error: String((e && e.message) || e) }); }

// components/media/AccentBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AccentBlock — the solid color info panel that anchors a collection (violet /
 * red / gray in the references). Sets --accent locally so nested links inherit
 * the collection color. Content is mono meta. Used for footers / contact / TOC.
 */
const PALETTE = {
  violet: {
    bg: 'var(--violet)',
    ink: '#0e0e0e'
  },
  red: {
    bg: 'var(--red)',
    ink: '#0e0e0e'
  },
  gray: {
    bg: 'var(--accent-gray)',
    ink: '#0e0e0e'
  }
};
function AccentBlock({
  color = 'violet',
  children,
  style = {},
  ...rest
}) {
  const p = PALETTE[color] || PALETTE.violet;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "dsq-accentblock",
    "data-color": color,
    style: {
      background: p.bg,
      color: p.ink,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-meta)',
      letterSpacing: 'var(--ls-mono)',
      lineHeight: 'var(--lh-body)',
      padding: 'var(--sp-4)',
      borderRadius: 'var(--radius-none)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { AccentBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/AccentBlock.jsx", error: String((e && e.message) || e) }); }

// components/media/FilmStill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FilmStill — a single film still presented on the white canvas, with a mono
 * caption block beneath stating the crew ROLE, the FILM, and the PARTICIPATION
 * PERIOD (e.g. a filmography / credits view). Bilingual-friendly: pass strings
 * that already contain both languages. The still is the hero; caption stays quiet.
 *
 * `align` places the caption block ("left" | "right" | "center"); the reference
 * sets it bottom-right in small mono.
 */
function FilmStill({
  src,
  alt = '',
  film,
  role,
  period,
  note,
  bw = false,
  align = 'right',
  maxHeight = '60vh',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: "dsq-filmstill",
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-5)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt || film || '',
    style: {
      maxWidth: '100%',
      maxHeight,
      objectFit: 'contain',
      display: 'block',
      filter: bw ? 'grayscale(1)' : 'none'
    }
  })), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3px',
      textAlign: align,
      alignItems: align === 'right' ? 'flex-end' : align === 'center' ? 'center' : 'flex-start'
    }
  }, film && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 'var(--fs-body)',
      letterSpacing: 'var(--ls-tight)',
      color: 'var(--text-strong)'
    }
  }, film), role && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-meta)',
      letterSpacing: 'var(--ls-mono)',
      textTransform: 'uppercase',
      color: 'var(--text-body)'
    }
  }, role), period && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-meta)',
      letterSpacing: 'var(--ls-mono)',
      color: 'var(--text-meta)'
    }
  }, period), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-meta)',
      letterSpacing: 'var(--ls-mono)',
      color: 'var(--text-faint)',
      marginTop: '4px',
      maxWidth: 360
    }
  }, note)));
}
Object.assign(__ds_scope, { FilmStill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/FilmStill.jsx", error: String((e && e.message) || e) }); }

// components/media/Filmstrip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Filmstrip — the thumbnail rail beside a photo detail view. Vertical by default
 * (as in the reference), horizontal optional. Non-active thumbs are dimmed; the
 * active one is full opacity. Numbering is OFF by default — set `numbered` to
 * show the [01] index beside each thumb.
 */
function Filmstrip({
  items = [],
  active = 0,
  direction = 'vertical',
  numbered = false,
  onSelect,
  style = {},
  ...rest
}) {
  const vertical = direction === 'vertical';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "dsq-filmstrip",
    style: {
      display: 'flex',
      flexDirection: vertical ? 'column' : 'row',
      gap: 'var(--sp-2)',
      ...style
    }
  }, rest), items.map((it, i) => {
    const isActive = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.src || i,
      onClick: () => onSelect && onSelect(i),
      "aria-current": isActive || undefined,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--sp-2)',
        padding: 0,
        border: 'none',
        background: 'none',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.BracketLabel, {
      n: i + 1,
      tone: isActive ? 'strong' : 'meta',
      style: {
        display: numbered ? undefined : 'none'
      }
    }), /*#__PURE__*/React.createElement("img", {
      src: it.src,
      alt: it.alt || '',
      style: {
        width: 52,
        height: 52,
        objectFit: 'cover',
        display: 'block',
        opacity: isActive ? 1 : 0.35,
        transition: 'opacity var(--dur-fast) var(--ease-out)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Filmstrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Filmstrip.jsx", error: String((e && e.message) || e) }); }

// components/media/PhotoTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PhotoTile — a single photograph in the grid. Square corners, subtle hover
 * scale. Optional zero-padded index and/or caption shown in mono beneath.
 * The photo is the hero; chrome stays minimal.
 */
function PhotoTile({
  src,
  alt = '',
  n,
  caption,
  ratio,
  bw = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: "dsq-phototile",
    style: {
      margin: 0,
      cursor: rest.onClick ? 'pointer' : 'default',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      aspectRatio: ratio,
      background: 'var(--surface-fill)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      filter: bw ? 'grayscale(1)' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  })), (n != null || caption) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      gap: 'var(--sp-2)',
      marginTop: 'var(--sp-2)',
      alignItems: 'baseline'
    }
  }, n != null && /*#__PURE__*/React.createElement(__ds_scope.BracketLabel, {
    n: n
  }), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-meta)',
      color: 'var(--text-meta)',
      letterSpacing: 'var(--ls-mono)'
    }
  }, caption)));
}
Object.assign(__ds_scope, { PhotoTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/PhotoTile.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NavLink — a single mono nav item; supports bracket/paren wrapping. `active`
 * shows the accent color.
 */
function NavLink({
  children,
  active = false,
  wrap = 'none',
  style = {},
  ...rest
}) {
  const open = wrap === 'round' ? '(' : wrap === 'square' ? '[' : '';
  const close = wrap === 'round' ? ')' : wrap === 'square' ? ']' : '';
  return /*#__PURE__*/React.createElement("a", _extends({
    className: "dsq-navlink",
    "data-active": active || undefined,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-meta)',
      letterSpacing: 'var(--ls-mono)',
      textTransform: 'lowercase',
      color: active ? 'var(--accent-ink)' : 'var(--text-muted)',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'color var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), open, children, close);
}

/**
 * NavBar — the minimal editorial top row: a wordmark (the photographer's name,
 * set in bold grotesque — no logo mark exists) with mono links. `centered`
 * renders a single centered label (e.g. "START OVER AGAIN").
 */
function NavBar({
  brand,
  links = [],
  activeHref,
  center,
  style = {},
  children,
  ...rest
}) {
  if (center) {
    return /*#__PURE__*/React.createElement("header", _extends({
      className: "dsq-navbar",
      style: {
        display: 'flex',
        justifyContent: 'center',
        padding: 'var(--sp-4) var(--sp-6)',
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      className: "dsq-label"
    }, center));
  }
  return /*#__PURE__*/React.createElement("header", _extends({
    className: "dsq-navbar",
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--sp-6)',
      padding: 'var(--sp-4) var(--sp-6)',
      ...style
    }
  }, rest), brand && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-tight)',
      color: 'var(--text-strong)'
    }
  }, brand), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--sp-4)',
      alignItems: 'baseline'
    }
  }, links.map(l => /*#__PURE__*/React.createElement(NavLink, {
    key: l.href || l.label,
    href: l.href,
    active: activeHref === l.href,
    wrap: l.wrap
  }, l.label)), children));
}
Object.assign(__ds_scope, { NavLink, NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/VerticalText.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * VerticalText — the mono running text that climbs the left edge of the page
 * (the photographer bio in the reference). Rotated, all-caps, tracked. `side`
 * picks which edge it reads toward.
 */
function VerticalText({
  children,
  side = 'left',
  tone = 'strong',
  style = {},
  ...rest
}) {
  const color = tone === 'meta' ? 'var(--text-meta)' : 'var(--text-strong)';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "dsq-verticaltext",
    style: {
      writingMode: 'vertical-rl',
      transform: side === 'left' ? 'rotate(180deg)' : 'none',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-meta)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      lineHeight: 1.6,
      color,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { VerticalText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/VerticalText.jsx", error: String((e && e.message) || e) }); }

// ui_kits/collection/CollectionScreen.jsx
try { (() => {
/* CollectionScreen — a single photo collection page. Asymmetric 3-column photo
   grid on white, a meta block (name / location+year in the accent color / back
   link), a pull quote, and the solid accent footer block. Prev/next switch
   collections, each recoloring the accent. Echoes the reference gallery pages. */
const {
  PhotoTile,
  Quote,
  AccentBlock,
  BracketLabel,
  NavArrow
} = window.DesignSystem_9a26e9;
const ACCENT_INK = {
  violet: 'var(--violet-ink)',
  red: 'var(--red-ink)',
  gray: 'var(--accent-gray-ink)'
};
function CollectionScreen({
  index,
  onNav,
  onBack
}) {
  const cols = window.PORTFOLIO.collections;
  const c = cols[index];
  const p = c.photos;
  const accentInk = ACCENT_INK[c.color];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1000,
      margin: '0 auto',
      padding: '28px 40px 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr 1fr',
      gap: 14,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(PhotoTile, {
    src: c.hero.src,
    bw: c.hero.bw,
    caption: c.hero.caption,
    alt: c.title
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 8px 24px'
    }
  }, /*#__PURE__*/React.createElement(Quote, {
    cite: c.quote.cite,
    face: "grotesque"
  }, c.quote.text)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(PhotoTile, {
    src: p[4].src,
    caption: p[4].caption,
    ratio: "3/4"
  }), /*#__PURE__*/React.createElement(PhotoTile, {
    src: p[5].src,
    caption: p[5].caption,
    ratio: "3/4"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '2px 0 6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 'var(--fs-body)',
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)'
    }
  }, window.PORTFOLIO.name), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 130
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-meta)',
      letterSpacing: 'var(--ls-mono)',
      color: accentInk,
      lineHeight: 1.5
    }
  }, c.title, /*#__PURE__*/React.createElement("br", null), c.year), /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      marginTop: 14,
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-meta)',
      color: 'var(--text-muted)'
    }
  }, "back (to) collections"))), /*#__PURE__*/React.createElement(PhotoTile, {
    src: p[1].src,
    caption: p[1].caption,
    ratio: "1/1"
  }), /*#__PURE__*/React.createElement(PhotoTile, {
    src: p[3].src,
    caption: p[3].caption,
    ratio: "4/5"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(PhotoTile, {
    src: p[0].src,
    caption: p[0].caption,
    ratio: "4/5"
  }), /*#__PURE__*/React.createElement(PhotoTile, {
    src: p[2].src,
    caption: p[2].caption,
    ratio: "1/1"
  }), /*#__PURE__*/React.createElement(AccentBlock, {
    color: c.color,
    style: {
      minHeight: 150
    }
  }, "instagram", /*#__PURE__*/React.createElement("br", null), "unsplash", /*#__PURE__*/React.createElement("br", null), window.PORTFOLIO.contact.email.replace('@', '[at]'), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, "Orlando, FL", /*#__PURE__*/React.createElement("br", null), "11:58 AM"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, window.PORTFOLIO.name, /*#__PURE__*/React.createElement("br", null), "All rights reserved (c) 2025")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 18,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement(NavArrow, {
    direction: "prev",
    onClick: () => onNav((index - 1 + cols.length) % cols.length)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 18,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement(NavArrow, {
    direction: "next",
    onClick: () => onNav((index + 1) % cols.length)
  })));
}
window.CollectionScreen = CollectionScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/collection/CollectionScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/collection/FilmStillsScreen.jsx
try { (() => {
/* FilmStillsScreen — the white "credits" page: a single film still centered on
   the canvas with a mono caption (role · film · participation dates), a small
   "START OVER AGAIN"-style centered header, and circular prev/next arrows on the
   far left & right edges. Echoes the white editorial reference spreads. */
const {
  FilmStill,
  NavArrow,
  Filmstrip,
  BracketLabel
} = window.DesignSystem_9a26e9;
function FilmStillsScreen({
  index,
  onNav,
  onBack
}) {
  const films = window.PORTFOLIO.films;
  const f = films[index];
  const prev = () => onNav((index - 1 + films.length) % films.length);
  const next = () => onNav((index + 1) % films.length);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: '92vh',
      padding: '28px 40px 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dsq-label"
  }, "Filmography \u2014 start over again"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 40,
      top: 30
    }
  }, /*#__PURE__*/React.createElement(BracketLabel, {
    n: index + 1,
    tone: "strong"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-meta)',
      color: 'var(--text-faint)'
    }
  }, " / ", String(films.length).padStart(2, '0'))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620,
      margin: '0 auto',
      paddingTop: '3vh'
    }
  }, /*#__PURE__*/React.createElement(FilmStill, {
    src: f.src,
    film: f.film,
    role: f.role,
    period: f.period,
    note: f.note,
    align: "right",
    maxHeight: "62vh"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Filmstrip, {
    items: films,
    active: index,
    direction: "horizontal",
    onSelect: onNav
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 18,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement(NavArrow, {
    direction: "prev",
    onClick: prev
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 18,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement(NavArrow, {
    direction: "next",
    onClick: next
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 40,
      bottom: 24,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-meta)',
      color: 'var(--text-meta)'
    }
  }, "\xA92025"));
}
window.FilmStillsScreen = FilmStillsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/collection/FilmStillsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/collection/IndexScreen.jsx
try { (() => {
/* IndexScreen — the landing / contact page. Mono running bio up the left edge,
   a centered mono contact block, and a numbered filmstrip of the photo stream on
   the right. Clicking a thumb (or its number) opens the detail view. Echoes the
   monospace reference. */
const {
  VerticalText,
  BracketLabel,
  Button
} = window.DesignSystem_9a26e9;
function IndexScreen({
  onOpen,
  onCollections,
  onFilms
}) {
  const P = window.PORTFOLIO;
  const stream = P.stream;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: '92vh',
      padding: '40px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 40,
      top: 60,
      bottom: 60
    }
  }, /*#__PURE__*/React.createElement(VerticalText, {
    side: "left",
    style: {
      height: '100%'
    }
  }, P.bio)), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 420,
      margin: '0 auto',
      textAlign: 'center',
      paddingTop: '13vh',
      fontFamily: 'var(--font-mono)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-mono)',
      color: 'var(--text-strong)',
      lineHeight: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body)'
    }
  }, P.name.replace(' (R)', '')), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-meta)'
    }
  }, "[Film Photographer]"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 28
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-meta)'
    }
  }, P.contact.location), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-meta)',
      color: 'var(--text-meta)'
    }
  }, "[", P.contact.available, "]"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 28
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-meta)',
      color: 'var(--text-muted)'
    }
  }, "Contact & follow me:"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-meta)',
      color: 'var(--text-meta)'
    }
  }, "[", P.contact.email, "]"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-meta)',
      color: 'var(--text-meta)'
    }
  }, "[", P.contact.phone, "]"), P.contact.socials.map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      fontSize: 'var(--fs-meta)'
    }
  }, s)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 32
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-3)',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: onCollections,
    bracket: true
  }, "View Collections"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: onFilms,
    bracket: true
  }, "Filmography"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 48,
      top: 60,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-end'
    }
  }, stream.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => onOpen(i),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      border: 'none',
      background: 'none',
      padding: 0,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(BracketLabel, {
    n: i + 1
  }), /*#__PURE__*/React.createElement("img", {
    src: s.src,
    alt: s.title,
    style: {
      width: 66,
      height: 60,
      objectFit: 'cover',
      display: 'block'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 48,
      bottom: 24,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-meta)',
      color: 'var(--text-meta)'
    }
  }, "\xA92025"));
}
window.IndexScreen = IndexScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/collection/IndexScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/collection/PhotoDetailScreen.jsx
try { (() => {
/* PhotoDetailScreen — a single frame, large and centered, with its mono title
   block ([02] / TITLE / [STOCK]), PREVIOUS / NEXT controls, a numbered filmstrip
   rail on the right, and the running bio + ©2025. Echoes the reference detail. */
const {
  Filmstrip,
  BracketLabel,
  VerticalText
} = window.DesignSystem_9a26e9;
function PhotoDetailScreen({
  index,
  onNav,
  onBack
}) {
  const P = window.PORTFOLIO;
  const stream = P.stream;
  const s = stream[index];
  const prev = () => onNav((index - 1 + stream.length) % stream.length);
  const next = () => onNav((index + 1) % stream.length);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: '92vh',
      padding: '36px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 40,
      top: 60,
      bottom: 60
    }
  }, /*#__PURE__*/React.createElement(VerticalText, {
    side: "left",
    tone: "meta",
    style: {
      height: '100%'
    }
  }, P.bio)), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 460,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-label)',
      color: 'var(--text-strong)',
      lineHeight: 1.9,
      fontSize: 'var(--fs-meta)'
    }
  }, /*#__PURE__*/React.createElement(BracketLabel, {
    n: index + 1,
    tone: "strong"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      letterSpacing: 'var(--ls-mono)'
    }
  }, s.title), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-meta)'
    }
  }, "[", s.stock, "]")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: s.src,
    alt: s.title,
    style: {
      width: '100%',
      maxHeight: '58vh',
      objectFit: 'contain',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 20,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-meta)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-mono)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: prev,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      padding: 0
    }
  }, "Previous"), /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-faint)',
      padding: 0
    }
  }, "Index"), /*#__PURE__*/React.createElement("button", {
    onClick: next,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      padding: 0
    }
  }, "Next"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 48,
      top: 60
    }
  }, /*#__PURE__*/React.createElement(Filmstrip, {
    items: stream,
    active: index,
    onSelect: onNav
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 48,
      bottom: 24,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-meta)',
      color: 'var(--text-meta)'
    }
  }, "\xA92025"));
}
window.PhotoDetailScreen = PhotoDetailScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/collection/PhotoDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/collection/data.js
try { (() => {
/* Collection — fake data for the film-photography portfolio UI kit */
window.PORTFOLIO = {
  name: 'Gavin Wilson (R)',
  bio: "Gavin Wilson captures the overlooked — gritty streets, fleeting light, and quiet moments. His lens finds beauty in the everyday, blending cinematic mood with documentary truth. Rooted in storytelling, his work echoes timeless Americana with a modern edge: evocative, bold, and unmistakably honest.",
  contact: {
    location: 'Los Angeles, CA & Worldwide',
    available: 'Available from 09.2025',
    email: 'hello@gavinwilson.com',
    phone: '+1 (310) 555-4827',
    socials: ['Instagram', 'YouTube', 'X']
  },
  collections: [{
    id: 'ny',
    title: 'New York, NY',
    year: '2023',
    color: 'violet',
    hero: {
      src: '../../assets/photos/nyc-skyline-bw.jpg',
      bw: true,
      caption: 'One World, downtown'
    },
    quote: {
      text: "No place is boring, if you've had a good night's sleep and have a pocket full of unexposed film.",
      cite: 'Robert Adams'
    },
    photos: [{
      src: '../../assets/photos/innout.jpg',
      caption: 'In-N-Out'
    }, {
      src: '../../assets/photos/joshua-tree.jpg',
      caption: 'Mojave'
    }, {
      src: '../../assets/photos/lifeguard.jpg',
      caption: 'Lifeguard 15'
    }, {
      src: '../../assets/photos/ferrari-street.jpg',
      caption: 'Rodeo Dr'
    }, {
      src: '../../assets/photos/ramones-neon.jpg',
      caption: 'Ramones'
    }, {
      src: '../../assets/photos/littering-sign.jpg',
      caption: '$1000 fine'
    }]
  }, {
    id: 'ca',
    title: 'Trip to California, USA',
    year: '2024',
    color: 'red',
    hero: {
      src: '../../assets/photos/binocular-beach.jpg',
      bw: false,
      caption: 'Santa Monica'
    },
    quote: {
      text: "You don't make a photograph just with a camera. You bring to the act of photography all the pictures you have seen, the books you have read, the music you have heard, the people you have loved.",
      cite: 'Ansel Adams'
    },
    photos: [{
      src: '../../assets/photos/innout.jpg',
      caption: 'In-N-Out'
    }, {
      src: '../../assets/photos/joshua-tree.jpg',
      caption: 'Joshua Tree'
    }, {
      src: '../../assets/photos/lifeguard.jpg',
      caption: 'Lifeguard 15'
    }, {
      src: '../../assets/photos/flying-cafe.jpg',
      caption: "Flying V Cafe"
    }, {
      src: '../../assets/photos/ramones-neon.jpg',
      caption: 'Ramones'
    }, {
      src: '../../assets/photos/littering-sign.jpg',
      caption: '$1000 fine'
    }]
  }, {
    id: 'ldn',
    title: 'London, UK',
    year: '2025',
    color: 'gray',
    hero: {
      src: '../../assets/photos/bigben-cafe.jpg',
      bw: false,
      caption: 'Westminster'
    },
    quote: {
      text: "No place is boring, if you've had a good night's sleep and have a pocket full of unexposed film.",
      cite: 'Robert Adams'
    },
    photos: [{
      src: '../../assets/photos/red-phonebox.jpg',
      caption: 'K2 box'
    }, {
      src: '../../assets/photos/arch-window.jpg',
      caption: 'St Pancras'
    }, {
      src: '../../assets/photos/central-park.jpg',
      caption: 'The park'
    }, {
      src: '../../assets/photos/street-scooter.jpg',
      caption: 'Courier'
    }, {
      src: '../../assets/photos/ferrari-street.jpg',
      caption: 'Mayfair'
    }, {
      src: '../../assets/photos/innout.jpg',
      caption: 'Diner'
    }]
  }],
  // film stills — each is a still from a production, with the crew role held
  // and the participation period. Presented on the white "credits" page.
  films: [{
    src: '../../assets/photos/ramones-neon.jpg',
    film: '《霓虹之夜》Neon Nights',
    role: 'Gaffer · 燈光師',
    period: '2024.03 – 2024.07',
    note: 'Night exterior, Ximending'
  }, {
    src: '../../assets/photos/street-scooter.jpg',
    film: '《車流》Traffic',
    role: '1st AC · 大助',
    period: '2023.09 – 2023.12',
    note: 'Second unit, city streets'
  }, {
    src: '../../assets/photos/binocular-beach.jpg',
    film: '《海的那邊》Beyond the Sea',
    role: 'DP · 攝影指導',
    period: '2023.02 – 2023.06',
    note: 'Coastal shoot, 16mm'
  }, {
    src: '../../assets/photos/ferrari-street.jpg',
    film: '《街角》The Corner',
    role: 'Camera Operator · 攝影機操作',
    period: '2022.08 – 2022.11',
    note: 'Handheld, available light'
  }, {
    src: '../../assets/photos/arch-window.jpg',
    film: '《舊車站》The Old Station',
    role: 'Lighting Tech · 燈光技師',
    period: '2022.01 – 2022.05',
    note: 'Interior, tungsten'
  }, {
    src: '../../assets/photos/flying-cafe.jpg',
    film: '《咖啡與煙》Coffee & Smoke',
    role: 'Focus Puller · 跟焦員',
    period: '2021.06 – 2021.09',
    note: 'Dolly, 35mm'
  }],
  // flat set for the index filmstrip + detail view
  stream: [{
    src: '../../assets/photos/ferrari-street.jpg',
    title: 'Rodeo Drive',
    stock: 'Kodak Gold 200'
  }, {
    src: '../../assets/photos/porsche-red.jpg',
    title: 'Porsche Collection',
    stock: 'Kodak Gold 200'
  }, {
    src: '../../assets/photos/binocular-beach.jpg',
    title: 'Santa Monica',
    stock: 'Portra 400'
  }, {
    src: '../../assets/photos/innout.jpg',
    title: 'In-N-Out',
    stock: 'Kodak Gold 200'
  }, {
    src: '../../assets/photos/lifeguard.jpg',
    title: 'Lifeguard 15',
    stock: 'Portra 400'
  }, {
    src: '../../assets/photos/ramones-neon.jpg',
    title: 'Ramones',
    stock: 'Cinestill 800T'
  }, {
    src: '../../assets/photos/flying-cafe.jpg',
    title: 'Flying V Cafe',
    stock: 'Cinestill 800T'
  }, {
    src: '../../assets/photos/joshua-tree.jpg',
    title: 'Mojave',
    stock: 'Portra 400'
  }, {
    src: '../../assets/photos/nyc-skyline-bw.jpg',
    title: 'One World',
    stock: 'Tri-X 400'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/collection/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.NavArrow = __ds_scope.NavArrow;

__ds_ns.BracketLabel = __ds_scope.BracketLabel;

__ds_ns.Caption = __ds_scope.Caption;

__ds_ns.DisplayHeading = __ds_scope.DisplayHeading;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.AccentBlock = __ds_scope.AccentBlock;

__ds_ns.FilmStill = __ds_scope.FilmStill;

__ds_ns.Filmstrip = __ds_scope.Filmstrip;

__ds_ns.PhotoTile = __ds_scope.PhotoTile;

__ds_ns.NavLink = __ds_scope.NavLink;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.VerticalText = __ds_scope.VerticalText;

})();
