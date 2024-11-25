// Login functionality
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simple validation for username and password
  if (username === 'admin' && password === 'password') {
    window.location.href = 'index.html'; // Redirect to membership form
  } else {
    alert('Invalid credentials');
  }
});

// Form submission functionality
document.getElementById('membershipForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const photo = document.getElementById('photo').files[0];
  const strength = document.getElementById('strength').value;
  const weakness = document.getElementById('weakness').value;
  const reason = document.getElementById('reason').value;

  // Log form data (for now, could be replaced with actual form submission)
  console.log('Form submitted');
  console.log('Photo:', photo);
  console.log('Strength:', strength);
  console.log('Weakness:', weakness);
  console.log('Reason:', reason);

  alert('Form submitted successfully!');
});