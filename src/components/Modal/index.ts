import { $app, createElement, getElement } from '../../utils/dom';
import { data } from '../../utils/store/data';
import { DataFormat } from '../../types/Data';
import { v4 as uuid } from 'uuid';
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

          if (titleInputVal.length && bodyInputVal.length) {
            const newData: DataFormat = {
              id: uuid(),
              type: this.type,
              title: titleInputVal,
              body:
                this.type === 'TASK' ? bodyInputVal.split('\n') : bodyInputVal,
            };

            data.dispatch({ type: 'ADD', newData });
            console.log(data.data);
            ($titleInput as HTMLInputElement).value = '';
            ($bodyInput as HTMLInputElement).value = '';

            this.close();
          } else {
            alert('title과 body에 뭔가라도 적으라고!!!!!');
          }
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
