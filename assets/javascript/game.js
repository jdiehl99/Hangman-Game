var computerChoices = ["PUG","POODLE","BOSTON TERRIER","SCHNAUZER","DOBERMAN","BOXER","CHIHUAHUA","JACK RUSSELL","POMERANIAN","BULLDOG","GOLDEN RETRIEVER","LABRADOR","DALMATION"];
var wins = 0;
var losses = 0;
var guessesRemaining = 15;
var guessesSoFar = [];

// select random dog from array
function newRand() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log('ComputerGuess', computerGuess);
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

newRand();
