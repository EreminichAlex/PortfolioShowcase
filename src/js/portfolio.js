const ContactsCollapseBtn = document.querySelector('.portfolio-container_info_image_contacts_collapse-btn');
const ContactsCollapseBlock = document.querySelector('.portfolio-container_info_image_contacts_collapse-block');
const UsernameText = document.querySelector('.portfolio-container_info_text-content_username');
const NameText = document.querySelector('.portfolio-container_info_text-content_name');

function collapseContacts() {
    ContactsCollapseBlock.hidden = !ContactsCollapseBlock.hidden;

    let transformClose = "translateY(-50%) rotate(90deg) scale(0.6)";
    let transformOpen = "translateY(-50%) rotate(0deg) scale(0.6)";
    ContactsCollapseBtn.firstElementChild.style.transform = (ContactsCollapseBlock.hidden) ? transformOpen : transformClose;
}

function changeNamesFocus() {
    let input = document.createElement("input");
    let usernameValue = UsernameText.textContent;
    input.type = "text";
    input.className = "changing-text";
    input.setAttribute("maxlength", "20")

    UsernameText.replaceWith(input);
    input.value = usernameValue;

}

function changeNamesBlur() {
    
}



ContactsCollapseBtn.addEventListener("click", collapseContacts);



