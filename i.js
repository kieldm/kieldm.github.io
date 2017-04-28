function I() {

  beginShape();
  vertex(0, 0);
  vertex(0, -ay);
  vertex(-sin(d2) * c1/2, -ay - cos(d2) * c1/2);
  vertex(-sin(d2) * c1/2 + ax, -ay - cos(d2) * c1/2 - tan(d1) * ax);
  vertex(ax, -ay - tan(d1) * ax);

  vertex(ax, cos(d2)*c1/2);
  vertex(ax + sin(d2) * tail, cos(d2) * tail + cos(d2)*c1/2);
  vertex(sin(d2) * tail, cos(d2) * tail + cos(d2)*c1/2+tan(d1)*ax);
  vertex(0,cos(d2)*c1/2+tan(d1)*ax);
  
  vertex(0, 0);
  endShape();
  
  beginShape();
  vertex(0, -ay-asc/2);
  vertex(-sin(d2) * c1/2, -ay-asc/2 - cos(d2) * c1/2);
  vertex(-sin(d2) * c1/2 + ax, -ay-asc/2 - cos(d2) * c1/2 - tan(d1) * ax);
  vertex(ax, -ay-asc/2 - tan(d1) * ax);
  vertex(0, -ay-asc/2);
  endShape();

  translate(track-ax - sin(d2) * c1, 0);
}