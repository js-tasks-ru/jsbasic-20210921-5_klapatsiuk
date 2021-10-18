function initCarousel() {
  const carousel = document.querySelector('.carousel');
  const carouselInner = document.querySelector('.carousel__inner');
  const carouselInnerWidth = carouselInner.offsetWidth;
  let carouselCurrentPosition = 0;
  const carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  const carouselArrowRight = document.querySelector('.carousel__arrow_right');

  toggleVisibilityCarouselArrows();

  carousel.addEventListener('click', (event) => {
    const targetArrowLeft = event.target.closest('.carousel__arrow_left');
    const targetArrowRight = event.target.closest('.carousel__arrow_right');

    if (!targetArrowRight == carouselArrowRight) return;
    if (!targetArrowLeft == carouselArrowLeft) return;
    
    if (targetArrowLeft == carouselArrowLeft) {
      carouselCurrentPosition += carouselInnerWidth;
    } else if (targetArrowRight == carouselArrowRight) {
      carouselCurrentPosition -= carouselInnerWidth;
    }
    
    carouselInner.style.transform = `translateX(${carouselCurrentPosition}px)`;
    
    toggleVisibilityCarouselArrows();
  });

  function toggleVisibilityCarouselArrows() {
    if (carouselCurrentPosition === 0) {
      carouselArrowLeft.style.display = 'none';
    } else if (carouselCurrentPosition === -3 * carouselInnerWidth) {
      carouselArrowRight.style.display = 'none';
    } else {
      carouselArrowLeft.style.display = '';
      carouselArrowRight.style.display = '';
    }
  }
}
