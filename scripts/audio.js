const wallhit = document.getElementById("wallhit");
const brickhit = document.getElementById("brickhit");
const paddlehit = document.getElementById("paddlehit");

function playAudio(name) {
  if (name === "wallhit") {
    wallhit.currentTime = 0;
    wallhit.play();
  } else if (name === "brickhit") {
    brickhit.currentTime = 0;
    brickhit.play();
  } else if (name === "paddlehit") {
    paddlehit.currentTime = 0;
    paddlehit.play();
  }
  console.log(name);
}
