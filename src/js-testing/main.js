(()=>{const e=document.querySelector(".portfolio-container_info_image_contacts_collapse-btn"),t=document.querySelector(".portfolio-container_info_image_contacts_collapse-block"),n=document.querySelector(".portfolio-container_info_image_contacts_collapse-block_add-contact");function c(){let e=document.getElementById("newContactName").value,t=document.getElementById("newContactAddress").value;if(!e||!t)return;let c=document.createElement("li"),o=`<div class="portfolio-container_info_image_contacts_collapse-block_contact">\n    <h3 class="contact-name">${e}</h3>\n    <p class="contact-link">${t}</p>\n    </div>`;c.innerHTML=o,n.parentElement.before(c)}document.getElementById("contactModal").addEventListener("shown.bs.modal",(()=>{document.getElementById("acceptContact").addEventListener("click",c)})),e.addEventListener("click",(function(){t.hidden=!t.hidden,e.firstElementChild.style.transform=t.hidden?"translateY(-50%) rotate(0deg) scale(0.6)":"translateY(-50%) rotate(90deg) scale(0.6)"}))})(),(()=>{const e=document.querySelector(".portfolio-container_info_text-content_name"),t=document.querySelector(".portfolio-container_info_text-content_descr").firstElementChild,n=t.nextElementSibling;n.addEventListener("click",(function(){let e=document.createElement("textarea");t.replaceWith(e),e.value=t.textContent,e.className="changing-descr",e.addEventListener("blur",(function(){let e=document.querySelector(".changing-descr"),c=e.value;e.replaceWith(t),t.textContent=c,n.hidden=!1})),n.hidden=!0,e.focus()})),e.addEventListener("click",(function(){let t=document.createElement("input"),n=e.textContent;t.type="text",t.className="changing-text",t.setAttribute("maxlength","30"),e.replaceWith(t),t.value=n,t.addEventListener("blur",(function(){let t=document.querySelector(".changing-text");if(!t)return;let n=""===t.value?"X":t.value;t.replaceWith(e),e.textContent=n})),document.addEventListener("keydown",(e=>function(e){"Enter"==e.code&&t.blur()}(e))),t.focus()}))})();