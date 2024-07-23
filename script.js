var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

// Function to get a random integer between min and max
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to get a random RGB color
function getRandomColor() {
    var r = getRandomInt(0, 255);
    var g = getRandomInt(0, 255);
    var b = getRandomInt(0, 255);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Function to set the gradient based on input color values
function setGradient() {
    body.style.background = 
        "linear-gradient(to right, " 
        + color1.value 
        + ", " 
        + color2.value 
        + ")";
    css.textContent = body.style.background + ";";
}

// Function to set a random gradient
function randomGradient() {
    var color1 = getRandomColor();
    var color2 = getRandomColor();
    body.style.background = "linear-gradient(to right, " + color1 + ", " + color2 + ")";
    css.textContent = body.style.background + ";";
}

// Initialize the gradient based on the input color values
setGradient();

// Event listeners for the color inputs and button
button.addEventListener("click", randomGradient);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
