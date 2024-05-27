const addSectionBtn = document.querySelector(".add-section");
const sectionsBlock = document.querySelector(".sections");
const acceptSectionDeleteBtn = document.getElementById("deleteSectionModal");
const modal = document.getElementById("deleteSectionModal");
const modalAddWork = document.getElementById("addingWorkModal");
const activateSectionsLimitModal = document.getElementById("sectionsLimitModalActivate");
const cancelWorkAdding = document.getElementById("cancelWorkAdding");

import {changeNamesFocus,descrChangeFocus} from "./portfolio.js";

const match = window.location.href.match(/\/portfolio\/(\d+)/);
const portfolioId = match ? match[1] : null;
function addSection() {
    let numOfNewSection = sectionsBlock.querySelectorAll(".section").length + 1;
    if (numOfNewSection > 10) {
        activateSectionsLimitModal.click();
        return;
    }
    let newSection = document.createElement("div");

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

    const newSectionName = newSection.querySelector(".section_title_name").textContent

    const formData = {
        sectionName: newSectionName,
        portfolioId: portfolioId
    }


    try {
        const response = fetch(`/portfolio/${portfolioId}/add-section`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
        'Content-type': 'application/json',
        }
    })
    if (response.ok) {
        console.log("Успех");
    }
    } catch(err) {
        console.log(err)
    }
}

let allSectionsNameEdit = document.querySelectorAll(".section_title_icon");
allSectionsNameEdit.forEach((elem) => {
    let sectionName = elem.previousElementSibling;
    function blurSectionName(e,targetText) {
    let input = document.querySelector('.changing-text');
    if (!input) return;

    let inputValue = (input.value === '') ? "X": input.value;

    const formData = {
        name: inputValue,
        previousName: sectionName.textContent,
        portfolioId: portfolioId
    } 

    if (e.target.value) {

        try {
            const response = fetch(`/portfolio/${portfolioId}/change-section-name`, {
            method: "PUT",
            body: JSON.stringify(formData),
            headers: {
            'Content-type': 'application/json',
            }
        })
        if (response.ok) {
            console.log("Успех");
        }
            
        } catch(err) {
            console.log(err)
        }
    }

    input.replaceWith(targetText);
    targetText.textContent = inputValue;
    }

    elem.addEventListener("click", (e) => changeNamesFocus(sectionName, 40, blurSectionName))
})

function makeFilename(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function getFileExtension(fileName) {
    const parts = fileName.split('.');
    return parts[parts.length - 1];
}

const form = document.forms.workForm;
form.formWorkName.addEventListener("input", (e)=> {
    let select = form.selectExistCard;

    if (e.target.value !== "") {
        select.setAttribute("disabled", true)
    } else if (e.target.value === "") {
        select.removeAttribute("disabled")
    }
})
form.formWorkLink.addEventListener("input", (e)=> {
    let select = form.selectExistCard;

    if (e.target.value !== "") {
        select.setAttribute("disabled", true)
    } else if (e.target.value === "") {
        select.removeAttribute("disabled")
    }
})
form.formFiles.addEventListener("input", (e)=> {
    let select = form.selectExistCard;

    if (e.target.value !== "") {
        select.setAttribute("disabled", true)
    } else if (e.target.value === "") {
        select.removeAttribute("disabled")
    }
})

try {
form.selectExistCard.addEventListener("input", (e)=> {
    let workName = form.formWorkName;
    let fileInput = form.formFiles;
    let workLink = form.formWorkLink;
    let workDescription = form.formDescription; 

    if (e.target.value !== "") {
        workName.setAttribute("disabled", true)
        fileInput.setAttribute("disabled", true)
        workLink.setAttribute("disabled", true)
        workDescription.setAttribute("disabled", true)
    } else if (e.target.value === "") {
        workName.removeAttribute("disabled")
        fileInput.removeAttribute("disabled")
        workLink.removeAttribute("disabled")
        workDescription.removeAttribute("disabled")
    }
})
} catch (err) {

}


async function changeWorkSection(workId, newSection) {
    const formData = {
        workId,
        newSection,
        portfolioId
    }

    try {
        const response = fetch(`/portfolio/${portfolioId}/change-work-section`, {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
        'Content-type': 'application/json',
        }
    })
    if (response.ok) {
        console.log("Успех");
    }
        
    } catch(err) {
        console.log(err)
    }
    cancelWorkAdding.click()
    location.reload()
}

async function addWorkCard(e, targetBlock) {
    const currentSection = e.relatedTarget.closest(".section").querySelector(".section_title_name").textContent;
    let form = document.forms.workForm;
    let workName = form.formWorkName.value;
    let fileInput = form.formFiles;
    let workLink = form.formWorkLink.value;
    let workDescription = form.formDescription.value; 
    let select = form.selectExistCard;

    let file = fileInput.files[0];
    if (Number.isInteger(+select.value)) {
        changeWorkSection(+select.value, e.relatedTarget.closest(".section").dataset.sectionId)
        return;
    }

    if (!file && !workLink) {
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

    let resFile
    let newFilename = null;
    if (file) {
        reader.readAsDataURL(file);
        newFilename = makeFilename(10) +`.${getFileExtension(file.name)}`;
        resFile = new File([file], newFilename, {type: file.type})
    } 
    (newFilename === null) ? null : `/${newFilename}` 
    
    const formData = new FormData();
    formData.append('file', resFile);
    formData.append('workName', workName);
    formData.append('workLink', workLink);
    formData.append('workDescription', workDescription);
    formData.append('workPath', newFilename);
    formData.append('sectionName', currentSection);

    try {
        const response = await fetch(`/portfolio/${portfolioId}/upload`, {
        method: "POST",
        body: formData,
    })
    if (response.ok) {
        console.log("Успех");
    }
        
    } catch(err) {
        console.log(err)
    }
    // let formDescr = form.formName;

    cancelWorkAdding.click()
    targetBlock.before(card);
    form.reset();
    location.reload()
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

    modal.addEventListener('shown.bs.modal', (e) => {
        const AcceptDeleteBtn = document.getElementById('acceptDeleteSection');
        let sectionCur = e.relatedTarget.closest(".section");
        if (!sectionCur) return;
        AcceptDeleteBtn.addEventListener('click', () => {
            AcceptDeleteBtn.previousElementSibling.click();
            const formData = {
                sectionName: sectionCur.querySelector(".section_title_name").textContent,
                portfolioId: portfolioId
            }
            try {
                const response = fetch(`/portfolio/${portfolioId}/delete-section`, {
                method: "DELETE",
                body: JSON.stringify(formData),
                headers: {
                'Content-type': 'application/json',
                }
            })
            if (response.ok) {
                console.log("Успех");
            }
            } catch(err) {
                console.log(err)
            }
            sectionCur.remove();
            location.reload();
    });
})

try {

    addSectionBtn.addEventListener("click", () => {
        addSection()
        location.reload()
    });
} catch (err) {
}
let activeAddWorkModal = false;
modalAddWork.addEventListener("shown.bs.modal", (e) => {
    if (activeAddWorkModal) return;
    activeAddWorkModal = true;
    let targetBlock = e.relatedTarget.closest(".section_block_work");
    document.getElementById("acceptWorkAdding").addEventListener("click", () => addWorkCard(e, targetBlock))
})
let allWorks = document.querySelectorAll(".section_block_work");
let allDeleteBtns = document.querySelectorAll(".section_block_work_delete-work");
let deleteWorkAttentionBtn = document.getElementById("deleteWorkAttentionBtn");
allDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        deleteWorkAttentionBtn.click();
        document.getElementById("acceptDeletingWork").addEventListener("click", () => {
            const currentCardId = e.target.closest(".section_block_work").dataset.workId;
            const formData = {
                portfolioId: portfolioId,
                workId: currentCardId
            }
    
            try {
                const response = fetch(`/portfolio/${portfolioId}/delete-work`, {
                method: "DELETE",
                body: JSON.stringify(formData),
                headers: {
                    'Content-type': 'application/json',
                    }
            })
            if (response.ok) {
                console.log("Успех");
            }
                
            } catch(err) {
                console.log(err)
            }
            location.reload()
        })
        
    })
})
allWorks.forEach((card)=> {
    if (card.querySelector(".section_block_work_add-work")) {
        return;
    }

    card.addEventListener("click", (e) => {
        const currentCard = e.target.closest(".section_block_work");
        const currentCardId = currentCard.dataset.workId;
        
        const formData = {
            portfolioId: portfolioId,
            cardId: currentCardId
        }

        try {
            const response = fetch(`/portfolio/${portfolioId}/watch-work`, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
            'Content-type': 'application/json',
            }
        })
        if (response.ok) {
            console.log("Успех");
        }
        } catch(err) {
            console.log(err)
        }

        card.addEventListener('click', () => {
            let btnOpenWorkModal = document.getElementById(`openWorkModal${currentCardId}`);
            btnOpenWorkModal.click();
        })

    })
    try {

    let changeWorkFile = document.getElementById(`inputDownloadNewFileWork${card.dataset.workId}`);
    changeWorkFile.addEventListener("change", async (e)=> {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        let previousFileName
        let previousFile
        let newFilename
        let resFile
        if (e.target.previousElementSibling.querySelector(".modal-body_img-work_download-file") === null) {
            previousFileName = e.target.previousElementSibling.src.match(/\/([^\/]+)\.[^\/\.]+/)[1];
            previousFile = "/"+e.target.previousElementSibling.src.match(/\/([^\/]+)(\.[^\/\.]+)$/)[1] + e.target.previousElementSibling.src.match(/\/([^\/]+)(\.[^\/\.]+)$/)[2];
            newFilename = makeFilename(10) +`.${getFileExtension(file.name)}`;
            resFile = new File([file], newFilename, {type: file.type});
        } else {
            previousFileName = e.target.previousElementSibling.action.match(/\/([^\/]+)\.[^\/\.]+/)[1];
            previousFile = "/"+e.target.previousElementSibling.action.match(/\/([^\/]+)(\.[^\/\.]+)$/)[1] + e.target.previousElementSibling.action.match(/\/([^\/]+)(\.[^\/\.]+)$/)[2];
            newFilename = makeFilename(10) +`.${getFileExtension(file.name)}`;
            resFile = new File([file], newFilename, {type: file.type});
        }

        const formData = new FormData();
        formData.append('file', resFile);
        formData.append('workPath', newFilename);
        formData.append('workId', card.dataset.workId);
        formData.append('portfolioId', portfolioId);
        formData.append('previousFileName', previousFileName);
        formData.append('previousFile', previousFile);

        try {
            const response = await fetch(`/portfolio/${portfolioId}/change-work-file`, {
            method: "PUT",
            body: formData,

        })
        if (response.ok) {
            console.log("Успех");
        }
            
        } catch(err) {
            console.log(err)
        }
    })
} catch(err) {
    
}



})

let allChangeWorkNameTextBtn = document.querySelectorAll(".modal-body_name-work_change-name-btn");
let allChangeWorkDescriptionBtn = document.querySelectorAll(".modal-body_description-work_change-descr-btn");

function changeNamesBlur(e,targetText) {
    let input = document.querySelector('.changing-text');
    if (!input) return;
    let inputValue = (input.value === '') ? "Без названия" : input.value;

    const formData = {
        workId: e.target.closest(".modal").id.match(/\d+/g)[0],
        workName: inputValue,
        portfolioId: portfolioId
    } 

    try {
        const response = fetch(`/portfolio/${portfolioId}/change-work-name`, {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
        'Content-type': 'application/json',
        }
    })
    if (response.ok) {
        console.log("Успех");
    }
        
    } catch(err) {
        console.log(err)
    }


    input.replaceWith(targetText);
    targetText.textContent = inputValue;
}

function changeDescrBlur(e, target) {
    let textarea = document.querySelector('.changing-descr');
    let textareaValue = textarea.value;
    textarea.replaceWith(target);
    target.textContent = textareaValue;

    const formData = {
        workDescription: textareaValue,
        workId: e.target.closest(".modal").id.match(/\d+/g)[0],
        portfolioId: portfolioId
    }

    try {
        const response = fetch(`/portfolio/${portfolioId}/change-work-description`, {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
        'Content-type': 'application/json',
        }
    })
    if (response.ok) {
        console.log("Успех");
    }
    } catch(err) {
        console.log(err)
    }
}

allChangeWorkNameTextBtn.forEach((btn) => {
    let nameField = btn.previousElementSibling;
    btn.addEventListener("click", () => changeNamesFocus(nameField, 80, changeNamesBlur))
})
allChangeWorkDescriptionBtn.forEach((btn) => {
    let descrField = btn.previousElementSibling;
    btn.addEventListener("click", (e) => descrChangeFocus(e,descrField, changeDescrBlur))
})
cancelWorkAdding.addEventListener("click", ()=> {
    let workName = form.formWorkName;
    let fileInput = form.formFiles;
    let workLink = form.formWorkLink;
    let workDescription = form.formDescription; 

    workName.removeAttribute("disabled")
    fileInput.removeAttribute("disabled")
    workLink.removeAttribute("disabled")
    workDescription.removeAttribute("disabled")

    form.selectExistCard.removeAttribute("disabled");
    form.reset();
})

export {makeFilename, getFileExtension}