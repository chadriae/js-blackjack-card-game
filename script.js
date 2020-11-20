(() => {
let imagesArray = ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png', 'images/6.png', 'images/7.png', 'images/8.png', 'images/9.png', 'images/10.png'];

let playerScore = 0;
let computerScore = 0;

let clickCount = 0;

// Reload game button
document.getElementById("restart").addEventListener("click", function () {
    location.reload();
})

document.getElementById("stand").addEventListener("click", function () {
    if(playerScore > computerScore) {
    alert(`You win! You have ${playerScore} points and the computer has ${computerScore} points.`);
    }
    else {
        alert(`You lose. You have ${playerScore} points and the computer has ${computerScore} points.`);
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
    document.getElementById("card"+ clickCount).src = imagesArray[playerNumber - 1];
    document.getElementById("playerScore").innerHTML = `Your current score is: ${playerScore}.`
}

if (playerScore == 21) {
    document.getElementById("drawnCard").innerHTML = "You drew: " + playerNumber + ".";
    document.getElementById("playerScore").innerHTML = `CONGRATS! YOU WON! You got ${playerScore} points`;

    document.getElementById("confirm").style.display = "none";
    document.getElementById("stand").style.display = "none";
}

else if (playerScore > 21) {
    document.getElementById("drawnCard").innerHTML = "You drew: " + playerNumber + ".";
    document.getElementById("card"+ clickCount).src = imagesArray[playerNumber - 1];
    document.getElementById("playerScore").innerHTML = "Too bad, you lost! Your score is " + playerScore + ". You can play again by pressing the button.";

    document.getElementById("confirm").style.display = "none";
    document.getElementById("stand").style.display = "none";
}

});
})();
