var letters = [
               "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
               "p","q","r","s","t","u","v","w","x","y","z"
               ];
var numGuesses = 9;
var guessSoFar = [];
var wins = 0;
var losses = 0;

var letterToGuess = null;


var updateGuessesSoFar = function() {
      // Here we take the guesses the user has tried -- then display it as letters separated by commas.
      document.getElementById("guess-input").innerHTML = guessSoFar.join(", ");
    };

//Capture what the  user press & computer guesses
document.onkeyup = function() {
	
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);

	var computerGuess = letters[Math.floor(Math.random() * letters.length)];
	console.log(computerGuess); 

	// guessSoFar.push(letter);
	// updateGuessesSoFar();

		document.getElementById("guesses-left").innerHTML = numGuesses;
		if (userGuess === computerGuess) {
		wins++;
		document.getElementById("win-counter").innerHTML = wins;
		console.log("win" + wins);
		// reset();
	}
		else if (numGuesses > 0 && userGuess != computerGuess){
		numGuesses--;
		guessSoFar.push("guess-input");
		document.getElementById("loss-counter").innerHTML  = losses;
		console.log("wrong" + losses);
		// reset();
	}
};
// // Function will be called when we reset everything
//     var reset = function() {
//       totalGuesses = 9;
//       guessesLeft = 9;
//       guessedLetters = [];
//       updateLetterToGuess();
//       updateGuessesLeft();
//       updateGuessesSoFar();
//     };

	
