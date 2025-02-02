document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.registration-form');
    const inputs = form.querySelectorAll('input, select, textarea');

    // Real-time validation
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            validateInput(this);
        });

        input.addEventListener('blur', function() {
            validateInput(this);
        });
    });

    // Form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let isValid = true;
        const formData = {};

        // Validate all inputs
        inputs.forEach(input => {
            if (!validateInput(input)) {
                isValid = false;
            }
            formData[input.id] = input.value.trim();
        });

        if (isValid) {
            submitForm(formData);
        }
    });

    function validateInput(input) {
        const value = input.value.trim();
        const errorElement = input.parentElement.querySelector('.error-message') || 
                           createErrorElement(input.parentElement);

        switch(input.id) {
            case 'fatherName':
            case 'motherName':
            case 'childName':
                if (!value) {
                    showError(input, errorElement, 'This field is required');
                    return false;
                }
                if (!/^[a-zA-Z\s]{2,50}$/.test(value)) {
                    showError(input, errorElement, 'Please enter a valid name (2-50 characters, letters only)');
                    return false;
                }
                break;

            case 'email':
                if (!value) {
                    showError(input, errorElement, 'Email is required');
                    return false;
                }
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    showError(input, errorElement, 'Please enter a valid email address');
                    return false;
                }
                break;

            case 'mobile':
                if (!value) {
                    showError(input, errorElement, 'Mobile number is required');
                    return false;
                }
                if (!/^[0-9]{10}$/.test(value)) {
                    showError(input, errorElement, 'Please enter a valid 10-digit mobile number');
                    return false;
                }
                break;

            case 'childAge':
                const age = parseInt(value);
                if (!value || isNaN(age)) {
                    showError(input, errorElement, 'Please enter a valid age');
                    return false;
                }
                if (age < 2 || age > 6) {
                    showError(input, errorElement, 'Age must be between 2 and 6 years');
                    return false;
                }
                break;

            case 'address':
                if (!value) {
                    showError(input, errorElement, 'Address is required');
                    return false;
                }
                if (value.length < 10) {
                    showError(input, errorElement, 'Please enter a complete address');
                    return false;
                }
                break;
        }

        hideError(input, errorElement);
        return true;
    }

    function createErrorElement(parent) {
        const errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        parent.appendChild(errorElement);
        return errorElement;
    }

    function showError(input, errorElement, message) {
        input.classList.add('error');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    function hideError(input, errorElement) {
        input.classList.remove('error');
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }

    function submitForm(formData) {
        // Show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';

        // Simulate API call
        setTimeout(() => {
            // Success message
            showSuccessMessage();
            
            // Reset form
            form.reset();
            
            // Reset button
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }, 1500);
    }

    function showSuccessMessage() {
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <div class="success-content">
                <i class="fas fa-check-circle"></i>
                <h3>Registration Successful!</h3>
                <p>Thank you for registering. We will contact you shortly.</p>
                <button class="close-btn">Close</button>
            </div>
        `;

        document.body.appendChild(successMessage);

        successMessage.querySelector('.close-btn').addEventListener('click', () => {
            successMessage.remove();
        });
    }
});
  