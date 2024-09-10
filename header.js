// Toggle mobile navigation visibility
function toggleNav() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("show-navbar");
}


// Show/hide header on scroll


let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


// Fade out header and description on scroll

window.addEventListener('scroll', function() {
    const header = document.querySelector('.background_img h1');
    const description = document.querySelector('.background_img p');
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Fading out as you scroll
    const fadeOutPoint = 200;
    if (scrollPosition < fadeOutPoint) {
        const opacityValue = 1 - scrollPosition / fadeOutPoint;
        header.style.opacity = opacityValue;
        description.style.opacity = opacityValue;
    } else {
        header.style.opacity = 0;
        description.style.opacity = 0;
    }
});


// for fade in 

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    const fadeElements = document.querySelectorAll('.fade-in');

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});


