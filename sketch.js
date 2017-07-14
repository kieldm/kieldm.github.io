//lengths
var sliderX1, sliderY1, sliderC1;
var ax, ay, c1;

//equation vars
var divX1, divY1, divY2

//angles
var sliderD1, sliderD2;
var d1, d2;

//specs
var sliderAsc, sliderDesc, sliderTail, sliderFlag;
var asc, desc, tail, flag;

//tracking
var sliderTrack, sliderSize;
var track, ptSize;

var sliderLead;
var lead;

var trackCount;
//var leadCount;

//overlap
var sliderLap;
var lap;

//shear
var sliderShearX;
var shrX;

var saveButton;

var lines;

var x = 0;
var y = 0;

var inp;
var inpText;
var myText = [];

function setup() {
  createCanvas(windowWidth, windowHeight, SVG);
//  background(0);
  angleMode(DEGREES);

  inp = select("#textfield");

//  inp = createInput('ZAS');
//  inp.position(10,windowHeight-50);

  sliderSize = createSlider(0, 30, 10);
  sliderSize.position(10, 10);
  sliderSize.style('width', '80px');

  sliderX1 = createSlider(0, 200, 25);
  sliderX1.position(10, 30);
  sliderX1.style('width', '80px');

  sliderY1 = createSlider(0, 500, 100);
  sliderY1.position(10, 50);
  sliderY1.style('width', '80px');

  sliderC1 = createSlider(0, 200, 50);
  sliderC1.position(10, 70);
  sliderC1.style('width', '80px');

  sliderD1 = createSlider(0, 60, 30);
  sliderD1.position(10, 90);
  sliderD1.style('width', '80px');

  sliderD2 = createSlider(0, 90, 30);
  sliderD2.position(10, 110);
  sliderD2.style('width', '80px');

  sliderShearX = createSlider(-30, 30, 0);
  sliderShearX.position(10, 130);
  sliderShearX.style('width', '80px');

  sliderAsc = createSlider(0, 200, 50);
  sliderAsc.position(200, 10);
  sliderAsc.style('width', '80px');

  sliderDesc = createSlider(0, 200, 50);
  sliderDesc.position(200, 30);
  sliderDesc.style('width', '80px');

  sliderTail = createSlider(0, 100, 25);
  sliderTail.position(200, 50);
  sliderTail.style('width', '80px');

  sliderFlag = createSlider(0, 100, 25);
  sliderFlag.position(200, 70);
  sliderFlag.style('width', '80px');

  sliderLap = createSlider(0, 100, 0);
  sliderLap.position(200, 90);
  sliderLap.style('width', '80px');

  sliderTrack = createSlider(-25, 150, 0);
  sliderTrack.position(200, 110);
  sliderTrack.style('width', '80px');

  sliderLead = createSlider(-100, 100, 0);
  sliderLead.position(200, 130);
  sliderLead.style('width', '80px');

  saveButton = createButton('Save SVG');
  saveButton.position(390, 10);
  saveButton.mousePressed(saveSvg);

}

function draw() {
  clear();
  background(0);

  noStroke();

  ax = ptSize * sliderX1.value();
  ay = ptSize * sliderY1.value();
  c1 = ptSize * sliderC1.value();

  d1 = sliderD1.value();
  d2 = sliderD2.value();

  shrX = sliderShearX.value();

  asc = ptSize * sliderAsc.value() * 2;
  desc = ptSize * sliderDesc.value() * 2;
  tail = ptSize * sliderTail.value();
  flag = ptSize * sliderFlag.value();

  lap = sliderLap.value()/100;

  track = sliderTrack.value();
  lead = sliderLead.value();
  ptSize = sliderSize.value() / 20;

  trackCount = 0;

  fill(255);
  textSize(8);

  text("Size  " + ptSize * 20, 100, 22);
  text("Stroke Width  " + int(ax / ptSize / 2), 100, 42);
  text("X-Height " + int(ay / ptSize / 5), 100, 62);
  text("Arc " + int(c1 / ptSize / 2), 100, 82);

  text("Angle 1 " + d1, 100, 102);
  text("Angle 2 " + d2, 100, 122);
  text("Shear " + shrX,100,142);

  text("Ascender  " + int(asc / ptSize / 2), 290, 22);
  text("Descender  " + int(desc / ptSize / 2), 290, 42);
  text("Tail  " + int(tail / ptSize), 290, 62);
  text("Flag  " + int(flag / ptSize), 290, 82);
  text("Overlap  " + int(lap*100), 290, 102);
  text("Tracking  " + track, 290, 122);
  text("Leading  " + lead, 290, 142);

  divX1 = sin(d2)*c1;
  divY1 = cos(d2)*c1;
  divY2 = tan(d1)*ax;

  // figure out tracking
  track += ax + divX1 - lap*ax;
  lead += asc + ay + 2*divY1 + 2*divY2;
  
  inpText = String(inp.value());  
  
  push();
    // center
    // translate(width/2 -((inpText.length) * track - track) / 2, height/2 + ay/ 2 +asc/2);
    translate(width/2, height/2);
  
    fill(255);
  
    for (var i = 0; i < inpText.length; i++) {
      if (inpText.charAt(i) === 'a') {
        A();
      } else if (inpText.charAt(i) === 'A') {
        capA();
      } else if (inpText.charAt(i) === 'b') {
        B();
      } else if (inpText.charAt(i) === 'B') {
        capB();
      } else if (inpText.charAt(i) === 'c') {
        C();
      } else if (inpText.charAt(i) === 'C') {
        capC();
      } else if (inpText.charAt(i) === 'd') {
        D();
      } else if (inpText.charAt(i) === 'D') {
        capD();
      } else if (inpText.charAt(i) === 'e') {
        E();
      } else if (inpText.charAt(i) === 'E') {
        capE();
      } else if (inpText.charAt(i) === 'f') {
        F();
      } else if (inpText.charAt(i) === 'F') {
        capF();
      } else if (inpText.charAt(i) === 'g') {
        G();
      } else if (inpText.charAt(i) === 'G') {
        capG();
      } else if (inpText.charAt(i) === 'h') {
        H();
      } else if (inpText.charAt(i) === 'H') {
        capH();
      } else if (inpText.charAt(i) === 'i') {
        I();
      } else if (inpText.charAt(i) === 'I') {
        capI();
      } else if (inpText.charAt(i) === 'j') {
        J();
      } else if (inpText.charAt(i) === 'J') {
        capJ();
      } else if (inpText.charAt(i) === 'k') {
        K();
      } else if (inpText.charAt(i) === 'K') {
        capK();
      } else if (inpText.charAt(i) === 'l') {
        L();
      } else if (inpText.charAt(i) === 'L') {
        capL();
      } else if (inpText.charAt(i) === 'm') {
        M();
      } else if (inpText.charAt(i) === 'M') {
        capM();
      } else if (inpText.charAt(i) === 'n') {
        N();
      } else if (inpText.charAt(i) === 'N') {
        capN();
      } else if (inpText.charAt(i) === 'o') {
        O();
      } else if (inpText.charAt(i) === 'O') {
        capO();
      } else if (inpText.charAt(i) === 'p') {
        P();
      } else if (inpText.charAt(i) === 'P') {
        capP();
      } else if (inpText.charAt(i) === 'q') {
        Q();
      } else if (inpText.charAt(i) === 'Q') {
        capQ();
      } else if (inpText.charAt(i) === 'r') {
        R();
      } else if (inpText.charAt(i) === 'R') {
        capR();
      } else if (inpText.charAt(i) === 's') {
        S();
      } else if (inpText.charAt(i) === 'S') {
        capS();
      } else if (inpText.charAt(i) === 't') {
        T();
      } else if (inpText.charAt(i) === 'T') {
        capT();
      } else if (inpText.charAt(i) === 'u') {
        U();
      } else if (inpText.charAt(i) === 'U') {
        capU();
      } else if (inpText.charAt(i) === 'v') {
        V();
      } else if (inpText.charAt(i) === 'V') {
        capV();
      } else if (inpText.charAt(i) === 'w') {
        W();
      } else if (inpText.charAt(i) === 'W') {
        capW();
      } else if (inpText.charAt(i) === 'x') {
        X();
      } else if (inpText.charAt(i) === 'X') {
        capX();
      } else if (inpText.charAt(i) === 'y') {
        Y();
      } else if (inpText.charAt(i) === 'Y') {
        capY();
      } else if (inpText.charAt(i) === 'z') {
        Z();
      } else if (inpText.charAt(i) === 'Z') {
        capZ();
      } else if (inpText.charAt(i) === '.') {
        period();
      } else if (inpText.charAt(i) === ',') {
        comma();
      } else if (inpText.charAt(i) === '\n') {
        trackCount = 0;
//        translate(-((inpText.length) * track - track) / 2, asc+ay+20);
        translate(0, lead);
      } else if (inpText.charAt(i) === ' ') {
        trackCount+=1;
      }
    }
  pop();
}

/*
function keyPressed() {
  if (keyCode == DELETE || keyCode == BACKSPACE) {
    myText.splice(myText.length - 1, 1);
  }
}
*/

function saveSvg() {
  clear();
  
  push();
    translate(width/2 -((inpText.length) * track - track) / 2, height/2 + ay/ 2);  
    fill(0);
  
    for (var i = 0; i < inpText.length; i++) {
      if (inpText.charAt(i) === 'a') {
        A();
      } else if (inpText.charAt(i) === 'A') {
        capA();
      } else if (inpText.charAt(i) === 'b') {
        B();
      } else if (inpText.charAt(i) === 'B') {
        capB();
      } else if (inpText.charAt(i) === 'c') {
        C();
      } else if (inpText.charAt(i) === 'C') {
        capC();
      } else if (inpText.charAt(i) === 'd') {
        D();
      } else if (inpText.charAt(i) === 'D') {
        capD();
      } else if (inpText.charAt(i) === 'e') {
        E();
      } else if (inpText.charAt(i) === 'E') {
        capE();
      } else if (inpText.charAt(i) === 'f') {
        F();
      } else if (inpText.charAt(i) === 'F') {
        capF();
      } else if (inpText.charAt(i) === 'g') {
        G();
      } else if (inpText.charAt(i) === 'G') {
        capG();
      } else if (inpText.charAt(i) === 'h') {
        H();
      } else if (inpText.charAt(i) === 'H') {
        capH();
      } else if (inpText.charAt(i) === 'i') {
        I();
      } else if (inpText.charAt(i) === 'I') {
        capI();
      } else if (inpText.charAt(i) === 'j') {
        J();
      } else if (inpText.charAt(i) === 'J') {
        capJ();
      } else if (inpText.charAt(i) === 'k') {
        K();
      } else if (inpText.charAt(i) === 'K') {
        capK();
      } else if (inpText.charAt(i) === 'l') {
        L();
      } else if (inpText.charAt(i) === 'L') {
        capL();
      } else if (inpText.charAt(i) === 'm') {
        M();
      } else if (inpText.charAt(i) === 'M') {
        capM();
      } else if (inpText.charAt(i) === 'n') {
        N();
      } else if (inpText.charAt(i) === 'N') {
        capN();
      } else if (inpText.charAt(i) === 'o') {
        O();
      } else if (inpText.charAt(i) === 'O') {
        capO();
      } else if (inpText.charAt(i) === 'p') {
        P();
      } else if (inpText.charAt(i) === 'P') {
        capP();
      } else if (inpText.charAt(i) === 'q') {
        Q();
      } else if (inpText.charAt(i) === 'Q') {
        capQ();
      } else if (inpText.charAt(i) === 'r') {
        R();
      } else if (inpText.charAt(i) === 'R') {
        capR();
      } else if (inpText.charAt(i) === 's') {
        S();
      } else if (inpText.charAt(i) === 'S') {
        capS();
      } else if (inpText.charAt(i) === 't') {
        T();
      } else if (inpText.charAt(i) === 'T') {
        capT();
      } else if (inpText.charAt(i) === 'u') {
        U();
      } else if (inpText.charAt(i) === 'U') {
        capU();
      } else if (inpText.charAt(i) === 'v') {
        V();
      } else if (inpText.charAt(i) === 'V') {
        capV();
      } else if (inpText.charAt(i) === 'w') {
        W();
      } else if (inpText.charAt(i) === 'W') {
        capW();
      } else if (inpText.charAt(i) === 'x') {
        X();
      } else if (inpText.charAt(i) === 'X') {
        capX();
      } else if (inpText.charAt(i) === 'y') {
        Y();
      } else if (inpText.charAt(i) === 'Y') {
        capY();
      } else if (inpText.charAt(i) === 'z') {
        Z();
      } else if (inpText.charAt(i) === 'Z') {
        capZ();
      } else if (inpText.charAt(i) === '.') {
        period();
      } else if (inpText.charAt(i) === ',') {
        comma();
      } else if (inpText.charAt(i) === ' ') {
        translate(track - ax, 0);
      }
    }
  pop();

  save();
}


//function keyTyped() {
//  myText.push(key);
//}

//function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);
//}