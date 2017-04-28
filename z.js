function Z() {
  
  push();
    translate(2 * ax + sin(d2) * c1,cos(d2)*c1-tan(d1)*ax);
    beginShape();
      vertex(0,0);
      vertex(-ax,tan(d1)*ax);
      vertex(-2*ax - sin(d2) * c1,-(ax+sin(d2)*c1)/tan(d2)+tan(d1)*ax);

      vertex(-ax - sin(d2) * c1,-(ax+sin(d2)*c1)/tan(d2));
      vertex(0,0);
    endShape();
  pop();
  



  push();
    translate(ax,-ay-tan(d1)*ax);
    beginShape();
    vertex(0,0);
    vertex(-ax,tan(d1)*ax);
    vertex(sin(d2)*c1,(ax+sin(d2)*c1)/tan(d2)+tan(d1)*ax);

    vertex(ax+sin(d2)*c1,(ax+sin(d2)*c1)/tan(d2));
    vertex(0,0);
    endShape();
  pop();
  
  push();
    translate(2 * ax + sin(d2) * c1, -ay - 2 * tan(d1) * ax + cos(d2) * c1);

    beginShape();
    vertex(0, ay+tan(d1)*ax);
    vertex(0, ay+desc+3*tan(d1)*ax - cos(d2)*c1);
    vertex(-ax, ay + desc + 4 * tan(d1) * ax - cos(d2)*c1);
    vertex(-ax, ay+2*tan(d1)*ax);
    vertex(0, ay+tan(d1)*ax);
    endShape();

    push();
    translate(-ax, ay+tan(d1)*ax-cos(d2)*c1);
      beginShape();
      vertex(0,0);
      vertex(0,-ay+(ax+sin(d2)*c1)/tan(d2)+tan(d1)*ax);
      vertex(ax,-ay+(ax+sin(d2)*c1)/tan(d2));
      vertex(ax,-tan(d1)*ax);
      vertex(0,0);
      endShape();
    pop();

    push();
      translate(-ax, ay + desc + 4 * tan(d1) * ax - cos(d2)*c1);
      beginShape();
      vertex(0, 0);
      vertex(-ax, tan(d1) * ax);
      vertex(-ax - sin(d2) * tail, tan(d1) * ax - cos(d2) * tail);
      vertex(-sin(d2) * tail, -cos(d2) * tail);
      vertex(0, 0);
      endShape();
    pop();
  pop();

  translate(track, 0);
}

/* archived

function Z() {


    push();
      translate(0,-ay-tan(d1)*ax/2);
      beginShape();
      vertex(0,                       0);
      vertex(ax,                      -tan(d1) * ax);
      vertex(2*ax + sin(d2) * c1,     -tan(d1) * ax + (ax+sin(d2)*c1)/tan(d2));
      vertex(ax+sin(d2) * c1,         (ax+sin(d2)*c1)/tan(d2));
      vertex(0,0);
      endShape();
    pop();

    push();
      translate(0,-ay/2-tan(d1)*ax/2);
      beginShape();
      vertex(0,                       0);
      
      vertex(ax,                      -tan(d1) * ax);
      vertex(2*ax + sin(d2) * c1,     -tan(d1) * ax + (ax+sin(d2)*c1)/tan(d2));
      
      vertex(ax+sin(d2) * c1,         (ax+sin(d2)*c1)/tan(d2));
      vertex(0,0);
      endShape();
    pop();
    
    push();
      translate(ax+sin(d2)*c1,-ay/2-tan(d1)*ax/2 + (ax+sin(d2)*c1)/tan(d2));
      beginShape();
      vertex(0,0);
      vertex(0,desc);
      vertex(ax,desc-tan(d1)*ax);
      vertex(ax,-tan(d1)*ax)
      vertex(0,0);
      endShape();
      
      beginShape();
      vertex(0,desc);
      vertex(-ax,desc+tan(d1)*ax);
      vertex(-ax-sin(d2)*c1,desc+tan(d1)*ax-cos(d2)*c1);
      vertex(-sin(d2)*c1,desc-cos(d2)*c1);
      vertex(0,desc);
      endShape();
    pop();

  translate(track, 0);
}

*/