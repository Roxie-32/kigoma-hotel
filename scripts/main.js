const mobileNav = document.querySelector(".mobile-nav");
const toggler = document.querySelector(".mobile-toggle");
const closebtn = document.querySelector(".close-btn");

toggler.addEventListener("click", () => {
  mobileNav.classList.toggle("hide");
});

closebtn.addEventListener("click", () => {
  mobileNav.classList.add("hide");
});
