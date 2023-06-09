// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Dark mode toggle functionality
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const body = document.querySelector('body');
  
    darkModeToggle.addEventListener('click', function() {
      body.classList.toggle('dark-mode');
    });
  });