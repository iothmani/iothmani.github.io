var dummy = [];
var dummyMax;
function setup() {
  createCanvas(windowWidth,windowHeight);
  dummyMax = random(4,8);
  
  for(var i=0;i<dummyMax;i++){
    dummy[i]=new Object;
    dummy[i].x=random(0,windowWidth);
    dummy[i].y=random(0,windowHeight);
    
  }
}

function draw() {
  //noFill();
  beginShape();
  textSize(20);
  for(var i=0;i<dummy.length;i++) {
    ellipse(dummy[i].x,dummy[i].y,80,80);
    vertex(dummy[i].x,dummy[i].y);
    text("x="+ floor (dummy[i].x),dummy[i].x,dummy[i].y);
    text("y="+ floor (dummy[i].y),dummy[i].y,dummy[i].x);
  }
  endShape(CLOSE);
}
  
