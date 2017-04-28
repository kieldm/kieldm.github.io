function E() {

  beginShape();
  vertex(0, 0);
  vertex(0, -ay);
  vertex(ax, -ay - tan(d1) * ax);
  vertex(ax, 0);
  vertex(ax + sin(d2) * c1, cos(d2) * c1);
  vertex(sin(d2) * c1, cos(d2) * c1+tan(d1)*ax);
  vertex(0,tan(d1)*ax)
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
  
    push();
      translate(-ax, ay/3 + tan(d1) * ax);
      
      beginShape();
      vertex(0,0);
      vertex(-ax,tan(d1)*ax);
      vertex(-ax-sin(d2)*c1,tan(d1)*ax-cos(d2)*c1);
      vertex(-sin(d2)*c1,-cos(d2)*c1);
      vertex(0, 0);
      endShape();
    pop();

    beginShape();
      vertex(0,2*ay/3);
      vertex(0,ay+tan(d1)*ax);
      vertex(-ax,ay+2*tan(d1)*ax);
      vertex(-ax,2*ay/3+tan(d1)*ax);
      vertex(0,2*ay/3);
    endShape();
  
  pop();

  translate(track, 0);
}


/*

E v2

function E() {

  beginShape();
  vertex(0, 0);
  vertex(0, -ay);
  vertex(ax, -ay - tan(d1) * ax);
  vertex(ax, -tan(d1) * ax);
  vertex(ax + sin(d2) * c1, -tan(d1) * ax + cos(d2) * c1);
  vertex(sin(d2) * c1, cos(d2) * c1);
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
  
  fill(255);
    push();
      translate(-ax, ay/3 + tan(d1) * ax);
      
     ellipse(0,0,10,10)
      beginShape();
      vertex(0,0);
      vertex(-ax,tan(d1)*ax);
      vertex(-ax-sin(d2)*c1/2,tan(d1)*ax-cos(d2)*c1/2);
      vertex(-sin(d2)*c1/2,-cos(d2)*c1/2);
      vertex(0, 0);
      endShape();
    pop();

    beginShape();
      vertex(0,2*ay/3);
      vertex(0,ay);
      vertex(-ax,ay+tan(d1)*ax);
      vertex(-ax,2*ay/3+tan(d1)*ax);
      vertex(0,2*ay/3);
    endShape();
  
  pop();

  translate(track, 0);
}

*/