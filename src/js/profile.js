const modalAddPortfolio = document.getElementById("addingPortfolioModal");
const modalDeletePortfolio = document.getElementById("portfolioDeleteAttentionModal");

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

    if(!userName) {
        form.formPortfolioUserName.style.borderColor = 'red';
        form.formPortfolioUserName.focus();
        form.formPortfolioUserName.addEventListener("blur", () => {form.formPortfolioUserName.style.borderColor = null})
        return;
    };

    let card = createPortfolioCardTemplate();
    card.querySelector(".section_block_work_name").textContent = portfolioName;

    targetBlock.before(card);
    form.submit();
    form.reset();
}

function createPortfolioCardTemplate() {
    let card = document.createElement("div");
    card.className = "section_block_work";
    card.innerHTML = `
        <a class="section_block_work_link" href="%link%">
            <div class="section_block_work_cover"><img src="../icons/social-icons/portfolio-icon.png" alt="Обложка портфолио"></div>
            <div class="section_block_work_name">%НАЗВАНИЕ%</div>
        </a>
    `
    return card;
}

let activeAddPortfolioModal = false;

modalAddPortfolio.addEventListener("shown.bs.modal", (e) => {
    if (activeAddPortfolioModal) return;
    activeAddPortfolioModal = true;
    let targetBlock = e.relatedTarget.closest(".section_block_work");
    document.getElementById("acceptPortfolioAdding").addEventListener("click", () => addPortfolioCard(e, targetBlock))
});


