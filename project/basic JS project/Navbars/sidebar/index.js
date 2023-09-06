const toggleBtn = document.querySelector(".nav-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const links = document.querySelector(".links");

toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
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
        sidebar.classList.remove("show-sidebar");
    });
});
const abouts = document.querySelectorAll(".ABOUT");
abouts.forEach((about) => {
    about.addEventListener("click", () => {
        scrollTo(0);
        sidebar.classList.remove("show-sidebar");
    });
});
const navbars = document.querySelectorAll(".NAVBARS");
navbars.forEach((navbar) => {
    navbar.addEventListener("click", () => {
        scrollTo(document.querySelector(".brief").offsetHeight);
        sidebar.classList.remove("show-sidebar");
    });
});
const contributes = document.querySelectorAll(".CONTRIBUTE");
contributes.forEach((contribute) => {
    contribute.addEventListener("click", () => {
        scrollTo(document.querySelector(".main").offsetHeight);
        sidebar.classList.remove("show-sidebar");
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


