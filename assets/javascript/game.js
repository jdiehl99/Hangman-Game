var computerChoices = ["PUG", "POODLE", "SCHNAUZER", "DOBERMAN", "BOXER", "CHIHUAHUA", "POMERANIAN", "BULLDOG", "LABRADOR", "DALMATION"];
var wins = 0;
var losses = 0;
var guessesRemaining = 15;
var guessedSoFar = [];
var chosenWord = [];

// select random dog from array
function newRand() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log('ComputerGuess', computerGuess);
    console.log('CG Length', computerGuess.length);
    // create visual representation of each letter in computer guess
    for (i = 0; i < computerGuess.length; i++) {
        chosenWord.push(" __ ");
        console.log(chosenWord);
    }
    document.querySelector("#chosenWord").innerHTML = chosenWord.join("");
}

// function to reset variables when game ends
function reset() {
    guessesRemaining = 15;
    guessedSoFar = [];
    chosenWord = [];

    document.querySelector("#guessesRemaining").innerHTML = "Guesses remaining: " + guessesRemaining;
    document.querySelector("#guessedSoFar").innerHTML = "Guessed so far: " + guessedSoFar;
}

function updateSoFar() {
    document.querySelector('#guessedSoFar').innerHTML = "Guessed so far: " + guessedSoFar + ', ';
};


function updateWord() {
    /*
var letterPosition = chosenWord.indexOf(userGuess);
console.log(letterPosition);
chosenWord.splice(letterPosition, 0, userGuess);
document.querySelector('#chosenWord').innerHTML = chosenWord.join("");

            var letterPosition = computerGuess.indexOf(userGuess);
            console.log(letterPosition);
*/



}


newRand();

// This function is run whenever the user presses a key
document.onkeyup = function (event) {
    // Determines which key was pressed and logs it
    var userGuess = event.key.toUpperCase();
    console.log('UserGuess', userGuess);

    guessesRemaining--; // reduce remaining guesses by 1
    document.querySelector("#guessesRemaining").innerHTML = "Guesses remaining: " + guessesRemaining;
    guessedSoFar.push(userGuess); // add chosen letter to guessed So Far

    // determine if there are still guesses available
    if (guessesRemaining > 0) {
        if (computerGuess.indexOf(userGuess) > -1) {
            alert("that letter is in my word");
            // determine how many times letter appears in word and at what locations
            var letterPosition = computerGuess.indexOf(userGuess);
            while (letterPosition != -1) {
                chosenWord.splice(letterPosition, 1, userGuess);
                console.log('letterPosition',letterPosition);
                letterPosition = computerGuess.indexOf(userGuess,letterPosition + 1);
            }
            document.querySelector('#chosenWord').innerHTML = chosenWord.join("");
        } else {
            alert("try again");
        }

    } else { // no guesses remaining, game is over
        losses++;
        document.querySelector("#losses").innerHTML = "Losses: " + losses + "";
        alert("Sorry you did not guess the word.  It was " + computerGuess);
        reset();
        newRand();
    }

}