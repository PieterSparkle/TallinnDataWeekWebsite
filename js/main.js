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

    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const button = item.querySelector('.faq-question');
        
        button.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Toggle the clicked item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});