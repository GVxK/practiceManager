const timerEl = document.getElementById("timer")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")
const totalSecondsEl = document.getElementById("total-seconds")
const totalMinutesEl = document.getElementById("total-minutes")
const startBtn = document.getElementById("start-btn")
const testBtn = document.getElementById("test")
const video1El = document.getElementById("video1")
const video2El = document.getElementById("video2")
const pauseSvg = `<svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Media / Pause"> <g id="Vector"> <path d="M15 5.5V18.5C15 18.9647 15 19.197 15.0384 19.3902C15.1962 20.1836 15.816 20.8041 16.6094 20.9619C16.8026 21.0003 17.0349 21.0003 17.4996 21.0003C17.9642 21.0003 18.1974 21.0003 18.3906 20.9619C19.184 20.8041 19.8041 20.1836 19.9619 19.3902C20 19.1987 20 18.9687 20 18.5122V5.48777C20 5.03125 20 4.80087 19.9619 4.60938C19.8041 3.81599 19.1836 3.19624 18.3902 3.03843C18.197 3 17.9647 3 17.5 3C17.0353 3 16.8026 3 16.6094 3.03843C15.816 3.19624 15.1962 3.81599 15.0384 4.60938C15 4.80257 15 5.03534 15 5.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: #e8e6e3;"></path> <path d="M4 5.5V18.5C4 18.9647 4 19.197 4.03843 19.3902C4.19624 20.1836 4.81599 20.8041 5.60938 20.9619C5.80257 21.0003 6.0349 21.0003 6.49956 21.0003C6.96421 21.0003 7.19743 21.0003 7.39062 20.9619C8.18401 20.8041 8.8041 20.1836 8.96191 19.3902C9 19.1987 9 18.9687 9 18.5122V5.48777C9 5.03125 9 4.80087 8.96191 4.60938C8.8041 3.81599 8.18356 3.19624 7.39018 3.03843C7.19698 3 6.96465 3 6.5 3C6.03535 3 5.80257 3 5.60938 3.03843C4.81599 3.19624 4.19624 3.81599 4.03843 4.60938C4 4.80257 4 5.03534 4 5.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: #e8e6e3;"></path> </g> </g> </g></svg>`
const playSvg = `<div><svg width="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Media / Play"> <path id="Vector" d="M5 17.3336V6.66698C5 5.78742 5 5.34715 5.18509 5.08691C5.34664 4.85977 5.59564 4.71064 5.87207 4.67499C6.18868 4.63415 6.57701 4.84126 7.35254 5.25487L17.3525 10.5882L17.3562 10.5898C18.2132 11.0469 18.642 11.2756 18.7826 11.5803C18.9053 11.8462 18.9053 12.1531 18.7826 12.4189C18.6418 12.7241 18.212 12.9537 17.3525 13.4121L7.35254 18.7454C6.57645 19.1593 6.1888 19.3657 5.87207 19.3248C5.59564 19.2891 5.34664 19.1401 5.18509 18.9129C5 18.6527 5 18.2132 5 17.3336Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: #e8e6e3;"></path> </g> </g></svg></div>`
const resumeSvg = `<div style="padding-left: 5px;"><svg width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #000000;"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="none" stroke="#000000" stroke-width="2" d="M1,20 L6,20 L6,4 L1,4 L1,20 Z M11,19.0000002 L22,12 L11,5 L11,19.0000002 Z" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: #e8e6e3;"></path> </g></svg></div>`
let minutes = 15
let seconds = 05
let totalMinutes = 0
let totalSeconds = 0
let time = {
  work: true,
  break: false
}
let timerEnded = false

testBtn.addEventListener("click", () => {
  console.log(startBtn.innerHTML.trim() === playSvg.trim())
})
 startBtn.addEventListener("click", handleButton)


function handleButton() {
 
  if (startBtn.innerHTML.trim() === playSvg.trim()) {
    handlePomodoro()
    console.log(999)
    startBtn.innerHTML = pauseSvg
  } else if (startBtn.innerHTML === pauseSvg) {
    startBtn.innerHTML = resumeSvg
    seconds++
    totalSeconds--
    pauseVideos()
  } else if (startBtn.innerHTML === resumeSvg) {
    startBtn.innerHTML = pauseSvg
    updateTimer()
    if(time.work) {
      playVideos()
    }
  }
}
function handlePomodoro() {
  if (time.work) {
    handleWork()
    playVideos()
  } else if (time.break) {
    handleBreak()
    pauseVideos()
  }
   console.log("workTime is " + time.work)
}
function handleWork() {
  minutes = 25
  seconds = 0
  updateTimer()
  checkTimer("work", "break")
  new Audio("./assets/sounds/Chookity 4.wav").play()
}
function handleBreak() {
  minutes = 5
  seconds = 0
  updateTimer()
  checkTimer("break", "work")
  console.log("BREAAAK")
  new Audio("./assets/sounds/Chookity 2.wav").play()
}
function checkTimer(now, next) {
  let checkTimerTimeout = setTimeout(() => checkTimer(now, next), 1000)
  if (timerEnded === true) {
    timerEnded = false
    time[now] = false
    time[next] = true
    handlePomodoro()
    clearTimeout(checkTimerTimeout)
  }
  
  console.log("worktime is " + time.work, time.break)
}

function updateTimer() {
  seconds--
  totalSeconds++
  if (totalSeconds > 59) {
    minutes++
    seconds = 0
  }
  if (minutes >= 1 && seconds < 0) {
    minutes--
    seconds = 59
  }
  minutesEl.innerHTML = minutes.toString().padStart(2, '0')
  secondsEl.innerHTML = seconds.toString().padStart(2, '0')
  totalMinutesEl.innerHTML = totalMinutes.toString().padStart(2, '0')
  totalSecondsEl.innerHTML = totalSeconds.toString().padStart(2, '0')
  let timerTimeout = setTimeout(updateTimer, 1000)
  if (minutes < 1 && seconds <= 0) {
    clearTimeout(timerTimeout)
    timerEnded = true
  }
  if (startBtn.innerHTML === resumeSvg) {
    clearTimeout(timerTimeout)
  } 
}
function playVideos() {
  video1El.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
  video2El.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
}

function pauseVideos() {
  video1El.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
  video2El.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
}