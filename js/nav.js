/**
 * Full-screen overlay navigation (mobile).
 * Adds html.js-nav — without JS, horizontal links remain visible (fallback).
 */
(function () {
  /* Undo legacy nav-marquee markup if still present in DOM */
  document.querySelectorAll(".navbar__links a.nav-link--marquee").forEach(function (link) {
    var label = link.querySelector(".nav-link__label");
    if (label) {
      link.textContent = label.textContent;
      link.classList.remove("nav-link--marquee", "nav-link--hover");
    }
  });

  var toggle = document.querySelector(".navbar__menu-toggle");
  var overlay = document.getElementById("nav-overlay");

  if (!toggle || !overlay) {
    return;
  }

  document.documentElement.classList.add("js-nav");

  var overlayLinks = overlay.querySelectorAll("a");
  var lastFocused = null;

  function isOpen() {
    return toggle.getAttribute("aria-expanded") === "true";
  }

  function openNav() {
    lastFocused = document.activeElement;
    overlay.hidden = false;
    overlay.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    document.body.classList.add("nav-open");

    var firstLink = overlay.querySelector("a");
    if (firstLink) {
      firstLink.focus();
    }
  }

  function closeNav() {
    overlay.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("nav-open");
    overlay.hidden = true;

    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  }

  toggle.addEventListener("click", function () {
    if (isOpen()) {
      closeNav();
    } else {
      openNav();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && isOpen()) {
      event.preventDefault();
      closeNav();
    }
  });

  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
      closeNav();
    }
  });

  overlayLinks.forEach(function (link) {
    link.addEventListener("click", closeNav);
  });
})();
