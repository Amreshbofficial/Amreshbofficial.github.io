// GSAP Animations
gsap.from("#welcomeText", {
    duration: 1.5,
    y: -50,
    opacity: 0,
    ease: "power3.out",
});

gsap.to("#tagline", {
    duration: 1.5,
    opacity: 1,
    delay: 1,
    ease: "power3.out",
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = document.getElementById('darkModeIcon');
const body = document.body;

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark');
    darkModeIcon.classList.replace('fa-moon', 'fa-sun');
}

// Toggle Dark Mode
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDarkMode = body.classList.contains('dark');
    localStorage.setItem('darkMode', isDarkMode);

    // Change icon
    if (isDarkMode) {
        darkModeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        darkModeIcon.classList.replace('fa-sun', 'fa-moon');
    }
});