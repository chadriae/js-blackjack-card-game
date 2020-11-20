let imagesArray = ['images/1.png', './images/2.png', './images/3.png', './images/4.png', './images/5.png', './images/6.png', './images/7.png', './images/8.png', './images/9.png', './images/10.png'];

let actualNumber = 0;
let currentScore = 0;

document.getElementById("confirm").addEventListener("click", function () {


let randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

actualNumber = randomNumber(1, 10);

currentScore = currentScore + actualNumber;

if (currentScore < 21) {
    document.getElementById("drawnCard").innerHTML = "You drew: " + actualNumber + ".";
    document.getElementById("imageCard").innerHTML = '<img src='+ imagesArray[actualNumber - 1] + '>';
    document.getElementById("currentScore").innerHTML = `Your current score is: ${currentScore}.`
}

if (currentScore == 21) {
    document.getElementById("drawnCard").innerHTML = "You drew: " + actualNumber + ".";
    document.getElementById("imageCard").innerHTML = '<img src='+ imagesArray[actualNumber - 1] + '>';
    document.getElementById("currentScore").innerHTML = `CONGRATS! YOU WON! You got ${currentScore} points`;

    document.getElementById("confirm").style.display = "none";

    let element = document.getElementById("playAgain");
    element.innerHTML = "PLAY AGAIN";
    element.classList.add("bg-green-500");
    element.classList.add("px-8");
    element.classList.add("py-4");
    element.classList.add("rounded-lg");
    element.classList.add("font-bold");
    element.addEventListener("click", function () {
        location.reload();
    })
}

else if (currentScore > 21) {
    document.getElementById("drawnCard").innerHTML = "You drew: " + actualNumber + ".";
    document.getElementById("imageCard").innerHTML = '<img src='+ imagesArray[actualNumber - 1] + '>';
    document.getElementById("currentScore").innerHTML = "Too bad, you lost! Your score is " + currentScore + ". You can play again by pressing the button.";

    document.getElementById("confirm").style.display = "none";

    let element = document.getElementById("playAgain");
    element.innerHTML = "PLAY AGAIN";
    element.classList.add("bg-green-500");
    element.classList.add("px-8");
    element.classList.add("py-4");
    element.classList.add("rounded-lg");
    element.classList.add("font-bold");
    element.addEventListener("click", function () {
        location.reload();
    })
}

});
