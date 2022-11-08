const menuEmail = document.querySelector('.navbar__email');
const desktopMenu = document.querySelector('.Desktop-menu');
const menuHamIcon = document.querySelector('.navbar--mobile__icon');
const mobileMenu =document.querySelector('.mobile-menu'); 

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}