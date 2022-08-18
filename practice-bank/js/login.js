document.getElementById ('login-btn').addEventListener ('click', function () {
    const emailField = getTextElementFromInput ('eamil-field');
    const passwordField = getTextElementFromInput ('password-field');
    
    if (emailField === 'zakir@gmail.com' && passwordField === 'zakir1234') {
        window.location.href = 'transaction.html';
    }
    else {
        alert ('Provide correct Email and Password');
    }
})
