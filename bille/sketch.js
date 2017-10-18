var x=500;
var y=500;
var v=0.1;
function setup() {
 createCanvas(windowWidth,windowHeight); 
}

function draw() {
  clear();

 textSize(40);
 text("Rx: " + rotationX, 100, 100);
 text("Ry: " + rotationY, 100, 150);
 
 drawBalle();
 ballMove();
}

function drawBalle(){
  fill(60);
  noStroke();
ellipse(x,y+ 5,60,60);
  fill(150);
  noStroke();
ellipse(x,y,60,60);
  fill(255);
  noStroke();
ellipse(x,y+ 10,20,20);
}
function ballMove(){
  ax = y * v;
  ay = x * v;
  
}
