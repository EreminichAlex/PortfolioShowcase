/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/start-page.js":
/*!******************************!*\
  !*** ./src/js/start-page.js ***!
  \******************************/
/***/ (() => {

eval("const hamburgerMenu = document.querySelector(\".header_hamburger-nav_list\");\r\nconst hamburger = document.querySelector(\".hamburger\");\r\n\r\nhamburger.addEventListener(\"click\", () => {\r\n    if(!hamburger.classList.contains(\"hamburger_active\")) {\r\n        hamburger.classList.add(\"hamburger_active\");\r\n        hamburgerMenu.hidden = false;\r\n        document.documentElement.style.overflowY = \"hidden\";\r\n    } else {\r\n        hamburger.classList.remove(\"hamburger_active\");\r\n        hamburgerMenu.hidden = true;\r\n        document.documentElement.style.overflowY = \"scroll\";\r\n    }\r\n})\r\n\n\n//# sourceURL=webpack://portfolio/./src/js/start-page.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/start-page.js"]();
/******/ 	
/******/ })()
;