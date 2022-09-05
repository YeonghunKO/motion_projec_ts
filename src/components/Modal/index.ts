import { $app, createElement } from '../../utils/dom';
import InfoBox from './InfoBox';

export default class Modal {
  private $container: HTMLElement = createElement({
    type: 'div',
    classes: ['modal_container'],
  });

  private $infoBox: InfoBox;
  private interalType: string;
  constructor() {
    this.$infoBox = new InfoBox();
    this.render();
  }

  get type(): string {
    return this.interalType;
  }

  set type(type: string) {
    this.interalType = type;
  }

  render() {
    this.$container.append(...this.$infoBox?.render());
    this.addEventToModal();
    $app?.appendChild(this.$container);
  }

  addEventToModal() {
    this.$container.addEventListener('click', ({ target }) => {
      // console.log(e);

      if (target instanceof Element) {
        const isCloseButton = target.closest('.close');
        const isAddButton = target.closest('.add');
        const $titleInput: HTMLInputElement = target.closest('.title_input');
        const $bodyInput: HTMLInputElement = target.closest('.body_input');
        console.log(target);

        if (isCloseButton) {
          this.close();
        }

        if (isAddButton) {
          console.log('titleInput', $titleInput);
          console.log('bodyInput', $bodyInput);

          // this.close()
        }
      }
    });
  }

  show() {
    this.$container.classList.add('show');
    this.$infoBox.show(this.type);
  }

  close() {
    this.$container.classList.remove('show');
    this.$infoBox.close(this.type);
  }
}
