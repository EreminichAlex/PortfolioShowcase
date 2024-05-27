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

eval("const modalAddPortfolio = document.getElementById(\"addingPortfolioModal\");\r\nconst modalDeletePortfolio = document.getElementById(\"portfolioDeleteAttentionModal\");\r\nconst urlSplit = window.location.href.split(\"/\");\r\nconst nickname = urlSplit[urlSplit.length - 1]\r\nlet changeAvatarFile = document.getElementById(\"changeAvatarFile\");\r\n\r\nfunction makeFilename(length) {\r\n    let result = '';\r\n    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';\r\n    const charactersLength = characters.length;\r\n    let counter = 0;\r\n    while (counter < length) {\r\n      result += characters.charAt(Math.floor(Math.random() * charactersLength));\r\n      counter += 1;\r\n    }\r\n    return result;\r\n}\r\n\r\nfunction getFileExtension(fileName) {\r\n    const parts = fileName.split('.');\r\n    return parts[parts.length - 1];\r\n}\r\n\r\nfunction addPortfolioCard(e, targetBlock) {\r\n    let form = document.forms.portfolioForm;\r\n    let portfolioName = form.formPortfolioName.value;\r\n    let userName = form.formPortfolioUserName.value;\r\n    let descr = form.formPortfolioDescr.value;\r\n\r\n    if (!portfolioName) {\r\n        form.formPortfolioName.style.borderColor = 'red';\r\n        form.formPortfolioName.focus();\r\n        form.formPortfolioName.addEventListener(\"blur\", () => {form.formPortfolioName.style.borderColor = null})\r\n        return;\r\n    }\r\n\r\n    if(!userName) {\r\n        form.formPortfolioUserName.style.borderColor = 'red';\r\n        form.formPortfolioUserName.focus();\r\n        form.formPortfolioUserName.addEventListener(\"blur\", () => {form.formPortfolioUserName.style.borderColor = null})\r\n        return;\r\n    };\r\n\r\n    let card = createPortfolioCardTemplate();\r\n    card.querySelector(\".section_block_work_name\").textContent = portfolioName;\r\n\r\n    targetBlock.before(card);\r\n    form.submit();\r\n    form.reset();\r\n}\r\n\r\nfunction createPortfolioCardTemplate() {\r\n    let card = document.createElement(\"div\");\r\n    card.className = \"section_block_work\";\r\n    card.innerHTML = `\r\n        <a class=\"section_block_work_link\" href=\"%link%\">\r\n            <div class=\"section_block_work_cover\"><img src=\"../icons/social-icons/portfolio-icon.png\" alt=\"Обложка портфолио\"></div>\r\n            <div class=\"section_block_work_name\">%НАЗВАНИЕ%</div>\r\n        </a>\r\n    `\r\n    return card;\r\n}\r\n\r\nlet activeAddPortfolioModal = false;\r\n\r\nmodalAddPortfolio.addEventListener(\"shown.bs.modal\", (e) => {\r\n    if (activeAddPortfolioModal) return;\r\n    activeAddPortfolioModal = true;\r\n    let targetBlock = e.relatedTarget.closest(\".section_block_work\");\r\n    document.getElementById(\"acceptPortfolioAdding\").addEventListener(\"click\", () => addPortfolioCard(e, targetBlock))\r\n});\r\nchangeAvatarFile.addEventListener('change', async (e) => {\r\n    let file = e.target.files[0];\r\n    let reader = new FileReader();\r\n    reader.readAsDataURL(file);\r\n    let previousFileName\r\n    let img = document.getElementById(\"changeAvatarFileLabel\").querySelector(\"img\");\r\n    let previousFile\r\n    let newFilename\r\n    let resFile\r\n\r\n    try {\r\n        previousFileName = img.src.match(/\\/([^\\/]+)\\.[^\\/\\.]+/)[1];\r\n        previousFile = \"/\"+img.src.match(/\\/([^\\/]+)(\\.[^\\/\\.]+)$/)[1] + img.src.match(/\\/([^\\/]+)(\\.[^\\/\\.]+)$/)[2];\r\n    } catch (err) {\r\n        \r\n    }\r\n    console.log(\"previousFileName\", previousFileName)\r\n    console.log(\"previousFile\", previousFile)\r\n\r\n    newFilename = makeFilename(10) +`.${getFileExtension(file.name)}`;\r\n    resFile = new File([file], newFilename, {type: file.type});\r\n\r\n    const formData = new FormData();\r\n    formData.append('file', resFile);\r\n    formData.append('avatarPath', newFilename);\r\n    formData.append('previousFileName', previousFileName);\r\n    formData.append('previousFile', previousFile);\r\n    formData.append('nickname', nickname);\r\n\r\n    try {\r\n        const response = await fetch(`/profile/${nickname}/change-avatar-file`, {\r\n        method: \"PUT\",\r\n        body: formData,\r\n\r\n    })\r\n    if (response.ok) {\r\n        console.log(\"Успех\");\r\n    }\r\n        \r\n    } catch(err) {\r\n        console.log(err)\r\n    }\r\n})\r\n\r\n\n\n//# sourceURL=webpack://portfolio/./src/js/profile.js?");

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