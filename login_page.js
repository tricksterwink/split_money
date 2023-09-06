function loginUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the username and password are correct (you can replace this with your own validation logic)
    if (username === 'name' && password === 'pwdpwd') {
        // Redirect to the new_split.html page
        window.location.href = 'new_split';
        return false; // Prevent form submission
    } else {
        // Display an error message (you can customize this)
        alert('Invalid username or password. Please try again.');
        return false; // Prevent form submission
    }
}
