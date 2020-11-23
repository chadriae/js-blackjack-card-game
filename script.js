// TO DO
// - use cards > 10 in the game


(() => {
let imagesArray = ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png', 'images/6.png', 'images/7.png', 'images/8.png', 'images/9.png', 'images/10.png', 'images/10.png'];

// Array for the (hidden) score of the opponent
let scoreArray = [];

// Declaring variables for the scores
let playerScore = 0;
let computerScore = 0;

let clickCount = 0;

// Function to show the hidden cards of the opponent after the player won, lost or clicked stand
function showCards (clickCount, imagesArray, scoreArray) {
    for (i = 0; i < clickCount; i++) {
        document.getElementById("computerCard"+ (i + 1)).src = imagesArray[(scoreArray[i]) - 1];
        console.log(imagesArray[(scoreArray[i]) - 1]);
    }
}


// Reload game button
document.getElementById("restart").addEventListener("click", function () {
    location.reload();
})

// Stand situation
document.getElementById("stand").addEventListener("click", function () {

    document.getElementById("confirm").style.display = "none";
    document.getElementById("stand").style.display = "none";


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
document.getElementById("confirm").addEventListener("click", function () {
// Get the amount of clicks to determine which card should be shown
const countButton = document.getElementById("confirm");
countButton.onclick = clickCount++;

// Function for a random number
let randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

playerNumber = randomNumber(1, 10);
computerNumber = randomNumber(1, 10);

playerScore = playerScore + playerNumber;
computerScore = computerScore + computerNumber;

if (playerScore < 21) {
    document.getElementById("drawnCard").innerHTML = "You drew: " + playerNumber + ".";
    document.getElementById("playerCard"+ clickCount).src = imagesArray[playerNumber - 1];
    document.getElementById("playerScore").innerHTML = `Your current score is: ${playerScore}.`
    scoreArray.push(computerNumber);
}

if (playerScore == 21) {
    document.getElementById("drawnCard").innerHTML = "You drew: " + playerNumber + ".";
    document.getElementById("playerScore").innerHTML = `CONGRATS! YOU WON! You got ${playerScore} points. FYI your opponent got ${computerScore} points.`;
    document.getElementById("playerCard"+ clickCount).src = imagesArray[playerNumber - 1];
    document.getElementById("computerCard"+ clickCount).src = imagesArray[computerNumber - 1];
    document.getElementById("confirm").style.display = "none";
    document.getElementById("stand").style.display = "none";
    scoreArray.push(computerNumber);
}

else if (playerScore > 21) {
    document.getElementById("drawnCard").innerHTML = "You drew: " + playerNumber + ".";
    document.getElementById("playerCard"+ clickCount).src = imagesArray[playerNumber - 1];
    document.getElementById("computerCard"+ clickCount).src = imagesArray[computerNumber - 1];
    document.getElementById("playerScore").innerHTML = `You lost. You got ${playerScore} points. You can play again by pressing the button. FYI your opponent got ${computerScore} points.`;
    document.getElementById("confirm").style.display = "none";
    document.getElementById("stand").style.display = "none";
    scoreArray.push(computerNumber);
}

});
})();
