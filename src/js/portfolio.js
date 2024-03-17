const NameText = document.querySelector('.portfolio-container_info_text-content_name');
const PortfolioDescrText = document.querySelector('.portfolio-container_info_text-content_descr').firstElementChild;
const PortfolioDescrBtn = PortfolioDescrText.nextElementSibling;
const ChangeBackgroundColorBtn = document.querySelector(".bck-change-color");
const ColorInput = document.getElementById("colorInputBackground");

function rgbToHex(rgb) {
    const nums = rgb.match(/\b\d{1,3}\b/g);
    
    const hex = nums.map(num => {
        const hexNum = Number(num).toString(16);
        return hexNum.length === 1 ? "0" + hexNum : hexNum;
    }).join('');
    return '#' + hex;
}


function changeNamesFocus(targetText, maxlength = 30) {
    let input = document.createElement("input");
    let nameValue = targetText.textContent;
    input.type = "text";
    input.className = "changing-text";
    input.setAttribute("maxlength", maxlength);

    targetText.replaceWith(input);
    input.value = nameValue;

    function changeNamesBlur() {
        let input = document.querySelector('.changing-text');
        if (!input) return;
        let inputValue = (input.value === '') ? "X" : input.value;

        input.replaceWith(targetText);
        targetText.textContent = inputValue;
    }

    function changeNamesEnter(e) {
        if (e.code == "Enter") input.blur();
    }

    input.addEventListener("blur", changeNamesBlur)
    document.addEventListener("keydown", (e) => changeNamesEnter(e))
    input.focus();
}

function descrChangeFocus() {
    let textarea = document.createElement("textarea");
    PortfolioDescrText.replaceWith(textarea);
    textarea.value = PortfolioDescrText.textContent;
    textarea.className = "changing-descr";

    function descrChangeBlur() {
        let textarea = document.querySelector('.changing-descr');
        let textareaValue = textarea.value;
        textarea.replaceWith(PortfolioDescrText);
        PortfolioDescrText.textContent = textareaValue;
        
        PortfolioDescrBtn.hidden = false;
    }

    textarea.addEventListener("blur", descrChangeBlur);
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


ChangeBackgroundColorBtn.addEventListener("click", changeBackgroundColor)
PortfolioDescrBtn.addEventListener("click", descrChangeFocus);
NameText.addEventListener("click", () => changeNamesFocus(NameText, 30));

let sectionBlocks = document.querySelectorAll('.section_block');
sectionBlocks.forEach((element) => {
    element.addEventListener('mouseover', showAllTextWorkCard);
})



export {changeNamesFocus};