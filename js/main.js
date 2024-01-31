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
    if ($.fn.twentytwenty) {
        $(".before-after-container").twentytwenty();
    } else {
        return;
    }
});

// work with change pricing toggle
const changePricingBtn =
    document.querySelector(".js-choose-pricing-toggle") || null;
let toggle = 0;

if (changePricingBtn) {
    changePricingBtn.addEventListener("click", () => {
        toggle = !toggle;

        const oneMonthText = document.querySelector(".js-one-month");
        const threeMonthText = document.querySelector(".js-three-month");
        const oneMonthPricing = document.querySelector(
            ".js-plan-list-one-month"
        );
        const threeMonthPricing = document.querySelector(
            ".js-plan-list-three-month"
        );

        if (toggle) {
            changePricingBtn.classList.add("active");
            oneMonthText.classList.remove("active");
            threeMonthText.classList.add("active");
            oneMonthPricing.classList.remove("active");
            threeMonthPricing.classList.add("active");
        } else {
            changePricingBtn.classList.remove("active");
            threeMonthText.classList.remove("active");
            oneMonthText.classList.add("active");
            threeMonthPricing.classList.remove("active");
            oneMonthPricing.classList.add("active");
        }
    });
}

// work with faq
const faqSection = document.querySelector(".js-faq") || null;

if (faqSection) {
    const faqItem = document.querySelectorAll(".js-faq-item");

    faqItem.forEach((elem) => {
        let faqToggle = 0;
        elem.addEventListener("click", (event) => {
            const clickedElement = event.target;
            const currentItem = event.currentTarget;

            if (clickedElement.classList.contains("js-open-faq-answer")) {
                faqToggle = !faqToggle;

                if (faqToggle) {
                    currentItem.classList.add("active");
                    clickedElement.classList.add("active");
                } else {
                    currentItem.classList.remove("active");
                    clickedElement.classList.remove("active");
                }
            }
        });
    });
}
