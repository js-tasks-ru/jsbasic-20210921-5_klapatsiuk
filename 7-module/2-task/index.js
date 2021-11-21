import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = this.render();
    this.closeButton = this.elem.querySelector('.modal__close');
    this.escKeyHandler = (event) => {
      if (event.key == 'Escape') this.close();
    };
  }
  
  open() {
    document.body.appendChild(this.elem);
    document.body.classList.add('is-modal-open');
    document.addEventListener('keydown', this.escKeyHandler);
    this.closeButton.addEventListener('click', () => {
      this.close();
    });
  }
  
  close() {
    this.elem.innerHTML = '';
    document.body.classList.remove('is-modal-open');
    document.removeEventListener('keydown', this.escKeyHandler);
  }

  setTitle(title) {
    this.elem.querySelector('.modal__title').innerHTML = title;
  }

  setBody(body) {
    this.elem.querySelector('.modal__body').appendChild(body);
  }

  render() {
    return createElement(`
    <div class="container">
      <div class="modal">

      <div class="modal__overlay"></div>

      <div class="modal__inner">
        <div class="modal__header">
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>

          <h3 class="modal__title"></h3>
        </div>

        <div class="modal__body"></div>
      </div>

    </div>
    </div>
    `);
  }
}
