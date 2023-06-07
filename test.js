const testBtn2 = document.getElementById("test")
const volumeControl = document.querySelector('.volume-control');
const volumeBarContainer = document.querySelector('.volume-bar-container');
const volumeBar = document.querySelector('.volume-bar');
const volumeBarThumb = document.querySelector('.volume-bar-thumb');
const volumeSvg = document.querySelector('#volume-svg');
const containerRect = volumeBarContainer.getBoundingClientRect();
let newPosition = ""
volumeBar.style.height = `${containerRect.height - newPosition}px`;
volumeBarThumb.style.bottom = `${containerRect.height - newPosition}px`; 

testBtn2.addEventListener("click", () => {
  console.log(55555)
})
let isDragging = false;

volumeSvg.addEventListener('mouseenter', function () {
  volumeBarThumb.style.cssText = `visibility: visible; opacity: 1;`
  volumeBarContainer.style.cssText = `visibility: visible; opacity: 1;`
  volumeBar.style.cssText = `visibility: visible; opacity: 1;`
  volumeBar.style.height = `${containerRect.height - newPosition}px`;
  volumeBarThumb.style.bottom = `${containerRect.height - newPosition}px`; 
});

// volumeSvg.addEventListener('mouseleave', function () {
//   if (!isDragging) {
//     volumeBarThumb.style.visibility = "visible";
//     volumeBarContainer.style.visibility = "visible";
//     volumeBar.style.visibility = "visible";
//   }
// });
// volumeControl.addEventListener('mouseenter', function () {
//   volumeBarThumb.style.visibility = "visible";
//   volumeBarContainer.style.visibility = "visible";
//     volumeBar.style.visibility = "visible";
// });

volumeControl.addEventListener('mouseleave', function () {
  if (!isDragging) {
    volumeBarThumb.style.cssText = `visibility: hidden; opacity: 0;`
    volumeBarContainer.style.cssText = `visibility: hidden; opacity: 0;`
    volumeBar.style.cssText = `visibility: hidden; opacity: 0;`
  }
});

volumeBarThumb.addEventListener('mousedown', function (event) {
  isDragging = true;
  document.addEventListener('mousemove', moveVolumeBarThumb);
});

document.addEventListener('mouseup', function () {
  if (isDragging) {
    isDragging = false;
    document.removeEventListener('mousemove', moveVolumeBarThumb);
  }
});

function moveVolumeBarThumb(event) {
  const containerRect = volumeBarContainer.getBoundingClientRect();
   newPosition = Math.max(
    0,
    Math.min(event.clientY - containerRect.top, containerRect.height)
  );
  let volume = newPosition / containerRect.height; 
  volumeBar.style.height = `${containerRect.height - newPosition}px`;
  volumeBarThumb.style.bottom = `${containerRect.height - newPosition}px`;
  
  if (player && player.setVolume) {
    player.setVolume(volume * 100);
  }

}