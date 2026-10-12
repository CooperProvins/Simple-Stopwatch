var state;

const inactive = window.getComputedStyle(document.documentElement).getPropertyValue('--color-inactive').trim();

const time = document.getElementById("time");
const countdown = document.getElementById("countdown");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");

setReset();
function setReset() {
    state = "reset";
    time.textContent = "reset";

    countdown.style.backgroundColor = '';
    countdown.disabled = false;
    start.style.backgroundColor = '';
    start.disabled = false;

    pause.style.backgroundColor = inactive;
    pause.disabled = true;
    reset.style.backgroundColor = inactive;
    reset.disabled = true;
}
function setCountdown() {
    state = "countdown";
    time.textContent = "countdown";

    reset.style.backgroundColor = '';
    reset.disabled = false;

    pause.style.backgroundColor = inactive;
    pause.disabled = true;
    countdown.style.backgroundColor = inactive;
    countdown.disabled = true;
    start.style.backgroundColor = inactive;
    start.disabled = true;
}
function setRunning() {
    state = "running";
    time.textContent = "running";

    pause.style.backgroundColor = '';
    pause.disabled = false;
    reset.style.backgroundColor = '';
    reset.disabled = false;

    countdown.style.backgroundColor = inactive;
    countdown.disabled = true;
    start.style.backgroundColor = inactive;
    start.disabled = true;
}
function setPaused() {
    state = "paused";
    time.textContent = "paused";

    start.style.backgroundColor = '';
    start.disabled = false;
    reset.style.backgroundColor = '';
    reset.disabled = false;

    countdown.style.backgroundColor = inactive;
    countdown.disabled = true;
    pause.style.backgroundColor = inactive;
    pause.disabled = true;
}