let videoPlayer;
let playButton;
let progressBar;
let currentTimeDisplay;
let remainingTimeDisplay;
let prevButton;
let nextButton;

document.addEventListener('DOMContentLoaded', (event) => {
   videoPlayer = document.getElementById('video-player');
    playButton = document.getElementById('play-button');
    progressBar = document.getElementById('progress-bar');
     currentTimeDisplay = document.getElementById('current-time');
    remainingTimeDisplay = document.getElementById('remaining-time');
    prevButton = document.getElementById('prev-button');
    nextButton = document.getElementById('next-button');


      playButton.addEventListener('click', togglePlay);
      videoPlayer.addEventListener('timeupdate', updateProgressBar);
      progressBar.addEventListener('input', seekVideo);
      prevButton.addEventListener('click', seekPrevious);
      nextButton.addEventListener('click', seekNext);


});
function togglePlay() {
    if (videoPlayer.paused) {
      videoPlayer.play();
        playButton.textContent = "||";
    } else {
       videoPlayer.pause();
      playButton.textContent = "►";
    }
}
function updateProgressBar() {
    progressBar.value = videoPlayer.currentTime;
    currentTimeDisplay.textContent = formatTime(videoPlayer.currentTime);
    remainingTimeDisplay.textContent = formatTime(videoPlayer.duration - videoPlayer.currentTime)
}
function seekVideo() {
      videoPlayer.currentTime = progressBar.value;
        updateProgressBar()
}
function seekPrevious(){
  videoPlayer.currentTime = 0;
  updateProgressBar();
}
function seekNext(){
   videoPlayer.currentTime = videoPlayer.duration;
  updateProgressBar()
}
function formatTime(seconds) {
  const secs = Math.floor(seconds);
   const mins = Math.floor(secs / 60);
   const remainingSecs = secs % 60;
  return `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`
}