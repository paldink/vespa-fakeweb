let greyBtn = document.getElementById("grey");
let whiteBtn = document.getElementById("white");
let orangeBtn = document.getElementById("orange");
let greenBtn = document.getElementById("green");
let bike = document.getElementById("vespa");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar-nav")

// mengubah warna vespa
greyBtn.onclick = function() {
    bike.style.backgroundImage = "url(assets/images/blackvespa.png)";
}

whiteBtn.onclick = function() {
    bike.style.backgroundImage = "url(assets/images/whitevespa.png)";
}

orangeBtn.onclick = function() {
    bike.style.backgroundImage = "url(assets/images/orangevespa.png)";
}

greenBtn.onclick = function() {
    bike.style.backgroundImage = "url(assets/images/greenvespa.png)";
}

// function list logo
menu.onclick = () => {
    menu.classList.toggle('ph-x');
    navbar.classList.toggle('open');
}