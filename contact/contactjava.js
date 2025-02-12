// Initialize EmailJS
(function() {
    emailjs.init("YOUR_PUBLIC_KEY");
})();

// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});

// Form submission handling
const contactForm = document.getElementById('contactForm');
const toastContainer = document.getElementById('toastContainer');

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    toastContainer.appendChild(toast);

    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitButton = contactForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    try {
        await emailjs.sendForm(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            contactForm
        );
        
        showToast('Message sent successfully!');
        contactForm.reset();
    } catch (error) {
        showToast('Failed to send message. Please try again.', 'error');
    }

    submitButton.disabled = false;
    submitButton.textContent = 'Send Message';
});