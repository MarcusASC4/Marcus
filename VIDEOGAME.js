var money=100.00

function updateStats(){
    $("#stats").text("HP: " + hp + " // Gold: " + gold + " //Ogres Slain: " + numDef); 
}

function attack(){
    if(hp>0){
        if(Math.random()*100>gold){
            $("#ogres").prepend("<p>You won! + 10 gold.</p>"); 
        }
    }
}


function setup(){
    //title
    $("body").append("<h1>Welcome to Ogre Fighter v.1.0</h1>"); 
    //stats
    $("body").append("<div><h3>STATS</h3><p id='stats'></p></div>"); 
    //Attack Button
    $("body").append("<button onclick='attack()'>Attack the Ogre!</button>"); 
    //Container for Images
    $("body").append("<div id='ogres'></div>"); 
    updateStats(); 
}

$(document).ready(setup);