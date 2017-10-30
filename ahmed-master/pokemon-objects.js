function Pokemon(name,type,hp,attack,defense,legend){
    this.name = name;
    this.type = type
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.legend = legend;
}

var dugtrio = new Pokemon("Dugtrio","ground",35,80,50,false);
var primeape = new Pokemon("Primeape","fighting", 65,105,60,false);
var machamp = new Pokemon("Machamp","fighting",90,130,80,false);
var hypno = new Pokemon("Hypno","psychic",85,73,70,false);
var electrode = new Pokemon("Electrode","electric",60,50,70,false);
var tauros = new Pokemon("Tauros","normal",75,100,95,false);

var pokeRoster = [dugtrio,primeape,machamp,hypno,electrode,tauros];

function printRoster(roster){
    console.log("printing roster");
    for (var i =0; i<roster.length; i++){
        console.log(roster[i]);
    }
}

function pokemonAttack(roster){
    for (var i=0;i<roster.length; i++){
        roster[i].hp -= 10;
    }
    printRoster(roster);
}

printRoster(pokeRoster);
console.log("Pokemon Attacking");
pokemonAttack(pokeRoster);