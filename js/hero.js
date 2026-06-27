/**
 * Homepage hero — headline stagger (GSAP) + service hover panel.
 */
(function () {
  var stage = document.querySelector(".hero-stage");
  if (!stage) {
    return;
  }

  var reducedMotion = document.documentElement.classList.contains("reduced-motion");
  var lines = document.querySelectorAll(".hero-display__line");

  if (!reducedMotion && typeof gsap !== "undefined" && lines.length) {
    gsap.from(lines, {
      opacity: 0,
      y: 36,
      duration: 0.75,
      stagger: 0.1,
      ease: "power2.out",
    });
  }

  var panel = document.getElementById("service-panel");
  var layout = document.querySelector(".hero-stage__layout");
  var grid = document.querySelector(".service-grid");
  var cells = document.querySelectorAll(".service-grid__cell");

  if (!panel || !layout || !grid || !cells.length) {
    return;
  }

  var panelTitle = panel.querySelector(".service-panel__title");
  var panelCopy = panel.querySelector(".service-panel__copy");
  var panelLink = panel.querySelector(".service-panel__link");
  var hoverMq = window.matchMedia("(hover: hover) and (pointer: fine)");
  var activeCell = null;

  function showPanel(cell) {
    if (!hoverMq.matches) {
      return;
    }

    activeCell = cell;
    cells.forEach(function (c) {
      c.classList.toggle("is-active", c === cell);
    });

    panelTitle.textContent = cell.dataset.title || "";
    panelCopy.textContent = cell.dataset.copy || "";
    panelLink.href = cell.getAttribute("href") || "#";
    panelLink.textContent = cell.dataset.linkLabel || "Learn more";
    panel.setAttribute("aria-hidden", "false");
    panel.classList.add("is-visible");
  }

  function hidePanel() {
    activeCell = null;
    cells.forEach(function (c) {
      c.classList.remove("is-active");
    });
    panel.classList.remove("is-visible");
    panel.setAttribute("aria-hidden", "true");
  }

  if (hoverMq.matches) {
    cells.forEach(function (cell) {
      cell.addEventListener("mouseenter", function () {
        showPanel(cell);
      });
      cell.addEventListener("focus", function () {
        showPanel(cell);
      });
    });

    layout.addEventListener("mouseleave", hidePanel);

    panel.addEventListener("mouseenter", function () {
      if (activeCell) {
        showPanel(activeCell);
      }
    });

    panel.addEventListener("focusin", function () {
      if (activeCell) {
        showPanel(activeCell);
      }
    });
  }
})();
