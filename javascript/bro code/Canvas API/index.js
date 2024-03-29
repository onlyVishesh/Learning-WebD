// Canvas API - a means for drawing graphics 
//              used for animation, games, data visualization

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d")


// Draw lines

// context.strokeStyle = "yellow"
// context.lineWidth = 10
// context.beginPath();
// context.moveTo(0,0);
// context.lineTo(250,250);
// context.lineTo(100,200);
// context.moveTo(500,500);
// context.lineTo(200,475);
// context.lineTo(210,225);
// context.stroke()


// Drawing Triangle 
// context.fillStyle = "lightblue"
// context.lineWidth = 10
// context.strokeStyle = "gray"

// context.beginPath();
// context.moveTo(0,250);
// context.lineTo(500,250);
// context.lineTo(250,0);
// context.lineTo(0,250);
// context.stroke()
// // To fill Triangle 
// context.fill()


// //DRAW RECTANGLE
// context.fillStyle = "black";
// context.fillRect(0, 0, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(0, 0, 250, 250);

// context.fillStyle = "red";
// context.fillRect(0, 250, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(0, 250, 250, 250);

// context.fillStyle = "green";
// context.fillRect(250, 250, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(250, 250, 250, 250);

// context.fillStyle = "blue";
// context.fillRect(250, 0, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(250, 0, 250, 250);


// //DRAW CIRCLE
// //(x, y, r, sAngle, eAngle, counterclockwise)
// context.fillStyle = "lightblue";
// context.strokeStyle = "darkblue";
// context.lineWidth = 10;
// context.beginPath();
// context.arc(250, 250, 200, 0, 2 * Math.PI);
// context.stroke();
// context.fill();

//DRAW TEXT
context.font = "50px MV Boli";
context.fillStyle = "grey";
context.textAlign = "center";
context.fillText("YOU WIN!", canvas.width / 2, canvas.height / 2);


