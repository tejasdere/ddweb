function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Basic validation
    if (!username || !password) {
        alert('Please enter both username and password');
        return;
    }

    // Check credentials (in a real application, this would be done on the server)
    if (username === 'demo' && password === 'password') {
        // Redirect to the welcome page with the username as a query parameter
        window.location.href = 'welcome.html?username=' + encodeURIComponent(username);
    } else {
        alert('Invalid credentials. Please try again.');
    }
}
