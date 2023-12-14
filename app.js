function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Basic validation
    if (!username || !password) {
        alert('Please enter both username and password');
        return;
    }

    // Check credentials (in a real application, this would be done on the server)

    // Redirect to the welcome page with the username as a query parameter
    window.location.href = 'dd-graph.html?username=' + encodeURIComponent(username);
    
}
