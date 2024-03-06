var splide = new Splide(".splide", {
  type: "loop",
  perPage: 3,
  autoplay: true,
  // pagination: false,
  arrows: false,
  pagination: true,
});

splide.mount();

var splide;

function initializeSplide() {
  var perPageValue = window.innerWidth >= 768 ? 3 : 1; // Change to 1 at md screen size

  splide = new Splide(".splide", {
    type: "loop",
    perPage: perPageValue,
    autoplay: true,
    pagination: true,
    arrows: false,
  });

  splide.mount();
}

window.addEventListener("resize", function () {
  splide.destroy();
  initializeSplide();
});

initializeSplide();

// To make the arrow to disappear when we reach at the top of the window
var arrow = document.getElementById("arrow-down");

// Add a scroll event listener
window.addEventListener("scroll", function () {
  // Check if the user has scrolled to the top of the page
  if (window.scrollY === 0) {
    arrow.style.display = "none"; // Hide the arrow
  } else {
    arrow.style.display = "flex"; // Show the arrow
  }
});
