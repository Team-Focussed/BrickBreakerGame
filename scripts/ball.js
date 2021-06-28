const ball = {
  x: canvas.width / 2,
  y: paddle.y - BALL_RADIUS,
  radius: BALL_RADIUS,
  speed: 4,
  dx: 3 * (Math.random() * 2 - 1),
  dy: -3,
};

// DRAW THE BALL
function drawBall() {
  ctx.beginPath();

  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = "#9396A1";
  ctx.fill();
  // base_image = new Image();
  // base_image.src = `img/ball.png`;
  // base_image.style.borderRadius = "100%";
  // ctx.drawImage(base_image, ball.x, ball.y, ball.radius * 2, ball.radius * 2);
  // var thumbImg = document.createElement("img");

  // thumbImg.src = "img/ball.png";
  // thumbImg.onload = function () {
  //   ctx.save();
  //   ctx.beginPath();
  //   ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  //   ctx.closePath();
  //   ctx.clip();

  //   ctx.drawImage(thumbImg, ball.x, ball.y, ball.radius * 2, ball.radius * 2);

  //   ctx.beginPath();
  //   ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  //   // ctx.fillStyle = "#fff";
  //   ctx.clip();
  //   ctx.closePath();
  //   ctx.restore();
  // };

  ctx.stroke();

  ctx.closePath();
}

// MOVE THE BALL
function moveBall() {
  ball.x += ball.dx;
  ball.y += ball.dy;
}
function resetBall(speed = 10) {
  ball.x = canvas.width / 2;
  ball.y = paddle.y - BALL_RADIUS;
  ball.dx = speed * (Math.random() * 2 - 1);
  ball.dy = -speed;
}
