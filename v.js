function V() {

  beginShape();
  vertex(0, 0);
  vertex(0, -ay);
  vertex(ax, -ay - tan(d1) * ax);
  vertex(ax, 0);
  vertex(ax + sin(d2) * c1,cos(d2) * c1);
  vertex(sin(d2) * c1, cos(d2) * c1 + tan(d1)*ax);
  vertex(0,tan(d1)*ax)
  vertex(0, 0);
  endShape();

  
  push();
    translate(2 * ax + sin(d2) * c1, -ay - 2 * tan(d1) * ax + cos(d2) * c1);
  
    beginShape();
    vertex(0, 0);
    vertex(0, ay + tan(d1)*ax);
    vertex(-ax,ay + 2*tan(d1) * ax);
    vertex(-ax, - tan(d1)*ax);
    vertex(0, -2*tan(d2)*ax)
    vertex(0, 0);
    endShape();
  pop();

  translate(track, 0);
}