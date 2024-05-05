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

/***/ "./src/js/contacts-editing.js":
/*!************************************!*\
  !*** ./src/js/contacts-editing.js ***!
  \************************************/
/***/ (() => {

eval("const ContactsCollapseBtn = document.querySelector('.portfolio-container_info_image_contacts_collapse-btn');\r\nconst ContactsCollapseBlock = document.querySelector('.portfolio-container_info_image_contacts_collapse-block');\r\n\r\nconst AddContactBtn = document.querySelector('.portfolio-container_info_image_contacts_collapse-block_add-contact');\r\nconst Modal = document.getElementById('contactModal');\r\n\r\nconst match = window.location.href.match(/\\/portfolio\\/(\\d+)/);\r\nconst portfolioId = match ? match[1] : null;\r\n\r\nfunction collapseContacts() {\r\n    ContactsCollapseBlock.hidden = !ContactsCollapseBlock.hidden;\r\n\r\n    let transformClose = \"translateY(-50%) rotate(90deg) scale(0.6)\";\r\n    let transformOpen = \"translateY(-50%) rotate(0deg) scale(0.6)\";\r\n    ContactsCollapseBtn.firstElementChild.style.transform = (ContactsCollapseBlock.hidden) ? transformOpen : transformClose;\r\n}\r\n\r\nconst isValidUrl = (str) => {\r\n    try {\r\n      return !!new URL(str);\r\n    }\r\n    catch (_) {\r\n      return false;\r\n    }\r\n  };\r\n\r\nasync function deleteParentElement(e) {\r\n    const formData = {\r\n      link: e.target.previousElementSibling.href,\r\n      linkName: e.target.previousElementSibling.textContent\r\n    }\r\n\r\n    try {\r\n      const response = await fetch(`/portfolio/${portfolioId}/delete-contact`, {\r\n      method: \"DELETE\",\r\n      body: JSON.stringify(formData),\r\n      headers: {\r\n        'Content-type': 'application/json',\r\n      }\r\n    })\r\n    if (response.ok) {\r\n      console.log(\"Успех\");\r\n    }\r\n      \r\n    } catch(err) {\r\n      console.log(err)\r\n    }\r\n\r\n    e.target.parentElement.remove();\r\n  }\r\n\r\nasync function addNewContact() {\r\n    let name = document.getElementById('newContactName').value;\r\n    let url = document.getElementById('newContactAddress').value;\r\n    \r\n    if (!name || !url) return;\r\n    if (!isValidUrl(url)) {\r\n        alert(\"Неверный адрес\")\r\n        return;\r\n    }; \r\n    let contact = document.createElement('li');\r\n    \r\n    let contactTemplate = `<div class=\"portfolio-container_info_image_contacts_collapse-block_contact\">\r\n    <a class=\"contact-name\" href=\"${url}\" target=\"_blank\">${name}</a>\r\n    <img src=\"../icons/portfolio/delete-icon.svg\" class=\"delete-contact\">\r\n    </div>`\r\n    contact.innerHTML = contactTemplate;\r\n    AddContactBtn.parentElement.before(contact);\r\n\r\n\r\n    const formData = {\r\n      linkName: name,\r\n      link: url\r\n    }\r\n\r\n    try {\r\n      const response = await fetch(`/portfolio/${portfolioId}/add-contact`, {\r\n      method: \"POST\",\r\n      body: JSON.stringify(formData),\r\n      headers: {\r\n        'Content-type': 'application/json',\r\n      }\r\n    })\r\n    if (response.ok) {\r\n      console.log(\"Успех\");\r\n    }\r\n      \r\n    } catch(err) {\r\n      console.log(err)\r\n    }\r\n  }\r\n  \r\n\r\n  Modal.addEventListener('shown.bs.modal', () => {\r\n    const AcceptContactBtn = document.getElementById('acceptContact');\r\n    AcceptContactBtn.addEventListener('click', addNewContact);\r\n  })\r\n  \r\n  ContactsCollapseBtn.addEventListener(\"click\", collapseContacts);\r\n  try {\r\n    document.querySelectorAll(\".delete-contact\").forEach((i) => {\r\n      i.addEventListener(\"click\", (e) => {deleteParentElement(e)})\r\n    })\r\n  } catch (err) {\r\n    console.log(err)\r\n  }\r\n\r\n\n\n//# sourceURL=webpack://portfolio/./src/js/contacts-editing.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/contacts-editing.js"]();
/******/ 	
/******/ })()
;