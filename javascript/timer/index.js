// console.log("Hello, World!"); // to print in console
// window.alert("Hello, World!"); // to display an pop up


// let fname = "Vishesh";
// let age = 19;
// console.log("Hello!, ",fname,"!");
// console.log("You are",age,"old");
// window.alert(fname);



for (let count = 0; count < 1000000; count++) {
    setInterval(function() {
        document.getElementById("count").innerHTML = count;
        }, 10000);
}



