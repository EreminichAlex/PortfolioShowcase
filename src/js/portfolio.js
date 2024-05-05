const NameText = document.querySelector('.portfolio-container_info_text-content_name');
const NameTextBtnChange = document.querySelector('.portfolio-container_info_text-content_name_img-change');
const ChangeBackgroundColorBtn = document.querySelector(".bck-change-color");
const ColorInput = document.getElementById("colorInputBackground");
const PortfolioDescrText = document.querySelector('.portfolio-container_info_text-content_descr').firstElementChild;
const PortfolioDescrBtn = PortfolioDescrText.nextElementSibling;
const ModalRemovingPortfolio = document.getElementById("portfolioDeleteAttentionModal");

const match = window.location.href.match(/\/portfolio\/(\d+)/);
const portfolioId = match ? match[1] : null;

let name = NameText.textContent;
let description = PortfolioDescrText.textContent;


function rgbToHex(rgb) {
    const nums = rgb.match(/\b\d{1,3}\b/g);
    
    const hex = nums.map(num => {
        const hexNum = Number(num).toString(16);
        return hexNum.length === 1 ? "0" + hexNum : hexNum;
    }).join('');
    return '#' + hex;
}

function changeNamesBlur(e,targetText) {
    let input = document.querySelector('.changing-text');
    if (!input) return;
    let inputValue = (input.value === '') ? "X" : input.value;

    const formData = {
        name: e.target.value
    } 

    if (e.target.value !== name) {

        try {
            const response = fetch(`/portfolio/${portfolioId}/change-name`, {
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

function changeNamesFocus(targetText, maxlength = 30, blurF) {
    let input = document.createElement("input");
    let nameValue = targetText.textContent;
    input.type = "text";
    input.className = "changing-text";
    input.setAttribute("maxlength", maxlength);

    targetText.replaceWith(input);
    input.value = nameValue;

    

    input.addEventListener("blur", (e) => blurF(e,targetText))
    input.focus();
}

ModalRemovingPortfolio.addEventListener("shown.bs.modal", (e) => {
    document.getElementById("acceptRemovingPortfolio").addEventListener("click", (e) => {
        e.target.previousElementSibling.click()
        const formData = {
            portfolioId: portfolioId
        }
        try {
            const response = fetch(`/portfolio/${portfolioId}/delete-portfolio`, {
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
    })
})

function descrChangeBlur(e) {
    let textarea = document.querySelector('.changing-descr');
    let textareaValue = textarea.value;
    textarea.replaceWith(PortfolioDescrText);
    PortfolioDescrText.textContent = textareaValue;

    const formData = {
        description: textareaValue
    }

    if ( PortfolioDescrText.textContent !== description) {
        try {
            const response = fetch(`/portfolio/${portfolioId}/change-description`, {
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
    
    PortfolioDescrBtn.hidden = false;
}

function descrChangeFocus(e,target, blurF) {
    let textarea = document.createElement("textarea");
    console.log(e.target)
    console.log(target)
    target.replaceWith(textarea);
    textarea.value = target.textContent;
    textarea.className = "changing-descr";

    

    textarea.addEventListener("blur", () => blurF(e,target));
    PortfolioDescrBtn.hidden = true;
    textarea.focus();
}

function changeBackgroundColor() {
    ColorInput.hidden = false;
    document.body.style.overflowY = "hidden";
    let currentBackgroundRGB = getComputedStyle(ColorInput.closest(".container")).getPropertyValue("background-color");
    ColorInput.value = rgbToHex(currentBackgroundRGB);

    ColorInput.focus();
    ColorInput.addEventListener('blur', () => {
        ColorInput.closest(".container").style.backgroundColor = ColorInput.value;
        ColorInput.hidden = true;
        console.log("ColorInput.value", ColorInput.value)

        const formData = {
            backgroundColor: ColorInput.value
        }

        try {
            const response = fetch(`/portfolio/${portfolioId}/change-backgroundColor`, {
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

        document.body.style.overflowY = "visible";
    })
}

// ЗАКИНУТЬ ЭТУ ФУНКЦИЮ И ДОБАВЛЕНИЕ ОБРАБОТЧИКА В ФУНКЦИЮ СОЗДАНИЯ КАРТОЧЕК РАБОТ
function showAllTextWorkCard(e) {
    if (!e.target.closest('.section_block_work')) return;
    if (e.target.closest('.section_block_work').querySelector('.section_block_work_add-work')) return;


    let currentBlock = e.target.closest('.section_block_work');
    let blockCover = currentBlock.querySelector('.section_block_work_cover');
    let blockText = currentBlock.querySelector('.section_block_work_name');

    currentBlock.style.overflow = 'visible'

    blockCover.style.opacity = '0.1';
    
    blockText.style.position = 'absolute';
    blockText.style.top = 10 + "px";
    blockText.style.left = 10 + "px";
    blockText.style.right = 10 + "px";

    currentBlock.addEventListener('mouseout', ()=> {
    blockText.style.position = 'static';
    blockText.style.top = null;
    blockText.style.left = null;
    blockText.style.right = null;
    currentBlock.style.overflow = 'hidden'
    blockCover.style.opacity = null;
    })
}

try {

    ChangeBackgroundColorBtn.addEventListener("click", changeBackgroundColor)
    PortfolioDescrBtn.addEventListener("click", (event) => descrChangeFocus(event, PortfolioDescrText, descrChangeBlur));
    NameTextBtnChange.addEventListener("click", () => {changeNamesFocus(NameText, 30, changeNamesBlur)});
} catch (err) {
    console.log(err)
}

let sectionBlocks = document.querySelectorAll('.section_block');
sectionBlocks.forEach((element) => {
element.addEventListener('mouseover', showAllTextWorkCard);
})
// }



export {changeNamesFocus,descrChangeFocus};