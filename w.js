function W() {

  beginShape();
  vertex(0, 0);
  vertex(0, -ay);
  vertex(ax, -ay - tan(d1) * ax);
  vertex(ax, 0);
  vertex(ax + sin(d2) * c1, cos(d2) * c1);
  vertex(sin(d2) * c1, cos(d2) * c1 + tan(d1)*ax);
  vertex(0, tan(d1)*ax)
  vertex(0, 0);
  endShape();

  push();
    translate(ax + sin(d2) * c1, tan(d1)*ax);
  
    beginShape();
    vertex(0, 0);
    vertex(0, -ay);
    vertex(ax, -ay - tan(d1) * ax);
    vertex(ax, -tan(d1) * ax);
    vertex(ax + sin(d2) * c1, -tan(d1) * ax + cos(d2) * c1);
    vertex(sin(d2) * c1, cos(d2) * c1);
    vertex(0, 0);
    endShape();
    
    beginShape();
    vertex(0,0);
    vertex(0,cos(d2)*c1-tan(d1)*ax);
    vertex(ax,cos(d2)*c1-2*tan(d1)*ax);
    vertex(ax,-2*tan(d1)*ax)
    vertex(0, 0);
    endShape();
    
  pop();
  
  push();
    translate(2*ax+2*sin(d2)*c1,0);
    beginShape();
    vertex(0, 0);
    vertex(0, -ay);
    vertex(ax, -ay - tan(d1) * ax);
    vertex(ax, -tan(d1) * ax+cos(d2)*c1);
    vertex(0,cos(d2)*c1)
    vertex(0, 0);
    endShape();
  pop();

  translate(track+ ax + sin(d2) * c1, 0);
}