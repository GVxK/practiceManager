const timerEl = document.getElementById("timer")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")
const startBtn = document.getElementById("start-btn")
const video1El = document.getElementById("video1")
const video2El = document.getElementById("video2")

let minutes = 15
let seconds = 05
let minutesFormatted = minutes.toString().padStart(2, '0')
let secondsFormatted = seconds.toString().padStart(2, '0')
// let workTime = true
// let breakTime = false
let time = {
  work: true,
  break: false
}
let timerEnded = false


  startBtn.addEventListener("click", handleButton)


function handleButton() {
  if (startBtn.textContent === "START") {
    handlePomodoro()
    startBtn.textContent = "PAUSE"
  } else if (startBtn.textContent === "PAUSE") {
    startBtn.textContent = "RESUME"
    seconds++
  } else if (startBtn.textContent === "RESUME") {
    startBtn.textContent = "PAUSE"
    handlePomodoro()
  }
}
function handlePomodoro() {
  if (time.work) {
    handleWork()
  }
  // if (breakTime) {
  //   handleBreak()
  // }
   console.log("workTime is " + time.work)
}
function handleWork() {
  minutes = 0
  seconds = 5
  updateTimer()
  checkTimer("work", "break")
}
function checkTimer(now, next) {
  let checkTimerTimeout = setTimeout(() => checkTimer(now, next), 1000)
  if (timerEnded === true) {
    timerEnded = false
    time[now] = false
    time[next] = true
    // handlePomodoro()
    // console.log(now, next)
    
  }
  
  console.log("worktime is " + time.work, time.break)
}
function handleBreak() {
  minutes = 2
  seconds = 5 
  updateTimer()
}

function updateTimer() {
  seconds--
  if (minutes >= 1 && seconds < 0) {
    minutes--
    seconds = 59
  }
  minutesEl.textContent = minutes.toString().padStart(2, '0')
  secondsEl.textContent = seconds.toString().padStart(2, '0')
  let timerTimeout = setTimeout(updateTimer, 1000)
  if (minutes < 1 && seconds <= 0) {
    clearTimeout(timerTimeout)
    startBtn.textContent = "START"
    timerEnded = true
    return true
  }
  if (startBtn.textContent === "RESUME") {
    clearTimeout(timerTimeout)
  } 
  return false
}
