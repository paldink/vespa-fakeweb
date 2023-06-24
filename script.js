let greyBtn = document.getElementById("grey");
let whiteBtn = document.getElementById("white");
let orangeBtn = document.getElementById("orange");
let greenBtn = document.getElementById("green");
let bike = document.getElementById("bike");

greyBtn.onclick = function() {
    bike.style.backgroundImage = "url(vespa-img/blackvespa.png)";
}

whiteBtn.onclick = function() {
    bike.style.backgroundImage = "url(vespa-img/whitevespa.png)";
}

orangeBtn.onclick = function() {
    bike.style.backgroundImage = "url(vespa-img/orangevespa.png)";
}

greenBtn.onclick = function() {
    bike.style.backgroundImage = "url(vespa-img/greenvespa.png)";
}