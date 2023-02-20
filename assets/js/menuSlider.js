const menuSlider = document.querySelector('.menu_slider-window');
const menuCardsContainer = menuSlider.querySelector('.menu_cards-container');
const slidersPins = menuSlider.querySelectorAll('.sliders-pin');

// offset = width + gap = 270px + 100px 
const offset = 370;
let activeIdx = 0;

slidersPins.forEach((pin, index, pins) => pin.addEventListener('click', () => {
  menuCardsContainer.style.transform = `translate(-${index * offset}px)`;
  pins[activeIdx].classList.toggle('active');
  activeIdx = index;
  pin.classList.toggle('active');
}));
