import { createElement } from '../../utils/dom';

export default class Button {
  private name: string;
  constructor(name: string) {
    this.name = name;
    this.render();
  }

  render(): HTMLElement {
    const $button = createElement({ type: 'button', classes: ['nav_button'] });
    $button.setAttribute('type', 'button');
    $button.innerText = this.name;

    return $button;
  }
}
