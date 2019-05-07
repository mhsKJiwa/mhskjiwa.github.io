function setup() {
  createCanvas(600,400)
  x = 100
  y = 100
  m = 2
}

function draw() {
  background(0)
  strokeWeight(4)
  stroke(255)

  var x = 0
  while(x<= width) {
    fill(0,200,255)
    ellipse(x,y,25,25)
    x = x + 50
  }
  if(x > width) {
    x = 0
    y = y + m
  }
  if(y===0) {
    y = 0
    m = 2
  }
  if(y===height) {
    y = 0
    m = 2
  }
}
