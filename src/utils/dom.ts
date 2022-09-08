import { CreateElement, CreateModalInfoBox } from '../types/Dom';
import { DataFormat } from '../types/Data';
import { addEventDragAndDrop } from './addDragAndDrop';

const createElement = ({ type, classes, id, attribute }: CreateElement) => {
  const element = document.createElement(type);
  if (classes) {
    classes.forEach(className => element.classList.add(className));
  }

  if (id) {
    element.setAttribute('id', id);
  }

  if (attribute) {
    element.setAttribute(attribute.id, attribute.val);
  }

  return element;
};

const getElement = (selector: string): HTMLElement | null => {
  return document.querySelector(selector);
};

const createModalInfoBox = ({
  titleName,
  bodyName,
  type,
}: CreateModalInfoBox) => {
  const box = createElement({
    type: 'div',
    classes: ['modal_info_box', type],
  });
  box.innerHTML = `
  <button type='button' class='modal_info_button close'>X</button>
  <div>
   <label>${titleName}</label>
   <input type='text' placeholder='입력을 하시오' value='' class='title_input'/>
   <label>${bodyName}</label>
   ${
     type === 'TASK'
       ? "<textarea class='body_input' placeholder='테스크를 입력할때마다 엔터를 누르시오'></textarea>"
       : "<input type='text' placeholder='입력을 하시오' class='body_input'/>"
   }
   </div>
   <button type='button' class='modal_info_button add'>ADD</button>
   `;
  return box;
};

const listHeaderTemplate = (title: string) => {
  return `
  <header class='list_header'>
  <h2>${title}</h2>
  <i class="far fa-trash-alt"></i>
  </header>
  `;
};

const createDraggableList = (id: string, type: string) => {
  const $li = createElement({
    type: 'li',
    id,
    classes: [`${type}`],
    attribute: { id: 'draggable', val: 'true' },
  });
  addEventDragAndDrop($li);
  return $li as HTMLLIElement;
};

const createImageList = (newData: DataFormat): HTMLLIElement => {
  const { id, type, title, body } = newData;
  const $li = createDraggableList(id, type);
  $li.innerHTML = `
    ${listHeaderTemplate(title)}
    <img src='${body}' alt='${title}'/>
   `;

  return $li;
};
const createVideoList = (newData: DataFormat) => {
  const { id, type, title, body } = newData;
  const $li = createDraggableList(id, type);

  $li.innerHTML = `
    ${listHeaderTemplate(title)}
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${
      (body as string).split('=')[1]
    }" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   `;

  return $li;
};

const createNoteList = (newData: DataFormat) => {
  const { id, type, title, body } = newData;
  const $li = createDraggableList(id, type);
  $li.innerHTML = `
     ${listHeaderTemplate(title)}
     <h3>${body}</h3>
   `;
  return $li;
};

const createTaskList = (newData: DataFormat): HTMLLIElement => {
  const { id, type, title, body } = newData;
  const $li = createDraggableList(id, type);
  $li.innerHTML = `
  
  ${listHeaderTemplate(title)}
  ${(body as string[]).map((task: string) => `<li>${task}</li>`).join('')}
  `;

  return $li;
};

const $app = getElement('#app');

export {
  createElement,
  getElement,
  $app,
  createModalInfoBox,
  createImageList,
  createVideoList,
  createNoteList,
  createTaskList,
};
