const theme = document.getElementById("theme");

document.querySelector(".playbtn").addEventListener("click", () => {
  document.querySelector(".homescreen").style.display = "none";
  start();
  theme.volume = 0.1;
  theme.play();
});

function ballWallCollision() {
  if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
    ball.dx = -ball.dx;
    playAudio("wallhit");
  }

  if (ball.y - ball.radius < 0) {
    ball.dy = -ball.dy;
    playAudio("wallhit");
  }

  if (ball.y + ball.radius > canvas.height) {
    //   LIFE--; // LOSE LIFE
    //   LIFE_LOST.play();
    resetBall();
  }
}

// CREATE THE BRICKS
const brick = {
  width: 80,
  height: 20,
  row: 2,
  column: canvas.width / 110,
  offSetLeft: 23,
  offSetTop: 20,
  marginTop: 40,
  fillColor: "#2e3548",
  strokeColor: "#FFF",
};

let bricks = [];

function createBricks() {
  for (let r = 0; r < brick.row; r++) {
    bricks[r] = [];
    for (let c = 0; c < brick.column; c++) {
      bricks[r][c] = {
        x: c * (brick.offSetLeft + brick.width) + brick.offSetLeft,
        y:
          r * (brick.offSetTop + brick.height) +
          brick.offSetTop +
          brick.marginTop,
        status: true,
      };
    }
  }
}

createBricks();

// draw the bricks
function drawBricks() {
  for (let r = 0; r < brick.row; r++) {
    for (let c = 0; c < brick.column; c++) {
      let b = bricks[r][c];
      // if the brick isn't broken
      if (b.status) {
        ctx.fillStyle = brick.fillColor;
        ctx.fillRect(b.x, b.y, brick.width, brick.height);

        ctx.strokeStyle = brick.strokeColor;
        ctx.strokeRect(b.x, b.y, brick.width, brick.height);
      }
    }
  }
}

// ball brick collision
function ballBrickCollision() {
  for (let r = 0; r < brick.row; r++) {
    for (let c = 0; c < brick.column; c++) {
      let b = bricks[r][c];
      // if the brick isn't broken
      if (b.status) {
        if (
          ball.x + ball.radius > b.x &&
          ball.x - ball.radius < b.x + brick.width &&
          ball.y + ball.radius > b.y &&
          ball.y - ball.radius < b.y + brick.height
        ) {
          playAudio("brickhit");
          wallhit.play();
          ball.dy = -ball.dy;
          b.status = false; // the brick is broken
          //   SCORE += SCORE_UNIT;
        }
      }
    }
  }
}

// BALL AND PADDLE COLLISION
function ballPaddleCollision() {
  if (
    ball.x < paddle.x + paddle.width &&
    ball.x > paddle.x &&
    paddle.y < paddle.y + paddle.height &&
    ball.y > paddle.y
  ) {
    // PLAY SOUND
    playAudio("paddlehit");

    // CHECK WHERE THE BALL HIT THE PADDLE
    let collidePoint = ball.x - (paddle.x + paddle.width / 2);

    // NORMALIZE THE VALUES
    collidePoint = collidePoint / (paddle.width / 2);

    // CALCULATE THE ANGLE OF THE BALL
    let angle = (collidePoint * Math.PI) / 3;

    ball.dx = ball.speed * Math.sin(angle);
    ball.dy = -ball.speed * Math.cos(angle);
  }
}
function update() {
  moveBall();
  ballWallCollision();
  ballPaddleCollision();
  ballBrickCollision();
  movePaddle();
}

// DRAW FUNCTION
function draw() {
  drawPaddle();
  drawBall();
  drawBricks();
}

function start() {
  // CLEAR THE CANVAS
  //   ctx.drawImage(BG_IMG, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();

  update();

  // if(! GAME_OVER){
  requestAnimationFrame(start);
  // }
}
// start();

window.onload = () => {
  document.querySelector("body").click();
  wallhit.play();
  wallhit.muted = false;
};
