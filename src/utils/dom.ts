declare global {
  interface NodeList {
    remove(): any;
  }
  interface HTMLCollection {
    remove(): any;
  }
}

type CreateElement = {
  type: string;
  classes?: string[];
  id?: string;
};

Element.prototype.remove = function () {
  this.parentElement.removeChild(this);
};

NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
  for (var i = this.length - 1; i >= 0; i--) {
    if (this[i] && this[i].parentElement) {
      this[i].parentElement.removeChild(this[i]);
    }
  }
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

const createModalInfoBox = ({
  titleName,
  bodyName,
  type,
}: {
  titleName: string;
  bodyName: string;
  type: string;
}) => {
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
   <input type='text' placeholder='입력을 하시오' value='' class='body_input'/>
   </div>
   <button type='button' class='modal_info_button add'>ADD</button>
   `;
  return box;
};

const $app = getElement('#app');

export { createElement, getElement, $app, createModalInfoBox };
