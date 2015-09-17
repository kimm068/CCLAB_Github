function setup(){
	createCanvas(1060, 600);
  strokeWeight(5);
  stroke(0);


}


function draw(){

  
  if (mouseIsPressed) {
  	fill(200,20,200); 
  	ellipse(mouseX, mouseY, mouseY/3, mouseX/3);
    
  } else {
  	fill(20,20,255);
  	rect(mouseY,mouseX,mouseX/2,mouseY/2);
  }
  // ellipse(mouseX, mouseY, mouseY, mouseX);
  // rect(mouseY,mouseX,40,40);
}
  