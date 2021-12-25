// Player 1
let randomNumber1 = Math.trunc(Math.random() * 6) + 1;
let randomDiceImg1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomDiceImg1);

// Player 2
let randomNumber2 = Math.trunc(Math.random() * 6) + 1;
let randomDiceImg2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomDiceImg2);

// Game situation
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw !";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins !";
} else {
  document.querySelector("h1").innerHTML = "Player 2 Wins !";
}
