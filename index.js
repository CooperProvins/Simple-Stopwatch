var state;
var duration = 0;
var stopwatchLoop;

const inactive = window.getComputedStyle(document.documentElement).getPropertyValue('--color-inactive').trim();

const time = document.getElementById("time");
const countdown = document.getElementById("countdown");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");

setReset();

function updateStopwatch(increment) {
    const minutes = Math.floor(duration / 60000);
    const seconds = Math.floor((duration-minutes*60000)/1000);
    const deciSeconds = Math.floor((duration-minutes*60000-seconds*1000)/100);

    // Pad with leading zeros so it prints 02:05 instead of 2:5
    time.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(deciSeconds)}`;

    duration += increment;
}

function setReset() {
    state = "reset";
    clearInterval(stopwatchLoop)
    duration = 0;
    updateStopwatch(0);

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
    stopwatchLoop = setInterval(updateStopwatch, 10,10);

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
    clearInterval(stopwatchLoop);

    start.style.backgroundColor = '';
    start.disabled = false;
    reset.style.backgroundColor = '';
    reset.disabled = false;

    countdown.style.backgroundColor = inactive;
    countdown.disabled = true;
    pause.style.backgroundColor = inactive;
    pause.disabled = true;
}