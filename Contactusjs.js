// document.addEventListener('DOMContentLoaded', function() {
//     // Navigation Links Handler
//     const navLinks = document.querySelectorAll('.nav-link');
    
//     navLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             // Remove active class from all links
//             navLinks.forEach(l => l.classList.remove('active'));
            
//             // Add active class to clicked link
//             this.classList.add('active');
//         });
//     });

    // Mobile Menu Toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinksContainer = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
    });

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    const inputs = contactForm.querySelectorAll('input, textarea');

    // Add floating label effect
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });

        // Maintain focused state if input has value
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });

    // Form submission and validation
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            submitForm();
        }
    });

    function validateForm() {
        let isValid = true;
        const errorMessages = {
            name: 'Please enter a valid name (2-50 characters)',
            email: 'Please enter a valid email address',
            subject: 'Subject is required (min 5 characters)',
            message: 'Message is required (min 10 characters)'
        };

        // Clear previous errors
        clearErrors();

        // Name validation
        const name = document.getElementById('name');
        if (!name.value.trim() || !/^[a-zA-Z\s]{2,50}$/.test(name.value.trim())) {
            showError(name, errorMessages.name);
            isValid = false;
        }

        // Email validation
        const email = document.getElementById('email');
        if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
            showError(email, errorMessages.email);
            isValid = false;
        }

        // Subject validation
        const subject = document.getElementById('subject');
        if (!subject.value.trim() || subject.value.trim().length < 5) {
            showError(subject, errorMessages.subject);
            isValid = false;
        }

        // Message validation
        const message = document.getElementById('message');
        if (!message.value.trim() || message.value.trim().length < 10) {
            showError(message, errorMessages.message);
            isValid = false;
        }

        return isValid;
    }

    function showError(input, message) {
        const formGroup = input.closest('.form-group');
        const error = document.createElement('div');
        error.className = 'error-message';
        error.textContent = message;
        formGroup.appendChild(error);
        input.classList.add('error');
    }

    function clearErrors() {
        document.querySelectorAll('.error-message').forEach(error => error.remove());
        document.querySelectorAll('.error').forEach(input => input.classList.remove('error'));
    }

    function submitForm() {
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;

        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <span class="loading-spinner"></span>
            <span>Sending...</span>
        `;

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            showSuccessMessage();
            contactForm.reset();
            inputs.forEach(input => {
                input.parentElement.classList.remove('focused');
            });
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }, 1500);
    }

    function showSuccessMessage() {
        const successModal = document.createElement('div');
        successModal.className = 'success-modal';
        successModal.innerHTML = `
            <div class="success-content">
                <div class="success-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for contacting us. We'll get back to you soon.</p>
                <button class="close-btn">Close</button>
            </div>
        `;

        document.body.appendChild(successModal);

        // Add animation class after a small delay
        setTimeout(() => {
            successModal.classList.add('show');
        }, 10);

        const closeBtn = successModal.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => {
            successModal.classList.remove('show');
            setTimeout(() => {
                successModal.remove();
            }, 300);
        });
    }
});
