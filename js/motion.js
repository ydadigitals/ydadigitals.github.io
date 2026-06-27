/**
 * Motion preferences scaffold for ydadigitals site.
 * Sets a `reduced-motion` class on <html> when the user prefers reduced motion.
 * Future animation modules should respect this class.
 */
(function () {
  var mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  function applyMotionPreference() {
    document.documentElement.classList.toggle("reduced-motion", mediaQuery.matches);
  }

  applyMotionPreference();

  if (typeof mediaQuery.addEventListener === "function") {
    mediaQuery.addEventListener("change", applyMotionPreference);
  } else if (typeof mediaQuery.addListener === "function") {
    mediaQuery.addListener(applyMotionPreference);
  }
})();
