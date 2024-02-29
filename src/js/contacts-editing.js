const ContactsCollapseBtn = document.querySelector('.portfolio-container_info_image_contacts_collapse-btn');
const ContactsCollapseBlock = document.querySelector('.portfolio-container_info_image_contacts_collapse-block');

const AddContactBtn = document.querySelector('.portfolio-container_info_image_contacts_collapse-block_add-contact');
const Modal = document.getElementById('contactModal');

function collapseContacts() {
    ContactsCollapseBlock.hidden = !ContactsCollapseBlock.hidden;

    let transformClose = "translateY(-50%) rotate(90deg) scale(0.6)";
    let transformOpen = "translateY(-50%) rotate(0deg) scale(0.6)";
    ContactsCollapseBtn.firstElementChild.style.transform = (ContactsCollapseBlock.hidden) ? transformOpen : transformClose;
}

function addNewContact() {
    let name = document.getElementById('newContactName').value;
    let url = document.getElementById('newContactAddress').value;
    
    if (!name || !url) return;
    let contact = document.createElement('li');
    
    let contactTemplate = `<div class="portfolio-container_info_image_contacts_collapse-block_contact">
    <h3 class="contact-name">${name}</h3>
    <p class="contact-link">${url}</p>
    </div>`
    contact.innerHTML = contactTemplate;
    AddContactBtn.parentElement.before(contact);
}
Modal.addEventListener('shown.bs.modal', () => {
    const AcceptContactBtn = document.getElementById('acceptContact');
    AcceptContactBtn.addEventListener('click', addNewContact);
})

ContactsCollapseBtn.addEventListener("click", collapseContacts);
