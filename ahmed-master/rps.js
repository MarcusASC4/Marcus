var myChoice = 0;

var choices = [0,1,2];

var otherChoice = choices[Math.floor(Math.random()*3)];

console.log("user choice: "+myChoice);
console.log("computer choice "+otherChoice);

if(myChoice == 0){
    if(otherChoice == 0){
        console.log("It's a tie");
    }else if(otherChoice == 1){
        console.log("You lose");
    }else if(otherChoice == 2){
        console.log("You win");
    }else{
        console.log("Error: Invalid imput");
    }
}else if(myChoice == 1){
    if(otherChoice == 0){
        console.log("You win");
    }else if(otherChoice == 1){
        console.log("It's a tie");
    }else if(otherChoice == 2){
        console.log("You lose");
    }else{
        console.log("Error: Invalid imput");
    }
}else if(myChoice == 2 ){
    if(otherChoice == 0){
        console.log("You lose");
    }else if(otherChoice == 1){
        console.log("You win");
    }else if(otherChoice == 2){
        console.log("It's a tie");
    }else{
        console.log("Error: Invalid imput");
    }
}else{
    console.log("Error: invalid imput");
} 