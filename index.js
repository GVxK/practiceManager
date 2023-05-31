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
let workTime = false
let breakTime = false
let timerTimeout = ""


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
    updateTimer()
  }
}
function handlePomodoro() {
  handleWork()
  // handleBreak()
  
}
function handleWork() {
  minutes = 0
  seconds = 10
  video1El.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
  updateTimer()
}
function handleBreak() {
  minutes = 0
  seconds = 5 
  updateTimer()
}

function updateTimer() {
  seconds--
  
    // if (startBtn.textContent === "PAUSE") {
    //   startBtn.disabled = false
    //   startBtn.addEventListener("click", () => {
    //     clearTimeout(timerTimeout)
    //    })
    // }
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
  }
  if (startBtn.textContent === "RESUME") {
    clearTimeout(timerTimeout)
  } 
}
