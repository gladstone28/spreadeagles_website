// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Toggle mobile navigation menu
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', function() {
  navMenu.classList.toggle('open');
});

// Close mobile navigation menu when a menu item is clicked
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navMenu.classList.remove('open');
  });
});

// Form submission
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Show loading spinner
  const submitButton = document.querySelector('form button[type="submit"]');
  submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
