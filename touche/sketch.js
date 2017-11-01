document.ontouchmove = function(event){
 event.preventDefault();
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 rectMode(CENTER);
 stroke(0);
 //noFill();
 strokeWeight(5);
}

function draw(){
 background(255);
  fill(200,255,155);
  
 for(var i=0;i<touches.length;i++){
  ellipse(touches[i].x,touches[i].y,80,80);
  }
  
  fill(0);
  noStroke();
 textSize(40);
 
   beginShape();
   
   for(var i=0;i<touches.length;i++){
  vertex(touches[i].x,touches[i].y);
   text("x="+ floor (touches[i].x),touches[i].x + 20,touches[i].y);
    text("y="+ floor (touches[i].y),touches[i].x ,touches[i].y+ 20);

  }
  endShape(CLOSE);

}


