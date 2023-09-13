const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const hexCreator = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * hex.length)];
    }

    return color;
};

document.querySelector(".btn").addEventListener("click", () => {
    let color = hexCreator();
    document.querySelector("main").style.backgroundColor = color;
    document.querySelector(".color").innerText = color;
});

document.querySelector(".hex").addEventListener("click", () => {
    let color = hexCreator();
    document.querySelector("main").style.backgroundColor = color;
    document.querySelector(".color").innerText = color;
});

// setInterval(() => {
//     let color = hexCreator();
//     document.querySelector("main").style.backgroundColor = color;
//     document.querySelector(".color").innerText = color;
// }, 500);
