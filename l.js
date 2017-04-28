function L() {

  beginShape();
  vertex(0, 0);
  vertex(0, -ay - asc);
  vertex(-sin(d2) * flag, -ay - asc - cos(d2) * flag);
  vertex(-sin(d2) * flag + ax, -ay - asc - cos(d2) * flag - tan(d1) * ax);
  vertex(ax, -ay - asc - tan(d1) * ax);

  vertex(ax, cos(d2)*c1/2);
  vertex(ax + sin(d2) * tail, -tan(d1) * ax + cos(d2) * tail + cos(d2)*c1/2+ tan(d1)*ax);
  vertex(sin(d2) * tail, cos(d2) * tail + cos(d2)*c1/2+ tan(d1)*ax);
  vertex(0,cos(d2)*c1/2 + tan(d1)*ax);

  vertex(0, 0);
  endShape();

  translate(track-ax - sin(d2) * c1, 0);
}