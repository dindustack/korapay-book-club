// Navigation on mobile view
const sidebarOpen = document.querySelector(".navbar-toggler");
const sidebarClose = document.querySelector(".navbar-arrow");
const menu = document.querySelector(".sidebar-column");
// const scrollLink = document.querySelectorAll(".scroll-link");
// const navContainer = document.querySelector(".nav__menu");

sidebarOpen.addEventListener("click", () => {
  menu.classList.replace("d-none", "d-block");
//   document.body.classList.add("active");
//   navContainer.style.left = "0";
//   navContainer.style.width = "30rem";
});

sidebarClose.addEventListener("click", () => {
  menu.classList.replace("d-block", "d-none");
//   document.body.classList.remove("active");
//   navContainer.style.left = "-30rem";
//   navContainer.style.width = "0";
});
