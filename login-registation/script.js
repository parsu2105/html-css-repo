document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // Handle form toggle
    function toggleForm(formType) {
        if (formType === 'login') {
            loginForm.classList.add('active');
            registerForm.classList.remove('active');
        } else if (formType === 'register') {
            registerForm.classList.add('active');
            loginForm.classList.remove('active');
        }
    }

    // Add event listener to the login form
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        window.location.href = 'https://kprsalahalu.com'; // Navigate to Google
    });

    // Add event listener to the register form (optional, if needed)
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        // Handle registration form submission here
    });

    // Expose the toggleForm function to global scope for use in HTML
    window.toggleForm = toggleForm;
});
