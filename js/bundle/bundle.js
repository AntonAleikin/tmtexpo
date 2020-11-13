/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_fixed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header_fixed */ "./js/modules/header_fixed.js");
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/hamburger */ "./js/modules/hamburger.js");
/* harmony import */ var _modules_hover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/hover */ "./js/modules/hover.js");
/* harmony import */ var _modules_send_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/send-form */ "./js/modules/send-form.js");
// Импортируем модули и вызываем
;
(0,_modules_header_fixed__WEBPACK_IMPORTED_MODULE_0__.default)();


(0,_modules_hamburger__WEBPACK_IMPORTED_MODULE_1__.default)();


(0,_modules_hover__WEBPACK_IMPORTED_MODULE_2__.default)();


(0,_modules_send_form__WEBPACK_IMPORTED_MODULE_3__.default)();

/***/ }),

/***/ "./js/modules/hamburger.js":
/*!*********************************!*\
  !*** ./js/modules/hamburger.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ hamburger
/* harmony export */ });
function hamburger () 
{
    if (window.matchMedia('(max-width: 767px)').matches) {

        const 
        hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        links = document.querySelectorAll('.menu__link');

        // Открываем/закрываем меню, при клике на гамбургер
        hamburger.addEventListener("click", (e) => {

            if (!hamburger.classList.contains('hamburger_active') && !menu.classList.contains('menu_active')) {

                hamburger.classList.add('hamburger_active');
                menu.classList.add('menu_active');
            } else {
    
                hamburger.classList.remove('hamburger_active');
                menu.classList.remove('menu_active');
            }
        });


        // После перехода по ссылке - сначала закрываем меню, а потом переходим по ссылке
        links.forEach((link) => {

            link.addEventListener("click", (e) => {
                e.preventDefault();

                hamburger.classList.remove('hamburger_active');
                menu.classList.remove('menu_active');

                // Ждем время анимации и переходим по ссылке
                setTimeout(() => {
                    document.location = e.target.href;
                }, 300);
            });
        }); 
    } 
}

/***/ }),

/***/ "./js/modules/header_fixed.js":
/*!************************************!*\
  !*** ./js/modules/header_fixed.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ headerFixed
/* harmony export */ });
function headerFixed () {

    const header = document.querySelector('.header');

    window.addEventListener("scroll", () => {

        if (window.scrollY >= window.innerHeight*0.91) {

            header.classList.add('header_fixed');
    
        } else {
    
            header.classList.remove('header_fixed');
        }
    });
}

/***/ }),

/***/ "./js/modules/hover.js":
/*!*****************************!*\
  !*** ./js/modules/hover.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ hover
/* harmony export */ });
function hover () {

    if (window.matchMedia('(max-width: 767px)').matches) {

        const sectionLink = document.querySelector('.section-link__link');

        if (sectionLink.classList.contains('section-link__link-hover')) {

            sectionLink.classList.remove('section-link__link-hover');
        }
    }
}

/***/ }),

/***/ "./js/modules/send-form.js":
/*!*********************************!*\
  !*** ./js/modules/send-form.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ sendForm
/* harmony export */ });
/* harmony import */ var _services_fetch_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/fetch-service */ "./js/services/fetch-service.js");
// Импортируем сервис
;

function sendForm() {

    const form = document.querySelector('.form');

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        }); 

        (0,_services_fetch_service__WEBPACK_IMPORTED_MODULE_0__.default)('php/send-mail.php', formDataObject)
        .then(response => console.log(response));
    });
}

/***/ }),

/***/ "./js/services/fetch-service.js":
/*!**************************************!*\
  !*** ./js/services/fetch-service.js ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ fetchservice
/* harmony export */ });
async function fetchservice(header, myBody) {

    if (myBody === undefined) {

        return fetch(header)
        .then(respose => respose.json());

    } else {

        return fetch(header, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(myBody),
        }).then(respose => respose.json());
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map