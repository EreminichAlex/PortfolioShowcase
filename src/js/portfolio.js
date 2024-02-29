const NameText = document.querySelector('.portfolio-container_info_text-content_name');
const PortfolioDescrText = document.querySelector('.portfolio-container_info_text-content_descr').firstElementChild;
const PortfolioDescrBtn = PortfolioDescrText.nextElementSibling;

function changeNamesFocus() {
    let input = document.createElement("input");
    let nameValue = NameText.textContent;
    input.type = "text";
    input.className = "changing-text";
    input.setAttribute("maxlength", "30");

    NameText.replaceWith(input);
    input.value = nameValue;

    function changeNamesBlur() {
        let input = document.querySelector('.changing-text');
        if (!input) return;
        let inputValue = (input.value === '') ? "X" : input.value;

        input.replaceWith(NameText);
        NameText.textContent = inputValue;
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

PortfolioDescrBtn.addEventListener("click", descrChangeFocus);
NameText.addEventListener("click", changeNamesFocus);



