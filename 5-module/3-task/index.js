function initCarousel() {
  const carouselInner = document.getElementsByClassName('carousel__inner')[0];
  const carouselInnerWidth = carouselInner.offsetWidth;
  let carouselCurrentPosition = 0;
  const carouselArrowLeft = document.getElementsByClassName('carousel__arrow_left')[0];
  const carouselArrowRight = document.getElementsByClassName('carousel__arrow_right')[0];

  toggleVisCarouselArrows();

  document.addEventListener('click', (event) => {
    let target = event.target;
    if (!target == (carouselArrowLeft || carouselArrowRight)) return;

    // Почему-то не срабатывает когда кликаешь на сами иконки-картинки...
    // Даже когда условие меняю на:
    // if (!target.classList.contains('carousel__arrow')) return;
    // всё равно работает только когда кликаешь на div'ы вокруг картинок

    if (target == carouselArrowLeft) {
      carouselCurrentPosition += carouselInnerWidth;
    } else if (target == carouselArrowRight) {
      carouselCurrentPosition -= carouselInnerWidth;
    }
    
    carouselInner.style.transform = `translateX(${carouselCurrentPosition}px)`;
    
    toggleVisCarouselArrows();
  });

  function toggleVisCarouselArrows() {
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
