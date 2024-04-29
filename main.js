import "./style.scss";

const openNavButton = document.querySelector(".navigation-menu");
const mobileNav = document.querySelector(".mobile-nav");
const closeNavButton = document.querySelector(".mobile-close-navbar");

openNavButton.addEventListener("click", () => {
  mobileNav.classList.add("open");
});

closeNavButton.addEventListener("click", () => {
  mobileNav.classList.remove("open");
});
