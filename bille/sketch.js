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
  Size=80;
}

function draw() {
clear();
drawBalle();
  

fill(0);
  textSize(40);
  text("Rx: " + rotationX, posX+37, posY);
  text("Ry: " + rotationY, posY+160, posX-100);
  text("version17",200,200);
  
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
  ellipse(posX, posY, Size, 80);
fill(150);
  noStroke();
  ellipse(posX, posY+5, Size, 80);
  fill(255);
  noStroke();
  ellipse(posX+10, posY+4, 20, 20);
  
}

