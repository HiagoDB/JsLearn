const timer = document.getElementById("Clock");
const startTimer = document.getElementById("Start");
const stopTimer = document.getElementById("Stop");
const restartTimer = document.getElementById("Restart");

function getSeconds(seconds) {
  const time = new Date(seconds * 1000);
  return time.toLocaleTimeString('pt-BR', {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "UTC"
  });
}

let sec = 0;
let isTimerRunning = false;
let start; 

function startClock() {
  start = setInterval(function () {
    sec++;
    timer.innerHTML = getSeconds(sec);
  }, 1000);
}

startTimer.addEventListener('click', function (e) {
  if (!isTimerRunning) {
    startClock();
    isTimerRunning = true;
    startTimer.disabled = true;
    timer.classList.remove('paused')
  }
});

stopTimer.addEventListener('click', function (e) {
  clearInterval(start);
  isTimerRunning = false;
  startTimer.disabled = false;
  timer.classList.add('paused')
});

restartTimer.addEventListener('click', function (e) {
  clearInterval(start);
  sec = 0;
  timer.innerHTML = '00:00:00';
  isTimerRunning = false;
  startTimer.disabled = false;
  timer.classList.remove('paused')
});
