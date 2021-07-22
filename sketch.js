var hr
var mn 
var sc
var scAngle
var mnAngle
var hrAngle
var c,d;


function setup() {
  createCanvas(800,800);
  angleMode(DEGREES)
}

function draw() {
  background(0);
  console.log(mn)
  //scAngle = map(sc,0,60,0,360);
  //translate(p5.Vector.fromAngle(millis() / 1000, 60));
  //d = map(mouseX, 0, width, 40, 300);
  hr = hour()
  mn = minute()
  sc = second()


  push();
  scAngle = map(sc, 0, 100, 0, 360);
  translate(400,200);
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,350,0);
  pop();
  push()
  hrAngle = map(hr, 0, 100, 0, 360);
  translate(400,200);
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,150,0);
  pop()
  mnAngle = map(mn, 0, 100, 0, 360);
  translate(400,200);
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,250,0);
  push()
  strokeWeight(10)
  stroke(0,255,0)
  noFill()
  arc(0,0,500,500,0,mnAngle)
  pop()
  push()
  strokeWeight(10)
  stroke(0,0,255)
  noFill()
  arc(0,0,300,300,0,hrAngle)
  pop()
  push();
  strokeWeight(10)
  stroke(255,0,0)
  noFill()
  arc(0,0,700,700,0,scAngle)
  pop()
  //ellipse(600, 300, 100, 500);
  drawSprites();
}