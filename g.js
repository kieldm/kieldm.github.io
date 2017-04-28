function G() {
  beginShape();
  vertex(0, 0);
  vertex(0, -ay);
  vertex(ax, -ay - tan(d1) * ax);
  vertex(ax, -tan(d1) * ax);
  vertex(ax + sin(d2) * c1, -tan(d1) * ax + cos(d2) * c1);
  vertex(sin(d2) * c1, cos(d2) * c1);
  vertex(0,0);
  endShape();

  push();
    translate(2 * ax + sin(d2) * c1, -ay - 2 * tan(d1) * ax + cos(d2) * c1);

    beginShape();
    vertex(0, 0);
    vertex(0, ay+desc+3*tan(d1)*ax - cos(d2)*c1);
    vertex(-ax, ay + desc + 4 * tan(d1) * ax - cos(d2)*c1);
    vertex(-ax, tan(d1) * ax);
    vertex(-ax - sin(d2) * c1, tan(d1) * ax - cos(d2) * c1);
    vertex(-sin(d2) * c1, -cos(d2) * c1);
    
    vertex(0,0);
    endShape();
    
    push();
      beginShape();
      translate(-ax, ay + desc + 4 * tan(d1) * ax - cos(d2)*c1);
      vertex(0, 0);
      vertex(-ax, tan(d1) * ax);
      vertex(-ax - sin(d2) * tail, tan(d1) * ax - cos(d2) * tail);
      vertex(-sin(d2) * tail, -cos(d2) * tail);
      vertex(0,0);
      endShape();
    pop();
  pop();

  translate(track, 0);
}