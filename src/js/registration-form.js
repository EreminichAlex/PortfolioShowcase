const regForm = document.forms.registration;

regForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nickname = regForm.elements.nickname.value;
    const email = regForm.elements.email.value;
    const password = regForm.elements.password.value;
    const confirmPassword = regForm.elements.confirmPassword.value;

    if (!nickname) {
        addInvalidFeedback(regForm.elements.nickname);
        return;
    }
    if (!email) {
        addInvalidFeedback(regForm.elements.email);
        return;
    }
    if(!password) {
        addInvalidFeedback(regForm.elements.password);
        return;
    }
    if (!confirmPassword || confirmPassword !== password) {
        addInvalidFeedback(regForm.elements.confirmPassword);
        return;
    }
    regForm.submit();
})


export function addInvalidFeedback(elem) {
    elem.style.borderColor = "#e32727"
    elem.style.background = "#ffb4b4"
    elem.onfocus = () => {
        elem.style.borderColor = null;
        elem.style.background = null;
    } 
}
