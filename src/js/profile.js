const modalAddPortfolio = document.getElementById("addingPortfolioModal");
function addPortfolioCard(e, targetBlock) {
    let form = document.forms.portfolioForm;
    let portfolioName = form.formPortfolioName.value;
    let userName = form.formPortfolioUserName.value;
    let descr = form.formPortfolioDescr.value;

    if (!portfolioName) {
        form.formPortfolioName.style.borderColor = 'red';
        form.formPortfolioName.focus();
        form.formPortfolioName.addEventListener("blur", () => {form.formPortfolioName.style.borderColor = null})
        return;
    }

    if(!userName) userName = "Имя Фамилия";

    let card = createPortfolioCardTemplate();
    card.querySelector(".section_block_work_name").textContent = portfolioName;

    targetBlock.before(card);
    form.reset();
}

function createPortfolioCardTemplate() {
    let card = document.createElement("div");
    card.className = "section_block_work";
    card.innerHTML = `
        <div class="section_block_work_cover"><img src="../icons/social-icons/portfolio-icon.png" alt="Обложка портфолио"></div>
        <div class="section_block_work_name">%НАЗВАНИЕ%</div>
    `
    return card;
}


let activeAddPortfolioModal = false;

try {
    modalAddPortfolio.addEventListener("shown.bs.modal", (e) => {
        if (activeAddPortfolioModal) return;
        activeAddPortfolioModal = true;
        let targetBlock = e.relatedTarget.closest(".section_block_work");
        document.getElementById("acceptPortfolioAdding").addEventListener("click", () => addPortfolioCard(e, targetBlock))
    });
} catch(err) {
}