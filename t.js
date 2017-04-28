function T() {

  beginShape();
  vertex(0, 0);
  vertex(0, -ay - asc);
  
  vertex(-sin(d2) * flag, -ay - asc - cos(d2) * flag);
  vertex(-sin(d2) * flag + ax, -ay - asc - cos(d2) * flag - tan(d1) * ax);
  
  vertex(ax, -ay - asc - tan(d1) * ax);
  
    vertex(ax, cos(d2)*c1/2);
    vertex(ax+sin(d2)*tail,cos(d2)*tail+cos(d2)*c1/2);
    vertex(sin(d2)*tail,cos(d2)*tail+tan(d1)*ax+cos(d2)*c1/2);
    vertex(0, tan(d1)*ax+cos(d2)*c1/2);
  
  vertex(0, 0);
  endShape();

  push();
    translate(ax/2,-ay-asc/2);
    rotate(-d1);
    rectMode(CENTER);
    rect(0,0,ax+c1,ax/2);
  pop();
  
  
//  push();
//    translate(0,-ay-asc/2);
//    beginShape();
//    vertex(0,0);
//    vertex(-sin(d2)*c1,-cos(d2)*c1);
//    vertex(-sin(d2)*c1+ax,-cos(d2)*c1-tan(d1)*ax);
//    vertex(ax,-tan(d1)*ax);
//    endShape();
//  pop();

  translate(track-ax - sin(d2) * c1, 0);
}