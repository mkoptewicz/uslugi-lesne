const btn = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const showNav = () => nav.classList.toggle("nav--visible");
btn.addEventListener("click", showNav);
