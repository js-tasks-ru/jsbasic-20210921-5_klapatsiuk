import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;

    this.elem = this.render();
    this.inner = this.elem.querySelector('.ribbon__inner');
    this.arrowLeft = this.elem.querySelector('.ribbon__arrow_left');
    this.arrowRight = this.elem.querySelector('.ribbon__arrow_right');

    for (let category of this.categories) {
      category = this.renderLink(category);
      this.inner.appendChild(category);
    }

    this.scroll();
    this.selectCategoryHandler();
  }

  render() {
    return createElement(`
    <div class="ribbon">
      <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
      <nav class="ribbon__inner"></nav>
      <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    </div>
    `);
  }

  renderLink(category) {
    return createElement(`
      <a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>
    `);
  }

  scroll() {
    this.toggleArrowsVisibility();

    this.elem.addEventListener('click', (event) => {
      if (this.arrowLeft == event.target.closest('.ribbon__arrow_left')) {
        this.inner.scrollBy(-350, 0);
        console.log(this.inner.scrollLeft);
      } else if (this.arrowRight == event.target.closest('.ribbon__arrow_right')) {
        this.inner.scrollBy(350, 0);
        console.log(this.inner.scrollLeft);
      } else return;
      
      this.toggleArrowsVisibility();
    });
  }

  toggleArrowsVisibility() {

    this.inner.scrollRight = this.inner.scrollWidth - this.inner.scrollLeft - this.inner.clientWidth;

    if (this.inner.scrollLeft === 0) {
      this.arrowLeft.classList.toggle('ribbon__arrow_visible');
    } else if ((this.inner.scrollRight) < 1) {
      this.arrowRight.classList.toggle('ribbon__arrow_visible');
    }
  }

  selectCategoryHandler() {
    this.inner.addEventListener('click', (event) => {
      const ribbonItems = Array.from(this.elem.getElementsByClassName('ribbon__item'));
      if (!ribbonItems.includes(event.target)) return;
      
      event.preventDefault();

      ribbonItems.forEach(item => {
        item.classList.remove('ribbon__item_active');
      });
      event.target.classList.add('ribbon__item_active');
      
      this.elem.dispatchEvent(new CustomEvent('ribbon-select', {
        detail: event.target.dataset.id,
        bubbles: true
      }));
    });
  }
}
