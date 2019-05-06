//Global variables//

let choices = ['Rock','Paper','Scissors'];
let userChoice;
let hit1 = false;
let hit2 = false;
let hit3 = false;


function setup() {

	createCanvas(1280,880);
	background(255);
}

function draw() {
	textSize(45);
	fill(0)
	text('Rock, Paper, Scissors', 420, 80);
	fill(0);


	textSize(35);
	fill(232, 97, 97);
	text('My choice', 110, 200);

	textSize(25);
	fill(232, 97, 97);
	text('The leprechaun stuck', 870, 200);

	textSize(25);
	fill(232, 97, 97)
	text('inside the computers choice',840,220)

	textSize(18);
	fill(52, 89, 153)
	text('Rock & Rock is a tie',100,620)

	textSize(18);
	fill(52, 89, 153)
	text('Rock & Paper is a lose',100,640)

	textSize(18);
	fill(52, 89, 153)
	text('Rock & Scissors is a win',100,660)

	textSize(18);
	fill(52, 89, 153)
	text('Paper & Rock is a win',550,620)

	textSize(18);
	fill(52, 89, 153)
	text('Paper & Paper is a tie',550,640)

	textSize(18);
	fill(52, 89, 153)
	text('Paper & Scissors is a win',550,660)

	textSize(18);
	fill(52, 89, 153)
	text('Scissors & Rock is a lose',960,620)

	textSize(18);
	fill(52, 89, 153)
	text('Scissors & Paper is a win',960,640)

	textSize(18);
	fill(52, 89, 153)
	text('Scissors & Scissors is a tie',960,660)



	//-----------SETUP COMPLETE------------------

  textSize(25);
  fill(0)
  text('Rock', 100, 300);

  fill(151, 242, 128);
  ellipse(230,290,35,35);
//(mouseX,mouseY);
  hit1 = collidePointEllipse(mouseX,mouseY,230,290,35,35)



//---------------------Setup for rock and the multiple choice dot------------------

	textSize(25);
	fill(0)
	text('Paper', 100, 400);

	fill(151, 242, 128);
	ellipse(230,390,35,35);
  //point(mouseX,mouseY);
    hit2 = collidePointEllipse(mouseX,mouseY,230,390,35,35)




//------------------------setup for paper and the multiple choice dot---------


	textSize(25);
	fill(0)
	text('Scissors', 100, 500);
	fill(0);

	fill(151, 242, 128);
	ellipse(230,490,35,35);
  //point(mouseX,mouseY);
    hit3 = collidePointEllipse(mouseX,mouseY,230,490,35,35)


}
  function mouseClicked() {

      if(hit1===true || hit2===true || hit3===true) {
      clear();
      userChoice=random(choices);
      print(userChoice);
			textSize(40)
			fill(0)
      text(userChoice,960,400);
  	}
	}
