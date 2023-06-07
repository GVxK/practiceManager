const testBtn2 = document.getElementById("test")
const volumeBarContainer = document.querySelector('.volume-bar-container');
const volumeBar = document.querySelector('.volume-bar');
const volumeBarThumb = document.querySelector('.volume-bar-thumb');
const volumeSvg = document.querySelector('#volume-svg');

testBtn2.addEventListener("click", () => {
  console.log(55555)
})
let isDragging = false;

volumeSvg.addEventListener('mouseenter', function () {
  volumeBarThumb.style.opacity = 1;
  volumeBarContainer.style.opacity = 1;
    volumeBar.style.opacity = 1;
});

volumeSvg.addEventListener('mouseleave', function () {
  if (!isDragging) {
    volumeBarThumb.style.opacity = 0;
    volumeBarContainer.style.opacity = 0;
    volumeBar.style.opacity = 0;
  }
});
volumeBarContainer.addEventListener('mouseenter', function () {
  volumeBarThumb.style.opacity = 1;
  volumeBarContainer.style.opacity = 1;
    volumeBar.style.opacity = 1;
});

volumeBarContainer.addEventListener('mouseleave', function () {
  if (!isDragging) {
    volumeBarThumb.style.opacity = 0;
    volumeBarContainer.style.opacity = 0;
    volumeBar.style.opacity = 0;
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
  const newPosition = Math.max(
    0,
    Math.min(event.clientY - containerRect.bottom, containerRect.height)
  );
  // const volume = newPosition / containerRect.width;
  volumeBar.style.height = `${containerRect.height - newPosition}px`;
  volumeBarThumb.style.bottom = `${containerRect.height - newPosition}px`;
  // audio.volume = volume;
}