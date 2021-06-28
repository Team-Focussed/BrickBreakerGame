const username = document.querySelector(".username");

document.querySelectorAll(".levelbox").forEach((level) => {
  level.addEventListener("click", () => {
    document.querySelector(".level").style.display = "none";
    playAudio("theme");
    start();
    ball.speed = parseInt(level.dataset.speed);
  });
});

if (username) {
  username.addEventListener("change", (e) =>
    localStorage.setItem("username", e.target.value)
  );
  username.value = localStorage.getItem("username")
    ? localStorage.getItem("username")
    : "";
}

document.querySelectorAll(".levelbox").forEach((a) => {
  a.addEventListener("mouseover", () => {
    playAudio("buttonhover");
  });
  console.log(a);
});

async function getLeaderBoaard() {
  const response = await fetch(
    "https://bricksbackend.azurewebsites.net?endpoint=B"
  );

  const data = await response.json();
  return data;
}
const video = document.querySelector("video");

// // document.querySelector('.leaderboard').<div class="row">
// // <div class="name">Gaurav</div>
// // <div class="point">45</div>
// // </div>

window.onload = async () => {
  if (video) {
    video.play();
  }
  const card = document.querySelector(".leaderboard .card");
  const datas = await getLeaderBoaard();
  if (card) {
    var row = "";
    datas.map((data) => {
      row += `
    <div class="row">
      <div class="name">${data.name}</div>
      <div class="point">${data.score}</div>
    </div>
  `;
    });
    card.innerHTML += row;
  }
};
