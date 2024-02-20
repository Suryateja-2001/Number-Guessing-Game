let input = document.getElementById('input-number');
let btn = document.getElementById('btn');
let guessType = document.getElementById('guess-type');
let count = [0, 0, 0];
let totalGuess = document.querySelector(".ele-1");
let correctGuess = document.querySelector(".ele-2");
let WrongGuess = document.querySelector(".ele-3");
btn.addEventListener('click', () => {
    let randomVal = Math.floor(Math.random() * 10) + 1;
    console.log(randomVal);
    guessType.innerHTML = '';
    if (input.value == randomVal) {
        guessType.innerHTML = "Correct Guess";
        count[0]++;
        count[1]++;
        correctGuess.innerHTML = "Correct Guesses:  " + count[1];
    } else if (input.value > 10 || input.value < 1) {
        guessType.innerHTML = "enter value b/w 1 to 10";
    } else if (input.value == '') {
        guessType.innerHTML = "Enter a value";
    } else {
        guessType.innerHTML = "Incorrect Guess";
        count[0]++;
        count[2]++;
        WrongGuess.innerHTML = "Wrong Guesses:  " + count[2];
    }
    totalGuess.innerHTML = "Total Guesses:  " + count[0];
});