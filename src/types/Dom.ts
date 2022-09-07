declare global {
  interface NodeList {
    remove(): any;
  }
  interface HTMLCollection {
    remove(): any;
  }
}

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

type CreateElement = {
  type: string;
  classes?: string[];
  id?: string;
  attribute?: { id: string; val: string };
};

type CreateModalInfoBox = {
  titleName: string;
  bodyName: string;
  type: string;
};

export { CreateElement, CreateModalInfoBox };
