import AOS from 'aos';


document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 1000,  
    once: true,      
   
  });

  const sliderWrapper = document.querySelector('.gallery-slider__wrapper');
  const slides = document.querySelectorAll('.gallery-slider__slide');
  let currentIndex = 0;
  const totalSlides = slides.length;

  if (sliderWrapper && slides.length > 0) {
    function showSlide(index) {
      currentIndex = (index + totalSlides) % totalSlides;
      sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(() => {
      showSlide(currentIndex + 1);
    }, 3000);

    showSlide(currentIndex);
  }
});
