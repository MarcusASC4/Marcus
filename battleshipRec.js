function setup(){
    createCanvas(400, 400);
    background(100);
}

var row1 = ["nu", "nu", "nu", "nu"];
var row2 = ["su", "nu", "nu", "nu"];
var row3 = ["su", "nu", "su", "su"]; 
var row4 = ["nu", "nu", "nu", "nu"];
var board = [row1, row2, row3, row4]; 



function draw(){
    strokeWeight(5);
    for (var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            if (board[i][j]=="su" || board[i][j]=="nu"){
                fill(200); 
            }
            else if(board[i][j]=="sc"){
                fill(255, 0, 0); 
            }
            else if(board[i][j]=="nc"){
                fill(0); 
            }
            rect(i*100, j*100, 100, 100);
        }
    }
}

function mouseClicked(){    

    if(board[floor(mouseX/100)][floor(mouseY/100)]=="nu"){
        board[floor(mouseX/100)][floor(mouseY/100)]="nc";
    }
    else if(board[floor(mouseX/100)][floor(mouseY/100)]=="su"){
        board[floor(mouseX/100)][floor(mouseY/100)]="sc";

    }
        }



    
    // rect(0, 0, 100, 100);
    // rect(0, 100, 100, 100);
    // rect(0, 200, 100, 100);
    // rect(0, 300, 100, 100);


    // rect(100, 0, 100,100);
    // rect(100, 100, 100,100);
    // rect(100, 200, 100,100);
    // rect(100, 300, 100,100);


    // rect(200, 0, 100,100);
    // rect(200, 100, 100,100);
    // rect(200, 200, 100,100);
    // rect(200, 300, 100,100);


    // rect(300, 0, 100, 100);
    // rect(300, 100, 100, 100);
    // rect(300, 200, 100, 100);
    // rect(300, 300, 100, 100);