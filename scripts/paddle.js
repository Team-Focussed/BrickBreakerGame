// CREATE THE PADDLE
const paddle = {
  x: canvas.width / 2 - PADDLE_WIDTH / 2,
  y: canvas.height - PADDLE_MARGIN_BOTTOM - PADDLE_HEIGHT,
  width: PADDLE_WIDTH,
  height: PADDLE_HEIGHT,
  dx: 5,
};

// DRAW PADDLE
function drawPaddle() {
  ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
  ctx.strokeRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

function movePaddle() {
  document.addEventListener("mousemove", (e) => {
    paddle.x = e.clientX - PADDLE_WIDTH / 2;
    // if (paddle.x + paddle.width / 2 > canvas.width) {
    //   console.log("Right");
    // } else if (paddle.x < 0) {
    //   console.log("Left");
    // }
  });
}