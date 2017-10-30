var prompt = require('prompt-sync')();
var mashArray = ["Final Destination","Battlefield","Pokemon Stadium 2", "Castle siege"];
var firstQuestion = ["1","2","3","4"];
var secondQuestion = ["Yoshi","Kirby","Fox","Link"];
var fighters = ["You","your opponent"];

function rand(upperBd){
    return Math.floor(Math.random()*upperBd);
}

function askQuestions(){
    firstQuestion.push(prompt("How many times will you fight? "));
    secondQuestion.push(prompt("Who will you choose to fight "));
}

function displayAnswer(){
    var stage = mashArray[rand(mashArray.length)];
    var hits = firstQuestion[rand(firstQuestion.length)];
    var opponent = secondQuestion[rand(secondQuestion.length)];
    console.log("You fought " + opponent + " in the " + stage + " and hit them " + hits + " time(s). Too bad. Mewtwo wins!");
}

askQuestions();
displayAnswer();
    