const addSectionBtn = document.querySelector(".add-section");
const sectionsBlock = document.querySelector(".sections");
const acceptSectionDeleteBtn = document.getElementById("deleteSectionModal");
const modal = document.getElementById("deleteSectionModal");
import {changeNamesFocus} from "./portfolio.js";


function addSection() {
    let newSection = document.createElement("div");
    let numOfNewSection = sectionsBlock.querySelectorAll(".section").length + 1;

    newSection.innerHTML = `
    <div class="section_title">
        <h2 class="section_title_name">Секция ${numOfNewSection}</h2>
        <img src="../icons/portfolio/text-edit-icon.png" class="section_title_icon" alt="Изменить название" title="Изменить название">
    </div>
        <img class="delete-section" data-bs-toggle="modal" data-bs-target="#deleteSectionModal" src="../icons/portfolio/delete-icon.svg" title="удалить секцию">
    <div class="section_block">
        <div class="section_block_work">
            <div class="section_block_work_add-work">
                <img data-bs-toggle="modal" data-bs-target="#addingWorkModal" src="../icons/portfolio/add-work-icon.png" alt="добавить работу">
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

// NOT FINISHED
// function addWork() {
//     let form = document.forms.workForm;
//     let workName = form.formName;
//     let formDescr = form.formName;
//     if (workFormURL) {
//         let workURL = workFormURL.textContent;
//     }

//     for (let file of form.formFiles) {
//         if (file) {

//         }
//     }

// }

modal.addEventListener('shown.bs.modal', (e) => {
    const AcceptDeleteBtn = document.getElementById('acceptDeleteSection');
    let sectionCur = e.relatedTarget.closest(".section");
    if (!sectionCur) return;
    AcceptDeleteBtn.addEventListener('click', () => {
        sectionCur.remove();
    });
})
// function deleteSection(targetSection) {
// }


addSectionBtn.addEventListener("click", addSection);