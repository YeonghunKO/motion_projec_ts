import { $app, createElement } from '../../utils/dom';
import Button from '../Button';

export default class Nav {
  private $NavBox = createElement({ type: 'nav', classes: ['nav_box'] });
  private banner: string;
  constructor(banner: string) {
    this.banner = banner;
    this.render();
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

    this.$NavBox.append($banner, $buttonsContainer);

    $app?.appendChild(this.$NavBox);
  }
}
