const modalAddPortfolio = document.getElementById("addingPortfolioModal");
const modalDeletePortfolio = document.getElementById("portfolioDeleteAttentionModal");
const urlSplit = window.location.href.split("/");
const nickname = urlSplit[urlSplit.length - 1]
let changeAvatarFile = document.getElementById("changeAvatarFile");

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
changeAvatarFile.addEventListener('change', async (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    let previousFileName
    let img = document.getElementById("changeAvatarFileLabel").querySelector("img");
    let previousFile
    let newFilename
    let resFile

    try {
        previousFileName = img.src.match(/\/([^\/]+)\.[^\/\.]+/)[1];
        previousFile = "/"+img.src.match(/\/([^\/]+)(\.[^\/\.]+)$/)[1] + img.src.match(/\/([^\/]+)(\.[^\/\.]+)$/)[2];
    } catch (err) {
        
    }
    console.log("previousFileName", previousFileName)
    console.log("previousFile", previousFile)

    newFilename = makeFilename(10) +`.${getFileExtension(file.name)}`;
    resFile = new File([file], newFilename, {type: file.type});

    const formData = new FormData();
    formData.append('file', resFile);
    formData.append('avatarPath', newFilename);
    formData.append('previousFileName', previousFileName);
    formData.append('previousFile', previousFile);
    formData.append('nickname', nickname);

    try {
        const response = await fetch(`/profile/${nickname}/change-avatar-file`, {
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

