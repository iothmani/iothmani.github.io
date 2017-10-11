document.ontouchmove = function(event){
 event.preventDefault();
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 rectMode(CENTER);
 stroke(0);
 fill(0);
 strokeWeight(5);
}

function draw(){
 background(255);
 beginShape();
 for(var i=0;i<touches.length;i++){
  vertex(touches[i].x,touches[i].y,150,150);
  }
  endShape();
}
