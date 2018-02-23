var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random  = document.getElementById("random");

function setGradient () {
    body.style.background = 
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

// generate random color
function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
     color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// add click event
random.addEventListener("click", function(){
    color1.value = randomColor();
    color2.value = randomColor();
    setGradient();
})

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
// make h3 appear on start and match boxes with colors
setGradient ();
