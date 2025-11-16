// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevel = entry.target.getAttribute('data-skill-level');
                entry.target.style.width = skillLevel + '%';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Download CV button functionality
    const downloadCV = document.getElementById('download-cv');
    if (downloadCV) {
        downloadCV.addEventListener('click', function(e) {
            e.preventDefault();
            alert('CV download functionality would be implemented here. In a real scenario, this would download your CV file.');
        });
    }
    
    // // Contact form submission
    // const contactForm = document.getElementById('contactForm');
    // const formMessage = document.getElementById('form-message');
    
    // if (contactForm) {
    //     contactForm.addEventListener('submit', function(e) {
    //         e.preventDefault();
            
    //         // In a real implementation, this would be handled by the PHP backend
    //         // For demonstration, we'll simulate a successful submission
    //         const formData = new FormData(contactForm);
            
    //         // Simple validation
    //         const name = formData.get('name');
    //         const email = formData.get('email');
    //         const message = formData.get('message');
            
    //         if (!name || !email || !message) {
    //             showFormMessage('Please fill in all fields.', 'error');
    //             return;
    //         }
            
    //         if (!isValidEmail(email)) {
    //             showFormMessage('Please enter a valid email address.', 'error');
    //             return;
    //         }
            
    //         // Simulate form submission
    //         showFormMessage('Sending your message...', 'success');
            
    //         setTimeout(() => {
    //             showFormMessage('Thank you! Your message has been sent successfully.', 'success');
    //             contactForm.reset();
    //         }, 1500);
    //     });
    // }
    
    // function showFormMessage(message, type) {
    //     formMessage.textContent = message;
    //     formMessage.className = '';
    //     formMessage.classList.add(type);
    // }
    
    // function isValidEmail(email) {
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return emailRegex.test(email);
    // }
    
    // Add fade-in animation to sections when they come into view
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Add CSS for fade-in animation
    const style = document.createElement('style');
    style.textContent = `
        section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        section.fade-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
});