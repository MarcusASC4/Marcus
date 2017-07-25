var x1; 
var y1;
var x2; 
var y2; 
var x3; 
var y3; 

function setup(){
    createCanvas(500,500);
    background(100);
x1 = 240; 
y1 = 499;
x2 = 250; 
y2 = 441; 
x3 = 260; 
y3 = 499; 

console.log(x1);
}





function draw(){
background(100);
triangle(x1, y1, x2, y2, x3, y3); 
  
}

// function mouseDragged(){
//     x1 = mouseX - 10; 
//     x2 = mouseX; 
//     x3 = mouseX +10; 
//     y1 = mouseY + 29; 
//     y2 = mouseY - 29; 
//     y3 = mouseY +29; 
// }



