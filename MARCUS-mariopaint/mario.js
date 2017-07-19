function setup(){
    createCanvas(500, 500);
    background(100);
}



function mouseDragged(){
    fill(random(225), random(225), random(225));
    ellipse(mouseX, mouseY, random(225), random(225));

}

var button = createButton("reset");
button.mouseRelease(resetSketch);
