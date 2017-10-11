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
 textSize(40);

 for(var i=0;i<touches.length;i++){
  ellipse(touches[i].x,touches[i].y,80,80);
text(touches[i].x,touches[i].y,20,20);
  }
  fill(200,155,155);
   beginShape();
   
   for(var i=0;i<touches.length;i++){
  vertex(touches[i].x,touches[i].y);
  }
  endShape(CLOSE);

}


