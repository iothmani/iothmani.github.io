var posX;
var posY;
var multiplier;
var vY, vX;
var aX, aY;
var Size;
var bounce;

function setup() {
  createCanvas(windowWidth, windowHeight);
  vX = 0;
  vY = 0;
bounce=0.1;

  posX = windowWidth / 2;
  posY = windowHeight / 2;
  Size=60;
}

function draw() {
  clear();
  background(255);
 drawBalle();
  


  textSize(40);
  text("Rx: " + rotationX, 100, 100);
  text("Ry: " + rotationY, 100, 150);
  text("version13",100,200);

  if((posY+Size/2)>=windowHeight)
  {vY=-vY*bounce;
  posX= windowHeight-Size/2;
  }
  
  else if((posX-Size/2)<=0)
  {vX=-vX*bounce
  posX=Size/2}
  
  if((posX+Size/2)>=windowWidth)
  {vX=-vX*bounce;
  posY= windowWidth-Size/2;
  }
  
  else if((posY-Size/2)<=0)
  {vY=-vY*bounce
  posY=Size/2}
  
  /**************************/
  multiplier = 0.01;

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
  ellipse(posX, posY, Size, 60);

}