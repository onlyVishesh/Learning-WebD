const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    links.classList.toggle("show-links");
});

const scrollTo = (element) => {
    window.scrollTo({
        left: 0,
        top: element,
    });
};
const homes = document.querySelectorAll(".HOME");

homes.forEach((home) => {
    home.addEventListener("click", () => {
        scrollTo(0);
        setTimeout(() => {
            location.reload();
        }, 900);
        links.classList.remove("show-links");
    });
});
const abouts = document.querySelectorAll(".ABOUT");
abouts.forEach((about) => {
    about.addEventListener("click", () => {
        scrollTo(0);
        links.classList.remove("show-links");
    });
});
const navbars = document.querySelectorAll(".NAVBARS");
navbars.forEach((navbar) => {
    navbar.addEventListener("click", () => {
        scrollTo(document.querySelector(".brief").offsetHeight);
        links.classList.remove("show-links");
    });
});
const contributes = document.querySelectorAll(".CONTRIBUTE");
contributes.forEach((contribute) => {
    contribute.addEventListener("click", () => {
        scrollTo(document.querySelector(".main").offsetHeight);
        links.classList.remove("show-links");
    });
});

document
    .querySelector(".explore")
    .addEventListener("click", () =>
        scrollTo(document.querySelector(".brief").offsetHeight)
    );

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
