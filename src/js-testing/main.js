(()=>{var e={820:()=>{const e=document.querySelector(".portfolio-container_info_image_contacts_collapse-btn"),t=document.querySelector(".portfolio-container_info_image_contacts_collapse-block"),o=document.querySelector(".portfolio-container_info_image_contacts_collapse-block_add-contact");function n(){let e=document.getElementById("newContactName").value,t=document.getElementById("newContactAddress").value;if(!e||!t)return;if(!(e=>{try{return!!new URL(e)}catch(e){return!1}})(t))return void alert("Неверный адрес");let n=document.createElement("li"),c=`<div class="portfolio-container_info_image_contacts_collapse-block_contact">\n    <a class="contact-name" href="${t}" target="_blank">${e}</a>\n    <img src="../icons/portfolio/delete-icon.svg" class="delete-contact">\n    </div>`;n.innerHTML=c,o.parentElement.before(n),n.querySelector(".delete-contact").addEventListener("click",(e=>{!function(e){e.target.parentElement.remove()}(e)}))}document.getElementById("contactModal").addEventListener("shown.bs.modal",(()=>{document.getElementById("acceptContact").addEventListener("click",n)})),e.addEventListener("click",(function(){t.hidden=!t.hidden,e.firstElementChild.style.transform=t.hidden?"translateY(-50%) rotate(0deg) scale(0.6)":"translateY(-50%) rotate(90deg) scale(0.6)"}))},578:(e,t,o)=>{"use strict";o.d(t,{T:()=>a});const n=document.querySelector(".portfolio-container_info_text-content_name"),c=document.querySelector(".portfolio-container_info_text-content_descr").firstElementChild,l=c.nextElementSibling,r=document.querySelector(".bck-change-color"),i=document.getElementById("colorInputBackground");function a(e,t=30){let o=document.createElement("input"),n=e.textContent;o.type="text",o.className="changing-text",o.setAttribute("maxlength",t),e.replaceWith(o),o.value=n,o.addEventListener("blur",(function(){let t=document.querySelector(".changing-text");if(!t)return;let o=""===t.value?"X":t.value;t.replaceWith(e),e.textContent=o})),document.addEventListener("keydown",(e=>function(e){"Enter"==e.code&&o.blur()}(e))),o.focus()}function d(e){if(!e.target.closest(".section_block_work"))return;if(e.target.closest(".section_block_work").querySelector(".section_block_work_add-work"))return;let t=e.target.closest(".section_block_work"),o=t.querySelector(".section_block_work_cover"),n=t.querySelector(".section_block_work_name");t.style.overflow="visible",o.style.opacity="0.1",n.style.position="absolute",n.style.top="10px",n.style.left="10px",n.style.right="10px",t.addEventListener("mouseout",(()=>{n.style.position="static",n.style.top=null,n.style.left=null,n.style.right=null,t.style.overflow="hidden",o.style.opacity=null}))}r.addEventListener("click",(function(){i.hidden=!1,document.body.style.overflowY="hidden";let e=getComputedStyle(i.closest(".container")).getPropertyValue("background-color");i.value="#"+e.match(/\b\d{1,3}\b/g).map((e=>{const t=Number(e).toString(16);return 1===t.length?"0"+t:t})).join(""),i.focus(),i.addEventListener("blur",(()=>{i.closest(".container").style.backgroundColor=i.value,i.hidden=!0,document.body.style.overflowY="visible"}))})),l.addEventListener("click",(function(){let e=document.createElement("textarea");c.replaceWith(e),e.value=c.textContent,e.className="changing-descr",e.addEventListener("blur",(function(){let e=document.querySelector(".changing-descr"),t=e.value;e.replaceWith(c),c.textContent=t,l.hidden=!1})),l.hidden=!0,e.focus()})),n.addEventListener("click",(()=>a(n,30))),document.querySelectorAll(".section_block").forEach((e=>{e.addEventListener("mouseover",d)}))},676:(e,t,o)=>{"use strict";var n=o(578);const c=document.querySelector(".add-section"),l=document.querySelector(".sections"),r=(document.getElementById("deleteSectionModal"),document.getElementById("deleteSectionModal")),i=document.getElementById("addingWorkModal");r.addEventListener("shown.bs.modal",(e=>{const t=document.getElementById("acceptDeleteSection");let o=e.relatedTarget.closest(".section");o&&t.addEventListener("click",(()=>{o.remove()}))})),c.addEventListener("click",(function(){let e=document.createElement("div"),t=l.querySelectorAll(".section").length+1;e.innerHTML=`\n    <div class="section_title">\n        <h2 class="section_title_name">Секция ${t}</h2>\n        <img src="../icons/portfolio/text-edit-icon.png" class="section_title_icon" alt="Изменить название" title="Изменить название">\n    </div>\n        <img class="delete-section" data-bs-toggle="modal" data-bs-target="#deleteSectionModal" src="../icons/portfolio/delete-icon.svg" title="удалить секцию">\n    <div class="section_block">\n        <div class="section_block_work">\n            <div class="section_block_work_add-work">\n                <img data-bs-toggle="modal" data-bs-target="#addingWorkModal" src="../icons/portfolio/add-work-icon.png" alt="добавить работу">\n            </div>\n        </div>\n    </div>\n    `,e.className="section",l.append(e);let o=e.querySelector(".section_title_icon");const c=e.querySelector(".section_title_name");o.addEventListener("click",(()=>(0,n.T)(c,40)))}));let a=!1;i.addEventListener("shown.bs.modal",(e=>{if(a)return;a=!0;let t=e.relatedTarget.closest(".section_block_work");console.log("окно появилось"),document.getElementById("acceptWorkAdding").addEventListener("click",(()=>function(e,t){let o=document.forms.workForm,n=o.formWorkName.value,c=o.formFiles,l=c.files[0];if(!l)return c.style.borderColor="red",c.focus(),void c.addEventListener("blur",(()=>{c.style.borderColor=null}));if(!n)return o.formWorkName.style.borderColor="red",o.formWorkName.focus(),void o.formWorkName.addEventListener("blur",(()=>{o.formWorkName.style.borderColor=null}));let r=function(){let e=document.createElement("div");return e.className="section_block_work",e.innerHTML='\n        <div class="section_block_work_cover"><img src="../img/portfolio/work-cover-default.jpg" alt="Обложка карточки"></div>\n        <div class="section_block_work_name">%НАЗВАНИЕ%</div>\n    ',e}();r.querySelector(".section_block_work_name").textContent=n;let i=r.querySelector(".section_block_work_cover").firstElementChild,a=new FileReader;a.onload=function(e){i.setAttribute("src",e.target.result)},a.readAsDataURL(l),t.before(r),o.reset()}(0,t)))}))}},t={};function o(n){var c=t[n];if(void 0!==c)return c.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,o),l.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o(820),o(578),o(676)})();