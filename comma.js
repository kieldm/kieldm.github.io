function comma() {

  push();
//    translate(0,-tan(d1)*ax);
  
    beginShape();
    vertex(0, 0);
    vertex(ax, - tan(d1) * ax);
  
    vertex(ax, cos(d2)*c1/2);
    vertex(ax + sin(d2) * tail, -tan(d1) * ax + cos(d2) * tail + cos(d2)*c1/2+ tan(d1)*ax);
    vertex(sin(d2) * tail, cos(d2) * tail + cos(d2)*c1/2+ tan(d1)*ax);
    vertex(0,cos(d2)*c1/2 + tan(d1)*ax);
  
    vertex(0, 0);
    endShape();
  pop();

  translate(track-ax - sin(d2) * c1, 0);
}