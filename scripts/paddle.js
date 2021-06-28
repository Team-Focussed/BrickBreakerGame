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
  ctx.fillStyle = "#fff";
  // ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
  base_image = new Image();
  base_image.src = `img/paddle.png`;
  ctx.drawImage(base_image, paddle.x, paddle.y, paddle.width, paddle.height);
}

function movePaddle() {
  document.addEventListener("mousemove", (e) => {
    if (100 < e.clientX && e.clientX < window.innerWidth - 100) {
      paddle.x = e.clientX - PADDLE_WIDTH / 2;
    }
  });
}
