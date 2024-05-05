const ContactsCollapseBtn = document.querySelector('.portfolio-container_info_image_contacts_collapse-btn');
const ContactsCollapseBlock = document.querySelector('.portfolio-container_info_image_contacts_collapse-block');

const AddContactBtn = document.querySelector('.portfolio-container_info_image_contacts_collapse-block_add-contact');
const Modal = document.getElementById('contactModal');

const match = window.location.href.match(/\/portfolio\/(\d+)/);
const portfolioId = match ? match[1] : null;

function collapseContacts() {
    ContactsCollapseBlock.hidden = !ContactsCollapseBlock.hidden;

    let transformClose = "translateY(-50%) rotate(90deg) scale(0.6)";
    let transformOpen = "translateY(-50%) rotate(0deg) scale(0.6)";
    ContactsCollapseBtn.firstElementChild.style.transform = (ContactsCollapseBlock.hidden) ? transformOpen : transformClose;
}

const isValidUrl = (str) => {
    try {
      return !!new URL(str);
    }
    catch (_) {
      return false;
    }
  };

async function deleteParentElement(e) {
    const formData = {
      link: e.target.previousElementSibling.href,
      linkName: e.target.previousElementSibling.textContent
    }

    try {
      const response = await fetch(`/portfolio/${portfolioId}/delete-contact`, {
      method: "DELETE",
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json',
      }
    })
    if (response.ok) {
      console.log("Успех");
    }
      
    } catch(err) {
      console.log(err)
    }

    e.target.parentElement.remove();
  }

async function addNewContact() {
    let name = document.getElementById('newContactName').value;
    let url = document.getElementById('newContactAddress').value;
    
    if (!name || !url) return;
    if (!isValidUrl(url)) {
        alert("Неверный адрес")
        return;
    }; 
    let contact = document.createElement('li');
    
    let contactTemplate = `<div class="portfolio-container_info_image_contacts_collapse-block_contact">
    <a class="contact-name" href="${url}" target="_blank">${name}</a>
    <img src="../icons/portfolio/delete-icon.svg" class="delete-contact">
    </div>`
    contact.innerHTML = contactTemplate;
    AddContactBtn.parentElement.before(contact);


    const formData = {
      linkName: name,
      link: url
    }

    try {
      const response = await fetch(`/portfolio/${portfolioId}/add-contact`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json',
      }
    })
    if (response.ok) {
      console.log("Успех");
    }
      
    } catch(err) {
      console.log(err)
    }
  }
  

  Modal.addEventListener('shown.bs.modal', () => {
    const AcceptContactBtn = document.getElementById('acceptContact');
    AcceptContactBtn.addEventListener('click', addNewContact);
  })
  
  ContactsCollapseBtn.addEventListener("click", collapseContacts);
  try {
    document.querySelectorAll(".delete-contact").forEach((i) => {
      i.addEventListener("click", (e) => {deleteParentElement(e)})
    })
  } catch (err) {
    console.log(err)
  }

