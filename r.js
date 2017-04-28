function R() {

  beginShape();
  vertex(0, 0);
  vertex(0, -ay);
  
  vertex(-sin(d2)*flag,-ay-cos(d2)*flag);
  vertex(-sin(d2)*flag+ax,-ay-cos(d2)*flag-tan(d1)*ax);
  
  vertex(ax, -ay - tan(d1) * ax);
  vertex(ax, -tan(d1) * ax+cos(d2)*c1);
//  vertex(ax + sin(d2) * c1/2, -tan(d1) * ax + cos(d2) * c1/2+cos(d2)*c1);
//  vertex(sin(d2) * c1/2, cos(d2) * c1/2+cos(d2)*c1);
  vertex(0,cos(d2)*c1)
  vertex(0, 0);
  endShape();

  push();
    translate(2 * ax + sin(d2) * c1, -ay - 2 * tan(d1) * ax + cos(d2) * c1);

    beginShape();
    vertex(0, 0);
    vertex(0, ay/3);
    vertex(-ax, ay/3 + tan(d1) * ax);
    vertex(-ax, tan(d1) * ax);
    vertex(-ax - sin(d2) * c1, tan(d1) * ax - cos(d2) * c1);
    vertex(-sin(d2) * c1, -cos(d2) * c1);
    vertex(0, 0);
    endShape();
  pop();

  translate(track, 0);
}
