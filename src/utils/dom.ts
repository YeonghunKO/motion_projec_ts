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

export { createElement };
