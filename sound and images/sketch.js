var voice;
var img;

function preload() {
  voice = loadSound('voice.mp3');
  img = createImg('dance.gif');
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  
   voice.setVolume(0.1);
   voice.play();

}

function draw() {
  // put drawing code here
  img.position(100,100);
}
