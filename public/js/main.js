// Main JavaScript for Preplaced.com Clone

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Handle smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Form validation helpers
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // Basic client-side validation
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#F65428';
                } else {
                    field.style.borderColor = '';
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    });

    // Add loading states to buttons
    const submitButtons = document.querySelectorAll('button[type="submit"]');
    submitButtons.forEach(button => {
        button.addEventListener('click', function() {
            // In a real app, this would show a loading spinner
            // For now, we'll just prevent multiple submissions
            if (this.dataset.submitting === 'true') {
                return false;
            }
            this.dataset.submitting = 'true';
            setTimeout(() => {
                this.dataset.submitting = 'false';
            }, 2000);
        });
    });
});

// Utility function to show notifications (can be enhanced)
function showNotification(message, type = 'success') {
    // Simple alert for now - can be replaced with a toast notification
    alert(message);
}

// Handle URL parameters (e.g., ?plan=pro)
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Pre-fill form based on URL parameters
document.addEventListener('DOMContentLoaded', function() {
    const plan = getUrlParameter('plan');
    if (plan) {
        const planSelect = document.querySelector('select[name="plan"]');
        if (planSelect) {
            planSelect.value = plan;
        }
    }
});

