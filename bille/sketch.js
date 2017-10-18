var posX;
var posY;
var multiplier;
var vY, vX;
var aX, aY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  vX = 0;
  vY = 0;

  posX = windowWidth / 2;
  posY = windowHeight / 2;
}

function draw() {
  clear();
  background(255);
 drawBalle();
  


  textSize(40);
  text("Rx: " + rotationX, 100, 100);
  text("Ry: " + rotationY, 100, 150);
  text("version3",100,200);

  

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