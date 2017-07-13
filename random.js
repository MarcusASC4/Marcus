console.log(Math.floor(Math.random()*6));
/*^gives you a whole number lower than 6 and more than 0*/ 
/*Math.floor is rounding down to lower whole number, even though the number may need to be rounded up*/  







function games(){
    console.log(Math.floor(Math.random()*6));
}
games();


function dice(upperbnd){
    console.log(Math.floor(Math.random()*upperbnd));
}
dice(6);
/*^This function is a short cut to running the program as many times as you want in a short amount of time*/ 

function coinflip(){
    console.log(Math.floor(Math.random()*2));
}
coinflip();


function dnd(){
    console.log(Math.floor(Math.random()*20));
}
dnd();










function rand(upperbound){
    return Math.floor(Math.random()*upperbound)
    /*^this will actually use (in the rest of the program below) the random number that was generated, rather than 
    simply printing it using the "return" feature*/
}

var lunches = ["ching", "carib", "mex", "bread sticks", "soul food", "italian"];
var lunch_today = lunches[rand(lunches.length)];
/*^this is the FUNCTION'S CALL. It is also the deciding variable on what lunch you get, using the "rand" function
and its upperbound = the # of lunches*/ 
console.log(lunch_today);


