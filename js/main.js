// This file contains JavaScript functionality for the ydadigitals website.
// It includes form validation, interactive elements, and dynamic content.

document.addEventListener('DOMContentLoaded', function() {
    // Example of form validation for the contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                event.preventDefault();
                alert('Please fill in all fields.');
            } else {
                alert('Thank you for your message!');
            }
        });
    }

    // Example of interactive elements
    const toggleButton = document.getElementById('toggle-info');
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            const infoSection = document.getElementById('info-section');
            if (infoSection) {
                infoSection.classList.toggle('hidden');
            }
        });
    }
});