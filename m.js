function M() {

  beginShape();
  vertex(0, 0);
  vertex(0, -ay);
  vertex(-sin(d2) * c1/2, -ay - cos(d2) * c1/2);
  vertex(-sin(d2) * c1/2 + ax, -ay - cos(d2) * c1/2 - tan(d1) * ax);
  vertex(ax, -ay - tan(d1) * ax);

  vertex(ax, -tan(d1) * ax + cos(d2)*c1);
  vertex(ax + sin(d2) * tail/2, -tan(d1) * ax + cos(d2) * tail/2 + cos(d2)*c1);
  vertex(sin(d2) * tail/2, cos(d2) * tail/2 + cos(d2)*c1);
  vertex(0,cos(d2)*c1);
  
  vertex(0, 0);
  endShape();

  push();
    translate(2 * ax + sin(d2) * c1, -ay - 2 * tan(d1) * ax + cos(d2) * c1);
  
    beginShape();
    vertex(0, 0);
    vertex(0, ay);
    vertex(sin(d2)*tail/2, ay + cos(d2)*tail/2);
    vertex(sin(d2)*tail/2-ax, ay + tan(d1) * ax+ cos(d2)*tail/2);
    vertex(-ax,ay + tan(d1) * ax);

    vertex(-ax, tan(d1)*ax);
    vertex(-ax-sin(d2)*c1, tan(d1)*ax-cos(d2)*c1);
    vertex(-sin(d2)*c1,-cos(d2)*c1);
    vertex(0, 0);
    endShape();
    
    beginShape();
    vertex(0,0);
    vertex(0, -cos(d2)*c1+tan(d1)*ax);
    vertex(-ax,-cos(d2)*c1+2*tan(d1)*ax);
    vertex(-ax,+tan(d1)*ax);
    vertex(0, 0);
    endShape();
  pop();

  push();
    translate(3 * ax + 2*sin(d2) * c1, -ay - 2 * tan(d1) * ax + cos(d2) * c1);
  
    beginShape();
    vertex(0, 0);
    vertex(0, ay +  tan(d1) * ax);
    vertex(sin(d2)*tail, ay +  tan(d1) * ax+ cos(d2)*tail);
    vertex(sin(d2)*tail-ax, ay +  2 * tan(d1) * ax+ cos(d2)*tail);
    vertex(-ax,ay +  2 * tan(d1) * ax);

    vertex(-ax, tan(d1)*ax);
    vertex(-ax-sin(d2)*c1, tan(d1)*ax-cos(d2)*c1);
    vertex(-sin(d2)*c1,-cos(d2)*c1);
    vertex(0, 0);
    endShape();
  pop();

  translate(track+ ax + sin(d2) * c1, 0);
}