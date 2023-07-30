let cron;
let h = 0
let m = 0
let s = 0
let ml = 0


const hour = document.querySelector('.hour');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const miliseconds = document.querySelector('.miliseconds');

function play() {
    pause();
    cron = setInterval(() => timer(), 10)
}

function pause() {
    clearInterval(cron);
}

function reset() {
    hour.innerHTML = '00';
    minutes.innerHTML = '00';
    seconds.innerHTML = '00';
    miliseconds.innerHTML = '00';
    h = 0;
    m = 0;
    s = 0;
    ml = 0;
}

function timer() {
    if ((ml++) === 100) {
        ml = 0;
        s++
    }
    if (s === 60) {
        s = 0
        m++
    }
    if (m === 60) {
        m = 0
        h++
    }
    if (h == 12) {
        pause()
        reset()
    }
    hour.innerText = returnData(h)
    minutes.innerText = returnData(m)
    seconds.innerText = returnData(s)
    miliseconds.innerText = returnData(ml)
}

function returnData(input) {
    return input > 9 ? input: `0${input}`
}