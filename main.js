const btn = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const slideNav = () => {
  nav.classList.toggle("nav--visible");
  btn.classList.toggle("active");
};
btn.addEventListener("click", slideNav);
nav.addEventListener("click", slideNav);
