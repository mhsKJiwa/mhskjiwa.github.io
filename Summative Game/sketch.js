/* Summative Game Pong Hockey
Kayden Jiwa
Started Tuesday June 4th*/

// Global Variables
var posX= 640;
var posY = 453;
var speedX = 0;
var speedY = 0;
var randdirection = [-1,1]
y=403
x=270
a=993
b=403
let level = 1;
let img;

//Variables for Score
let score1 = 0
let score2 = 0
let c1 = 200;
let c2 = 200;
let c3 = 255;
let c4 = 255;
let c5 = 255;
let c6 = 255;
let c7 = 255;
let c8 = 255;

function preload() {
  img = loadImage('Hockey_Rink.png');
}

function setup() {
  createCanvas(1275,800);
}

function draw() {
  createCanvas(1275,800);


//-------------------------H SCREEN---------------------------
  if (level===1){
    background(0)
    textSize(60)
    textAlign(CENTER)
    fill(64,179,187)
    text("PONG HOCKEY", width/2, height/2-280)
    textSize(25)
    textAlign(CENTER)
    fill(255)
    text("THE LEFT SIDE USES KEYS W&S TO MOVE UP & DOWN ", width/2, height/2-50)
    textSize(25)
    textAlign(CENTER)
    fill(255)
    text("Object of the game: ", width/2, height/2-190)
    textSize(25)
    textAlign(CENTER)
    fill(255)
    text("Dont let the puck cross your paddle the puck gets faster has the game gets longer ", width/2, height/2-130)
    textSize(25)
    fill(255)
    text('AND THE RIGHT SIDE USES THE UP AND DOWN ARROW KEYS', width/2, height/2+20)
    textSize(15)
    textAlign(CENTER)
    fill(231,67,67)
    text("PRESS ENTER TO GET TO THE GAME SCREEN", width/2, height/2+100)
    textSize(15)
    textAlign(CENTER)
    fill(231,67,67)
    text("THEN PRESS SPACEBAR TO START THE GAME AND MAKE THE PUCK START AFTER EACH POINT", width/2, height/2+150)
    textSize(15)
    textAlign(CENTER)
    fill(231,67,67)
    text("*DISCLAIMER* when the puck passes the red line your paddles on, the opponenent gets a point NOT when it goes in the tiny net", width/2+160, height/2+380)

  if (keyIsDown(13)){
      level=2;
    }
  }//End Level 1
//--------------------------GAME SCREEN----------------------------
 if (level===2){
      //Set pos for scoreboard
      let posScore2 = 637.5-75;
      let posScore1 = 637.5+50;

      background(150);
      fill(0);
      image(img,190,220,900,460);

  //Set Score
   if (score1===0) {
     c1=200;
     textSize(170);
     fill(c1)
     text('0', posScore2,160)
   }
   if (score2===0) {
   c2=200
   textSize(170)
   fill(c2)
   text('0',posScore1,160)
 }
 if (score1===1) {
   c4=200;
   c2=255;
   textSize(170)
   fill(c4)
   text('1',posScore2,160)
 }
  if (score2===1) {
    c4=200;
    c2=255;
    textSize(170)
    fill(c4)
    text('1',posScore1,160)
  }
  if (score1===2) {
    c5=200;
    c3=255;
    textSize(170)
    fill(c5)
    text('2',posScore2,160)
  }
   if (score2===2) {
     c6=200;
     c4=255;
     textSize(170)
     fill(c6)
     text('2',posScore1,160)
   }
   if (score1===3) {
     c5=200;
     c3=255;
     textSize(170)
     fill(c5)
     text('3',posScore2,160)
   }
    if (score2===3) {
      c6=200;
      c4=255;
      textSize(170)
      fill(c6)
      text('3',posScore1,160)
    }

    textSize(140)
    textAlign(CENTER)
    fill(200)
    text(":", posScore1-63,136)


 if (posX < 0) {

  /*  textSize(50)
    textAlign(CENTER)
    text("GAME OVER", width/2, height/2)
    textSize(25)
    text('PRESS F5 TO PLAY AGAIN', width/2, height/2+50)*/
    }

    else if (posX > 0) {

      //-----------LEFT PADDLE----------------
      fill(0)
      rect(x,y,12,100)

      if (keyIsDown(87) && y > 235) {
        y -= 15;
      }

      if (keyIsDown(83) && y+100 < 672) {
        y += 15;
      }

  //-------------RIGHT PADDLE---------------
      rect(a,b,12,100)


      if (keyIsDown(38) && b > 235) {
        b -= 15;
      }

      if (keyIsDown(40) && b+100 < 672) {
        b += 15;

      }

      //----------------PUCK---------------------
      circle(posX, posY, 8, 8);


      hit1 = collideRectCircle(a,b,12,100,posX,posY,10);
      hit2 = collideRectCircle(x,y,12,100,posX,posY,10);


      print("colliding? " + hit1);
      print("colliding? " + hit2);

      if (hit1 || hit2) {
      speedX=speedX*-1.1
      speedY=speedY*random(randdirection)

    }
    drawball();
  }
  if (score1===3) {
    level = 3;
  }
  if (score2===3) {
    level = 4;
  }
} //End Level 2
if (level===3){
  background(200);
  textSize(60)
  textAlign(CENTER)
  fill(0)
  text("THE LEFT SIDE WINS!", width/2, height/2)
  textSize(60)
  textAlign(CENTER)
  fill(0)
  text("CONGRATULATIONS", width/2, height/2-100)
  textSize(60)
  textAlign(CENTER)
  fill(0)
  text("press F5 to play again", width/2, height/2+90)
}
if (level===4){
  background(200);
  textSize(60)
  textAlign(CENTER)
  fill(0)
  text("THE RIGHT SIDE WINS!", width/2, height/2)
  textSize(60)
  textAlign(CENTER)
  fill(0)
  text("CONGRATULATIONS", width/2, height/2-100)
  textSize(60)
  textAlign(CENTER)
  fill(0)
  text("press F5 to play again", width/2, height/2+90)
 }//End Draw
}



function keyPressed() {
  if (keyCode === 32){
    speedX=5;
    speedY=5;

  }//End If
  print(score1);
  print(score2);
}//End function keyIsPressed

function drawball() {
  //draw ball
  fill(0);
  circle(posX, posY, 8, 8);

//move ball
 posX+=speedX;
 posY+=speedY;

  // New code for staying on the canvas
  if (posX>1080) {
    posX = 640;
    posY = 453;
    score1+=1;
    speedX = 0;
    speedY = 0;
  }
  if (posX<197) {
    posX = 640;
    posY = 453;
    score2+=1;
    speedX = 0;
    speedY = 0;
  }

  if (posY >672 || posY <235) {    // the object has moved off the canvas to the top/bottom
      speedY = -speedY;
  }
} //End function drawball
if (level===3){
  background(0)
  textSize(60)
  textAlign(CENTER)
  fill(64,179,187)
  text("PONG HOCKEY", width/2, height/2-280)
}
