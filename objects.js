var charzard = {
    "attack": "blaze", 
    "hp":266, 
    "lengendary":false, 
    "types":["fire", "flting"]
};

// //^^Prints charzard's legendary status, which is false. 

// //Notes:
// //Objects are always stored in curly brackets, (KEY:VALUE PAIR), the KEY almost turns into a variable.

function Pokemon(hitpoints, power){
    this.realHP = hitpoints; 
    this.realPower = power; 
}
var charzard = new Pokemon(266, "awsomeness");

//^^^^^each "perameter" you pass is like filling in a blank on a form




