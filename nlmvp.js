var mvpCanidates = ["Bryce Harper", "Nolan Arenado", "Ryan Zimmerman", "Joey Votto", "Daniel Murphy", "Marcell Ozuna", "Paul Goldschmidt"];

var harper = [0, " Bryce Harper is the NL MVP for the second time in his career!!"]; 
var ba1 = 325;
var hr1 = 20;
var rbi1 = 65;
var obp1 = 431;
var slg1 = 590;
var ops1 = 1.021;
var war1 = 3.5;
var hits1 = .99;

var arenado = [0, "Nolan Arenado is the NL MVP for the first time in his career!! Very well desreved."];
var ba2 = 301;
var hr2 = 17;
var rbi2 = 70;
var obp2 = 351;
var slg2 = 554;
var ops2 = .905;
var war2 = 3.7;
var hits2 = 1.06;

var zimmerman = [0, "Ryan Zimmerman is the NL MVP in an incredible bounce-back year!"];
var ba3= 330;
var hr3 = 19;
var rbi3 = 63;
var obp3 = 373
var slg3 = 596;
var ops3 = .969;
var war3 = 2.2;
var hits3 = .98;

var votto = [0, "Joey Votto, the ultimate on-base machine, has won the National League MVP for the second time in his career!! Finally living up to his enormous contract."];
var ba4 = 315;
var hr4 = 26;
var rbi4 = 68;
var obp4 = 427;
var slg4 = 631;
var ops4 = 1.058;
var war4 = 4.1;
var hits4 = .99;

var murphy = [0, "Daniel Murphy is the National League MVP! After a stellar 2016 season, he continued his succes right into the 2017 season."];
var ba5 = 342;
var hr5 = 14;
var rbi5 = 64;
var obp5 = 393;
var slg5 = 572;
var ops5 = .966;
var war5 = 1.6;
var hits5 = 1.11;

var ozuna = [0, "Marcell Ozuna has won the NL MVP after an arduose journey to succes, Ozuna has finally lived up to his potential."];
var ba6 = 316;
var hr6 = 23;
var rbi6 = 70;
var obp6 = 374;
var slg6 = 566;
var ops6 = .940;
var war6 = 3.4;
var hits6 = 1.07;

var goldschmidt = [0, "Paul Goldschmidt, 4 years after a second place finish in MVP voting, perhaps an unearned MVP title for Andrew McCutchen in the 2013 season, Goldi has finally earned the well desreved NL MVP title."];
var ba7 = 312;
var hr7 = 20;
var rbi7 = 67;
var obp7 = 428;
var slg7 = 577;
var ops7 = 1.005;
var war7 = 4.2;
var hits7 = .99;


var battingAvg = [ba1, ba2, ba3, ba4, ba5, ba6, ba7,];

function battingTitle(){
    return(battingAvg.sort());

}
battingTitle();

/*battingAvg[6] = battingChamp;
battingChamp = 13;
console.log(battingChamp);*/

var battingChampAvg = (battingTitle()[6]);

if(ba1==(battingTitle()[6])){
    harper[0] = harper[0]+13;
}
if(ba2==(battingTitle()[6])){
    arenado[0] = arenado[0]+13;
}
if(ba3==(battingTitle()[6])){
    zimmerman[0] = zimmerman[0]+13;
}
if(ba5==(battingTitle()[6])){
    murphy[0] = murphy[0]+13;
}
if(ba4==(battingTitle()[6])){
    votto[0] = votto[0]+13;
}
if(ba6==(battingTitle()[6])){
    ozuna[0] = ozuna[0]+13;
}
if(ba7==(battingTitle()[6])){
    goldschmidt[0] = goldschmidt[0]+13;
}

// var battinCanidates = [harper, arenado, zimmerman, votto, murphy, ozuna, goldschmidt];
// battinCanidates.sort();
// function battingMVP(battinCanidates){
//     return battinCanidates.sort();

// }

// var avgWinner = (battingMVP(battinCanidates)[6]);

// console.log(avgWinner);


 


var homerunTotal = [hr1, hr2, hr3, hr4, hr5, hr6, hr7];

function homerunKing(){
   return(homerunTotal.sort());
}
homerunKing();
var homerunChamp = (homerunKing()[6]);




if(hr1==(homerunKing()[6])){
    harper[0] = harper[0]+12;
}
if(hr2==(homerunKing()[6])){
    arenado[0] = arenado[0]+12;
}
if(hr3==(homerunKing()[6])){
    zimmerman[0] = zimmerman[0]+12;
}
if(hr5==(homerunKing()[6])){
    murphy[0] = murphy[0]+12;
}
if(hr4==(homerunKing()[6])){
    votto[0] = votto[0]+12;
}
if(hr6==(homerunKing()[6])){
    ozuna[0] = ozuna[0]+12;
}
if(hr7==(homerunKing()[6])){
    goldschmidt[0] = goldschmidt[0]+12;
}



var rbiTotal = [rbi1, rbi2, rbi3, rbi4, rbi5, rbi6, rbi7];

function rbiKing(){
   return(rbiTotal.sort());
}
rbiKing();
var rbiChamp = (rbiKing()[6]);




if(rbi1==(rbiKing()[6])){
    harper[0] = harper[0]+15;
}
if(rbi2==(rbiKing()[6])){
    arenado[0] = arenado[0]+15;
}
if(rbi3==(rbiKing()[6])){
    zimmerman[0] = zimmerman[0]+15;
}
if(rbi5==(rbiKing()[6])){
    murphy[0] = murphy[0]+15;
}
if(rbi4==(rbiKing()[6])){
    votto[0] = votto[0]+15;
}
if(rbi6==(rbiKing()[6])){
    ozuna[0] = ozuna[0]+15;
}
if(rbi7==(rbiKing()[6])){
    goldschmidt[0] = goldschmidt[0]+15;
}



var obpTotal = [obp1, obp2, obp3, obp4, obp5, obp6, obp7];

function obpKing(){
   return(obpTotal.sort());
}
rbiKing();
var obpChamp = (rbiKing()[6]);




if(obp1==(obpKing()[6])){
    harper[0] = harper[0]+12;
}
if(obp2==(obpKing()[6])){
    arenado[0] = arenado[0]+12;
}
if(obp3==(obpKing()[6])){
    zimmerman[0] = zimmerman[0]+12;
}
if(obp5==(obpKing()[6])){
    murphy[0] = murphy[0]+12;
}
if(obp4==(obpKing()[6])){
    votto[0] = votto[0]+12;
}
if(obp6==(obpKing()[6])){
    ozuna[0] = ozuna[0]+12;
}
if(obp7==(obpKing()[6])){
    goldschmidt[0] = goldschmidt[0]+12;
}



var slgTotal = [slg1, slg2, slg3, slg4, slg5, slg6, slg7];

function slgKing(){
   return(slgTotal.sort());
}
slgKing();
var slgChamp = (slgKing()[6]);




if(slg1==(slgKing()[6])){
    harper[0] = harper[0]+9;
}
if(slg2==(slgKing()[6])){
    arenado[0] = arenado[0]+9;
}
if(slg3==(slgKing()[6])){
    zimmerman[0] = zimmerman[0]+9;
}
if(slg5==(slgKing()[6])){
    murphy[0] = murphy[0]+9;
}
if(slg4==(slgKing()[6])){
    votto[0] = votto[0]+9;
}
if(slg6==(slgKing()[6])){
    ozuna[0] = ozuna[0]+9;
}
if(slg7==(slgKing()[6])){
    goldschmidt[0] = goldschmidt[0]+9;
}



var opsTotal = [ops1, ops2, ops3, ops4, ops5, ops6, ops7];

function opsKing(){
  return(opsTotal.sort());
}
opsKing();


var opsChamp = (opsKing()[6]);





if(ops1==(opsKing()[6])){
    harper[0] = harper[0]+15;
}
if(ops2==(opsKing()[6])){
    arenado[0] = arenado[0]+15;
}
if(ops3==(opsKing()[6])){
    zimmerman[0] = zimmerman[0]+15;
}
if(ops5==(opsKing()[6])){
    murphy[0] = murphy[0]+15;
}
if(ops4==(opsKing()[6])){
    votto[0] = votto[0]+15;
}
if(ops6==(opsKing()[6])){
    ozuna[0] = ozuna[0]+15;
}
if(ops7==(opsKing()[6])){
    goldschmidt[0] = goldschmidt[0]+15;
}



var warTotal = [war1, war2, war3, war4, war5, war6, war7];

function warKing(){
   return(warTotal.sort());
}
warKing();
var warChamp = (warKing()[6]);




if(war1==(warKing()[6])){
    harper[0] = harper[0]+15;
}
if(war2==(warKing()[6])){
    arenado[0] = arenado[0]+15;
}
if(war3==(warKing()[6])){
    zimmerman[0] = zimmerman[0]+15;
}
if(war5==(warKing()[6])){
    murphy[0] = murphy[0]+15;
}
if(war4==(warKing()[6])){
    votto[0] = votto[0]+15;
}
if(war6==(warKing()[6])){
    ozuna[0] = ozuna[0]+15;
}
if(war7==(warKing()[6])){
    goldschmidt[0] = goldschmidt[0]+15;
}

 


var hitsTotal = [hits1, hits2, hits3, hits4, hits5, hits6, hits7];

function hitsKing(){
   return hitsTotal.sort();
}
hitsKing();
var hitsChamp = (hitsKing()[6]);






if(hits1==(hitsKing()[6])){
    harper[0] = harper[0]+4;
}
if(hits2==(hitsKing()[6])){
    arenado[0] = arenado[0]+4;
}
if(hits3==(hitsKing()[6])){
    zimmerman[0] = zimmerman[0]+4;
}
if(hits5==(hitsKing()[6])){
    murphy[0] = murphy[0]+4;
}
if(hits4==(hitsKing()[6])){
    votto[0] = votto[0]+4;
}
if(hits6==(hitsKing()[6])){
    ozuna[0] = ozuna[0]+4;
}
if(hits7==(hitsKing()[6])){
    goldschmidt[0] = goldschmidt[0]+4;
}

var battinCanidates = [harper, arenado, zimmerman, votto, murphy, ozuna, goldschmidt];
battinCanidates.sort();
function battingMVP(battinCanidates){
     return(battinCanidates.sort());

 }
 


 var winnerMVP = (battingMVP(battinCanidates)[6]);

 console.log(winnerMVP[1]);

