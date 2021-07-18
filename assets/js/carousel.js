const overlayCloseBtn = document.querySelector(".overlay-close-button");
const overlayOpenBtn = document.querySelector(".overlay-ellipsis");
const overlayDetail = document.querySelector(".overlay-detail");


// Flickity carousel functionalities
const arrow = new Flickity(".carousel", {
  // options
  contain: true,
  imagesLoaded: true,
  freeScroll: true,
  draggable: ">1",
  arrowShape: "M 0,50 L 60,00 L 50,30 L 80,30 L 80,70 L 50,70 L 60,100 Z",
});

// Open Overlay
overlayOpenBtn.addEventListener("click", () => {

  overlayOpenBtn.classList.add("d-none")
  overlayDetail.classList.remove("d-none");
});

// Close Overlay from close button
overlayCloseBtn.addEventListener("click", () => {

  overlayDetail.classList.add("d-none");
  overlayOpenBtn.classList.remove("d-none")
});

// Close Overlay from clicking anywhere on the overlay
overlayDetail.addEventListener("click", () => {

  overlayDetail.classList.add("d-none");
  overlayOpenBtn.classList.remove("d-none")
});