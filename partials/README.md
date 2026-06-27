# Partials — manual sync guide

Static site has no build step yet. When editing shared chrome, update **both** the partial file and every HTML page listed below.

## Files

| Partial | Purpose |
|---------|---------|
| `partials/head.html` | Meta, OG tags, stylesheets |
| `partials/nav.html` | Wordmark, desktop links, menu toggle, overlay |
| `partials/footer.html` | Dark footer + `motion.js` + `nav.js` |

## Pages to keep in sync

**Root (`ASSET_PREFIX=""`):** `index.html`, `about.html`, `careers.html`, `crm.html`, `contact.html`, `configure.html`

**Career detail (`ASSET_PREFIX="/"`):** `cp/fsi.html`, `cp/fse.html`, `cp/llmp.html`

Legal pages (`privacy-policy.html`, etc.) use standalone inline CSS — update separately in Phase 5/6.

## Per-page head placeholders

| Page | Title | Canonical |
|------|-------|-----------|
| Home | ydadigitals - Home | `https://ydadigitals.com/` |
| About | About Us - ydadigitals | `https://ydadigitals.com/about.html` |
| Careers | Careers - ydadigitals | `https://ydadigitals.com/careers.html` |
| CRM | ydadigitals CRM Product | `https://ydadigitals.com/crm.html` |
| Contact | Contact Us - ydadigitals | `https://ydadigitals.com/contact.html` |

Home only: add `<link rel="stylesheet" href="css/external.css" />` after `tokens.css` — **removed in Phase 3** (home uses `home-hero.css` instead).

Home only: add `<link rel="stylesheet" href="css/components/home-hero.css" />` and scripts `gsap.min.js` + `js/hero.js`.

## Checklist after editing partials

1. Copy changes into every page in the table above.
2. Verify desktop nav links work.
3. Verify mobile menu opens/closes (Escape, link click).
4. With JS disabled, mobile should still show horizontal nav links (fallback).
