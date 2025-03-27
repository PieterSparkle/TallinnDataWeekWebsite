// Main JavaScript file for Tallinn Data Week 2025 website

document.addEventListener('DOMContentLoaded', function() {
    console.log('Tallinn Data Week 2025 website loaded');
    
    // Form submission handling (to be implemented)
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted - add actual submission logic here');
            // Form submission code will go here
            alert('Thank you for your message! We will get back to you soon.');
        });
    }
});