// script.js
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let isFormValid = true;

    // Name validation
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    const nameParts = nameInput.value.trim().split(" ");
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        nameError.style.display = "block";
        isFormValid = false;
    } else if (nameParts.length < 2) {
        nameError.textContent = "Please enter your full name (first and last name).";
        nameError.style.display = "block";
        isFormValid = false;
    } else {
        nameError.style.display = "none";
    }

    // Email validation
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required.";
        emailError.style.display = "block";
        isFormValid = false;
    } else if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = "Please enter a valid email.";
        emailError.style.display = "block";
        isFormValid = false;
    } else {
        emailError.style.display = "none";
    }

    // Phone number validation
    const phoneInput = document.getElementById("phone");
    const phoneError = document.getElementById("phoneError");
    const phonePattern = /^[0-9]{11}$/;
    if (phoneInput.value.trim() === "" || !phonePattern.test(phoneInput.value)) {
        phoneError.textContent = "Phone number must be exactly 11 digits.";
        phoneError.style.display = "block";
        isFormValid = false;
    } else {
        phoneError.style.display = "none";
    }

    // Address validation
    const addressInput = document.getElementById("address");
    const addressError = document.getElementById("addressError");
    if (addressInput.value.trim() === "") {
        addressError.textContent = "Address is required.";
        addressError.style.display = "block";
        isFormValid = false;
    } else {
        addressError.style.display = "none";
    }

    // Password validation
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@]{6,}$/;
    if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Password is required.";
        passwordError.style.display = "block";
        isFormValid = false;
    } else if (!passwordPattern.test(passwordInput.value)) {
        passwordError.textContent = "Password must contain at least one uppercase letter, one lowercase letter, one number, and the '@' symbol.";
        passwordError.style.display = "block";
        isFormValid = false;
    } else {
        passwordError.style.display = "none";
    }

    // Confirm Password validation
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    if (confirmPasswordInput.value.trim() === "") {
        confirmPasswordError.textContent = "Please confirm your password.";
        confirmPasswordError.style.display = "block";
        isFormValid = false;
    }
    else if (passwordInput.value.length < 10) {
        passwordError.textContent = "Password must be at least 10 characters long.";
        passwordError.style.display = "block";
        isFormValid = false;
    }
    else if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        confirmPasswordError.style.display = "block";
        isFormValid = false;
    } else {
        confirmPasswordError.style.display = "none";
    }

    if (isFormValid) {
        alert("Form submitted successfully!");
        document.getElementById("myForm").reset();
    }
});

// Toggle password visibility
function togglePasswordVisibility(toggleId, inputId) {
    const toggleElement = document.getElementById(toggleId);
    const inputElement = document.getElementById(inputId);

    toggleElement.addEventListener("click", function () {
        const inputType = inputElement.type === "password" ? "text" : "password";
        inputElement.type = inputType;

        // Change icon if needed (optional)
        toggleElement.setAttribute("name", isPassword ? "eye" : "eye-off");
    });
}

// Apply toggle to both password fields
togglePasswordVisibility("togglePassword", "password");
togglePasswordVisibility("toggleConfirmPassword", "confirmPassword");
