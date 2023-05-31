const timerEl = document.getElementById("timer")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")


let minutes = 15
let seconds = 05
let timer = `${minutes}:${seconds}`

function updateTimer() {
  // updateSeconds()
  // updateMinutes()
  seconds--
  if (seconds <= 00) {
    minutes--
    seconds = 59
  }
  minutesEl.textContent = minutes
  secondsEl.textContent = seconds
  setTimeout(updateTimer, 1000)
}
updateTimer()