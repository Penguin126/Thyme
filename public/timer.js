const workButton = document.getElementById("work");
const breakButton = document.getElementById("break");
const restButton =  document.getElementById("rest");
const startButton = document.getElementById("timerStart");

let length = 0;
let currentTime = length;  
let currentSeconds = 0;
let timerRunning = false;

workButton.onclick = () => {
    timerRunning = false;
    workButton.style.backgroundColor = "#25B622";
    workButton.style.color = "white";
    breakButton.style.backgroundColor = "white";
    breakButton.style.color = "#25B622";
    restButton.style.backgroundColor = "white";
    restButton.style.color = "#25B622";
    length = 25;
    currentTime = length;  
    currentSeconds = 0;
    document.getElementById("timerClock").innerHTML = "25:00";
    document.getElementById("timerMessage").innerHTML = "Let's get productive!"
}

breakButton.onclick = () => {
    timerRunning = false;
    workButton.style.backgroundColor = "white";
    workButton.style.color = "#25B622";
    breakButton.style.backgroundColor = "#25B622";
    breakButton.style.color = "white";
    restButton.style.backgroundColor = "white";
    restButton.style.color = "#25B622";
    length = 5;
    currentTime = length;  
    currentSeconds = 0;
    document.getElementById("timerClock").innerHTML = "5:00";
    document.getElementById("timerMessage").innerHTML = "Drink some water, grab a snack"
}

restButton.onclick = () => {
    timerRunning = false;
    workButton.style.backgroundColor = "white";
    workButton.style.color = "#25B622";
    breakButton.style.backgroundColor = "white";
    breakButton.style.color = "#25B622";
    restButton.style.backgroundColor = "#25B622";
    restButton.style.color = "white";
    length = 15;
    currentTime = length;  
    currentSeconds = 0;
    document.getElementById("timerClock").innerHTML = "15:00";
    document.getElementById("timerMessage").innerHTML = "Nice work! Get some rest"
}

startButton.onclick = () => {
    console.log("clicked");
    console.log(length);
    if (timerRunning == true) {
        timerRunning = false;
    } else {
        timerRunning = true;
    }
    timer();
    function timer() {
        if (timerRunning == false || (currentTime == 0 && currentSeconds == 0)) {
            return;
        }
        if (currentSeconds == 0) {
            currentTime -= 1;
            currentSeconds =  59;
        } else {
            currentSeconds -= 1;
        }
        if (currentSeconds/10 < 1) {
            document.getElementById("timerClock").innerHTML = currentTime + ":0" + currentSeconds;
        } else {
            document.getElementById("timerClock").innerHTML = currentTime + ":" + currentSeconds;
        }

      setTimeout(timer, 1000);
    }
}
