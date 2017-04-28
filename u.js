function U() {

  beginShape();
  vertex(0, 0);
  vertex(0, -ay);
  vertex(ax, -ay - tan(d1) * ax);
  vertex(ax, -tan(d1) * ax);
  vertex(ax + sin(d2) * c1, -tan(d1) * ax + cos(d2) * c1);
  vertex(sin(d2) * c1, cos(d2) * c1);
  vertex(0, 0);
  endShape();

  
  push();
    translate( ax + sin(d2) * c1, 0);
  
    beginShape();
    vertex(0, 0);
    vertex(0, -ay);
    vertex(ax, -ay -tan(d1)*ax);
    vertex(ax,cos(d2) * c1- tan(d1)*ax);
    vertex(ax+sin(d2)*tail,cos(d2)*c1+cos(d2)*tail-tan(d1)*ax);
    vertex(sin(d2)*tail,cos(d2)*c1+cos(d2)*tail);
    vertex(0,cos(d2) * c1);
    
    vertex(0, 0);
    endShape();
  pop();

  translate(track, 0);
}

/*
function letter_u() {

  beginShape();
  vertex(0, 0);
  vertex(0, -ay);
  vertex(ax, -ay - tan(d1) * ax);
  vertex(ax, -tan(d1) * ax);
  vertex(ax + sin(d2) * c1, -tan(d1) * ax + cos(d2) * c1);
  vertex(sin(d2) * c1, cos(d2) * c1);
  endShape();

  
  push();
    translate(2 * ax + sin(d2) * c1, -ay - 2 * tan(d1) * ax + cos(d2) * c1);
  
    beginShape();
    vertex(0, 0);
    vertex(0, ay +  tan(d1) * ax);
    vertex(sin(d2)*tail, ay +  tan(d1) * ax+ cos(d2)*tail);
    vertex(sin(d2)*tail-ax, ay +  2 * tan(d1) * ax+ cos(d2)*tail);
    vertex(-ax,ay +  2 * tan(d1) * ax);
    vertex(-ax, - tan(d1)*ax);
    vertex(0, -2*tan(d2)*ax)
    
    
    endShape();
  pop();

  translate(track, 0);
}
*/