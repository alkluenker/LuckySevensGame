
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
    
    
    
    //var for the user to choose the amount they start with from the form
    var startingBet = document.getElementById("startingbet").value;
    
    //var for the new amount, starting with the startingBet
    var bet = startingBet;

    console.log(startingBet);
    
    //var for all the bets to be stored
    var betsArray = [];
    console.log(betsArray);

    betsArray.push(startingBet);


    //show error if number entered isn't an integer > 0
    if ((startingBet == 0) || (startingBet <0) || (startingBet % 1 !== 0)) {
        showError();
        hideResults();
    }


    //roll the dice
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

        //push each new dollar amount into the betsArray
        //betsArray.push(startingBet);
        betsArray.push(bet);
        console.log(bet);

    }

    //find the max amount of money won in the betsArray
    var findMax = Math.max.apply(Math, betsArray);
    //find the number of rolls at the highest amount won by finding the index of that
    var findIndexOfMax = betsArray.indexOf(findMax);
    //var findIndexOfMax = betsArray.indexOf(findMax) + 1;

    
    //total number of rolls equals however many bets were pushed to the betsArray
    var numberOfRolls = betsArray.length - 1;
    

    

    function showResults() {
        //give the user the option to play again; change what the button says to "play again"
        document.getElementById("playButton").innerHTML = "Play Again";
        //display the results table
        document.getElementById("results").style.display = "inline";
        //show the starting bet
        document.getElementById("resultsstartingbet").innerHTML = "$" + startingBet +".00";
        //show the number of total rolls
        document.getElementById("resultstotalrolls").innerHTML = numberOfRolls;
        //show the max amount won
        document.getElementById("resultshighest").innerHTML = "$" +     findMax + ".00";
        //show the index of the highest amount won
        document.getElementById("resultsrollhighest").innerHTML = findIndexOfMax;

        if (findMax == startingBet) {
            
            findIndexOfMax = 0;
            document.getElementById("resultsrollhighest").innerHTML = 0;
        }
    };
    
    //only show results if there was a valid number entered
    if ((startingBet > 0) && (startingBet % 1 == 0)) {
        
        showResults();
        
    }

    
    
    
    
    
}

