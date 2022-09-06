import { $app, createElement, getElement } from '../../utils/dom';
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
        // const $titleInput = getElement('.title_input');
        // console.log(target);

        if (isCloseButton) {
          this.close();
        }

        if (isAddButton) {
          const $titleInput = getElement(
            `.modal_info_box.${this.type} .title_input`
          );
          const $bodyInput = getElement(
            `.modal_info_box.${this.type} .body_input`
          );
          const titleInputVal = ($titleInput as HTMLInputElement).value;
          const bodyInputVal = ($bodyInput as HTMLInputElement).value;

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
