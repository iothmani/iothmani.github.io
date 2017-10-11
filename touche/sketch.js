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
 background(255,200,200);
fill(255);
 textSize(40);

 for(var i=0;i<touches.length;i++){
  ellipse(touches[i].x,touches[i].y,80,80);

  }
  fill(200,155,155);
   beginShape();
   
   for(var i=0;i<touches.length;i++){
  vertex(touches[i].x,touches[i].y);
   text("x="+ floor (dummy[i].x),dummy[i].x,dummy[i].y);
    text("y="+ floor (dummy[i].y),dummy[i].y,dummy[i].x);
  }
  endShape(CLOSE);

}


