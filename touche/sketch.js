document.ontouchmove = function(event){
 event.preventDefault();
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 rectMode(CENTER);
 stroke(0);
 noFill();
 strokeWeight(5);
}

function draw(){
 background(255);
 
 beginShape();
 endShape(CLOSE);
 for(var i=0;i<touches.length;i++){
  ellipse(touches[i].x,touches[i].y,150,150);
  }
}
