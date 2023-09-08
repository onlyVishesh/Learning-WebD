// Note - to see rotating image uncomment "rotating img trial" code

// to make navbar size change on scroll

// navbar start

window.onscroll = function () {
    scrollFunction();
};

let navHeight = document.getElementById("navbar").offsetHeight;
let navLogoHeight = document.getElementById("logo").offsetHeight;

function scrollFunction() {
    if (
        document.body.scrollTop > 40 ||
        document.documentElement.scrollTop > 40
    ) {
        document.getElementById("navbar").style.height = `${
            navHeight * 0.85
        }px`;
        document.getElementById("logo").style.height = `${
            navLogoHeight * 0.85
        }px`;
    } else {
        document.getElementById("navbar").style.height = `${
            navHeight / 0.95
        }px`;
        document.getElementById("logo").style.height = `${
            navLogoHeight / 0.85
        }px`;
    }
}

// to make ham menu responsive

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.addEventListener("click", () => {
    dropDownMenu.classList.toggle("open");
    const isOpen = dropDownMenu.classList.contains("open");

    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});


document.querySelectorAll(".dropdown-option").forEach((option) => {
    option.addEventListener("click", () => {
        dropDownMenu.classList.remove("open");
        const isOpen = dropDownMenu.classList.contains("open");

        toggleBtnIcon.classList = isOpen
            ? "fa-solid fa-xmark"
            : "fa-solid fa-bars";
    });
});


    // navbar end