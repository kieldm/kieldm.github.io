// address BR leg, still bad

function K() {

  beginShape();
  vertex(0, 0);
  vertex(0, -ay - asc);
  vertex(-sin(d2) * flag, -ay - asc - cos(d2) * flag);
  vertex(-sin(d2) * flag + ax, -ay - asc - cos(d2) * flag - tan(d1) * ax);
  vertex(ax, -ay - asc - tan(d1) * ax);

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
    vertex(0, ay/4);
    vertex(-ax, ay/4+tan(d1)*ax);
    vertex(-ax, tan(d1)*ax);
    vertex(-ax-sin(d2)*c1, tan(d1)*ax-cos(d2)*c1);
    vertex(-sin(d2)*c1,-cos(d2)*c1);    
    vertex(0, 0);
    endShape();
    
  if(ay +  tan(d1) * ax > ay/4+tan(d1)*(ax+sin(d2)*c1)+cos(d2)*c1-tan(d1)*ax){
    push();
      translate(-ax-sin(d2)*c1,ay/4+tan(d1)*(ax+sin(d2)*c1));
      beginShape();
      vertex(0,0);
      vertex(ax,-tan(d1)*ax);
      vertex(ax+sin(d2)*c1,-tan(d1)*ax+cos(d2)*c1);
      vertex(sin(d2)*c1,cos(d2)*c1);
      vertex(0, 0);
      endShape();
    pop();
  } else {
    push();
      translate(-ax-sin(d2)*c1,ay/4+tan(d1)*(ax));
      beginShape();
      vertex(0,0);
      vertex(ax,-tan(d1)*ax);
      vertex(ax+sin(d2)*c1,-tan(d1)*ax+cos(d2)*c1);
      vertex(sin(d2)*c1,cos(d2)*c1);
      vertex(0, 0);
      endShape();
    pop();
  }



  if(ay +  tan(d1) * ax > ay/4+tan(d1)*(ax+sin(d2)*c1)+cos(d2)*c1-tan(d1)*ax){
    push();
      translate(0,-.5);
      beginShape();
      vertex(0, ay +  tan(d1) * ax);
      vertex(sin(d2)*tail, ay +  tan(d1) * ax+ cos(d2)*tail);
      vertex(sin(d2)*tail-ax, ay +  2 * tan(d1) * ax+ cos(d2)*tail);
      vertex(-ax,ay +  2 * tan(d1) * ax);
        vertex(-ax,ay/4+tan(d1)*(ax+sin(d2)*c1)+cos(d2)*c1);
        vertex(0,ay/4+tan(d1)*(ax+sin(d2)*c1)+cos(d2)*c1-tan(d1)*ax);
      vertex(0, ay +  tan(d1) * ax);
      endShape();
    pop();
  }


  pop();

  translate(track, 0);
}