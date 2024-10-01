let radio = 80;
let posX;
let posY;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#000000");

  fill("#ffffff");
  posX = width / 2;
  posY = height / 2;
  circle(posX, posY, radio);
}
