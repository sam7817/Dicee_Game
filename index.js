var randomNumber1 = Math.floor((6 * Math.random()) + 1);

var randomImage1 = "dice" + randomNumber1 + ".png";

var randomImageSource1 = "images/" + randomImage1;

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor((6 * Math.random()) + 1);

var randomImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
    document.querySelector("h1").style.fontSize = "7rem"
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins!🚩";
    document.querySelector("h1").style.fontSize = "7rem"
}else {
    document.querySelector("h1").textContent = "Draw!"
}