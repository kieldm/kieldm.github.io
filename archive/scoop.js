var x1 = 50;
var x2 = 450;

var offset = .1;
var offsetColor = .05;

var vert = 3;

var lineCount;

var bump1 = 0;
var bumpSpeed1 = .0005;

var r = 255;
var g = 255;
var b = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  x1 = width / 2 - width / 5;
  x2 = width / 2 + width / 5;

  lineCount = (height - 400) / vert;

  for (var i = 0; i <= lineCount; i += 1) {
    noFill();
    strokeWeight(width/40);
    stroke((cos(bump1 + i * offsetColor) + 1) * r, (sin(bump1 + i * offsetColor) + 1) * g, (sin(bump1 + i * offsetColor) + 1) * b);

    push();

    translate(0, 200 + i * vert);

    bezier(x1, cos(bump1 + i * offset) * width/30,
      width / 2, sin(bump1 + i * offset) * width / 3.5,
      width / 2, cos(bump1 + i * offset) * width / 3.5,
      x2, sin(bump1 + i * offset) * width/30);

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

  fill(0);
  noStroke();
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

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}