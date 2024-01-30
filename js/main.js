// work with menu
const openMenuBtn = document.querySelector(".js-open-menu");
const menuElement = document.querySelector(".js-menu");
let menuToggler = 0;

const handleOpenMenu = () => {
    openMenuBtn.classList.add("is-menu-open");
    menuElement.classList.add("is-menu-open");
};

const handleCloseMenu = () => {
    openMenuBtn.classList.remove("is-menu-open");
    menuElement.classList.remove("is-menu-open");
};

openMenuBtn.addEventListener("click", () => {
    menuToggler = !menuToggler;

    if (menuToggler) {
        handleOpenMenu();
    } else {
        handleCloseMenu();
    }
});

// work with twenty twenty library
$(document).ready(function () {
    $(".before-after-container").twentytwenty();
});
