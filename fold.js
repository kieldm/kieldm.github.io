var vecs = [];

var counter = 4;
var wide;
var high;
//in "blocks", not dots
var segments = 5;
var strokeW = 3;

var blendin = 250;
var index = 0;

var frameSp = 0.1;
var offset = .02;

var r = 0;

var plus = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  smooth(60);

  wide = windowWidth / 1.5;
  high = windowHeight / 1.5;

  var x_space = wide / segments;
  var y_space = high;


  for (var i = 0; i < 2; i++) {
    for (var j = 0; j <= segments; j++) {

      if (index % 2 === 0) {
        plus = 20;
      } else {
        plus = 0;
      }

      vecs[index] = new Vec(j * x_space, i * y_space + plus);

      index++;
    }
  }

  println(index);
  println(vecs.length);
}

function draw() {
  translate(width / 2 - wide / 2, height / 2 - high / 2);

  background(0);

  noFill();
  stroke(255);
  strokeWeight(strokeW);

  for (var j = 0; j < blendin; j++) {
    beginShape();
    for (var k = 0; k < (vecs.length / 2); k++) {
      var nx = lerp(vecs[k].x, vecs[k + (vecs.length / 2)].x, j / blendin);
      var ny = lerp(vecs[k].y, vecs[k + (vecs.length / 2)].y, j / blendin);

      // if(k%2==0){
      //   ny += 20;
      // }

      //      stroke(map(j, 0, blendin, 125, 0), map(j, 0, blendin, 0, 255), map(j, 0, blendin, 125, 255));
      stroke(map(-sin(frameCount * frameSp + j * offset), -1, 1, 0, 255), map(cos(frameCount * frameSp + j * offset), -1, 1, 255, 0), 125);


      if (k === 0) {
        curveVertex(nx, ny);
      }

      curveVertex(nx, ny);

      if (k == (vecs.length / 2) - 1) {
        curveVertex(nx, ny);
        endShape();
      }
    }
  }

  for (var p = 0; p < vecs.length; p++) {
    Lpoint(p);

    strokeWeight(1);
    stroke(255, 251, 124);
    noFill();
    ellipse(vecs[p].x, vecs[p].y, r, r);
  }

  if (r > 0) {
    r -= 1;
  }
}


function Vec(_x, _y) {
  this.x = _x;
  this.y = _y;

  this.posit = function(_nx, _ny) {
    this.x = _nx;
    this.y = _ny;
  }
}

function Lpoint(q) {

  width / 2 - wide / 2, height / 2 - high / 2
  if (dist(mouseX - width / 2 + wide / 2, mouseY - height / 2 + high / 2, vecs[q].x, vecs[q].y) < 20 && mouseIsPressed) {
    vecs[q].posit(mouseX - width / 2 + wide / 2, mouseY - height / 2 + high / 2);
    r = 10;
  }
}

function mouseMoved() {
  if (r < 10) {
    r += 2;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}