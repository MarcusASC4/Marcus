function setup(){
    createCanvas(500, 500);
    background(200);
   xSpeed = random(-10, 10);
    ySpeed = random(-10, 10);
}

var x = 250; 
var y = 250;
var xSpeed;
var ySpeed;
function draw(){
    background(200);
    ellipse(x, y, 100, 100);
  
 x = x+xSpeed; 
y=y+ySpeed; 
if (x>=500){
    xSpeed = -5;
}
else if (x<=0){
    xSpeed =5;
}

if (y>=500){
    ySpeed = -5;
}
else if (y<=0){
    ySpeed=5;
}

   


}
