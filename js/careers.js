/**
 * Careers role expand-on-click (Phase 5).
 */
(function () {
  var toggles = document.querySelectorAll(".role-item__toggle");
  if (!toggles.length) {
    return;
  }

  toggles.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      var panel = toggle.nextElementSibling;

      toggles.forEach(function (other) {
        if (other !== toggle) {
          other.setAttribute("aria-expanded", "false");
          var otherPanel = other.nextElementSibling;
          if (otherPanel && otherPanel.classList.contains("role-item__panel")) {
            otherPanel.hidden = true;
          }
        }
      });

      toggle.setAttribute("aria-expanded", expanded ? "false" : "true");
      if (panel && panel.classList.contains("role-item__panel")) {
        panel.hidden = expanded;
      }
    });
  });
})();
