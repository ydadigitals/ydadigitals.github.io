/**
 * Contact form validation with inline errors (Phase 5).
 */
document.addEventListener("DOMContentLoaded", function () {
  var contactForm = document.getElementById("contact-form");
  if (!contactForm) {
    return;
  }

  var errorBox = document.getElementById("contact-form-error");
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");

  contactForm.addEventListener("submit", function (event) {
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var message = messageInput.value.trim();

    if (!name || !email || !message) {
      event.preventDefault();
      if (errorBox) {
        errorBox.textContent = "Please fill in all fields before submitting.";
        errorBox.hidden = false;
      }
      if (!name) {
        nameInput.focus();
      } else if (!email) {
        emailInput.focus();
      } else {
        messageInput.focus();
      }
      return;
    }

    if (errorBox) {
      errorBox.hidden = true;
    }
  });
});
