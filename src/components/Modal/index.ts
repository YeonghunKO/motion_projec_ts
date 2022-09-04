import { $app, createElement } from '../../utils/dom';
import InfoBox from './InfoBox';

export default class Modal {
  private $container: HTMLElement = createElement({
    type: 'div',
    classes: ['modal_container'],
  });

  private type: string;
  private $infoBox: InfoBox;

  constructor({ type }: { type: string }) {
    this.type = type;
    this.render();
    this.$infoBox = new InfoBox({ type: this.type });
  }

  render() {
    console.log(this.type);

    this.$container.appendChild(this.$infoBox?.render());
    $app?.appendChild(this.$container);
  }

  //   show() {
  //     this.$container.classList.add('show_modal');
  //   }

  //   close() {
  //     this.$container.classList.remove('show_modal');
  //   }
}
