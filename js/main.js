const headerMobileNav = document.querySelector(".header__mobile-nav");
const mobileNavIcon = document.querySelector(".mobile-nav");
const mobileNav = document.querySelector(".mobile-nav-menu");

headerMobileNav.addEventListener("click", function () {
   mobileNavIcon.classList.toggle("active");
   mobileNav.classList.toggle("active");
   document.body.classList.toggle("no-scroll");
})