var state;
var pauseTime;

var startTime;
var updateTimeStopwatchInterval;

var countdownTime;
var updateTimeCountdownInterval

const inactive = window.getComputedStyle(document.documentElement).getPropertyValue('--color-inactive').trim();

const time = document.getElementById("time");
const countdown = document.getElementById("countdown");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");

setReset();

time.textContent = msToString(0);

function updateTimeStopwatchFunction() {
    time.textContent = msToString(Date.now() - startTime);
}

function updateTimeCountdownFunction() {
    const remaining = countdownTime - Date.now();
    if (remaining > 0) {
        time.textContent = Math.ceil(remaining/1000);
    }
    else {
        clearInterval(updateTimeCountdownInterval);
        setRunning();
    }
}

function msToString(ms){
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms-minutes*60000)/1000);
    const deciSeconds = Math.floor((ms-minutes*60000-seconds*1000)/100);

    // Pad with leading zeros so it prints 02:05 instead of 2:5
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(deciSeconds)}`;
}

function setReset() {
    state = "reset";

    clearInterval(updateTimeStopwatchInterval);
    clearInterval(updateTimeCountdownInterval)

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
    let result = prompt("How many seconds to countdown for","5");
    if (result != null || parseFloat(result) <= 0 || parseFloat(result) > 20) {
        countdownTime = Date.now()+parseFloat(result)*1000;

        updateTimeCountdownInterval = setInterval(updateTimeCountdownFunction, 10);

        reset.style.backgroundColor = '';
        reset.disabled = false;

        pause.style.backgroundColor = inactive;
        pause.disabled = true;
        countdown.style.backgroundColor = inactive;
        countdown.disabled = true;
        start.style.backgroundColor = inactive;
        start.disabled = true;
    }
    else {
        setReset();
    }
}
function setRunning() {
    if (state === "paused") {
        startTime = startTime + (Date.now() - pauseTime);
    }
    else {
        startTime = Date.now();
    }
    state = "running";

    updateTimeStopwatchInterval = setInterval(updateTimeStopwatchFunction, 10);

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

    pauseTime = Date.now();
    clearInterval(updateTimeStopwatchInterval);

    start.style.backgroundColor = '';
    start.disabled = false;
    reset.style.backgroundColor = '';
    reset.disabled = false;

    countdown.style.backgroundColor = inactive;
    countdown.disabled = true;
    pause.style.backgroundColor = inactive;
    pause.disabled = true;
}