const username = document.querySelector(".username");

document.querySelectorAll(".levelbox").forEach((level) => {
  level.addEventListener("click", () => {
    document.querySelector(".level").style.display = "none";
    playAudio("theme");
    start();
    ball.speed = parseInt(level.dataset.speed);
  });
});
const instructionbtn = document.querySelector(".instructionbtn");
const instruction = document.querySelector(".instruction");
if (instructionbtn) {
  instructionbtn.addEventListener("click", () => {
    instruction.style.display = "block";
    instruction.querySelector(".close").addEventListener("click", () => {
      instruction.style.display = "none";
    });
    // instruction.querySelector(".playagainbtn").addEventListener("click", () => {
    //   instruction.style.display = "none";
    //   window.location.reload();
    // });
  });
}

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
});

async function getLeaderBoaard() {
  const response = await fetch(
    "https://bricksbackend.azurewebsites.net?endpoint=B"
  );

  const data = await response.json();
  return data;
}
const video = document.querySelector("video");

async function getUserRank(username) {
  const res = await fetch(
    `https://bricksbackend.azurewebsites.net/me?endpoint=B&name=${username}`
  );
  const data = await res.json();
  return data;
}

window.onload = async () => {
  if (video) {
    video.play();
  }
  const card = document.querySelector(".leaderboard .card");
  const datas = await getLeaderBoaard();
  const userRank = await getUserRank(
    localStorage.getItem("username").toLowerCase()
  );
  if (card) {
    var row = "";
    datas.map((data, index) => {
      row += `
    <div class="row">
      <div class="name">${index + 1}</div>
      <div class="name">${data.name}</div>
      <div class="point">${data.score}</div>
    </div>
  `;
    });
    card.innerHTML += row;

    if (!userRank.error) {
      card.innerHTML += `
    <div class="row userrank">
      <div class="rank">${userRank.position}</div>
      <div class="name">you</div>
    <div class="point">${userRank.score}</div>
  </div>
    `;
    }
  }
};
