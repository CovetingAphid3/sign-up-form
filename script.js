const submitButton = document.getElementById('button');

submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    // Perform your form validation checks here
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmedPassword = document.getElementById('confirm_password').value;

    // Check if passwords match
    if (password !== confirmedPassword) {
        alert('Passwords do not match');
        return;
    }

    // Check if required fields are not empty
    if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || password.trim() === '') {
        alert('Please fill in all required fields.');
        return; // Stop further execution if validation fails
    }

    // If all validation checks pass, redirect the user to an external link
    const externalLink = 'https://google.com'; // Replace with your desired external link
    window.location.href = externalLink;
});
