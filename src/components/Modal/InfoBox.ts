import { createModalInfoBox, getElement } from '../../utils/dom';
import { ModalType } from '../../types/Modal';
import { data } from '../../utils/store/data';

import { DataFormat } from '../../types/Data';

import ShortUniqueId from 'short-unique-id';
const uuid = new ShortUniqueId({
  dictionary: 'hex', // the default
});

uuid.setDictionary([
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
]);
export default class InfoBox implements ModalType {
  private internalType: string;
  constructor() {}

  get type() {
    return this.internalType;
  }

  set type(type: string) {
    this.internalType = type;
  }

  render(): HTMLElement[] {
    const $infoBoxes = [
      createModalInfoBox({
        titleName: 'title',
        bodyName: 'url',
        type: 'IMAGE',
      }),
      createModalInfoBox({
        titleName: 'title',
        bodyName: 'url',
        type: 'VIDEO',
      }),
      createModalInfoBox({
        titleName: 'title',
        bodyName: 'body',
        type: 'NOTE',
      }),
      createModalInfoBox({
        titleName: 'title',
        bodyName: 'body',
        type: 'TASK',
      }),
    ];
    return $infoBoxes;
  }

  show(type: string) {
    getElement(`.modal_info_box.${type}`)?.classList.add('show');
  }

  close(type: string) {
    getElement('.modal_container').classList.remove('show');
    getElement(`.modal_info_box.${type}`).classList.remove('show');
  }

  sendData() {
    const $titleInput = getElement(`.modal_info_box.${this.type} .title_input`);
    const $bodyInput = getElement(`.modal_info_box.${this.type} .body_input`);
    const titleInputVal = ($titleInput as HTMLInputElement).value;
    const bodyInputVal = ($bodyInput as HTMLInputElement).value;

    if (titleInputVal.length && bodyInputVal.length) {
      const newData: DataFormat = {
        id: uuid.randomUUID(11),
        type: this.type,
        title: titleInputVal,
        body: this.type === 'TASK' ? bodyInputVal.split('\n') : bodyInputVal,
      };

      data.dispatch({ type: 'ADD', newData });
      console.log(data.data);
      ($titleInput as HTMLInputElement).value = '';
      ($bodyInput as HTMLInputElement).value = '';
      this.close(this.type);
    } else {
      alert('title??? body??? ???????????? ????????????!!!!!');
    }
  }
}
