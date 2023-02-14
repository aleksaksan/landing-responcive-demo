let currentSlide = 0;
let prevSlide = 0;

const foodSlides = document.querySelectorAll('.bg-picture-wrapper');
const foodSlidesCounter = document.querySelector('.sliders-counter-wrapper');
const prevBtn = document.querySelector('.menu_slides-btn.prev-btn');
const nextBtn = document.querySelector('.menu_slides-btn.next-btn');

const showSlide = (idx) => {
  foodSlides[prevSlide].style.display = 'none';
  prevSlide = idx;
  foodSlides[idx].style.display = 'block';
  foodSlidesCounter.textContent = `${idx+1}/${foodSlides.length}`;
};

prevBtn.addEventListener('click', () => {
  if (currentSlide === 0)
    currentSlide = foodSlides.length - 1;
  else
    currentSlide--;
  showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
  if (currentSlide === foodSlides.length - 1)
    currentSlide = 0;
  else
    currentSlide++;
  showSlide(currentSlide);
});

showSlide(currentSlide);