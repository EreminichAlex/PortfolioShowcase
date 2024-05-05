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

/***/ "./src/js/profile.js":
/*!***************************!*\
  !*** ./src/js/profile.js ***!
  \***************************/
/***/ (() => {

eval("const modalAddPortfolio = document.getElementById(\"addingPortfolioModal\");\r\nconst modalDeletePortfolio = document.getElementById(\"portfolioDeleteAttentionModal\");\r\n\r\nfunction addPortfolioCard(e, targetBlock) {\r\n    let form = document.forms.portfolioForm;\r\n    let portfolioName = form.formPortfolioName.value;\r\n    let userName = form.formPortfolioUserName.value;\r\n    let descr = form.formPortfolioDescr.value;\r\n\r\n    if (!portfolioName) {\r\n        form.formPortfolioName.style.borderColor = 'red';\r\n        form.formPortfolioName.focus();\r\n        form.formPortfolioName.addEventListener(\"blur\", () => {form.formPortfolioName.style.borderColor = null})\r\n        return;\r\n    }\r\n\r\n    if(!userName) {\r\n        form.formPortfolioUserName.style.borderColor = 'red';\r\n        form.formPortfolioUserName.focus();\r\n        form.formPortfolioUserName.addEventListener(\"blur\", () => {form.formPortfolioUserName.style.borderColor = null})\r\n        return;\r\n    };\r\n\r\n    let card = createPortfolioCardTemplate();\r\n    card.querySelector(\".section_block_work_name\").textContent = portfolioName;\r\n\r\n    targetBlock.before(card);\r\n    form.submit();\r\n    form.reset();\r\n}\r\n\r\nfunction createPortfolioCardTemplate() {\r\n    let card = document.createElement(\"div\");\r\n    card.className = \"section_block_work\";\r\n    card.innerHTML = `\r\n        <a class=\"section_block_work_link\" href=\"%link%\">\r\n            <div class=\"section_block_work_cover\"><img src=\"../icons/social-icons/portfolio-icon.png\" alt=\"Обложка портфолио\"></div>\r\n            <div class=\"section_block_work_name\">%НАЗВАНИЕ%</div>\r\n        </a>\r\n    `\r\n    return card;\r\n}\r\n\r\nlet activeAddPortfolioModal = false;\r\n\r\nmodalAddPortfolio.addEventListener(\"shown.bs.modal\", (e) => {\r\n    if (activeAddPortfolioModal) return;\r\n    activeAddPortfolioModal = true;\r\n    let targetBlock = e.relatedTarget.closest(\".section_block_work\");\r\n    document.getElementById(\"acceptPortfolioAdding\").addEventListener(\"click\", () => addPortfolioCard(e, targetBlock))\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://portfolio/./src/js/profile.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/profile.js"]();
/******/ 	
/******/ })()
;