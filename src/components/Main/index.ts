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
    this.addEventToLists();
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
    let $newList: HTMLLIElement;
    switch (lastData.type) {
      case 'IMAGE':
        $newList = createImageList(lastData);
        break;
      case 'VIDEO':
        $newList = createVideoList(lastData);
        break;
      case 'NOTE':
        $newList = createNoteList(lastData);
        break;
      case 'TASK':
        $newList = createTaskList(lastData);

        break;

      default:
        break;
    }
    this.$ul.appendChild($newList);
  }

  addEventToLists() {
    const $internalUl = getElement('.data_container_ul');
    $internalUl.addEventListener('click', function (e) {
      const { classList } = e.target as HTMLElement;
      const $li = (e.target as HTMLElement).closest('li');

      if (!$li) {
        return;
      }

      if (classList.contains('fa-trash-alt')) {
        $li.remove();
        data.dispatch({ type: 'REMOVE', id: $li.id });
        console.log(data.data);
      }
    });
  }
}
