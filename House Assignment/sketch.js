/*
House Assignment
Created by Kayden Jiwa
March 18, 2019
*/

function setup() {

  createCanvas(2000,1600);
}

function draw() {
   //variables
   let width=800;
   let height=width/8*4.5;
   let x=250;
   let y=375;

   stroke(0,0,0);
   fill(0,0,0);
//sky
background(153,205,255)
    //base
fill(192,192,192)
    rect(x, y, width, height);
    // roof
   fill(255,102,102)
    triangle(x,y,x+width,y,x+width/2,y-(height/1.5));

    // door
fill(224,224,224);
rectMode(CENTER);
rect(x+width/2,y+height/1.22,width/8, height/2.7)
rectMode(CORNER);


  // door handle
  fill(0,0,0)
  ellipse(x+width/1.9,y+height/1.26,width/65, height/45);


//window
fill(255,255,255)
rect(x+width/8,y+height/8,width/8, height/4)


rect(x+width/1.4,y+height/7,width/8, height/4)

// sun
fill(255,255,102)
ellipse (50,50,200,200)

//grass
stroke(0,150,0);
fill(178,255,102);
rect(0,795,2000,1000);



}
