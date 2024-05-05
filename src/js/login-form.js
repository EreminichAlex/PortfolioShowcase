import { addInvalidFeedback } from "./registration-form";

const loginForm = document.forms.login;

login.addEventListener("submit", (e)=> {
    e.preventDefault();

    const nickname = regForm.elements.nickname.value;
    const password = regForm.elements.password.value;

    if (!nickname) {
        addInvalidFeedback(regForm.elements.nickname);
        return;
    }
    if(!password) {
        addInvalidFeedback(regForm.elements.password);
        return;
    }
    loginForm.submit();
})