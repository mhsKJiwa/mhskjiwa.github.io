/* Moving things and staying on the canvas
Kayden Jiwa
2019-04-4*/

//position variables
var posX= 100;
var posY = 600;
// speed variables
var speedX = 15;
var speedY = 15;
y=100
x=100

function setup() {
  var myCanvas = createCanvas(1200,800);

}



function draw() {
  background(125,178,61);
  if(posX < 0) {
    background(255,0,0)
    textSize(50)
    textAlign(CENTER)
    text("GAME OVER", width/2, height/2)
    textSize(25)
    text('PRESS F5 TO PLAY AGAIN', width/2, height/2+50)
  }


else if(posX > 0) {




  rect(x,y,30,250)

  if (keyIsDown(UP_ARROW)) {
    y -= 20;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 20;
  }


  background(125,178,61);

	rect(x,y,30,250)
	circle(posX, posY, 10, 10);

	  hit = collideRectCircle(x,y,30,250,posX,posY,10);{

	print("colliding? " + hit);

  if (hit) {
    speedX=speedX*-1
    speedY=speedY*-1
  }
}



  //rect(10,50,10,50)
  drawball();
}


function drawball() {
  //draw ball
  fill(255);
  circle(posX, posY, 10, 10);

  //move ball
  posX+=speedX;
  posY+=speedY;

  // New code for staying on the canvas
  if (posX > width) {    // the object has moved off the canvas to the right
      speedX = -speedX;
  }

  if (posY > height) {    // the object has moved off the canvas to the bottom
      speedY = -speedY;
  }

  if (posY <0) {    // the object has moved off the canvas to the top
      speedY = -speedY;
}

if (posX <0) {    // the object has moved off the canvas to the lefft
    speedX = -speedX;


}
}
}
