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
    LIFE--;
    playAudio("lifelost");
    resetBall();
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
          SCORE += SCORE_UNIT;
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

// level up
function levelUp() {
  let isLevelDone = true;

  // check if all the bricks are broken
  for (let r = 0; r < brick.row; r++) {
    for (let c = 0; c < brick.column; c++) {
      isLevelDone = isLevelDone && !bricks[r][c].status;
    }
  }

  if (isLevelDone) {
    // WIN.play();

    if (LEVEL >= MAX_LEVEL) {
      console.log("Win");
      GAME_OVER = true;
      return;
    }
    brick.row++;
    createBricks();
    ball.speed += 0.5;
    resetBall();
    LEVEL++;
  }
}

function update() {
  moveBall();
  ballWallCollision();
  ballPaddleCollision();
  ballBrickCollision();
  movePaddle();
  gameOver();
  levelUp();
}

function showGameStats(text, textX, textY) {
  // draw text
  ctx.fillStyle = "#000";
  ctx.font = "30px Arial";

  ctx.fillText(text, textX, textY);

  // draw image
  //   ctx.drawImage(img, imgX, imgY, (width = 25), (height = 25));
}
// DRAW FUNCTION
function draw() {
  drawPaddle();
  drawBall();
  drawBricks();
  showGameStats(`Score : ${SCORE}`, 35, 50);
  showGameStats(`Lives Left : ${LIFE}`, canvas.width - 200, 50);
  showGameStats(`Level : ${LEVEL}`, canvas.width / 2, 50);
}
function gameOver() {
  const lostScreen = document.querySelector(".lost");
  if (LIFE <= 0) {
    lostScreen.querySelector(".subtitle").innerHTML = `Score = ${SCORE}`;
    lostScreen.style.display = "block";
    lostScreen.querySelector(".playagainbtn").addEventListener("click", () => {
      lostScreen.style.display = "none";
      window.location.reload();
    });
    playAudio("coffindance");
    console.log("You Loose");
    GAME_OVER = true;
  }
}

function start() {
  // CLEAR THE CANVAS
  //   ctx.drawImage(BG_IMG, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();

  update();

  if (!GAME_OVER) {
    requestAnimationFrame(start);
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw();
  }
}
// start();
