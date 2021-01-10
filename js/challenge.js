let seconds = 0;
let element = document.getElementById('counter');
let countUp = document.getElementById('plus');
let countDown = document.getElementById('minus');
let stopTimer = false;

function timerUp() {
    element.innerText = seconds;
    seconds ++;
}

function timerDown() {
    element.innerText = seconds;
    seconds --;
}

countUp.addEventListener('click', () => {
    setInterval(timerUp, 1000);
}, { once: true });

countDown.addEventListener('click', () => {
    setInterval(timerDown, 1000);
}, {once: true });