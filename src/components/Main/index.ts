import { DataFormat } from '../../types/Data';
import { data } from '../../utils/store/data';
import {
  $app,
  getElement,
  createElement,
  createImageList,
  createVideoList,
  createNoteList,
  createTaskList,
} from '../../utils/dom';

export default class Main {
  private $internalMain: HTMLElement = getElement('.data_container');
  private $internalUl: HTMLElement = createElement({
    type: 'ul',
    classes: ['data_container_ul'],
  });
  constructor() {
    this.render();
  }

  get $main() {
    return this.$internalMain;
  }

  get $ul() {
    return this.$internalUl;
  }

  render() {
    this.$main.appendChild(this.$ul);
    // $app.appendChild(this.$main);
  }

  addData() {
    const lastData = data.getLastestData();
    const $newList = createTaskList(lastData);
    this.$ul.appendChild($newList);
  }
}
