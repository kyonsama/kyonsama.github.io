const menuEmail = document.querySelector('.navbar__email');
const desktopMenu = document.querySelector('.Desktop-menu');
const menuHamIcon = document.querySelector('.navbar--mobile__icon');
const mobileMenu = document.querySelector('.mobile-menu'); 
const onCarList = document.querySelector('.in-shop-car__container');
const carIcon = document.querySelector('.navbar--mobile__icon--car');
const carIconDesktop = document.querySelector('.navbar--right__icon');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
carIcon.addEventListener('click', toggleCarListMenu);
carIconDesktop.addEventListener('click',toggleCarListMenu)

function toggleDesktopMenu(){
    const desktopMenuClose =  desktopMenu.classList.contains('inactive');
    desktopMenu.classList.toggle('inactive');

    if (desktopMenuClose){
        onCarList.classList.add('inactive');
    }

}

function toggleMobileMenu(){
    const mobileMenuClose = mobileMenu.classList.contains('inactive');
    mobileMenu.classList.toggle('inactive');

    if (mobileMenuClose){
        onCarList.classList.add('inactive');

    }
}

function toggleCarListMenu(){
    const onCarListClose =  onCarList.classList.contains('inactive');
    onCarList.classList.toggle('inactive');

    if (onCarListClose) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add ('inactive');
    }
}
