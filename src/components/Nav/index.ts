import { $app, createElement } from '../../utils/dom';
import Button from '../Button';
import Modal from '../Modal';

export default class Nav {
  private $NavBox = createElement({ type: 'nav', classes: ['nav_box'] });
  private banner: string;
  private $modal: Modal;
  constructor({ banner, $modal }: { banner: string; $modal: Modal }) {
    this.banner = banner;
    this.render();
    this.$modal = $modal;
  }

  render() {
    const $banner = createElement({ type: 'div', classes: ['nav_banner'] });
    $banner.innerText = this.banner;

    const $buttonsContainer = createElement({
      type: 'div',
      classes: ['nav_button_container'],
    });

    const $buttons = ['IMAGE', 'VIDEO', 'NOTE', 'TASK'].map(button =>
      new Button(button).render()
    );

    $buttonsContainer.append(...$buttons);
    this.addEventToButtons($buttonsContainer);

    this.$NavBox.append($banner, $buttonsContainer);

    $app?.appendChild(this.$NavBox);
  }

  addEventToButtons($buttonsContainer: HTMLElement) {
    $buttonsContainer.addEventListener('click', ({ target }) => {
      // (target as Element).textContent
      if (target instanceof Element) {
        const { textContent } = target;
        this.$modal.type = textContent;
        this.$modal.show();
      }
    });
  }
}
