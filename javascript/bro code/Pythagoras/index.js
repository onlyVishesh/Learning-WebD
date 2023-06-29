

document.getElementById("submit").onclick = function() {
    let p = document.getElementById("perpendicular").value;
    p = Number(p)
    let b = document.getElementById("base").value;
    b = Number(b)


    let h = Math.sqrt(Math.pow(p,2) + Math.pow(b,2));

    document.getElementById("p2").innerHTML = `hypotenuse is ${h}`;

}