/**
 * Subtle page enter on inner pages (Phase 4).
 * Content is always visible; animation skipped for home and reduced-motion.
 */
(function () {
  if (document.body.classList.contains("page-home")) {
    return;
  }

  if (document.documentElement.classList.contains("reduced-motion")) {
    return;
  }

  document.body.classList.add("page-enter-ready");
})();
