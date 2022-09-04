type CreateElement = {
  type: string;
  classes?: string[];
  id?: string;
};

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

const createModalBox = ({
  titleName,
  bodyName,
}: {
  titleName: string;
  bodyName: string;
}) => {
  const box = createElement({ type: 'div', classes: ['modal_info_box'] });
  box.innerHTML = `
  <button type='button' class='close_button'>X</button>
  <div>
   <label>${titleName}</label>
   <input class='title_input'/>
   <label>${bodyName}</label>
   <input class='body_input'/>
   </div>
   <
   <button type='button' class='add_button'>ADD</button>
   `;
  return box;
};

const $app = getElement('#app');

export { createElement, getElement, $app, createModalBox };
