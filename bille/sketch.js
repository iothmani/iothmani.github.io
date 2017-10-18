var posX;
var posY;
var multiplier;
var vx, vy;
var px, py;
var ax, ay;

function setup() {
  createCanvas(windowWidth, windowHeight);
 
}

function draw() {
  clear();
  background(255);
  fill(0);
  vx=0;
  vy=0;
  
  posX = windowWidth / 2;
  posY = windowHeight / 2;

  textSize(40);
  text("Rx: " + rotationX, 100, 100);
  text("Ry: " + rotationY, 100, 150);

  drawBalle();

  /**************************/
multiplier= 0.06;

  ax = rotationY * multiplier;
  ay = rotationX * multiplier;
  
  vx += ax;
  vy += ay;
  
  posX+=vx;
  posY+=vy;
  
}

function drawBalle() {
  fill(60);
  ellipse()
  noStroke();
  ellipse(posX, posY + 5, 60, 60);
  fill(150);
  noStroke();
  ellipse(posX, posY, 60, 60);
  fill(255);
  noStroke();
  ellipse(posX, posY + 10, 20, 20);
}