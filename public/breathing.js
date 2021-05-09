const gif = document.getElementById("breathingGif");
const fakeGif = document.getElementById("thumbnail");
const message = document.getElementById("breathingMessage");
const button = document.getElementById("breathingStart");
let gifPlaying = false;

button.onclick = () => {
    button.style.backgroundColor = "#25B622";
    button.style.color = "white";
    if (!gifPlaying) {
        fakeGif.style.display = "none";
        gif.style.display = "block";
        message.innerHTML = "Breathe in and out accoding to the bubble"
        gifPlaying = true;
    } else {
        fakeGif.style.display = "block";
        gif.style.display = "none";
        message.innerHTML = "Press start to begin";
        gifPlaying = false;
    }

}