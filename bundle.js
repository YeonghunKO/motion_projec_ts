/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss");







var options = {};
options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());
var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);

/***/ }),

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Main */ "./src/components/Main/index.ts");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Nav */ "./src/components/Nav/index.ts");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Modal */ "./src/components/Modal/index.ts");



class App {
  constructor() {
    this.$main = new _components_Main__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.$modal = new _components_Modal__WEBPACK_IMPORTED_MODULE_2__["default"]({
      $main: this.$main
    });
    this.$nav = new _components_Nav__WEBPACK_IMPORTED_MODULE_1__["default"]({
      banner: 'Motion',
      $modal: this.$modal
    });
  }

}

/***/ }),

/***/ "./src/components/Button/index.ts":
/*!****************************************!*\
  !*** ./src/components/Button/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.ts");

class Button {
  constructor(name) {
    this.name = name;
    this.render();
  }

  render() {
    const $button = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)({
      type: 'button',
      classes: ['nav_button']
    });
    $button.setAttribute('type', 'button');
    $button.innerText = this.name;
    return $button;
  }

}

/***/ }),

/***/ "./src/components/Main/index.ts":
/*!**************************************!*\
  !*** ./src/components/Main/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var _utils_store_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/store/data */ "./src/utils/store/data.ts");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.ts");


class Main {
  constructor() {
    this.$internalMain = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getElement)('.data_container');
    this.$internalUl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)({
      type: 'ul',
      classes: ['data_container_ul']
    });
    this.render();
    this.addEventToLists();
  }

  get $main() {
    return this.$internalMain;
  }

  get $ul() {
    return this.$internalUl;
  }

  render() {
    this.$main.appendChild(this.$ul);
  }

  addData() {
    const lastData = _utils_store_data__WEBPACK_IMPORTED_MODULE_0__.data.getLastestData();
    let $newList;

    switch (lastData.type) {
      case 'IMAGE':
        $newList = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.createImageList)(lastData);
        break;

      case 'VIDEO':
        $newList = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.createVideoList)(lastData);
        break;

      case 'NOTE':
        $newList = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.createNoteList)(lastData);
        break;

      case 'TASK':
        $newList = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.createTaskList)(lastData);
        break;

      default:
        break;
    }

    this.$ul.appendChild($newList);
  }

  addEventToLists() {
    const $internalUl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getElement)('.data_container_ul');
    $internalUl.addEventListener('click', function (e) {
      const {
        classList
      } = e.target;
      const $li = e.target.closest('li');

      if (!$li) {
        return;
      }

      if (classList.contains('fa-trash-alt')) {
        $li.remove();
        _utils_store_data__WEBPACK_IMPORTED_MODULE_0__.data.dispatch({
          type: 'REMOVE',
          id: $li.id
        });
        console.log(_utils_store_data__WEBPACK_IMPORTED_MODULE_0__.data.data);
      }
    });
  }

}

/***/ }),

/***/ "./src/components/Modal/InfoBox.ts":
/*!*****************************************!*\
  !*** ./src/components/Modal/InfoBox.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfoBox)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.ts");
/* harmony import */ var _utils_store_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/store/data */ "./src/utils/store/data.ts");
/* harmony import */ var short_unique_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! short-unique-id */ "./node_modules/short-unique-id/dist/short-unique-id.js");
/* harmony import */ var short_unique_id__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(short_unique_id__WEBPACK_IMPORTED_MODULE_2__);



const uuid = new (short_unique_id__WEBPACK_IMPORTED_MODULE_2___default())({
  dictionary: 'hex' // the default

});
uuid.setDictionary(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x']);
class InfoBox {
  constructor() {}

  get type() {
    return this.internalType;
  }

  set type(type) {
    this.internalType = type;
  }

  render() {
    const $infoBoxes = [(0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.createModalInfoBox)({
      titleName: 'title',
      bodyName: 'url',
      type: 'IMAGE'
    }), (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.createModalInfoBox)({
      titleName: 'title',
      bodyName: 'url',
      type: 'VIDEO'
    }), (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.createModalInfoBox)({
      titleName: 'title',
      bodyName: 'body',
      type: 'NOTE'
    }), (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.createModalInfoBox)({
      titleName: 'title',
      bodyName: 'body',
      type: 'TASK'
    })];
    return $infoBoxes;
  }

  show(type) {
    var _a;

    (_a = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getElement)(`.modal_info_box.${type}`)) === null || _a === void 0 ? void 0 : _a.classList.add('show');
  }

  close(type) {
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getElement)('.modal_container').classList.remove('show');
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getElement)(`.modal_info_box.${type}`).classList.remove('show');
  }

  sendData() {
    const $titleInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getElement)(`.modal_info_box.${this.type} .title_input`);
    const $bodyInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getElement)(`.modal_info_box.${this.type} .body_input`);
    const titleInputVal = $titleInput.value;
    const bodyInputVal = $bodyInput.value;

    if (titleInputVal.length && bodyInputVal.length) {
      const newData = {
        id: uuid.randomUUID(11),
        type: this.type,
        title: titleInputVal,
        body: this.type === 'TASK' ? bodyInputVal.split('\n') : bodyInputVal
      };
      _utils_store_data__WEBPACK_IMPORTED_MODULE_1__.data.dispatch({
        type: 'ADD',
        newData
      });
      console.log(_utils_store_data__WEBPACK_IMPORTED_MODULE_1__.data.data);
      $titleInput.value = '';
      $bodyInput.value = '';
      this.close(this.type);
    } else {
      alert('title과 body에 뭔가라도 적으라고!!!!!');
    }
  }

}

/***/ }),

/***/ "./src/components/Modal/index.ts":
/*!***************************************!*\
  !*** ./src/components/Modal/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.ts");
/* harmony import */ var _InfoBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoBox */ "./src/components/Modal/InfoBox.ts");


class Modal {
  constructor({
    $main
  }) {
    this.$container = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)({
      type: 'div',
      classes: ['modal_container']
    });
    this.$infoBox = new _InfoBox__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.$main = $main;
    this.render();
  }

  get type() {
    return this.interalType;
  }

  set type(type) {
    this.interalType = type;
  }

  render() {
    var _a;

    this.$container.append(...((_a = this.$infoBox) === null || _a === void 0 ? void 0 : _a.render()));
    this.addEventToModal();
    _utils_dom__WEBPACK_IMPORTED_MODULE_0__.$app === null || _utils_dom__WEBPACK_IMPORTED_MODULE_0__.$app === void 0 ? void 0 : _utils_dom__WEBPACK_IMPORTED_MODULE_0__.$app.appendChild(this.$container);
  }

  addEventToModal() {
    this.$container.addEventListener('click', ({
      target
    }) => {
      // console.log(e);
      if (target instanceof Element) {
        const isCloseButton = target.closest('.close');
        const isAddButton = target.closest('.add');

        if (isCloseButton) {
          this.close();
        }

        if (isAddButton) {
          this.$infoBox.type = this.type;
          this.$infoBox.sendData();
          this.$main.addData();
        }
      }
    });
  }

  show() {
    if (this.type) {
      this.$container.classList.add('show');
      this.$infoBox.show(this.type);
    }
  }

  close() {
    this.$container.classList.remove('show');
    this.$infoBox.close(this.type);
  }

}

/***/ }),

/***/ "./src/components/Nav/index.ts":
/*!*************************************!*\
  !*** ./src/components/Nav/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Nav)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.ts");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button */ "./src/components/Button/index.ts");


class Nav {
  constructor({
    banner,
    $modal
  }) {
    this.$NavBox = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getElement)('.nav_box');
    this.banner = banner;
    this.render();
    this.$modal = $modal;
  }

  render() {
    const $banner = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)({
      type: 'div',
      classes: ['nav_banner']
    });
    $banner.innerText = this.banner;
    const $buttonsContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)({
      type: 'div',
      classes: ['nav_button_container']
    });
    const $buttons = ['IMAGE', 'VIDEO', 'NOTE', 'TASK'].map(button => new _Button__WEBPACK_IMPORTED_MODULE_1__["default"](button).render());
    $buttonsContainer.append(...$buttons);
    this.addEventToButtons($buttonsContainer);
    this.$NavBox.append($banner, $buttonsContainer);
  }

  addEventToButtons($buttonsContainer) {
    $buttonsContainer.addEventListener('click', ({
      target
    }) => {
      // (target as Element).textContent
      if (target instanceof Element && target.classList.contains('nav_button')) {
        const {
          textContent
        } = target;
        this.$modal.type = textContent;
        this.$modal.show();
      }
    });
  }

}

/***/ }),

/***/ "./src/utils/addDragAndDrop.ts":
/*!*************************************!*\
  !*** ./src/utils/addDragAndDrop.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEventDragAndDrop": () => (/* binding */ addEventDragAndDrop)
/* harmony export */ });
let dragSrcEl;
const DRAG_DATA_NAME = 'originalContent';
function addEventDragAndDrop(element) {
  element.addEventListener('dragstart', dragStart);
  element.addEventListener('dragenter', dragEnter);
  element.addEventListener('dragover', dragOver);
  element.addEventListener('dragleave', dragLeave);
  element.addEventListener('drop', dragDrop);
  element.addEventListener('dragend', dragEnd);
}

function dragStart(e) {
  this.style.opacity = 0.4;
  dragSrcEl = this;
  const dataObj = {
    content: this.innerHTML,
    id: this.id
  };
  e.dataTransfer.setData(DRAG_DATA_NAME, JSON.stringify(dataObj));
}

function dragEnter() {
  this.classList.add('over');
}

function dragOver(e) {
  e.preventDefault();
}

function dragLeave() {
  this.classList.remove('over');
}

function dragDrop(e) {
  if (dragSrcEl !== this) {
    const {
      content,
      id
    } = JSON.parse(e.dataTransfer.getData(DRAG_DATA_NAME));
    dragSrcEl.innerHTML = this.innerHTML;
    dragSrcEl.id = this.id;
    this.innerHTML = content;
    this.id = id;
  }

  dragSrcEl.style.opacity = '1';
  this.classList.remove('over');
}

function dragEnd() {
  this.style.opacity = 1;
  console.log('end this', this);
}

/***/ }),

/***/ "./src/utils/dom.ts":
/*!**************************!*\
  !*** ./src/utils/dom.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$app": () => (/* binding */ $app),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createImageList": () => (/* binding */ createImageList),
/* harmony export */   "createModalInfoBox": () => (/* binding */ createModalInfoBox),
/* harmony export */   "createNoteList": () => (/* binding */ createNoteList),
/* harmony export */   "createTaskList": () => (/* binding */ createTaskList),
/* harmony export */   "createVideoList": () => (/* binding */ createVideoList),
/* harmony export */   "getElement": () => (/* binding */ getElement)
/* harmony export */ });
/* harmony import */ var _addDragAndDrop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addDragAndDrop */ "./src/utils/addDragAndDrop.ts");


const createElement = ({
  type,
  classes,
  id,
  attribute
}) => {
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

const getElement = selector => {
  return document.querySelector(selector);
};

const createModalInfoBox = ({
  titleName,
  bodyName,
  type
}) => {
  const box = createElement({
    type: 'div',
    classes: ['modal_info_box', type]
  });
  box.innerHTML = `
  <button type='button' class='modal_info_button close'>X</button>
  <div>
   <label>${titleName}</label>
   <input type='text' placeholder='입력을 하시오' value='' class='title_input'/>
   <label>${bodyName}</label>
   ${type === 'TASK' ? "<textarea class='body_input' placeholder='테스크를 입력할때마다 엔터를 누르시오'></textarea>" : "<input type='text' placeholder='입력을 하시오' class='body_input'/>"}
   </div>
   <button type='button' class='modal_info_button add'>ADD</button>
   `;
  return box;
};

const listHeaderTemplate = title => {
  return `
  <header class='list_header'>
  <h2>${title}</h2>
  <i class="far fa-trash-alt"></i>
  </header>
  `;
};

const createDraggableList = (id, type) => {
  const $li = createElement({
    type: 'li',
    id,
    classes: [`${type}`],
    attribute: {
      id: 'draggable',
      val: 'true'
    }
  });
  (0,_addDragAndDrop__WEBPACK_IMPORTED_MODULE_0__.addEventDragAndDrop)($li);
  return $li;
};

const createImageList = newData => {
  const {
    id,
    type,
    title,
    body
  } = newData;
  const $li = createDraggableList(id, type);
  $li.innerHTML = `
    ${listHeaderTemplate(title)}
    <img src='${body}' alt='${title}'/>
   `;
  return $li;
};

const createVideoList = newData => {
  const {
    id,
    type,
    title,
    body
  } = newData;
  const $li = createDraggableList(id, type);
  $li.innerHTML = `
    ${listHeaderTemplate(title)}
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${body.split('=')[1]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   `;
  return $li;
};

const createNoteList = newData => {
  const {
    id,
    type,
    title,
    body
  } = newData;
  const $li = createDraggableList(id, type);
  $li.innerHTML = `
     ${listHeaderTemplate(title)}
     <h3>${body}</h3>
   `;
  return $li;
};

const createTaskList = newData => {
  const {
    id,
    type,
    title,
    body
  } = newData;
  const $li = createDraggableList(id, type);
  $li.innerHTML = `
  
  ${listHeaderTemplate(title)}
  ${body.map(task => `<li>${task}</li>`).join('')}
  `;
  return $li;
};

const $app = getElement('#app');


/***/ }),

/***/ "./src/utils/store/data.ts":
/*!*********************************!*\
  !*** ./src/utils/store/data.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
class Data {
  constructor(dataArray = []) {
    this.dataArray = dataArray;
  }

  get data() {
    return this.dataArray;
  }

  set data(updatedArray) {
    this.dataArray = updatedArray;
  }

  getLastestData() {
    return this.data[this.data.length - 1];
  }

  dispatch(action) {
    switch (action.type) {
      case 'ADD':
        const addedArray = [...this.data, action.newData];
        this.data = addedArray;
        break;

      case 'REMOVE':
        const filteredArray = this.data.filter(data => data.id !== action.id);
        this.data = filteredArray;
        break;

      default:
        throw new Error('invalid action type');
    }
  }

}

const data = new Data();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/motion-background.png */ "./src/img/motion-background.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody,\ndiv,\nspan,\nobject,\niframe,\nfigure,\np,\nblockquote,\npre,\na,\ncode,\nem,\nimg,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nb,\nu,\ni,\nol,\nul,\nfieldset,\nform,\nlabel,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\nmain,\ncanvas,\nembed,\nfooter,\nheader,\nnav,\nsection,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  text-size-adjust: none;\n}\n\nfooter,\nheader,\nnav,\nsection,\nmain {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput {\n  -webkit-appearance: none;\n  border-radius: 0;\n}\n\n.nav_box .nav_button_container .nav_button {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  cursor: pointer;\n  margin: 0.1rem;\n  border-radius: 7px;\n  text-decoration: none;\n  text-transform: uppercase;\n  background-color: #f73;\n  color: white;\n  font-weight: 500;\n  font-size: 1.5rem;\n  padding: 5px 10px;\n  opacity: 0.6;\n  transition: 0.3s;\n}\n.nav_box .nav_button_container .nav_button:hover {\n  opacity: 1;\n}\n\n.nav_box {\n  width: 100%;\n  height: 30%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.nav_box .nav_banner {\n  color: #ff4734;\n  font-size: 7rem;\n}\n.nav_box .nav_button_container {\n  margin-top: 1rem;\n}\n.modal_container {\n  visibility: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: rgba(255, 255, 255, 0.915);\n  background: black;\n  width: 100vw;\n  height: 100vh;\n  opacity: 0;\n  transition: all 0.5s;\n  z-index: 10;\n}\n.modal_container.show {\n  opacity: 1;\n  visibility: visible;\n}\n.modal_container .modal_info_box {\n  display: none;\n  position: absolute;\n  transform: translate3d(60%, 70%, 0);\n  background: #323232;\n  height: 45%;\n  width: 45%;\n}\n.modal_container .modal_info_box.show {\n  display: block;\n}\n.modal_container .modal_info_box .modal_info_button {\n  position: absolute;\n  cursor: pointer;\n  right: 0;\n  outline: none;\n  border: none;\n  background-color: #ff4734;\n  color: rgba(255, 255, 255, 0.915);\n}\n.modal_container .modal_info_box .modal_info_button.close {\n  top: 5px;\n  right: 5px;\n}\n.modal_container .modal_info_box .modal_info_button.add {\n  bottom: 5px;\n  right: 5px;\n}\n.modal_container .modal_info_box div {\n  display: flex;\n  padding: 5px;\n  flex-direction: column;\n  width: 100%;\n}\n.modal_container .modal_info_box div input {\n  margin-bottom: 1rem;\n}\n.modal_container .modal_info_box div label {\n  margin-top: 2rem;\n  margin-bottom: 0.5rem;\n}\n\n.data_container {\n  margin-top: 1rem;\n  height: 70%;\n  width: 90%;\n  background-color: #676666;\n  overflow-y: scroll;\n  border-radius: 1rem;\n  margin: 0 auto;\n  transition: all 0.3s;\n}\n.data_container ul {\n  padding: 2rem;\n}\n.data_container li {\n  background-color: rgba(255, 255, 255, 0.915);\n  padding: 1rem;\n  width: 70%;\n  height: 80%;\n  margin: 0 auto;\n  cursor: pointer;\n  margin-bottom: 1rem;\n  border-radius: 1rem;\n  transition: all 0.3s;\n  box-shadow: 15px 13px 20px -12px rgba(0, 0, 0, 0.75);\n}\n.data_container li header {\n  display: flex;\n  justify-content: space-between;\n}\n.data_container li .fa-trash-alt {\n  color: #ff4734;\n}\n.data_container li img,\n.data_container li iframe {\n  width: 100%;\n}\n.data_container li.over {\n  transform: scale(1.1, 1.1);\n}\n\nbody {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  height: 100vh;\n  overflow-y: hidden;\n}\n\n#app {\n  height: 100%;\n}", "",{"version":3,"sources":["webpack://./src/scss/_reset.scss","webpack://./src/scss/main.scss","webpack://./src/scss/_extends.scss","webpack://./src/scss/_variables.scss","webpack://./src/scss/_Nav.scss","webpack://./src/scss/_Modal.scss","webpack://./src/scss/_Main.scss"],"names":[],"mappings":"AAAA;;;EAGE,sBAAA;ACCF;;ADEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EA4CE,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;EACA,kCAAA;EACA,mCAAA;EACA,sBAAA;ACCF;;ADEA;;;;;EAKE,cAAA;ACCF;;ADEA;EACE,cAAA;ACCF;;ADEA;;EAEE,gBAAA;ACCF;;ADEA;;EAEE,YAAA;ACCF;;ADEA;;;;EAIE,WAAA;EACA,aAAA;ACCF;;ADEA;EACE,yBAAA;EACA,iBAAA;ACCF;;ADEA;EACE,wBAAA;EACA,gBAAA;ACCF;;ACjGA;EACE,qDAAA;EACA,eAAA;EACA,cAAA;EACA,kBAAA;EACA,qBAAA;EACA,yBAAA;EACA,sBCTO;EDUP,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,YAAA;EACA,gBAAA;ADoGF;ACnGE;EACE,UAAA;ADqGJ;;AGnHA;EACE,WAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AHsHF;AGrHE;EACE,cDTE;ECUF,eAAA;AHuHJ;AGpHE;EACE,gBAAA;AHsHJ;AInIA;EACE,kBAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,iCFHW;EEIX,iBAAA;EACA,YAAA;EACA,aAAA;EACA,UAAA;EACA,oBAAA;EACA,WAAA;AJqIF;AInIE;EACE,UAAA;EACA,mBAAA;AJqIJ;AIlIE;EACE,aAAA;EACA,kBAAA;EACA,mCAAA;EACA,mBFtBS;EEuBT,WAAA;EACA,UAAA;AJoIJ;AIlII;EACE,cAAA;AJoIN;AIjII;EACE,kBAAA;EACA,eAAA;EACA,QAAA;EACA,aAAA;EACA,YAAA;EACA,yBFrCA;EEsCA,iCFnCO;AFsKb;AIjIM;EACE,QAAA;EACA,UAAA;AJmIR;AIhIM;EACE,WAAA;EACA,UAAA;AJkIR;AI9HI;EACE,aAAA;EACA,YAAA;EACA,sBAAA;EACA,WAAA;AJgIN;AI9HM;EACE,mBAAA;AJgIR;AI7HM;EACE,gBAAA;EACA,qBAAA;AJ+HR;;AK7LA;EACE,gBAAA;EACA,WAAA;EACA,UAAA;EACA,yBHHK;EGIL,kBAAA;EACA,mBAAA;EACA,cAAA;EACA,oBAAA;ALgMF;AK9LE;EACE,aAAA;ALgMJ;AK7LE;EACE,4CHbS;EGcT,aAAA;EACA,UAAA;EACA,WAAA;EACA,cAAA;EACA,eAAA;EACA,mBAAA;EACA,mBAAA;EACA,oBAAA;EACA,oDAAA;AL+LJ;AK7LI;EACE,aAAA;EACA,8BAAA;AL+LN;AK5LI;EACE,cHjCA;AF+NN;AK3LI;;EAEE,WAAA;AL6LN;AK1LI;EACE,0BAAA;AL4LN;;AAjOA;EACE,mDAAA;EACA,sBAAA;EACA,aAAA;EACA,kBAAA;AAoOF;;AAjOA;EACE,YAAA;AAoOF","sourcesContent":["*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody,\ndiv,\nspan,\nobject,\niframe,\nfigure,\np,\nblockquote,\npre,\na,\ncode,\nem,\nimg,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nb,\nu,\ni,\nol,\nul,\nfieldset,\nform,\nlabel,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\nmain,\ncanvas,\nembed,\nfooter,\nheader,\nnav,\nsection,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  text-size-adjust: none;\n}\n\nfooter,\nheader,\nnav,\nsection,\nmain {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput {\n  -webkit-appearance: none;\n  border-radius: 0;\n}\n","@import '_variables';\n@import './_reset';\n@import './Nav';\n@import './Modal';\n@import './Main';\n\nbody {\n  background: url('../img/motion-background.png');\n  background-size: cover;\n  height: 100vh;\n  overflow-y: hidden;\n}\n\n#app {\n  height: 100%;\n}\n","@import './variables';\n\n%button {\n  font-family: Georgia, 'Times New Roman', Times, serif;\n  cursor: pointer;\n  margin: 0.1rem;\n  border-radius: 7px;\n  text-decoration: none;\n  text-transform: uppercase;\n  background-color: $orange;\n  color: white;\n  font-weight: 500;\n  font-size: 1.5rem;\n  padding: 5px 10px;\n  opacity: 0.6;\n  transition: 0.3s;\n  &:hover {\n    opacity: 1;\n  }\n}\n","$orange: #f73;\n$red: #ff4734;\n$lightBlack: #323232;\n$gray: #676666;\n$lightWhite: rgba(255, 255, 255, 0.915);\n","@import './variables';\n@import './extends';\n\n.nav_box {\n  width: 100%;\n  height: 30%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  & .nav_banner {\n    color: $red;\n    font-size: 7rem;\n  }\n\n  & .nav_button_container {\n    margin-top: 1rem;\n    & .nav_button {\n      @extend %button;\n    }\n  }\n}\n","@import '_variables';\n\n.modal_container {\n  visibility: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: $lightWhite;\n  background: black;\n  width: 100vw;\n  height: 100vh;\n  opacity: 0;\n  transition: all 0.5s;\n  z-index: 10;\n\n  &.show {\n    opacity: 1;\n    visibility: visible;\n  }\n\n  & .modal_info_box {\n    display: none;\n    position: absolute;\n    transform: translate3d(60%, 70%, 0);\n    background: $lightBlack;\n    height: 45%;\n    width: 45%;\n\n    &.show {\n      display: block;\n    }\n\n    & .modal_info_button {\n      position: absolute;\n      cursor: pointer;\n      right: 0;\n      outline: none;\n      border: none;\n      background-color: $red;\n      color: $lightWhite;\n\n      &.close {\n        top: 5px;\n        right: 5px;\n      }\n\n      &.add {\n        bottom: 5px;\n        right: 5px;\n      }\n    }\n\n    & div {\n      display: flex;\n      padding: 5px;\n      flex-direction: column;\n      width: 100%;\n\n      & input {\n        margin-bottom: 1rem;\n      }\n\n      & label {\n        margin-top: 2rem;\n        margin-bottom: 0.5rem;\n      }\n    }\n  }\n}\n","@import './variables';\n\n.data_container {\n  margin-top: 1rem;\n  height: 70%;\n  width: 90%;\n  background-color: $gray;\n  overflow-y: scroll;\n  border-radius: 1rem;\n  margin: 0 auto;\n  transition: all 0.3s;\n\n  & ul {\n    padding: 2rem;\n  }\n\n  & li {\n    background-color: $lightWhite;\n    padding: 1rem;\n    width: 70%;\n    height: 80%;\n    margin: 0 auto;\n    cursor: pointer;\n    margin-bottom: 1rem;\n    border-radius: 1rem;\n    transition: all 0.3s;\n    box-shadow: 15px 13px 20px -12px rgba(0, 0, 0, 0.75);\n\n    header {\n      display: flex;\n      justify-content: space-between;\n    }\n\n    .fa-trash-alt {\n      color: $red;\n    }\n\n    img,\n    iframe {\n      width: 100%;\n    }\n\n    &.over {\n      transform: scale(1.1, 1.1);\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/short-unique-id/dist/short-unique-id.js":
/*!**************************************************************!*\
  !*** ./node_modules/short-unique-id/dist/short-unique-id.js ***!
  \**************************************************************/
/***/ ((module) => {

var ShortUniqueId = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    DEFAULT_UUID_LENGTH: () => DEFAULT_UUID_LENGTH,
    default: () => ShortUniqueId
  });

  // package.json
  var version = "4.4.4";

  // src/index.ts
  var DEFAULT_UUID_LENGTH = 6;
  var DEFAULT_OPTIONS = {
    dictionary: "alphanum",
    shuffle: true,
    debug: false,
    length: DEFAULT_UUID_LENGTH
  };
  var _ShortUniqueId = class extends Function {
    constructor(argOptions = {}) {
      super();
      this.dictIndex = 0;
      this.dictRange = [];
      this.lowerBound = 0;
      this.upperBound = 0;
      this.dictLength = 0;
      this._digit_first_ascii = 48;
      this._digit_last_ascii = 58;
      this._alpha_lower_first_ascii = 97;
      this._alpha_lower_last_ascii = 123;
      this._hex_last_ascii = 103;
      this._alpha_upper_first_ascii = 65;
      this._alpha_upper_last_ascii = 91;
      this._number_dict_ranges = {
        digits: [this._digit_first_ascii, this._digit_last_ascii]
      };
      this._alpha_dict_ranges = {
        lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii],
        upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
      };
      this._alpha_lower_dict_ranges = {
        lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii]
      };
      this._alpha_upper_dict_ranges = {
        upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
      };
      this._alphanum_dict_ranges = {
        digits: [this._digit_first_ascii, this._digit_last_ascii],
        lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii],
        upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
      };
      this._alphanum_lower_dict_ranges = {
        digits: [this._digit_first_ascii, this._digit_last_ascii],
        lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii]
      };
      this._alphanum_upper_dict_ranges = {
        digits: [this._digit_first_ascii, this._digit_last_ascii],
        upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
      };
      this._hex_dict_ranges = {
        decDigits: [this._digit_first_ascii, this._digit_last_ascii],
        alphaDigits: [this._alpha_lower_first_ascii, this._hex_last_ascii]
      };
      this.log = (...args) => {
        const finalArgs = [...args];
        finalArgs[0] = `[short-unique-id] ${args[0]}`;
        if (this.debug === true) {
          if (typeof console !== "undefined" && console !== null) {
            return console.log(...finalArgs);
          }
        }
      };
      this.setDictionary = (dictionary, shuffle) => {
        let finalDict;
        if (dictionary && Array.isArray(dictionary) && dictionary.length > 1) {
          finalDict = dictionary;
        } else {
          finalDict = [];
          let i;
          this.dictIndex = i = 0;
          const rangesName = `_${dictionary}_dict_ranges`;
          const ranges = this[rangesName];
          Object.keys(ranges).forEach((rangeType) => {
            const rangeTypeKey = rangeType;
            this.dictRange = ranges[rangeTypeKey];
            this.lowerBound = this.dictRange[0];
            this.upperBound = this.dictRange[1];
            for (this.dictIndex = i = this.lowerBound; this.lowerBound <= this.upperBound ? i < this.upperBound : i > this.upperBound; this.dictIndex = this.lowerBound <= this.upperBound ? i += 1 : i -= 1) {
              finalDict.push(String.fromCharCode(this.dictIndex));
            }
          });
        }
        if (shuffle) {
          const PROBABILITY = 0.5;
          finalDict = finalDict.sort(() => Math.random() - PROBABILITY);
        }
        this.dict = finalDict;
        this.dictLength = this.dict.length;
        this.counter = 0;
      };
      this.seq = () => {
        return this.sequentialUUID();
      };
      this.sequentialUUID = () => {
        let counterDiv;
        let counterRem;
        let id = "";
        counterDiv = this.counter;
        do {
          counterRem = counterDiv % this.dictLength;
          counterDiv = Math.trunc(counterDiv / this.dictLength);
          id += this.dict[counterRem];
        } while (counterDiv !== 0);
        this.counter += 1;
        return id;
      };
      this.randomUUID = (uuidLength = this.uuidLength || DEFAULT_UUID_LENGTH) => {
        let id;
        let randomPartIdx;
        let j;
        if (uuidLength === null || typeof uuidLength === "undefined" || uuidLength < 1) {
          throw new Error("Invalid UUID Length Provided");
        }
        const isPositive = uuidLength >= 0;
        id = "";
        for (j = 0; j < uuidLength; j += 1) {
          randomPartIdx = parseInt((Math.random() * this.dictLength).toFixed(0), 10) % this.dictLength;
          id += this.dict[randomPartIdx];
        }
        return id;
      };
      this.availableUUIDs = (uuidLength = this.uuidLength) => {
        return parseFloat(Math.pow([...new Set(this.dict)].length, uuidLength).toFixed(0));
      };
      this.approxMaxBeforeCollision = (rounds = this.availableUUIDs(this.uuidLength)) => {
        return parseFloat(Math.sqrt(Math.PI / 2 * rounds).toFixed(20));
      };
      this.collisionProbability = (rounds = this.availableUUIDs(this.uuidLength), uuidLength = this.uuidLength) => {
        return parseFloat((this.approxMaxBeforeCollision(rounds) / this.availableUUIDs(uuidLength)).toFixed(20));
      };
      this.uniqueness = (rounds = this.availableUUIDs(this.uuidLength)) => {
        const score = parseFloat((1 - this.approxMaxBeforeCollision(rounds) / rounds).toFixed(20));
        return score > 1 ? 1 : score < 0 ? 0 : score;
      };
      this.getVersion = () => {
        return this.version;
      };
      this.stamp = (finalLength) => {
        if (typeof finalLength !== "number" || finalLength < 10) {
          throw new Error("Param finalLength must be number greater than 10");
        }
        const hexStamp = Math.floor(+new Date() / 1e3).toString(16);
        const idLength = finalLength - 9;
        const rndIdx = Math.round(Math.random() * (idLength > 15 ? 15 : idLength));
        const id = this.randomUUID(idLength);
        return `${id.substr(0, rndIdx)}${hexStamp}${id.substr(rndIdx)}${rndIdx.toString(16)}`;
      };
      this.parseStamp = (stamp) => {
        if (stamp.length < 10) {
          throw new Error("Stamp length invalid");
        }
        const rndIdx = parseInt(stamp.substr(stamp.length - 1, 1), 16);
        return new Date(parseInt(stamp.substr(rndIdx, 8), 16) * 1e3);
      };
      const options = __spreadValues(__spreadValues({}, DEFAULT_OPTIONS), argOptions);
      this.counter = 0;
      this.debug = false;
      this.dict = [];
      this.version = version;
      const {
        dictionary,
        shuffle,
        length
      } = options;
      this.uuidLength = length;
      this.setDictionary(dictionary, shuffle);
      this.debug = options.debug;
      this.log(this.dict);
      this.log(`Generator instantiated with Dictionary Size ${this.dictLength}`);
      return new Proxy(this, {
        apply: (target, that, args) => this.randomUUID(...args)
      });
    }
  };
  var ShortUniqueId = _ShortUniqueId;
  ShortUniqueId.default = _ShortUniqueId;
  return src_exports;
})();
//# sourceMappingURL=short-unique-id.js.map
 true&&(module.exports=ShortUniqueId.default),'undefined'!=typeof window&&(ShortUniqueId=ShortUniqueId.default);

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/motion-background.png":
/*!***************************************!*\
  !*** ./src/img/motion-background.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2ee2390517a8cdf7741e.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/App.ts");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");


new _App__WEBPACK_IMPORTED_MODULE_0__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map