let homeScore = 0;
let guestScore = 0;

document.getElementById("home-display").textContent = homeScore;
document.getElementById("guest-display").textContent = guestScore;

let homeDisplay = document.getElementById("home-display");
let guestDisplay = document.getElementById("guest-display");

function homePlusOne() {
  homeScore = homeScore + 1;
  homeDisplay.textContent = homeScore;
}

function homePlusTwo() {
  homeScore = homeScore + 2;
  homeDisplay.textContent = homeScore;
}

function homePlusThree() {
  homeScore = homeScore + 3;
  homeDisplay.textContent = homeScore;
}

function guestPlusOne() {
  guestScore = guestScore + 1;
  guestDisplay.textContent = guestScore;
}

function guestPlusTwo() {
  guestScore = guestScore + 2;
  guestDisplay.textContent = guestScore;
}

function guestPlusThree() {
  guestScore = guestScore + 3;
  guestDisplay.textContent = guestScore;
}

function resetScores() {
  homeScore = 0;
  guestScore = 0;
  homeDisplay.textContent = homeScore;
  guestDisplay.textContent = guestScore;
}
