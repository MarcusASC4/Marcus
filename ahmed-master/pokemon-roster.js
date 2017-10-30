var pokemonRoster = [["Blastoise","water",79,83,100,false],["Raichu","electric",60,90,55,false],["Arcanine","fire",90,110,80,false],["Alakazam","phychic",55,50,45,false],["Hitmonchan","fighting",50,105,75,false],["Snorlax","normal",160,110,65,false]];

function loop(upperBd){
    for(i=0; i<upperBd.length; i++){
        console.log("NAME:" + upperBd[i][0] + " TYPE:" + upperBd[i][1] + " HP:" + upperBd[i][2] + " ATK:" + upperBd[i][3] + " DEF:" + upperBd[i][4] + " LEGEND:" + upperBd[i][5]);
    }
}

loop(pokemonRoster);