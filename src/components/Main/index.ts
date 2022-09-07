import { DataFormat } from '../../types/Data';
import { data } from '../../utils/store/data';
import { createMain, $app } from '../../utils/dom';

export default class Main {
  private $internalMain: HTMLElement;
  private $internalUl: HTMLElement;
  constructor() {
    const { $main, $ul } = createMain();
    this.$internalMain = $main;
    this.$internalUl = $ul;
    this.render();
  }

  get $main() {
    return this.$internalMain;
  }

  get $ul() {
    return this.$internalUl;
  }

  render() {
    $app.appendChild(this.$main);
  }

  addData(newData: DataFormat) {
    // data.data
  }
}
