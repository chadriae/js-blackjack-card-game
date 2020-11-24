// TODO: use cards > 10 in the game


(() => {
let imagesArray = ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png', 'images/6.png', 'images/7.png', 'images/8.png', 'images/9.png', 'images/10.png', 'images/11.png'];

// Array for the (hidden) score of the opponent
let scoreArray = [];

// Declaring variables for the scores
let playerScore = 0;
let computerScore = 0;

let clickCount = 0;

// Function to show the hidden cards of the opponent after the player won, lost or clicked stand
function showCards (clickCount, imagesArray, scoreArray) {
    for (i = 0; i < clickCount; i++) {
        document.querySelector("#computerCard"+ (i + 1)).src = imagesArray[(scoreArray[i]) - 1];
    }
}

// Function to hide unnecessary buttons after the game ended
function hideButtons () {
    document.querySelector("#confirm").style.display = "none";
    document.querySelector("#stand").style.display = "none";
}


// Reload game button
document.querySelector("#restart").addEventListener("click", function () {
    location.reload();
})

// Function to tell the score of the card
function scoreCard () {
    document.querySelector("#playerCard"+ clickCount).src = imagesArray[playerNumber - 1];
    document.querySelector("#playerScore").innerHTML = `Your current score is: ${playerScore}.`;
    scoreArray.push(computerNumber);
}

// Stand situation
document.querySelector("#stand").addEventListener("click", function () {

    hideButtons();

    if(playerScore > computerScore) {  
    alert(`You win! You have ${playerScore} points and your opponent has ${computerScore} points.`);
    showCards(clickCount, imagesArray, scoreArray);
    }

    else if(computerScore > 21) {
    alert(`You win! You have ${playerScore} points and your opponent has ${computerScore} points.`);
    showCards(clickCount, imagesArray, scoreArray);
    }

    else {
    alert(`You lose. You have ${playerScore} points and your opponent has ${computerScore} points.`);
    showCards(clickCount, imagesArray, scoreArray);
    }
})


// Function for turning a card
document.querySelector("#confirm").addEventListener("click", function () {
// Get the amount of clicks to determine which card should be shown
const countButton = document.querySelector("#confirm");
countButton.onclick = clickCount++;

// Function for a random number
let randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

playerNumber = randomNumber(1, 12);
computerNumber = randomNumber(1, 12);

console.log(playerNumber);
console.log(computerNumber);

if (playerNumber == 11) {
    playerScore + 10;
}

if (computerNumber == 11) {
    computerScore + 10;
}

else {
playerScore = playerScore + playerNumber;
computerScore = computerScore + computerNumber;
}

if (playerScore < 21) {
    if (playerNumber == 11) {
        document.querySelector("#drawnCard").innerHTML = `You drew a king.`;
        document.querySelector("#playerCard"+ clickCount).src = imagesArray[playerNumber - 1];
        document.querySelector("#playerScore").innerHTML = `Your current score is: ${playerScore}.`;
        scoreArray.push(computerNumber);
    }
    else {
        document.querySelector("#drawnCard").innerHTML = `You drew ${playerNumber}.`;
        scoreCard();
    }
}

if (playerScore == 21) {

    document.querySelector("#drawnCard").innerHTML = `You drew ${playerNumber}.`;
    document.querySelector("#playerScore").innerHTML = `CONGRATS! YOU WON! You got ${playerScore} points. FYI your opponent got ${computerScore} points.`;
    hideButtons ();
    scoreArray.push(computerNumber);
    document.querySelector("#playerCard"+ clickCount).src = imagesArray[playerNumber - 1];
    showCards(clickCount, imagesArray, scoreArray);
}

else if (playerScore > 21) {
    document.querySelector("#drawnCard").innerHTML = `You drew ${playerNumber}.`;
    document.querySelector("#playerScore").innerHTML = `You lost. You got ${playerScore} points. You can play again by pressing the button. FYI your opponent got ${computerScore} points.`;
    hideButtons ();
    scoreArray.push(computerNumber);
    document.querySelector("#playerCard"+ clickCount).src = imagesArray[playerNumber - 1];
    showCards(clickCount, imagesArray, scoreArray);
}

});
})();
