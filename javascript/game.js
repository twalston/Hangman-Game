var newGameButton = document.getElementById('new-game-button');
var placeholders= document.getElementById('placeholders');
var guessedLetters= document.getElementById('guessed-letters');
var $guessesLeft= document.getElementById('guesses-left');
var wins= document.getElementById('wins');
var losses= document.getElementById('losses');

var wordBank = ['Taylor', 'Ethan', 'Walston', 'North Carolina', 'East Carolina'];
var wins = 0;
var losses = 0;
var gameRunning = false;
var pickedWord = '';
var pickedWordPlaceholderArr = [];
var guessedLetterBank = [];
var incorrectLetterBank = [];

function newGame() {
    console.log("placeholders, ", placeholders)
    guessesLeft= 30;
    $guessesLeft.textContent =guessesLeft;
    gameRunning = true; 
    
    pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];   
    guessedlLetterBank = [];
    pickedWordPlaceholderArr = [];
    console.log("INSIDE NEWGAME: " + guessesLeft);
    for (var i = 0; i < pickedWord.length; i++) {
        if (pickedWord[i] === ' ') {
          pickedWordPlaceholderArr.push(' ');
        } else {
          pickedWordPlaceholderArr.push('_');
        }
    }
    document.getElementById('placeholders').innerText = pickedWordPlaceholderArr;
}

//





//placeholders.text = pickedWordPlaceholderArr.join('');
console.log("PLACEHOLDERS.CONTENT: " + $guessesLeft);
guessedLetters.textContent = incorrectLetterBank;

function letterGuess(letter) {
    console.log(letter);

    if (gameRunning === true && guessedLetterBank.indexOf(letter) === -1) { 
      guessedLetterBank.push(letter);
      console.log("guesseddletetr", guessedLetterBank)
      for (var i = 0; i < pickedWord.length; i++) {
          if (pickedWord[i].toLocaleLowerCase() === letter.toLocaleLowerCase()) {
              pickedWordPlaceholderArr[i] = pickedWord[i];
          }
      }


    document.getElementById('placeholders').innerText = pickedWordPlaceholderArr;
    
    checkIncorrect(letter);

    }
    else {
      if (!gameRunning) {
        alert("The game isn't running, click on the New Game Button to start over.");
      } else {
        alert("You've already guessed this letter, try a new one!");
      }
    }
}

function checkIncorrect(letter) {
    if (
    pickedWordPlaceholderArr.indexOf(letter.toLowerCase()) === -1 
    &&
    pickedWordPlaceholderArr.indexOf(letter.toUpperCasse()) === -1
)   {
    guessesLeft --;
    incorrectLetterBank.push(letter);
    guessedLetters.textContent = incorrectLetterBank.join (' ');
    guessesLeft.textContent = guessesLeft;
    }
}

function checkLoss () {
    if (guessesLeft === 0) {
      losses++;
      gamesRunning = false;
      losses.textContent = losses;
      placeholders.textContent = pickedWord;
    }
    checkWin();
}

function checkWin() {
    if (pickedWord.toLowerCase() === pickedWordPlaceholderArr.join('').toLowerCase ())
    {
        wins++;
        gamesRunning = false;
        wins.textContent = wins;

    }
}
newGameButton.addEventListener('click', newGame);

document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      letterGuess(event.key);
    }
}