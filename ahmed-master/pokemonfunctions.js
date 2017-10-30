function rand(upperBd){
    return Math.floor(Math.random()*upperBd);
}

function randLetter(){
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    var letter = alphabet[rand(alphabet.length)];

    return letter;
}

function randWord(){
    var word = "";

    for (var i=1; i<rand(100); i++){
        word = word + randLetter();
    }
    return word;
}

function randSentence(){
    var sentence = "";
    
    for (var i=1; i<rand(100); i++){
        sentence = sentence + " " + randWord();
    }
   return sentence + ".";
}

var firstPokemon = ["Dragonite",91,134];
var secondPokemon = ["Snorlax",110,160];

function pokeAttack(attacker,victim) {
    victim[2] -= attacker[1];
    return victim[2];
}

console.log(pokeAttack(firstPokemon,secondPokemon));