/* Using the Keyboard to type letters onto a canvas
*/

// Position and size variables for the blackboard
var posX = 200;
var posY = 200;
var bbWidth = 800;

// Position variables for letters
var letterX;
var letterY;

// Array to hold the letters

var letters=["Text will appear here"];


function setup() {
  var myCanvas = createCanvas(1270,850);

}

function draw() {
  background(227, 228, 229);  // grey background
  // draw a blackboard for writing on
  stroke(0);
  strokeWeight(10);
  fill(91, 127, 75);
  rect(posX, posY, bbWidth, bbWidth/2);

  textSize(35); {
  text('computer studies classroom', 410, 80);
  fill(255);

}

  textSize(35); {
  text('type on the chalkboard', 450, 130);
  fill(0);
}

  // write white characters on the blackboard
  for (var i=0; i < letters.length; i++) {
    textSize(20)
	  noStroke();
	  fill(255);
	  letterX = (i*15) % (bbWidth - 40) + posX + 20;
	  letterY = posY + 20 + 15 * floor((i*15) / (bbWidth - 40));
	  text(letters[i], letterX , letterY);
  }
}

function keyPressed() {

	 {letters.push(key);}

}
