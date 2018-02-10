var targetNumber = "guess this";
var userTotal = 0;
var wins = 0;
var losses = 0;
var crystalValues = [];





function assignRandomNumber(min, max) {
    min= Math.ceil(min);
    max= Math.floor(max);
    targetNumber = Math.floor(Math.random() * (max - min)) + min;
    console.log(targetNumber);
    $("#target-number").text(targetNumber);
};

function assignCrystalValue(numberOfCrystals) {
    for( var i = 0; i < (numberOfCrystals); i++) {
       // var currentCrystalValue = "crystalValue" + (i + 1);
        crystalValues[i] = Math.floor(Math.random() * (12) + 1);
       console.log(crystalValues);  
    }
};

function crystalClicked(event) {
    console.log(event.target.id);
    if(event.target.id == "crystal-btn-1"){
        console.log(crystalValues);
        userTotal = userTotal + crystalValues[0];
    } else if (event.target.id == "crystal-btn-2"){
        console.log(crystalValues);
        userTotal = userTotal + crystalValues[1];
    } else if (event.target.id == "crystal-btn-3"){
        console.log(crystalValues);
        userTotal = userTotal + crystalValues[2];
    } else if (event.target.id == "crystal-btn-4"){
        console.log(crystalValues);
        userTotal = userTotal + crystalValues[3];
    }
    console.log(userTotal);
    $("#user-total").text(userTotal);
    if(userTotal === targetNumber) {
        console.log("win"); 
        wins = wins +1;
        $("#wins").text(wins);
        $("#result-message").text("Victory is yours!");
        window.setTimeout(gameReset, 3000);
    } else if( userTotal > targetNumber) {
        console.log("loss");
        losses = losses +1;
        $("#losses").text(losses);
        $("#result-message").text("You lose, sucka!");
        window.setTimeout(gameReset, 3000);
    };
};

function gameReset() {
    assignRandomNumber(19, 121);
    assignCrystalValue(4);
    userTotal = 0;
    $("#result-message").text("");
    $("#user-total").text(userTotal);



}












 


$(document).ready(function() {
    assignRandomNumber(19, 121);
    assignCrystalValue(4);
    $("#user-total").text(userTotal);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $(".crystals").on("click", function() {
        crystalClicked(event);
        console.log("crystal clicked");  
    });

    
});
