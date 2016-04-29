var offset = .05;
var offsetColor = .025;

var vert = 5;

var lineCount;

var bump1 = 0;
var bumpSpeed1 = .00025;

function setup() {
  createCanvas(windowWidth,windowHeight,P2D);
  smooth(60);
}

function draw() {
  background(255);

  lineCount = (width+200)/vert;

  for (var i=0; i<=lineCount; i+=1) {
    noFill();
    strokeWeight(40);
    stroke((sin(bump1+i*offsetColor)+1)*255,(cos(bump1+i*-offsetColor)+1)*100,200);

    push();

    translate(i*vert-100,0);

    bezier(sin(bump1+i*offset)*50,-10,
          sin(bump1+i*-offset)*-100,height/2, 
          cos(bump1+i*offset)*-100,height/2, 
          cos(bump1+i*-offset)*50,height+10);

    pop();

    bump1 += bumpSpeed1;

  }
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}