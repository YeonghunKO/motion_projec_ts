import { createModalBox } from '../../utils/dom';

export default class InfoBox {
  private type: string;
  constructor({ type }: { type: string }) {
    this.type = type;
  }

  render(): HTMLElement | null {
    console.log(this.type);

    switch (this.type) {
      case 'VIDEO':
      case 'IMAGE':
        return createModalBox({ titleName: 'title', bodyName: 'url' });
      case 'NOTE':
      case 'TASK':
        return createModalBox({ titleName: 'title', bodyName: 'body' });

      default:
        console.log('invalid type');

        break;
    }
  }
}
