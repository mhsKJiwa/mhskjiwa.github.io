var img;

function preload() {
  img = createImg('dance.gif');
}

function setup() {
  // put setup code here
  createCanvas(winodwWidth,windowHeight);
}

function draw() {
  // put drawing code here
  img.position(100,100);
}
