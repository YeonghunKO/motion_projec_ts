import { $app, createElement, getElement } from '../../utils/dom';
import { data } from '../../utils/store/data';
import { DataFormat } from '../../types/Data';
import { ModalType } from '../../types/Modal';
import { v4 as uuid } from 'uuid';
import InfoBox from './InfoBox';
import Main from '../Main';

export default class Modal implements ModalType {
  private $container: HTMLElement = createElement({
    type: 'div',
    classes: ['modal_container'],
  });

  private $infoBox: InfoBox;
  private $main: Main;
  private interalType: string;
  constructor({ $main }: { $main: Main }) {
    this.$infoBox = new InfoBox();
    this.$main = $main;
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
          this.$infoBox.type = this.type;
          this.$infoBox.sendData();
          this.$main.addData();
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
