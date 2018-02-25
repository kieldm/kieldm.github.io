//lengths
var sliderX1, sliderY1, sliderC1;
var ax, ay, c1;

var sliderX2, sliderC2;
var bx, c2;

//equation vars
var divX1, divY1, divY2;

//equation vars
var divX2, divY3, divY4;

//angles
var sliderD1, sliderD2;
var d1, d2;

// buttons
var radioTop;
var radioBottom;

//specs
var sliderAsc, sliderDesc, sliderTail;
var asc, desc, tail;

//tracking
var sliderTrack, sliderSize;
var track, ptSize;

var tracking;
var trackingCount;

var sliderLead;
var lead;

var trackCount;
var lb_count;

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

  xStart = windowWidth/10;
//  xStart = windowWidth/6;
  yStart = 3*windowHeight/5;

  inp = select("#textfield");

//  inp = createInput('ZAS');
//  inp.position(10,windowHeight-50);

  sliderLength = windowWidth-40;
  sl = sliderLength.toString()+'px';


//  if(windowWidth>500){
      sliderX1 = createSlider(0, 200, 25);
      sliderX1.position(10, 10);
      sliderX1.style('width', '80px');
    
      sliderY1 = createSlider(0, 500, 100);
      sliderY1.position(10, 30);
      sliderY1.style('width', '80px');
    
      sliderD1 = createSlider(0, 60, 30);
      sliderD1.position(10, 50);
      sliderD1.style('width', '80px');
    
      sliderD2 = createSlider(0, 90, 45);
      sliderD2.position(10, 70);
      sliderD2.style('width', '80px');
    
      sliderC1 = createSlider(0, 200, 100);
      sliderC1.position(10, 90);
      sliderC1.style('width', '80px');


      sliderLap = createSlider(-100, 100, 0);
      sliderLap.position(windowWidth/5 + 10, 10);
      sliderLap.style('width', '80px');    
    
      sliderX2 = createSlider(0, 100, 0);
      sliderX2.position(windowWidth/5 + 10, 30);
      sliderX2.style('width', '80px');
    
      sliderC2 = createSlider(0, 100, 20);
      sliderC2.position(windowWidth/5 + 10, 50);
      sliderC2.style('width', '80px');
    
      sliderAsc = createSlider(0, 200, 50);
      sliderAsc.position(windowWidth/5 + 10, 70);
      sliderAsc.style('width', '80px');
    
      sliderDesc = createSlider(0, 200, 50);
      sliderDesc.position(windowWidth/5 + 10, 90);
      sliderDesc.style('width', '80px');

      radioTop = createRadio();
      radioTop.position(2*windowWidth/5,27);
      radioTop.option(' ',1);
      radioTop.option(' ',2);
      radioTop.option(' ',3);
      radioTop.style('width','20px');
      radioTop.value(1).checked = true;
    
      radioBottom = createRadio();
      radioBottom.position(2*windowWidth/5+70,27);
      radioBottom.option(' ',1);
      radioBottom.option(' ',2);
      radioBottom.option(' ',3);
      radioBottom.style('width','20px');
      radioBottom.value(1).checked = true;
    
      sliderSize = createSlider(0, 20, 10);
      sliderSize.position(3*windowWidth/5 + 10, 10);
      sliderSize.style('width', '80px');
    
      sliderTrack = createSlider(-25, 150, 0);
      sliderTrack.position(3*windowWidth/5 + 10, 30);
      sliderTrack.style('width', '80px');
    
      sliderLead = createSlider(-100, 100, 0);
      sliderLead.position(3*windowWidth/5 + 10, 50);
      sliderLead.style('width', '80px');
    
      sliderShearX = createSlider(-30, 30, 0);
      sliderShearX.position(3*windowWidth/5 + 10, 70);
      sliderShearX.style('width', '80px');
     
    
      saveButton = createButton('Save SVG');
      saveButton.position(4*windowWidth/5 + 10, 10);
      saveButton.mousePressed(saveSvg);
    
/*    } else {
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
    
    
      sliderSize = createSlider(0, 20, 10);
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
*/
}

function draw() {
  clear();

//  background(0);
  background(255);

  noStroke();

  ax = ptSize * sliderX1.value();
  ay = ptSize * sliderY1.value();
//  c1 = ptSize * sliderC1.value();
  c1 = map(sliderC1.value(), 0, 100, 0, ax);
    
  d1 = sliderD1.value();
  d2 = sliderD2.value();

  divX1 = sin(d2)*c1;
  divY1 = cos(d2)*c1;
  divY2 = tan(d1)*ax;
    
  divX2 = sin(d2)*c2;
  divY3 = tan(d1)*bx;
  divY4 = cos(d2)*c2;    
    
  shrX = sliderShearX.value();

  asc = ptSize * sliderAsc.value()+divY1;
  desc = ptSize * sliderDesc.value()+divY1;
//  tail = ptSize * sliderTail.value();

  lap = sliderLap.value()/100;

  bx = map(sliderX2.value(), 0, 100, ax, -(lap*ax) + 2*ax);
  c2 = map(sliderC2.value(), 0, 100, 0, c1);
    
  tracking = sliderTrack.value();
  lead = sliderLead.value();
  ptSize = sliderSize.value() / 20;

  trackCount = 0;
  trackingCount = 0;
  lb_count = 0;

  fill(0);
  textSize(8);


//  if(windowWidth>500){
    text("Stroke Width  " + int(ax / ptSize / 2), 100, 22);
    text("X-Height " + int(ay / ptSize / 5), 100, 42);
    text("Angle 1 " + d1, 100, 62);
    text("Angle 2 " + d2, 100, 82);
    text("Arc " + int(c1 / ptSize / 2), 100, 102);    

    text("Overlap  " + int(lap*100), windowWidth/5 + 100, 22);
    text("Arc Two " + sliderX2.value(), windowWidth/5 + 100, 42);
    text("Arc Two Width " + sliderC2.value(), windowWidth/5 + 100, 62);  
    text("Ascender  " + int(asc / ptSize / 2), windowWidth/5 + 100, 82);
    text("Descender  " + int(desc / ptSize / 2), windowWidth/5 + 100, 102);

    textStyle(BOLD);
    text("Top Terminals",2*windowWidth/5, 22);
    text("Bottom Terminals",2*windowWidth/5+70, 22);
    
    textStyle(NORMAL);
    text("Variable",2*windowWidth/5+20, 39);
    text("Flat",2*windowWidth/5+20, 59);
    text("None",2*windowWidth/5+20, 79);

    text("Variable",2*windowWidth/5+90, 39);
    text("Flat",2*windowWidth/5+90, 59);
    text("None",2*windowWidth/5+90, 79);
    
    text("Size  " + ptSize * 20, 3*windowWidth/5 + 100, 22);
    text("Tracking  " + int(tracking), 3*windowWidth/5 + 100, 42);
    text("Leading  " + lead, 3*windowWidth/5 + 100, 62);
    text("Shear " + shrX, 3*windowWidth/5 + 100, 82);


/*  } else {
    text("Stroke Width  " + int(ax / ptSize / 2), 10, 40);
    text("X-Height " + int(ay / ptSize / 5), 10, 80);
    text("Arc " + int(c1 / ptSize / 2), 10, 120);
  
    text("Angle 1 " + d1,10,160);
    text("Angle 2 " + d2, 10,200);
    text("Shear " + shrX, 10,240);
  
    text("Overlap  " + int(lap*100), 10, 280);
    text("Ascender  " + int(asc / ptSize / 2), 10, 320);
    text("Descender  " + int(desc / ptSize / 2), 10, 360);
  
    text("Size  " + ptSize * 20, 10, 440);
    text("Tracking  " + int(tracking), 10, 480);
    text("Leading  " + lead, 10, 520);
  }
*/
    


  // figure out tracking
  track = ax + divX1 - lap*ax;
  lead += asc + ay + 2*divY1 + 2*divY2;
  
  inpText = String(inp.value());  

  for (var i = 0; i < inpText.length; i++) {
    if (inpText.charAt(i) === '\n') {
      lb_count++;
    }
  }

    push();

    translate(xStart, yStart - (lb_count*lead)/2);
  
  noStroke();
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
      } else if (inpText.charAt(i) === '!') {
        exclaim();
      } else if (inpText.charAt(i) === '?') {
        question();
      } else if (inpText.charAt(i) === '&') {
        amp();
      } else if (inpText.charAt(i) === '\n') {
        trackCount = 0;
        trackingCount=0;
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


  ax = ptSize * sliderX1.value();
  ay = ptSize * sliderY1.value();
//  c1 = ptSize * sliderC1.value();
  c1 = map(sliderC1.value(), 0, 100, 0, ax);
    
  d1 = sliderD1.value();
  d2 = sliderD2.value();

  divX1 = sin(d2)*c1;
  divY1 = cos(d2)*c1;
  divY2 = tan(d1)*ax;
    
  divX2 = sin(d2)*c2;
  divY3 = tan(d1)*bx;
  divY4 = cos(d2)*c2;    
    
  shrX = sliderShearX.value();

  asc = ptSize * sliderAsc.value()+divY1;
  desc = ptSize * sliderDesc.value()+divY1;
//  tail = ptSize * sliderTail.value();

  lap = sliderLap.value()/100;

  bx = map(sliderX2.value(), 0, 100, ax, -(lap*ax) + 2*ax);
  c2 = map(sliderC2.value(), 0, 100, 0, c1);
    
  tracking = sliderTrack.value();
  lead = sliderLead.value();
  ptSize = sliderSize.value() / 20;

  trackCount = 0;
  trackingCount = 0;
  lb_count = 0;

  // figure out tracking
  track = ax + divX1 - lap*ax;
  lead += asc + ay + 2*divY1 + 2*divY2;
  

  for (var i = 0; i < inpText.length; i++) {
    if (inpText.charAt(i) === '\n') {
      lb_count++;
    }
  }
    
  push();
    translate(xStart, yStart-(lb_count*lead)/2);
  
    noStroke();
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
      } else if (inpText.charAt(i) === '!') {
        exclaim();
      } else if (inpText.charAt(i) === '?') {
        question();
      } else if (inpText.charAt(i) === '&') {
        amp();
      } else if (inpText.charAt(i) === '\n') {
        trackCount = 0;
        trackingCount=0;
//        translate(-((inpText.length) * track - track) / 2, asc+ay+20);
        translate(0, lead);
      } else if (inpText.charAt(i) === ' ') {
        trackCount+=1;
      }
    }
  pop();

  save();
}


/*
function mouseDragged() {
  if(mouseX <= xStart-40 && mouseX >= xStart-60 && mouseY <= yStart+60 && mouseY >= yStart+40){
    xStart = mouseX + 50;
    yStart = mouseY -50;
  }
}
*/

//function keyTyped() {
//  myText.push(key);
//}

//function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);
//}