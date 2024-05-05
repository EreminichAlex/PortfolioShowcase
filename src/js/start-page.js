const hamburgerMenu = document.querySelector(".header_hamburger-nav_list");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    if(!hamburger.classList.contains("hamburger_active")) {
        hamburger.classList.add("hamburger_active");
        hamburgerMenu.hidden = false;
        document.documentElement.style.overflowY = "hidden";
    } else {
        hamburger.classList.remove("hamburger_active");
        hamburgerMenu.hidden = true;
        document.documentElement.style.overflowY = "scroll";
    }
})
