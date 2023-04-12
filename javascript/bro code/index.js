// console.log("Hello, World!"); // to print in console
// window.alert("Hello, World!"); // to display an pop up


// let fname = "Vishesh";
// let age = 19;
// console.log("Hello!, ",fname,"!");
// console.log("You are",age,"old");
// window.alert(fname);


let fname = window.prompt("Whats your name").toUpperCase();
let perpendicular;
let base;
document.getElementById("submit").onclick = () => {
    perpendicular = document.getElementById("perpendicular").value;
    base = document.getElementById("base").value;
    document.getElementById("p2").innerHTML = "Hypotenuse is " +Math.pow(Math.pow(perpendicular,2)+Math.pow(base,2),0.5);
}



document.getElementById("p1").innerHTML = "Hello! "+fname;
document.getElementById("p3").innerHTML = "Welcome to JavaScript world";


