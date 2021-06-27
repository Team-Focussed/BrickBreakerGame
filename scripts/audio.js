const wallhit = document.getElementById("wallhit");
const brickhit = document.getElementById("brickhit");
const paddlehit = document.getElementById("paddlehit");
const buttonhover = document.getElementById("buttonhover");
const lifelost = document.getElementById("lifelost");

const theme = document.getElementById("theme");

function playAudio(name) {
  if (name === "theme") {
    theme.currentTime = 0;
    theme.volume = 0.1;
    theme.play();
  } else if (name === "wallhit") {
    wallhit.currentTime = 0;
    wallhit.play();
  } else if (name === "brickhit") {
    brickhit.currentTime = 0;
    brickhit.play();
  } else if (name === "paddlehit") {
    paddlehit.currentTime = 0;
    paddlehit.play();
  } else if (name === "buttonhover") {
    buttonhover.currentTime = 0;
    buttonhover.play();
  } else if (name === "lifelost") {
    lifelost.currentTime = 0;
    lifelost.play();
  }
  console.log(name);
}