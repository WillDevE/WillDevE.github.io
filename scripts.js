document.addEventListener('DOMContentLoaded', function() {
    // Dark mode toggle functionality
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const body = document.querySelector('body');

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        const moonIcon = darkModeToggle.querySelector('.fa-moon');
        const sunIcon = darkModeToggle.querySelector('.fa-sun');

        if (body.classList.contains('dark-mode')) {
            moonIcon.classList.remove('animate');
            sunIcon.classList.add('animate');
        } else {
            sunIcon.classList.remove('animate');
            moonIcon.classList.add('animate');
        }
    });
});
