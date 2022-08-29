"use strict";

// HTML OBJECTS -------------------------------------------------------------------------------------------
const screen = document.querySelector("canvas");
const paintBrush = screen.getContext("2d");

let screenWidth = 1366;
let screenHeight = 640;
let xPosition;
let yPosition;

let radius = 20;
let largeCircle = 40;
let mediumCircle = 20;

// CIRCLE DRAWING -----------------------------------------------------------------------------------------
function circle(x, y, radius, color) {
  paintBrush.fillStyle = color;
  paintBrush.beginPath();
  paintBrush.arc(x, y, radius, 0, 2 * Math.PI);
  paintBrush.fill();
}

// ERASE DRAWING --------------------------------------------------------------------------------------------
function erase() {
  paintBrush.clearRect(0, 0, screenWidth, screenHeight);
}

// BULLSEYE --------------------------------------------------------------------------------------

// CREATING BULLSEYE
function bullseye(x, y) {
  circle(x, y, radius + largeCircle, "red");
  circle(x, y, radius + mediumCircle, "white");
  circle(x, y, radius, "red");
}

// MOVING BULLSEYE
function bullseyePosition(maximum) {
  return Math.floor(Math.random() * maximum);
}

function showBullseye() {
  erase();
  xPosition = bullseyePosition(1200);
  yPosition = bullseyePosition(650);
  bullseye(xPosition, yPosition);
}

setInterval(showBullseye,1300);

// BULLSEYE INTERACTION
function clicking(event){
    let x= event.pageX - screen.offsetLeft;
    let y= event.pageY - screen.offsetTop;

    if ( (x > xPosition - radius) && (x < xPosition + radius) 
        && (y > yPosition - radius) && (y < yPosition + radius)) {

            alert('Well Done!');
        }
}


screen.onclick = clicking;

