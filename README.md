# ydadigitals.github.io

Static site for [ydadigitals.com](https://ydadigitals.com). Deploys from the `source` branch via GitHub Pages.

## Shared chrome (Phase 2)

Nav, footer, and `<head>` snippets live in [`partials/`](partials/). When editing shared layout, update the partial **and** every page listed in [`partials/README.md`](partials/README.md).

## Styles

| File | Purpose |
|------|---------|
| `css/styles.css` | Legacy layout rules (tokenized colors) |
| `css/tokens.css` | Design tokens |
| `css/base.css` | Focus, utilities, reduced-motion |
| `css/components/chrome.css` | Nav overlay, wordmark, dark footer |
| `css/components/pages.css` | Inner page layouts (about, CRM, careers, contact) |
| `css/components/hero.css` | Hero blocks (replaces `external.css`) |

## Scripts

| File | Purpose |
|------|---------|
| `js/motion.js` | `prefers-reduced-motion` guard |
| `js/nav.js` | Mobile overlay menu |
| `js/nav-marquee.js` | Nav link hover marquee (desktop) |
| `js/page-enter.js` | Subtle inner-page enter animation |
| `js/hero.js` | Homepage headline stagger + service panel (index only) |
| `js/careers.js` | Careers role expand-on-click |
| `js/main.js` | Contact form inline validation |

See [`changes.md`](changes.md) for the full Metalab-inspired redesign plan.
