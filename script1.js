document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Simulate a basic login check (for demonstration purposes)
    if (username === 'user' && password === 'password') {
      alert('Login successful!');
      window.location.href = 'plan.html';  // Redirect to another page on successful login
    } else {
      // Display an error message if login fails
      document.getElementById('error-message').textContent = 'Invalid username or password!';
    }
  });