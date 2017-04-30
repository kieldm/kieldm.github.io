//lengths
var sliderX1, sliderY1, sliderC1;

//angles
var sliderD1, sliderD2;

//specs
var sliderAsc, sliderDesc, sliderTail, sliderFlag;

//tracking
var sliderTrack, sliderSize;

var sliderR, sliderG, sliderB;

var ax, ay, c1;

var d1, d2;

var asc, desc, tail, flag;

var track, ptSize;

// var r, g, b;

var saveButton;

var x = 0;
var y = 0;

var lines;

var myText = [];

function setup() {
  createCanvas(windowWidth, windowHeight, SVG);
  background(0);
  angleMode(DEGREES);

  sliderSize = createSlider(0, 40, 15);
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

  sliderTrack = createSlider(-25, 150, 0);
  sliderTrack.position(200, 110);
  sliderTrack.style('width', '80px');

  saveButton = createButton('Save SVG');
  saveButton.position(390, 10);
  saveButton.mousePressed(saveSvg);

/*  
  sliderR = createSlider(0, 255, 20);
  sliderR.position(390, 10);
  sliderR.style('width', '80px');
  
  sliderG = createSlider(0, 255, 225);
  sliderG.position(390, 30);
  sliderG.style('width', '80px');

  sliderB = createSlider(0, 255, 200);
  sliderB.position(390, 50);
  sliderB.style('width', '80px');
*/ 
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

  asc = ptSize * sliderAsc.value() * 2;
  desc = ptSize * sliderDesc.value() * 2;
  tail = ptSize * sliderTail.value();
  flag = ptSize * sliderFlag.value();

  track = sliderTrack.value();
  ptSize = sliderSize.value() / 20;

//  r = sliderR.value();
//  g = sliderG.value();
//  b = sliderB.value();

  fill(255);
  textSize(8);

  text("Size  " + ptSize * 20, 100, 22);
  text("Stroke Width  " + int(ax / ptSize / 2), 100, 42);
  text("X-Height " + int(ay / ptSize / 5), 100, 62);
  text("Arc " + int(c1 / ptSize / 2), 100, 82);

  text("Angle 1 " + d1, 100, 102);
  text("Angle 2 " + d2, 100, 122);

  text("Ascender  " + int(asc / ptSize / 2), 290, 22);
  text("Descender  " + int(desc / ptSize / 2), 290, 42);
  text("Tail  " + int(tail / ptSize), 290, 62);
  text("Flag  " + int(flag / ptSize), 290, 82);
  text("Tracking  " + track, 290, 122);

/*
  fill(255,0,0);
  text("Red  " + r, 480, 22);
  fill(0,255,0);
  text("Green  " + g, 480, 42);
  fill(0,0,255);
  text("Blue  " + b, 480, 62);
*/

  //figure out tracking
  track += 2.5 * ax + sin(d2) * c1;

    
  push();
    //  center
    translate(width/2 -((myText.length) * track - track) / 2, height/2 + ay/ 2);
  
    if(myText.length === 0){
      rectMode(CENTER);
      noFill();
      stroke(255);
      rect(0,0,100,20);
      noStroke();
      fill(255);
      textSize(12);
      textAlign(CENTER);
      textStyle(ITALIC);
      text("enter text",0,4);
    }
  
    fill(255);
  
    for (var i = 0; i < myText.length; i++) {
      if (myText[i] === 'a') {
        A(x,y);
        x +=track;
      } else if (myText[i] === 'b') {
        B(x,y);
        x +=track;
      } else if (myText[i] === 'c') {
        C(x,y);
        x +=track;
      } else if (myText[i] === 'd') {
        D(x,y);
        x +=track;
      } else if (myText[i] === 'e') {
        E(x,y);
        x +=track;
      } else if (myText[i] === 'f') {
        F();
      } else if (myText[i] === 'g') {
        G();
      } else if (myText[i] === 'h') {
        H();
      } else if (myText[i] === 'i') {
        I();
      } else if (myText[i] === 'j') {
        J();
      } else if (myText[i] === 'k') {
        K();
      } else if (myText[i] === 'l') {
        L();
      } else if (myText[i] === 'm') {
        M();
      } else if (myText[i] === 'n') {
        N();
      } else if (myText[i] === 'o') {
        O();
      } else if (myText[i] === 'p') {
        P();
      } else if (myText[i] === 'q') {
        Q();
      } else if (myText[i] === 'r') {
        R();
      } else if (myText[i] === 's') {
        S();
      } else if (myText[i] === 't') {
        T();
      } else if (myText[i] === 'u') {
        U();
      } else if (myText[i] === 'v') {
        V();
      } else if (myText[i] === 'w') {
        W();
      } else if (myText[i] === 'x') {
        X();
      } else if (myText[i] === 'y') {
        Y();
      } else if (myText[i] === 'z') {
        Z();
      } else if (myText[i] === '.') {
        period();
      } else if (myText[i] === ',') {
        comma();
      } else if (myText[i] === ' ') {
        translate(track - ax, 0);
      }
    }
  pop();
}

function keyPressed() {
  if (keyCode == DELETE || keyCode == BACKSPACE) {
    myText.splice(myText.length - 1, 1);
  }
}

function saveSvg() {
  clear();
//  background(13, 0, 35);

  push();
    translate(width/2 -((myText.length) * track - track) / 2, height/2 + ay/ 2);  
    fill(0);
  
    for (var i = 0; i < myText.length; i++) {
      if (myText[i] === 'a') {
        A();
      } else if (myText[i] === 'b') {
        B();
      } else if (myText[i] === 'c') {
        C();
      } else if (myText[i] === 'd') {
        D();
      } else if (myText[i] === 'e') {
        E();
      } else if (myText[i] === 'f') {
        F();
      } else if (myText[i] === 'g') {
        G();
      } else if (myText[i] === 'h') {
        H();
      } else if (myText[i] === 'i') {
        I();
      } else if (myText[i] === 'j') {
        J();
      } else if (myText[i] === 'k') {
        K();
      } else if (myText[i] === 'l') {
        L();
      } else if (myText[i] === 'm') {
        M();
      } else if (myText[i] === 'n') {
        N();
      } else if (myText[i] === 'o') {
        O();
      } else if (myText[i] === 'p') {
        P();
      } else if (myText[i] === 'q') {
        Q();
      } else if (myText[i] === 'r') {
        R();
      } else if (myText[i] === 's') {
        S();
      } else if (myText[i] === 't') {
        T();
      } else if (myText[i] === 'u') {
        U();
      } else if (myText[i] === 'v') {
        V();
      } else if (myText[i] === 'w') {
        W();
      } else if (myText[i] === 'x') {
        X();
      } else if (myText[i] === 'y') {
        Y();
      } else if (myText[i] === 'z') {
        Z();
      } else if (myText[i] === '.') {
        period();
      } else if (myText[i] === ',') {
        comma();
      } else if (myText[i] === ' ') {
        translate(track - ax, 0);
      }
    }
  pop();

  save();
}

function keyTyped() {
  myText.push(key);
}

//function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);
//}
