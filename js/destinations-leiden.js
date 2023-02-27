(function() {
    const slider = document.querySelector('.leiden');
const prevBtn = document.querySelector('.btn_prev_leiden');
const nextBtn = document.querySelector('.btn_next_leiden');
const slides = slider.querySelectorAll('.slider_leiden');

let currentIndex = 0;

if (slides.length > 0) {
  
  for (let i = 1; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  function showNextSlide() {
    slides[currentIndex].style.display = 'none'; 
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].style.display = 'block'; 
  }

  function showPrevSlide() {
    slides[currentIndex].style.display = 'none'; 
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; 
    slides[currentIndex].style.display = 'block'; 
  }

  nextBtn.addEventListener('click', showNextSlide);

  prevBtn.addEventListener('click', showPrevSlide);
}

})();
