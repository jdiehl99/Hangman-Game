var computerChoices = ["PUG","POODLE","SCHNAUZER","DOBERMAN","BOXER","CHIHUAHUA","POMERANIAN","BULLDOG","LABRADOR","DALMATION"];
var wins = 0;
var losses = 0;
var guessesRemaining = 15;
var guessesSoFar = [];
var chosenWord = [];

// select random dog from array
function newRand() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log('ComputerGuess', computerGuess);
    console.log('CG Length',computerGuess.length);
    // create visual representation of each letter in computer guess
    for (i=0;i<computerGuess.length;i++) {
        chosenWord.push(" __ ");
        console.log(chosenWord);
    }
}

// function to reset variables when game ends
function reset() {
    guessesRemaining = 15;
    guessedSoFar = [];

    document.querySelector("#guessesRemaining").innerHTML = "Guesses remaining: " + guessesRemaining;
    document.querySelector("#guessedSoFar").innerHTML = "Guessed so far: " + guessedSoFar;
}

function updateSoFar() {
    document.querySelector('#guessedSoFar').innerHTML = "Guessed so far: " + guessedSoFar + ', ';
};

/*
function updateWord() {
    document.querySelector('#chosenWord').innerHTML = "insert word here";
}
*/

newRand();

// This function is run whenever the user presses a key
document.onkeyup = function (event) {
    // Determines which key was pressed and logs it
    var userGuess = event.key.toLowerCase();
    console.log('UserGuess', userGuess);

    guessesRemaining--; // reduce remaining guesses by 1
    document.querySelector("#guessesRemaining").innerHTML = "Guesses remaining: " + guessesRemaining;
    guessedSoFar.push(userGuess); // add chosen letter to guessed So Far

    // determine if there are still guesses available
    if (guessesRemaining > 0) {

    }
      

}