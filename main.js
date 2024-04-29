import "./style.scss";

const navLinks = document.querySelectorAll(".navbar-link");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
const openNavButton = document.querySelector(".navigation-menu");
const mobileNav = document.querySelector(".mobile-nav");
const closeNavButton = document.querySelector(".mobile-close-navbar");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    e.preventDefault();
    const id = navLink.textContent.toLowerCase();
    const section = document.getElementById(id);
    const position = section.offsetTop
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  });
});

mobileNavLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    e.preventDefault();
    const id = navLink.textContent.toLowerCase();
    const section = document.getElementById(id);
    const position = section.offsetTop - 80;
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
    mobileNav.classList.remove("open");
  });
});

openNavButton.addEventListener("click", () => {
  mobileNav.classList.add("open");
});

closeNavButton.addEventListener("click", () => {
  mobileNav.classList.remove("open");
});
