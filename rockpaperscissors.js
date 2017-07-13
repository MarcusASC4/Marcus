var marcus = "rock"
var lena = "scissors"

if (marcus=="paper"){
    if (lena == "scissors"){
    console.log("lena wins!");
}
else if (lena == "rock"){
    console.log("lena loses");
}
else{ console.log("tie")}
}

if (marcus=="rock"){
    if (lena== "scissors"){
        console.log("lena loses");
    }
    else if (lena == "paper"){
        console.log("lena wins");
    }
    else{console.log("tie")}
}
else if (marcus== "rock"){
    if (lena=="scissors")
    console.log("marcus wins!");
}

if (marcus == "scissors"){
    if (lena == "rock"){
        console.log("lena wins");
    }
else if (lena == "paper"){
    console.log("lena loses");
}
else{console.log("tie")}
}
