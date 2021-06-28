canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// GAME VARIABLES AND CONSTANTS
const PADDLE_WIDTH = 200;
const PADDLE_MARGIN_BOTTOM = 50;
const PADDLE_HEIGHT = 40;
const BALL_RADIUS = 20;
let LIFE = 3;
let SCORE = 0;
const SCORE_UNIT = 10;
let LEVEL = 1;
const MAX_LEVEL = 100;
let GAME_OVER = false;
