let count = 0;

document.querySelectorAll(".btns").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.currentTarget.classList.contains("dec")) {
            count--;
        } else if (e.currentTarget.classList.contains("inc")) {
            count++;
        } else if (e.currentTarget.classList.contains("reset")) {
            count = 0;
        }

        document.querySelector(".count").innerText = count;
        if (count < 0) {
            document.querySelector(".count").style.color = "red";
        } else if (count > 0) {
            document.querySelector(".count").style.color = "green";
        } else {
            document.querySelector(".count").style.color = "black";
        }
    });
});
