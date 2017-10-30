var charizard = {
    "attack":"blaze",
    "hp":266,
    "legendary":false,
    "types":["fire","flying"]
};

function Superhero(realName,power,deadRels){
    this.realName = realName;
    this.power = power;
    this.deadRels = deadRels;
}

var superman = new Superhero("Clark Kent","everything",2);
var batman = new Superhero("Bruce Wayne","money",2);
var spiderman = new Superhero("Peter Parker","spider things",3);