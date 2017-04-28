function B() {


  beginShape();
  vertex(0, 0);
  vertex(0, -ay - asc);
  vertex(-sin(d2) * flag, -ay - asc - cos(d2) * flag);
  vertex(-sin(d2) * flag + ax, -ay - asc - cos(d2) * flag - tan(d1) * ax);

  vertex(ax, -ay - asc - tan(d1) * ax);
  vertex(ax, 0);
  vertex(ax + sin(d2) * c1,cos(d2) * c1);
  vertex(sin(d2) * c1, cos(d2) * c1+tan(d1)*ax);
  vertex(0,tan(d1)*ax)
  vertex(0,0);
  endShape();

  push();
    translate(2 * ax + sin(d2) * c1, -ay - 2 * tan(d1) * ax + cos(d2) * c1);
  
    beginShape();
    vertex(0, 0);
    vertex(0, ay + tan(d1) * ax);
    vertex(-ax, ay + 2*tan(d1) * ax);
    vertex(-ax, tan(d1) * ax);
    vertex(-ax - sin(d2) * c1, tan(d1) * ax - cos(d2) * c1);
    vertex(-sin(d2) * c1, -cos(d2) * c1);
    vertex(0,0);
    endShape();
  pop();

  translate(track, 0);
}