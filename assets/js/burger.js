const burgerMenu = document.querySelector(".header-burger-btn");

burgerMenu.addEventListener('click', () => {
  const header = document.querySelector("header");
  header.classList.toggle("active");
  burgerMenu.classList.toggle("active");
});