var x=500;
var y=500;
var v=0.1;
var vx=0.01;
var px=0;
var ax=0.2;
function setup() {
 createCanvas(windowWidth,windowHeight); 
}

function draw() {
  clear();
fill(0);
 textSize(40);
 text("Rx: " + rotationX, 100, 100);
 text("Ry: " + rotationY, 100, 150);
 
 drawBalle();
 
/**************************/

ax = y * v;
ay = x * v;
vx += ax;
px += vx;
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

