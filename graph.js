document.addEventListener('DOMContentLoaded', function () {
    var queryParams = new URLSearchParams(window.location.search);
    var username = queryParams.get('username');
    
    if (username) {
        var welcomeUsername = document.getElementById('welcome-username');
        welcomeUsername.textContent = username;
    } else {
        // Redirect back to the login page if no username is provided
        window.location.href = 'index.html';
    }
});
