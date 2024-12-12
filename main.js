document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    const welcomeBtn = document.getElementById('welcomeBtn');
    const welcomeMessage = document.getElementById('welcomeMessage');

    welcomeBtn.addEventListener('click', () => {
        welcomeMessage.textContent = "Welcome to our restaurant! We are delighted to serve you.";
    });
});

