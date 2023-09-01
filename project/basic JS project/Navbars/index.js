// Note - to see rotating image uncomment "rotating img trial" code

// to make navbar size change on scroll

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

const scrollToNav1 = () => {
    window.scrollTo({
        left: 0,
        top: document.querySelector(".brief").offsetHeight,
    });
};

document
    .querySelector(".explore")
    .addEventListener("click", () => scrollToNav1());

const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;

    if (scrollHeight > 300) {
        topLink.classList.add("show-link");
        topLink.addEventListener("click", () => {
            window.scrollTo({
                left: 0,
                top: 0,
            });
        });
    } else {
        topLink.classList.remove("show-link");
    }
});
