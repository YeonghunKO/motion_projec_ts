import { CreateElement, CreateModalInfoBox } from '../types/Dom';

const createElement = ({ type, classes, id }: CreateElement): HTMLElement => {
  const element = document.createElement(type);
  if (classes) {
    classes.forEach(className => element.classList.add(className));
  }

  if (id) {
    element.setAttribute('id', id);
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

const createMain = () => {
  const $main = createElement({ type: 'section', classes: ['data_container'] });
  const $ul = createElement({ type: 'ul', classes: ['data_container_ul'] });
  $main.appendChild($ul);

  return { $main, $ul };
};

const $app = getElement('#app');

export { createElement, getElement, $app, createModalInfoBox, createMain };
