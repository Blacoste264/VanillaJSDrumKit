// Function that handles which sound to play
function playSound() {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
};
// Toggles border transition
function removeTransition(e) {
    if(e.propertyName !== "transform") return;
    this.classList.remove("playing");
}
// Adding event listeners to keys
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);

