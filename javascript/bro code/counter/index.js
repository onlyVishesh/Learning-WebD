let count = 0;

document.getElementById("dec").onclick = () => {
    count -= 1;
    document.getElementById("count").innerHTML = count;
}

document.getElementById("reset").onclick = () => {
    count = 0;
    document.getElementById("count").innerHTML = count;

}

document.getElementById("inc").onclick = () => {
    count += 1;
    document.getElementById("count").innerHTML = count;

}