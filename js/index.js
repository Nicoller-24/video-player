const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pausa = document.querySelector("#pausa");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");

$play.addEventListener("click", handlePlay);
$pausa.addEventListener("click", handlePausa);

function handlePlay() {
  $play.hidden = true;
  $pausa.hidden = false;
  $video.play();
  console.log("le diste click al boton de play");
}

function handlePausa() {
  $play.hidden = false;
  $pausa.hidden = true;
  $video.pause();
  console.log("le diste click al boton de pausa");
}

$backward.addEventListener("click", handleBackward);

function handleBackward() {
  //$video.currentTime = $video.currentTime - 10;
  $video.currentTime -= 10;
  console.log("para atrás 10 segundos", $video.currentTime);
}

$forward.addEventListener("click", handleForward);

function handleForward() {
  $video.currentTime = $video.currentTime + 10;
  console.log("para adelante 10 segundos", $video.currentTime);
}

const $progress = document.querySelector("#progress");

$video.addEventListener("loadedmetadata", handleLoaded);
$video.addEventListener("timeupdate", handleTimeUpdate);

function handleLoaded() {
  $progress.max = $video.duration;
  console.log("ha cargado mi video", $video.duration);
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime;
  //console.log("holi", $video.currentTime);
}

$progress.addEventListener("input", handleInput);

function handleInput() {
  $video.currentTime = $progress.value;
  console.log($progress.value);
}
