function D() {

  beginShape();
  vertex(0, 0);
  vertex(0, -ay);
  vertex(ax, -ay - tan(d1) * ax);
  vertex(ax, -tan(d1) * ax);
  vertex(ax + sin(d2) * c1, -tan(d1) * ax + cos(d2) * c1);
  vertex(sin(d2) * c1, cos(d2) * c1);
  vertex(0, 0);
  endShape();

//  fill(255);
  push();
    translate(2 * ax + sin(d2) * c1, -ay - 2 * tan(d1) * ax + cos(d2) * c1);
  
    beginShape();
    
    vertex(0, 0);
    vertex(0, ay +  tan(d1) * ax);
    vertex(sin(d2)*tail, ay +  tan(d1) * ax+ cos(d2)*tail);
    vertex(sin(d2)*tail-ax, ay +  2 * tan(d1) * ax+ cos(d2)*tail);
    vertex(-ax,ay +  2 * tan(d1) * ax);

    vertex(-ax, tan(d1)*ax);
    vertex(-1.5*ax-sin(d2)*c1, tan(d1)*ax-(ax/2+sin(d2)*c1)/tan(d2));

    if(-asc+2*tan(d1)*ax-cos(d2)*c1 < tan(d1)*ax-(ax/2+sin(d2)*c1)/tan(d2)) {
          vertex(-1.5*ax-sin(d2)*c1, -asc+2*tan(d1)*ax-cos(d2)*c1);
          
          vertex(-1.5*ax-sin(d2)*c1-sin(d2)*flag, -asc+2*tan(d1)*ax-cos(d2)*c1-cos(d2)*flag);
          vertex(-.5*ax-sin(d2)*c1-sin(d2)*flag, -asc+tan(d1)*ax-cos(d2)*c1-cos(d2)*flag);
          
          vertex(-ax/2-sin(d2)*c1, -asc+tan(d1)*ax-cos(d2)*c1);
    }

    vertex(-ax/2-sin(d2)*c1, (-ax/2-sin(d2)*c1)/tan(d2));

    vertex(0, 0);
    endShape();
  pop();

  translate(track, 0);
}