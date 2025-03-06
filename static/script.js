document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeIcon = document.getElementById('darkModeIcon');
    const welcomeText = document.getElementById('welcomeText');
    const tagline = document.getElementById('tagline');

    // Dark mode toggle functionality
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark');
        if (document.body.classList.contains('dark')) {
            darkModeIcon.classList.remove('fa-moon');
            darkModeIcon.classList.add('fa-sun');
        } else {
            darkModeIcon.classList.remove('fa-sun');
            darkModeIcon.classList.add('fa-moon');
        }
    });

    // GSAP animations
    gsap.from(welcomeText, { duration: 1, x: -100, opacity: 0 });
    gsap.to(tagline, { duration: 1, y: 20, opacity: 1, delay: 1 });
});