const btn = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const showNav = () => {
  nav.classList.toggle("nav--visible");
  btn.classList.toggle("active");
};
btn.addEventListener("click", showNav);
