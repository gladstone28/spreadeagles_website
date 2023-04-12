// Add a click event listener to the "Contact" button in the nav menu
document.querySelector('#contact-button').addEventListener('click', function() {
  // Get the contact form element
  var form = document.querySelector('#contact-form');

  // Toggle the form's visibility
  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
});

// Add a submit event listener to the contact form
document.querySelector('#contact-form').addEventListener('submit', function(event) {
  // Prevent the form from being submitted
  event.preventDefault();

  // Get the input field values
  var name = document.querySelector('#name').value;
  var email = document.querySelector('#email').value;
  var message = document.querySelector('#message').value;

  // Validate the input field values
  if (!name || !email || !message) {
    alert('Please fill out all fields');
    return;
  }

  // Send the message
  sendMessage(name, email, message);
});

// Send a message to the server
function sendMessage(name, email, message) {
  // Make a request to the server to send the message
  fetch('/send-message', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: name, email: email, message: message })
  })
  .then(function(response) {
    if (response.ok) {
      // Clear the form fields
      document.querySelector('#name').value = '';
      document.querySelector('#email').value = '';
      document.querySelector('#message').value = '';

      // Show a success message
      alert('Message sent successfully');
    } else {
      // Show an error message
      alert('An error occurred while trying to send the message');
    }
  });
}
