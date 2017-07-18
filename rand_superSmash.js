var prompt = require('prompt-sync')();
var mashArray = ["Finals", "Level 2", "Level 1"];
var q1 = ["Mario", "Bowser"];
var q2 = ["2", "3"];
 
 function rand(upperbound){
    return Math.floor(Math.random()*upperbound);
 }

 function displayAnswer(){
     var stage = mashArray[rand(mashArray.length)];
     var hits = q2[rand(q2.length)];
     var oppenent = q1[rand(q1.length)];
     console.log(" You fought " + oppenent + " in " + stage + " and hit them " + hits + " times. Too Bad! Mewtwo Won.");
 }
displayAnswer();
