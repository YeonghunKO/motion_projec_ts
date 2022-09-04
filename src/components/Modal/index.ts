import { $app, createElement } from '../../utils/dom';
import InfoBox from './InfoBox';

export default class Modal {
  private container: HTMLElement = createElement({
    type: 'div',
    classes: ['modal_container'],
  });

  private type: string;
  private $infoBox: HTMLElement;

  constructor({ type }: { type: string }) {
    this.type = type;
    this.render(this.type);
    this.$infoBox = new InfoBox({ type: this.type });
  }

  render(type: string) {
    $app.appendChild(this.container);
  }

  show() {
    this.container.classList.add('show_modal');
  }

  close() {
    this.container.classList.remove('show_modal');
  }
}
