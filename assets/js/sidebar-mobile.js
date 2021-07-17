// Navigation on mobile view
const sidebarOpen = document.querySelector(".navbar-toggler");
const sidebarClose = document.querySelector(".navbar-arrow");
const menu = document.querySelector(".mobile-logo");

// Open Sidebar in mobile view
sidebarOpen.addEventListener("click", () => {
  document.body.classList.add("active");
  menu.classList.remove("d-none");
});

// Close Sidebar in mobile view
sidebarClose.addEventListener("click", () => {
  document.body.classList.remove("active");
  menu.classList.add("d-none");
});
