function P() {

  beginShape();
  vertex(0, 0);
  vertex(0, -ay);
  
  vertex(-sin(d2) * flag, -ay - cos(d2) * flag);
  vertex(-sin(d2) * flag + ax, -ay - cos(d2) * flag - tan(d1) * ax);

  vertex(ax, -ay - tan(d1) * ax);
  vertex(ax, -tan(d1) * ax);
  vertex(ax + sin(d2) * c1, -tan(d1) * ax + cos(d2) * c1);
  vertex(sin(d2) * c1, cos(d2) * c1);
  vertex(0, 0);
  endShape();

  push();
    translate(0,tan(d1)*ax);
    beginShape();
    vertex(0,-tan(d1)*ax);
    vertex(0,0);
    vertex(0,desc+tan(d1)*ax);
    vertex(sin(d2)*tail,desc+cos(d2)*tail+tan(d1)*ax);
    vertex(sin(d2)*tail+ax,desc+cos(d2)*tail);
    vertex(ax,desc);
    vertex(ax,-tan(d1)*ax);
    vertex(ax,-2*tan(d1)*ax);
    vertex(0,-tan(d1)*ax);
    endShape();
  pop();

  push();
  translate(2 * ax + sin(d2) * c1, -ay - 2 * tan(d1) * ax + cos(d2) * c1);

    beginShape();
    vertex(0, 0);
    vertex(0, ay);
    vertex(-ax, ay + tan(d1) * ax);
    vertex(-ax, tan(d1) * ax);
    vertex(-ax - sin(d2) * c1, tan(d1) * ax - cos(d2) * c1);
    vertex(-sin(d2) * c1, -cos(d2) * c1);
    vertex(0, 0);
    endShape();
  pop();

  translate(track, 0);
}