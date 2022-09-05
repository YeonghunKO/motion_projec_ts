import { $app, createElement } from '../../utils/dom';
import InfoBox from './InfoBox';

export default class Modal {
  private $container: HTMLElement = createElement({
    type: 'div',
    classes: ['modal_container'],
  });

  private type: string;
  private $infoBox: InfoBox;

  constructor() {
    this.$infoBox = new InfoBox();
    this.render();
  }

  render() {
    this.$container.append(...this.$infoBox?.render());
    $app?.appendChild(this.$container);
  }

  //   show() {
  //     this.$container.classList.add('show_modal');
  //   }

  //   close() {
  //     this.$container.classList.remove('show_modal');
  //   }
}
