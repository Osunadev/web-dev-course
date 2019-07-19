// Importing LODASH using require and browserify
var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log('answer', _.without(array, 3));

var color1 = document.getElementById("color-1").children[0];
var color2 = document.getElementById("color-2").children[0]
var textGradient = document.getElementById("text-bg");
var container = document.getElementsByClassName("container")[0];
var randBtn = document.getElementById("random");

// Startup colors
color1.value = "#FF0000";
color2.value = "#00FF00";

function UpdateColor() {
    container.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")";
    textGradient.innerHTML = container.style.background + ';';
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function DecToHex(num) {
    var first;
    var second;
    
    first = num % 16;
    if (first >= 10) {
        first = String.fromCharCode(65 + first - 10);
    } else {
        first = String(first);
    }

    second = Math.floor(num/16)%16;
    if (second >= 10) {
        second = String.fromCharCode(65 + second - 10);
    } else {
        second = String(second);
    }

    return first+second;
}

function GenerateRandomColor() {
    var red, green, blue;
    
    red = DecToHex(getRndInteger(0,255));
    green = DecToHex(getRndInteger(0,255));
    blue = DecToHex(getRndInteger(0,255));
    color1.value = `#${red}${green}${blue}`;

    red = DecToHex(getRndInteger(0,255));
    green = DecToHex(getRndInteger(0,255));
    blue = DecToHex(getRndInteger(0,255));
    color2.value = `#${red}${green}${blue}`;

    UpdateColor();
}

color1.addEventListener("input", UpdateColor);
color2.addEventListener("input", UpdateColor);
randBtn.addEventListener("click", GenerateRandomColor);

