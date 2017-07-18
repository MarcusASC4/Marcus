var prompt = require('prompt-sync')();

function HockeyPlayer(name, health, offense, defense, overall, hof){
    this.name = name
    this.health = health
    this.offense = offense
    this.defense = defense
    this.overall = overall
    this.hof = hof
}
  
var crosby = new HockeyPlayer("Sidney Crosby", 6, 10, 9, 8.6, true); 
var ovi = new HockeyPlayer("Alex Ovenchkin", 9, 10, 5, 8, true);
var mcDavid = new HockeyPlayer("Connor McDavid", 7, 10, 8, 8.3, true); 
var kane = new HockeyPlayer("Patrick Kane", 9, 10, 7, 8.6, true); 
var malkin = new HockeyPlayer("Evgeni Malkin", 6, 10, 8, 8.3, true);
var tar = new HockeyPlayer("Vladamir Taresaenko", 10, 10, 5, 8.3, true); 

var nhlRoster = [crosby, ovi, mcDavid, kane, malkin, tar];

function printRoster(nhlRoster){
    console.log(nhlRoster);
}


// function injury(nhlRoster){
//     for(var i = 0; i<6; i++){
//    nhlRoster[i].health -= 2;
//     }
// }
// injury(nhlRoster);
// printRoster(nhlRoster);

// function random(upperbnd){
//     return (Math.floor(Math.random)*upperbnd);
// }









//THIS CODES CHALLENGE PROBLEM #1
// function userDamage(nhlRoster){
//     var damage = prompt("How much will you like to screw this dude up?"); 
//     if(damage >= 0){
//         for(var i=0; i < 6; i++){
//         nhlRoster[i].health -= damage;
//         }
//       }
//     }
// userDamage(nhlRoster);
// console.log(nhlRoster); 




// //THIS CODE TELLS THE USER IF THEY KILLED A PLAYER ON THE TEAM AFTER THE CODE ABOVE WAS RUN ^^^^^

// for(i = 0; i <6; i++){
//     if (nhlRoster[i].health <= 0)
//     console.log(nhlRoster[i].name + " was murderd by your lack of mercy booty!!");
// }










//THIS CODES CHALLENGE PROBLEM #2

function newPlayer(nhlRoster){
    var userInput = prompt("What player would you like to add to your team?");
    var userName = prompt("What is the player's official name?");
    var userHealth = prompt("What is the health of the new addition to your roster?");
    var userOffense = prompt("How skilled is your player at offense?");
    var userDefense = prompt("How skilled is your player when playing the defensive side of the puck?");
    var userOverall = prompt("How is your player ranked overall?");
    var userHOF = prompt("Is your player a potential HOF canidate?");
    if (userHOF=="true"){
        userHOF=true;
    }
    else if (userHOF=="false"){
        userHOF=false;
    }
    var nameReal = userInput;
    var nameReal = new HockeyPlayer(userName, userHealth, userOffense, userDefense, userOverall, userHOF); 
    nhlRoster[6] = nameReal;
}
newPlayer(nhlRoster);
console.log(nhlRoster);



//INSTEAD OF ALL OF THIS CRAP BELOW...

// ["Player: Alex Ovechkin", "Health: " + 9, "Offense " + 10, "Defense " + 3, "Overall " + 7, "HOF?: " + true], 
// ["Player: Connor McDavid", "Health: " + 7, "Offense " + 10, "Defense " + 8, "Overall " + 8.3, "HOF?: " + true], 
// ["Player: Patrick Kane", "Health: " + 9, "Offense " + 10, "Defense " + 7, "Overall " + 8.6, "HOF?: " + true], 
// ["Player: Evgeni Malkin", "Health: " + 6, "Offense " + 10, "Defense " + 8, "Overall " + 8, "HOF?: " + true], 
// ["Player: Vladamir Taresanko", "Health: " + 10, "Offense " + 10, "Defense " + 5, "Overall " + 8.3, "HOF?: " + true]];

//YOU CAN JUST USE THE CLASS TO GIVE YOU THE KEY FOR THE OBJECTS (PLAYERS) SO ITS A LOT EASIER TO STORE DATA
