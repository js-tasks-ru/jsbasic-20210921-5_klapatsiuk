import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    
    this.elem = this.render();
    this.inner = this.elem.querySelector('.carousel__inner');
    this.arrowLeft = this.elem.querySelector('.carousel__arrow_left');
    this.arrowRight = this.elem.querySelector('.carousel__arrow_right');
    this.currentPosition = 0;
    
    for (let slide of this.slides) {
      slide = this.renderSlide(slide);
      this.inner.appendChild(slide);
    }

    this.toggleArrowsVisibility();
    this.move();
    this.productAddHandler();
  }

  render() {
    return createElement(`
    <div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      <div class="carousel__inner"></div>
    </div>
    `);
  }

  renderSlide(slide) {
    return createElement(`
      <div class="carousel__slide" data-id="${slide.id}">
      <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
        <span class="carousel__price">€${slide.price.toFixed(2)}</span>
        <div class="carousel__title">${slide.name}</div>
        <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
      </div>
    `);
  }

  move() {
    this.elem.addEventListener('click', (event) => {  
      if (this.arrowLeft === event.target.closest('.carousel__arrow_left')) {
        this.currentPosition += this.inner.offsetWidth;
      } else if (this.arrowRight === event.target.closest('.carousel__arrow_right')) {
        this.currentPosition -= this.inner.offsetWidth;
      } else return;
      
      this.inner.style.transform = `translateX(${this.currentPosition}px)`;
      
      this.toggleArrowsVisibility();
    });
  }

  toggleArrowsVisibility() {
    if (this.currentPosition === 0) {
      this.arrowLeft.style.display = 'none';
    } else if (this.currentPosition === (this.slides.length - 1) * -this.inner.offsetWidth) {
      this.arrowRight.style.display = 'none';
    } else {
      this.arrowLeft.style.display = '';
      this.arrowRight.style.display = '';
    }
  }

  productAddHandler() {
    const addButtonsArr = Array.from(this.elem.getElementsByClassName('carousel__button'));

    this.inner.addEventListener('click', function(event) {
      if (!addButtonsArr.includes(event.target.closest('.carousel__button'))) return;
      
      this.dispatchEvent(new CustomEvent("product-add", {
        detail: event.target.closest('.carousel__slide').dataset.id, 
        bubbles: true
      }));
    });
  }
}
