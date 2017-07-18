


// Pseudo Code...
// assign variable money to 1000
// array for items
// while(money > 0){
//     prompt user for item to buy
//     subtract ammount from var money
//     store item in array
// }







// var counter =1;

// while(counter<11){
//     console.log(counter);
//     counter++;
// }

var prompt = require('prompt-sync')(); //^simply loads the file
var money = 1000;
var items = [];
while(money>99){
    console.log("You have money, buy my shirt! It's $100" +"You can Also buy the computer for $400!" ); 
    var answer = prompt("Which one do you want to buy, stupid bum?");
    if (answer== "Shirt"){
        money-= 100;
        items.push("Shirt"); 
        console.log("You purchased one of our premire shirts. You have" + money + "left.");
    }
    else if (answer == "Computer"){
        money-= 400;
        item.push("Computer");
        console.log("You have purchased one of the fastest computers in the world. You have" + money + "left.");
    }
    else {
        console.log("You are a complete butt hole! How could you come into my store and NOT BUY ANYTHING!?!!?!");
}

//var n = prompt('How many more times? ');
//This ^^^^lets the user input their own information on the command line;