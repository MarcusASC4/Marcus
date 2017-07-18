var prompt = require('prompt-sync')();

var teamArray = ["Red Sox", "Nationals", "Cubs", "Astros"];

var firstQuestion = ["2", "3", "4"];

var secondQuestion = ["Chris Sale", "Max Scherzer", "Jake Arrieta", "Dallas Keuchel"];


function UserPlayer(){
    var plyr = prompt("Who would you like to face? Choose WISLEY!");
    if (plyr=="Chris Sale"){
        console.log("You will be facing CHRIS SALE, the potential AL Cy Young winner!");
        
    }
    else if (plyr=="Max Scherzer"){
        console.log("You will be facing MAX SCHERZER, the potential NL Cy Young winner!");
      
    }
    else if (plyr=="Jake Arrieta"){
        console.log("You will be facing JAKE ARRIETA, the 2015 NL Cy Young winner!");
       
    }
else if (plyr=="Dallas Keuchel"){
    console.log("You will be facing DALLAS KEUCHEL, the 2015 AL Cy Young winner!");


}

var numAB = prompt("How many at bats did you get?");
   if (numAB == 2){
   console.log("You will face " + plyr + " 2 times." );
}
else if (numAB==3){
    console.log("You will face " + plyr + " 3 times.");
}
else if(numAB==4){
    console.log("You will face " + plyr + " 4 times.");
}

var team = prompt("What team would you like to play as?");
    if (team=="Red Sox"){
        console.log("You will face " + plyr + " as the Boston Red Sox, the top team in the AL East and 2013 World Series Champs!");
    }
    else if (team=="Nationals"){
        console.log("You will face " + plyr + " as the Washington Nationals, the top team in the NL East, and home of Bryce Harper.");
    }
    else if(team=="Cubs"){
        console.log("You will face " + plyr + " as the Chicago Cubs, the top team in the NL Central and 2016 World Series Champs!");
    }
    else if(team=="Astros"){
        console.log("You will face " + plyr + " as the Huston Astros, the top team in the AL West!");
    }

    var fate = prompt("Do you wish to see your fate?");
if (fate = "Yes"){
    console.log("You will face " + plyr + " as the " + team + ". As an un-informed booty hole, you chose to bat against " + plyr + " " + numAB + " times and went 0-7 with 7 strikeouts. You left the game in the 9th inning with a torn ACL!!!!!! Hahahahahahah");
}
else(console.log("You're an insignificant degenerate who doesn't care about you're mother.  :/"));


}
console.log(UserPlayer());






/*function UserNum(){
   var numAB = prompt("How many at bats did you get?");
   if (numAB == 2){
   console.log("You will face" + console.log(UserPlayer()) + "2 times." );
}
else if (numAB==3){
    console.log("You will face" + console.log(UserPlayer()) + "3 times.");
}
else if(numAB==4){
    console.log("You will face" + console.log(UserPlayer()) + "4 times.");
}
}
console.log(UserNum());*/