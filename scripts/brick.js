// CREATE THE BRICKS
const brick = {
  width: canvas.width / 15 - 20,
  height: 35,
  row: 1,
  column: canvas.width / (canvas.width / 15),
  offSetLeft: 18,
  offSetTop: 40,
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
        powerUp: null,
      };
    }
  }
}

createBricks();
const bricksImages = [
  "gaintball",
  "red",
  "yellow",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "gaintpaddle",
  "yellow",
  "blue",
  "green",
  "orange",
  "purple",
];
function drawBricks() {
  let count = 0;
  for (let r = 0; r < brick.row; r++) {
    for (let c = 0; c < brick.column; c++) {
      let b = bricks[r][c];
      if (b.status) {
        ctx.fillStyle = brick.fillColor;
        // ctx.fillRect(b.x, b.y, brick.width, brick.height);
        base_image = new Image();
        const img = bricksImages[count];
        base_image.src = `img/brick/${img}.webp`;
        if (count === 0) {
          b.powerUp = "gaintball";
        }
        if (count === 8) {
          b.powerUp = "gaintpaddle";
        }

        ctx.drawImage(base_image, b.x, b.y, brick.width, brick.height);

        ctx.strokeStyle = brick.strokeColor;
        // ctx.strokeRect(b.x, b.y, brick.width, brick.height);
      }
      count += 1;
      if (count >= bricksImages.length) {
        count = 0;
      }
    }
  }
}
