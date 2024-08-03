/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 930:
/***/ (() => {

const dndContainer = document.querySelector('.dnd-container');
const imgInput = document.querySelector('.input-img');
const removeButtons = document.querySelectorAll('.remove-img-btn');
const images = document.querySelector('.images');
dndContainer.addEventListener('click', e => {
  imgInput.dispatchEvent(new MouseEvent('click'));
});
const displayImg = (file, preImg) => {
  const reader = new FileReader();
  reader.onload = e => {
    const imgElement = document.createElement('img');
    imgElement.src = e.target.result;
    imgElement.classList.add('image');
    preImg.innerHTML = '';
    preImg.classList.remove('pre-img');
    preImg.appendChild(imgElement);
  };
  const newImgContainer = document.createElement('div');
  newImgContainer.classList.add('img-container');
  const newPreImg = document.createElement('div');
  newPreImg.classList.add('pre-img');
  const newButton = document.createElement('button');
  newButton.classList.add('remove-img-btn');
  newButton.textContent = 'X';
  newImgContainer.appendChild(newPreImg);
  newImgContainer.appendChild(newButton);
  images.appendChild(newImgContainer);
  reader.readAsDataURL(file);
};
imgInput.addEventListener('change', e => {
  const files = e.target.files;
  let preImgs = document.querySelectorAll('.pre-img');
  Array.from(files).forEach((file, index) => {
    if (index < preImgs.length) {
      displayImg(file, preImgs[index]);
    }
  });
});
dndContainer.addEventListener('drop', e => {
  e.preventDefault();
  const files = e.dataTransfer.files;
  let preImgs = document.querySelectorAll('.pre-img');
  Array.from(files).forEach((file, index) => {
    if (index < preImgs.length) {
      displayImg(file, preImgs[index]);
    }
  });
});
dndContainer.addEventListener('dragover', e => {
  e.preventDefault();
});
images.addEventListener('click', e => {
  if (e.target.classList.contains('remove-img-btn')) {
    const imgContainer = e.target.closest('.img-container');
    imgContainer.remove();
  }
});

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_app__WEBPACK_IMPORTED_MODULE_0__);


})();

/******/ })()
;
//# sourceMappingURL=main.js.map