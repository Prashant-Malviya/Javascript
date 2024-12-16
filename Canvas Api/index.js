// Canvas Api = means for drawing graphics used for animations, games, data visualization

let canvas = document.getElementById("myCanvas");

let context = canvas.getContext("2d");


// context.strokeStyle = "purple"
// context.lineWidth = 10
// context.beginPath();
// context.moveTo(0,0);
// context.lineTo(250,250);
// context.lineTo(250,500);
// context.moveTo(500,0);
// context.lineTo(250,250)
// context.stroke();


// triangle using canvas 
// context.strokeStyle = "grey";
// context.fillStyle = "yellow"
// context.lineWidth = 10;
// context.beginPath();
// context.moveTo(250,0);
// context.lineTo(0,250)
// context.lineTo(500,250);
// context.lineTo(250,0)
// context.stroke();
// context.fill();


// Draw rectangle

context.fillStyle = "red"
context.fillRect(0,0,250,250);
context.strokeStyle = "black";
context.strokeRect(0,0,250,250)

context.fillStyle = "yellow"
context.fillRect(0,250,250,250);
context.strokeStyle = "black";
context.strokeRect(0,250,250,250)

context.fillStyle = "green"
context.fillRect(250,250,250,250);
context.strokeStyle = "black";
context.strokeRect(250,250,250,250)

context.fillStyle = "black"
context.fillRect(250,0,250,250);
context.strokeStyle = "black";
context.strokeRect(250,0,250,250)








