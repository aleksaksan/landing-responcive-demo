const testimonialsSliderWindow = document.querySelector('.testimonials_slider-window');
const testimonialsCardsContainer = testimonialsSliderWindow.querySelector('.testimonials_cards-container');
const testimonialsSlidersPinsContainer = testimonialsSliderWindow.querySelector('.pins-container');
const blogSliderWindow = document.querySelector('.blog_slider-window');
const blogCardsContainer = blogSliderWindow.querySelector('.blog_cards-container');
const blogSlidersPinsContainer = blogSliderWindow.querySelector('.pins-container');

let testiActiveIdx = 0;
let blogActiveIdx = 0;

const createPin = () => {
  const pin = document.createElement('button');
  pin.className = 'sliders-pin';
  return pin;
};

const deletePins = () => {
  testimonialsSliderWindow.querySelectorAll('.sliders-pin').forEach(pin => pin.remove());
  blogSliderWindow.querySelectorAll('.sliders-pin').forEach(pin => pin.remove());
};

const initPins = () => {
  let testimonialsOffset = 438;
  let blogsOffset = 422;
  if (testimonialsSliderWindow.clientWidth > 375) {
    for (let i = 0; i < 3; i++) {
      testimonialsSlidersPinsContainer.append(createPin());
      blogSlidersPinsContainer.append(createPin());
    }
  } else {
    // testimonialsOffset = 438;
    // blogsOffset = 422;
    for (let i = 0; i < 5; i++) {
      testimonialsSlidersPinsContainer.append(createPin());
      blogSlidersPinsContainer.append(createPin());
    };
  };
  testimonialsSlidersPinsContainer.firstElementChild.classList.toggle('active');
  blogSlidersPinsContainer.firstElementChild.classList.toggle('active');

  testimonialsSlidersPinsContainer.querySelectorAll('.sliders-pin')
  .forEach((pin, index, pins) => pin.addEventListener('click', () => {
    testimonialsCardsContainer.style.transform = `translate(-${index * testimonialsOffset}px)`;
    pins[testiActiveIdx].classList.toggle('active');
    testiActiveIdx = index;
    pin.classList.toggle('active');
  }));
  blogSlidersPinsContainer.querySelectorAll('.sliders-pin')
  .forEach((pin, index, pins) => pin.addEventListener('click', () => {
    blogCardsContainer.style.transform = `translate(-${index * blogsOffset}px)`;
    pins[blogActiveIdx].classList.toggle('active');
    blogActiveIdx = index;
    pin.classList.toggle('active');
  }));
};


window.addEventListener('load', () => {
  deletePins();
  initPins();
});

window.addEventListener('resize', () => {
  deletePins();
  initPins();
});
