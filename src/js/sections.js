const addSectionBtn = document.querySelector(".add-section");
const sectionsBlock = document.querySelector(".sections");

import {changeNamesFocus} from "./portfolio.js";


function addSection() {
    let newSection = document.createElement("div");
    let numOfNewSection = sectionsBlock.querySelectorAll(".section").length + 1;

    newSection.innerHTML = `
    <div class="section_title">
        <h2 class="section_title_name">Секция ${numOfNewSection}</h2>
        <img src="../icons/portfolio/text-edit-icon.png" class="section_title_icon" alt="Изменить название" title="Изменить название">
    </div>
    <div class="section_block">
        <div class="section_block_work">
            <div class="section_block_work_add-work">
                <img src="../icons/portfolio/add-work-icon.png" alt="добавить работу">
            </div>
        </div>
    </div>
    `
    newSection.className = "section";

    sectionsBlock.append(newSection);
    let editSectionNameBtn = newSection.querySelector(".section_title_icon");
    const sectionName = newSection.querySelector(".section_title_name");
    editSectionNameBtn.addEventListener("click", () => changeNamesFocus(sectionName, 40));
}



addSectionBtn.addEventListener("click", addSection)