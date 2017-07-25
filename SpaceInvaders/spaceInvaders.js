var x1; 
var y1;
var x2; 
var y2; 
var x3; 
var y3; 
var ySpeed; 
var laserY; 
function setup(){
    createCanvas(500,500);
    background(100);
    x1 = 180; 
    y1 = 460;
    x2 = 250; 
    y2 = 400; 
    x3 = 320; 
    y3 = 460; 
    ySpeed=10; 
    laserY=y2; 
}





function Bullet(x, y){
    this.x = x; 
    this.y = y;
}


var bullets = [];

function keyPressed(){
console.log("we pressed a key");
}

function draw() {
    background(100);
    triangle(x1, y1, x2, y2, x3, y3); 

    if (keyIsDown(UP_ARROW)) {
        bullets.push(new Bullet(x2, laserY));
    }    
    
    for(var i=0; i<bullets.length; i++){
        console.log("shoot shoot die die");
        bullets[i] = rect(bullets[i].x, bullets[i].y, 1, 30) 
        bullets[i]-= ySpeed;
        
    }

    

    if (keyIsDown(LEFT_ARROW)){
            x1 -= 10;
            x2 -= 10; 
            x3 -= 10;
    }

    if (keyIsDown(RIGHT_ARROW)){
            x1 +=10; 
            x2 +=10; 
            x3 +=10;  
    }
    if (x3>500){
        x3=500;
        x2=430
        x1=360;
    }
    if(x1<0){
        x1=0
        x2=70
        x3=140
    }



}


// function mouseDragged(){
//     x1 = mouseX - 10; 
//     x2 = mouseX; 
//     x3 = mouseX +10; 
//     y1 = mouseY + 29; 
//     y2 = mouseY - 29; 
//     y3 = mouseY +29; 
// 




