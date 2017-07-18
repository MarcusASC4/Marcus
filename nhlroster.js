var prompt = require('prompt-sync')();

// var steven_stamkos = ["Steven Stamkos", "Health: " + 2, "Offense: " + 8, "Defense: " + 4, "Overall " + 7, "HOF? " + false]; 
// var nicholas_backstrom = ["Player: Nicholas Backstrom", "Health: " + 9, "Offense: " + 9, "Defense: " + 8, "Overall " + 8.6, "HOF? " + true];

// var nhlRoster = [["Name, Health, Offense, Defense, Overall, Potential HOF"], 
//                 ["Player: Sidney Crosby", "Health: " + 6, "Offense " + 10, "Defense " + 10, "Overall " + 8.6, "HOF?: " + true], 
//                 ["Player: Alex Ovechkin", "Health: " + 9, "Offense " + 10, "Defense " + 3, "Overall " + 7, "HOF?: " + true], 
//                 ["Player: Connor McDavid", "Health: " + 7, "Offense " + 10, "Defense " + 8, "Overall " + 8.3, "HOF?: " + true], 
//                 ["Player: Patrick Kane", "Health: " + 9, "Offense " + 10, "Defense " + 7, "Overall " + 8.6, "HOF?: " + true], 
//                 ["Player: Evgeni Malkin", "Health: " + 6, "Offense " + 10, "Defense " + 8, "Overall " + 8, "HOF?: " + true], 
//                 ["Player: Vladamir Taresanko", "Health: " + 10, "Offense " + 10, "Defense " + 5, "Overall " + 8.3, "HOF?: " + true]];
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
var stamkos = new HockeyPlayer("Steven Stamkos", 2, 9, 4, 7, false);
var backstrom = new HockeyPlayer("Nicholas Backstrom", 9, 9, 8, 8.6, true);

var nhlRoster = [crosby, ovi, mcDavid, kane, malkin, tar]; 

function userPlayer(nhlRoster){
     
    var player = prompt("What player would you like to add to the roster?");
    if (player == "Stamkos"){
        nhlRoster.push(stamkos);
    }

    else if (player == "Backstrom"){
        nhlRoster.push(backstrom);
    }
}
console.log(userPlayer(nhlRoster)); 