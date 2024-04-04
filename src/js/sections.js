const addSectionBtn = document.querySelector(".add-section");
const sectionsBlock = document.querySelector(".sections");
const acceptSectionDeleteBtn = document.getElementById("deleteSectionModal");
const modal = document.getElementById("deleteSectionModal");
const modalAddWork = document.getElementById("addingWorkModal");
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
function addWorkCard(e, targetBlock) {
    let form = document.forms.workForm;
    let workName = form.formWorkName.value;
    let fileInput = form.formFiles;
    let file = fileInput.files[0];

    if (!file) {
        fileInput.style.borderColor = 'red';
        fileInput.focus();
        fileInput.addEventListener("blur", () => {fileInput.style.borderColor = null})
        return;
    }
    if (!workName) {
        form.formWorkName.style.borderColor = 'red';
        form.formWorkName.focus();
        form.formWorkName.addEventListener("blur", () => {form.formWorkName.style.borderColor = null})
        return;
    }

    let card = createWorkCardTemplate();
    card.querySelector(".section_block_work_name").textContent = workName;
    let imageCover = card.querySelector(".section_block_work_cover").firstElementChild;

    let reader = new FileReader();
    reader.onload = function(e) {
        imageCover.setAttribute('src', e.target.result)
    }
    reader.readAsDataURL(file);
    // let formDescr = form.formName;

    targetBlock.before(card);
    form.reset();
}

function createWorkCardTemplate() {
    let card = document.createElement("div");
    card.className = "section_block_work";
    card.innerHTML = `
        <div class="section_block_work_cover"><img src="../img/portfolio/work-cover-default.jpg" alt="Обложка карточки"></div>
        <div class="section_block_work_name">%НАЗВАНИЕ%</div>
    `
    return card;
}

try {

    modal.addEventListener('shown.bs.modal', (e) => {
        const AcceptDeleteBtn = document.getElementById('acceptDeleteSection');
        let sectionCur = e.relatedTarget.closest(".section");
        if (!sectionCur) return;
        AcceptDeleteBtn.addEventListener('click', () => {
            sectionCur.remove();
    });
})


addSectionBtn.addEventListener("click", addSection);
let activeAddWorkModal = false;
modalAddWork.addEventListener("shown.bs.modal", (e) => {
    if (activeAddWorkModal) return;
    activeAddWorkModal = true;
    let targetBlock = e.relatedTarget.closest(".section_block_work");
    document.getElementById("acceptWorkAdding").addEventListener("click", () => addWorkCard(e, targetBlock))
})
} catch(err) {
    
}