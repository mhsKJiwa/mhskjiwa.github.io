/* using the mouse to creat e a shappe that changes colours and moves 
Kayden Jiwa
2019-04-4*/

//position variables

mouseY=100
mouseX=100

function setup() {
  var myCanvas = createCanvas(1200,800);

}

function draw() {
  // put drawing code here
}

function mouseMoved() {
  // This function is called whenever the mouse is moved
  rect(mouseX, mouseY, 100, 100); // Draw a rectangle
}
function mouseClicked() {
  // This function is called whenever the mouse is clicked
  // (but the mouse must not be moving at the same time)
  // and will change the fill colour randomly
  fill(random(255), random(255), random(255));
}
