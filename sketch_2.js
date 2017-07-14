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

var tracking;
var trackingCount;

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

var sliderLength;
var sl;

var alph = 0;

var xStart, yStart;
  

function setup() {
  createCanvas(windowWidth, windowHeight, SVG);
//  background(0);
  angleMode(DEGREES);
  
  xStart = windowWidth/5;
  yStart = windowHeight/5;

  inp = select("#textfield");

//  inp = createInput('ZAS');
//  inp.position(10,windowHeight-50);

  sliderLength = windowWidth-30;
  sl = sliderLength.toString()+'px';


  if(windowWidth>500){
      sliderX1 = createSlider(0, 200, 25);
      sliderX1.position(10, 10);
      sliderX1.style('width', '80px');
    
      sliderY1 = createSlider(0, 500, 100);
      sliderY1.position(10, 30);
      sliderY1.style('width', '80px');
    
      sliderC1 = createSlider(0, 200, 50);
      sliderC1.position(10, 50);
      sliderC1.style('width', '80px');
    
    
      sliderD1 = createSlider(0, 60, 30);
      sliderD1.position(windowWidth/5 + 10, 10);
      sliderD1.style('width', '80px');
    
      sliderD2 = createSlider(0, 90, 30);
      sliderD2.position(windowWidth/5 + 10, 30);
      sliderD2.style('width', '80px');
    
      sliderShearX = createSlider(-30, 30, 0);
      sliderShearX.position(windowWidth/5 + 10, 50);
      sliderShearX.style('width', '80px');
    
    
      sliderLap = createSlider(0, 100, 0);
      sliderLap.position(2*windowWidth/5 + 10, 10);
      sliderLap.style('width', '80px');
    
      sliderAsc = createSlider(0, 200, 50);
      sliderAsc.position(2*windowWidth/5 + 10, 30);
      sliderAsc.style('width', '80px');
    
      sliderDesc = createSlider(0, 200, 50);
      sliderDesc.position(2*windowWidth/5 + 10, 50);
      sliderDesc.style('width', '80px');
    
      sliderFlag = createSlider(0, 100, 25);
      sliderFlag.position(2*windowWidth/5 + 10, 70);
      sliderFlag.style('width', '80px');
    
    
      sliderSize = createSlider(0, 30, 10);
      sliderSize.position(3*windowWidth/5 + 10, 10);
      sliderSize.style('width', '80px');
    
      sliderTrack = createSlider(-25, 150, 0);
      sliderTrack.position(3*windowWidth/5 + 10, 30);
      sliderTrack.style('width', '80px');
    
      sliderLead = createSlider(-100, 100, 0);
      sliderLead.position(3*windowWidth/5 + 10, 50);
      sliderLead.style('width', '80px');
     
    
      saveButton = createButton('Save SVG');
      saveButton.position(4*windowWidth/5 + 10, 10);
      saveButton.mousePressed(saveSvg);
  
  
    } else {
      sliderX1 = createSlider(0, 200, 25);
      sliderX1.position(10, 10);
      sliderX1.style('width', sl);
    
      sliderY1 = createSlider(0, 500, 100);
      sliderY1.position(10, 50);
      sliderY1.style('width', sl);
    
      sliderC1 = createSlider(0, 200, 50);
      sliderC1.position(10, 90);
      sliderC1.style('width', sl);
    
    
      sliderD1 = createSlider(0, 60, 30);
      sliderD1.position(10, 130);
      sliderD1.style('width', sl);
    
      sliderD2 = createSlider(0, 90, 30);
      sliderD2.position(10, 170);
      sliderD2.style('width', sl);
    
      sliderShearX = createSlider(-30, 30, 0);
      sliderShearX.position(10, 210);
      sliderShearX.style('width', sl);
    
    
      sliderLap = createSlider(0, 100, 0);
      sliderLap.position(10, 250);
      sliderLap.style('width', sl);
    
      sliderAsc = createSlider(0, 200, 50);
      sliderAsc.position(10, 290);
      sliderAsc.style('width', sl);
    
      sliderDesc = createSlider(0, 200, 50);
      sliderDesc.position(10, 330);
      sliderDesc.style('width', sl);
    
      sliderFlag = createSlider(0, 100, 25);
      sliderFlag.position(10, 370);
      sliderFlag.style('width', sl);
    
    
      sliderSize = createSlider(0, 30, 10);
      sliderSize.position(10, 410);
      sliderSize.style('width', sl);
    
      sliderTrack = createSlider(-25, 150, 0);
      sliderTrack.position(10, 450);
      sliderTrack.style('width', sl);
    
      sliderLead = createSlider(-100, 100, 0);
      sliderLead.position(10, 490);
      sliderLead.style('width', sl);
     
    
      saveButton = createButton('Save SVG');
      saveButton.position(10, 550);
      saveButton.mousePressed(saveSvg);
    }

}

function draw() {
  clear();
  
//  background(0);
  background(48,142,255);

  noStroke();

  ax = ptSize * sliderX1.value();
  ay = ptSize * sliderY1.value();
  c1 = ptSize * sliderC1.value();

  d1 = sliderD1.value();
  d2 = sliderD2.value();

  shrX = sliderShearX.value();

  asc = ptSize * sliderAsc.value() * 2;
  desc = ptSize * sliderDesc.value() * 2;
//  tail = ptSize * sliderTail.value();
  flag = ptSize * sliderFlag.value();

  lap = sliderLap.value()/100;

  tracking = sliderTrack.value();
  lead = sliderLead.value();
  ptSize = sliderSize.value() / 20;

  trackCount = 0;
  trackingCount = 0;

  fill(255);
  textSize(8);


  if(windowWidth>500){
    text("Stroke Width  " + int(ax / ptSize / 2), 100, 22);
    text("X-Height " + int(ay / ptSize / 5), 100, 42);
    text("Arc " + int(c1 / ptSize / 2), 100, 62);
  
    text("Angle 1 " + d1, windowWidth/5 + 100, 22);
    text("Angle 2 " + d2, windowWidth/5 + 100, 42);
    text("Shear " + shrX, windowWidth/5 + 100, 62);
  
    text("Overlap  " + int(lap*100), 2*windowWidth/5 + 100, 22);
    text("Ascender  " + int(asc / ptSize / 2), 2*windowWidth/5 + 100, 42);
    text("Descender  " + int(desc / ptSize / 2), 2*windowWidth/5 + 100, 62);
    text("Flag  " + int(flag / ptSize), 2*windowWidth/5 + 100, 82);
  
    text("Size  " + ptSize * 20, 3*windowWidth/5 + 100, 22);
    text("Tracking  " + track, 3*windowWidth/5 + 100, 42);
    text("Leading  " + lead, 3*windowWidth/5 + 100, 62);
    
  } else {
    text("Stroke Width  " + int(ax / ptSize / 2), 10, 40);
    text("X-Height " + int(ay / ptSize / 5), 10, 80);
    text("Arc " + int(c1 / ptSize / 2), 10, 120);
  
    text("Angle 1 " + d1,10,160);
    text("Angle 2 " + d2, 10,200);
    text("Shear " + shrX, 10,240);
  
    text("Overlap  " + int(lap*100), 10, 280);
    text("Ascender  " + int(asc / ptSize / 2), 10, 320);
    text("Descender  " + int(desc / ptSize / 2), 10, 360);
    text("Flag  " + int(flag / ptSize), 10, 400);
  
    text("Size  " + ptSize * 20, 10, 440);
    text("Tracking  " + track, 10, 480);
    text("Leading  " + lead, 10, 520);
  }

  divX1 = sin(d2)*c1;
  divY1 = cos(d2)*c1;
  divY2 = tan(d1)*ax;

  // figure out tracking
  track = ax + divX1 - lap*ax;
  lead += asc + ay + 2*divY1 + 2*divY2;
  
  inpText = String(inp.value());  
  
  if(mouseX <= xStart+90 && mouseX >= xStart-190 && mouseY <= yStart+190 && mouseY >= yStart-90 && alph<255){
      alph+=10;
    } else if (alph>0){
      alph-=10;
    } else if (alph<0) {
      alph=0;
   }
 
  noFill();
  stroke(255,alph);
  line(xStart-50, yStart+60, xStart-50, yStart+40);
  line(xStart-60, yStart+50, xStart-40, yStart+50);
 
  push();
    // center
    // translate(width/2 -((inpText.length) * track - track) / 2, height/2 + ay/ 2 +asc/2);
    translate(xStart, yStart);
  
    noStroke();
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

function mouseDragged() {
  if(mouseX <= xStart-40 && mouseX >= xStart-60 && mouseY <= yStart+60 && mouseY >= yStart+40){
    xStart = mouseX + 50;
    yStart = mouseY -50;
  }
}


//function keyTyped() {
//  myText.push(key);
//}

//function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);
//}