const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const MobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");


menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarIcon.addEventListener("click", toggleCarAside);

function toggleDesktopMenu() {
    aside.classList.add("inactive");
    MobileMenu.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");

}

function toggleMobileMenu() {
    aside.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    MobileMenu.classList.toggle("inactive");
}

function toggleCarAside() {
    desktopMenu.classList.add("inactive");
    MobileMenu.classList.add("inactive");
    aside.classList.toggle("inactive");
}