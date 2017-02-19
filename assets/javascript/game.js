var letters = [
               "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
               "p","q","r","s","t","u","v","w","x","y","z"
               ];
var guessSoFar = [];

var wins = 0;
var losses = 0;

var numGuesses = 9;

//Capture what the user press
document.onkeyup = function() {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		console.log(userGuess);
		
		guessSoFar.push(userGuess);
		console.log(guessSoFar);
		for (var i = 0; i < guessSoFar.length; i++) { 
    			document.getElementById('guess-input').innerHTML = guessSoFar[i];
		}
		

		var computerGuess = letters[Math.floor(Math.random() * letters.length)];

		console.log(computerGuess);

		document.getElementById('guesses-left').innerHTML = numGuesses;
		if (userGuess === computerGuess) {
			wins++;
			numGuesses--;
			document.getElementById('win-counter').innerHTML = wins;
			alert("win" + wins);
		}
		if (userGuess != computerGuess){
			losses--;
			numGuesses--;
			document.getElementById('loss-counter').innerHTML  = losses;
			alert("wrong" + losses);
		}
	}

