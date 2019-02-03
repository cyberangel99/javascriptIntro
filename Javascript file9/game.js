window.onload = function () {
    //Clear cookies on page reload
    delCookie('guess');
    delCookie('guesses');
    document.getElementById("start").onclick = startGame;
    document.getElementById("guessBtn").onclick = checkGuess;
    document.getElementById("from").focus(); //Set focus on from box
}

function startGame() {
    var from = document.getElementById("from");
    var to = document.getElementById("to");
    var guess = document.getElementById("guess");
    //Initalize guesses array
    setCookie('guesses', JSON.stringify([]));
    from.focus();
    if (from.value.length < 1 || to.value.length < 1) {
        alert('Please enter a to and from value to start')
    } else {
        document.getElementById("messageBox").value = 'Please guess a number, enter it, and press Guess.'
        generateGuess(parseInt(from.value, 10), parseInt(to.value, 10));
        guess.focus();
    }
}

function generateGuess(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    while (true) {
        //If the min/max value does not equal the random number
        if (min !== random && max !== random) {
            setCookie('guess', random);
            break;
        } else {
            //Generate another number
            random = Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
}

function checkGuess() {
    var guess = document.getElementById("guess").value;
    var from = parseInt(document.getElementById("from").value, 10);
    var to = parseInt(document.getElementById("to").value, 10);
    var actual_guess = getCookie('guess');
    var guessInt = parseInt(guess, 10);
    var actualGuessInt = parseInt(actual_guess, 10);
    //Add guess attempt to the guesses array
    var guesses = JSON.parse(getCookie('guesses'));
    guesses.push(guess)
    //Set guesses to new array of guesses
    setCookie('guesses', JSON.stringify(guesses))
    //Display the numbers guessed
    document.getElementById('msgbox').value = `Number(s) Guessed: ${guesses.join(" ")}`
    if (guessInt === actualGuessInt) {
        //This means you guessed correctly
        alert(`Correct! It took you ${guesses.length} attempts to guess this number.`)
        //Clear cookies on page reload
        delCookie('guess');
        delCookie('guesses');
        //Clear form
        document.getElementById('guessForm').reset();
        document.getElementById("from").focus();
    } else {
        //You guessed outside the to/from range...
        if (guess <= from || guess >= to) {
            alert('The number you entered is not in the To-From range. Please enter a valid number.')
        }
        if (guessInt < actualGuessInt) {
            document.getElementById("messageBox").value = `My number is greater than ${guess}.`
        }
        if (guessInt > actualGuessInt) {
            document.getElementById("messageBox").value = `My number is less than ${guess}.`
        }
        //Reset textbox and set focus on from box
        document.getElementById("guess").focus(); //Set focus on guess box
        document.getElementById("guess").value = ""; //Reset guess field
    }
}