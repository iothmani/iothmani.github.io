var maBalle;
var balles = [];
var maxBalles=20;
function setup() {
  createCanvas(windowWidth,windowHeight);
  
for(var i = 0; i < maxBalles; i++) {
  balles[i] = new Balle;
   }
}
//********************************************
function draw() {
  clear();
  /*
  if(yPos>windowHeight || yPos<0){
    ySpeed =-ySpeed;
    eColor = color(random(0,255),random(0,255),random(0,255));
  }
  if(xPos>windowWidth|| xPos<0){
    xSpeed =-xSpeed;
    eColor = color(random(0,255),random(0,255),random(0,255));
  }*/
  for(var i = 0; i < maxBalles; i++) {
  drawEllipse(balles[i].xPos,balles[i].yPos,balles[i].eSize,balles[i].eColor);
   }
 
}
//********************************************
function drawEllipse(x,y,s,c){
  fill(c);
  stroke(3);
  ellipse(x,y,s,s);
}
//********************************************
function Balle(){
  this.eSize= 100;
  this.xPos = random(0,windowWidth);
  this.yPos = random(0,windowHeight);
  this.eColor = color(250,150,50);
  this.xSpeed = 7;
  this.ySpeed = 7;
}
