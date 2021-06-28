const wallhit = document.getElementById("wallhit");
const brickhit = document.getElementById("brickhit");
const paddlehit = document.getElementById("paddlehit");
const buttonhover = document.getElementById("buttonhover");
const lifelost = document.getElementById("lifelost");
const coffindance = document.getElementById("coffindance");
const bonus = document.getElementById("bonus");
const levelup = document.getElementById("levelup");
const AhSitHereWeGo = document.getElementById("AhSitHereWeGo");

const theme = document.getElementById("theme");

function playAudio(name) {
  if (name === "theme") {
    AhSitHereWeGo.currentTime = 0;
    AhSitHereWeGo.pause();

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
  } else if (name === "coffindance") {
    coffindance.currentTime = 0;
    coffindance.volume = 0.2;
    coffindance.play();
  } else if (name === "bonus") {
    bonus.currentTime = 0;
    bonus.play();
  } else if (name === "levelup") {
    levelup.currentTime = 0;
    levelup.play();
  } else if (name === "AhSitHereWeGo") {
    AhSitHereWeGo.currentTime = 0;
    AhSitHereWeGo.volume = 0.2;
    AhSitHereWeGo.play();
  }
  // console.log(name);
}
