const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const slideCount = slides.length / 2; // Adjusted slide count for loop
const slideWidth = slides[0].offsetWidth; // Width of each slide
let currentIndex = 0;

function scrollForward() {
  currentIndex++;
  if (currentIndex >= slideCount) {
    currentIndex = 0;
  }
  updateSlider();
}

function scrollBackward() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slideCount - 1;
  }
  updateSlider();
}

function updateSlider() {
  const newPosition = -currentIndex * slideWidth;
  slider.style.transform = `translateX(${newPosition}px)`;
}

// Initial slide display
updateSlider();
