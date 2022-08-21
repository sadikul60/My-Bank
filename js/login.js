// step-1: add click event handler with the submit button
document.getElementById('submit-btn').addEventListener('click', function(){
    // step-2: get the email address inside the email input field
    // always remember to use (.value) to get tex from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log(email);
    // step-3: get the password inside the password input field and always remember to use (.value) to get text from an input field
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    // Danger: Do not verify email password on the client side
    // step-4: verify email and password
    if (email === 'sadikul@gmail.com' && password === 'sadikul@'){
        window.location.href = 'bank.html';
    }
    else {
        alert('invalid user');
    }
});