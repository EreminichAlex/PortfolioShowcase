/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/registration-form.js":
/*!*************************************!*\
  !*** ./src/js/registration-form.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addInvalidFeedback: () => (/* binding */ addInvalidFeedback)\n/* harmony export */ });\nconst regForm = document.forms.registration;\r\n\r\nregForm.addEventListener(\"submit\", (e) => {\r\n    e.preventDefault();\r\n    const nickname = regForm.elements.nickname.value;\r\n    const email = regForm.elements.email.value;\r\n    const password = regForm.elements.password.value;\r\n    const confirmPassword = regForm.elements.confirmPassword.value;\r\n\r\n    if (!nickname) {\r\n        addInvalidFeedback(regForm.elements.nickname);\r\n        return;\r\n    }\r\n    if (!email) {\r\n        addInvalidFeedback(regForm.elements.email);\r\n        return;\r\n    }\r\n    if(!password) {\r\n        addInvalidFeedback(regForm.elements.password);\r\n        return;\r\n    }\r\n    if (!confirmPassword || confirmPassword !== password) {\r\n        addInvalidFeedback(regForm.elements.confirmPassword);\r\n        return;\r\n    }\r\n    regForm.submit();\r\n})\r\n\r\n\r\nfunction addInvalidFeedback(elem) {\r\n    elem.style.borderColor = \"#e32727\"\r\n    elem.style.background = \"#ffb4b4\"\r\n    elem.onfocus = () => {\r\n        elem.style.borderColor = null;\r\n        elem.style.background = null;\r\n    } \r\n}\r\n\n\n//# sourceURL=webpack://portfolio/./src/js/registration-form.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/registration-form.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;