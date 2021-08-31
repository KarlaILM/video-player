const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forwad = document.querySelector("#forwad");

$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handlePause);

function handlePlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
  console.log("play presionado");
}
function handlePause() {
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;
  console.log("pausa presionado");
}
$backward.addEventListener("click", handleBackward);
$forwad.addEventListener("click", handleForwad);

function handleBackward() {
  $video.currentTime -= 10;
  console.log("Retroceder 10 segundos", $video.currentTime);
}
function handleForwad() {
  $video.currentTime += 10;
  console.log("Adelantar 10 segundos", $video.currentTime);
}
const $progress = document.querySelector("#progress");
$video.addEventListener("loadedmetadata", handleLoaded);
$video.addEventListener("timeupdate", handleTimeUpdate);

function handleLoaded() {
  $progress.max = $video.duration;
  console.log("A cargado el video", $video.duration);
}
function handleTimeUpdate() {
  $progress.value = $video.currentTime;
  /* console.log("Tiempo actual", $video.currentTime); */
}
$progress.addEventListener("input", handleInput);
function handleInput() {
  $video.currentTime = $progress.value;
  console.log($progress.value);
}
