import { createModalInfoBox } from '../../utils/dom';

export default class InfoBox {
  private type: string;
  constructor() {}

  render(): HTMLElement[] {
    const $infoBoxes = [
      createModalInfoBox({
        titleName: 'title',
        bodyName: 'url',
        type: 'IMAGE',
      }),
      // createModalInfoBox({
      //   titleName: 'title',
      //   bodyName: 'url',
      //   type: 'VIDEO',
      // }),
      // createModalInfoBox({
      //   titleName: 'title',
      //   bodyName: 'body',
      //   type: 'NOTE',
      // }),
      // createModalInfoBox({
      //   titleName: 'title',
      //   bodyName: 'body',
      //   type: 'TASK',
      // }),
    ];
    return $infoBoxes;
  }
}
