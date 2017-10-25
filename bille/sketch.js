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
  

fill(0);
  textSize(20);
  text("version16",100,200);
  text("x="+ floor (rotation.x),rotation[i].x,rotation[i].y);
  text("y="+ floor (rotation.y),rotation[i].y,rotation[i].x);
  
/******** rebond coté *******/
  if((posY+Size/2)>=windowHeight)
  {vY=-vY*bounce;
  posY= windowHeight-Size/2;
  }
  
  else if((posY-Size/2)<=0)
  {vY= -vY *bounce
  posY=Size/2;
    
  }
  
  if((posX+Size/2)>=windowWidth)
  {vX= - vX * bounce;
  
  posX= windowWidth-Size/2;
  }
  
  else if((posX-Size/2)<=0)
  {vX= -vX *bounce
  posX=Size/2;
    
  }
  
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
  ellipse(posX, posY, 60);
fill(150);
  noStroke();
  ellipse(posX, posY+5, 60);
  fill(255);
  noStroke();
  ellipse(posX+5, posY+8, 20);
}