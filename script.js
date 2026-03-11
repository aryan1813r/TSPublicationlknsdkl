// Initialize AOS Animation Library
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
});

// Sticky Navbar Functionality
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileNav = document.getElementById('mobile-nav');

mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
});

closeMenuBtn.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable background scrolling
});

// Close mobile menu when clicking a link
const mobileLinks = mobileNav.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Parallax Effect for Hero Floating Cards
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax');

    parallaxElements.forEach(element => {
        // Only trigger on desktop to save performance on mobile
        if (window.innerWidth > 1024) {
            let speed = element.getAttribute('data-speed');
            let yPos = -(window.scrollY * speed / 10);
            element.style.transform = `translateY(${yPos}px)`;
        }
    });
});
