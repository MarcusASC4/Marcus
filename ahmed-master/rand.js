function rand(upperBd){
    return Math.floor(Math.random()*upperBd);
}

var lunches = ["chinese", "caribbean", "mexican", "italian", "pizza", "soul food", "habchi"];

var lunchToday = lunches[rand(lunches.length)];

console.log(lunchToday);