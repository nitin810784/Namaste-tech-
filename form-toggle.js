document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const toSignupLink = document.getElementById('to-signup');
    const toLoginLink = document.getElementById('to-login');

    const errorModal = document.getElementById('error-modal');
    const modalMessage = document.getElementById('modal-message');
    const modalClose = document.getElementById('modal-close');

    function showLogin() {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    }

    function showSignup() {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }

    toSignupLink.addEventListener('click', function (e) {
        e.preventDefault();
        showSignup();
    });

    toLoginLink.addEventListener('click', function (e) {
        e.preventDefault();
        showLogin();
    });

    // Show login form by default
    showLogin();

    function showModal(message) {
        modalMessage.textContent = message;
        errorModal.style.display = 'block';
    }

    function hideModal() {
        errorModal.style.display = 'none';
    }

    function isStrongPassword(password) {
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return strongPasswordRegex.test(password);
    }

    function validateSignupForm() {
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        if (!isStrongPassword(password)) {
            showModal('Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.');
            return false;
        }

        if (password !== confirmPassword) {
            showModal('Passwords do not match.');
            return false;
        }

        return true;
    }

    const signupFormElement = document.querySelector('#signup-form form');
    signupFormElement.addEventListener('submit', function (e) {
        if (!validateSignupForm()) {
            e.preventDefault();
        }
    });

    modalClose.addEventListener('click', hideModal);
    window.addEventListener('click', function (event) {
        if (event.target === errorModal) {
            hideModal();
        }
    });
});
