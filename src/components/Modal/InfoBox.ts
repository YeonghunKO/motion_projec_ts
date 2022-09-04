import { createModalBox } from '../../utils/dom';

export default class InfoBox {
  constructor({ type }: { type: string }) {
    this.render(type);
  }

  render(type: string) {
    switch (type) {
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
