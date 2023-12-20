const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const MobileMenu = document.querySelector(".mobile-menu");


menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    MobileMenu.classList.toggle("inactive");
}