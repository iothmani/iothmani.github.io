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
fill(255);
 for(var i=0;i<touches.length;i++){
  ellipse(touches[i].x,touches[i].y,80,80);
  }
  fill(200,155,155);
   beginShape();
   
   for(var i=0;i<touches.length;i++){
  vertex(touches[i].x,touches[i].y);
  }
  endShape(CLOSE);

}
function touchStarted() {
 background(255);
 textSize(40);
 text("Px"touches[0].x, 100, 100);
 text("Py"touches[0].y, 200, 100);
}

