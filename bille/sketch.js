var posX;
var posY;
var multiplier;
var vY, vY;
var aX, aY;

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  clear();
  background(255);
  fill(0);
  vX = 0;
  vY = 0;

  posX = windowWidth / 2;
  posY = windowHeight / 2;

  textSize(40);
  text("Rx: " + rotationX, 100, 100);
  text("Ry: " + rotationY, 100, 150);

  drawBalle();

  /**************************/
  multiplier = 0.06;

  aX = rotationY * multiplier;
  aY = rotationX * multiplier;

  vX += aX;
  vY += aY;

  posX += vX;
  posY += vY;

}

function drawBalle() {
  fill(60);

  noStroke();
  ellipse(posX, posY, 60, 60);

}