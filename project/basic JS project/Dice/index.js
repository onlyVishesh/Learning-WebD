let n;

document.getElementById("roll").onclick = function() {
    n = Math.floor(Math.random() * 6 + 1);

    document.getElementById("dice").innerHTML = n;
}  