function F() {

  beginShape();
  vertex(0, 0);
  vertex(0, -ay - asc);
  vertex(ax, -ay - asc - tan(d1) * ax);
  vertex(ax, desc+tan(d1)*ax);
  vertex(ax+sin(d2)*tail,desc+cos(d2)*tail+tan(d1)*ax);
  vertex(sin(d2)*tail,desc+cos(d2)*tail+2*tan(d1)*ax);
  vertex(0, desc+2*tan(d1)*ax);
  vertex(0,0);
  endShape();

  
  push();
    translate(ax, -ay - asc - tan(d1) * ax);

    beginShape();
    vertex(0, 0);
//    vertex(0, asc/4);
//    vertex(-ax, asc/4 + tan(d1) * ax);
    vertex(ax, -tan(d1)*ax);
    vertex(ax +sin(d2) * flag, -tan(d1) * ax + cos(d2) * flag);
    vertex(sin(d2) * flag, cos(d2) * flag);
    vertex(0,0);
    endShape();
    
  pop();

  push();
    translate(ax/2,-ay-asc/2);
    rotate(-d1);
    rectMode(CENTER);
    rect(0,0,ax+c1,ax/2);
  pop();

  translate(track-ax/2 - sin(d2) * c1, 0);
}