const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function dates() {
    const goalDate = new Date('1 jan 2023');
    const milli = goalDate - Date.now();
    const days = Math.floor(milli / 1000 / 60 / 60 / 24);
    const hours = Math.floor(milli / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(milli/1000/60)%60;
    const seconds = Math.floor(milli/1000)%60%60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(dates, 1000);
