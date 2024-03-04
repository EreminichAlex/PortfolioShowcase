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
console.log(ColorInput.closest(".container").style.backgroundColor)

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

ChangeBackgroundColorBtn.addEventListener("click", changeBackgroundColor)
PortfolioDescrBtn.addEventListener("click", descrChangeFocus);
NameText.addEventListener("click", () => changeNamesFocus(NameText, 30));



export {changeNamesFocus};