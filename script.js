// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    var alertButton = document.getElementById('alertButton');
    if (alertButton) {
        alertButton.addEventListener('click', function() {
            alert('Hello! Thanks for visiting my website.');
        });
    }
});

// Function to handle subscription form submission
function subscribe(event) {
    event.preventDefault();
    var email = document.getElementById('emailInput').value;
    if (email) {
        alert('Thank you for subscribing, ' + email + '!');
    } else {
        alert('Please enter a valid email address.');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var alertButton = document.getElementById('alertButton');
    if (alertButton) {
        alertButton.addEventListener('click', function () {
            window.location.href = 'https://stigmilearning.com';
        });
    }
});
