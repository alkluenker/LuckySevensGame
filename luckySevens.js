
function hideResults() {
    document.getElementById("results").style.display = "none";
}

hideResults();

function hideError() {
    document.getElementById("error").style.display = "none";
}

function showError() {
    document.getElementById("error").style.display = "inline";
    var errorMessage = "Error: Starting bet needs to be an integer greater than 0"
    var errorText = document.getElementById("error");
    errorText.innerText = errorMessage
}


function play() {

    hideError();
    hideResults();
    
    //vars to roll the dice
    /*var rollDiceOne = Math.floor(Math.random() * 6) + 1;
    var rollDiceTwo = Math.floor(Math.random() * 6) + 1;
    var rollDice = rollDiceOne + rollDiceTwo;*/
    
    //var for the user to choose the amount they start with from the form
    var startingBet = document.getElementById("startingbet").value;
    
    //var for the new amount, starting with the startingBet
    var bet = startingBet;
    
    //var for all the bets to be stored
    var betsArray = [];

    if ((startingBet == 0) || (startingBet <0) || (startingBet % 1 !== 0)) {
        showError();
        hideResults();
    }

    function roll() {

        rollDiceOne = Math.floor(Math.random() * 6) + 1;
        rollDiceTwo = Math.floor(Math.random() * 6) + 1;
        rollDice = rollDiceOne + rollDiceTwo;

    }

   
    
    //while loop to make the program run as long as there is still money left
    while (bet > 0) {
        roll();
        if(rollDice === 7) {

            //bet+=4
            //for some reason, the first one will increase by more than it should?????? if bet 1, will increase by 14, if 2, will increase by 24, 3, by 34?????

            bet++;
            bet++;
            bet++;
            bet++;
            
        } else { 
            bet--
            
        }
        betsArray.push(bet)
        console.log(bet);

    }

    var findMax = Math.max.apply(Math, betsArray);
    var findIndexOfMax = betsArray.indexOf(findMax) + 1;
    var numberOfRolls = betsArray.length;
    

    

    function showResults() {
        document.getElementById("playButton").innerHTML = "Play Again";
        document.getElementById("results").style.display = "inline";
        document.getElementById("resultsstartingbet").innerHTML = "$" + startingBet +".00";
        document.getElementById("resultstotalrolls").innerHTML = numberOfRolls;
        document.getElementById("resultshighest").innerHTML = "$" +     findMax + ".00";
        document.getElementById("resultsrollhighest").innerHTML = findIndexOfMax;
    };

    if ((startingBet > 0) && (startingBet % 1 ==0)) {

        showResults();

    }
    

}

