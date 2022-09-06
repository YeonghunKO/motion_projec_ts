let dragSrcEl: HTMLElement;
const DRAG_DATA_NAME = 'originalContent';

export function addEventDragAndDrop(element: HTMLElement) {
  element.addEventListener('dragstart', dragStart);
  element.addEventListener('dragenter', dragEnter);
  element.addEventListener('dragover', dragOver);
  element.addEventListener('dragleave', dragLeave);
  element.addEventListener('drop', dragDrop);
  element.addEventListener('dragend', dragEnd);
}

function dragStart(e: DragEvent) {
  this.style.opacity = 0.4;
  dragSrcEl = this;
  const dataObj = { content: this.innerHTML, id: this.id };
  e.dataTransfer.setData(DRAG_DATA_NAME, JSON.stringify(dataObj));
}

function dragEnter() {
  this.classList.add('over');
}

function dragOver(e: DragEvent) {
  e.preventDefault();
}

function dragLeave() {
  this.classList.remove('over');
}

function dragDrop(e: DragEvent) {
  if (dragSrcEl !== this) {
    const { content, id } = JSON.parse(e.dataTransfer.getData(DRAG_DATA_NAME));
    dragSrcEl.innerHTML = this.innerHTML;
    dragSrcEl.id = this.id;
    this.innerHTML = content;
    this.id = id;
  }
  this.classList.remove('over');
}

function dragEnd() {
  this.style.opacity = 1;
}
