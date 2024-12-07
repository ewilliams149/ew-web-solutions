function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    
    navbar.classList.toggle('show');

    menuToggle.classList.toggle('open');
}

