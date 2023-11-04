let greyBtn = document.getElementById("grey");
let whiteBtn = document.getElementById("white");
let orangeBtn = document.getElementById("orange");
let greenBtn = document.getElementById("green");
let bike = document.getElementById("vespa");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar-nav")

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

// function scroll
function handleClick(param) {
    if (param === "home") {
       return location.href = "#home"
    } else if (param === "about") {
       return location.href = "#about"
    } else if (param === "services") {
       return location.href = "#services"
    } else if (param === "contact") {
       return location.href = "#contact"
    } else {

    }
}

menu.onclick = () => {
    menu.classList.toggle('ph-x');
    navbar.classList.toggle('open');
}