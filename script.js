document.addEventListener('DOMContentLoaded', (event) => {

    // --- Typed.js Animation ---
    // First, check if the element for the animation exists on the current page
    const typedElement = document.querySelector('.text');
    
    // Only initialize Typed.js if that element is found
    if (typedElement) {
        var typed = new Typed(".text", {
            strings: ["Front End Developer", "Front End Developer", "Front End Developer"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    }

    // --- Responsive Hamburger Menu ---
    // This code will now run on every page without being blocked by an error
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    if (menuIcon) {
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('fa-xmark'); 
            navbar.classList.toggle('active'); 
        };
    }
});