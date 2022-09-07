import { CreateElement, CreateModalInfoBox } from '../types/Dom';
import { DataFormat } from '../types/Data';
import { addEventDragAndDrop } from './addDragAndDrop';
import { data } from './store/data';

const createElement = ({
  type,
  classes,
  id,
  attribute,
}: CreateElement): HTMLElement => {
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

const listHeaderTemplate = (title: string, id: string) => {
  const $header = createElement({ type: 'header', classes: ['list_header'] });
  const $button = createElement({
    type: 'button',
    classes: ['list__close_button'],
  });
  const $h2 = createElement({ type: 'h2' });
  $h2.innerHTML = title;
  $button.innerText = 'X';
  $button.addEventListener('click', function () {
    this.parentElement.parentElement.remove();
    data.dispatch({ type: 'REMOVE', id });
    console.log(data.data);
  });

  $header.append($h2, $button);
  return $header;
};

const createImageList = (newData: DataFormat) => {
  const { id, type, title, body } = newData;
  const $li = createElement({ type: 'li', id, classes: [`${type}`] });
  $li.innerHTML = `
    ${listHeaderTemplate(title, id)}
    <img src='${body}' alt='${title}'/>
   `;

  return $li;
};
const createVideoList = (newData: DataFormat) => {
  const { id, type, title, body } = newData;
  const $li = createElement({ type: 'li', id, classes: [`${type}`] });
  $li.appendChild(listHeaderTemplate(title, id));
  $li.innerHTML = `
    <iframe src="${body}"></iframe>
   `;

  return $li;
};

const createNoteList = (newData: DataFormat) => {
  const { id, type, title, body } = newData;
  const $li = createElement({ type: 'li', id, classes: [`${type}`] });
  $li.innerHTML = `
     ${listHeaderTemplate(title, id)}
     <h3>${body}</h3>
   `;
  return $li;
};

const createTaskList = (newData: DataFormat) => {
  const { id, type, title, body } = newData;
  const $li = createElement({
    type: 'li',
    id,
    classes: [`${type}`],
    attribute: { id: 'draggable', val: 'true' },
  });
  addEventDragAndDrop($li);
  const $ul = createElement({ type: 'ul' });
  $li.appendChild(listHeaderTemplate(title, id));
  $ul.innerHTML = `
  ${(body as string[]).map((task: string) => `<li>${task}</li>`).join('')}
   `;
  $li.appendChild($ul);
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
