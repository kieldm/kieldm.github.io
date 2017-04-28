function J() {

  beginShape();
  vertex(0, 0);
  vertex(0, -ay);
  vertex(-sin(d2) * c1/2, -ay - cos(d2) * c1/2);
  vertex(-sin(d2) * c1/2 + ax, -ay - cos(d2) * c1/2 - tan(d1) * ax);
  vertex(ax, -ay - tan(d1) * ax);
  vertex(ax, tan(d1) * ax + desc);
  vertex(0, 2*tan(d1)*ax+desc)
  vertex(0, 0);
  endShape();

  ///dot
  beginShape();
  vertex(0, -ay-asc/2);
  vertex(-sin(d2) * c1/2, -ay-asc/2 - cos(d2) * c1/2);
  vertex(-sin(d2) * c1/2 + ax, -ay-asc/2 - cos(d2) * c1/2 - tan(d1) * ax);
  vertex(ax, -ay-asc/2 - tan(d1) * ax);
  vertex(0, -ay-asc/2);
  endShape();

  ///tail
  push();
    translate(0,2*tan(d1)*ax+desc);
    beginShape();
    vertex(0,0);
    vertex(-sin(d2)*flag,-cos(d2)*flag);
    vertex(-sin(d2)*flag-ax,-cos(d2)*flag+tan(d1)*ax);
    vertex(-ax,tan(d1)*ax)
    vertex(0,0);
    endShape();
  pop();

  translate(track-ax - sin(d2) * c1, 0);
}