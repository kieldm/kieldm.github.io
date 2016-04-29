var offset = .05;
var offsetColor = .025;

var vert = 5;

var r = 255;

var g = 100;
var b = 200;

var lineCount;

var bump1 = 0;
var bumpSpeed1 = .00025;

function setup() {
  createCanvas(windowWidth, windowHeight, P2D);
  smooth(60);
}

function draw() {
  background(255);

  lineCount = (width + 200) / vert;

  for (var i = 0; i <= lineCount; i += 1) {
    noFill();
    strokeWeight(40);
    stroke((sin(bump1 + i * offsetColor) + 1) * r, (cos(bump1 + i * -offsetColor) + 1) * g, b);

    push();

    translate(i * vert - 100, 0);

    bezier(sin(bump1 + i * offset) * 50, -10,
      sin(bump1 + i * -offset) * -100, height / 2,
      cos(bump1 + i * offset) * -100, height / 2,
      cos(bump1 + i * -offset) * 50, height + 10);

    pop();

    bump1 += bumpSpeed1;

  }

  noFill();
  strokeWeight(2);
  stroke(r, 0, 0);
  line(10, height - 60, width / 8, height - 60);
  stroke(0, g, 0);
  line(10, height - 40, width / 8, height - 40);
  stroke(0, 0, b);
  line(10, height - 20, width / 8, height - 20);

  noFill();
  stroke(255);
  strokeWeight(1);
  ellipse(map(r, 0, 255, 10, width / 8), height - 60, 10, 10);
  ellipse(map(g, 0, 255, 10, width / 8), height - 40, 10, 10);
  ellipse(map(b, 0, 255, 10, width / 8), height - 20, 10, 10);

  if (dist(mouseX, mouseY, map(r, 0, 255, 10, width / 8), height - 60) < 10 && mouseIsPressed) {
    r = map(mouseX, 10, width / 8, 0, 255);
    if (r > 255) {
      r = 255;
    } else if (r < 0) {
      r = 0;
    }
  }
  
  if (dist(mouseX, mouseY, map(g, 0, 255, 10, width / 8), height - 40) < 10 && mouseIsPressed) {
    g = map(mouseX, 10, width / 8, 0, 255);
    if (g > 255) {
      g = 255;
    } else if (g < 0) {
      g = 0;
    }
  }
  
  if (dist(mouseX, mouseY, map(b, 0, 255, 10, width / 8), height - 20) < 10 && mouseIsPressed) {
    b = map(mouseX, 10, width / 8, 0, 255);
    if (b > 255) {
      b = 255;
    } else if (b < 0) {
      b = 0;
    }
  }

println(r);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}