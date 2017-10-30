myPokemonRoster = ["charizard","beedrill","raichu","vaporeon","snorlax"];
var firstToFight = myPokemonRoster[0];
var secondToFight = myPokemonRoster[1];

console.log(firstToFight);
console.log(secondToFight);

myPokemonRoster.pop();
myPokemonRoster.push("blastoise","arcanine");
var rosterSize = myPokemonRoster.length;