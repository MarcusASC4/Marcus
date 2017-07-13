

var marcus = "r"
var choices = ["r","p","s"];
var lena = choices[Math.floor(Math.random()*3)];
 

if (marcus=="p"){
    if (lena == "s"){
    console.log("lena wins!");
}
else if (lena == "r"){
    console.log("lena loses");
}
else{ console.log("tie")}
}

if (marcus=="r"){
    if (lena== "s"){
        console.log("lena loses");
    }
    else if (lena == "p"){
        console.log("lena wins");
    }
    else{console.log("tie")}
}
else if (marcus== "r"){
    if (lena=="s")
    console.log("marcus wins!");
}

if (marcus == "s"){
    if (lena == "r"){
        console.log("lena wins");
    }
else if (lena == "p"){
    console.log("lena loses");
}
else{console.log("tie")}
}
