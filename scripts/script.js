const username = document.querySelector(".username");

document.querySelectorAll(".levelbox").forEach((level) => {
  level.addEventListener("click", () => {
    document.querySelector(".level").style.display = "none";
    playAudio("theme");
    start();
    ball.speed = parseInt(level.dataset.speed);
  });
});

username.addEventListener("change", (e) =>
  localStorage.setItem("username", e.target.value)
);
username.value = localStorage.getItem("username")
  ? localStorage.getItem("username")
  : "";

document.querySelectorAll(".levelbox").forEach((a) => {
  a.addEventListener("mouseover", () => {
    playAudio("buttonhover");
  });
  console.log(a);
});
