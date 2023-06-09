document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const body = document.querySelector('body');
  
    // Check if user preference is stored in localStorage
    const userPref = localStorage.getItem('colorMode');
    if (userPref === 'dark') {
      enableDarkMode();
    } else if (userPref === 'light') {
      enableLightMode();
    }
  
    darkModeToggle.addEventListener('click', function() {
      if (body.classList.contains('dark-mode')) {
        enableLightMode();
      } else {
        enableDarkMode();
      }
    });
  
    function enableDarkMode() {
      body.classList.add('dark-mode');
      localStorage.setItem('colorMode', 'dark');
  
      const moonIcon = darkModeToggle.querySelector('.fa-moon');
      const sunIcon = darkModeToggle.querySelector('.fa-sun');
      moonIcon.style.animation = 'hideIcon 0.3s forwards';
      sunIcon.style.animation = 'showIcon 0.3s forwards';
    }
  
    function enableLightMode() {
      body.classList.remove('dark-mode');
      localStorage.setItem('colorMode', 'light');
  
      const moonIcon = darkModeToggle.querySelector('.fa-moon');
      const sunIcon = darkModeToggle.querySelector('.fa-sun');
      moonIcon.style.animation = 'showIcon 0.3s forwards';
      sunIcon.style.animation = 'hideIcon 0.3s forwards';
    }
  });
  