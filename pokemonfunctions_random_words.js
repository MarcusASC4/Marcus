





function rand(upperbnd){
    return Math.floor(Math.random()*upperbnd);
}

function randLetter(){
    var alphabt = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var letter = alphabt[rand(alphabt.length)];
   return letter; 
}
randLetter();

function randWord(){
var string = "";
for(i=0; i<(rand(10)); i++){
    string += randLetter();       /*this also says "string = string + randLetter();". It is just a shorter way to write it.*/
}
return string;
}

console.log(randWord());


function randSentence(){
var stringSent = ""; 
    for(i=0; i<(rand(10)); i++){
        stringSent += randWord();
    }
    return stringSent;
}
console.log(randSentence());

/*var rand1Words = ['W','You','Help','Nike', 'Stop','Joke','Go'];
var rand2Words = [' wow',' you',' help',' nike', ' stop',' joke',' go'];
var Word1 = rand1Words[randSentence(rand1Words.length)];
var Word2 = rand2Words[randSentence(rand2Words.length)];
console.log(Word1, Word2*(Math.floor(Math.random()*rand1Words.length)));*/



var array1 = ["pikachu", 23, 100];
var array2 = ["diamond", 50, 200];

function pokeAttack(array1, array2){ /*you must put the array names in the perameter so that it can pass through the function*/
    array2[2]-= array1[1]; /*put the indicies for array2 and array1, this tells you which index you are subrtacting from*/ 
    return array2; /*return it to let array2's new information be used in the rest of the promgram*/ 
}
console.log(pokeAttack(array1, array2));