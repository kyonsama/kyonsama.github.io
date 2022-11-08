const menuEmail = document.querySelector('.navbar__email');
const desktopMenu = document.querySelector('.Desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}